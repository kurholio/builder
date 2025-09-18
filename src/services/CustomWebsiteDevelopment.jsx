import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CustomWebsiteDevelopment = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100 py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gray-100 text-gray-800 text-sm font-medium mb-8">
              Custom Development Specialists
            </div>
            <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Bring Your <span className="text-blue-600">Unique Vision</span> to Life with <span className="text-purple-600">Custom Website Development</span>
            </h1>
            <p className="text-2xl text-gray-600 mb-12 leading-relaxed">
              When off-the-shelf solutions won't work, we build custom websites from the ground up. Every pixel, every feature, every interaction designed specifically for your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-10 py-5 bg-blue-600 text-white font-bold text-lg rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
              >
                Start Custom Project
                <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                to="tel:+15074003910" 
                className="inline-flex items-center px-10 py-5 border-2 border-blue-600 text-blue-600 font-bold text-lg rounded-xl hover:bg-blue-50 transition-all duration-300"
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
              Custom Development Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We build exactly what you need, nothing more, nothing less
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative flex h-full flex-col rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-blue-400">
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <div className="text-blue-600">
                  <img src="/lunaratechIcon.png" alt="Unique Design" className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Unique Design</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Completely custom design that reflects your brand and stands out from competitors.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 group-hover:w-12" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-blue-400">
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <div className="text-purple-600">
                  <img src="/lunaratechIcon.png" alt="Custom Functionality" className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Functionality</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Build exactly the features you need, no compromises or workarounds.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 group-hover:w-12" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-blue-400">
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <div className="text-gray-600">
                  <img src="/lunaratechIcon.png" alt="Scalable Architecture" className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Scalable Architecture</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Built to grow with your business, from startup to enterprise scale.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 group-hover:w-12" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build Something Unique?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create a custom solution that perfectly fits your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
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

export default CustomWebsiteDevelopment;
