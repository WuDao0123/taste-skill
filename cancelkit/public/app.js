// CancelKit progressive enhancement. Every page works without this file.
(function () {
  var money = function (n) { return '$' + Math.round(n).toLocaleString('en-US'); };

  // Subscription cost calculator
  document.querySelectorAll('[data-calc]').forEach(function (box) {
    var input = box.querySelector('input');
    var yearly = box.querySelector('[data-yearly]');
    var five = box.querySelector('[data-five]');
    var update = function () {
      var m = Math.max(0, parseFloat(input.value) || 0);
      yearly.textContent = money(m * 12);
      five.textContent = money(m * 60);
    };
    input.addEventListener('input', update);
    update();
  });

  // Home search: jump straight to a guide when the name matches, else go to the A–Z filter
  document.querySelectorAll('[data-search]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      var q = form.querySelector('input').value.trim().toLowerCase();
      var match = Array.prototype.find.call(document.querySelectorAll('#services option'), function (o) {
        return o.value.toLowerCase() === q;
      });
      if (match) { e.preventDefault(); location.href = match.dataset.href; }
    });
  });

  // A–Z filter
  var filter = document.querySelector('[data-filter]');
  if (filter) {
    var cards = document.querySelectorAll('.card[data-name]');
    var groups = document.querySelectorAll('[data-az]');
    var empty = document.querySelector('[data-empty]');
    var apply = function () {
      var q = filter.value.trim().toLowerCase();
      var shown = 0;
      cards.forEach(function (c) {
        var hit = !q || c.dataset.name.indexOf(q) !== -1;
        c.hidden = !hit;
        if (hit) shown++;
      });
      groups.forEach(function (g) { g.hidden = !g.querySelector('.card:not([hidden])'); });
      empty.hidden = shown > 0;
    };
    document.querySelector('[data-filter-form]').addEventListener('submit', function (e) { e.preventDefault(); });
    filter.value = new URLSearchParams(location.search).get('q') || '';
    filter.addEventListener('input', apply);
    apply();
  }

  // Pricing yearly / monthly toggle
  var billing = document.querySelector('[data-billing]');
  if (billing) {
    var setPeriod = function (period) {
      billing.querySelectorAll('button').forEach(function (b) {
        b.setAttribute('aria-pressed', String(b.dataset.period === period));
      });
      ['price', 'note', 'buy'].forEach(function (k) {
        document.querySelectorAll('[data-' + k + '-yearly]').forEach(function (el) { el.hidden = period !== 'yearly'; });
        document.querySelectorAll('[data-' + k + '-monthly]').forEach(function (el) { el.hidden = period !== 'monthly'; });
      });
    };
    billing.addEventListener('click', function (e) {
      var b = e.target.closest('button');
      if (b) setPeriod(b.dataset.period);
    });
  }

  // Cancellation letter generator
  var letter = document.querySelector('[data-letter]');
  if (letter) {
    var form = letter.querySelector('form');
    var out = letter.querySelector('[data-letter-out]');
    var val = function (n, fallback) { return form.elements[n].value.trim() || fallback; };
    var render = function () {
      var d = form.elements.date.value
        ? new Date(form.elements.date.value + 'T00:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
        : '[effective date]';
      var today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
      out.textContent = [
        val('name', '[Your name]'), val('address', '[Your address]'), '', today, '',
        val('company', '[Company]'), val('companyAddress', '[Company address]'), '',
        'Re: Cancellation of membership, account ' + val('account', '[account number]'), '',
        'To whom it may concern,', '',
        'I am writing to cancel my membership and all recurring charges on the account above, effective ' + d + '.',
        'Please stop all future billing and send written confirmation of this cancellation to the address above.', '',
        'If any amount is due, please tell me in writing before charging my payment method.', '',
        'Sincerely,', '', val('name', '[Your name]')
      ].join('\n');
    };
    form.addEventListener('input', render);
    render();
    letter.querySelector('[data-copy]').addEventListener('click', function (e) {
      var btn = e.currentTarget;
      navigator.clipboard.writeText(out.textContent).then(function () {
        btn.textContent = 'Copied';
        setTimeout(function () { btn.textContent = 'Copy letter'; }, 1500);
      });
    });
    letter.querySelector('[data-print]').addEventListener('click', function () { window.print(); });
  }
})();
