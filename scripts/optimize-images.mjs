// Kompresja zdjęć po `next build` (zamiennik vite-plugin-image-optimizer).
// Działa wyłącznie na kopiach w out/ – pliki źródłowe w src/assets zostają nietknięte.
import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join, extname } from 'node:path'
import sharp from 'sharp'

const DIR = 'out/_next/static/media'
let before = 0
let after = 0

for (const name of await readdir(DIR)) {
  const ext = extname(name).toLowerCase()
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue
  const file = join(DIR, name)
  const input = await readFile(file)
  const output = ext === '.png'
    ? await sharp(input).png({ quality: 80, compressionLevel: 9, palette: true }).toBuffer()
    : await sharp(input).jpeg({ quality: 80, mozjpeg: true, progressive: true }).toBuffer()
  before += input.length
  if (output.length < input.length) {
    await writeFile(file, output)
    after += output.length
  } else {
    after += input.length
  }
}

const mb = (b) => (b / 1024 / 1024).toFixed(1)
console.log(`Zdjęcia: ${mb(before)} MB → ${mb(after)} MB (−${Math.round((1 - after / before) * 100)}%)`)
