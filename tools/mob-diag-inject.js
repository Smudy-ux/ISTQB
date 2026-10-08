// Report elements wider than the viewport, with try/catch fallback.
(function () {
  function run() {
    let report = "";
    try {
      const p = new URLSearchParams(location.search);
      if (p.get("screen") === "exam") {
        try { startExam("practice", p.get("exam") || "A", false); } catch (e) { /* ignore */ }
      }
      const vw = document.documentElement.clientWidth;
      const bad = [];
      document.querySelectorAll("body *").forEach(function (el) {
        const r = el.getBoundingClientRect();
        if (r.width > vw + 1 || r.right > vw + 1) {
          const cs = getComputedStyle(el);
          const cls = el.className && el.className.baseVal !== undefined ? "" : String(el.className).split(" ")[0];
          bad.push(el.tagName + "." + cls + " w=" + Math.round(r.width) + " right=" + Math.round(r.right));
        }
      });
      report = "MOBDIAG[vw=" + vw + " sw=" + document.documentElement.scrollWidth + " cw=" + document.documentElement.clientWidth + "] " + JSON.stringify(bad.slice(0, 25));
    } catch (e) {
      report = "MOBERR[" + e.message + "]";
    }
    const d = document.createElement("div");
    d.id = "mob-diag";
    d.textContent = report;
    document.body.appendChild(d);
  }
  if (document.readyState === "complete") run();
  else window.addEventListener("load", run);
})();