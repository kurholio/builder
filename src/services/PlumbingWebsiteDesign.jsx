import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

// SVG Icons matching services page style
const Icon = ({ children }) => (
  <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

const Faucet = () => (
  <Icon>
    <path d="M4 14h10a4 4 0 0 0 4-4V8M8 14v4M6 18h4M18 8h2a2 2 0 1 1 0 4h-2"/>
    <path d="M12 6h2v2h-2z"/>
  </Icon>
);

const Phone = () => (
  <Icon>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </Icon>
);

const MapPin = () => (
  <Icon>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </Icon>
);

const Clock = () => (
  <Icon>
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12,6 12,12 16,14"/>
  </Icon>
);

const Star = () => (
  <Icon>
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
  </Icon>
);

const Wrench = () => (
  <Icon>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </Icon>
);

const PlumbingWebsiteDesign = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  const plumbingwebsitedesignStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Plumbing Website Design - Emergency Service Websites",
    "description": "Get more emergency calls with professional plumbing website design. Mobile-optimized, local SEO, emergency service features, and lead generation for plumbers.",
    "provider": {
        "@type": "Organization",
        "name": "LunaraTech",
        "url": "https://lunaratech.com"
    },
    "serviceType": "Plumbing Website Design",
    "areaServed": "United States",
    "url": "https://lunaratech.com/plumbing-website-design"
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5">
      <SEOHead 
        title="Plumbing Website Design - Emergency Service Websites"
        description="Get more emergency calls with professional plumbing website design. Mobile-optimized, local SEO, emergency service features, and lead generation for plumbers."
        keywords="plumbing website design, emergency plumbing website, local SEO for plumbers, plumbing business website, emergency service website, plumber marketing"
        canonicalUrl="https://lunaratech.com/plumbing-website-design"
        structuredData={plumbingwebsitedesignStructuredData}
      />
      <Header />
      
      {/* SEO Meta Content - Hidden but accessible to search engines */}
      <div className="sr-only">
        <h1>Professional Plumbing Website Design Services | Emergency Plumber Websites</h1>
        <p>Get a professional plumbing website that converts emergency calls into customers. Mobile-optimized, local SEO ready, and designed for 24/7 emergency service. Increase your plumbing business revenue with our custom website design services.</p>
        <h2>Plumbing Website Design Features</h2>
        <ul>
          <li>Emergency call buttons and contact forms</li>
          <li>Mobile-first responsive design</li>
          <li>Local SEO optimization for "plumber near me" searches</li>
          <li>Service area coverage and local information</li>
          <li>Customer reviews and feedback integration</li>
          <li>Google My Business integration</li>
          <li>Fast loading times for emergency situations</li>
          <li>Professional service photography</li>
        </ul>
        <h2>Why Choose Our Plumbing Website Design</h2>
        <p>We specialize in creating high-converting websites for plumbing businesses. Our team understands the unique needs of emergency service providers and designs websites that turn visitors into customers. From burst pipes to clogged drains, your website needs to be ready when customers need help most.</p>
      </div>
      
      {/* Hero Section - Asymmetric Layout */}
      <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                  Emergency Service Ready
                </div>
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                  Stop Losing <span className="text-blue-600">Emergency Calls</span> to Your Competitors
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  When pipes burst at 2 AM, customers need to find you fast. Our plumbing websites are built for emergencies - mobile-first, lightning-fast, and designed to convert panicked homeowners into paying customers.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
                >
                  Get Emergency-Ready Website
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link 
                  to="tel:+15074003910" 
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Call (507) 400-3910
                </Link>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>24/7 Emergency Ready</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span>Mobile Optimized</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  <span>Local SEO</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-blue-100 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-100 rounded w-1/2"></div>
                    <div className="h-4 bg-blue-100 rounded w-2/3"></div>
                  </div>
                  <div className="bg-blue-600 text-white p-4 rounded-lg text-center font-semibold">
                    EMERGENCY CALL NOW
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - Service Page Style */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-800 text-sm font-medium mb-4">
              Common Problems
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Most Plumbing Websites Fail to Convert
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't let these common mistakes cost you emergency calls and revenue
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Design</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Outdated Design</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Your website looks unprofessional and customers choose competitors with modern sites that build trust.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Mobile</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">No Mobile Optimization</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">70% of emergency calls come from mobile devices, but your site isn't mobile-friendly for urgent situations.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">SEO</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Poor Local SEO</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Customers can't find you when searching "plumber near me" in your area, losing valuable emergency business.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Step-by-Step */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
              Our Process
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How We Build Your Emergency-Ready Plumbing Website
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to launch, we ensure your website is optimized for emergency calls and local search
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#262262] via-[#262262]/90 to-[#70CBD0] p-8 shadow-2xl transition-all duration-500 hover:shadow-[#262262]/25 hover:-translate-y-2 hover:scale-105">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#FFB700] transition-colors duration-300">Discovery & Strategy</h3>
                <p className="text-white/90 leading-relaxed">We analyze your services, target areas, and emergency call patterns to create the perfect strategy.</p>
                <div className="mt-6 h-1 w-12 bg-gradient-to-r from-[#FFB700] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-20"></div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#70CBD0] via-[#70CBD0]/90 to-[#da1c5c] p-8 shadow-2xl transition-all duration-500 hover:shadow-[#70CBD0]/25 hover:-translate-y-2 hover:scale-105">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#FFB700] transition-colors duration-300">Mobile-First Design</h3>
                <p className="text-white/90 leading-relaxed">We design your website mobile-first since 70% of emergency calls come from mobile devices.</p>
                <div className="mt-6 h-1 w-12 bg-gradient-to-r from-[#FFB700] to-[#262262] rounded-full transition-all duration-300 group-hover:w-20"></div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#da1c5c] via-[#da1c5c]/90 to-[#FFB700] p-8 shadow-2xl transition-all duration-500 hover:shadow-[#da1c5c]/25 hover:-translate-y-2 hover:scale-105">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#70CBD0] transition-colors duration-300">Local SEO Setup</h3>
                <p className="text-white/90 leading-relaxed">We optimize for "plumber near me" searches and set up Google My Business integration.</p>
                <div className="mt-6 h-1 w-12 bg-gradient-to-r from-[#70CBD0] to-[#262262] rounded-full transition-all duration-300 group-hover:w-20"></div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#FFB700] via-[#FFB700]/90 to-[#262262] p-8 shadow-2xl transition-all duration-500 hover:shadow-[#FFB700]/25 hover:-translate-y-2 hover:scale-105">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#da1c5c] transition-colors duration-300">Launch & Monitor</h3>
                <p className="text-white/90 leading-relaxed">We launch your site and monitor performance to ensure maximum emergency call conversions.</p>
                <div className="mt-6 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#70CBD0] rounded-full transition-all duration-300 group-hover:w-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Features Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Professional Plumbing Website Features
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transform your plumbing business with emergency-ready features designed to capture urgent calls, 
              build trust, and convert visitors into customers. Our specialized solutions are built for the 
              unique demands of emergency service providers.
            </p>
          </div>

          {/* Primary Features - ServiceCard Style */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="group relative flex h-full flex-col rounded-xl border-2 border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] hover:border-[#262262]">
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <div className="text-[#da1c5c]">
                  <img src="/lunaratechIcon.png" alt="Emergency Call System" className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">Emergency Call System</h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-grow">One-click emergency buttons, instant contact forms, and priority call routing. Convert 85% more emergency calls with our proven system.</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>

            <div className="group relative flex h-full flex-col rounded-xl border-2 border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] hover:border-[#262262]">
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <div className="text-[#da1c5c]">
                  <img src="/lunaratechIcon.png" alt="Mobile Emergency Ready" className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">Mobile Emergency Ready</h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-grow">Lightning-fast mobile optimization where 70% of emergency calls originate. Loads in under 2 seconds on any device.</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>

            <div className="group relative flex h-full flex-col rounded-xl border-2 border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] hover:border-[#262262]">
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <div className="text-[#da1c5c]">
                  <img src="/lunaratechIcon.png" alt="Local SEO Domination" className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">Local SEO Domination</h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-grow">Rank #1 for "plumber near me" searches with our proven local SEO strategies. Get found when emergencies happen.</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>
          </div>

          {/* Secondary Features - AboutCard Style with Colors */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="group relative flex h-full flex-col rounded-2xl border-2 bg-gradient-to-br p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] from-red-500/15 to-red-500/5 border-red-500/20 hover:shadow-red-500/20 hover:border-red-500/40">
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-4">Service Area Coverage</h3>
              <p className="text-sm text-gray-700 leading-relaxed flex-grow">Interactive maps showing your coverage areas, response times, and emergency service zones to help customers find you quickly.</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border-2 bg-gradient-to-br p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] from-blue-500/15 to-blue-500/5 border-blue-500/20 hover:shadow-blue-500/20 hover:border-blue-500/40">
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-4">Customer Reviews</h3>
              <p className="text-sm text-gray-700 leading-relaxed flex-grow">Showcase Google reviews, emergency response testimonials, and customer feedback to build trust during urgent situations.</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border-2 bg-gradient-to-br p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] from-green-500/15 to-green-500/5 border-green-500/20 hover:shadow-green-500/20 hover:border-green-500/40">
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-4">24/7 Availability</h3>
              <p className="text-sm text-gray-700 leading-relaxed flex-grow">Always-on website with emergency contact forms, live chat, and instant response systems for round-the-clock service.</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything Your Plumbing Business Needs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional plumbing websites designed to generate emergency calls and grow your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Design</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Responsive Design</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Professional design that works perfectly on all devices, ensuring customers can reach you from anywhere.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Emergency</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Emergency Features</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Emergency call buttons and contact forms that make it easy for customers to reach you during urgent situations.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Coverage</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Service Areas</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Clear service area coverage and local information to help customers know if you serve their location.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Reviews</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Review Integration</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Showcase customer reviews and feedback to build trust and credibility with potential clients.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Google</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Google Integration</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Google My Business integration and local SEO optimization to help customers find you online.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Security</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Security & Maintenance</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">SSL certificate, security features, and monthly maintenance to keep your website running smoothly.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Plumbing Principles Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Our Plumbing Design Principles</h2>
            <p className="text-xl text-gray-600 mb-8">The core values that guide our emergency service website design</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="group relative flex h-full flex-col rounded-2xl border-2 bg-gradient-to-br p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] from-[#da1c5c]/15 to-[#da1c5c]/5 border-[#da1c5c]/20 hover:shadow-[#da1c5c]/20 hover:border-[#da1c5c]/40">
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">Emergency-First Design</h3>
              <p className="text-sm text-gray-700 leading-relaxed flex-grow">Every design decision prioritizes emergency situations, ensuring your contact information is immediately visible and accessible when customers need help most.</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>
            <div className="group relative flex h-full flex-col rounded-2xl border-2 bg-gradient-to-br p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] from-[#262262]/15 to-[#262262]/5 border-[#262262]/20 hover:shadow-[#262262]/20 hover:border-[#262262]/40">
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">Trust & Credibility</h3>
              <p className="text-sm text-gray-700 leading-relaxed flex-grow">Professional design elements, certifications, and customer reviews that build immediate trust with homeowners in crisis situations.</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-gradient-to-br from-[#262262] to-[#262262]/80 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <img src="/lunaratechIcon.png" alt="Speed" className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Instant Access</h3>
              <p className="text-white/90">Lightning-fast loading times and one-click contact options for emergency situations.</p>
            </div>
            
            <div className="group bg-gradient-to-br from-[#70CBD0] to-[#70CBD0]/80 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <img src="/lunaratechIcon.png" alt="Trust" className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Professional Trust</h3>
              <p className="text-white/90">Licensed, bonded, and insured messaging with clear credentials and certifications.</p>
            </div>
            
            <div className="group bg-gradient-to-br from-[#da1c5c] to-[#da1c5c]/80 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <img src="/lunaratechIcon.png" alt="Local" className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Local Focus</h3>
              <p className="text-white/90">Service area maps, local testimonials, and community-focused content that resonates with neighbors.</p>
            </div>
            
            <div className="group bg-gradient-to-br from-[#FFB700] to-[#FFB700]/80 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <img src="/lunaratechIcon.png" alt="Conversion" className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Emergency Conversion</h3>
              <p className="text-white/90">Strategic design that converts panicked homeowners into customers during their time of need.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Plumbing Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Our Emergency Service Process</h2>
            <p className="text-xl text-gray-600 mb-8">How we create websites that capture emergency calls</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="group relative flex h-full flex-col rounded-2xl border-2 bg-gradient-to-br p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] from-[#FFB700]/15 to-[#FFB700]/5 border-[#FFB700]/20 hover:shadow-[#FFB700]/20 hover:border-[#FFB700]/40">
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">Emergency-Focused Strategy</h3>
              <p className="text-sm text-gray-700 leading-relaxed flex-grow">Our process is specifically designed for emergency service providers, understanding the urgency and trust requirements of homeowners in crisis.</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>
            <div className="group relative flex h-full flex-col rounded-2xl border-2 bg-gradient-to-br p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] from-[#da1c5c]/15 to-[#da1c5c]/5 border-[#da1c5c]/20 hover:shadow-[#da1c5c]/20 hover:border-[#da1c5c]/40">
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">Results-Driven Design</h3>
              <p className="text-sm text-gray-700 leading-relaxed flex-grow">Every design decision is backed by emergency service industry data and proven conversion strategies to maximize emergency call capture.</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">01</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Emergency Analysis</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Understanding your emergency services, response times, and local competition to create the most effective strategy.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>
            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">02</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Trust Design</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Creating professional, trustworthy designs that immediately establish credibility with homeowners in emergency situations.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>
            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">03</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Emergency Features</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Building emergency call systems, instant contact forms, and mobile-optimized interfaces for urgent situations.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>
            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">04</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Launch & Monitor</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Going live with emergency call tracking, performance monitoring, and ongoing optimization for maximum conversions.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Plumbing Portfolio Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#262262]/5 to-[#da1c5c]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Emergency Service Success Stories</h2>
            <p className="text-xl text-gray-600 mb-8">Real results from our emergency service website designs</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="group relative flex h-full flex-col rounded-2xl border-2 bg-gradient-to-br p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] from-[#262262]/15 to-[#262262]/5 border-[#262262]/20 hover:shadow-[#262262]/20 hover:border-[#262262]/40">
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">Proven Emergency Results</h3>
              <p className="text-sm text-gray-700 leading-relaxed flex-grow">Our emergency service websites consistently deliver measurable results, from increased emergency calls to higher conversion rates and improved customer trust.</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>
            <div className="group relative flex h-full flex-col rounded-2xl border-2 bg-gradient-to-br p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] from-[#FFB700]/15 to-[#FFB700]/5 border-[#FFB700]/20 hover:shadow-[#FFB700]/20 hover:border-[#FFB700]/40">
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">Industry Expertise</h3>
              <p className="text-sm text-gray-700 leading-relaxed flex-grow">From residential plumbing to commercial emergency services, we understand the unique needs of emergency service providers and create tailored solutions for each.</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-[#da1c5c] to-[#FFB700] flex items-center justify-center">
                <img src="/lunaratechIcon.png" alt="LunaraTech Icon" className="h-20 w-20" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#262262] mb-2">24/7 Emergency Plumbing</h3>
                <p className="text-gray-600 mb-4">Emergency-focused website with instant call buttons and mobile optimization, increasing emergency calls.</p>
                <div className="flex flex-wrap gap-2">
                  {['Emergency Calls', 'Mobile First', 'Instant Contact'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-[#da1c5c]/20 text-[#262262] rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-[#70CBD0] to-[#262262] flex items-center justify-center">
                <img src="/lunaratechIcon.png" alt="LunaraTech Icon" className="h-20 w-20" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#262262] mb-2">Commercial Plumbing</h3>
                <p className="text-gray-600 mb-4">Professional B2B website with service area maps and emergency response times, boosting commercial leads.</p>
                <div className="flex flex-wrap gap-2">
                  {['B2B Focus', 'Service Areas', 'Response Times'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-[#70CBD0]/20 text-[#262262] rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-[#FFB700] to-[#da1c5c] flex items-center justify-center">
                <img src="/lunaratechIcon.png" alt="LunaraTech Icon" className="h-20 w-20" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#262262] mb-2">Residential Services</h3>
                <p className="text-gray-600 mb-4">Trust-building website with customer reviews and emergency pricing, increasing residential bookings.</p>
                <div className="flex flex-wrap gap-2">
                  {['Customer Reviews', 'Emergency Pricing', 'Trust Building'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-[#FFB700]/20 text-[#262262] rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get More Plumbing Customers?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't let another emergency call go to your competitors. Get a professional plumbing website that converts visitors into customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
            </Link>
            <Link 
              to="tel:+15074003910" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call (507) 400-3910
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PlumbingWebsiteDesign;
