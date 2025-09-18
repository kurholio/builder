import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const RestaurantWebsiteDesign = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const restaurantStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Restaurant Website Design & Development",
    "description": "Professional restaurant website design with online ordering, menu integration, reservation systems, and mobile-optimized design to boost your restaurant's online presence.",
    "provider": {
      "@type": "Organization",
      "name": "LunaraTech",
      "url": "https://lunaratech.com"
    },
    "serviceType": "Restaurant Website Design",
    "areaServed": "United States",
    "category": "Restaurant Technology",
    "offers": {
      "@type": "Offer",
      "description": "Complete restaurant website solutions including online ordering, menu management, and reservation systems"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Restaurant Website Design - Online Ordering & Menu Integration"
        description="Boost your restaurant's online presence with professional website design. Online ordering, menu integration, reservation systems, and mobile-optimized design. Get more customers today!"
        keywords="restaurant website design, online ordering system, restaurant menu website, food delivery website, restaurant web design, menu integration, reservation system, restaurant online presence, food service website"
        canonicalUrl="https://lunaratech.com/restaurant-website-design"
        structuredData={restaurantStructuredData}
      />
      <Header />
      
      {/* SEO Meta Content - Hidden but accessible to search engines */}
      <div className="sr-only">
        <h1>Restaurant Website Design Services | Online Ordering & Reservation Websites</h1>
        <p>Create a mouth-watering restaurant website that drives reservations and online orders. Professional restaurant website design with online ordering, table reservations, and mobile-optimized menus. Increase your restaurant's revenue with our custom website solutions.</p>
        <h2>Restaurant Website Features</h2>
        <ul>
          <li>Online ordering and payment integration</li>
          <li>Table reservation system</li>
          <li>Interactive menu with high-quality food photography</li>
          <li>Mobile-optimized design for mobile diners</li>
          <li>Google Maps integration and location services</li>
          <li>Customer review and feedback showcase</li>
          <li>Social media integration</li>
          <li>Event booking and private dining</li>
        </ul>
        <h2>Why Choose Our Restaurant Website Design</h2>
        <p>We understand the restaurant industry and create websites that not only look amazing but also drive more customers through your doors and increase online orders. From fine dining to casual eateries, we design websites that make customers hungry for your food.</p>
      </div>
      
      {/* Hero Section - Full Width with Image Background */}
      <section className="relative bg-gradient-to-r from-orange-900 via-red-800 to-orange-900 py-32 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-orange-500 text-white text-sm font-medium mb-8">
              Restaurant Website Specialists
            </div>
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Make Customers <span className="text-orange-300">Hungry</span> for Your Food
            </h1>
            <p className="text-2xl text-orange-100 mb-12 leading-relaxed">
              Your restaurant deserves a website that makes mouths water. We create stunning, conversion-focused sites that turn browsers into diners and increase your reservations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-10 py-5 bg-orange-500 text-white font-bold text-lg rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 hover:scale-105"
              >
                Create Mouth-Watering Website
                <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <div className="text-orange-200 text-lg">
                or call <Link to="tel:+15074003910" className="text-orange-300 hover:text-white font-semibold">(507) 400-3910</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Different Layout */}
      <section className="py-16 bg-gradient-to-r from-orange-100 to-red-100">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-200 text-orange-800 text-sm font-medium mb-4">
              Industry Statistics
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Restaurant Industry is Going Digital
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't get left behind in the digital transformation
            </p>
          </div>
          
        </div>
      </section>

      {/* Menu Showcase Section - Different Style */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-800 text-sm font-medium mb-4">
              Menu Showcase
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Make Your Menu Irresistible
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We create stunning menu presentations that make customers hungry and eager to visit
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="group relative flex h-full flex-col rounded-xl border-2 border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] hover:border-[#262262]">
                <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <div className="text-[#da1c5c]">
                    <img src="/lunaratechIcon.png" alt="Food Photography" className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">High-Quality Food Photography</h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-grow mb-4">Professional food photography that makes every dish look irresistible and appetizing.</p>
                <div className="flex items-center text-[#da1c5c] font-semibold text-sm">
                  Professional food styling included
                </div>
                <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
              </div>
              
              <div className="group relative flex h-full flex-col rounded-xl border-2 border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] hover:border-[#262262]">
                <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <div className="text-[#da1c5c]">
                    <img src="/lunaratechIcon.png" alt="Menu Design" className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">Interactive Menu Design</h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-grow mb-4">Easy-to-navigate menus with clear descriptions and dietary information.</p>
                <div className="flex items-center text-[#da1c5c] font-semibold text-sm">
                  Mobile-optimized for easy browsing
                </div>
                <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
              </div>
              
              <div className="group relative flex h-full flex-col rounded-xl border-2 border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] hover:border-[#262262]">
                <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <div className="text-[#da1c5c]">
                    <img src="/lunaratechIcon.png" alt="Online Ordering" className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">Online Ordering Integration</h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-grow mb-4">Seamless ordering system that integrates with your POS and delivery platforms.</p>
                <div className="flex items-center text-[#da1c5c] font-semibold text-sm">
                  One-click ordering experience
                </div>
                <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-4">
                  <div className="h-32 bg-gradient-to-br from-orange-200 to-red-300 rounded-lg flex items-center justify-center">
                    <span className="text-orange-700 font-semibold text-lg">Signature Dish</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-16 bg-gradient-to-br from-yellow-200 to-orange-200 rounded"></div>
                    <div className="h-16 bg-gradient-to-br from-red-200 to-pink-200 rounded"></div>
                  </div>
                  <div className="bg-orange-600 text-white p-3 rounded-lg text-center font-semibold">
                    Order Now
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-red-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section - Different Style */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-red-100">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Restaurant Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern technology solutions designed for restaurant success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group relative flex h-full flex-col rounded-xl border-2 border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] hover:border-[#262262]">
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <div className="text-[#da1c5c]">
                  <img src="/lunaratechIcon.png" alt="POS Integration" className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">POS Integration</h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-grow">Seamless integration with your existing point-of-sale system</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>
            <div className="group relative flex h-full flex-col rounded-xl border-2 border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] hover:border-[#262262]">
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <div className="text-[#da1c5c]">
                  <img src="/lunaratechIcon.png" alt="Mobile App" className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">Mobile App</h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-grow">Native mobile app for iOS and Android customers</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>
            <div className="group relative flex h-full flex-col rounded-xl border-2 border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] hover:border-[#262262]">
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <div className="text-[#da1c5c]">
                  <img src="/lunaratechIcon.png" alt="Payment Processing" className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">Payment Processing</h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-grow">Secure payment processing with multiple payment options</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>
            <div className="group relative flex h-full flex-col rounded-xl border-2 border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] hover:border-[#262262]">
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <div className="text-[#da1c5c]">
                  <img src="/lunaratechIcon.png" alt="Analytics Dashboard" className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">Analytics Dashboard</h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-grow">Real-time analytics and reporting for your restaurant</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Website Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Restaurant Website Features
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transform your restaurant's digital presence with cutting-edge features designed to attract customers, 
              increase orders, and build lasting relationships. Our comprehensive solutions cover every aspect of 
              modern restaurant operations.
            </p>
          </div>

          {/* Primary Features - ServiceCard Style */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="group relative flex h-full flex-col rounded-xl border-2 border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] hover:border-[#262262]">
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <div className="text-[#da1c5c]">
                  <img src="/lunaratechIcon.png" alt="Online Ordering" className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">Online Ordering System</h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-grow">Seamless integration with your POS system, real-time inventory management, and secure payment processing. Increase revenue with our proven ordering platform.</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>

            <div className="group relative flex h-full flex-col rounded-xl border-2 border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] hover:border-[#262262]">
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <div className="text-[#da1c5c]">
                  <img src="/lunaratechIcon.png" alt="Smart Reservations" className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">Smart Reservations</h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-grow">Advanced booking system with table management, waitlist features, and automated confirmations. Reduce no-shows with our intelligent scheduling.</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>

            <div className="group relative flex h-full flex-col rounded-xl border-2 border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] hover:border-[#262262]">
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <div className="text-[#da1c5c]">
                  <img src="/lunaratechIcon.png" alt="Mobile Design" className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">Mobile-First Design</h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-grow">Optimized for mobile devices where 75% of restaurant searches happen. Lightning-fast loading and intuitive navigation for maximum conversions.</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>
          </div>

          {/* Secondary Features - AboutCard Style with Colors */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="group relative flex h-full flex-col rounded-2xl border-2 bg-gradient-to-br p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] from-[#da1c5c]/15 to-[#da1c5c]/5 border-[#da1c5c]/20 hover:shadow-[#da1c5c]/20 hover:border-[#da1c5c]/40">
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-4">Menu Showcase</h3>
              <p className="text-sm text-gray-700 leading-relaxed flex-grow">High-quality food photography, interactive menus, and dietary filters that make customers hungry and ready to order.</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border-2 bg-gradient-to-br p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] from-[#262262]/15 to-[#262262]/5 border-[#262262]/20 hover:shadow-[#262262]/20 hover:border-[#262262]/40">
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-4">Customer Reviews</h3>
              <p className="text-sm text-gray-700 leading-relaxed flex-grow">Showcase Google reviews, Yelp ratings, and customer feedback to build trust and credibility with potential diners.</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border-2 bg-gradient-to-br p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] from-[#FFB700]/15 to-[#FFB700]/5 border-[#FFB700]/20 hover:shadow-[#FFB700]/20 hover:border-[#FFB700]/40">
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-4">Location & Hours</h3>
              <p className="text-sm text-gray-700 leading-relaxed flex-grow">Interactive maps, clear directions, and up-to-date hours that make it easy for customers to find and visit you.</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border-2 bg-gradient-to-br p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] from-[#70CBD0]/15 to-[#70CBD0]/5 border-[#70CBD0]/20 hover:shadow-[#70CBD0]/20 hover:border-[#70CBD0]/40">
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-4">Social Integration</h3>
              <p className="text-sm text-gray-700 leading-relaxed flex-grow">Connect Instagram, Facebook, and TikTok feeds to showcase your latest dishes and restaurant atmosphere.</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>
          </div>

        </div>
      </section>

      {/* Restaurant Principles Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Our Restaurant Design Principles</h2>
            <p className="text-xl text-gray-600 mb-8">The core values that guide our restaurant website design</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="group relative flex h-full flex-col rounded-2xl border-2 bg-gradient-to-br p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] from-[#da1c5c]/15 to-[#da1c5c]/5 border-[#da1c5c]/20 hover:shadow-[#da1c5c]/20 hover:border-[#da1c5c]/40">
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">Customer Experience Focus</h3>
              <p className="text-sm text-gray-700 leading-relaxed flex-grow">Every design decision is made with the customer experience in mind, ensuring your website is intuitive, engaging, and drives conversions.</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>
            <div className="group relative flex h-full flex-col rounded-2xl border-2 bg-gradient-to-br p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] from-[#262262]/15 to-[#262262]/5 border-[#262262]/20 hover:shadow-[#262262]/20 hover:border-[#262262]/40">
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">Mobile-First Approach</h3>
              <p className="text-sm text-gray-700 leading-relaxed flex-grow">With 75% of restaurant searches happening on mobile, we prioritize mobile experience while ensuring desktop perfection.</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-gradient-to-br from-[#262262] to-[#262262]/80 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <img src="/lunaratechIcon.png" alt="Speed" className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Speed</h3>
              <p className="text-white/90">Lightning-fast loading times that keep hungry customers engaged and ready to order.</p>
            </div>
            
            <div className="group bg-gradient-to-br from-[#70CBD0] to-[#70CBD0]/80 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <img src="/lunaratechIcon.png" alt="Appetite" className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Appetite Appeal</h3>
              <p className="text-white/90">Mouth-watering visuals and compelling descriptions that make customers crave your food.</p>
            </div>
            
            <div className="group bg-gradient-to-br from-[#da1c5c] to-[#da1c5c]/80 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <img src="/lunaratechIcon.png" alt="Trust" className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Trust Building</h3>
              <p className="text-white/90">Professional design and customer reviews that build confidence in your restaurant.</p>
            </div>
            
            <div className="group bg-gradient-to-br from-[#FFB700] to-[#FFB700]/80 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <img src="/lunaratechIcon.png" alt="Conversion" className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Conversion Focus</h3>
              <p className="text-white/90">Strategic design elements that guide customers from browsing to ordering and booking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Our Restaurant Design Process</h2>
            <p className="text-xl text-gray-600 mb-8">How we create websites that drive restaurant success</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="group relative flex h-full flex-col rounded-2xl border-2 bg-gradient-to-br p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] from-[#FFB700]/15 to-[#FFB700]/5 border-[#FFB700]/20 hover:shadow-[#FFB700]/20 hover:border-[#FFB700]/40">
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">Restaurant-Focused Approach</h3>
              <p className="text-sm text-gray-700 leading-relaxed flex-grow">Our process is specifically designed for restaurants, understanding the unique challenges of food service, customer expectations, and operational needs.</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>
            <div className="group relative flex h-full flex-col rounded-2xl border-2 bg-gradient-to-br p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] from-[#da1c5c]/15 to-[#da1c5c]/5 border-[#da1c5c]/20 hover:shadow-[#da1c5c]/20 hover:border-[#da1c5c]/40">
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">Results-Driven Design</h3>
              <p className="text-sm text-gray-700 leading-relaxed flex-grow">Every design decision is backed by data and restaurant industry best practices to ensure maximum impact on your bottom line.</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">01</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Discovery</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Understanding your restaurant's unique story, menu, and customer base to create a website that truly represents your brand.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>
            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">02</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Design</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Creating mouth-watering visuals and intuitive layouts that showcase your food and make ordering effortless.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>
            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">03</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Development</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Building fast, mobile-optimized websites with integrated ordering systems and reservation platforms.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>
            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">04</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Launch</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Going live with comprehensive testing, training, and ongoing support to ensure your success.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Portfolio Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#262262]/5 to-[#da1c5c]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Restaurant Success Stories</h2>
            <p className="text-xl text-gray-600 mb-8">Real results from our restaurant website designs</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="group relative flex h-full flex-col rounded-2xl border-2 bg-gradient-to-br p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] from-[#262262]/15 to-[#262262]/5 border-[#262262]/20 hover:shadow-[#262262]/20 hover:border-[#262262]/40">
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">Proven Restaurant Results</h3>
              <p className="text-sm text-gray-700 leading-relaxed flex-grow">Our restaurant websites consistently deliver measurable results, from increased online orders to higher reservation rates and improved customer engagement.</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>
            <div className="group relative flex h-full flex-col rounded-2xl border-2 bg-gradient-to-br p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] from-[#FFB700]/15 to-[#FFB700]/5 border-[#FFB700]/20 hover:shadow-[#FFB700]/20 hover:border-[#FFB700]/40">
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">Industry Expertise</h3>
              <p className="text-sm text-gray-700 leading-relaxed flex-grow">From fine dining to fast casual, we understand the unique needs of different restaurant types and create tailored solutions for each.</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-[#da1c5c] to-[#FFB700] flex items-center justify-center">
                <img src="/lunaratechIcon.png" alt="LunaraTech Icon" className="h-20 w-20" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#262262] mb-2">Fine Dining Restaurant</h3>
                <p className="text-gray-600 mb-4">Elegant website design with online reservations and wine menu integration, increasing bookings.</p>
                <div className="flex flex-wrap gap-2">
                  {['Online Reservations', 'Wine Menu', 'Elegant Design'].map(tag => (
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
                <h3 className="text-xl font-semibold text-[#262262] mb-2">Pizza Delivery Chain</h3>
                <p className="text-gray-600 mb-4">Mobile-optimized ordering system with real-time tracking, boosting online orders.</p>
                <div className="flex flex-wrap gap-2">
                  {['Online Ordering', 'Mobile App', 'Order Tracking'].map(tag => (
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
                <h3 className="text-xl font-semibold text-[#262262] mb-2">Cafe & Bakery</h3>
                <p className="text-gray-600 mb-4">Warm, inviting design with daily specials and event booking, increasing foot traffic.</p>
                <div className="flex flex-wrap gap-2">
                  {['Daily Specials', 'Event Booking', 'Warm Design'].map(tag => (
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
      <section className="py-16 bg-orange-600">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Attract More Customers?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Don't let hungry customers choose your competitors. Get a restaurant website that makes them crave your food.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
            </Link>
            <Link 
              to="tel:+15074003910" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
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

export default RestaurantWebsiteDesign;
