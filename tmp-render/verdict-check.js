global.window = {};
require("../data/examA.js");
require("../data/examB.js");
require("../data/examC.js");
require("../data/examD.js");
const src = require("fs").readFileSync("js/app.js", "utf8");
const fnBody = src.match(/function renderExplanation\(html\) \{([\s\S]*?)\n\}/)[1];
const renderExplanation = new Function("html", fnBody.replace(/^return /, "return "));
let tag = 0, wrong = 0;
for (const key of Object.keys(window.EXAMS)) {
  const ex = window.EXAMS[key];
  for (const q of ex.questions) {
    if (!q.explanation) continue;
    const out = renderExplanation(q.explanation);
    const m = out.match(/<p><strong class="(vok|vbad)">(a\)|b\)|c\)|d\)|e\))[^<]{0,60}/g) || [];
    for (const hit of m) {
      const cls = hit.includes('class="vok"') ? "vok" : "vbad";
      const label = hit.match(/>([a-e]\)[^<]{0,50})/)[1];
      if (cls === "vok") {
        if (/not correct/i.test(label)) { console.log(key, "WRONG GREEN:", label); wrong++; }
        else tag++;
      } else { console.log(key, "RED (should be plain):", label); wrong++; }
    }
  }
}
console.log(tag + " correct verdicts tagged vok, " + wrong + " problems");
