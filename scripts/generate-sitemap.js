import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get current date in YYYY-MM-DD format
const getCurrentDate = () => {
  return new Date().toISOString().split('T')[0];
};

// All pages on the website
const pages = [
  // Main pages
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  
  // Service pages
  { url: '/website-development', priority: '0.9', changefreq: 'monthly' },
  { url: '/ui-prototyping', priority: '0.8', changefreq: 'monthly' },
  { url: '/graphic-design', priority: '0.8', changefreq: 'monthly' },
  { url: '/hosting-deployment', priority: '0.8', changefreq: 'monthly' },
  { url: '/maintenance-support', priority: '0.8', changefreq: 'monthly' },
  { url: '/accessibility-services', priority: '0.8', changefreq: 'monthly' },
  
  // Niche pages - High priority for SEO
  { url: '/restaurant-website-design', priority: '0.9', changefreq: 'monthly' },
  { url: '/ecommerce-website-development', priority: '0.9', changefreq: 'monthly' },
  { url: '/plumbing-website-design', priority: '0.9', changefreq: 'monthly' },
  { url: '/contractor-website-design', priority: '0.9', changefreq: 'monthly' },
  { url: '/real-estate-website-design', priority: '0.9', changefreq: 'monthly' },
  { url: '/landscaping-website-design', priority: '0.9', changefreq: 'monthly' },
  { url: '/wellness-website-design', priority: '0.9', changefreq: 'monthly' },
  { url: '/nonprofit-website-design', priority: '0.9', changefreq: 'monthly' },
  { url: '/education-website-design', priority: '0.9', changefreq: 'monthly' },
  { url: '/events-website-design', priority: '0.9', changefreq: 'monthly' },
  { url: '/personal-website-design', priority: '0.9', changefreq: 'monthly' },
  { url: '/custom-website-development', priority: '0.9', changefreq: 'monthly' },
];

// Generate sitemap XML
const generateSitemap = () => {
  const baseUrl = 'https://lunaratech.com';
  const currentDate = getCurrentDate();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
`;

  pages.forEach(page => {
    sitemap += `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  });

  sitemap += `</urlset>`;
  
  return sitemap;
};

// Generate robots.txt
const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: https://lunaratech.com/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Allow all search engines to crawl all content
${pages.map(page => `Allow: ${page.url}`).join('\n')}

# Disallow admin or private areas (if any)
# Disallow: /admin/
# Disallow: /private/`;
};

// Main execution
console.log('🚀 Generating sitemap and robots.txt...\n');

try {
  // Generate and write sitemap.xml
  const sitemap = generateSitemap();
  const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap, 'utf8');
  console.log('✅ Generated sitemap.xml');

  // Generate and write robots.txt
  const robotsTxt = generateRobotsTxt();
  const robotsPath = path.join(__dirname, '../public/robots.txt');
  fs.writeFileSync(robotsPath, robotsTxt, 'utf8');
  console.log('✅ Generated robots.txt');

  // Generate sitemap index
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://lunaratech.com/sitemap.xml</loc>
    <lastmod>${getCurrentDate()}</lastmod>
  </sitemap>
</sitemapindex>`;
  
  const sitemapIndexPath = path.join(__dirname, '../public/sitemap-index.xml');
  fs.writeFileSync(sitemapIndexPath, sitemapIndex, 'utf8');
  console.log('✅ Generated sitemap-index.xml');

  console.log(`\n📊 Sitemap Statistics:`);
  console.log(`   - Total pages: ${pages.length}`);
  console.log(`   - Main pages: 2`);
  console.log(`   - Service pages: 6`);
  console.log(`   - Niche pages: 12`);
  console.log(`   - High priority pages: 13`);
  
  console.log(`\n🌐 Sitemap URLs:`);
  console.log(`   - Sitemap: https://lunaratech.com/sitemap.xml`);
  console.log(`   - Robots: https://lunaratech.com/robots.txt`);
  console.log(`   - Index: https://lunaratech.com/sitemap-index.xml`);
  
  console.log('\n🎉 Sitemap generation complete!');
  console.log('\n📝 Next steps:');
  console.log('   1. Submit sitemap to Google Search Console');
  console.log('   2. Submit sitemap to Bing Webmaster Tools');
  console.log('   3. Submit sitemap to other search engines');
  console.log('   4. Monitor indexing status in search console');

} catch (error) {
  console.error('❌ Error generating sitemap:', error.message);
  process.exit(1);
}
