import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// SEO data for different page types
const seoData = {
  services: {
    'WebsiteDevelopment': {
      title: 'Professional Website Development Services',
      description: 'Transform your business with custom website development. Responsive design, e-commerce solutions, CMS integration, and SEO optimization. Get your professional website today!',
      keywords: 'website development, custom websites, responsive web design, e-commerce development, CMS integration, SEO optimization, professional web development, business websites, web design services',
      url: 'website-development'
    },
    'UIPrototyping': {
      title: 'UI/UX Prototyping & Design Services',
      description: 'Create stunning user interfaces with our professional UI/UX prototyping services. Interactive prototypes, user testing, and design systems for better user experiences.',
      keywords: 'UI prototyping, UX design, user interface design, interactive prototypes, user experience, design systems, wireframing, mockups, UI/UX services',
      url: 'ui-prototyping'
    },
    'GraphicDesign': {
      title: 'Professional Graphic Design Services',
      description: 'Elevate your brand with professional graphic design services. Logo design, branding, marketing materials, and visual identity solutions for businesses.',
      keywords: 'graphic design, logo design, branding, visual identity, marketing materials, brand design, creative design services, professional graphics',
      url: 'graphic-design'
    },
    'HostingDeployment': {
      title: 'Website Hosting & Deployment Services',
      description: 'Reliable website hosting and deployment solutions. Fast, secure, and scalable hosting with 99.9% uptime guarantee for your business website.',
      keywords: 'website hosting, web hosting, deployment services, cloud hosting, VPS hosting, domain management, SSL certificates, website maintenance',
      url: 'hosting-deployment'
    },
    'MaintenanceSupport': {
      title: 'Website Maintenance & Support Services',
      description: 'Keep your website running smoothly with our comprehensive maintenance and support services. Updates, security, backups, and 24/7 technical support.',
      keywords: 'website maintenance, web support, technical support, website updates, security updates, backup services, website monitoring, maintenance plans',
      url: 'maintenance-support'
    },
    'Accessibility': {
      title: 'Website Accessibility & ADA Compliance Services',
      description: 'Make your website accessible to everyone with our ADA compliance and accessibility services. WCAG guidelines, screen reader optimization, and inclusive design.',
      keywords: 'website accessibility, ADA compliance, WCAG guidelines, accessible design, screen reader optimization, inclusive web design, accessibility audit',
      url: 'accessibility-services'
    }
  },
  niches: {
    'PlumbingWebsiteDesign': {
      title: 'Plumbing Website Design - Emergency Service Websites',
      description: 'Get more emergency calls with professional plumbing website design. Mobile-optimized, local SEO, emergency service features, and lead generation for plumbers.',
      keywords: 'plumbing website design, emergency plumbing website, local SEO for plumbers, plumbing business website, emergency service website, plumber marketing',
      url: 'plumbing-website-design'
    },
    'RestaurantWebsiteDesign': {
      title: 'Restaurant Website Design - Online Ordering & Menu Integration',
      description: 'Boost your restaurant\'s online presence with professional website design. Online ordering, menu integration, reservation systems, and mobile-optimized design.',
      keywords: 'restaurant website design, online ordering system, restaurant menu website, food delivery website, restaurant web design, menu integration, reservation system',
      url: 'restaurant-website-design'
    },
    'EcommerceWebsiteDevelopment': {
      title: 'E-commerce Website Development - Online Store Solutions',
      description: 'Build a powerful online store with our e-commerce development services. Shopping cart, payment processing, inventory management, and mobile commerce solutions.',
      keywords: 'e-commerce development, online store, shopping cart, payment processing, e-commerce website, online shopping, digital commerce, e-commerce solutions',
      url: 'ecommerce-website-development'
    },
    'LandscapingWebsiteDesign': {
      title: 'Landscaping Website Design - Outdoor Service Websites',
      description: 'Showcase your landscaping work with professional website design. Portfolio galleries, service areas, seasonal promotions, and lead generation for landscapers.',
      keywords: 'landscaping website design, outdoor service website, landscaping business website, garden design website, landscape contractor website, outdoor services',
      url: 'landscaping-website-design'
    },
    'WellnessWebsiteDesign': {
      title: 'Wellness Website Design - Health & Wellness Websites',
      description: 'Create a calming online presence for your wellness business. Spa websites, yoga studios, wellness centers, and health service websites with booking systems.',
      keywords: 'wellness website design, spa website, yoga studio website, wellness center website, health service website, meditation website, wellness business',
      url: 'wellness-website-design'
    },
    'ContractorWebsiteDesign': {
      title: 'Contractor Website Design - Construction & Home Improvement',
      description: 'Build trust with professional contractor website design. Project galleries, service areas, customer testimonials, and lead generation for construction businesses.',
      keywords: 'contractor website design, construction website, home improvement website, contractor business website, construction marketing, building contractor website',
      url: 'contractor-website-design'
    },
    'RealEstateWebsiteDesign': {
      title: 'Real Estate Website Design - Property & Agent Websites',
      description: 'Sell more properties with professional real estate website design. Property listings, virtual tours, agent profiles, and lead generation for real estate professionals.',
      keywords: 'real estate website design, property website, real estate agent website, property listings, real estate marketing, realtor website, property management website',
      url: 'real-estate-website-design'
    },
    'NonprofitWebsiteDesign': {
      title: 'Nonprofit Website Design - Charity & Organization Websites',
      description: 'Amplify your mission with professional nonprofit website design. Donation systems, volunteer signup, event management, and storytelling for charitable organizations.',
      keywords: 'nonprofit website design, charity website, nonprofit organization website, donation website, volunteer website, nonprofit marketing, charitable organization website',
      url: 'nonprofit-website-design'
    },
    'EducationWebsiteDesign': {
      title: 'Education Website Design - School & Learning Websites',
      description: 'Enhance learning with professional education website design. Student portals, course catalogs, enrollment systems, and educational content management.',
      keywords: 'education website design, school website, educational institution website, learning management system, student portal, course catalog, education technology',
      url: 'education-website-design'
    },
    'EventsWebsiteDesign': {
      title: 'Events Website Design - Event Planning & Management',
      description: 'Create memorable events with professional event website design. Event registration, ticketing systems, venue showcases, and event management solutions.',
      keywords: 'event website design, event planning website, wedding website, conference website, event management, event registration, ticketing system, event marketing',
      url: 'events-website-design'
    },
    'PersonalWebsiteDesign': {
      title: 'Personal Website Design - Portfolio & Professional Websites',
      description: 'Build your personal brand with professional personal website design. Portfolio showcases, resume websites, personal branding, and professional presence online.',
      keywords: 'personal website design, portfolio website, personal branding, resume website, professional website, personal brand, individual website, personal marketing',
      url: 'personal-website-design'
    },
    'CustomWebsiteDevelopment': {
      title: 'Custom Website Development - Bespoke Web Solutions',
      description: 'Get exactly what you need with custom website development. Tailored solutions, unique functionality, and personalized web applications for your business.',
      keywords: 'custom website development, bespoke web design, custom web applications, tailored website solutions, unique website design, custom functionality, personalized websites',
      url: 'custom-website-development'
    }
  }
};

// Function to add SEO to a file
function addSEOToFile(filePath, pageType, pageName) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if SEOHead is already imported
    if (content.includes('import SEOHead')) {
      console.log(`✅ ${filePath} already has SEO optimization`);
      return;
    }
    
    // Add SEOHead import
    const importMatch = content.match(/import.*from 'react';\nimport.*from 'react-router-dom';\nimport Header from '\.\.\/components\/Header';\nimport Footer from '\.\.\/components\/Footer';/);
    if (importMatch) {
      content = content.replace(
        importMatch[0],
        importMatch[0] + "\nimport SEOHead from '../components/SEOHead';"
      );
    }
    
    // Get SEO data
    const seoInfo = seoData[pageType][pageName];
    if (!seoInfo) {
      console.log(`❌ No SEO data found for ${pageName}`);
      return;
    }
    
    // Create structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": seoInfo.title,
      "description": seoInfo.description,
      "provider": {
        "@type": "Organization",
        "name": "LunaraTech",
        "url": "https://lunaratech.com"
      },
      "serviceType": seoInfo.title.split(' - ')[0],
      "areaServed": "United States",
      "url": `https://lunaratech.com/${seoInfo.url}`
    };
    
    // Add SEOHead component before Header
    const headerMatch = content.match(/(\s+return\s+\(\s*<div[^>]*>\s*<Header\s*\/>)/);
    if (headerMatch) {
      const seoComponent = `
  const ${pageName.toLowerCase()}StructuredData = ${JSON.stringify(structuredData, null, 4)};

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5">
      <SEOHead 
        title="${seoInfo.title}"
        description="${seoInfo.description}"
        keywords="${seoInfo.keywords}"
        canonicalUrl="https://lunaratech.com/${seoInfo.url}"
        structuredData={${pageName.toLowerCase()}StructuredData}
      />
      <Header />`;
      
      content = content.replace(headerMatch[0], seoComponent);
    }
    
    // Write the updated content
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Added SEO optimization to ${filePath}`);
    
  } catch (error) {
    console.log(`❌ Error processing ${filePath}:`, error.message);
  }
}

// Main execution
console.log('🚀 Starting SEO optimization...\n');

// Process service pages
const servicesDir = path.join(__dirname, '../src/services');
const serviceFiles = fs.readdirSync(servicesDir).filter(file => 
  file.endsWith('.jsx') && 
  !file.includes('Contact') && 
  !file.includes('Plumbing') &&
  !file.includes('Restaurant') &&
  !file.includes('Ecommerce') &&
  !file.includes('Landscaping') &&
  !file.includes('Wellness') &&
  !file.includes('Contractor') &&
  !file.includes('RealEstate') &&
  !file.includes('Nonprofit') &&
  !file.includes('Education') &&
  !file.includes('Events') &&
  !file.includes('Personal') &&
  !file.includes('Custom')
);

console.log('📄 Processing service pages...');
serviceFiles.forEach(file => {
  const pageName = file.replace('.jsx', '');
  if (seoData.services[pageName]) {
    addSEOToFile(path.join(servicesDir, file), 'services', pageName);
  }
});

// Process niche pages
const nicheFiles = fs.readdirSync(servicesDir).filter(file => 
  file.endsWith('.jsx') && 
  !file.includes('Contact') &&
  !file.includes('WebsiteDevelopment') &&
  !file.includes('UIPrototyping') &&
  !file.includes('GraphicDesign') &&
  !file.includes('HostingDeployment') &&
  !file.includes('MaintenanceSupport') &&
  !file.includes('Accessibility')
);

console.log('\n📄 Processing niche pages...');
nicheFiles.forEach(file => {
  const pageName = file.replace('.jsx', '');
  if (seoData.niches[pageName]) {
    addSEOToFile(path.join(servicesDir, file), 'niches', pageName);
  }
});

console.log('\n🎉 SEO optimization complete!');
