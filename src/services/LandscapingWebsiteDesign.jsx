import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const LandscapingWebsiteDesign = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  const landscapingwebsitedesignStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Landscaping Website Design - Outdoor Service Websites",
    "description": "Showcase your landscaping work with professional website design. Portfolio galleries, service areas, seasonal promotions, and lead generation for landscapers.",
    "provider": {
        "@type": "Organization",
        "name": "LunaraTech",
        "url": "https://lunaratech.com"
    },
    "serviceType": "Landscaping Website Design",
    "areaServed": "United States",
    "url": "https://lunaratech.com/landscaping-website-design"
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5">
      <SEOHead 
        title="Landscaping Website Design - Outdoor Service Websites"
        description="Showcase your landscaping work with professional website design. Portfolio galleries, service areas, seasonal promotions, and lead generation for landscapers."
        keywords="landscaping website design, outdoor service website, landscaping business website, garden design website, landscape contractor website, outdoor services"
        canonicalUrl="https://lunaratech.com/landscaping-website-design"
        structuredData={landscapingwebsitedesignStructuredData}
      />
      <Header />
      
      {/* Hero Section - Nature-Inspired Layout */}
      <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-green-100/20"></div>
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium">
                  Outdoor Service Specialists
                </div>
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                  Showcase Your <span className="text-green-600">Beautiful Work</span> and Grow Your <span className="text-emerald-600">Landscaping Business</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform your landscaping business with a stunning website that showcases your outdoor projects, builds trust with before/after galleries, and converts visitors into customers who appreciate quality craftsmanship.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-lg"
                >
                  Create Stunning Portfolio Site
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link 
                  to="tel:+15074003910" 
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
                >
                  Call (507) 400-3910
                </Link>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>Project Galleries</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                  <span>Before/After Photos</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                  <span>Service Areas</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-4">
                  <div className="h-48 bg-gradient-to-br from-green-200 to-emerald-300 rounded-lg flex items-center justify-center">
                    <span className="text-green-700 font-semibold text-lg">Beautiful Garden</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-20 bg-gradient-to-br from-green-100 to-emerald-200 rounded"></div>
                    <div className="h-20 bg-gradient-to-br from-emerald-100 to-teal-200 rounded"></div>
                  </div>
                  <div className="bg-green-600 text-white p-3 rounded-lg text-center font-semibold">
                    Get Free Quote
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-emerald-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Card Layout */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything Your Landscaping Business Needs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional features designed specifically for outdoor service businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Portfolio</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Project Galleries</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Showcase your best work with stunning before/after photo galleries that demonstrate your expertise and attract clients.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Coverage</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Service Areas</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Interactive maps showing your coverage areas and local service locations to help clients find you easily.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Seasonal</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Seasonal Services</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Highlight seasonal offerings like spring cleanup, fall leaf removal, and winter prep to keep clients engaged year-round.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Landscaping Industry Insights Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Landscaping Industry's Digital Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The landscaping industry is experiencing rapid digital transformation, with online presence becoming essential for business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#262262] to-[#262262]/80 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <img src="/lunaratechIcon.png" alt="LunaraTech" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Visual Impact</h3>
              <p className="text-white/90 leading-relaxed">
                Landscaping is inherently visual, making high-quality photography and before/after 
                galleries essential for showcasing your work. Professional images help potential 
                clients visualize the transformation you can create for their property.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#70CBD0] to-[#70CBD0]/80 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <img src="/lunaratechIcon.png" alt="LunaraTech" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Seasonal Services</h3>
              <p className="text-white/90 leading-relaxed">
                Landscaping businesses thrive on seasonal services and recurring maintenance contracts. 
                A well-designed website helps you showcase year-round offerings and build long-term 
                client relationships through service packages and maintenance programs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#da1c5c] to-[#da1c5c]/80 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <img src="/lunaratechIcon.png" alt="LunaraTech" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Local SEO Advantage</h3>
              <p className="text-white/90 leading-relaxed">
                Most landscaping work is local, making SEO crucial for attracting nearby customers. 
                A professional website with local optimization helps you rank for "landscaping near me" 
                searches and dominate your local market.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">The Landscaping Digital Advantage</h3>
              <p className="text-lg leading-relaxed max-w-4xl mx-auto">
                In the competitive landscaping industry, a professional website is your most powerful 
                marketing tool. It showcases your expertise, builds trust through project galleries, 
                and makes it easy for potential clients to understand your services and request quotes. 
                A well-designed landscaping website doesn't just display your work—it demonstrates 
                your professionalism and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Landscaping Business Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Landscaping Business Advantages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional landscaping websites provide essential tools that help businesses showcase their work and attract more clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Visual</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Project Showcase</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">High-quality before/after galleries and project portfolios that demonstrate your expertise and attract potential clients.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Local</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Local SEO</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Optimized for local search to help you rank for "landscaping near me" and dominate your local market.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Services</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Seasonal Packages</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Showcase year-round services and seasonal packages that encourage recurring business and maintenance contracts.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Landscaping Technology Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Landscaping Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to showcase your work, attract clients, and grow your landscaping business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Portfolio</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Before/After Galleries</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Stunning visual comparisons that demonstrate the transformation your work creates and showcase your expertise.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Engagement</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Quote Request Forms</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Easy-to-use forms that capture project details and contact information to convert visitors into leads.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Local</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Local SEO Optimization</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Optimized for local search to help you rank for "landscaping near me" and attract customers in your service area.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Showcase Your Beautiful Work?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Don't let your competitors capture your market. Get a professional landscaping website that turns visitors into customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
            </Link>
            <Link 
              to="tel:+15074003910" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
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

export default LandscapingWebsiteDesign;
