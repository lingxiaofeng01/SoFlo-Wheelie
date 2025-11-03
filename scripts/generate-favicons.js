/**
 * Favicon生成脚本
 * 使用Canvas API生成所有尺寸的favicon PNG文件
 */

const fs = require('fs');
const { createCanvas } = require('canvas');

// 绘制摩托车翘头图标
function drawWheelieIcon(ctx, width, height, scale = 1) {
  const centerX = width / 2;
  const centerY = height / 2;
  
  ctx.save();
  ctx.translate(centerX, centerY);
  ctx.scale(scale, scale);
  ctx.rotate(-20 * Math.PI / 180);
  
  // 速度线条 (仅在大尺寸显示)
  if (width > 64) {
    ctx.strokeStyle = 'rgba(96, 165, 250, 0.5)';
    ctx.lineWidth = width * 0.015;
    ctx.lineCap = 'round';
    
    [-0.35, -0.38, -0.33].forEach((x, i) => {
      const y = [-0.15, -0.05, 0.05][i];
      const endX = [-0.25, -0.26, -0.23][i];
      ctx.beginPath();
      ctx.moveTo(width * x, height * y);
      ctx.lineTo(width * endX, height * y);
      ctx.stroke();
    });
  }
  
  // 前轮 (抬起)
  const frontWheelX = -width * 0.12;
  const frontWheelY = -height * 0.15;
  const frontWheelRadius = width * 0.08;
  
  const frontGradient = ctx.createRadialGradient(
    frontWheelX, frontWheelY, 0,
    frontWheelX, frontWheelY, frontWheelRadius
  );
  frontGradient.addColorStop(0, '#f0f9ff');
  frontGradient.addColorStop(0.7, '#60a5fa');
  frontGradient.addColorStop(1, '#0ea5e9');
  
  ctx.fillStyle = frontGradient;
  ctx.beginPath();
  ctx.arc(frontWheelX, frontWheelY, frontWheelRadius, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.strokeStyle = '#0c4a6e';
  ctx.lineWidth = width * 0.008;
  ctx.stroke();
  
  // 前轮辐条
  ctx.beginPath();
  ctx.arc(frontWheelX, frontWheelY, frontWheelRadius * 0.6, 0, Math.PI * 2);
  ctx.stroke();
  
  // 车架
  ctx.strokeStyle = '#60a5fa';
  ctx.lineWidth = width * 0.02;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  
  ctx.beginPath();
  ctx.moveTo(width * 0.08, height * 0.08);
  ctx.lineTo(0, -height * 0.05);
  ctx.lineTo(-width * 0.05, -height * 0.1);
  ctx.lineTo(-width * 0.1, -height * 0.08);
  ctx.stroke();
  
  // 座椅
  ctx.fillStyle = '#60a5fa';
  ctx.strokeStyle = '#0c4a6e';
  ctx.lineWidth = width * 0.006;
  ctx.beginPath();
  ctx.ellipse(0, -height * 0.05, width * 0.07, height * 0.03, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // 骑手 (仅在大尺寸显示)
  if (width > 32) {
    // 身体
    ctx.fillStyle = 'rgba(30, 41, 59, 0.8)';
    ctx.beginPath();
    ctx.ellipse(-width * 0.02, -height * 0.12, width * 0.04, height * 0.07, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // 头盔
    ctx.fillStyle = 'rgba(30, 41, 59, 0.9)';
    ctx.beginPath();
    ctx.arc(-width * 0.03, -height * 0.2, width * 0.035, 0, Math.PI * 2);
    ctx.fill();
    
    // 头盔护目镜
    ctx.strokeStyle = '#60a5fa';
    ctx.lineWidth = width * 0.006;
    ctx.beginPath();
    ctx.arc(-width * 0.03, -height * 0.2, width * 0.035, Math.PI * 0.8, Math.PI * 1.2);
    ctx.stroke();
  }
  
  // 后轮
  const rearWheelX = width * 0.08;
  const rearWheelY = height * 0.08;
  const rearWheelRadius = width * 0.1;
  
  const rearGradient = ctx.createRadialGradient(
    rearWheelX, rearWheelY, 0,
    rearWheelX, rearWheelY, rearWheelRadius
  );
  rearGradient.addColorStop(0, '#f0f9ff');
  rearGradient.addColorStop(0.7, '#60a5fa');
  rearGradient.addColorStop(1, '#0ea5e9');
  
  ctx.fillStyle = rearGradient;
  ctx.beginPath();
  ctx.arc(rearWheelX, rearWheelY, rearWheelRadius, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.strokeStyle = '#0c4a6e';
  ctx.lineWidth = width * 0.008;
  ctx.stroke();
  
  // 后轮辐条
  ctx.lineWidth = width * 0.006;
  ctx.beginPath();
  ctx.arc(rearWheelX, rearWheelY, rearWheelRadius * 0.6, 0, Math.PI * 2);
  ctx.stroke();
  
  // 后轮中心
  ctx.fillStyle = '#0c4a6e';
  ctx.beginPath();
  ctx.arc(rearWheelX, rearWheelY, rearWheelRadius * 0.3, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.restore();
  
  // 星光点缀 (仅在大尺寸显示)
  if (width > 64) {
    ctx.fillStyle = '#fbbf24';
    [[0.25, 0.2, 0.012], [0.7, 0.35, 0.015], [0.15, 0.5, 0.01]].forEach(([x, y, r]) => {
      ctx.beginPath();
      ctx.arc(width * x, height * y, width * r, 0, Math.PI * 2);
      ctx.fill();
    });
  }
}

// 生成单个favicon
function generateFavicon(size, filename) {
  console.log(`生成 ${filename} (${size}x${size})...`);
  
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  
  // 背景渐变
  const gradient = ctx.createLinearGradient(0, 0, size, size);
  gradient.addColorStop(0, '#1e3a8a');
  gradient.addColorStop(0.5, '#7c3aed');
  gradient.addColorStop(1, '#ec4899');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  
  // 绘制摩托车图标
  drawWheelieIcon(ctx, size, size, 0.8);
  
  // 保存文件
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(`public/${filename}`, buffer);
  console.log(`✅ ${filename} 生成成功!`);
}

// 生成所有尺寸
function generateAllFavicons() {
  console.log('🎨 开始生成Favicon...\n');
  
  const sizes = [
    { size: 16, name: 'favicon-16x16.png' },
    { size: 32, name: 'favicon-32x32.png' },
    { size: 48, name: 'favicon-48x48.png' },
    { size: 180, name: 'apple-touch-icon.png' },
    { size: 192, name: 'android-chrome-192x192.png' },
    { size: 512, name: 'android-chrome-512x512.png' },
  ];
  
  sizes.forEach(({ size, name }) => {
    try {
      generateFavicon(size, name);
    } catch (error) {
      console.error(`❌ 生成 ${name} 失败:`, error.message);
    }
  });
  
  console.log('\n🎉 所有Favicon生成完成!');
  console.log('\n📁 生成的文件:');
  sizes.forEach(({ name }) => {
    console.log(`   ✅ public/${name}`);
  });
}

// 检查canvas模块
try {
  require.resolve('canvas');
  generateAllFavicons();
} catch (e) {
  console.log('❌ 缺少canvas模块');
  console.log('\n📝 请使用以下方法之一生成favicon:\n');
  console.log('方法1: 使用浏览器生成器 (推荐)');
  console.log('   1. 访问: http://localhost:3001/generate-favicons.html');
  console.log('   2. 点击每个图标下方的"Download"按钮');
  console.log('   3. 保存到 /public 文件夹\n');
  console.log('方法2: 使用在线工具');
  console.log('   访问: https://favicon.io/ 或 https://realfavicongenerator.net/\n');
  console.log('需要生成的文件:');
  console.log('   - favicon-16x16.png');
  console.log('   - favicon-32x32.png');
  console.log('   - favicon-48x48.png');
  console.log('   - apple-touch-icon.png (180x180)');
  console.log('   - android-chrome-192x192.png');
  console.log('   - android-chrome-512x512.png');
}

