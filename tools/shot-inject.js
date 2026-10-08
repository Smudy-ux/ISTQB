// Visual check helper: ?exam=A&q=23[&answer=0] opens that question (optionally
// checked/revealed) in dark mode for a screenshot.
(function () {
  function run() {
    const p = new URLSearchParams(location.search);
    const examId = p.get("exam") || "A";
    const targetN = p.get("q");
    const reveal = p.has("reveal");
    if (!p.has("light")) {
      document.body.classList.add("dark");
      const btnTheme = document.getElementById("btn-theme");
      if (btnTheme) btnTheme.textContent = "☀️";
    }
    startExam("practice", examId, false);
    const pos = S.order.findIndex((pi) => String(S.pool[pi].q.n) === targetN);
    S.idx = Math.max(0, pos);
    renderAll();
    if (reveal) {
      const q = currentQ().q;
      [].concat(q.answer).forEach((l) => pickOption(l));
      document.getElementById("btn-check").click();
    }
    // focus the exhibit for the shot
    document.getElementById("q-stem").scrollIntoView();
  }
  if (document.readyState === "complete") run();
  else window.addEventListener("load", run);
})();