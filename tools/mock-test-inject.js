// Headless repro: mock mode — answer everything, finish, enter review, verify
// every question's options show correct/wrong classes.
(function () {
  function run() {
    const results = [];
    const gid = (id) => document.getElementById(id);
    try {
      localStorage.clear();
      for (const examId of ["A", "B", "C", "D"]) {
        startExam("mock", examId, false);
        S.pool.forEach((it, i) => {
          S.idx = i; renderAll();
          [].concat(it.q.answer).forEach((l) => pickOption(l));
        });
        // force finish without modal
        finishExam(true);
        reviewAnswers();
        let bad = [];
        S.pool.forEach((it2, i2) => {
          S.idx = i2; renderAll();
          const q = it2.q;
          const ans = [].concat(q.answer);
          [...gid("q-options").children].forEach((d2) => {
            const shouldCorrect = ans.includes(d2.dataset.letter);
            if (d2.classList.contains("correct") !== shouldCorrect) {
              bad.push(q.n + ":" + d2.dataset.letter + "(want" + (shouldCorrect ? "green" : "noGreen") + ",has" +
                (d2.classList.contains("correct") ? "green" : (d2.classList.contains("wrong") ? "wrong" : "none")) + ")");
            }
          });
        });
        results.push(examId + (bad.length ? " BAD:" + bad.join(" ") : "-OK"));
      }
    } catch (e) { results.push("ERROR: " + e.message + " @ " + String(e.stack || "").split("\n")[1]); }
    const d = document.createElement("div");
    d.id = "green-log";
    d.textContent = "GREENTEST[" + results.join(" | ") + "]";
    document.body.appendChild(d);
  }
  if (document.readyState === "complete") run();
  else window.addEventListener("load", run);
})();