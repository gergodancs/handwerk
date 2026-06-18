import { readdirSync, renameSync, rmSync, statSync, writeFileSync } from "fs";
import { dirname, extname, join } from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..", "public", "images");
const DIRS = [
  "leistungen",
  "referenzen/altbau-sanierung",
  "referenzen/allrounder-maler",
];
const MAX_WIDTH = 1600;
const JPEG_QUALITY = 82;

function formatKb(bytes) {
  return `${Math.round(bytes / 1024)} KB`;
}

async function optimizeFile(filePath) {
  const ext = extname(filePath).toLowerCase();
  if (![".jpg", ".jpeg", ".png", ".webp"].includes(ext)) return;

  const before = statSync(filePath).size;
  const meta = await sharp(filePath).metadata();
  const isPhotoPng = ext === ".png" && !meta.hasAlpha;

  let pipeline = sharp(filePath).rotate();
  if ((meta.width ?? 0) > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  const outputPath = isPhotoPng
    ? filePath.replace(/\.png$/i, ".jpg")
    : filePath;

  let buffer;
  if (isPhotoPng) {
    buffer = await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toBuffer();
  } else if (ext === ".png") {
    buffer = await pipeline
      .png({ quality: 80, compressionLevel: 9, palette: true })
      .toBuffer();
  } else {
    buffer = await pipeline
      .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
      .toBuffer();
  }

  const tmpPath = `${outputPath}.opt.tmp`;
  writeFileSync(tmpPath, buffer);

  try {
    rmSync(outputPath, { force: true });
  } catch {
    // File may be locked; fall back to keeping the optimized temp file.
  }

  try {
    renameSync(tmpPath, outputPath);
  } catch (error) {
    if (outputPath !== filePath) {
      try {
        rmSync(filePath, { force: true });
      } catch {
        // Keep PNG if removal fails; JPG temp remains available.
      }
      renameSync(tmpPath, outputPath);
    } else {
      throw error;
    }
  }

  const after = statSync(outputPath).size;
  const saved = before - after;
  const note = outputPath !== filePath ? " → .jpg" : "";

  console.log(
    `  ${outputPath.replace(ROOT, "")}: ${formatKb(before)} → ${formatKb(after)} (−${formatKb(saved)})${note}`,
  );

  return outputPath !== filePath ? outputPath : null;
}

async function main() {
  const renamed = [];

  for (const dir of DIRS) {
    const fullDir = join(ROOT, dir);
    console.log(`\n${dir}/`);

    for (const file of readdirSync(fullDir)) {
      if (file.endsWith(".bak") || file.endsWith(".opt.tmp")) continue;
      const filePath = join(fullDir, file);
      if (!statSync(filePath).isFile()) continue;

      const newPath = await optimizeFile(filePath);
      if (newPath) {
        renamed.push({ from: filePath.replace(ROOT, ""), to: newPath.replace(ROOT, "") });
      }
    }
  }

  if (renamed.length > 0) {
    console.log("\nRenamed files (update images.ts if needed):");
    for (const { from, to } of renamed) {
      console.log(`  ${from} → ${to}`);
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
