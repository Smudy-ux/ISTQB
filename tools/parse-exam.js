/* Parser v2: ISTQB sample exam (pdftotext -layout) -> exam data JS file.
   Answers doc is a table whose columns are vertically offset; parse per-line by
   columns (answer/metadata zones) and rebuild explanations from the verdict stream. */
"use strict";
const fs = require("fs");

const examId = process.argv[2];
const qFile = process.argv[3];
const aFile = process.argv[4];
const outFile = process.argv[5];
const keyFile = process.argv[6] || null;

const OVERRIDES = {
  A: {
    14: {
      // execution log rendered as a table, embedded in the stem (official order)
      stem: `<p>You are testing a user story with three acceptance criteria: AC1, AC2 and AC3. AC1 is covered by test case TC1, AC2 by TC2, and AC3 by TC3. The test execution history had three test runs on three consecutive versions of the software as follows:</p>
<div class="exhibit"><table>
<thead><tr><th></th><th>Execution 1</th><th>Execution 2</th><th>Execution 3</th></tr></thead>
<tbody>
<tr><td>TC1</td><td>(1) Failed</td><td>(4) Passed</td><td>(7) Passed</td></tr>
<tr><td>TC2</td><td>(2) Passed</td><td>(5) Failed</td><td>(8) Passed</td></tr>
<tr><td>TC3</td><td>(3) Failed</td><td>(6) Failed</td><td>(9) Passed</td></tr>
</tbody></table></div>
<p>Tests are repeated once you are informed that all defects found in the test run are corrected and a new version of the software is available.</p>
<p>Which of the above tests are executed as regression tests?</p>`,
      exhibit: null
    },
    21: {
      // grade-vs-result test-case table, embedded in the stem (official order)
      stem: `<p>You are testing a system that calculates the final course grade for a given student.</p>
<p>The final grade is assigned based on the final result, according to the following rules:</p>
<ul><li>0–50 points: failed</li><li>51–60 points: fair</li><li>61–70 points: satisfactory</li><li>71–80 points: good</li><li>81–90 points: very good</li><li>91–100 points: excellent</li></ul>
<p>You have prepared the following set of test cases:</p>
<div class="exhibit"><table>
<thead><tr><th></th><th>Final result</th><th>Final grade</th></tr></thead>
<tbody>
<tr><td>TC1</td><td>91</td><td>excellent</td></tr>
<tr><td>TC2</td><td>50</td><td>failed</td></tr>
<tr><td>TC3</td><td>81</td><td>very good</td></tr>
<tr><td>TC4</td><td>60</td><td>fair</td></tr>
<tr><td>TC5</td><td>70</td><td>satisfactory</td></tr>
<tr><td>TC6</td><td>80</td><td>good</td></tr>
</tbody></table></div>
<p>What is the 2-value boundary value analysis (BVA) coverage for the final result that is achieved with the existing test cases?</p>`,
      exhibit: null
    },
    22: {
      stem: `<p>Your favorite bicycle daily rental store has just introduced a new Customer Relationship Management system and asked you, one of their most loyal members, to test it.</p>
<p>The implemented features are as follows:</p>
<ul><li>Anyone can rent a bicycle, but members receive a 20% discount</li><li>However, if the return deadline is missed, the discount is no longer available</li><li>After 15 rentals, members get a gift: a T-Shirt</li></ul>
<p>Decision table describing the implemented features looks as follows:</p>
<p>Based ONLY on the feature description of the Customer Relationship Management system, which of the above rules describes an impossible situation?</p>`,
      exhibit: `<div class="exhibit"><table>
<thead><tr><th>Conditions</th><th>R1</th><th>R2</th><th>R3</th><th>R4</th><th>R5</th><th>R6</th><th>R7</th><th>R8</th></tr></thead>
<tbody>
<tr><td>Being a member</td><td>T</td><td>T</td><td>T</td><td>T</td><td>F</td><td>F</td><td>F</td><td>F</td></tr>
<tr><td>Missed deadline</td><td>T</td><td>F</td><td>T</td><td>F</td><td>T</td><td>F</td><td>F</td><td>T</td></tr>
<tr><td>15th rental</td><td>F</td><td>F</td><td>T</td><td>T</td><td>F</td><td>F</td><td>T</td><td>T</td></tr>
<tr><td><strong>Actions</strong></td><td colspan="8"></td></tr>
<tr><td>20% discount</td><td></td><td>X</td><td></td><td>X</td><td></td><td></td><td></td><td></td></tr>
<tr><td>Gift T-Shirt</td><td></td><td></td><td>X</td><td>X</td><td></td><td></td><td></td><td>X</td></tr>
</tbody></table></div>`
    },
    23: {
      stem: `<p>You test a system whose lifecycle is modeled by the state transition diagram shown below. The system starts in the INIT state and ends its operation in the OFF state.</p>
<p>What is the MINIMAL number of test cases to achieve valid transitions coverage?</p>`,
      exhibit: `<div class="exhibit"><svg viewBox="0 0 640 250" xmlns="http://www.w3.org/2000/svg" font-size="13">
<defs><marker id="arrA23" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto"><path d="M0,0 L10,4 L0,8 z" fill="#0f2540"/></marker></defs>
<style>.st{fill:#fff;stroke:#0f2540;stroke-width:1.6;} .lbl{font-weight:bold;fill:#0f2540;} .ev{fill:#2563eb;font-weight:bold;} .ln{stroke:#0f2540;stroke-width:1.4;fill:none;marker-end:url(#arrA23);}</style>
<rect class="st" x="20" y="105" width="92" height="40" rx="9"/><text class="lbl" x="66" y="130" text-anchor="middle">INIT</text>
<rect class="st" x="230" y="105" width="100" height="40" rx="9"/><text class="lbl" x="280" y="130" text-anchor="middle">RUNNING</text>
<rect class="st" x="245" y="200" width="100" height="40" rx="9"/><text class="lbl" x="295" y="225" text-anchor="middle">PAUSED</text>
<rect class="st" x="460" y="20" width="100" height="40" rx="9"/><text class="lbl" x="510" y="45" text-anchor="middle">FINISHED</text>
<rect class="st" x="460" y="190" width="88" height="40" rx="9" style="stroke-width:3"/><text class="lbl" x="504" y="215" text-anchor="middle">OFF</text>
<path class="ln" d="M112,125 L228,125"/><text class="ev" x="160" y="116">run</text>
<path class="ln" d="M76,105 C76,40 440,30 458,38"/><text class="ev" x="240" y="48">test</text>
<path class="ln" d="M322,110 C380,80 420,60 458,45"/><text class="ev" x="375" y="78">error</text>
<path class="ln" d="M285,145 C285,170 290,180 292,198"/><text class="ev" x="250" y="178">pause</text>
<path class="ln" d="M330,215 C360,180 350,155 330,142"/><text class="ev" x="352" y="185">resume</text>
<path class="ln" d="M510,60 C505,110 504,150 503,188"/><text class="ev" x="530" y="130">done</text>
<path class="ln" d="M345,222 C400,222 420,215 458,211"/><text class="ev" x="385" y="216">done</text>
</svg></div>`
    },
    A20: {
      stem: `<p>Your team uses planning poker to estimate the test effort for a newly required feature. There is a rule in your team that if there is no time to reach full agreement and the variation in the results is small, rules like "accept the number with the most votes" can be applied.</p>
<p>After two rounds, the consensus was not reached, so the third round was initiated. You can see the test estimation results in the table below.</p>
<p>Which of the following is the BEST example of the next step?</p>`,
      exhibit: `<div class="exhibit"><table>
<thead><tr><th></th><th colspan="7">Team members' estimations</th></tr></thead>
<tbody>
<tr><td>Round 1</td><td>21</td><td>2</td><td>5</td><td>34</td><td>13</td><td>8</td><td>2</td></tr>
<tr><td>Round 2</td><td>13</td><td>8</td><td>8</td><td>34</td><td>13</td><td>8</td><td>5</td></tr>
<tr><td>Round 3</td><td>13</td><td>8</td><td>13</td><td>13</td><td>13</td><td>13</td><td>8</td></tr>
</tbody></table></div>`
    }
  },
  B: {
    23: {
      stem: `<p>A storage system can store up to three elements and is modeled by the following state transition diagram. The variable N represents the number of currently stored elements.</p>
<p>Which of the following test cases, represented as sequences of events, achieves the highest level of valid transitions coverage?</p>`,
      exhibit: `<div class="exhibit"><svg viewBox="0 0 640 270" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arrB23" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#333"/></marker></defs><rect x="30" y="105" width="130" height="60" rx="30" fill="none" stroke="#333" stroke-width="1.6"/><text x="95" y="140" text-anchor="middle" font-size="13" font-weight="bold" fill="#333">START</text><rect x="255" y="105" width="130" height="60" rx="30" fill="none" stroke="#333" stroke-width="1.6"/><text x="320" y="132" text-anchor="middle" font-size="13" font-weight="bold" fill="#333">NOT FULL</text><text x="320" y="150" text-anchor="middle" font-size="11" fill="#555">N = 0, 1 or 2</text><rect x="480" y="105" width="130" height="60" rx="30" fill="none" stroke="#333" stroke-width="1.6"/><text x="545" y="132" text-anchor="middle" font-size="13" font-weight="bold" fill="#333">FULL</text><text x="545" y="150" text-anchor="middle" font-size="11" fill="#555">N = 3</text><path d="M160,138 L251,138" fill="none" stroke="#333" stroke-width="1.5" marker-end="url(#arrB23)"/><text x="207" y="124" text-anchor="middle" font-size="11" fill="#333">Add / N := 1  (E1)</text><path d="M292,107 C292,55 352,55 348,103" fill="none" stroke="#333" stroke-width="1.5" marker-end="url(#arrB23)"/><text x="320" y="40" text-anchor="middle" font-size="11" fill="#333">Add [N &lt; 2] / N := N + 1  (E2)</text><path d="M292,163 C292,215 352,215 348,167" fill="none" stroke="#333" stroke-width="1.5" marker-end="url(#arrB23)"/><text x="320" y="240" text-anchor="middle" font-size="11" fill="#333">Remove [N &gt; 0] / N := N &#8722; 1  (E3)</text><path d="M378,120 C400,70 470,74 482,106" fill="none" stroke="#333" stroke-width="1.5" marker-end="url(#arrB23)"/><text x="432" y="62" text-anchor="middle" font-size="11" fill="#333">Add [N = 2] / N := N + 1  (E4)</text><path d="M482,166 C462,200 390,198 378,158" fill="none" stroke="#333" stroke-width="1.5" marker-end="url(#arrB23)"/><text x="432" y="196" text-anchor="middle" font-size="11" fill="#333">Remove / N := N &#8722; 1  (E5)</text></svg></div>`
    },
    31: {
      stem: `<p>You want to estimate the test effort for the new project using estimation based on ratios. You calculate the test-to-development effort ratio using averaged data for both development effort and test effort from four historical projects similar to the new one. The table shows this historical data.</p>
<p>The estimated development effort for the new project is $800,000. What is your estimate of the test effort in this project?</p>`,
      exhibit: `<div class="exhibit"><table>
<thead><tr><th>Project</th><th>Development effort ($)</th><th>Test effort ($)</th></tr></thead>
<tbody>
<tr><td>P1</td><td>800,000</td><td>40,000</td></tr>
<tr><td>P2</td><td>1,200,000</td><td>130,000</td></tr>
<tr><td>P3</td><td>600,000</td><td>70,000</td></tr>
<tr><td>P4</td><td>1,000,000</td><td>120,000</td></tr>
</tbody></table></div>`
    },
    38: {
      stem: `<p>You are testing a sort function that gets a set of numbers as input and returns the same set of numbers sorted in ascending order. The log from the test execution looks as follows.</p>
<p>Which of the following provides the BEST description of the failure that can be used in a defect report?</p>`,
      exhibit: `<div class="exhibit"><pre>Environment configuration: sort function build 2.002.2182, test case set: TCS-3, # of TCs: 5\n\nTest run ID: 736\n\nStart 12:43:21.003\n\n12:43:21.003 Execution of TC1. Input: 3.               Output: 3.     Result: passed\n12:43:21.003 Execution of TC2. Input: 3 11 6 5. Output: 3 5 6 11. Result: passed\n12:43:21.004 Execution of TC3. Input: 8 7 3 7 1. Output: 1 3 7 8.     Result: failed\n12:43:21.005 Execution of TC4. Input: -2 -2 -2 -3 -3. Output: -3 -2.  Result: failed\n12:43:21.005 Execution of TC5. Input: 0 -2 0 3 4 4. Output: -2 0 3 4. Result: failed\n\nEnd 12:43:21.005\n\nTotal time of test cycle: 0:00:00.002</pre></div>`
    }
  },
  D: {
    22: {
      stem: `<p>You are designing test cases based on the following decision table.</p>
<p>So far you have designed the following test cases:</p>
<ul><li>TC1: 19-year-old, unregistered man with no experience; expected result: category A</li>
<li>TC2: 65-year-old, unregistered woman with 5 years of experience; expected result: category B</li>
<li>TC3: 66-year-old, registered man with no experience; expected result: category C</li>
<li>TC4: 65-year-old, registered woman with 4 years of experience; expected result: category D</li></ul>
<p>Which of the following test cases, when added to the existing set of test cases, will increase the decision table coverage?</p>`,
      exhibit: `<div class="exhibit"><table>
<thead><tr><th></th><th>R1</th><th>R2</th><th>R3</th><th>R4</th><th>R5</th><th>R6</th><th>R7</th></tr></thead>
<tbody>
<tr><td>C1: Age</td><td>0–18</td><td>19–65</td><td>19–65</td><td>&gt;65</td><td>0–18</td><td>19–65</td><td>&gt;65</td></tr>
<tr><td>C2: Experience</td><td>–</td><td>0–4</td><td>&gt;4</td><td>–</td><td>–</td><td>–</td><td>–</td></tr>
<tr><td>C3: Registered?</td><td>NO</td><td>NO</td><td>NO</td><td>NO</td><td>YES</td><td>YES</td><td>YES</td></tr>
<tr><td><strong>Category</strong></td><td><strong>A</strong></td><td><strong>A</strong></td><td><strong>B</strong></td><td><strong>B</strong></td><td><strong>B</strong></td><td><strong>D</strong></td><td><strong>C</strong></td></tr>
</tbody></table></div>`
    },
    23: {
      stem: `<p>You are applying state transition testing to the hotel room reservation system modeled by the following state transition table, with 4 states and 5 different events:</p>
<p>Assuming all test cases start in the 'Requesting' state, which of the following test cases, represented as sequences of events, achieves the highest valid transitions coverage?</p>`,
      exhibit: `<div class="exhibit"><table>
<thead><tr><th>State</th><th>Available</th><th>NotAvailable</th><th>ChangeRoom</th><th>Cancel</th><th>Pay</th></tr></thead>
<tbody>
<tr><td>S1: Requesting</td><td>S2</td><td>S3</td><td></td><td></td><td></td></tr>
<tr><td>S2: Confirmed</td><td></td><td></td><td>S1</td><td>S4</td><td>S4</td></tr>
<tr><td>S3: Waiting list</td><td>S2</td><td></td><td></td><td>S4</td><td></td></tr>
<tr><td>S4: End</td><td></td><td></td><td></td><td></td><td></td></tr>
</tbody></table></div>`
    },
    32: {
      stem: `<p>The table shows the traceability matrix from test cases to requirements. "X" means that a given test case covers the corresponding requirement.</p>
<p>You want to prioritize the test cases following the additional coverage prioritization technique.</p>
<p>You execute all four test cases.</p>
<p>Which test case should be executed as the LAST one?</p>`,
      exhibit: `<div class="exhibit"><table>
<thead><tr><th></th><th>Req1</th><th>Req2</th><th>Req3</th><th>Req4</th><th>Req5</th><th>Req6</th><th>Req7</th></tr></thead>
<tbody>
<tr><td><strong>TC1</strong></td><td>X</td><td></td><td>X</td><td>X</td><td></td><td></td><td>X</td></tr>
<tr><td><strong>TC2</strong></td><td>X</td><td></td><td></td><td></td><td>X</td><td></td><td>X</td></tr>
<tr><td><strong>TC3</strong></td><td></td><td></td><td></td><td></td><td>X</td><td>X</td><td></td></tr>
<tr><td><strong>TC4</strong></td><td></td><td>X</td><td></td><td></td><td></td><td></td><td></td></tr>
</tbody></table></div>`
    }
  }
};

/* ─────────── utilities ─────────── */
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
function demangle(s) {
  return s
    .replace(/\f/g, "")
    .replace(/ISTQB�/g, "ISTQB®")
    .replace(/^\s*�\s*/gm, "• ")
    .replace(/(\d)\s*�\s*(\d)/g, "$1–$2")
    .replace(/�/g, "–");
}
function normWS(s) { return s.replace(/[ \t]+/g, " ").trim(); }
function isFurniture(line) {
  const t = line.trim();
  if (!t) return false;
  return /^Version [\d.]+(\s+Page \d+ of \d+)?$/.test(t)
    || /^Page \d+ of \d+$/.test(t)
    || /^(Release .*\d{4}(\s+Page \d+ of \d+)?|Page \d+ of \d+\s+Release )/.test(t)
    || /^[•©]\s*International Software Testing Qualifications Board$/.test(t)
    || /^Certified Tester, Foundation Level$/.test(t)
    || /^Sample Exams? set [A-D]$/.test(t)
    || /^Sample Exam . (Questions|Answers)$/.test(t)
    || /^Appendix: Additional (Sample )?Questions$/.test(t);
}
// pdftotext -layout spills page footers ("Version 1.7", "Release April 1, 2025",
// "Page 33 of 38") right onto the end of content lines — trim them off.
function stripFooterSuffix(line) {
  return line
    .replace(/\s{2,}(Release .*\d{4})(\s+Page \d+ of \d+)?\s*$/, "")
    .replace(/\s+Version \d+\.\d+(\s+Page \d+ of \d+)?\s*$/, "")
    .replace(/(^|\s)Page \d+ of \d+(\s|$)/g, "$1");
}

/* ─────────── questions side ─────────── */
function parseQuestions(txt) {
  const lines = txt.split(/\r?\n/).map(demangle);
  const clean = lines.filter((l) => !isFurniture(l)).map(stripFooterSuffix);
  const HDR = /^Question #(\w+) \((\d+) Points?\)\s*$/;
  const OPT = /^\s*([a-e])\)\s*(.*)$/;
  const entries = [];
  let cur = null;
  for (const line of clean) {
    const m = HDR.exec(line);
    if (m) {
      if (cur) entries.push(cur);
      cur = { n: /^\d+$/.test(m[1]) ? Number(m[1]) : m[1], points: Number(m[2]), lines: [] };
      continue;
    }
    if (cur) cur.lines.push(line);
  }
  if (cur) entries.push(cur);

  const out = [];
  for (const e of entries) {
    const optStarts = [];
    e.lines.forEach((l, i) => { if (OPT.test(l)) optStarts.push(i); });
    let opts = [];
    let stemEnd = e.lines.length;
    if (optStarts.length) {
      let aIdx = -1;
      for (let i = optStarts.length - 1; i >= 0; i--) {
        if (OPT.exec(e.lines[optStarts[i]])[1] === "a") { aIdx = optStarts[i]; break; }
      }
      if (aIdx === -1) aIdx = optStarts[0];
      stemEnd = aIdx;
      let expect = "a";
      for (let i = aIdx; i < e.lines.length; i++) {
        const m = OPT.exec(e.lines[i]);
        if (m && m[1] === expect) {
          opts.push({ letter: m[1], text: [m[2]] });
          expect = String.fromCharCode(expect.charCodeAt(0) + 1);
        } else if (opts.length) {
          const t = e.lines[i].trim();
          if (!/^Select (ONE|TWO|THREE) options?\b/.test(t)) opts[opts.length - 1].text.push(e.lines[i]);
        }
      }
    }
    const options = opts.map((o) => ({ letter: o.letter, text: esc(joinLines(o.text)) }));
    let selectCount = 1;
    for (const l of e.lines) {
      const m = /Select (ONE|TWO|THREE) option/.exec(l);
      if (m) { selectCount = { ONE: 1, TWO: 2, THREE: 3 }[m[1]]; break; }
    }
    const stemLines = e.lines.slice(0, stemEnd).filter((l) => !/Select (ONE|TWO|THREE) option/.test(l));
    let stem = stemHTML(stemLines);
    let exhibit = null;
    const ov = (OVERRIDES[examId] || {})[String(e.n)];
    if (ov) { stem = ov.stem; exhibit = ov.exhibit; }
    out.push({ n: e.n, points: e.points, selectCount, stem, exhibit, options });
  }
  return out;
}
function joinLines(lines) { return lines.map(normWS).filter(Boolean).join(" "); }
function stemHTML(lines) {
  const paras = [];
  let cur = [];
  const flush = () => { if (cur.length) { paras.push(cur); cur = []; } };
  for (const l of lines) {
    if (!l.trim()) { flush(); continue; }
    cur.push(l);
  }
  flush();
  const html = [];
  for (const p of paras) {
    const first = normWS(p[0]);
    if (/^•/.test(first) || /^\s*(i{1,3}|iv|v|vi{1,3}|ix|x)\.\s+/.test(p[0])) {
      const items = [];
      for (const l of p) {
        const t = normWS(l);
        if (/^•/.test(t)) items.push(t.replace(/^•\s*/, ""));
        else if (items.length) items[items.length - 1] += " " + t;
        else items.push(t);
      }
      html.push(`<ul>${items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`);
    } else {
      html.push(`<p>${esc(joinLines(p))}</p>`);
    }
  }
  return html.join("\n");
}

/* ─────────── answers side (column-based) ─────────── */
const HEADER_WORDS = new Set(["Question", "Correct", "Answer", "Number", "Explanation", "Rationale", "Learning", "Objective", "K-Level", "Points", "of", "(LO)", "(#)", "and"]);
function isHeaderLine(t) {
  const words = t.split(/\s+/);
  if (words.length < 2) return false;
  let hits = 0;
  for (const w of words) if (HEADER_WORDS.has(w) || /^\(LO\)$/.test(w) || w === "(#)" || w === "Points" || w === "K-Level") hits++;
  return hits >= Math.max(2, Math.ceil(words.length * 0.6));
}

function parseLineCols(line) {
  const res = { anchor: null, answer: null, lo: null, k: null, pts: null, mid: "", headerK: null, isHeader: false };
  const trimmed = line.trim();
  if (isHeaderLine(trimmed)) {
    res.isHeader = true;
    const km = /\bK[123]\b/.exec(trimmed);
    if (km) res.headerK = km[0];
    return res;
  }
  let pos = 0;
  // walk leading tokens (left zone)
  for (;;) {
    const m = /^\s*(\S+)/.exec(line.slice(pos));
    if (!m) break;
    const tok = m[1];
    const tokCol = pos + m[0].length - tok.length;
    if (tokCol > 19) break;
    if (/^A?\d{1,2}$/.test(tok) && res.anchor === null && tokCol < 13) { res.anchor = tok; pos += m[0].length; continue; }
    // multi-answer split across tokens: "a, e" -> "a," + "e"
    if (/^([a-e],)+$/.test(tok) && res.answer === null && tokCol < 19) {
      res.answer = tok.replace(/,/g, ""); pos += m[0].length; continue;
    }
    if (/^([a-e],)+[a-e]$|^[a-e]$/.test(tok) && (res.answer === null || /^[a-e]+$/.test(res.answer)) && (tokCol < 19 || res.anchor !== null || res.answer !== null)) {
      res.answer = (res.answer === null ? "" : res.answer) + tok.replace(/,/g, ""); pos += m[0].length; continue;
    }
    if (tok === "(#)" || tok === "(#)]" ) { pos += m[0].length; continue; }
    break;
  }
  // right-zone metadata (FL-, K[123], 1) - at start of mid or set off by 3+ spaces
  let mid = line.slice(pos);
  let out = "", last = 0, m2;
  const rx = /(?:^|\s{2,})(FL-\d+(?:\.\d+)+|K[123]|1)(?=\s*$|\s{2,})/g;
  while ((m2 = rx.exec(mid))) {
    const tk = m2[1];
    if (/^FL-/.test(tk) && !res.lo) res.lo = tk;
    else if (/^K[123]$/.test(tk) && !res.k) res.k = tk;
    else if (tk === "1" && res.pts == null) res.pts = 1;
    else continue; // e.g. second stray "1" - keep in text
    out += mid.slice(last, m2.index);
    last = m2.index + m2[0].length;
  }
  out += mid.slice(last);
  // strip trailing header remnants
  res.mid = out.replace(/\s{2,}\(LO\)\s+Points\s*$/, "").replace(/\s{2,}Points\s*$/, "").replace(/\s{2,}\(LO\)\s*$/, "").replace(/\s{2,}K-Level\s*$/, "").trim();
  // row carries only metadata (answer/LO/K/pts) - must not inject a blank line into the stream
  res.metaOnly = res.mid === "" && (res.anchor !== null || res.answer !== null || res.lo !== null || res.k !== null || res.pts !== null);
  return res;
}

function parseAnswers(txt, qData) {
  const rawLines = txt.split(/\r?\n/).map(demangle);
  const answersIdx = rawLines.findIndex((l) => l.trim() === "Answers");
  const keyIdx = rawLines.map((l, i) => /^Appendix: Answer Key for Additional/.test(l.trim()) ? i : -1)
    .reduce((a, b) => Math.max(a, b), -1);
  const extrasIdx = rawLines.map((l, i) => /^Appendix: Answers to Additional/.test(l.trim()) ? i : -1)
    .reduce((a, b) => Math.max(a, b), -1);
  const r1 = rawLines.slice(answersIdx + 1, keyIdx === -1 ? rawLines.length : keyIdx);
  const r2 = extrasIdx === -1 ? [] : rawLines.slice(extrasIdx + 1);
  // answer-key tables: main table sits between the "Answer Key" heading and "Answers";
  // extras table between the two appendix headings
  const ktMainIdx = rawLines.map((l, i) => l.trim() === "Answer Key" ? i : -1)
    .filter((i) => i >= 0 && (answersIdx === -1 || i < answersIdx))
    .reduce((a, b) => Math.max(a, b), -1);
  const keyMain = ktMainIdx === -1 ? new Map() : parseKeyTable(rawLines, ktMainIdx + 1, answersIdx);
  if (process.env.DBG) console.error("KEYMAIN " + JSON.stringify([...keyMain.entries()].map(([k, v]) => k + ":" + (v.answer || "?") + "/" + (v.lo || "-")).join(" ")));
  const keyExtras = keyIdx === -1 || extrasIdx === -1 ? new Map() : parseKeyTable(rawLines, keyIdx + 1, extrasIdx);
  return {
    main: parseRegion(r1, qData.filter((q) => typeof q.n === "number")),
    extras: parseRegion(r2, qData.filter((q) => typeof q.n === "string")),
    keyMain, keyExtras
  };
}

/* answer-key table: 2-column layout; on a given row the answer/LO/K/pts belong to
   the question whose NUMBER appears on the NEXT row (vertical cell centering) */
function parseKeyTable(rawLines, startIdx, endIdx) {
  const out = new Map();
  const ZONE_SPLIT = 75; // left column's K-Level/Points cells reach col ~66; right column's Number starts ~col 86
  for (const zi of [0, 1]) {
    const rows = [];
    for (let i = startIdx; i < endIdx && i < rawLines.length; i++) {
      const line = String(rawLines[i]);
      if (!/\S/.test(line) || /\.\s*\.\s*\./.test(line)) continue; // blank / TOC dots
      const r = { num: null, ans: "", lo: null, k: null, pts: null };
      const rx = /\S+/g;
      let m, prev = null, any = false;
      while ((m = rx.exec(line))) {
        const tok = m[0];
        const inZone = (m.index < ZONE_SPLIT) === (zi === 0);
        if (!inZone) { prev = null; continue; }
        any = true;
        if (r.num === null && prev === null && /^(?:A)?\d{1,2}$/.test(tok)) r.num = tok;
        else if (/^FL-\d+(?:\.\d+)+$/.test(tok)) r.lo = tok;
        else if (/^K[123]$/.test(tok)) r.k = tok;
        else if (tok === "1" && prev && /^K[123]$/.test(prev)) r.pts = 1;
        else if (/^[a-e],?$/.test(tok)) r.ans += tok.replace(",", "");
        prev = tok;
      }
      if (any && (r.num !== null || r.ans || r.lo || r.k || r.pts)) rows.push(r);
    }
    for (let x = 0; x < rows.length; x++) {
      const r = rows[x];
      if (!r.ans && !r.lo && !r.k && r.pts == null) continue;
      let q = null;
      for (let y = x + 1; y < rows.length; y++) if (rows[y].num !== null) { q = rows[y].num; break; }
      if (q === null) q = r.num; // last row of the column
      if (q === null) continue;  // orphan K row below the table - skip
      const cur = out.get(String(q)) || {};
      if (r.ans && cur.answer === undefined) cur.answer = r.ans;
      if (r.lo && cur.lo === undefined) cur.lo = r.lo;
      if (r.k && cur.k === undefined) cur.k = r.k;
      if (r.pts !== null && cur.pts === undefined) cur.pts = r.pts;
      out.set(String(q), cur);
    }
  }
  return out;
}

function parseRegion(lines, qs) {
  const clean = lines.filter((l) => !isFurniture(l)).map(stripFooterSuffix);
  const rows = clean.map((l) => parseLineCols(l));
  // anchors
  const anchors = []; // {n, idx}
  let pendingK = null;
  rows.forEach((r, i) => {
    if (r.isHeader) { if (r.headerK) pendingK = r.headerK; return; }
    if (r.anchor !== null) {
      const n = /^\d+$/.test(r.anchor) ? Number(r.anchor) : r.anchor;
      const a = { n, idx: i, lo: r.lo || null, k: r.k || null, pts: r.pts, pendingK };
      if (r.answer) a.answer = r.answer;
      anchors.push(a);
      pendingK = null;
    }
  });
  // attribute answers & metadata to anchors
  const byIdx = new Map(anchors.map((a) => [a.idx, a]));
  rows.forEach((r, i) => {
    if (r.isHeader || r.answer == null) return;
    if (byIdx.has(i)) { if (!byIdx.get(i).answer) byIdx.get(i).answer = r.answer; return; }
    // nearest anchor within 2 lines; tie -> prefer the anchor below
    let best = null;
    for (const a of anchors) {
      const d = Math.abs(a.idx - i);
      if (d <= 2 && (!best || d < best.d || (d === best.d && a.idx > i))) best = { a, d };
    }
    if (best) { if (!best.a.answer) best.a.answer = r.answer; }
  });
  rows.forEach((r, i) => {
    if (r.isHeader) return;
    for (const [val, field] of [[r.lo, "lo"], [r.k, "k"], [r.pts, "pts"]]) {
      if (val == null) continue;
      if (byIdx.has(i)) { const a = byIdx.get(i); if (a[field] == null) a[field] = val; continue; }
      let best = null;
      for (const a of anchors) {
        const d = Math.abs(a.idx - i);
        if (d <= 2 && (!best || d < best.d)) best = { a, d };
      }
      if (best && best.a[field] == null) best.a[field] = val;
    }
  });
  // explanation stream (mid text in line order; metadata-only rows dropped so they
  // don't leave blank lines inside a sentence)
  const streamLines = [];
  clean.forEach((l, i) => {
    if (rows[i].isHeader || rows[i].metaOnly) return;
    streamLines.push(rows[i].mid);
  });
  const stream = streamLines.join("\n");
  const groups = segmentStream(stream, qs);
  const out = new Map();
  anchors.forEach((a) => {
    if (!out.has(String(a.n))) out.set(String(a.n), {
      n: a.n, answer: a.answer ? a.answer : null, lo: a.lo, k: a.k || a.pendingK, pts: a.pts, explanation: null
    });
  });
  qs.forEach((q, qi) => {
    const a = out.get(String(q.n));
    if (a && groups[qi]) a.explanation = groups[qi];
  });
  return { map: out, groupCount: groups.length, anchorCount: anchors.length };
}

/* stream -> per-question explanation HTML groups */
function segmentStream(stream, qs) {
  // labeled boundaries
  const RX = new RegExp(
    "(?:^|\\n|\\s)(?:(" + "•" + ")|(TC\\s*\\d+\\s*:)|(Thus:?)(?=[\\s\\n])|([a-e]\\)\\s+(?:(?:It\\s+is|Is)\\s+)?(?:not\\s+)?[Cc]orrect\\.)|([a-e]\\)\\s+(?:(?:It\\s+is|Is)\\s+)?(?:not\\s+)?[Cc]orrect(?![.]))|((?:i{1,3}|iv|v|vi{1,3}|ix|x)\\.\\s+Is\\s+(?:true|false|probably true|probably false|correct|not correct)))",
    "g"
  );
  const pieces = [];
  let last = 0, m, bare = false;
  const pushPlain = (text) => {
    if (!text.trim()) return;
    pieces.push({ type: "prose", text: text.trim() });
  };
  while ((m = RX.exec(stream))) {
    const lead = m[0].length - (m[0].replace(/^[\s\n]/, "").length);
    const s = m.index + lead;
    // only text BEFORE the first boundary needs its own prose piece;
    // text between boundaries is part of the preceding boundary piece
    if (!pieces.length && s > 0) pushPlain(stream.slice(0, s));
    let type, label = null;
    if (m[1]) type = "bullet";
    else if (m[2]) type = "tc";
    else if (m[3]) type = "thus";
    else if (m[4]) { type = "verdict"; label = m[4][0]; bare = false; }
    else if (m[5]) { type = "verdict"; label = m[5][0]; bare = true; }
    else { type = "roman"; label = m[6]; }
    const end = s + (m[0].length - lead);
    // piece text extends to the next boundary
    pieces.push({ type, label, bare, start: s, end });
    bare = false;
    RX.lastIndex = end;
  }
  // fill texts - each boundary piece extends to the NEXT boundary piece's start
  for (let i = 0; i < pieces.length; i++) {
    const p = pieces[i];
    if (p.start === undefined) continue;
    let j = i + 1;
    while (j < pieces.length && pieces[j].start === undefined) j++;
    const end = j < pieces.length ? pieces[j].start : stream.length;
    p.text = stream.slice(p.start, end).trim();
    delete p.start;
  }
  // group per question
  // - a verdict-a right after a "Thus:" piece is a conclusion block -> merge into current group
  // - any other verdict-a starts a new question -> close the current group
  // - a prose-class piece (bullets, romans, TC lists, Thus:) after any verdicts closes the current group
  const groups = [];
  let cur = { prose: [], verdicts: [] };
  const closeCur = () => {
    if (cur.verdicts.length || cur.prose.length) groups.push(cur);
    if (process.env.DBG) console.error(`>>> close group#${groups.length - 1} verdicts=${cur.verdicts.length} first=${esc(((cur.verdicts[0] && cur.verdicts[0].text) || cur.prose[0] && cur.prose[0].text || "?").slice(0, 50).replace(/\n/g, "|"))}`);
    cur = { prose: [], verdicts: [] };
  };
  let prev = null;
  for (const p of pieces) {
    if (p.type === "verdict") {
      if (p.label === "a" && cur.verdicts.length && !(prev && prev.type === "thus")) closeCur();
      cur.verdicts.push(p);
    } else {
      // prose/bullet/tc/thus/roman
      if (cur.verdicts.length) { closeCur(); }
      cur.prose.push(p);
    }
    prev = p;
  }
  closeCur();
  // prose absorbed past a true blank line into a group's LAST verdict belongs to the
  // next question's block (e.g. a calculation shown before a "Thus:") - move it over
  for (let g = 0; g < groups.length - 1; g++) {
    const lastV = groups[g].verdicts[groups[g].verdicts.length - 1];
    if (!lastV) continue;
    const cut = lastV.text.search(/\n\s*\n/);
    if (cut < 0) continue;
    const rest = lastV.text.slice(cut).trim();
    if (!rest) continue;
    lastV.text = lastV.text.slice(0, cut).trim();
    groups[g + 1].prose.unshift({ type: "prose", text: rest });
  }
  if (process.env.DBG) {
    console.error(`--- pieces=${pieces.length} groups=${groups.length} ---`);
    for (const p of pieces) console.error(`[${p.type}${p.label ? " " + p.label : ""}${p.bare ? " BARE" : ""}] ${esc((p.text || "").slice(0, 70).replace(/\n/g, "|"))}`);
  }
  return groups.map((g) => groupHTML(g));
}

function groupHTML(g) {
  const parts = [];
  // prose: merge consecutive prose into paragraphs; bullets/tc/roman get own handling
  let para = [];
  const flushPara = () => { if (para.length) { parts.push(`<p>${esc(joinLines(para))}</p>`); para = []; } };
  let list = [];
  const flushList = () => { if (list.length) { parts.push(`<ul>${list.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`); list = []; } };
  for (const p of g.prose) {
    if (p.type === "bullet") { flushPara(); list.push(p.text.replace(/^•\s*/, "")); continue; }
    if (p.type === "tc") { flushPara(); list.push(p.text); continue; }
    if (p.type === "thus") { flushPara(); flushList(); parts.push("<p><strong>Thus:</strong></p>"); continue; }
    if (p.type === "roman") { flushPara(); flushList(); const mm = /^((?:i{1,3}|iv|v|vi{1,3}|ix|x)\.)\s*(.*)$/s.exec(p.text); parts.push(`<p><strong>${esc(mm ? mm[1] : "")} ${esc(mm ? mm[2] : p.text)}</strong></p>`); continue; }
    para.push(p.text);
  }
  flushPara(); flushList();
  for (const v of g.verdicts) {
    const mm = /^([a-e]\))\s*(.*)$/s.exec(v.text);
    parts.push(`<p><strong>${esc(mm ? mm[1] : "")} ${esc(mm ? mm[2] : v.text)}</strong></p>`);
  }
  return parts.join("\n");
}

/* ─────────── merge & write ─────────── */
function main() {
  const qData = parseQuestions(fs.readFileSync(qFile, "utf8"));
  const aData = parseAnswers(fs.readFileSync(aFile, "utf8"), qData);

  const questions = [], extras = [], problems = [];
  for (const q of qData) {
    const a = (typeof q.n === "number" ? aData.main : aData.extras).map.get(String(q.n));
    const kt = (typeof q.n === "number" ? aData.keyMain : aData.keyExtras).get(String(q.n)) || null;
    if (!a && !kt) { problems.push(`Q${q.n}: NO ANSWER ENTRY`); continue; }
    const secAns = a ? a.answer : null;
    const keyAns = kt && kt.answer ? kt.answer : null;
    let answer = keyAns || secAns;
    if (keyAns && secAns && keyAns !== secAns)
      problems.push(`Q${q.n}: ANSWER CONFLICT section=${secAns} key-table=${keyAns}`);
    if (!answer) problems.push(`Q${q.n}: answer not detected`);
    const lo = (kt && kt.lo) || (a && a.lo) || "";
    if (!lo) problems.push(`Q${q.n}: LO not detected`);
    const k = (a && a.k) || (kt && kt.k) || "";
    if (!k) problems.push(`Q${q.n}: K not detected`);
    if (q.options.length < 3) problems.push(`Q${q.n}: only ${q.options.length} options`);
    const ansArr = answer ? answer.split("") : [];
    if (ansArr.length !== q.selectCount && ansArr.length > 0)
      problems.push(`Q${q.n}: selectCount=${q.selectCount} vs answer=${JSON.stringify(answer)}`);
    const exp = a ? (a.explanation || "") : "";
    const hasVerdicts = new Set((exp.match(/[a-e]\) ?(?:It is |Is )?(not )?[Cc]orrect/g) || []).map((s) => s[0])).size;
    if (hasVerdicts > 0 && hasVerdicts < q.options.length)
      problems.push(`Q${q.n}: only ${hasVerdicts}/${q.options.length} verdicts in explanation`);
    if (exp.length < 60) problems.push(`Q${q.n}: explanation short (${exp.length})`);
    // strongest check: letters the explanation marks "Is correct" must equal the answer
    if (exp && ansArr.length) {
      const ok = new Set();
      let vm;
      const vr = /([a-e])\) ?(?:It is |Is )?(not )?[Cc]orrect/g;
      while ((vm = vr.exec(exp))) if (!vm[2]) ok.add(vm[1]);
      if (ok.size && [...ok].sort().join("") !== [...ansArr].sort().join(""))
        problems.push(`Q${q.n}: VERDICT MISMATCH explanation says [${[...ok].sort().join(",")}] answer=${JSON.stringify(answer)}`);
    }
    const item = {
      n: q.n, points: q.points, k: k || "K2", lo, selectCount: q.selectCount,
      stem: q.stem, exhibit: q.exhibit, options: q.options,
      answer: ansArr.length === 1 ? ansArr[0] : ansArr,
      explanation: exp
    };
    (typeof q.n === "number" ? questions : extras).push(item);
  }
  if (keyFile) {
    const key = JSON.parse(fs.readFileSync(keyFile, "utf8"));
    for (const [n, ans] of Object.entries(key)) {
      const item = questions.find((x) => String(x.n) === n);
      const got = item ? (Array.isArray(item.answer) ? item.answer.join("") : item.answer) : "(missing)";
      if (got !== ans.replace(",", "")) problems.push(`KEY MISMATCH Q${n}: parsed=${got} official=${ans}`);
    }
  }
  const js =
`// ISTQB CTFL v4.0 Sample Exam ${examId} — data extracted from the official ISTQB sample exam documents
// Source: (c) International Software Testing Qualifications Board (ISTQB) — non-commercial study use
window.EXAMS = window.EXAMS || {};
window.EXAMS.${examId} = ${JSON.stringify({ id: examId, title: `ISTQB CTFL 4.0 — Sample Exam ${examId}`, questions, extras }, null, 1)};
`;
  fs.writeFileSync(outFile, js, "utf8");

  const rep = [];
  rep.push(`=== EXAM ${examId}: ${questions.length} questions, ${extras.length} extras; main groups=${aData.main.groupCount}/anchors=${aData.main.anchorCount}, extra groups=${aData.extras.groupCount}/anchors=${aData.extras.anchorCount} ===`);
  rep.push(`--- PROBLEMS (${problems.length}) ---`);
  problems.forEach((p) => rep.push(p));
  rep.push("--- FULL DUMP ---");
  const dump = (q) => {
    rep.push(`\n##### Q${q.n} [ans=${JSON.stringify(q.answer)} lo=${q.lo} k=${q.k} sel=${q.selectCount} pts=${q.points}]`);
    rep.push(`STEM: ${q.stem}`);
    if (q.exhibit) rep.push(`EXHIBIT: ${(q.exhibit || "").slice(0, 100)}`);
    q.options.forEach((o) => rep.push(`  ${o.letter}) ${o.text}`));
    rep.push(`EXPL: ${q.explanation}`);
  };
  questions.forEach(dump);
  extras.forEach(dump);
  fs.writeFileSync(outFile + ".report.txt", rep.join("\n"), "utf8");
  console.log(`Wrote ${outFile}: ${questions.length} Q / ${extras.length} extras / ${problems.length} problems`);
}
main();