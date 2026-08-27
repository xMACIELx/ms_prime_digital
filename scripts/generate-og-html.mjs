import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, '..', 'dist')
const sourceHtmlPath = join(distDir, 'index.html')

const routes = [
  {
    path: 'site-express',
    title: 'Site Express — Seu site pronto em 2 dias, R$350 | MS Digital Prime',
    description: 'Site profissional, sob medida, pronto em 2 dias. R$350, sem contrato longo.',
    image: 'https://msdigitalprime.com.br/assets/logo-full.png',
    url: 'https://msdigitalprime.com.br/site-express',
  },
]

function escapeAttr(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function replaceMetaContent(html, attr, name, value) {
  const re = new RegExp(`(<meta[^>]*?${attr}="${name}"[\\s\\S]*?content=")[^"]*(")`)
  return html.replace(re, `$1${escapeAttr(value)}$2`)
}

function buildHtml(sourceHtml, route) {
  let html = sourceHtml
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeAttr(route.title)}</title>`)
  html = replaceMetaContent(html, 'name', 'description', route.description)
  html = replaceMetaContent(html, 'property', 'og:title', route.title)
  html = replaceMetaContent(html, 'property', 'og:description', route.description)
  html = replaceMetaContent(html, 'property', 'og:image', route.image)
  html = replaceMetaContent(html, 'property', 'og:url', route.url)
  html = replaceMetaContent(html, 'name', 'twitter:title', route.title)
  html = replaceMetaContent(html, 'name', 'twitter:description', route.description)
  html = replaceMetaContent(html, 'name', 'twitter:image', route.image)
  return html
}

const sourceHtml = readFileSync(sourceHtmlPath, 'utf-8')

for (const route of routes) {
  const outDir = join(distDir, route.path)
  mkdirSync(outDir, { recursive: true })
  const outPath = join(outDir, 'index.html')
  writeFileSync(outPath, buildHtml(sourceHtml, route), 'utf-8')
  console.log(`Generated ${outPath}`)
}
