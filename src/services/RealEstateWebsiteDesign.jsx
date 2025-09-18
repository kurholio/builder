import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const RealEstateWebsiteDesign = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  const realestatewebsitedesignStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Real Estate Website Design - Property & Agent Websites",
    "description": "Sell more properties with professional real estate website design. Property listings, virtual tours, agent profiles, and lead generation for real estate professionals.",
    "provider": {
        "@type": "Organization",
        "name": "LunaraTech",
        "url": "https://lunaratech.com"
    },
    "serviceType": "Real Estate Website Design",
    "areaServed": "United States",
    "url": "https://lunaratech.com/real-estate-website-design"
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5">
      <SEOHead 
        title="Real Estate Website Design - Property & Agent Websites"
        description="Sell more properties with professional real estate website design. Property listings, virtual tours, agent profiles, and lead generation for real estate professionals."
        keywords="real estate website design, property website, real estate agent website, property listings, real estate marketing, realtor website, property management website"
        canonicalUrl="https://lunaratech.com/real-estate-website-design"
        structuredData={realestatewebsitedesignStructuredData}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-50 via-orange-50 to-red-100 py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-yellow-100 text-yellow-800 text-sm font-medium mb-8">
              Real Estate Specialists
            </div>
            <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Sell More <span className="text-yellow-600">Properties</span> with a <span className="text-orange-600">Professional Real Estate Website</span>
            </h1>
            <p className="text-2xl text-gray-600 mb-12 leading-relaxed">
              Attract buyers and sellers with a stunning real estate website that showcases listings, builds trust, and converts visitors into clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-10 py-5 bg-yellow-600 text-white font-bold text-lg rounded-xl hover:bg-yellow-700 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/25"
              >
                Create Real Estate Site
                <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                to="tel:+15074003910" 
                className="inline-flex items-center px-10 py-5 border-2 border-yellow-600 text-yellow-600 font-bold text-lg rounded-xl hover:bg-yellow-50 transition-all duration-300"
              >
                Call (507) 400-3910
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Real Estate Website Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional tools designed for real estate success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Listings</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Property Listings</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Beautiful property showcases with virtual tours and high-quality photos that sell homes faster.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">MLS</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">MLS Integration</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Seamless MLS integration for automatic listing updates and management for maximum efficiency.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Virtual</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Virtual Tours</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Immersive 360° property tours and virtual walkthroughs that let clients explore homes from anywhere.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Real Estate Market Insights Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Real Estate Digital Revolution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern real estate success depends on digital presence, virtual experiences, and seamless client interactions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#262262] to-[#262262]/80 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <img src="/lunaratechIcon.png" alt="LunaraTech" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Virtual Property Tours</h3>
              <p className="text-white/90 leading-relaxed">
                95% of homebuyers start their search online, and virtual tours have become essential 
                for showcasing properties. High-quality virtual experiences help buyers make 
                informed decisions and reduce unnecessary property visits.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#70CBD0] to-[#70CBD0]/80 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <img src="/lunaratechIcon.png" alt="LunaraTech" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Lead Generation</h3>
              <p className="text-white/90 leading-relaxed">
                Professional real estate websites generate 3x more qualified leads than traditional 
                marketing methods. Integrated lead capture forms, property alerts, and market 
                insights help you build a pipeline of serious buyers and sellers.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#da1c5c] to-[#da1c5c]/80 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <img src="/lunaratechIcon.png" alt="LunaraTech" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Market Authority</h3>
              <p className="text-white/90 leading-relaxed">
                A professional website with market insights, neighborhood guides, and expert 
                content positions you as the local market authority. This builds trust and 
                attracts clients who value expertise and local knowledge.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-8 text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">The Real Estate Digital Advantage</h3>
              <p className="text-lg leading-relaxed max-w-4xl mx-auto">
                In today's competitive real estate market, your website is your most powerful tool 
                for attracting clients and closing deals. It serves as your digital office, 
                showcasing your expertise, properties, and client success stories 24/7. 
                Professional real estate websites don't just display listings—they build 
                relationships, establish credibility, and drive conversions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Estate Digital Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Real Estate Digital Advantages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional real estate websites provide powerful tools that help agents and brokers succeed in today's competitive market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Visibility</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Lead Generation</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Professional websites generate 3x more qualified leads than traditional marketing methods, helping you build a steady pipeline of potential clients.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Experience</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Virtual Tours</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">High-quality virtual experiences help buyers make informed decisions and reduce unnecessary property visits, saving time for everyone.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Authority</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Market Expertise</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Showcase your local market knowledge and expertise to position yourself as the go-to agent in your area.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Real Estate Technology Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Real Estate Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to showcase properties, manage leads, and grow your real estate business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Showcase</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Property Photography</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Professional property photography and staging guidance to showcase homes in their best light and attract serious buyers.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Leads</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Lead Capture</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Strategic lead capture forms and property alerts throughout the site to maximize conversion opportunities and client engagement.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Management</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Client Portal</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Secure client access to saved properties, viewing history, and communication tools for enhanced client relationships.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-600">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Sell More Properties?
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Get a professional real estate website that attracts buyers and sellers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-yellow-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
            </Link>
            <Link 
              to="tel:+15074003910" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-yellow-600 transition-colors"
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

export default RealEstateWebsiteDesign;
