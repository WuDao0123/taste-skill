// Shared by every page: language, the atlas counter in the header, offline support.
(() => {
  const L = window.ONEDAY_I18N;
  const store = { get(k) { try { return localStorage.getItem(k); } catch (_) { return null; } }, set(k, v) { try { localStorage.setItem(k, v); } catch (_) {} } };
  const pick = () => { const q = new URLSearchParams(location.search).get("lang"); if (q && L[q]) return q;
    const s = store.get("oneday.lang"); if (s && L[s]) return s;
    const n = (navigator.language || "en").slice(0, 2); return L[n] ? n : "en"; };
  const O = (window.ONEDAY = window.ONEDAY || {});
  O.store = store;
  O.lang = pick();
  O.t = (key, vars = {}) => { const v = key.split(".").reduce((o, k) => (o ? o[k] : undefined), L[O.lang]) ?? key.split(".").reduce((o, k) => (o ? o[k] : undefined), L.en) ?? key;
    return typeof v === "string" ? v.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? "") : v; };
  O.applyStatic = () => {
    document.documentElement.lang = O.lang === "zh" ? "zh-Hans" : O.lang;
    if (O.lang === "en") return; // static English is the page's own text
    document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = O.t(el.dataset.i18n); });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => { el.innerHTML = O.t(el.dataset.i18nHtml); });
  };
  O.atlas = () => { try { return JSON.parse(store.get("oneday.atlas") || "[]"); } catch (_) { return []; } };
  O.updateAtlasN = () => { const n = O.atlas().length, el = document.getElementById("atlasN"); if (el) { el.hidden = !n; el.textContent = n; } };
  const sel = document.getElementById("lang");
  if (sel) { sel.value = O.lang; sel.onchange = () => { store.set("oneday.lang", sel.value); location.reload(); }; }
  if (O.lang === "zh" || O.lang === "ja") { const l = document.createElement("link"); l.rel = "stylesheet"; l.href = `https://fonts.googleapis.com/css2?family=${O.lang === "zh" ? "Noto+Serif+SC" : "Noto+Serif+JP"}:wght@400;500&display=swap`; document.head.appendChild(l); }
  O.applyStatic(); O.updateAtlasN();
  if ("serviceWorker" in navigator && location.protocol === "https:") navigator.serviceWorker.register("/sw.js").catch(() => {});
})();
