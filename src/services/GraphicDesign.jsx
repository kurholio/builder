import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GraphicDesign = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const designServices = [
    {
      title: "Brand Identity",
      description: "Complete visual identity including logos, color palettes, and brand guidelines",
      icon: "🎨",
      color: "from-[#da1c5c] to-[#FFB700]",
      features: ["Logo Design", "Color Palette", "Typography", "Brand Guidelines"]
    },
    {
      title: "UI/UX Design",
      description: "User interface designs that are both beautiful and functional",
      icon: "💻",
      color: "from-[#70CBD0] to-[#262262]",
      features: ["Wireframes", "Mockups", "User Flows", "Design Systems"]
    },
    {
      title: "Marketing Materials",
      description: "Brochures, flyers, and promotional materials that convert",
      icon: "📄",
      color: "from-[#FFB700] to-[#da1c5c]",
      features: ["Print Design", "Digital Ads", "Social Media", "Presentations"]
    },
    {
      title: "Web Graphics",
      description: "Custom graphics and illustrations for websites and applications",
      icon: "🌐",
      color: "from-[#262262] to-[#70CBD0]",
      features: ["Icons", "Illustrations", "Banners", "Infographics"]
    }
  ];

  const designPrinciples = [
    { title: "Consistency", description: "Every element follows your brand guidelines", icon: "🔄" },
    { title: "Usability", description: "Designs that are intuitive and user-friendly", icon: "👆" },
    { title: "Innovation", description: "Cutting-edge design trends with timeless appeal", icon: "✨" },
    { title: "Accessibility", description: "Inclusive design that works for everyone", icon: "♿" }
  ];

  const portfolioItems = [
    {
      title: "E-commerce Brand",
      description: "Complete brand identity for online fashion store",
      image: "/services/4380747.jpg",
      category: "Brand Identity"
    },
    {
      title: "Mobile App UI",
      description: "User interface design for fitness tracking app",
      image: "/services/7040859.jpg",
      category: "UI/UX Design"
    },
    {
      title: "Marketing Campaign",
      description: "Print and digital materials for product launch",
      image: "/services/digital-art-creation-tablet-with-stylus.jpg",
      category: "Marketing"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3 group">
              <img src="/lunaratechLogo.png" alt="LunaraTech Logo" className="h-10 w-auto group-hover:scale-110 transition-transform duration-300"/>
              <span className="text-xl font-bold text-[#262262] group-hover:text-[#da1c5c] transition-colors duration-300">LunaraTech</span>
            </Link>
            <Link 
              to="/" 
              className="bg-[#FFB700] text-[#262262] px-6 py-2 rounded-xl font-medium hover:bg-[#FFB700]/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with Creative Layout */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#da1c5c]/5 to-[#FFB700]/5"></div>
        
        {/* Floating Design Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-[#FFB700]/20 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-[#da1c5c]/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-8 h-8 bg-[#70CBD0]/20 rounded-full animate-ping"></div>
        <div className="absolute top-60 right-1/3 w-6 h-6 bg-[#262262]/20 rounded-full animate-bounce"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <h1 className="text-6xl md:text-8xl font-bold text-[#262262] mb-6 leading-tight">
                Graphic Design
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Pixel-perfect UI aligned to your brand for a consistent, engaging experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-6 py-3 bg-[#da1c5c] text-white rounded-full font-semibold">Brand Identity</div>
                <div className="px-6 py-3 bg-[#70CBD0] text-white rounded-full font-semibold">UI/UX Design</div>
                <div className="px-6 py-3 bg-[#FFB700] text-white rounded-full font-semibold">Marketing</div>
              </div>
            </div>
            
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img src="/services/digital-art-creation-tablet-with-stylus.jpg" alt="Graphic Design" className="w-full h-80 object-cover rounded-2xl mb-6"/>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-[#262262] mb-2">Creative Process</h3>
                    <p className="text-gray-600">From concept to final design</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#da1c5c] rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#70CBD0] rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#262262] mb-4">Design Services</h2>
            <p className="text-xl text-gray-600">Comprehensive design solutions for your business</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designServices.map((service, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                  hoveredCard === index ? 'scale-105 border-2 border-[#da1c5c]' : 'border-2 border-transparent'
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="text-center mb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#262262] mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-[#70CBD0] rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section with Masonry Layout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#262262] mb-4">Our Design Portfolio</h2>
            <p className="text-xl text-gray-600">Recent projects that showcase our design expertise</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-3 py-1 bg-[#da1c5c] rounded-full text-sm font-semibold">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#262262] mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Principles Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#262262] mb-4">Our Design Principles</h2>
            <p className="text-xl text-gray-600">The core values that guide our design process</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designPrinciples.map((principle, index) => (
              <div key={index} className="group text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#da1c5c] to-[#FFB700] rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-bold text-[#262262] mb-3">{principle.title}</h3>
                <p className="text-gray-600">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#262262]/5 to-[#da1c5c]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#262262] mb-4">Our Creative Process</h2>
            <p className="text-xl text-gray-600">How we bring your vision to life</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your brand and goals", color: "from-[#da1c5c] to-[#FFB700]" },
              { step: "02", title: "Research", description: "Analyzing market trends and competitors", color: "from-[#70CBD0] to-[#262262]" },
              { step: "03", title: "Concept", description: "Creating initial design concepts", color: "from-[#FFB700] to-[#da1c5c]" },
              { step: "04", title: "Refine", description: "Iterating and perfecting the design", color: "from-[#262262] to-[#70CBD0]" }
            ].map((step, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300`}>
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-[#262262] mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c]"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-gradient-to-r from-[#da1c5c] to-[#70CBD0] rounded-3xl p-12 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full"></div>
            
            <div className="relative text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Elevate Your Brand?</h2>
              <p className="text-xl mb-8 opacity-90">Let's create stunning visuals that tell your story and engage your audience.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/#contact" 
                  className="bg-white text-[#262262] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Get Started
                </Link>
                <a 
                  href="tel:+15074003910" 
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#262262] hover:scale-105 transition-all duration-300"
                >
                  Call (507) 400-3910
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GraphicDesign;