/**
 * Gera favicons PNG e a imagem Open Graph (public/og-image.jpg).
 * Uso: npm run assets
 */
import sharp from 'sharp';
import { readFileSync } from 'node:fs';

const svg = readFileSync('public/favicon.svg');
for (const [name, size] of [['favicon-32.png', 32], ['apple-touch-icon.png', 180], ['icon-192.png', 192], ['icon-512.png', 512]]) {
  await sharp(svg, { density: 600 }).resize(size, size).png().toFile(`public/${name}`);
}

const W = 1200, H = 630;
const photo = await sharp('src/assets/img/clinica/clinica-recepcao.jpg').extract({ left: 170, top: 0, width: 292, height: 275 }).resize(W - 540, H, { fit: 'cover', kernel: 'lanczos3' }).sharpen({ sigma: .6 }).toBuffer();
const overlay = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0d3f7f"/><stop offset=".55" stop-color="#1d3a8f"/><stop offset="1" stop-color="#4a2690"/>
    </linearGradient>
    <linearGradient id="t" x1="0" x2="1"><stop offset="0" stop-color="#8fd8f8"/><stop offset="1" stop-color="#c9b2f5"/></linearGradient>
  </defs>
  <rect width="540" height="${H}" fill="url(#g)"/>
  <circle cx="500" cy="-40" r="220" fill="none" stroke="rgba(255,255,255,.12)"/>
  <text x="70" y="150" font-family="Segoe UI, Arial, sans-serif" font-size="22" font-weight="700" letter-spacing="5" fill="#cdb8f5">CLÍNICA</text>
  <text x="70" y="215" font-family="Segoe UI, Arial, sans-serif" font-size="58" font-weight="800" fill="#ffffff">Equilíbrio</text>
  <text x="70" y="280" font-family="Segoe UI, Arial, sans-serif" font-size="58" font-weight="800" fill="url(#t)">do Corpo</text>
  <text x="70" y="360" font-family="Segoe UI, Arial, sans-serif" font-size="22" fill="rgba(255,255,255,.88)">Seu bem-estar começa com o cuidado certo.</text>
  <text x="70" y="400" font-family="Segoe UI, Arial, sans-serif" font-size="19" fill="rgba(255,255,255,.7)">12 especialidades · Atendimento humanizado</text>
  <rect x="70" y="470" width="330" height="60" rx="30" fill="#ffffff"/>
  <text x="235" y="508" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="21" font-weight="700" fill="#4a2690">Centro · Palhoça - SC</text>
</svg>`;
await sharp({ create: { width: W, height: H, channels: 3, background: '#f6f8fd' } })
  .composite([{ input: photo, left: 540, top: 0 }, { input: Buffer.from(overlay), left: 0, top: 0 }])
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile('public/og-image.jpg');
console.log('Assets gerados.');
