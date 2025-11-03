// Script to check canonical tags in HTML output
const https = require('https');

const pages = [
  { url: 'http://localhost:3001', name: 'Homepage' },
  { url: 'http://localhost:3001/wheelie-games', name: 'Games List' },
  { url: 'http://localhost:3001/wheelie-games/wheelie-up', name: 'Wheelie Up' },
  { url: 'http://localhost:3001/wheelie-games/wheelie-bike', name: 'Wheelie Bike' },
  { url: 'http://localhost:3001/wheelie-games/street-wheelie', name: 'Street Wheelie' },
  { url: 'http://localhost:3001/privacy-policy', name: 'Privacy Policy' },
  { url: 'http://localhost:3001/terms-of-service', name: 'Terms of Service' },
];

async function checkCanonical(url, name) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const options = {
      hostname: urlObj.hostname,
      port: urlObj.port,
      path: urlObj.pathname,
      method: 'GET',
    };

    const req = (urlObj.protocol === 'https:' ? https : require('http')).request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        // Look for canonical tag
        const canonicalMatch = data.match(/<link[^>]*rel=["']canonical["'][^>]*>/i);
        if (canonicalMatch) {
          const hrefMatch = canonicalMatch[0].match(/href=["']([^"']+)["']/i);
          if (hrefMatch) {
            resolve({ name, url, canonical: hrefMatch[1], found: true });
          } else {
            resolve({ name, url, canonical: null, found: false });
          }
        } else {
          resolve({ name, url, canonical: null, found: false });
        }
      });
    });

    req.on('error', (e) => {
      reject({ name, url, error: e.message });
    });

    req.end();
  });
}

async function checkAll() {
  console.log('🔍 Checking Canonical Tags...\n');
  
  for (const page of pages) {
    try {
      const result = await checkCanonical(page.url, page.name);
      if (result.found) {
        const isCorrect = result.canonical.includes('www.soflowheelie.com');
        const status = isCorrect ? '✅' : '❌';
        console.log(`${status} ${result.name}`);
        console.log(`   URL: ${result.url}`);
        console.log(`   Canonical: ${result.canonical}`);
        if (!isCorrect) {
          console.log(`   ⚠️  Should use: https://www.soflowheelie.com`);
        }
      } else {
        console.log(`❌ ${result.name}`);
        console.log(`   URL: ${result.url}`);
        console.log(`   ⚠️  No canonical tag found!`);
      }
      console.log('');
    } catch (error) {
      console.log(`❌ ${error.name}`);
      console.log(`   URL: ${error.url}`);
      console.log(`   Error: ${error.error}`);
      console.log('');
    }
  }
}

checkAll();

