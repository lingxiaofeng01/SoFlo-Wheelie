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

// All Games 列表页
xml += '<url>\n';
xml += `<loc>${baseUrl}/games</loc>\n`;
xml += `<lastmod>${now}</lastmod>\n`;
xml += '<changefreq>weekly</changefreq>\n';
xml += '<priority>0.9</priority>\n';
xml += '</url>\n';

// Wheelie Games 列表页
xml += '<url>\n';
xml += `<loc>${baseUrl}/wheelie-games</loc>\n`;
xml += `<lastmod>${now}</lastmod>\n`;
xml += '<changefreq>weekly</changefreq>\n';
xml += '<priority>0.9</priority>\n';
xml += '</url>\n';

// 各个游戏页面
games.forEach(game => {
  xml += '<url>\n';
  // 根据 routePrefix 决定使用哪个路由
  const routePrefix = game.routePrefix || 'wheelie-games';
  xml += `<loc>${baseUrl}/${routePrefix}/${game.slug}</loc>\n`;
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

// 统计游戏分布
const gamesRouteCount = games.filter(g => g.routePrefix === 'games').length;
const wheelieGamesCount = games.filter(g => !g.routePrefix || g.routePrefix === 'wheelie-games').length;

console.log('✅ Sitemap generated successfully!');
console.log(`📍 Location: public/sitemap.xml`);
console.log(`📊 Total URLs: ${games.length + 5}`); // 首页 + All Games + Wheelie Games + 游戏页面 + 2个法律页面
console.log(`🎮 Total game pages: ${games.length}`);
console.log(`   ├─ /games route: ${gamesRouteCount} games`);
console.log(`   └─ /wheelie-games route: ${wheelieGamesCount} games`);

