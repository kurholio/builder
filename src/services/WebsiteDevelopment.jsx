import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const WebsiteDevelopment = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: "Modern Frameworks",
      description: "React, Next.js, Vue.js, and Angular for lightning-fast, scalable applications",
      icon: "⚡",
      color: "from-[#da1c5c] to-[#FFB700]"
    },
    {
      title: "E-commerce Solutions",
      description: "Complete online stores with payment processing and inventory management",
      icon: "🛒",
      color: "from-[#70CBD0] to-[#262262]"
    },
    {
      title: "Enterprise Apps",
      description: "Scalable applications handling thousands of users and complex workflows",
      icon: "🏢",
      color: "from-[#FFB700] to-[#da1c5c]"
    },
    {
      title: "Mobile-First Design",
      description: "Responsive designs that work perfectly on all devices and screen sizes",
      icon: "📱",
      color: "from-[#262262] to-[#70CBD0]"
    }
  ];

  const technologies = [
    { name: "React", level: 95, color: "bg-[#da1c5c]" },
    { name: "Next.js", level: 90, color: "bg-[#70CBD0]" },
    { name: "Node.js", level: 88, color: "bg-[#FFB700]" },
    { name: "TypeScript", level: 85, color: "bg-[#262262]" },
    { name: "AWS", level: 92, color: "bg-[#da1c5c]" },
    { name: "Docker", level: 80, color: "bg-[#70CBD0]" }
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

      {/* Hero Section with Parallax Effect */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#262262]/5 to-[#da1c5c]/5"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#FFB700]/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-[#70CBD0]/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-[#da1c5c]/20 rounded-full animate-ping"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-6xl md:text-8xl font-bold text-[#262262] mb-6 bg-gradient-to-r from-[#262262] to-[#da1c5c] bg-clip-text text-transparent">
                Website Development
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Fast, scalable, user-friendly websites using modern frameworks — crafted to meet your goals and delight users.
              </p>
            </div>
          </div>

          {/* Animated Feature Showcase */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-[#262262] mb-8">What We Build</h2>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className={`p-6 rounded-2xl border-2 transition-all duration-500 cursor-pointer ${
                      activeFeature === index 
                        ? 'border-[#da1c5c] bg-white shadow-2xl scale-105' 
                        : 'border-gray-200 bg-white/50 hover:border-[#70CBD0] hover:shadow-lg'
                    }`}
                    onClick={() => setActiveFeature(index)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`text-3xl p-3 rounded-full bg-gradient-to-r ${feature.color} shadow-lg`}>
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#262262] mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-500">
                <img src="/services/dev.jpg" alt="Website Development" className="w-full h-80 object-cover rounded-2xl mb-6"/>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#262262]">Our Development Process</h3>
                  <div className="space-y-3">
                    {['Discovery & Planning', 'Design & Prototyping', 'Development & Testing', 'Launch & Optimization'].map((step, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                          index === 0 ? 'bg-[#da1c5c]' : 
                          index === 1 ? 'bg-[#70CBD0]' : 
                          index === 2 ? 'bg-[#FFB700]' : 'bg-[#262262]'
                        }`}>
                          {index + 1}
                        </div>
                        <span className="text-gray-700 font-medium">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#262262] mb-4">Our Technology Stack</h2>
            <p className="text-xl text-gray-600">Cutting-edge technologies for modern web development</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-[#262262]">{tech.name}</h3>
                  <span className="text-sm text-gray-500">{tech.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                  <div 
                    className={`h-3 rounded-full ${tech.color} transition-all duration-1000 delay-${index * 200}`}
                    style={{ width: `${tech.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#262262] mb-4">Recent Projects</h2>
            <p className="text-xl text-gray-600">See what we've built for our clients</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-[#da1c5c] to-[#FFB700] flex items-center justify-center">
                <span className="text-6xl">🏦</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#262262] mb-2">Fintech Platform</h3>
                <p className="text-gray-600 mb-4">Modern banking application with real-time transactions and security features.</p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'PostgreSQL', 'AWS'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-[#70CBD0]/20 text-[#262262] rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-[#70CBD0] to-[#262262] flex items-center justify-center">
                <span className="text-6xl">🏠</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#262262] mb-2">Real Estate Portal</h3>
                <p className="text-gray-600 mb-4">Property listing platform with advanced search and virtual tours.</p>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'TypeScript', 'MongoDB', 'Vercel'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-[#FFB700]/20 text-[#262262] rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-[#FFB700] to-[#da1c5c] flex items-center justify-center">
                <span className="text-6xl">🛍️</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#262262] mb-2">E-commerce Store</h3>
                <p className="text-gray-600 mb-4">Full-featured online store with payment processing and inventory management.</p>
                <div className="flex flex-wrap gap-2">
                  {['Vue.js', 'Laravel', 'MySQL', 'Docker'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-[#262262]/20 text-[#262262] rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Animation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-3xl p-12 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Build Your Website?</h2>
              <p className="text-xl mb-8 opacity-90">Let's discuss your project and create something amazing together.</p>
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

export default WebsiteDevelopment;