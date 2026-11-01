// Oneday client: picks ONE route for today from the city's places, the live weather and sunset,
// lets the user change pace or swap a stop, walks them through it, and closes the day as a postcard.
(() => {
  const D = JSON.parse(document.getElementById("oneday-data").textContent);
  const { city, places, scenario } = D;
  const $ = (id) => document.getElementById(id);
  const css = (v) => getComputedStyle(document.documentElement).getPropertyValue(v).trim();

  const SLOT_ORDER = ["coffee", "indoor", "lunch", "walk", "sunset", "dinner"];
  const PACES = [["coffee", "lunch", "sunset"], ["coffee", "indoor", "lunch", "sunset", "dinner"], SLOT_ORDER];
  const PACE_NAMES = ["Slow day", "Balanced", "Full day"];
  const bySlot = Object.fromEntries(SLOT_ORDER.map((s) => [s, places.filter((p) => p.slot === s)]));

  const state = { pace: scenario === "slow-day" ? 0 : 1, offset: {}, rain: {}, sunset: "18:00", now: null, live: 0, fromApi: false };

  // ---------- time helpers ----------
  const toMin = (hhmm) => { const [h, m] = hhmm.split(":").map(Number); return h * 60 + m; };
  const fmt = (min) => `${String(Math.floor(min / 60) % 24).padStart(2, "0")}:${String(min % 60).padStart(2, "0")}`;
  function slotTime(slot) {
    const sun = toMin(state.sunset);
    return { coffee: 570, indoor: 660, lunch: 780, walk: 900, sunset: sun - 20, dinner: Math.max(1200, sun + 60) }[slot];
  }
  const rainAt = (min) => (state.rain[Math.floor(min / 60)] ?? 0) >= 50;

  // ---------- route ----------
  const dist = (a, b) => Math.hypot(a.lat - b.lat, (a.lon - b.lon) * Math.cos(a.lat * Math.PI / 180));
  // Walk the slots in time order; each stop prefers rain-proof places when it's wet, then the one
  // closest to the previous stop. The swap button rotates through that ordering.
  function route() {
    const slots = PACES[state.pace].map((slot) => ({ slot, time: slotTime(slot) })).sort((a, b) => a.time - b.time);
    let prev = null;
    return slots.map(({ slot, time }) => {
      const list = bySlot[slot];
      if (!list.length) return null;
      const wet = rainAt(time);
      const ordered = [...list].sort((a, b) => (wet ? (b.indoor - a.indoor) : 0) || (prev ? dist(prev, a) - dist(prev, b) : 0));
      const place = ordered[(state.offset[slot] || 0) % ordered.length];
      prev = place;
      return { slot, time, place };
    }).filter(Boolean);
  }
  function km(stops) {
    let s = 0;
    for (let i = 1; i < stops.length; i++) {
      const a = stops[i - 1].place, b = stops[i].place, t = (x) => (x * Math.PI) / 180;
      const h = Math.sin(t(b.lat - a.lat) / 2) ** 2 + Math.cos(t(a.lat)) * Math.cos(t(b.lat)) * Math.sin(t(b.lon - a.lon) / 2) ** 2;
      s += 2 * 6371 * Math.asin(Math.sqrt(h));
    }
    return (s * 1.3).toFixed(1); // streets are not straight lines
  }

  // ---------- map ----------
  function project(stops, W = 350, H = 230, pad = 34) {
    const lat0 = city.lat * Math.PI / 180;
    const xs = stops.map((s) => s.place.lon * Math.cos(lat0)), ys = stops.map((s) => -s.place.lat);
    const minX = Math.min(...xs), maxX = Math.max(...xs), minY = Math.min(...ys), maxY = Math.max(...ys);
    const sc = Math.min((W - 2 * pad) / Math.max(maxX - minX, 1e-4), (H - 2 * pad) / Math.max(maxY - minY, 1e-4));
    const ox = (W - (maxX - minX) * sc) / 2, oy = (H - (maxY - minY) * sc) / 2;
    return stops.map((s, i) => ({ x: ox + (xs[i] - minX) * sc, y: oy + (ys[i] - minY) * sc }));
  }
  function pathD(pts) {
    if (pts.length < 2) return "";
    let d = `M${pts[0].x.toFixed(1)},${pts[0].y.toFixed(1)}`;
    for (let i = 1; i < pts.length; i++) {
      const a = pts[i - 1], b = pts[i];
      d += ` Q${((a.x + b.x) / 2).toFixed(1)},${((a.y + b.y) / 2 - 24).toFixed(1)} ${b.x.toFixed(1)},${b.y.toFixed(1)}`;
    }
    return d;
  }
  function drawMap(svg, stops, opt = {}) {
    const pts = project(stops), blue = css("--blue"), pink = css("--pink"), rule = css("--rule"), ink = css("--ink");
    let g = "";
    for (let x = 10; x < 350; x += 22) g += `<line x1="${x}" y1="0" x2="${x + 30}" y2="230" stroke="${rule}"/>`;
    for (let y = 14; y < 230; y += 26) g += `<line x1="0" y1="${y}" x2="350" y2="${y - 8}" stroke="${rule}"/>`;
    const cx = pts.reduce((s, p) => s + p.x, 0) / pts.length, cy = pts.reduce((s, p) => s + p.y, 0) / pts.length;
    [120, 92, 64].forEach((r, i) => (g += `<ellipse cx="${cx}" cy="${cy}" rx="${r * 1.35}" ry="${r}" fill="${blue}" opacity="${0.06 + i * 0.03}"/>`));
    const d = pathD(pts);
    if (opt.line) {
      g += `<path d="${d}" fill="none" stroke="${blue}" stroke-width="7" stroke-linecap="round" transform="translate(4 3)" opacity=".85"/>`;
      g += `<path d="${d}" fill="none" stroke="${pink}" stroke-width="7" stroke-linecap="round" style="mix-blend-mode:multiply"/>`;
      pts.forEach((p) => (g += `<circle cx="${p.x}" cy="${p.y}" r="5" fill="${blue}"/>`));
    } else {
      g += `<path d="${d}" fill="none" stroke="${pink}" stroke-width="3" stroke-dasharray="2 7" stroke-linecap="round"/>`;
      pts.forEach((p, i) => {
        const act = opt.active === i, done = opt.active != null && i < opt.active;
        g += `<circle cx="${p.x}" cy="${p.y}" r="${act ? 13 : 10}" fill="${done ? rule : pink}" stroke="${act ? ink : "none"}" stroke-width="2"/>`;
        g += `<text x="${p.x}" y="${p.y + 4}" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="11" font-weight="600" fill="#fff">${i + 1}</text>`;
      });
    }
    svg.innerHTML = g;
  }

  // ---------- plan view ----------
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  function weatherTags() {
    const hrs = Object.keys(state.rain).map(Number).filter((h) => h >= 9 && h <= 22 && state.rain[h] >= 50);
    const tags = [];
    if (!state.fromApi && scenario === "live") tags.push(["Weather unavailable", ""]);
    else tags.push([hrs.length ? `Rain likely ${fmt(hrs[0] * 60)}–${fmt((hrs[hrs.length - 1] + 1) * 60)}` : "Dry all day", ""]);
    tags.push([`Sunset ${state.sunset}`, "p"]);
    return tags.map(([t, c]) => `<span class="tag ${c}">${esc(t)}</span>`).join("");
  }
  function lede() {
    const wetMorning = [10, 11, 12].some((h) => (state.rain[h] ?? 0) >= 50);
    const wetLate = [15, 16, 17, 18].some((h) => (state.rain[h] ?? 0) >= 50);
    if (wetMorning && !wetLate) return "Indoors while it rains, outside once it clears, the best view at sunset. Here's today.";
    if (wetMorning || wetLate) return "A wet one. Mostly under a roof, with one view if the clouds break. Here's today.";
    return "A dry day. Coffee first, a long walk after lunch, the best view at sunset. Here's today.";
  }
  function renderPlan() {
    const stops = route();
    $("wx").innerHTML = weatherTags();
    $("lede").textContent = lede();
    drawMap($("map"), stops);
    $("paceLbl").textContent = PACE_NAMES[state.pace];
    $("stops").innerHTML = stops.map((s, i) => {
      const many = bySlot[s.slot].length > 1;
      const wet = rainAt(s.time) && s.place.indoor ? '<span class="rain">indoors</span>' : "";
      return `<li class="stop"><span class="t">${fmt(s.time)}</span><div><b><span class="n">${i + 1}</span>${esc(s.place.name)}</b>${wet}<small>${esc(s.place.blurb)}</small></div>${many ? `<button class="swap" data-slot="${s.slot}" aria-label="Another ${s.slot} place">↻</button>` : "<span></span>"}</li>`;
    }).join("");
    $("stops").querySelectorAll(".swap").forEach((b) => (b.onclick = () => { state.offset[b.dataset.slot] = (state.offset[b.dataset.slot] || 0) + 1; renderPlan(); }));
    $("sum").textContent = `${stops.length} stops · ${km(stops)} km`;
  }

  // ---------- live + end ----------
  const show = (id) => ["plan", "live", "end"].forEach((v) => ($(v).hidden = v !== id));
  function renderLive() {
    const stops = route(), s = stops[state.live], nx = stops[state.live + 1];
    $("liveCount").textContent = `${state.live + 1} of ${stops.length}`;
    $("prog").style.width = `${(state.live / stops.length) * 100}%`;
    $("nowName").textContent = s.place.name;
    $("nowNote").textContent = `${s.place.blurb} ${nx ? `Next: ${nx.place.name}, ${fmt(nx.time)}.` : "Last stop. Then the day closes."}`;
    $("nowMap").href = s.place.osm;
    drawMap($("map2"), stops, { active: state.live });
  }
  function renderEnd() {
    const stops = route();
    drawMap($("map3"), stops, { line: true });
    $("sStops").textContent = stops.length;
    $("sKm").textContent = km(stops);
    const d = state.now || new Date();
    $("stamp").innerHTML = `${d.getDate()}·${["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII"][d.getMonth()]}<br>${d.getFullYear()}`;
  }
  function savePostcard() {
    const svg = $("map3"), W = 1200, H = 1500;
    const c = document.createElement("canvas"); c.width = W; c.height = H;
    const x = c.getContext("2d");
    x.fillStyle = "#f8f9fa"; x.fillRect(0, 0, W, H);
    x.fillStyle = "#0078bf"; x.font = "800 150px 'Bricolage Grotesque', sans-serif"; x.fillText(city.name, 80, 220);
    x.fillStyle = "#5d6683"; x.font = "500 34px 'IBM Plex Mono', monospace";
    x.fillText(`${$("sStops").textContent} stops · ${$("sKm").textContent} km · ${new Date().toDateString()}`, 84, 290);
    const xml = new XMLSerializer().serializeToString(svg).replace("<svg", '<svg xmlns="http://www.w3.org/2000/svg" width="1040" height="683"');
    const img = new Image();
    img.onload = () => {
      x.drawImage(img, 80, 380, 1040, 683);
      x.fillStyle = "#1b2a6b"; x.font = "500 30px 'IBM Plex Mono', monospace"; x.fillText("oneday", 84, H - 80);
      c.toBlob(async (blob) => {
        const file = new File([blob], `oneday-${city.id}.png`, { type: "image/png" });
        if (navigator.canShare && navigator.canShare({ files: [file] })) { try { await navigator.share({ files: [file], title: `One day in ${city.name}` }); return; } catch (_) {} }
        const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = file.name; a.click();
      });
    };
    img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(xml);
  }

  // ---------- weather ----------
  async function loadWeather() {
    if (scenario === "rainy-day") { for (let h = 0; h < 24; h++) state.rain[h] = h >= 10 && h <= 14 ? 80 : 10; return; }
    if (scenario !== "live") { for (let h = 0; h < 24; h++) state.rain[h] = 0; return; }
    try {
      const u = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&hourly=precipitation_probability&daily=sunset&timezone=auto&forecast_days=1`;
      const r = await fetch(u); if (!r.ok) throw 0;
      const j = await r.json();
      j.hourly.time.forEach((t, i) => (state.rain[+t.slice(11, 13)] = j.hourly.precipitation_probability[i] ?? 0));
      state.sunset = j.daily.sunset[0].slice(11, 16);
      state.now = new Date(Date.now() + (j.utc_offset_seconds * 1000) + new Date().getTimezoneOffset() * 60000);
      state.fromApi = true;
      $("clock").textContent = `${state.now.toDateString().slice(0, 10)} · ${fmt(state.now.getHours() * 60 + state.now.getMinutes())} local`;
    } catch (_) { /* keep the dry default */ }
  }

  // ---------- wire ----------
  $("pace").value = state.pace;
  $("pace").oninput = (e) => { state.pace = +e.target.value; renderPlan(); };
  $("start").onclick = () => { state.live = 0; show("live"); renderLive(); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const advance = () => { const n = route().length; if (state.live < n - 1) { state.live++; renderLive(); } else { $("prog").style.width = "100%"; setTimeout(() => { show("end"); renderEnd(); }, 300); } };
  $("here").onclick = advance; $("skip").onclick = advance;
  $("again").onclick = () => { state.offset = {}; show("plan"); renderPlan(); };
  $("save").onclick = savePostcard;
  renderPlan();
  loadWeather().then(renderPlan);
})();
