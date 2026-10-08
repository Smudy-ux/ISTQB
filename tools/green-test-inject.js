// Headless repro: answer every question in every exam, check it, and verify the
// correct option(s) actually render with the .correct class.
(function () {
  function run() {
    const results = [];
    const gid = (id) => document.getElementById(id);
    try {
      localStorage.clear();
      for (const examId of ["A", "B", "C", "D"]) {
        startExam("practice", examId, false);
        S.pool.forEach((it, i) => {
          S.idx = i; renderAll();
          const q = it.q;
          const ans = [].concat(q.answer);
          ans.forEach((l) => pickOption(l));
          gid("btn-check").click();
          const divs = [...gid("q-options").children];
          const missing = ans.filter((a) => {
            const d = divs.find((x) => x.dataset.letter === a);
            return !d || !d.classList.contains("correct");
          });
          if (missing.length) {
            results.push(examId + "#" + q.n + " NOT-GREEN(" + missing.join(",") + ") checked=" +
              !!S.checked[q._key] + " cls=" + divs.map((d2) => d2.dataset.letter + ":" + d2.className).join(" "));
          }
        });
      }
      if (!results.length) results.push("ALL-QUESTIONS-GREEN");
    } catch (e) { results.push("ERROR: " + e.message + " @ " + String(e.stack || "").split("\n")[1]); }
    const d = document.createElement("div");
    d.id = "green-log";
    d.textContent = "GREENTEST[" + results.join(" | ") + "]";
    document.body.appendChild(d);
  }
  if (document.readyState === "complete") run();
  else window.addEventListener("load", run);
})();