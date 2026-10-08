/* ═══════════════════════════════════════════════════════════════════
   ISTQB CTFL 4.0 Exam Simulator
   Modes: mock (60 min, 40 Q, feedback at end) & practice (no timer, instant explanation)
   Tools: calculator + notepad (sidebar)
   ═══════════════════════════════════════════════════════════════════ */
"use strict";

/* ─────────── constants ─────────── */
const MOCK_SECONDS = 60 * 60;          // 60 minutes
const QUESTION_COUNT = 40;
const PASS_MARK = 0.65;                // 65% of total points
const LS_SESSION = "istqb.session";
const LS_NOTE_PREFIX = "istqb.note.";
const LS_THEME = "istqb.theme";
const LS_BEST = "istqb.best";

const CHAPTERS = {
  1: "1. Fundamentals of Testing",
  2: "2. Testing Throughout the SDLC",
  3: "3. Static Testing",
  4: "4. Test Analysis and Design",
  5: "5. Managing the Test Activities",
  6: "6. Test Tools"
};

/* ─────────── global state ─────────── */
const S = {
  mode: "mock",            // 'mock' | 'practice'
  examId: "A",             // 'A'..'D' | 'MIX'
  pool: [],                // [{examId, q}] the 40 selected question objects (q has _key)
  order: [],               // indices into pool (after shuffle)
  idx: 0,                  // current position in order
  answers: {},             // qKey -> array of letters (may be partial selection)
  checked: {},            // qKey -> true (practice: locked & revealed)
  flags: {},               // qKey -> true
  remaining: MOCK_SECONDS, // mock timer
  timerId: null,
  review: false,           // reviewing a finished exam
  startedAt: 0,
  usedSeconds: 0,
  finished: false
};

let selectedMode = null;
let selectedExam = "A";

/* ─────────── helpers ─────────── */
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function fmtTime(sec) {
  sec = Math.max(0, Math.round(sec));
  const m = Math.floor(sec / 60), s = sec % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}
function chapterOf(lo) {
  const m = /^FL-(\d)/.exec(lo || "");
  return m ? Number(m[1]) : 0;
}

/* ═════════════ HOME SCREEN ═════════════ */
function initHome() {
  // exam picker
  document.querySelectorAll(".exam-btn").forEach((b) => {
    b.addEventListener("click", () => {
      document.querySelectorAll(".exam-btn").forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      selectedExam = b.dataset.exam;
      $("exam-hint").textContent =
        selectedExam === "MIX"
          ? "40 random questions drawn from all sample sets (incl. additional questions) — different every time."
          : "The official 40-question sample exam, ordered by syllabus chapter.";
    });
  });
  $("exam-picker").querySelector('[data-exam="A"]').classList.add("active");

  // mode cards
  $("card-mock").addEventListener("click", () => selectMode("mock"));
  $("card-practice").addEventListener("click", () => selectMode("practice"));

  // resume banner
  const sess = loadSession();
  if (sess && !sess.finished) {
    $("resume-banner").classList.remove("hidden");
    const left = sess.mode === "mock" ? ` · ${fmtTime(sess.remaining)} left` : " · practice mode";
    $("resume-text").textContent = `You have an unfinished ${sess.mode === "mock" ? "mock exam" : "practice session"} (Set ${sess.examId}, ${Object.keys(sess.answers || {}).length}/${QUESTION_COUNT} answered${left}).`;
    $("btn-resume").onclick = () => { restoreSession(sess); };
    $("btn-discard").onclick = () => {
      localStorage.removeItem(LS_SESSION);
      $("resume-banner").classList.add("hidden");
    };
  }

  function selectMode(mode) {
    selectedMode = mode;
    startExam(mode, selectedExam, $("shuffle-toggle").checked);
  }
}

/* ═════════════ EXAM LIFECYCLE ═════════════ */
function availableExams() {
  return Object.keys(window.EXAMS || {}).sort();
}

function buildPool(examId) {
  let list = [];
  if (examId === "MIX") {
    for (const id of availableExams()) {
      const ex = window.EXAMS[id];
      for (const q of ex.questions || []) list.push({ examId: id, q });
      for (const q of ex.extras || []) list.push({ examId: id, q });
    }
    list = shuffle(list);
    list = list.slice(0, QUESTION_COUNT);
  } else {
    const ex = window.EXAMS[examId];
    for (const q of ex.questions || []) list.push({ examId, q });
    list = list.slice(0, QUESTION_COUNT);
  }
  // questions are uniquely identified by exam set + number (extras have string n like "A1")
  list.forEach((item) => { item.q._key = `${item.examId}#${item.q.n}`; });
  return list;
}

function startExam(mode, examId, doShuffle) {
  if (!window.EXAMS || !availableExams().length) {
    alert("Question data files failed to load — check the data/ folder.");
    return;
  }
  S.mode = mode;
  S.examId = examId;
  S.pool = buildPool(examId);
  S.order = doShuffle ? shuffle(S.pool.map((_, i) => i)) : S.pool.map((_, i) => i);
  S.idx = 0;
  S.answers = {};
  S.checked = {};
  S.flags = {};
  S.remaining = MOCK_SECONDS;
  S.review = false;
  S.finished = false;
  S.startedAt = Date.now();
  S.usedSeconds = 0;

  const ex = window.EXAMS[examId];
  $("exam-name").textContent = examId === "MIX" ? "ISTQB CTFL 4.0 — Mixed Random Exam" : ex.title;
  $("exam-mode-badge").textContent = mode === "mock" ? "MOCK · 60 MIN" : "PRACTICE";
  $("exam-mode-badge").classList.toggle("practice", mode === "practice");

  // mock: shuffle should probably keep order; practice: default order
  $("timer").classList.toggle("hidden", mode !== "mock");
  $("btn-check").classList.toggle("hidden", mode !== "practice");
  $("btn-reveal").classList.toggle("hidden", mode !== "practice");

  loadNotepad();
  showScreen("exam");
  renderAll();
  if (mode === "mock") startTimer();
  saveSession();
}

function restoreSession(sess) {
  S.mode = sess.mode;
  S.examId = sess.examId;
  // deterministically rebuild the exact same pool from (examId, question number) pairs
  S.pool = sess.keys.map((k) => {
    const [examId, n] = k.split("#");
    const num = Number(n);
    const ex = window.EXAMS[examId];
    let q = null;
    for (const cand of ex.questions || []) if (String(cand.n) === String(n)) q = cand;
    for (const cand of ex.extra || []) if (String(cand.n) === String(n)) q = cand;
    if (!q) throw new Error("Cannot restore question " + k);
    q._key = k;
    return { examId, q };
  });
  S.order = sess.order;
  S.idx = sess.idx;
  S.answers = sess.answers || {};
  S.checked = sess.checked || {};
  S.flags = sess.flags || {};
  S.remaining = sess.mode === "mock" ? sess.remaining : MOCK_SECONDS;
  S.review = false;
  S.finished = false;
  S.startedAt = Date.now();

  const ex = window.EXAMS[sess.examId];
  $("exam-name").textContent = sess.examId === "MIX" ? "ISTQB CTFL 4.0 — Mixed Random Exam" : ex.title;
  $("exam-mode-badge").textContent = sess.mode === "mock" ? "MOCK · 60 MIN" : "PRACTICE";
  $("exam-mode-badge").classList.toggle("practice", sess.mode === "practice");
  $("timer").classList.toggle("hidden", sess.mode !== "mock");
  $("btn-check").classList.toggle("hidden", sess.mode === "mock");
  $("btn-reveal").classList.toggle("hidden", sess.mode === "mock");

  loadNotepad();
  showScreen("exam");
  renderAll();
  if (sess.mode === "mock") startTimer();
}

function saveSession() {
  if (S.finished || S.review) return;
  const sess = {
    mode: S.mode, examId: S.examId,
    keys: S.pool.map((it) => `${it.examId}#${it.q.n}`),
    order: S.order, idx: S.idx, answers: S.answers, checked: S.checked,
    flags: S.flags, remaining: S.remaining, ts: Date.now()
  };
  localStorage.setItem(LS_SESSION, JSON.stringify(sess));
}
function loadSession() {
  try { return JSON.parse(localStorage.getItem(LS_SESSION)); } catch { return null; }
}

function quitExam() {
  showModal("Leave the exam?", null, [
    { label: "Keep & go home", cls: "btn-secondary", fn: () => { stopTimer(); saveSession(); closeModal(); showScreen("home"); } },
    { label: "Discard session", cls: "btn-ghost", fn: () => { stopTimer(); localStorage.removeItem(LS_SESSION); closeModal(); showScreen("home"); } },
    { label: "Cancel", cls: "btn-primary", fn: closeModal }
  ]);
}

/* ═════════════ TIMER ═════════════ */
function startTimer() {
  stopTimer();
  updateTimerDisplay();
  S.timerId = setInterval(() => {
    S.remaining -= 1;
    updateTimerDisplay();
    if (S.remaining <= 0) {
      stopTimer();
      finishExam(true);
    }
  }, 1000);
}
function stopTimer() { if (S.timerId) { clearInterval(S.timerId); S.timerId = null; } }
function updateTimerDisplay() {
  const t = $("timer");
  t.classList.remove("warn", "critical");
  if (S.remaining <= 120) t.classList.add("critical");
  else if (S.remaining <= 600) t.classList.add("warn");
  $("timer-value").textContent = fmtTime(S.remaining);
}

/* ═════════════ RENDERING ═════════════ */
function showScreen(name) {
  ["home", "exam", "results"].forEach((s) => $(s).classList.toggle("active", s === name));
  window.scrollTo(0, 0);
}

function currentQ() {
  const poolIdx = S.order[S.idx];
  return S.pool[poolIdx];
}

function renderAll() {
  renderQuestion();
  renderNavigator();
  renderProgress();
}

/* Explanations carry pdftotext line wraps as raw \n. Inside <p> blocks those
   collapse to spaces (harmless for wrapped prose), but enumerated lines that
   begin a new line ("1. ...", "i. ...", "A. ...", "– bullet") would flow
   together into a run-on. Turn only those breaks into real line breaks. */
function renderExplanation(html) {
  return html.replace(/\n(?=\s*[•–-]\s)/g, "<br>")
    .replace(/\n(?=\s*\d{1,2}[.)]\s)/g, "<br>")
    .replace(/\n(?=\s*(?:i|ii|iii|iv|v)\. [A-Z"])/g, "<br>")
    .replace(/\n(?=\s*[ABCDEF][.)] [A-Z“"\'])/g, "<br>")
    // color each verdict by its own wording ("a) Is not correct" must not
    // render green just because it comes first)
    // Color the correct verdict's heading green ("c) Is correct."). Negated
    // verdicts ("a) Is not correct.") never match, so a wrong option's line
    // can't borrow the success color — the old CSS painted the FIRST verdict
    // green no matter which option it judged.
    .replace(/<p><strong>([a-e]\)\s*(?:It is |Is )?(?!not\b)correct\.?)/gi,
      (m, label) => `<p><strong class="vok">${label}</strong><strong>`);
}

function renderProgress() {
  const n = Object.keys(S.answers).filter((k) => (S.answers[k] || []).length).length;
  $("answered-count").textContent = `${n} / ${S.pool.length} answered`;
}

function renderQuestion() {
  const item = currentQ();
  const q = item.q;
  const key = q._key;
  const reviewing = S.review;
  const revealed = reviewing || (S.mode === "practice" && S.checked[key]);
  const picked = S.answers[key] || [];

  $("q-number").textContent = `Question ${S.idx + 1} of ${S.pool.length}`;
  $("q-points").textContent = `${q.points} point${q.points > 1 ? "s" : ""}`;
  $("q-select").textContent = q.selectCount === 1 ? "Select ONE option" : `Select ${["ONE", "TWO", "THREE"][q.selectCount - 1] || q.selectCount} options`;

  const flagBtn = $("btn-flag");
  flagBtn.classList.toggle("flagged", !!S.flags[key]);
  flagBtn.querySelector("span").textContent = S.flags[key] ? "Flagged" : "Flag";

  $("q-stem").innerHTML = q.stem;
  $("q-exhibit").innerHTML = q.exhibit || "";

  // options
  const wrap = $("q-options");
  wrap.innerHTML = "";
  const correct = Array.isArray(q.answer) ? q.answer : [q.answer];
  q.options.forEach((opt) => {
    const div = document.createElement("div");
    div.className = "option";
    div.dataset.letter = opt.letter;
    const isPicked = picked.includes(opt.letter);
    if (isPicked) div.classList.add("selected");
    if (revealed) {
      div.classList.add("locked");
      if (correct.includes(opt.letter)) div.classList.add("correct");
      else if (isPicked) div.classList.add("wrong");
    }
    div.innerHTML = `<span class="letter">${opt.letter.toUpperCase()}</span><span class="opt-text">${opt.text}</span>`;
    if (!revealed) {
      div.addEventListener("click", () => pickOption(opt.letter));
    }
    wrap.appendChild(div);
  });

  // feedback + explanation
  if (revealed) {
    const isCorrect = isAnswerCorrect(q);
    const fb = $("feedback");
    fb.classList.remove("hidden");
    const banner = $("feedback-banner");
    banner.className = "feedback-banner " + (isCorrect ? "ok" : "bad");
    banner.innerHTML = isCorrect
      ? `<span>✔</span> Correct!`
      : `<span>✘</span> Incorrect — you chose <b>${picked.map((l) => l.toUpperCase()).join(", ") || "—"}</b>, the correct answer is <b>${correct.map((l) => l.toUpperCase()).join(", ")}</b>.`;
    $("exp-meta").textContent = `${q.lo} · ${q.k} · ${q.points} pt`;
    $("explanation-body").innerHTML = renderExplanation(q.explanation);
  } else {
    $("feedback").classList.add("hidden");
  }

  // footer buttons
  $("btn-prev").disabled = S.idx === 0;
  $("btn-next").classList.toggle("hidden", S.idx >= S.pool.length - 1);
  // the submit/finish button must always be visible (it starts .hidden in the markup);
  // it glows once every question is answered so the exam can be finished from any question
  const btnSubmit = $("btn-submit");
  btnSubmit.classList.remove("hidden");
  btnSubmit.textContent = S.review ? "← Back to results"
    : (S.mode === "mock" ? "Submit exam" : "Finish & see results");
  btnSubmit.classList.toggle("ready",
    !S.review && S.pool.every((it) => (S.answers[it.q._key] || []).length === it.q.selectCount));
  if (S.review) {
    $("btn-check").classList.add("hidden");
    $("btn-reveal").classList.add("hidden");
  } else if (S.mode === "practice") {
    $("btn-check").classList.remove("hidden");
    $("btn-check").disabled = (S.answers[key] || []).length !== q.selectCount;
    $("btn-reveal").classList.remove("hidden");
  }
}

function renderNavigator() {
  const nav = $("navigator");
  nav.innerHTML = "";
  S.order.forEach((poolIdx, pos) => {
    const q = S.pool[poolIdx].q;
    const key = q._key;
    const cell = document.createElement("button");
    cell.className = "nav-cell";
    cell.textContent = pos + 1;
    if ((S.answers[key] || []).length) cell.classList.add("answered");
    if (S.flags[key]) cell.classList.add("flagged");
    if (pos === S.idx) cell.classList.add("current");
    if (S.review || (S.mode === "practice" && S.checked[key])) {
      cell.classList.add(isAnswerCorrect(q) ? "correct" : "wrong");
      cell.classList.remove("answered");
    }
    cell.title = `Question ${pos + 1}${q.lo ? ` · ${q.lo}` : ""}`;
    cell.addEventListener("click", () => { S.idx = pos; renderAll(); });
    nav.appendChild(cell);
  });
}

/* ═════════════ ANSWERING ═════════════ */
function pickOption(letter) {
  const q = currentQ().q;
  const key = q._key;
  let picked = (S.answers[key] || []).slice();
  if (q.selectCount === 1) {
    picked = [letter];
  } else {
    if (picked.includes(letter)) picked = picked.filter((l) => l !== letter);
    else if (picked.length >= q.selectCount) {
      picked = picked.slice(1); // full: drop the oldest selection
      picked.push(letter);
    } else {
      picked.push(letter);
    }
  }
  S.answers[key] = picked;
  renderQuestion();
  renderNavigator();
  renderProgress();
  saveSession();
}

function isAnswerCorrect(q) {
  const picked = S.answers[q._key] || [];
  const correct = (Array.isArray(q.answer) ? q.answer : [q.answer]).slice().sort();
  const p = picked.slice().sort();
  return p.length === correct.length && p.every((l, i) => l === correct[i]);
}

function checkAnswer() {
  const q = currentQ().q;
  if ((S.answers[q._key] || []).length !== q.selectCount) return;
  S.checked[q._key] = true;
  saveSession();
  renderAll();
}

function revealAnswer() {
  const q = currentQ().q;
  S.checked[q._key] = true;
  if (!(S.answers[q._key] || []).length) S.answers[q._key] = [];
  saveSession();
  renderAll();
}

/* ═════════════ FINISH & RESULTS ═════════════ */
function scoreExam() {
  let points = 0, total = 0, correctCount = 0, answered = 0;
  const chapters = {};
  S.pool.forEach((item) => {
    const q = item.q;
    total += q.points;
    const ch = chapterOf(q.lo);
    if (!chapters[ch]) chapters[ch] = { correct: 0, total: 0 };
    chapters[ch].total += q.points;
    if ((S.answers[q._key] || []).length) answered++;
    if (isAnswerCorrect(q)) {
      points += q.points;
      correctCount++;
      chapters[ch].correct += q.points;
    }
  });
  return { points, total, correctCount, answered, chapters };
}

function finishExam(auto = false) {
  if (S.finished) return;
  const answered = Object.keys(S.answers).filter((k) => S.answers[k].length).length;
  const isMock = S.mode === "mock";
  if (!auto && answered < S.pool.length) {
    showModal(isMock ? "Submit exam?" : "Finish practice?",
      `You answered ${answered} of ${S.pool.length} questions. Unanswered questions are scored as incorrect.`, [
      { label: isMock ? "Submit anyway" : "Finish anyway", cls: "btn-success", fn: () => { closeModal(); doFinish(); } },
      { label: "Back to exam", cls: "btn-secondary", fn: closeModal }
    ]);
    return;
  }
  doFinish();

  function doFinish() {
    stopTimer();
    S.usedSeconds = Math.round((Date.now() - S.startedAt) / 1000);
    S.finished = true;
    S.review = false;
    // practice mode: lock every question so review shows explanations
    if (S.mode === "practice") {
      S.pool.forEach((it) => { S.checked[it.q._key] = true; if (!S.answers[it.q._key]) S.answers[it.q._key] = []; });
    }
    localStorage.removeItem(LS_SESSION);
    showResults();
  }
}

function showResults() {
  const r = scoreExam();
  const pct = r.total ? r.points / r.total : 0;
  const passed = pct >= PASS_MARK;
  const v = $("verdict");
  v.textContent = S.mode === "mock" ? (passed ? "PASSED" : "FAILED") : "PRACTICE COMPLETE";
  v.className = "verdict " + (S.mode === "mock" ? (passed ? "pass" : "fail") : "pass");
  $("score-big").textContent = `${r.points} / ${r.total}`;
  $("score-sub").textContent = `${Math.round(pct * 100)}% — pass mark is 65% (${Math.ceil(PASS_MARK * r.total)} points)`;

  const stats = [
    { val: r.correctCount, lbl: "correct" },
    { val: r.total - r.correctCount, lbl: "incorrect" },
    { val: S.mode === "mock" ? fmtTime(S.usedSeconds) : "no limit", lbl: S.mode === "mock" ? "time used" : "time" }
  ];
  if (S.mode === "mock") {
    const prev = Number(localStorage.getItem(LS_BEST) || 0);
    if (r.points > prev) localStorage.setItem(LS_BEST, String(r.points));
    stats.push({ val: `${localStorage.getItem(LS_BEST)}/${r.total}`, lbl: "personal best" });
  }
  $("results-stats").innerHTML = stats.map((s) => `<div class="stat"><div class="val">${s.val}</div><div class="lbl">${s.lbl}</div></div>`).join("");

  // chapter breakdown
  const br = $("chapter-breakdown");
  br.innerHTML = "<h3>Performance by syllabus chapter</h3>";
  Object.keys(r.chapters).sort().forEach((ch) => {
    const c = r.chapters[ch];
    const p = c.total ? c.correct / c.total : 0;
    const fill = document.createElement("div");
    fill.className = "chapter-row";
    const cls = p >= 0.65 ? "" : p >= 0.4 ? "mid" : "low";
    fill.innerHTML = `
      <div class="chapter-name" title="${esc(CHAPTERS[ch] || `Chapter ${ch}`)}">${esc(CHAPTERS[ch] || `Chapter ${ch}`)}</div>
      <div class="chapter-bar"><div class="chapter-fill ${cls}" style="width:${Math.round(p * 100)}%"></div></div>
      <div class="chapter-score">${c.correct}/${c.total}</div>`;
    br.appendChild(fill);
  });

  showScreen("results");
  renderAll(); // keep exam screen in sync for review
}

function reviewAnswers() {
  S.review = true;
  S.idx = 0;
  // practice review also reuses feedback panel per question (rendered from checked/answers)
  S.pool.forEach((it) => { S.checked[it.q._key] = true; });
  showScreen("exam");
  renderAll();
}

/* ═════════════ MODAL ═════════════ */
function showModal(title, text, actions) {
  $("modal-title").textContent = title;
  const p = $("modal-text");
  if (text) { p.textContent = text; p.classList.remove("hidden"); }
  else p.classList.add("hidden");
  const box = $("modal-actions");
  box.innerHTML = "";
  actions.forEach((a) => {
    const b = document.createElement("button");
    b.className = "btn " + a.cls;
    b.textContent = a.label;
    b.addEventListener("click", a.fn);
    box.appendChild(b);
  });
  $("modal-overlay").classList.remove("hidden");
}
function closeModal() { $("modal-overlay").classList.add("hidden"); }

/* ═════════════ NOTEPAD ═════════════ */
function notepadKey() { return LS_NOTE_PREFIX + S.examId; }
function loadNotepad() {
  $("notepad").value = localStorage.getItem(notepadKey()) || "";
  updateNoteCount();
}
function updateNoteCount() {
  const n = $("notepad").value.length;
  $("note-count").textContent = `${n} character${n === 1 ? "" : "s"}`;
}

/* ═════════════ CALCULATOR ═════════════ */
const calc = { acc: null, op: null, expr: "", fresh: true };

function calcPress(k) {
  const disp = $("calc-display");
  let v = disp.value;
  const val = parseFloat(v) || 0;

  if (/^[0-9]$/.test(k)) {
    disp.value = (calc.fresh || v === "0") ? k : v + k;
    calc.fresh = false;
    return;
  }
  switch (k) {
    case ".": if (!v.includes(".")) disp.value = calc.fresh ? "0." : v + "."; calc.fresh = false; break;
    case "C": disp.value = "0"; calc.acc = null; calc.op = null; calc.expr = ""; calc.fresh = true; break;
    case "back": disp.value = v.length > 1 ? v.slice(0, -1) : "0"; break;
    case "neg": if (v !== "0") disp.value = v.startsWith("-") ? v.slice(1) : "-" + v; break;
    case "%": disp.value = String(val / 100); calc.fresh = true; break;
    case "+": case "-": case "*": case "/": applyOp(); calc.op = k; calc.expr = `${disp.value} ${sym(k)}`; calc.fresh = true; break;
    case "=":
      if (calc.op) {
        calc.expr = `${calc.acc} ${sym(calc.op)} ${disp.value}`;
        const res = compute(calc.acc, parseFloat(disp.value) || 0, calc.op);
        disp.value = String(res);
        calc.acc = null; calc.op = null; calc.fresh = true;
        $("calc-history").textContent = calc.expr + " =";
      } else {
        $("calc-history").textContent = "";
      }
      break;
  }
  function applyOp() {
    if (calc.op && calc.acc !== null) {
      disp.value = String(compute(calc.acc, parseFloat(disp.value) || 0, calc.op));
      calc.acc = null; calc.op = null;
    }
    calc.acc = parseFloat(disp.value) || 0;
  }
}
function compute(a, b, op) {
  switch (op) {
    case "+": return round(a + b);
    case "-": return round(a - b);
    case "*": return round(a * b);
    case "/": return b === 0 ? "Error" : round(a / b);
  }
  return b;
}
function round(n) {
  if (typeof n !== "number") return n;
  return Math.round(n * 1e10) / 1e10;
}
const sym = (op) => ({ "+": "+", "-": "−", "*": "×", "/": "÷" }[op] || op);

/* ═════════════ WIRE-UP ═════════════ */
function init() {
  // theme
  const savedTheme = localStorage.getItem(LS_THEME);
  if (savedTheme === "dark") { document.body.classList.add("dark"); $("btn-theme").textContent = "☀️"; }
  $("btn-theme").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const dark = document.body.classList.contains("dark");
    localStorage.setItem(LS_THEME, dark ? "dark" : "light");
    $("btn-theme").textContent = dark ? "☀️" : "🌙";
  });

  // sidebar collapse
  $("sidebar-collapse").addEventListener("click", () => {
    document.body.classList.toggle("sidebar-hidden");
  });

  initHome();

  // navigation
  $("btn-prev").addEventListener("click", () => { if (S.idx > 0) { S.idx--; renderAll(); } });
  $("btn-next").addEventListener("click", () => { if (S.idx < S.pool.length - 1) { S.idx++; renderAll(); } });
  $("btn-check").addEventListener("click", checkAnswer);
  $("btn-reveal").addEventListener("click", revealAnswer);
  $("btn-flag").addEventListener("click", () => {
    const q = currentQ().q;
    S.flags[q._key] = !S.flags[q._key];
    renderQuestion(); renderNavigator();
    saveSession();
  });
  $("btn-submit").addEventListener("click", () => { if (S.review) showResults(); else finishExam(false); });
  $("btn-quit").addEventListener("click", quitExam);

  // results
  $("btn-review").addEventListener("click", reviewAnswers);
  $("btn-retry").addEventListener("click", () => { localStorage.removeItem(LS_SESSION); startExam(S.mode, S.examId, true); });
  $("btn-home").addEventListener("click", () => { showScreen("home"); location.reload(); });

  // modal overlay click = cancel
  $("modal-overlay").addEventListener("click", (e) => { if (e.target === $("modal-overlay")) closeModal(); });

  // keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (!$("exam").classList.contains("active")) return;
    if (e.target === $("notepad") || e.target === $("calc-display")) return;
    if (e.key === "ArrowLeft") $("btn-prev").click();
    if (e.key === "ArrowRight" && !$("btn-next").classList.contains("hidden")) $("btn-next").click();
    const m = /^([a-e])$/i.exec(e.key);
    if (m && S.review === false && !(S.mode === "practice" && S.checked[currentQ().q._key])) pickOption(m[1].toLowerCase());
    if (e.key === "Enter" && S.mode === "practice" && !$("btn-check").classList.contains("hidden") && !$("btn-check").disabled) checkAnswer();
  });

  // calculator
  $("calc-grid").addEventListener("click", (e) => {
    const btn = e.target.closest(".calc-key");
    if (btn) calcPress(btn.dataset.k);
  });
  $("calc-display").addEventListener("keydown", (e) => {
    const map = { Enter: "=", Backspace: "back", Escape: "C", "+": "+", "-": "-", "*": "*", "/": "/", ".": ".", "%": "%" };
    if (/^[0-9]$/.test(e.key)) { e.preventDefault(); calcPress(e.key); }
    else if (map[e.key]) { e.preventDefault(); calcPress(map[e.key]); }
  });

  // notepad
  let noteTimer = null;
  $("notepad").addEventListener("input", () => {
    updateNoteCount();
    clearTimeout(noteTimer);
    noteTimer = setTimeout(() => localStorage.setItem(notepadKey(), $("notepad").value), 400);
  });
  $("note-clear").addEventListener("click", () => {
    showModal("Clear notepad?", "Your notes for this exam will be deleted.", [
      { label: "Clear", cls: "btn-ghost", fn: () => { $("notepad").value = ""; localStorage.removeItem(notepadKey()); updateNoteCount(); closeModal(); } },
      { label: "Cancel", cls: "btn-primary", fn: closeModal }
    ]);
  });
  $("note-download").addEventListener("click", () => {
    const blob = new Blob([$("notepad").value], { type: "text/plain;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `istqb-${S.examId}-notes.txt`;
    a.click();
    URL.revokeObjectURL(a.href);
  });
}

document.addEventListener("DOMContentLoaded", init);