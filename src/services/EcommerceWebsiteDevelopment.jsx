import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const EcommerceWebsiteDevelopment = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* SEO Meta Content - Hidden but accessible to search engines */}
      <div className="sr-only">
        <h1>E-commerce Website Development Services | Online Store Design & Development</h1>
        <p>Build a high-converting e-commerce website that drives sales and grows your business. Custom online store development with mobile optimization, secure payment processing, and advanced features. Increase your online revenue with our professional e-commerce solutions.</p>
        <h2>E-commerce Website Features</h2>
        <ul>
          <li>Custom product catalog with unlimited products</li>
          <li>Advanced shopping cart and checkout system</li>
          <li>Multiple payment gateways (Stripe, PayPal, etc.)</li>
          <li>Inventory management system</li>
          <li>Order management and customer accounts</li>
          <li>Email marketing integration</li>
          <li>Shipping calculator and tax management</li>
          <li>Mobile app for store management</li>
          <li>SEO optimization for product pages</li>
          <li>Analytics and reporting dashboard</li>
        </ul>
        <h2>Why Choose Our E-commerce Development</h2>
        <p>We build custom e-commerce solutions that are tailored to your business needs, not generic templates. Our stores are fast, secure, and designed to convert browsers into buyers. From startup to enterprise, we create online stores that grow with your business.</p>
      </div>
      
      {/* Hero Section - Split Layout with Stats */}
      <section className="relative bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium">
                  Revenue-Focused Development
                </div>
                <h1 className="text-6xl font-bold text-gray-900 leading-tight">
                  Turn Your <span className="text-green-600">Website</span> Into a <span className="text-blue-600">Sales Machine</span>
                </h1>
                <p className="text-2xl text-gray-600 leading-relaxed">
                  Stop losing sales to slow, confusing online stores. We build e-commerce websites that convert browsers into buyers and grow your revenue.
                </p>
              </div>
              
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-bold text-lg rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-green-500/25"
                >
                  Build Revenue-Generating Store
                  <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link 
                  to="tel:+15074003910" 
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-green-600 text-green-600 font-bold text-lg rounded-xl hover:bg-green-50 transition-all duration-300"
                >
                  Call (507) 400-3910
                </Link>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700">Custom-built for your business</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700">Mobile-first design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700">Lightning-fast performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700">SEO optimized</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700">Secure payment processing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700">Advanced analytics & reporting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700">Inventory management system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700">24/7 technical support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700">Scalable architecture</span>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce Principles Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Our E-commerce Design Principles</h2>
            <p className="text-xl text-gray-600 mb-8">The core values that guide our e-commerce website development</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="group relative flex h-full flex-col rounded-2xl border-2 bg-gradient-to-br p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] from-[#da1c5c]/15 to-[#da1c5c]/5 border-[#da1c5c]/20 hover:shadow-[#da1c5c]/20 hover:border-[#da1c5c]/40">
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">Conversion-First Design</h3>
              <p className="text-sm text-gray-700 leading-relaxed flex-grow">Every design decision prioritizes converting visitors into customers, optimizing the shopping experience for maximum sales and revenue growth.</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>
            <div className="group relative flex h-full flex-col rounded-2xl border-2 bg-gradient-to-br p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] from-[#262262]/15 to-[#262262]/5 border-[#262262]/20 hover:shadow-[#262262]/20 hover:border-[#262262]/40">
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">Performance & Security</h3>
              <p className="text-sm text-gray-700 leading-relaxed flex-grow">Lightning-fast loading times, secure payment processing, and mobile optimization that builds trust and drives sales across all devices.</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-gradient-to-br from-[#262262] to-[#262262]/80 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <img src="/lunaratechIcon.png" alt="Conversion" className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Conversion Optimization</h3>
              <p className="text-white/90">Strategic design elements that guide customers from browsing to purchasing with maximum efficiency.</p>
            </div>
            
            <div className="group bg-gradient-to-br from-[#70CBD0] to-[#70CBD0]/80 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <img src="/lunaratechIcon.png" alt="Performance" className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Performance Focus</h3>
              <p className="text-white/90">Lightning-fast loading times and smooth user experience that keeps customers engaged and buying.</p>
            </div>
            
            <div className="group bg-gradient-to-br from-[#da1c5c] to-[#da1c5c]/80 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <img src="/lunaratechIcon.png" alt="Security" className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Security & Trust</h3>
              <p className="text-white/90">Secure payment processing, SSL certificates, and trust signals that build customer confidence.</p>
            </div>
            
            <div className="group bg-gradient-to-br from-[#FFB700] to-[#FFB700]/80 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <img src="/lunaratechIcon.png" alt="Mobile" className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Mobile Excellence</h3>
              <p className="text-white/90">Mobile-first design that provides seamless shopping experience across all devices and screen sizes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Optimization Section - Different Style */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
              Conversion Optimization
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Turn Browsers Into Buyers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every element designed to maximize conversions and increase your online revenue
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Optimized Product Pages</h3>
                  <p className="text-gray-600">High-converting product pages with compelling descriptions, multiple images, and clear CTAs.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Streamlined Checkout</h3>
                  <p className="text-gray-600">One-page checkout process that reduces cart abandonment and increases completion rates.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Trust Signals</h3>
                  <p className="text-gray-600">Security badges, customer reviews, and guarantees to build trust and confidence.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between bg-white/80 rounded-xl p-4">
                  <span className="text-gray-700 font-medium">Average conversion rate</span>
                  <span className="text-3xl font-bold text-green-600">3.2%</span>
                </div>
                <div className="flex items-center justify-between bg-white/80 rounded-xl p-4">
                  <span className="text-gray-700 font-medium">Mobile conversion rate</span>
                  <span className="text-3xl font-bold text-blue-600">2.1%</span>
                </div>
                <div className="flex items-center justify-between bg-white/80 rounded-xl p-4">
                  <span className="text-gray-700 font-medium">Average order value</span>
                  <span className="text-3xl font-bold text-purple-600">$127</span>
                </div>
                <div className="flex items-center justify-between bg-white/80 rounded-xl p-4">
                  <span className="text-gray-700 font-medium">Page load speed</span>
                  <span className="text-3xl font-bold text-orange-600">1.2s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Performance Section - Different Style */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Security & Performance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your customers' data is safe with our robust security measures and lightning-fast performance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#262262] to-[#262262]/80 rounded-2xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <img src="/lunaratechIcon.png" alt="Security" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">SSL Security</h3>
              <p className="text-white/90 mb-4">256-bit SSL encryption protects all customer data and transactions</p>
              <div className="text-sm text-white/80 font-semibold">PCI DSS Compliant</div>
            </div>

            <div className="bg-gradient-to-br from-[#70CBD0] to-[#70CBD0]/80 rounded-2xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <img src="/lunaratechIcon.png" alt="Performance" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Lightning Speed</h3>
              <p className="text-white/90 mb-4">Sub-2-second load times with CDN and performance optimization</p>
              <div className="text-sm text-white/80 font-semibold">99.9% Uptime</div>
            </div>

            <div className="bg-gradient-to-br from-[#da1c5c] to-[#da1c5c]/80 rounded-2xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <img src="/lunaratechIcon.png" alt="Analytics" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Real-time Analytics</h3>
              <p className="text-white/90 mb-4">Comprehensive analytics and reporting to track your store's performance</p>
              <div className="text-sm text-white/80 font-semibold">24/7 Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete E-commerce Solution
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Everything You Need to Sell Online</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <span className="text-gray-700">Custom product catalog with unlimited products</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <span className="text-gray-700">Advanced shopping cart and checkout system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <span className="text-gray-700">Multiple payment gateways (Stripe, PayPal, etc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <span className="text-gray-700">Inventory management system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <span className="text-gray-700">Order management and customer accounts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <span className="text-gray-700">Email marketing integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <span className="text-gray-700">Shipping calculator and tax management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <span className="text-gray-700">Mobile app for store management</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">E-commerce Success Metrics</h4>
              <p className="text-gray-600 mb-4">
                Our e-commerce websites consistently deliver measurable results that directly impact your bottom line and business growth.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-green-800 font-semibold">
                  "Consistent revenue growth and improved conversion rates across all client projects"
                </p>
                <p className="text-green-600 text-sm mt-2">- Based on client data analysis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Modern Technology Stack
            </h2>
            <p className="text-xl text-gray-600">Built with the latest technologies for optimal performance</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-[#262262] to-[#262262]/80 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">R</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">React</h3>
              <p className="text-white/90 text-sm">Modern frontend framework for fast, interactive user interfaces</p>
            </div>
            <div className="bg-gradient-to-br from-[#70CBD0] to-[#70CBD0]/80 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">N</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Next.js</h3>
              <p className="text-white/90 text-sm">Server-side rendering for better SEO and performance</p>
            </div>
            <div className="bg-gradient-to-br from-[#da1c5c] to-[#da1c5c]/80 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">S</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Stripe</h3>
              <p className="text-white/90 text-sm">Secure payment processing with global support</p>
            </div>
            <div className="bg-gradient-to-br from-[#FFB700] to-[#FFB700]/80 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">A</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AWS</h3>
              <p className="text-white/90 text-sm">Scalable cloud infrastructure for reliability</p>
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Our E-commerce Development Process</h2>
            <p className="text-xl text-gray-600 mb-8">How we create online stores that drive sales and revenue</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="group relative flex h-full flex-col rounded-2xl border-2 bg-gradient-to-br p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] from-[#FFB700]/15 to-[#FFB700]/5 border-[#FFB700]/20 hover:shadow-[#FFB700]/20 hover:border-[#FFB700]/40">
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">E-commerce-Focused Strategy</h3>
              <p className="text-sm text-gray-700 leading-relaxed flex-grow">Our process is specifically designed for online retail, understanding the unique needs of e-commerce businesses, conversion optimization, and customer experience.</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>
            <div className="group relative flex h-full flex-col rounded-2xl border-2 bg-gradient-to-br p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] from-[#da1c5c]/15 to-[#da1c5c]/5 border-[#da1c5c]/20 hover:shadow-[#da1c5c]/20 hover:border-[#da1c5c]/40">
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">Revenue-Driven Design</h3>
              <p className="text-sm text-gray-700 leading-relaxed flex-grow">Every design decision is backed by e-commerce industry data and proven conversion strategies to maximize sales and customer lifetime value.</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">01</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">E-commerce Analysis</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Understanding your products, target market, and business goals to create the most effective e-commerce strategy.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>
            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">02</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Conversion Design</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Creating high-converting product pages, checkout flows, and user experiences that maximize sales and reduce cart abandonment.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>
            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">03</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">E-commerce Features</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Building shopping carts, payment processing, inventory management, and customer account systems for seamless online retail.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>
            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">04</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Launch & Optimize</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Going live with sales tracking, performance monitoring, and ongoing optimization for maximum revenue and growth.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Launch Your Online Store?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Don't let your competitors capture your market share. Launch a professional e-commerce store that drives sales and grows your business.
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

export default EcommerceWebsiteDevelopment;
