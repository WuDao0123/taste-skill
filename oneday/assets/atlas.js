// The atlas: every closed day, kept on this device, drawn again as its postcard.
(() => {
  const O = window.ONEDAY, t = O.t, MK = window.MapKit;
  const CITIES = JSON.parse(document.getElementById("atlas-data").textContent);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const cards = document.getElementById("cards"), empty = document.getElementById("empty");
  const fmtDate = (iso) => new Intl.DateTimeFormat(O.lang === "zh" ? "zh-CN" : O.lang, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(iso + "T12:00:00Z"));
  async function render() {
    const list = O.atlas();
    empty.hidden = list.length > 0;
    cards.innerHTML = "";
    for (const [i, e] of list.entries()) {
      const c = CITIES[e.city]; if (!c) continue;
      const fig = document.createElement("figure");
      fig.innerHTML = `<div class="pc-face"><svg preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%" aria-hidden="true"></svg><h4 style="position:absolute;left:14px;top:10px;margin:0;font:400 38px/.9 var(--serif);letter-spacing:-.02em;text-shadow:2px 2px 0 color-mix(in srgb,var(--pink) 55%,transparent)">${esc(e.name)}</h4><div class="stamp" style="width:56px;height:56px;font-size:8px">${esc(e.date.slice(8, 10))} · ${esc(e.date.slice(5, 7))}<br>${esc(e.date.slice(0, 4))}</div></div><figcaption><span>${esc(fmtDate(e.date))}</span><span>${e.stops.length} · ${e.km} km · <button data-i="${i}" style="font:inherit;color:inherit;text-transform:inherit;letter-spacing:inherit;text-decoration:underline">${esc(t("remove"))}</button></span></figcaption>`;
      cards.appendChild(fig);
      const svg = fig.querySelector("svg"), P = MK.proj(c), pts = e.stops.map((s) => P(s));
      const W = 600, H = 400, v = MK.fit(pts, W, H, { t: H * 0.32, b: H * 0.14, l: W * 0.12, r: W * 0.12 }, 900), s = v[2] / W, d = MK.curve(pts);
      svg.setAttribute("viewBox", v.join(" "));
      const route = `<path class="r-case" vector-effect="non-scaling-stroke" d="${d}"/><path class="r-ghost" vector-effect="non-scaling-stroke" transform="translate(${2.2 * s} ${1.8 * s})" d="${d}"/><path class="r-line" vector-effect="non-scaling-stroke" d="${d}"/>${pts.map((p) => `<circle cx="${p[0]}" cy="${p[1]}" r="${9 * s}" fill="var(--pink)" stroke="var(--card)" stroke-width="2" vector-effect="non-scaling-stroke"/>`).join("")}`;
      svg.innerHTML = route;
      MK.load(e.city).then((m) => { if (!m) return; const cv = MK.clamp(v, m.frame); svg.setAttribute("viewBox", cv.join(" ")); svg.innerHTML = `<defs>${MK.dotsDef("d" + i, 7 * s)}</defs>${MK.base(m, "d" + i)}${route}`; });
    }
    cards.querySelectorAll("button[data-i]").forEach((b) => (b.onclick = () => { const l = O.atlas(); l.splice(+b.dataset.i, 1); O.store.set("oneday.atlas", JSON.stringify(l)); O.updateAtlasN(); render(); }));
  }
  render();
})();
