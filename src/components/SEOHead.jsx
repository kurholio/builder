import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl, 
  ogImage, 
  ogType = 'website',
  structuredData 
}) => {
  const fullTitle = title ? `${title} | LunaraTech` : 'LunaraTech — Professional Website Development & Digital Solutions';
  const fullDescription = description || 'Transform your business with custom websites, e-commerce solutions, and digital marketing. Expert web development for restaurants, contractors, healthcare, and more.';
  const fullKeywords = keywords || 'website development, web design, e-commerce, digital marketing, custom websites, responsive design, SEO optimization, business websites';
  const fullOgImage = ogImage || 'https://lunaratech.com/lunaratechLogo.png';
  const fullCanonicalUrl = canonicalUrl || 'https://lunaratech.com';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />
      <meta name="author" content="LunaraTech" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content="LunaraTech" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullCanonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={fullDescription} />
      <meta property="twitter:image" content={fullOgImage} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#262262" />
      <meta name="msapplication-TileColor" content="#262262" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
