/* Render-test an exhibit SVG string with CSS vars substituted, both light & dark. */
const fs = require("fs");
const path = require("path");
const { createCanvas, Path2D, loadImage } = require("@napi-rs/canvas");
global.Path2D = Path2D;

const THEMES = {
  light: { bg: "#f1f5f9", card: "#ffffff", ink: "#0f2540", "ink-soft": "#4a5b70", "ink-faint": "#8195a8", line: "#dfe6ee" },
  dark: { bg: "#0d1522", card: "#16233a", ink: "#e7edf5", "ink-soft": "#aebccb", "ink-faint": "#6f8399", line: "#26344a" },
};

(async () => {
  const qPath = path.resolve(__dirname, "extracted-svg.txt");
  const raw = fs.readFileSync(qPath, "utf8");
  for (const [name, vars] of Object.entries(THEMES)) {
    let svg = raw.replace(/var\(--([a-z-]+)\)/g, (m, k) => {
      if (!(k in vars)) throw new Error("unsubstituted var --" + k);
      return vars[k];
    });
    // CSS rules that would apply via .exhibit svg text/rect — emulate on standalone SVG
    svg = svg.replace(/<text /g, '<text fill="' + vars.ink + '" ');
    const img = await loadImage(Buffer.from(svg));
    const scale = 1.5;
    const canvas = createCanvas(Math.round(img.width * scale), Math.round(img.height * scale));
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = vars.bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    const out = `svg-test-${name}.png`;
    fs.writeFileSync(out, canvas.toBuffer("image/png"));
    console.log("wrote", out, canvas.width + "x" + canvas.height);
  }
})().catch(e => { console.error("FAIL", e && e.message || e); process.exit(1); });