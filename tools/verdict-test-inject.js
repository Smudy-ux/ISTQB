// Headless test: every question's rendered explanation must highlight green
// (strong.vok) exactly the verdict for the stored correct answer.
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
          const html = gid("explanation-body").innerHTML;
          const vok = html.match(/<strong class="vok">([a-f])\)/gi) || [];
          const vokLetters = vok.map((s) => s.replace(/.*([a-f])\)/, "$1")).sort();
          const want = ans.slice().sort();
          const same = vokLetters.length === want.length && vokLetters.every((l, j) => l === want[j]);
          if (!same) results.push(examId + "#" + q.n + " want=" + want.join("") + " got=" + vokLetters.join("") + " html=" + html.slice(0, 120));
        });
      }
      if (!results.length) results.push("ALL-VERDICTS-CORRECT");
    } catch (e) { results.push("ERROR: " + e.message + " @ " + String(e.stack || "").split("\n")[1]); }
    const d = document.createElement("div");
    d.id = "green-log";
    d.textContent = "GREENTEST[" + results.join(" | ") + "]";
    document.body.appendChild(d);
  }
  if (document.readyState === "complete") run();
  else window.addEventListener("load", run);
})();