global.window = {};
require("../data/examA.js"); require("../data/examB.js");
require("../data/examC.js"); require("../data/examD.js");
const src = require("fs").readFileSync("js/app.js", "utf8");
const fnBody = src.match(/function renderExplanation\(html\) \{([\s\S]*?)\n\}/)[1];
const renderExplanation = new Function("html", fnBody.replace(/^return /, "return "));
let empty = 0;
for (const k of Object.keys(window.EXAMS))
  for (const q of window.EXAMS[k].questions) {
    if (!q.explanation) continue;
    const out = renderExplanation(q.explanation);
    const hits = out.match(/<strong><\/strong>/g);
    if (hits) { empty += hits.length;
      if (empty < 4) console.log(k, q.n, "|", out.slice(0, 160)); }
  }
console.log("empty <strong></strong> pairs:", empty);
