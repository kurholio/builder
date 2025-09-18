import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Define all services and niches
  const services = [
    { name: 'Website Development', path: '/website-development' },
    { name: 'UI Prototyping', path: '/ui-prototyping' },
    { name: 'Graphic Design', path: '/graphic-design' },
    { name: 'Hosting & Deployment', path: '/hosting-deployment' },
    { name: 'Maintenance & Support', path: '/maintenance-support' },
    { name: 'Accessibility', path: '/accessibility' }
  ];

  const niches = [
    { name: 'E-commerce Development', path: '/ecommerce-website-development' },
    { name: 'Restaurant Websites', path: '/restaurant-website-design' },
    { name: 'Plumbing Websites', path: '/plumbing-website-design' },
    { name: 'Personal Websites', path: '/personal-website-design' },
    { name: 'Education Websites', path: '/education-website-design' },
    { name: 'Nonprofit Websites', path: '/nonprofit-website-design' },
    { name: 'Contractor Websites', path: '/contractor-website-design' },
    { name: 'Real Estate Websites', path: '/real-estate-website-design' },
    { name: 'Wellness Websites', path: '/wellness-website-design' },
    { name: 'Landscaping Websites', path: '/landscaping-website-design' },
    { name: 'Events Websites', path: '/events-website-design' },
    { name: 'Healthcare Websites', path: '/healthcare-website-design' },
    { name: 'Fitness Websites', path: '/fitness-website-design' },
    { name: 'Legal Websites', path: '/legal-website-design' },
    { name: 'Custom Development', path: '/custom-website-development' }
  ];

  // Get deterministic items based on current page (same every time for same page)
  const getDeterministicItems = (items, currentPath, count = 5) => {
    // Create a simple hash from the current path for consistent "randomization"
    let hash = 0;
    for (let i = 0; i < currentPath.length; i++) {
      const char = currentPath.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    
    // Filter out current page and sort deterministically
    const filteredItems = items.filter(item => item.path !== currentPath);
    
    // Use hash to create deterministic "shuffle"
    const shuffled = [...filteredItems].sort((a, b) => {
      const aHash = (a.path.charCodeAt(0) + hash) % 1000;
      const bHash = (b.path.charCodeAt(0) + hash) % 1000;
      return aHash - bHash;
    });
    
    return shuffled.slice(0, count);
  };

  const pageServices = getDeterministicItems(services, currentPath);
  const pageNiches = getDeterministicItems(niches, currentPath);

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <span className="text-xl font-semibold text-white">LunaraTech</span>
            </Link>
            <p className="text-gray-400">
              Professional website design and development services for businesses of all sizes.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              {pageServices.map((service, index) => (
                <li key={index}>
                  <Link to={service.path} className="hover:text-white transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Industries</h4>
            <ul className="space-y-2 text-gray-400">
              {pageNiches.map((niche, index) => (
                <li key={index}>
                  <Link to={niche.path} className="hover:text-white transition-colors">
                    {niche.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>San Francisco, CA</li>
              <li><a href="tel:+15074003910" className="hover:text-white transition-colors">(507) 400-3910</a></li>
              <li><a href="mailto:hello@lunaratech.com" className="hover:text-white transition-colors">hello@lunaratech.com</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} LunaraTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
