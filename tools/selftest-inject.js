window.addEventListener("load", () => {
  const results = [];
  const gid = (id) => document.getElementById(id);
  const quitToHome = () => { stopTimer(); closeModal(); showScreen("home"); };
  try {
    localStorage.clear();
    startExam("practice", "D", false);
    results.push("pool=" + S.pool.length + " mode=" + S.mode);
    S.idx = 1; renderAll();
    gid("btn-prev").click(); results.push("nav-back=" + S.idx);
    gid("btn-next").click(); results.push("nav-fwd=" + S.idx);
    S.pool.forEach((it, i) => {
      S.idx = i; renderAll();
      const ans = [].concat(it.q.answer);
      ans.forEach((l) => pickOption(l));
    });
    results.push("exhibit-Q22=" + ((S.pool[21].q.exhibit) || "").includes("R7"));
    results.push("exhibit-Q23=" + ((S.pool[22].q.exhibit) || "").includes("NotAvailable"));
    results.push("exhibit-Q32=" + ((S.pool[31].q.exhibit) || "").includes("Req7"));
    finishExam();
    const r = scoreExam();
    results.push("score=" + r.points + "/" + r.total + " correct=" + r.correctCount);
    results.push("results-visible=" + gid("results").classList.contains("active"));
  } catch (e) { results.push("ERROR1: " + e.message + "@" + String(e.stack || "").split("\n")[1]); }
  try {
    startExam("practice", "A", false);
    const q1 = S.pool[0].q;
    [].concat(q1.answer).forEach((l) => pickOption(l));
    results.push("practice-check-visible=" + !gid("btn-check").classList.contains("hidden"));
    results.push("practice-check-disabled=" + gid("btn-check").disabled);
    gid("btn-check").click();
    results.push("practice-expl-shown=" + (gid("explanation-body").innerHTML.length > 50));
    results.push("practice-expl-correct=" + (gid("explanation-body").innerHTML.indexOf("Is correct") >= 0));
    quitToHome();
  } catch (e) { results.push("ERROR3: " + e.message + "@" + String(e.stack || "").split("\n")[1]); }
  try {
    startExam("mock", "A", false);
    results.push("mock-pool=" + S.pool.length + " timer=" + (S.timerId ? "running" : "none") + " remaining=" + S.remaining);
    results.push("check-hidden=" + gid("btn-check").classList.contains("hidden"));
    stopTimer(); closeModal(); showScreen("home");
    results.push("home-visible=" + gid("home").classList.contains("active"));
  } catch (e) { results.push("ERROR2: " + e.message + "@" + String(e.stack || "").split("\n")[1]); }
  const d = document.createElement("div");
  d.id = "selftest-log";
  d.textContent = "SELFTEST[" + results.join(" | ") + "]";
  document.body.appendChild(d);
});