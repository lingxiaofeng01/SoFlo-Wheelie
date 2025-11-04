const fs = require('fs');
const path = require('path');

// 读取游戏数据
const content = require('../content/en.json');
const games = content.games.list;

const baseUrl = 'https://www.soflowheelie.com';
const now = new Date().toISOString();

// 生成sitemap XML
let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

// 首页
xml += '<url>\n';
xml += `<loc>${baseUrl}</loc>\n`;
xml += `<lastmod>${now}</lastmod>\n`;
xml += '<changefreq>daily</changefreq>\n';
xml += '<priority>1</priority>\n';
xml += '</url>\n';

// 游戏列表页
xml += '<url>\n';
xml += `<loc>${baseUrl}/wheelie-games</loc>\n`;
xml += `<lastmod>${now}</lastmod>\n`;
xml += '<changefreq>weekly</changefreq>\n';
xml += '<priority>0.9</priority>\n';
xml += '</url>\n';

// 各个游戏页面
games.forEach(game => {
  xml += '<url>\n';
  xml += `<loc>${baseUrl}/wheelie-games/${game.slug}</loc>\n`;
  xml += `<lastmod>${now}</lastmod>\n`;
  xml += '<changefreq>weekly</changefreq>\n';
  xml += '<priority>0.8</priority>\n';
  xml += '</url>\n';
});

// 法律页面
xml += '<url>\n';
xml += `<loc>${baseUrl}/privacy-policy</loc>\n`;
xml += `<lastmod>${now}</lastmod>\n`;
xml += '<changefreq>yearly</changefreq>\n';
xml += '<priority>0.3</priority>\n';
xml += '</url>\n';

xml += '<url>\n';
xml += `<loc>${baseUrl}/terms-of-service</loc>\n`;
xml += `<lastmod>${now}</lastmod>\n`;
xml += '<changefreq>yearly</changefreq>\n';
xml += '<priority>0.3</priority>\n';
xml += '</url>\n';

xml += '</urlset>\n';

// 写入public目录
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml);

console.log('✅ Sitemap generated successfully!');
console.log(`📍 Location: public/sitemap.xml`);
console.log(`📊 Total URLs: ${games.length + 4}`);
console.log(`🎮 Game pages: ${games.length}`);

