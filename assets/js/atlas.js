/* Atlas Terminal: night-sheet toggle and the Kandy clock. */
(function () {
  var root = document.documentElement;
  var btns = document.querySelectorAll('[data-theme-toggle]');

  function isDark() {
    var t = root.getAttribute('data-theme');
    return t ? t === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  }
  function sync() {
    btns.forEach(function (b) {
      b.setAttribute('aria-pressed', String(isDark()));
      b.textContent = isDark() ? 'Day sheet' : 'Night sheet';
    });
  }
  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var next = isDark() ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('atlas-theme', next); } catch (e) {}
      sync();
      document.dispatchEvent(new Event('atlas:theme'));
    });
  });
  sync();

  var clk = document.getElementById('clk');
  function tick() {
    if (!clk) return;
    try {
      clk.textContent = new Date().toLocaleTimeString('en-GB', { timeZone: clk.getAttribute('data-tz') || 'Asia/Colombo', hour: '2-digit', minute: '2-digit' });
    } catch (e) {}
  }
  tick();
  setInterval(tick, 30000);
})();
