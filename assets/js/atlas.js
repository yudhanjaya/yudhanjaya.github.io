/* Atlas Terminal: the Kandy clock. */
(function () {
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
