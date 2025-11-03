/**
 * Favicon检查脚本
 * 检查所有必需的favicon文件是否存在
 */

const fs = require('fs');
const path = require('path');

const requiredFiles = [
  { name: 'favicon.svg', size: 'vector', priority: '⭐⭐⭐', desc: '现代浏览器SVG图标' },
  { name: 'favicon-16x16.png', size: '16x16', priority: '⭐⭐⭐', desc: '小尺寸浏览器图标' },
  { name: 'favicon-32x32.png', size: '32x32', priority: '⭐⭐⭐', desc: '标准浏览器图标' },
  { name: 'favicon-48x48.png', size: '48x48', priority: '⭐⭐', desc: 'Windows任务栏图标' },
  { name: 'apple-touch-icon.png', size: '180x180', priority: '⭐⭐⭐', desc: 'iOS设备图标' },
  { name: 'android-chrome-192x192.png', size: '192x192', priority: '⭐⭐', desc: 'Android设备图标' },
  { name: 'android-chrome-512x512.png', size: '512x512', priority: '⭐⭐', desc: 'Android高清图标' },
  { name: 'og-image.png', size: '1200x630', priority: '⭐⭐⭐', desc: '社交媒体分享图片' },
];

console.log('🔍 检查Favicon文件...\n');
console.log('=' .repeat(80));

let existCount = 0;
let missingCount = 0;
const missingFiles = [];

requiredFiles.forEach(file => {
  const filePath = path.join('public', file.name);
  const exists = fs.existsSync(filePath);
  
  if (exists) {
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    console.log(`✅ ${file.name.padEnd(30)} ${file.size.padEnd(10)} ${file.priority} (${sizeKB}KB)`);
    existCount++;
  } else {
    console.log(`❌ ${file.name.padEnd(30)} ${file.size.padEnd(10)} ${file.priority} - 缺失`);
    missingCount++;
    missingFiles.push(file);
  }
});

console.log('=' .repeat(80));
console.log(`\n📊 统计: ${existCount}/${requiredFiles.length} 文件存在, ${missingCount} 文件缺失\n`);

if (missingCount > 0) {
  console.log('⚠️  缺失的文件:\n');
  missingFiles.forEach(file => {
    console.log(`   ❌ ${file.name} (${file.size}) - ${file.desc}`);
  });
  
  console.log('\n' + '='.repeat(80));
  console.log('📝 生成缺失文件的方法:\n');
  
  console.log('方法1: 使用浏览器生成器 (推荐) ⭐⭐⭐');
  console.log('   1. 确保开发服务器正在运行: npm run dev');
  console.log('   2. 访问: http://localhost:3001/generate-favicons.html');
  console.log('   3. 点击每个图标下方的 "💾 Download" 按钮');
  console.log('   4. 将下载的文件保存到 /public 文件夹');
  console.log('   5. 访问: http://localhost:3001/generate-og-image.html');
  console.log('   6. 点击 "💾 Download OG Image" 按钮');
  console.log('   7. 保存为 og-image.png 到 /public 文件夹\n');
  
  console.log('方法2: 使用在线工具 ⭐⭐');
  console.log('   1. 访问: https://favicon.io/');
  console.log('   2. 上传 /public/favicon.svg 文件');
  console.log('   3. 下载生成的favicon包');
  console.log('   4. 解压并复制PNG文件到 /public 文件夹\n');
  
  console.log('方法3: 使用RealFaviconGenerator ⭐⭐⭐');
  console.log('   1. 访问: https://realfavicongenerator.net/');
  console.log('   2. 上传 /public/favicon.svg 文件');
  console.log('   3. 自定义设置(可选)');
  console.log('   4. 下载favicon包');
  console.log('   5. 解压并复制文件到 /public 文件夹\n');
  
  console.log('=' .repeat(80));
  console.log('\n💡 提示: 优先生成标记为 ⭐⭐⭐ 的文件,这些是SEO必需的!\n');
} else {
  console.log('🎉 太棒了! 所有Favicon文件都已准备就绪!\n');
  console.log('✅ 下一步:');
  console.log('   1. 刷新浏览器查看favicon效果');
  console.log('   2. 使用 F12 开发者工具检查 <head> 中的 <link> 标签');
  console.log('   3. 测试不同浏览器和设备');
  console.log('   4. 使用 Google Rich Results Test 验证OG图片\n');
  console.log('🚀 准备部署到生产环境!\n');
}

// 检查layout.tsx配置
console.log('=' .repeat(80));
console.log('🔧 检查配置文件...\n');

const layoutPath = 'app/layout.tsx';
if (fs.existsSync(layoutPath)) {
  const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
  
  const checks = [
    { pattern: /favicon\.svg/, name: 'SVG图标配置', found: false },
    { pattern: /favicon-32x32\.png/, name: '32x32 PNG配置', found: false },
    { pattern: /favicon-16x16\.png/, name: '16x16 PNG配置', found: false },
    { pattern: /apple-touch-icon\.png/, name: 'Apple图标配置', found: false },
    { pattern: /og-image\.png/, name: 'OG图片配置', found: false },
  ];
  
  checks.forEach(check => {
    check.found = check.pattern.test(layoutContent);
    console.log(`${check.found ? '✅' : '❌'} ${check.name}`);
  });
  
  const allConfigured = checks.every(c => c.found);
  if (allConfigured) {
    console.log('\n✅ app/layout.tsx 配置完整!\n');
  } else {
    console.log('\n⚠️  app/layout.tsx 配置不完整,请检查!\n');
  }
} else {
  console.log('❌ 找不到 app/layout.tsx 文件\n');
}

console.log('=' .repeat(80));

