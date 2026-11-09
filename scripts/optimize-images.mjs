// Converts raw screenshots into web-ready WebP files.
//
//   assets-src/<project>/<name>.(png|jpg|jpeg)
//     -> src/assets/projects/<project>/<name>.webp        (1600px wide, for the main viewer)
//     -> src/assets/projects/<project>/<name>-thumb.webp  (320px wide, for the thumbnail strip)
//
// Run with: npm run images
// assets-src/ is gitignored, so originals stay out of the repo. Files are only
// regenerated when the source is newer than the output.
import sharp from "sharp";
import { readdirSync, statSync, mkdirSync, existsSync } from "node:fs";
import { join, parse } from "node:path";

const SRC = "assets-src";
const OUT = "src/assets/projects";
const SIZES = [
  { suffix: "", width: 1600, quality: 74 },
  { suffix: "-thumb", width: 320, quality: 60 },
];

if (!existsSync(SRC)) {
  console.error(`No ${SRC}/ folder. Put screenshots in ${SRC}/<project>/ first.`);
  process.exit(1);
}

let written = 0;
for (const project of readdirSync(SRC)) {
  const dir = join(SRC, project);
  if (!statSync(dir).isDirectory()) continue;
  mkdirSync(join(OUT, project), { recursive: true });

  for (const file of readdirSync(dir)) {
    if (!/\.(png|jpe?g)$/i.test(file)) continue;
    const src = join(dir, file);
    const { name } = parse(file);

    for (const { suffix, width, quality } of SIZES) {
      const out = join(OUT, project, `${name}${suffix}.webp`);
      if (existsSync(out) && statSync(out).mtimeMs > statSync(src).mtimeMs) continue;
      const info = await sharp(src)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality })
        .toFile(out);
      written++;
      console.log(`${out}  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`);
    }
  }
}
console.log(written ? `Done, ${written} file(s) written.` : "Everything up to date.");
