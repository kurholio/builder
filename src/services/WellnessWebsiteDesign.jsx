import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const WellnessWebsiteDesign = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  const wellnesswebsitedesignStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Wellness Website Design - Health & Wellness Websites",
    "description": "Create a calming online presence for your wellness business. Spa websites, yoga studios, wellness centers, and health service websites with booking systems.",
    "provider": {
        "@type": "Organization",
        "name": "LunaraTech",
        "url": "https://lunaratech.com"
    },
    "serviceType": "Wellness Website Design",
    "areaServed": "United States",
    "url": "https://lunaratech.com/wellness-website-design"
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5">
      <SEOHead 
        title="Wellness Website Design - Health & Wellness Websites"
        description="Create a calming online presence for your wellness business. Spa websites, yoga studios, wellness centers, and health service websites with booking systems."
        keywords="wellness website design, spa website, yoga studio website, wellness center website, health service website, meditation website, wellness business"
        canonicalUrl="https://lunaratech.com/wellness-website-design"
        structuredData={wellnesswebsitedesignStructuredData}
      />
      <Header />
      
      {/* Hero Section - Calm, Wellness-Focused */}
      <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-100 py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-8">
              Wellness & Healing Specialists
            </div>
            <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Create a <span className="text-purple-600">Calm, Trusting</span> Space for Your <span className="text-pink-600">Wellness Business</span>
            </h1>
            <p className="text-2xl text-gray-600 mb-12 leading-relaxed">
              Build trust and attract clients with a soothing website that reflects your healing approach. Our wellness websites create the perfect atmosphere for clients to book appointments and begin their journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-10 py-5 bg-purple-600 text-white font-bold text-lg rounded-xl hover:bg-purple-700 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25"
              >
                Create Healing Website
                <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                to="tel:+15074003910" 
                className="inline-flex items-center px-10 py-5 border-2 border-purple-600 text-purple-600 font-bold text-lg rounded-xl hover:bg-purple-50 transition-all duration-300"
              >
                Call (507) 400-3910
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Wellness Cards */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Wellness-Focused Website Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every element designed to create trust and promote healing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Booking</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Online Booking</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Seamless appointment scheduling that works with your calendar and reduces no-shows for better practice management.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Services</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Service Showcase</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Beautifully present your wellness services with calming imagery and clear descriptions that inspire trust and healing.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Trust</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Client Reviews</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Build trust with authentic client stories and healing reviews that showcase your expertise and results.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Industry Insights Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Wellness Industry's Digital Transformation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The wellness industry is experiencing unprecedented growth, and your website is the key to capturing this expanding market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#262262] to-[#262262]/80 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <img src="/lunaratechIcon.png" alt="LunaraTech" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Market Growth</h3>
              <p className="text-white/90 leading-relaxed">
                The global wellness industry is valued at over $4.4 trillion and growing at 5-10% annually. 
                Consumers are increasingly seeking holistic health solutions and are willing to invest 
                in services that improve their quality of life.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#70CBD0] to-[#70CBD0]/80 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <img src="/lunaratechIcon.png" alt="LunaraTech" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Digital Expectations</h3>
              <p className="text-white/90 leading-relaxed">
                Modern wellness consumers expect seamless digital experiences. They want to book appointments 
                online, access wellness resources, and connect with practitioners through digital platforms 
                that reflect the calming, professional nature of wellness services.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#da1c5c] to-[#da1c5c]/80 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <img src="/lunaratechIcon.png" alt="LunaraTech" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Trust & Credibility</h3>
              <p className="text-white/90 leading-relaxed">
                In wellness services, trust is everything. A professional website with reviews, 
                credentials, and clear service descriptions builds the credibility necessary for 
                clients to take the first step toward their wellness journey.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">The Wellness Digital Advantage</h3>
              <p className="text-lg leading-relaxed max-w-4xl mx-auto">
                Wellness practitioners who embrace digital marketing and professional web presence 
                see significantly higher client retention and revenue growth. Your website serves as 
                a 24/7 ambassador for your practice, educating potential clients about your services, 
                building trust through reviews and credentials, and making it easy for them to 
                take the next step in their wellness journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Practice Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Wellness Practice Advantages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional wellness websites provide essential tools that help practitioners build trust and grow their practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Trust</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Professional Credibility</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">A professional website builds trust and credibility, essential for wellness practitioners who work with personal health and healing.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Convenience</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Online Booking</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Easy online scheduling reduces administrative burden and makes it convenient for clients to book appointments at any time.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Education</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Client Education</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Share wellness resources, blog posts, and educational content that helps clients understand your approach and services.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Deep Dive Section */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Wellness Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage your practice, engage clients, and grow your wellness business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Scheduling</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Online Booking System</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Seamless appointment scheduling with calendar integration, automated reminders, and client self-service options.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Client Care</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Client Portals</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Secure client access to appointment history, wellness plans, resources, and personalized health tracking.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Education</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Wellness Resources</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Share wellness tips, blog posts, and educational content that establishes your expertise and helps clients.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Attract More Wellness Clients?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Create a website that reflects your healing approach and helps clients take the first step toward wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
            </Link>
            <Link 
              to="tel:+15074003910" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
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

export default WellnessWebsiteDesign;
