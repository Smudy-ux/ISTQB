/* Render given pages of a PDF to PNG using pdfjs-dist + @napi-rs/canvas. */
const fs = require("fs");
const path = require("path");
const { createCanvas, Path2D } = require("@napi-rs/canvas");
global.Path2D = Path2D; // pdfjs needs a real Path2D; pdfjs's own Path won't be accepted by ctx.fill

const [, , pdfPath, pagesArg, outPrefix] = process.argv;
const pages = pagesArg.split(",").map(Number);
const scale = 2;

(async () => {
  const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs");
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const doc = await pdfjs.getDocument({ data, isEvalSupported: false, useSystemFonts: true }).promise;
  console.log("total pages:", doc.numPages);
  for (const p of pages) {
    const page = await doc.getPage(p);
    const viewport = page.getViewport({ scale });
    const canvas = createCanvas(viewport.width, viewport.height);
    const ctx = canvas.getContext("2d");
    await page.render({ canvasContext: ctx, viewport }).promise;
    const out = `${outPrefix || "page"}-${String(p).padStart(2, "0")}.png`;
    fs.writeFileSync(out, canvas.toBuffer("image/png"));
    console.log("wrote", out);
  }
})();