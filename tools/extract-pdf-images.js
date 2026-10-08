/* Extract all /Subtype/Image XObjects from a PDF, decode FlateDecode
   (with PNG-predictor rows), and save as PNG files for inspection. */
const fs = require("fs");
const zlib = require("zlib");
const path = require("path");

const pdfPath = process.argv[2];
const outDir = process.argv[3] || "pdf-images";
fs.mkdirSync(outDir, { recursive: true });
const buf = fs.readFileSync(pdfPath);

/* PNG predictor unfilter */
function unfilter(raw, rowBytes, height, bpp) {
  const out = Buffer.alloc(rowBytes * height);
  let p = 0;
  for (let y = 0; y < height; y++) {
    const ft = raw[p++];
    const row = out.slice(y * rowBytes, (y + 1) * rowBytes);
    const prev = y > 0 ? out.slice((y - 1) * rowBytes, y * rowBytes) : null;
    for (let x = 0; x < rowBytes; x++) {
      const cur = raw[p++];
      const left = x >= bpp ? row[x - bpp] : 0;
      const up = prev ? prev[x] : 0;
      const ul = prev && x >= bpp ? prev[x - bpp] : 0;
      let v;
      switch (ft) {
        case 0: v = cur; break;
        case 1: v = cur + left; break;
        case 2: v = cur + up; break;
        case 3: v = cur + ((left + up) >> 1); break;
        case 4: {
          const pa = Math.abs(up - ul), pb = Math.abs(left - ul), pc = Math.abs(left + up - 2 * ul);
          const pr = (pa <= pb && pa <= pc) ? left : (pb <= pc ? up : ul);
          v = cur + pr; break;
        }
        default: v = cur;
      }
      row[x] = v & 0xff;
    }
  }
  return out;
}

/* minimal PNG writer (8-bit, colorType 2=RGB / 0=gray) */
function crc32(b) {
  let c, table = crc32.table;
  if (!table) {
    table = crc32.table = [];
    for (let n = 0; n < 256; n++) { c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; table[n] = c >>> 0; }
  }
  let crc = 0xffffffff;
  for (let i = 0; i < b.length; i++) crc = table[(crc ^ b[i]) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}
function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const t = Buffer.from(type, "latin1");
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(Buffer.concat([t, data])));
  return Buffer.concat([len, t, data, crc]);
}
function writePNG(file, w, h, channels, raw) {
  const colorType = channels === 3 ? 2 : 0;
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0); ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8; ihdr[9] = colorType; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;
  const stride = w * channels;
  const scan = Buffer.alloc((stride + 1) * h);
  for (let y = 0; y < h; y++) {
    scan[y * (stride + 1)] = 0;
    raw.copy(scan, y * (stride + 1) + 1, y * stride, (y + 1) * stride);
  }
  const png = Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", zlib.deflateSync(scan, { level: 9 })),
    chunk("IEND", Buffer.alloc(0))
  ]);
  fs.writeFileSync(file, png);
}

/* scan: every "/Subtype /Image" occurrence; dict text spans from the enclosing
   "N 0 obj" (searched backward) to the next "stream" keyword */
const seen = new Set();
let m, count = 0;
const re = /\/Subtype\s*\/Image/g;
while ((m = re.exec(buf))) {
  const headIdx = buf.lastIndexOf(" obj", m.index);
  const numM = /(\d+)\s+0\s+obj\s*$/.exec(buf.slice(Math.max(0, headIdx - 12), headIdx + 4).toString("latin1"));
  const num = numM ? numM[1] : "x" + m.index;
  if (seen.has(num)) continue;
  const streamIdx = buf.indexOf("stream", m.index);
  if (streamIdx < 0) continue;
  const dict = buf.slice(headIdx, streamIdx).toString("latin1");
  if (!/\/Subtype\s*\/Image/.test(dict)) continue;
  seen.add(num);
  const get = (k) => { const mm = new RegExp("\\/" + k + "\\s+(\\d+)").exec(dict); return mm ? +mm[1] : null; };
  const w = get("Width"), h = get("Height"), bpc = get("BitsPerComponent");
  const filter = /\/Filter\s*\/(\w+)/.exec(dict) || /\/Filter\s*\[(\w+)/.exec(dict);
  const cs = /\/ColorSpace\s*\/(\w+)/.exec(dict);
  if (!w || !h || bpc !== 8) { console.log(`img ${num}: skipped (w=${w} h=${h} bpc=${bpc})`); continue; }
  const channels = cs && cs[1] === "DeviceGray" ? 1 : (cs && cs[1] === "DeviceRGB" ? 3 : 3);
  const fl = filter ? filter[1] : "none";
  if (fl !== "FlateDecode" && fl !== "none") { console.log(`img ${num}: skipped (filter=${fl})`); continue; }
  const start = streamIdx + "stream".length;
  let end = buf.indexOf("endstream", start);
  let data = buf.slice(start, end);
  if (data[0] === 0x0d) data = data.slice(1);
  if (data[0] === 0x0a) data = data.slice(1);
  let raw;
  try { raw = fl === "FlateDecode" ? zlib.inflateSync(data) : data; }
  catch (e) { console.log(`img ${num}: inflate failed: ${e.message}`); continue; }
  const pred = /Predictor\s+(\d+)/.exec(dict);
  const cols = get("Columns") || w;
  const colors = /\/Colors\s+(\d+)/.exec(dict) ? +/\/Colors\s+(\d+)/.exec(dict)[1] : channels;
  if (pred && +pred[1] >= 10) {
    const rowBytes = Math.ceil(cols * colors * bpc / 8);
    raw = unfilter(raw, rowBytes, h, colors * bpc / 8);
  }
  const file = path.join(outDir, `img-${num}-${w}x${h}.png`);
  writePNG(file, w, h, channels, raw);
  console.log(`img ${num}: ${w}x${h} ${channels}ch -> ${file}`);
  count++;
}
console.log(`done: ${count} images`);