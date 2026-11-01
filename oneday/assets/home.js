// Home: "plan today near me", and a hero map that draws one city's day after another.
(() => {
  const { cities: C, feature: F } = JSON.parse(document.getElementById("home-data").textContent);
  const b = document.getElementById("near"), msg = document.getElementById("nearMsg");
  b.onclick = () => {
    if (!navigator.geolocation) { location.hash = "cities"; return; }
    msg.textContent = "Finding you…";
    navigator.geolocation.getCurrentPosition((p) => {
      const d = (c) => Math.hypot(c.lat - p.coords.latitude, (c.lon - p.coords.longitude) * Math.cos(c.lat * Math.PI / 180));
      location.href = "/" + C.slice().sort((a, z) => d(a) - d(z))[0].id + "/";
    }, () => { msg.textContent = "Location is off. Pick a city below."; location.hash = "cities"; });
  };
  const hm = document.getElementById("heromap"), MK = window.MapKit;
  async function draw(c) {
    const m = await MK.load(c.id); if (!m) return;
    const P = MK.proj(c), pts = c.route.map(P), r = hm.getBoundingClientRect(), W = r.width, H = r.height;
    const v = MK.fit(pts, W, H, { t: H * 0.12, b: H * 0.22, l: W * 0.14, r: W * 0.14 }, 1500), s = v[2] / W, d = MK.curve(pts);
    const dots = pts.map((p, i) => `<circle cx="${p[0]}" cy="${p[1]}" r="${13 * s}" fill="var(--pink)" stroke="var(--paper-hi)" stroke-width="3" vector-effect="non-scaling-stroke"/><text x="${p[0]}" y="${p[1] + 4.2 * s}" text-anchor="middle" font-family="Geist Mono" font-weight="600" font-size="${12 * s}" fill="#fff">${i + 1}</text>`).join("");
    hm.querySelector("svg").outerHTML = `<svg viewBox="${v.join(" ")}" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs>${MK.dotsDef("hd", 7 * s)}</defs>${MK.base(m, "hd")}<path class="r-case" vector-effect="non-scaling-stroke" d="${d}"/><path class="r-ghost" vector-effect="non-scaling-stroke" transform="translate(${2.4 * s} ${1.8 * s})" d="${d}"/><path class="r-line rt" pathLength="1" style="stroke-width:${4.2 * s};stroke-dasharray:1;stroke-dashoffset:1" d="${d}"/>${dots}</svg>`;
    hm.href = "/" + c.id + "/";
    document.getElementById("heroName").textContent = c.name;
    document.getElementById("heroK").textContent = `Today · ${c.n} stops`;
    requestAnimationFrame(() => requestAnimationFrame(() => { const rt = hm.querySelector(".rt"); if (rt) rt.style.strokeDashoffset = 0; }));
  }
  let i = 0;
  draw(F[0]);
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches) setInterval(() => {
    if (document.hidden) return;
    i = (i + 1) % F.length; MK.load(F[i].id);
    hm.style.transition = "opacity .5s"; hm.style.opacity = 0;
    setTimeout(() => draw(F[i]).then(() => (hm.style.opacity = 1)), 520);
  }, 7000);
})();
