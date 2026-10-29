/* CiteKit embeddable AI visibility audit.
   Usage: <div id="citekit-audit"></div>
          <script src="https://citekit.example/embed.js" data-widget="w_xxx" async></script> */
(function () {
  var script = document.currentScript || document.querySelector('script[data-widget][src*="embed.js"]');
  if (!script) return;
  var widgetId = script.getAttribute('data-widget');
  var api = new URL(script.src).origin;
  var mount = document.getElementById(script.getAttribute('data-target') || 'citekit-audit');
  if (!mount) {
    mount = document.createElement('div');
    script.parentNode.insertBefore(mount, script);
  }
  var root = mount.attachShadow ? mount.attachShadow({ mode: 'open' }) : mount;

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function safeUrl(u) { return /^https?:\/\//i.test(u || '') ? u : ''; }

  var css =
    ':host{all:initial}' +
    '.ck{font:15px/1.55 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:#16181d;background:#fff;border:1px solid #e4e1d9;border-radius:14px;padding:22px;max-width:640px;box-sizing:border-box}' +
    '.ck *{box-sizing:border-box}' +
    '.head{display:flex;align-items:center;gap:10px;margin-bottom:6px}.head img{max-height:32px;max-width:140px}' +
    'h3{font-size:21px;line-height:1.25;margin:4px 0 6px}' +
    'p{margin:0 0 12px;color:#5d6370}' +
    'form{display:grid;gap:8px}' +
    'input{width:100%;padding:12px 14px;font:inherit;border:1px solid #d4d0c6;border-radius:9px;background:#fff;color:#16181d}' +
    'button,.cta{display:inline-block;border:0;border-radius:9px;padding:12px 16px;font:inherit;font-weight:600;color:#fff;cursor:pointer;text-decoration:none;text-align:center}' +
    'button:disabled{opacity:.6;cursor:wait}' +
    '.score{font-size:40px;font-weight:700;letter-spacing:-.02em}' +
    'ul{list-style:none;padding:0;margin:12px 0}li{display:grid;grid-template-columns:54px 1fr;gap:10px;padding:10px 0;border-top:1px solid #eee}' +
    '.pts{font-weight:700}.good{color:#1d7a46}.warn{color:#a15c00}.bad{color:#b42318}' +
    '.fix{color:#5d6370;font-size:14px}.err{color:#b42318}' +
    '.brand{margin-top:14px;font-size:12px;color:#8a8f99}.brand a{color:inherit}';

  function render(html) { root.innerHTML = '<style>' + css + '</style><div class="ck">' + html + '</div>'; }

  fetch(api + '/api/widget/' + encodeURIComponent(widgetId))
    .then(function (r) { return r.json(); })
    .then(function (cfg) {
      if (cfg.error) return render('<p class="err">' + esc(cfg.error) + '</p>');
      var color = /^#[0-9a-f]{6}$/i.test(cfg.color) ? cfg.color : '#1f5eff';
      var brand = cfg.branding ? '<div class="brand">Powered by <a href="' + api + '/?ref=' + encodeURIComponent(widgetId) + '" target="_blank" rel="noopener">CiteKit</a></div>' : '';
      var head = '<div class="head">' + (safeUrl(cfg.logo_url) ? '<img src="' + esc(cfg.logo_url) + '" alt="' + esc(cfg.name) + '">' : '<strong>' + esc(cfg.name) + '</strong>') + '</div>';

      function showForm(msg) {
        render(head + '<h3>' + esc(cfg.headline) + '</h3><p>Free check of 7 signals ChatGPT, Claude, Perplexity and Gemini use to read and cite your site. Takes about 30 seconds.</p>' +
          '<form><input name="site" placeholder="yourwebsite.com" required aria-label="Your website"><input name="email" type="email" placeholder="you@company.com" required aria-label="Your email">' +
          '<button style="background:' + color + '">Check my site</button></form>' + (msg ? '<p class="err" style="margin-top:10px">' + esc(msg) + '</p>' : '') + brand);
        root.querySelector('form').addEventListener('submit', submit);
      }

      function submit(e) {
        e.preventDefault();
        var f = e.target;
        var site = f.site.value.trim();
        var email = f.email.value.trim();
        var btn = f.querySelector('button');
        btn.disabled = true; btn.textContent = 'Checking…';
        fetch(api + '/api/audit?w=' + encodeURIComponent(widgetId) + '&url=' + encodeURIComponent(site))
          .then(function (r) { return r.json(); })
          .then(function (rep) {
            fetch(api + '/api/lead', { method: 'POST', headers: { 'content-type': 'application/json' },
              body: JSON.stringify({ w: widgetId, email: email, site: rep.origin || site, score: rep.error ? null : rep.score, page_url: location.href }) })
              .catch(function () {});
            if (rep.error) return showForm(rep.error);
            var rows = rep.checks.map(function (c) {
              var ratio = c.score / c.weight;
              var cls = ratio >= 0.8 ? 'good' : ratio >= 0.4 ? 'warn' : 'bad';
              return '<li><span class="pts ' + cls + '">' + c.score + '/' + c.weight + '</span><div><strong>' + esc(c.label) + '</strong><br>' + esc(c.detail) +
                (c.fix ? '<div class="fix">Fix: ' + esc(c.fix) + '</div>' : '') + '</div></li>';
            }).join('');
            var cta = safeUrl(cfg.cta_url) ? '<a class="cta" style="background:' + color + '" href="' + esc(cfg.cta_url) + '" target="_blank" rel="noopener">' + esc(cfg.cta_text) + '</a>' : '';
            render(head + '<div class="score">' + rep.score + '<span style="font-size:18px">/100</span></div><p>' + esc(rep.origin) + '</p><ul>' + rows + '</ul>' +
              '<p>' + esc(cfg.name) + ' can fix these for you.</p>' + cta + brand);
          })
          .catch(function () { showForm('Could not run the check. Please try again.'); });
      }

      showForm();
    })
    .catch(function () { render('<p class="err">The audit tool could not load.</p>'); });
})();
