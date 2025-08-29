#!/usr/bin/env node

/**
 * Manual cache clearing and deployment verification script
 * Run this after deployment if the site still shows old content
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Manual Cache Clearing & Deployment Verification');
console.log('================================================\n');

// Check if we're in the right directory
if (!fs.existsSync('package.json')) {
  console.error('❌ Please run this script from the project root directory');
  process.exit(1);
}

// Check if build directory exists
if (!fs.existsSync('build')) {
  console.error('❌ Build directory not found. Run "npm run build" first.');
  process.exit(1);
}

console.log('📁 Build directory contents:');
try {
  const buildContents = fs.readdirSync('build');
  buildContents.forEach(item => {
    const stats = fs.statSync(path.join('build', item));
    const size = stats.isDirectory() ? 'DIR' : `${(stats.size / 1024).toFixed(1)}KB`;
    console.log(`   ${item} (${size})`);
  });
} catch (error) {
  console.error('❌ Error reading build directory:', error.message);
}

console.log('\n📋 Assets directory contents:');
try {
  const assetsPath = path.join('build', 'assets');
  if (fs.existsSync(assetsPath)) {
    const assets = fs.readdirSync(assetsPath);
    assets.forEach(item => {
      const stats = fs.statSync(path.join(assetsPath, item));
      console.log(`   ${item} (${(stats.size / 1024).toFixed(1)}KB)`);
    });
  } else {
    console.log('   No assets directory found');
  }
} catch (error) {
  console.error('❌ Error reading assets directory:', error.message);
}

console.log('\n🔍 Checking index.html for asset references:');
try {
  const indexPath = path.join('build', 'index.html');
  if (fs.existsSync(indexPath)) {
    const content = fs.readFileSync(indexPath, 'utf8');
    const assetMatches = content.match(/assets\/[^"']*\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)/g);
    if (assetMatches) {
      console.log('   Asset references found:');
      assetMatches.forEach(match => console.log(`     ${match}`));
    } else {
      console.log('   No asset references found in index.html');
    }
  }
} catch (error) {
  console.error('❌ Error reading index.html:', error.message);
}

console.log('\n💡 Manual Cache Clearing Steps:');
console.log('1. Hard refresh your browser (Ctrl+F5 or Cmd+Shift+R)');
console.log('2. Clear browser cache and cookies for your domain');
console.log('3. Try incognito/private browsing mode');
console.log('4. Check if CloudFront invalidation completed in AWS Console');
console.log('5. Wait 5-10 minutes for CloudFront propagation');

console.log('\n🚀 If issues persist:');
console.log('- Check AWS CloudFront invalidation status');
console.log('- Verify S3 bucket contents match build directory');
console.log('- Check CloudFront distribution settings');
console.log('- Ensure proper cache control headers are set');

console.log('\n✅ Script completed. Check the output above for any issues.');
