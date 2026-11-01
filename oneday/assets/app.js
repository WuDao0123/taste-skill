// Oneday city app. Reads the hour, the weather and the sunset for the city, picks ONE route,
// lets you change the pace, swap a stop or ask for another day, walks you through it, and closes
// the day as a postcard that is kept in your atlas.
(() => {
  const D = JSON.parse(document.getElementById("oneday-data").textContent);
  const { city, places, scenario } = D;
  const LIVE = scenario === "live";
  const O = window.ONEDAY, t = O.t, MK = window.MapKit, P = MK.proj(city);
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  const SLOT_ORDER = ["coffee", "indoor", "lunch", "walk", "sunset", "dinner"];
  const PACES = [["coffee", "lunch", "sunset"], ["coffee", "indoor", "lunch", "sunset", "dinner"], SLOT_ORDER];
  const DUR = { coffee: 40, indoor: 90, lunch: 75, walk: 75, sunset: 45, dinner: 90 };
  const DROP = ["walk", "indoor", "coffee", "lunch", "dinner", "sunset"]; // trimmed first when time is short
  const BACK = [null, 900, 1020, 1140];
  places.forEach((p) => (p.xy = P(p)));
  const bySlot = Object.fromEntries(SLOT_ORDER.map((s) => [s, places.filter((p) => p.slot === s)]));

  const state = { day: 0, pace: scenario === "slow-day" ? 0 : scenario === "sunny-day" ? 2 : 1, back: 0, offset: {}, seed: 0, mode: "plan", live: 0, skipped: new Set(), focus: null, autoTomorrow: false };

  // ---------- time, in the city's own zone ----------
  const fmt = (min) => `${String(Math.floor(min / 60) % 24).padStart(2, "0")}:${String(Math.round(min) % 60).padStart(2, "0")}`;
  const toMin = (hhmm) => { const [h, m] = hhmm.split(":").map(Number); return h * 60 + m; };
  const parts = (ms) => Object.fromEntries(new Intl.DateTimeFormat("en-US", { timeZone: city.tz, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(new Date(ms)).map((p) => [p.type, p.value]));
  const nowP = parts(Date.now());
  let nowMin = +nowP.hour * 60 + +nowP.minute;
  const dateOf = (offset) => { const d = new Date(Date.UTC(+nowP.year, +nowP.month - 1, +nowP.day + offset, 12)); return d; };
  const dateLabel = (d, opt = { weekday: "short", day: "numeric", month: "short" }) => new Intl.DateTimeFormat(O.lang === "zh" ? "zh-CN" : O.lang, { ...opt, timeZone: "UTC" }).format(d);
  function sunsetMin(d) { // NOAA sunrise equation; used until (or instead of) the weather service's sunset
    const J = d.getTime() / 864e5 + 2440587.5, n = Math.ceil(J - 2451545 + 0.0008), Js = n - city.lon / 360;
    const r = Math.PI / 180, M = (357.5291 + 0.98560028 * Js) % 360, C = 1.9148 * Math.sin(M * r) + 0.02 * Math.sin(2 * M * r) + 0.0003 * Math.sin(3 * M * r);
    const lam = (M + C + 282.9372) % 360, Jt = 2451545 + Js + 0.0053 * Math.sin(M * r) - 0.0069 * Math.sin(2 * lam * r);
    const dec = Math.asin(Math.sin(lam * r) * Math.sin(23.44 * r));
    const w0 = Math.acos((Math.sin(-0.833 * r) - Math.sin(city.lat * r) * Math.sin(dec)) / (Math.cos(city.lat * r) * Math.cos(dec))) / r;
    const p = parts((Jt + w0 / 360 - 2440587.5) * 864e5);
    return +p.hour * 60 + +p.minute;
  }

  // ---------- weather ----------
  const wx = { live: false, days: [0, 1].map((o) => { const d = dateOf(o); return { date: d, rain: Array(24).fill(0), temp: null, tmax: null, tmin: null, sunset: sunsetMin(d) }; }) };
  if (scenario === "rainy-day") wx.days.forEach((d) => d.rain.forEach((_, h) => (d.rain[h] = h >= 10 && h <= 13 ? 80 : h === 9 || h === 14 ? 35 : 5)));
  async function loadWeather() {
    if (!LIVE) return;
    try {
      const u = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&hourly=precipitation_probability,temperature_2m&daily=sunset,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=2${city.f ? "&temperature_unit=fahrenheit" : ""}`;
      const r = await fetch(u); if (!r.ok) throw 0;
      const j = await r.json();
      j.hourly.time.forEach((ts, i) => { const di = j.daily.time.indexOf(ts.slice(0, 10)); if (di < 0 || di > 1) return; const h = +ts.slice(11, 13);
        wx.days[di].rain[h] = j.hourly.precipitation_probability[i] ?? 0; (wx.days[di].temps = wx.days[di].temps || [])[h] = j.hourly.temperature_2m[i]; });
      wx.days.forEach((d, i) => { d.sunset = toMin(j.daily.sunset[i].slice(11, 16)); d.tmax = j.daily.temperature_2m_max[i]; d.tmin = j.daily.temperature_2m_min[i]; });
      const local = new Date(Date.now() + j.utc_offset_seconds * 1000); nowMin = local.getUTCHours() * 60 + local.getUTCMinutes();
      wx.live = true;
    } catch (_) { wx.live = false; }
  }

  // ---------- the route ----------
  function slotTime(slot, day) {
    const sun = wx.days[day].sunset;
    const walk = Math.max(860, Math.min(900, sun - 115));
    return { coffee: 570, indoor: 660, lunch: 780, walk, sunset: sun - 25, dinner: Math.min(Math.max(1200, sun + 50), 1320) }[slot];
  }
  const rainAt = (min, day) => (wx.days[day].rain[Math.floor(min / 60) % 24] ?? 0) >= 50;
  function route() {
    const day = state.day, start = LIVE && day === 0 ? nowMin : 0, back = BACK[state.back];
    const ok = (s) => slotTime(s, day) >= start - 10 && (!back || slotTime(s, day) + DUR[s] <= back);
    const want = PACES[state.pace];
    let slots = want.filter(ok);
    if (slots.length < want.length) { slots = SLOT_ORDER.filter(ok); while (slots.length > want.length) slots.splice(slots.indexOf(DROP.find((x) => slots.includes(x))), 1); }
    slots.sort((a, b) => slotTime(a, day) - slotTime(b, day));
    slots = slots.filter((x) => bySlot[x].length);
    // Rain-proof places only for wet slots (when the city has them), then every combination ranked by
    // the total walk: the shortest is the day, "another day" steps down the ranking.
    const cands = slots.map((x) => { const wet = rainAt(slotTime(x, day), day), dry = bySlot[x].filter((p) => p.indoor); return wet && dry.length ? dry : bySlot[x]; });
    const dist = (a, b) => Math.hypot(a.xy[0] - b.xy[0], a.xy[1] - b.xy[1]);
    const combos = [];
    (function walk(i, pick, total) {
      if (i === slots.length) { combos.push({ pick, total }); return; }
      for (const p of cands[i]) walk(i + 1, [...pick, p], total + (i ? dist(pick[i - 1], p) : 0));
    })(0, [], 0);
    combos.sort((a, b) => a.total - b.total);
    const pick = combos.length ? combos[state.seed % combos.length].pick.slice() : [];
    slots.forEach((x, i) => { // a swap rotates one stop through the places that fit best between its neighbours
      const k = state.offset[x] || 0; if (!k) return;
      const around = (p) => (pick[i - 1] ? dist(pick[i - 1], p) : 0) + (pick[i + 1] ? dist(p, pick[i + 1]) : 0);
      const order = [...bySlot[x]].sort((a, b) => around(a) - around(b));
      pick[i] = order[(order.indexOf(pick[i]) + k) % order.length];
    });
    return slots.map((slot, i) => { const time = slotTime(slot, day); return { slot, time, place: pick[i], wet: rainAt(time, day) && pick[i].indoor }; });
  }
  function legInfo(a, b) {
    const k = MK.km(a, b), walkMin = (k / 4.8) * 60;
    return walkMin <= 35 ? { k, text: t("walk", { m: Math.max(2, Math.round(walkMin)) }) } : { k, text: t("ride", { m: Math.round(8 + (k / 20) * 60) }) };
  }
  const totalKm = (stops) => stops.slice(1).reduce((s, x, i) => s + MK.km(stops[i].place, x.place), 0);

  // ---------- the map ----------
  const svg = $("map"), wrap = $("mapwrap"), mk = $("markers");
  let mapData = null, vb = null, anim = null, markers = [];
  svg.innerHTML = `<defs>${MK.dotsDef("dots", 40)}</defs><g id="base"></g><g id="rt"></g>`;
  const dotsPat = svg.querySelector("#dots");
  const box = () => { const r = svg.getBoundingClientRect(); return [r.width || 400, r.height || 500]; };
  function place() { // position markers and keep pixel-sized things pixel-sized
    if (!vb || vb.some((n) => !isFinite(n))) return;
    const [W] = box(), s = vb[2] / W;
    svg.setAttribute("viewBox", vb.map((n) => n.toFixed(1)).join(" "));
    const ds = 7 * s; dotsPat.setAttribute("width", ds); dotsPat.setAttribute("height", ds);
    const c = dotsPat.firstChild; c.setAttribute("cx", ds / 2); c.setAttribute("cy", ds / 2); c.setAttribute("r", ds * 0.2);
    const g = svg.querySelector(".r-ghost"); if (g) g.setAttribute("transform", `translate(${2.4 * s} ${1.8 * s})`);
    const ml = svg.querySelector(".r-main"); if (ml) ml.style.strokeWidth = 4.2 * s; // drawn in map units so the draw-on animation can use pathLength
    markers.forEach((m) => { m.el.style.left = `${(m.xy[0] - vb[0]) / s}px`; m.el.style.top = `${(m.xy[1] - vb[1]) / s}px`; });
  }
  function flyTo(target, ms = 1100) {
    if (target.some((n) => !isFinite(n))) return;
    cancelAnimationFrame(anim);
    if (!vb || reduce) { vb = target; place(); return; }
    const from = vb.slice(), t0 = performance.now(), ease = (x) => 1 - Math.pow(1 - x, 3);
    const step = (now) => { const k = ease(Math.min(1, (now - t0) / ms)); vb = from.map((v, i) => v + (target[i] - v) * k); place(); if (k < 1) anim = requestAnimationFrame(step); };
    anim = requestAnimationFrame(step);
  }
  function view(pts, minSpan = 900) {
    const [W, H] = box(), wide = W > 640;
    wrap.classList.toggle("wide", wide && state.mode === "plan" && state.focus == null);
    const titleH = wrap.querySelector(".maphead").getBoundingClientRect().height;
    return MK.clamp(MK.fit(pts, W, H, { t: titleH + 24, b: 56, l: 56, r: wide ? 220 : state.mode === "live" ? 140 : 56 }, minSpan), mapData && mapData.frame);
  }
  function drawRoute(stops, { done = -1, animate = true } = {}) {
    const pts = stops.map((s) => s.place.xy);
    const g = svg.querySelector("#rt");
    const full = MK.curve(pts);
    let h = `<path class="r-case" vector-effect="non-scaling-stroke" d="${full}"/>`;
    if (done < 0) h += `<path class="r-ghost" vector-effect="non-scaling-stroke" d="${full}"/><path class="r-line r-main${animate && !reduce ? " r-draw" : ""}" pathLength="1" d="${full}"/>`;
    else { h += `<path class="r-todo" vector-effect="non-scaling-stroke" d="${MK.curve(pts, Math.max(done, 0))}"/>`; if (done > 0) h += `<path class="r-line" vector-effect="non-scaling-stroke" d="${MK.curve(pts, 0, done)}"/>`; }
    g.innerHTML = h;
    mk.innerHTML = ""; markers = stops.map((s, i) => {
      const el = document.createElement("button"); el.className = "mk"; el.type = "button";
      el.style.animationDelay = animate && !reduce ? `${0.25 + i * 0.12}s` : "0s";
      el.innerHTML = `<b>${i + 1}</b><span>${esc(s.place.name)}</span>`;
      el.setAttribute("aria-label", `${i + 1}. ${s.place.name}`);
      el.onclick = () => focusStop(i);
      mk.appendChild(el); return { el, xy: s.place.xy };
    });
    place();
  }
  function markState(active, doneUpTo = -1) { markers.forEach((m, i) => { m.el.classList.toggle("on", i === active); m.el.classList.toggle("done", i < doneUpTo || state.skipped.has(i) && i < doneUpTo); }); }

  // ---------- the day ribbon ----------
  function ribbon(stops) {
    const el = $("ribbon"), W = Math.max(260, el.getBoundingClientRect().width || 400), day = wx.days[state.day];
    const H0 = 7, H1 = 24, x = (min) => 6 + ((min / 60 - H0) / (H1 - H0)) * (W - 12), base = 50;
    let s = `<line class="rb-tick" x1="6" y1="${base}" x2="${W - 6}" y2="${base}"/>`;
    for (let h = H0; h < H1; h++) {
      const p = day.rain[h] || 0;
      s += `<line class="rb-tick" x1="${x(h * 60)}" y1="${base}" x2="${x(h * 60)}" y2="${base + 3}"/>`;
      if (p >= 15) { const hh = (p / 100) * 38; s += `<rect class="rb-rain" x="${(x(h * 60) + 1).toFixed(1)}" y="${(base - hh).toFixed(1)}" width="${(x(60) - x(0) - 2).toFixed(1)}" height="${hh.toFixed(1)}" rx="1.5" opacity="${(0.25 + p / 140).toFixed(2)}"/>`; }
    }
    for (const h of [9, 12, 15, 18, 21]) s += `<text class="rb-hour" x="${x(h * 60)}" y="${base + 20}" text-anchor="middle">${h}:00</text>`;
    const sx = x(day.sunset); s += `<path class="rb-sun" d="M${sx - 7} ${base}a7 7 0 0 1 14 0z"/>`;
    if (LIVE && state.day === 0 && nowMin / 60 > H0 && nowMin / 60 < H1) { const nx = x(nowMin); s += `<line class="rb-now" x1="${nx}" y1="4" x2="${nx}" y2="${base + 4}"/><text class="rb-nowt" x="${nx + 4}" y="10">${esc(t("now"))}</text>`; }
    stops.forEach((st, i) => { const cx = x(st.time); s += `<circle class="rb-stop" cx="${cx}" cy="${base}" r="8" stroke="var(--paper-hi)" stroke-width="2"/><text class="rb-stopn" x="${cx}" y="${base + 3}" text-anchor="middle">${i + 1}</text>`; });
    el.setAttribute("viewBox", `0 0 ${W} 78`); el.innerHTML = s;
    $("lgSun").innerHTML = `<i style="background:var(--pink);border-radius:7px 7px 0 0;height:5px;vertical-align:1px"></i>${esc(t("lgSun", { t: fmt(day.sunset) }))}`;
  }

  // ---------- plan ----------
  function kicker() {
    const d = wx.days[state.day], bits = [dateLabel(d.date)];
    if (LIVE && state.day === 0) bits.push(fmt(nowMin));
    const temp = state.day === 0 && d.temps ? d.temps[Math.floor(nowMin / 60)] : d.tmax;
    if (wx.live && temp != null) bits.push(`${Math.round(temp)}°${city.f ? "F" : "C"}`);
    const wetH = d.rain.map((p, h) => (h >= 8 && h <= 22 && p >= 50 ? h : -1)).filter((h) => h >= 0);
    if (LIVE && !wx.live) bits.push(t("noWx"));
    else bits.push(wetH.length ? t("rain", { a: fmt(wetH[0] * 60), b: fmt((wetH.at(-1) + 1) * 60) }) : t("dry"));
    return bits.join(" · ");
  }
  function lede() {
    const r = wx.days[state.day].rain, any = (a, b) => r.slice(a, b + 1).some((p) => p >= 50);
    const m = any(9, 13), a = any(14, 20);
    const body = t(!m && !a ? "ledeDry" : m && !a ? "ledeClears" : !m && a ? "ledeLate" : "ledeWet");
    const pre = state.autoTomorrow ? t("tooLate") : state.day === 1 ? t("tomorrowIs") : LIVE && nowMin > 690 ? t("restOf", { t: fmt(nowMin) }) : "";
    return (pre ? `${esc(pre)} ` : "") + body;
  }
  const SWAP = `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13.5 6.5A5.5 5.5 0 0 0 3.2 4.6M2.5 9.5a5.5 5.5 0 0 0 10.3 1.9"/><path d="M3 2v3h3M13 14v-3h-3"/></svg>`;
  function renderPlan(opts = {}) {
    let stops = route();
    if (LIVE && state.day === 0 && !stops.length) { state.day = 1; state.autoTomorrow = true; stops = route(); }
    $("kicker").textContent = kicker();
    $("lede").innerHTML = lede();
    ribbon(stops);
    const pressed = (sel, attr, v) => document.querySelectorAll(sel).forEach((b) => b.setAttribute("aria-pressed", String(+b.dataset[attr] === v)));
    pressed("#paceSeg button", "pace", state.pace); if (LIVE) pressed("#daySeg button", "day", state.day);
    if ($("backBy")) { const b = BACK[state.back]; $("backBy").textContent = b ? t("backBy", { t: fmt(b) }) : t("backAny"); $("backBy").setAttribute("aria-pressed", String(!!b)); }
    let h = "";
    stops.forEach((s, i) => {
      if (i) h += `<li class="leg" aria-hidden="true"><span>${esc(legInfo(stops[i - 1].place, s.place).text)}</span></li>`;
      const chips = [s.wet ? `<span class="chip rain">☂ ${esc(t("indoors"))}</span>` : "", s.slot === "sunset" ? `<span class="chip sun">${esc(t("atSunset"))} ${fmt(wx.days[state.day].sunset)}</span>` : ""].join("");
      h += `<li class="stop${state.focus === i ? " on" : ""}" data-i="${i}" style="animation-delay:${i * 0.05}s"><span class="t">${fmt(s.time)}<i>${esc(t("slot." + s.slot))}</i></span><div><h3><span class="n">${i + 1}</span>${esc(s.place.name)}</h3><p>${esc(s.place.blurb)}</p>${chips ? `<div class="chipline">${chips}</div>` : ""}</div>${bySlot[s.slot].length > 1 ? `<button class="swap" data-slot="${s.slot}" aria-label="${esc(t("swap", { slot: t("slot." + s.slot).toLowerCase() }))}">${SWAP}</button>` : "<span></span>"}</li>`;
    });
    $("stops").innerHTML = h;
    $("stops").querySelectorAll(".stop").forEach((li) => (li.onclick = () => focusStop(+li.dataset.i)));
    $("stops").querySelectorAll(".swap").forEach((b) => (b.onclick = (e) => { e.stopPropagation(); state.offset[b.dataset.slot] = (state.offset[b.dataset.slot] || 0) + 1; renderPlan({ keepFocus: true }); }));
    $("sum").textContent = `${t("stopsN", { n: stops.length })} · ${t("km", { k: totalKm(stops).toFixed(1) })}`;
    if (!opts.keepFocus) state.focus = null;
    state.stops = stops;
    if (mapData) { drawRoute(stops, { animate: opts.animate !== false }); if (state.focus != null) focusStop(state.focus, true); else { $("fit").hidden = true; flyTo(view(stops.map((s) => s.place.xy)), vb ? 1000 : 0); markState(-1); } }
  }
  function focusStop(i, force) {
    if (state.mode !== "plan") return;
    if (state.focus === i && !force) { state.focus = null; $("fit").hidden = true; markState(-1); document.querySelectorAll(".stop").forEach((li) => li.classList.remove("on")); flyTo(view(state.stops.map((s) => s.place.xy))); return; }
    state.focus = i; const s = state.stops;
    const pts = [s[i - 1], s[i], s[i + 1]].filter(Boolean).map((x) => x.place.xy);
    flyTo(view(pts)); markState(i); $("fit").hidden = false;
    document.querySelectorAll(".stop").forEach((li) => li.classList.toggle("on", +li.dataset.i === i));
    if (innerWidth <= 1000 && !force) wrap.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  }

  // ---------- walking the day ----------
  const show = (id) => { state.mode = id; $("fit").hidden = true; ["plan", "live", "end"].forEach((v) => ($(v).hidden = v !== id)); };
  const dirs = (p) => /iPhone|iPad|Macintosh/.test(navigator.userAgent) && "ontouchend" in document ? `https://maps.apple.com/?daddr=${p.lat},${p.lon}&dirflg=w` : `https://www.google.com/maps/dir/?api=1&destination=${p.lat},${p.lon}&travelmode=walking`;
  function renderLive() {
    const stops = state.stops, i = state.live, s = stops[i], nx = stops[i + 1];
    $("prog").innerHTML = stops.map((_, k) => `<i class="${k < i ? "done" : k === i ? "cur" : ""}"></i>`).join("");
    $("liveK").textContent = t("stopOf", { i: i + 1, n: stops.length, t: fmt(s.time) });
    $("nowName").textContent = s.place.name;
    $("nowBlurb").textContent = s.place.blurb;
    $("dirs").href = dirs(s.place);
    $("nextBox").innerHTML = nx ? `<div><p class="kicker">${esc(t("next"))} · ${fmt(nx.time)} · ${esc(legInfo(s.place, nx.place).text)}</p><b>${esc(nx.place.name)}</b></div>` : `<div><p class="kicker">${esc(t("next"))}</p><b>${esc(t("last"))}</b></div>`;
    drawRoute(stops, { done: i, animate: false }); markState(i, i);
    flyTo(view((i ? [stops[i - 1], s] : [s, nx]).filter(Boolean).map((x) => x.place.xy), 1400));
  }
  function advance(skip) {
    if (skip) state.skipped.add(state.live);
    if (state.live < state.stops.length - 1) { state.live++; renderLive(); window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" }); }
    else finish();
  }

  // ---------- closing: postcard + atlas ----------
  const walked = () => state.stops.filter((_, i) => !state.skipped.has(i));
  function pcSVG(stops, W, H, { inline = false, title = 0 } = {}) {
    const pts = stops.map((s) => s.place.xy), v = MK.clamp(MK.fit(pts, W, H, { t: title || H * 0.3, b: H * 0.16, l: W * 0.1, r: W * 0.1 }, 900), mapData && mapData.frame), s = v[2] / W;
    const d = MK.curve(pts), r = 15 * s;
    return { v, body: `${inline ? `<defs>${MK.dotsDef("dots2", 8 * s)}</defs>${MK.base(mapData, "dots2")}` : `<use href="#base"/>`}<path class="r-case" vector-effect="non-scaling-stroke" d="${d}"/><path class="r-ghost" vector-effect="non-scaling-stroke" transform="translate(${2.5 * s} ${2 * s})" d="${d}"/><path class="r-line" vector-effect="non-scaling-stroke" d="${d}"/>${pts.map((p, i) => `<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="${r.toFixed(1)}" fill="#ff3d97" stroke="#fbf9f4" stroke-width="2.5" vector-effect="non-scaling-stroke"/>${inline ? "" : `<text x="${p[0].toFixed(1)}" y="${(p[1] + r * 0.36).toFixed(1)}" text-anchor="middle" font-family="Geist Mono, monospace" font-weight="600" font-size="${(r * 1.05).toFixed(1)}" fill="#fff">${i + 1}</text>`}`).join("")}` };
  }
  function finish() {
    const stops = walked().length ? walked() : state.stops;
    show("end");
    $("closing").innerHTML = t("closing");
    const d = wx.days[state.day].date;
    const k = totalKm(stops), hrs = Math.max(1, Math.round((stops.at(-1).time + DUR[stops.at(-1).slot] - stops[0].time) / 60));
    $("sStops").textContent = stops.length; $("sKm").textContent = k.toFixed(1); $("sHrs").textContent = hrs;
    $("stamp").innerHTML = `${d.getUTCDate()} · ${["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"][d.getUTCMonth()]}<br>${d.getUTCFullYear()}`;
    $("pcK").textContent = `${dateLabel(d, { weekday: "long", day: "numeric", month: "long" })} · ${stops.length} · ${k.toFixed(1)} km`;
    const pc = $("pcMap"), r = pc.getBoundingClientRect(), W = r.width || 420, H = r.height || 280, out = pcSVG(stops, W, H, { title: H * 0.34 });
    pc.setAttribute("viewBox", out.v.join(" ")); pc.innerHTML = out.body;
    $("pcList").innerHTML = stops.map((s) => `<li><span>${fmt(s.time)}</span>${esc(s.place.name)}</li>`).join("");
    drawRoute(stops, { animate: true }); markState(-1); flyTo(view(stops.map((s) => s.place.xy)));
    // keep it in the atlas (one card per city per day)
    const key = `${city.id}:${d.toISOString().slice(0, 10)}`;
    const entry = { key, city: city.id, name: city.name, date: d.toISOString().slice(0, 10), km: +k.toFixed(1), hrs, stops: stops.map((s) => ({ n: s.place.name, lat: s.place.lat, lon: s.place.lon, t: fmt(s.time) })) };
    const atlas = O.atlas().filter((e) => e.key !== key); atlas.unshift(entry);
    O.store.set("oneday.atlas", JSON.stringify(atlas.slice(0, 365))); O.updateAtlasN();
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }
  async function savePostcard() {
    const btn = $("save"), label = btn.querySelector("span"), was = label.textContent; label.textContent = t("saving");
    try {
      await Promise.all(['400 120px "Instrument Serif"', 'italic 400 40px "Instrument Serif"', '600 24px "Geist Mono"'].map((f) => document.fonts.load(f).catch(() => {})));
      const stops = walked().length ? walked() : state.stops, d = wx.days[state.day].date;
      const C = document.createElement("canvas"), W = 1800, H = 1200, MW = 1060; C.width = W; C.height = H;
      const x = C.getContext("2d");
      const PAPER = "#f4f0e7", INK = "#181c31", BLUE = "#2c54c6", PINK = "#ff3d97", MUTE = "#76757e";
      x.fillStyle = PAPER; x.fillRect(0, 0, W, H);
      const out = pcSVG(stops, MW, H, { inline: true, title: 250 });
      const css = `.m-park{fill:#f7d9e6}.m-water{fill:#d3dbef}.dot{fill:${BLUE};opacity:.28}.m-river{fill:none;stroke:#d3dbef;stroke-width:3}.m-minor{fill:none;stroke:${BLUE};stroke-width:1;opacity:.42}.m-path{fill:none;stroke:${BLUE};stroke-width:1;opacity:.3;stroke-dasharray:3 4}.m-rail{fill:none;stroke:${BLUE};stroke-width:1.5;opacity:.6;stroke-dasharray:8 5}.m-major{fill:none;stroke:${BLUE};stroke-width:2.2;opacity:.8}.r-case{fill:none;stroke:${PAPER};stroke-width:20;stroke-linecap:round;stroke-linejoin:round}.r-line{fill:none;stroke:${PINK};stroke-width:8;stroke-linecap:round;stroke-linejoin:round}.r-ghost{fill:none;stroke:${BLUE};stroke-width:8;stroke-linecap:round;opacity:.35}`;
      const src = `<svg xmlns="http://www.w3.org/2000/svg" width="${MW}" height="${H}" viewBox="${out.v.join(" ")}"><style>${css}</style>${out.body}</svg>`;
      const img = await new Promise((res, rej) => { const im = new Image(); im.onload = () => res(im); im.onerror = rej; im.src = URL.createObjectURL(new Blob([src], { type: "image/svg+xml" })); });
      x.drawImage(img, 0, 0, MW, H);
      const s = out.v[2] / MW; x.textAlign = "center"; x.fillStyle = "#fff"; x.font = '600 24px "Geist Mono", monospace';
      stops.forEach((st, i) => x.fillText(String(i + 1), (st.place.xy[0] - out.v[0]) / s, (st.place.xy[1] - out.v[1]) / s + 8));
      // map title, riso-offset
      x.textAlign = "left"; x.font = '400 128px "Instrument Serif", Georgia, serif';
      x.globalAlpha = 0.55; x.fillStyle = PINK; x.fillText(city.name, 66, 156); x.globalAlpha = 1; x.fillStyle = INK; x.fillText(city.name, 60, 150);
      // back of the card
      x.strokeStyle = "rgba(24,28,49,.22)"; x.lineWidth = 2; x.beginPath(); x.moveTo(MW + 1, 0); x.lineTo(MW + 1, H); x.stroke();
      const L = MW + 70;
      x.fillStyle = MUTE; x.font = '600 22px "Geist Mono", monospace'; x.fillText(dateLabel(d, { weekday: "long", day: "numeric", month: "long", year: "numeric" }).toUpperCase(), L, 120);
      x.font = 'italic 400 46px "Instrument Serif", Georgia, serif';
      stops.forEach((st, i) => { const y = 250 + i * 92; x.fillStyle = PINK; x.font = '600 22px "Geist Mono", monospace'; x.fillText(`${i + 1} · ${fmt(st.time)}`, L, y - 34);
        x.fillStyle = INK; x.font = 'italic 400 46px "Instrument Serif", Georgia, serif'; let n = st.place.name; while (x.measureText(n).width > W - L - 70 && n.length > 4) n = n.slice(0, -2) + "…"; x.fillText(n, L, y + 8); });
      x.fillStyle = INK; x.font = '400 64px "Instrument Serif", Georgia, serif'; x.fillText(`${totalKm(stops).toFixed(1)} km`, L, H - 120);
      x.fillStyle = MUTE; x.font = '600 20px "Geist Mono", monospace'; x.fillText(`${stops.length} STOPS · ONEDAY`, L, H - 70);
      // stamp
      x.save(); x.translate(W - 130, 150); x.rotate(0.2); x.strokeStyle = PINK; x.setLineDash([7, 6]); x.lineWidth = 3; x.beginPath(); x.arc(0, 0, 78, 0, Math.PI * 2); x.stroke();
      x.fillStyle = PINK; x.textAlign = "center"; x.font = '600 20px "Geist Mono", monospace'; x.fillText(city.name.toUpperCase().slice(0, 12), 0, -10); x.fillText(`${d.getUTCDate()}·${d.getUTCMonth() + 1}·${d.getUTCFullYear()}`, 0, 22); x.restore();
      // paper grain
      const n = document.createElement("canvas"); n.width = n.height = 160; const nx = n.getContext("2d"), id = nx.createImageData(160, 160);
      for (let i = 0; i < id.data.length; i += 4) { const v = Math.random() * 255; id.data[i] = id.data[i + 1] = id.data[i + 2] = v; id.data[i + 3] = 22; }
      nx.putImageData(id, 0, 0); x.globalCompositeOperation = "multiply"; x.fillStyle = x.createPattern(n, "repeat"); x.fillRect(0, 0, W, H); x.globalCompositeOperation = "source-over";
      const blob = await new Promise((r) => C.toBlob(r, "image/png"));
      const file = new File([blob], `oneday-${city.id}-${d.toISOString().slice(0, 10)}.png`, { type: "image/png" });
      if (navigator.canShare && navigator.canShare({ files: [file] })) { try { await navigator.share({ files: [file], title: `One day in ${city.name}` }); return; } catch (_) {} }
      const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = file.name; document.body.appendChild(a); a.click(); a.remove();
    } finally { label.textContent = was; }
  }

  // ---------- wire ----------
  document.querySelectorAll("#paceSeg button").forEach((b) => (b.onclick = () => { state.pace = +b.dataset.pace; renderPlan(); }));
  document.querySelectorAll("#daySeg button").forEach((b) => (b.onclick = () => { state.day = +b.dataset.day; state.autoTomorrow = false; state.offset = {}; renderPlan(); }));
  if ($("backBy")) $("backBy").onclick = () => { state.back = (state.back + 1) % BACK.length; renderPlan(); };
  $("reroll").onclick = () => { state.seed++; state.offset = {}; renderPlan(); };
  $("fit").onclick = () => focusStop(state.focus);
  $("start").onclick = () => { state.live = 0; state.skipped = new Set(); state.focus = null; show("live"); renderLive(); window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" }); };
  $("here").onclick = () => advance(false); $("skip").onclick = () => advance(true);
  $("again").onclick = () => { state.seed++; state.offset = {}; show("plan"); renderPlan(); };
  $("save").onclick = savePostcard;
  const pc = $("pc"); pc.onclick = () => pc.classList.toggle("flip"); pc.onkeydown = (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pc.classList.toggle("flip"); } };
  let rz; addEventListener("resize", () => { clearTimeout(rz); rz = setTimeout(() => { if (state.stops) ribbon(state.stops); if (state.mode === "plan" && state.stops) flyTo(view((state.focus != null ? [state.stops[state.focus - 1], state.stops[state.focus], state.stops[state.focus + 1]].filter(Boolean) : state.stops).map((s) => s.place.xy)), 0); else place(); }, 150); });

  renderPlan();
  MK.load(city.id).then((m) => { mapData = m; svg.querySelector("#base").innerHTML = MK.base(m); svg.classList.add("ready"); renderPlan(); });
  loadWeather().then(() => { if (state.mode === "plan") renderPlan({ animate: false }); });
})();
