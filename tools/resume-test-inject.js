// Headless test: save a MIX session that contains extra questions, then
// restoreSession from the saved JSON — pool, answers and flags must survive.
(function () {
  function run() {
    const results = [];
    const gid = (id) => document.getElementById(id);
    try {
      localStorage.clear();
      startExam("practice", "MIX", false);
      // answer every question with its stored answer (some extras included)
      S.pool.forEach((it, i) => {
        S.idx = i; renderAll();
        [].concat(it.q.answer).forEach((l) => pickOption(l));
      });
      saveSession();
      const sess = JSON.parse(localStorage.getItem(LS_SESSION));
      results.push("extras=" + sess.keys.filter((k) => k.split("#")[1].search(/^\d/) !== 0).length + " total=" + sess.keys.length);
      // simulate a fresh page: rebuilt state from saved session
      S.pool = []; S.answers = {}; S.checked = {}; S.flags = {};
      restoreSession(sess);
      let lost = 0, greens = 0;
      S.pool.forEach((it, i) => {
        S.idx = i; renderAll();
        const q = it.q;
        const ans = [].concat(q.answer);
        if ((S.answers[q._key] || []).length) {
          gid("btn-check").click();
          const divs = [...gid("q-options").children];
          if (divs.some((d) => d.classList.contains("correct"))) greens++;
          else lost++;
        } else lost++;
      });
      results.push("restored-pool=" + S.pool.length + " answered-green=" + greens + " lost=" + lost);
      results.push(S.pool.length === sess.keys.length && lost === 0 ? "RESTORE-OK" : "RESTORE-FAIL");
    } catch (e) { results.push("ERROR: " + e.message + " @ " + String(e.stack || "").split("\n")[1]); }
    const d = document.createElement("div");
    d.id = "green-log";
    d.textContent = "GREENTEST[" + results.join(" | ") + "]";
    document.body.appendChild(d);
  }
  if (document.readyState === "complete") run();
  else window.addEventListener("load", run);
})();