import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MaintenanceSupport = () => {
  const [activeSupport, setActiveSupport] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [ticketCount, setTicketCount] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    // Simulate ticket counter
    const interval = setInterval(() => {
      setTicketCount(prev => prev + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const supportTiers = [
    {
      name: "Basic",
      price: "$299",
      period: "/month",
      icon: "📧",
      color: "from-[#da1c5c] to-[#FFB700]",
      features: ["Email Support", "Basic Monitoring", "Monthly Updates", "Documentation"],
      popular: false
    },
    {
      name: "Premium",
      price: "$599",
      period: "/month",
      icon: "📞",
      color: "from-[#70CBD0] to-[#262262]",
      features: ["Phone + Email Support", "24/7 Monitoring", "Weekly Updates", "Priority Response"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "/month",
      icon: "🏢",
      color: "from-[#FFB700] to-[#da1c5c]",
      features: ["Dedicated Support", "Real-time Monitoring", "Daily Updates", "On-site Support"],
      popular: false
    }
  ];

  const supportServices = [
    {
      title: "24/7 Monitoring",
      description: "Continuous monitoring of your application performance and uptime",
      icon: "👁️",
      color: "from-[#da1c5c] to-[#FFB700]",
      metrics: ["99.9% Uptime", "Real-time Alerts", "Performance Tracking", "Error Monitoring"]
    },
    {
      title: "Regular Updates",
      description: "Scheduled updates for security patches and feature enhancements",
      icon: "🔄",
      color: "from-[#70CBD0] to-[#262262]",
      metrics: ["Security Patches", "Feature Updates", "Bug Fixes", "Performance Improvements"]
    },
    {
      title: "Feature Development",
      description: "Ongoing development of new features based on user feedback",
      icon: "🚀",
      color: "from-[#FFB700] to-[#da1c5c]",
      metrics: ["New Features", "UI Improvements", "API Enhancements", "Integration Updates"]
    },
    {
      title: "Technical Support",
      description: "Expert technical support for any issues or questions",
      icon: "🛠️",
      color: "from-[#262262] to-[#70CBD0]",
      metrics: ["Bug Fixes", "Troubleshooting", "Code Reviews", "Best Practices"]
    }
  ];

  const supportStats = [
    { label: "Response Time", value: "< 2 hours", color: "text-[#da1c5c]" },
    { label: "Uptime", value: "99.9%", color: "text-[#70CBD0]" },
    { label: "Tickets Resolved", value: `${ticketCount}+`, color: "text-[#FFB700]" },
    { label: "Client Satisfaction", value: "98%", color: "text-[#262262]" }
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

      {/* Hero Section with Support Theme */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFB700]/5 to-[#da1c5c]/5"></div>
        
        {/* Support Icons Animation */}
        <div className="absolute top-20 left-10 text-4xl animate-bounce">🛠️</div>
        <div className="absolute top-40 right-20 text-3xl animate-pulse">📞</div>
        <div className="absolute bottom-20 left-1/4 text-2xl animate-ping">💬</div>
        <div className="absolute top-60 right-1/3 text-3xl animate-bounce">⚡</div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-6xl md:text-8xl font-bold text-[#262262] mb-6">
                Maintenance & Support
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Reliable updates, monitoring, and feature rollouts to keep you growing.
              </p>
            </div>
          </div>

          {/* Support Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {supportStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#262262] mb-4">Support Services</h2>
            <p className="text-xl text-gray-600">Comprehensive support to keep your application running smoothly</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportServices.map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-[#FFB700]">
                <div className="text-center mb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#262262] mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                </div>
                <ul className="space-y-2">
                  {service.metrics.map((metric, metricIndex) => (
                    <li key={metricIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-[#FFB700] rounded-full mr-3"></div>
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Tiers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#262262] mb-4">Support Tiers</h2>
            <p className="text-xl text-gray-600">Choose the support level that fits your needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {supportTiers.map((tier, index) => (
              <div key={index} className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                tier.popular ? 'border-2 border-[#FFB700] scale-105' : 'border-2 border-transparent'
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#FFB700] text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${tier.color} flex items-center justify-center text-2xl`}>
                    {tier.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#262262] mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-[#262262] mb-1">
                    {tier.price}
                    <span className="text-lg text-gray-500">{tier.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <div className="w-5 h-5 bg-[#FFB700] rounded-full flex items-center justify-center mr-3">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                  tier.popular 
                    ? 'bg-[#FFB700] text-[#262262] hover:bg-[#FFB700]/90' 
                    : 'bg-[#262262] text-white hover:bg-[#262262]/90'
                }`}>
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#262262] mb-4">How We Support You</h2>
            <p className="text-xl text-gray-600">Our systematic approach to providing exceptional support</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                { step: "1", title: "Issue Detection", description: "Proactive monitoring identifies issues before they impact users", icon: "🔍" },
                { step: "2", title: "Rapid Response", description: "Quick response and initial assessment of the issue", icon: "⚡" },
                { step: "3", title: "Resolution", description: "Expert team works to resolve the issue efficiently", icon: "🛠️" },
                { step: "4", title: "Prevention", description: "Implement measures to prevent similar issues in the future", icon: "🛡️" }
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${
                    index === 0 ? 'from-[#da1c5c] to-[#FFB700]' :
                    index === 1 ? 'from-[#70CBD0] to-[#262262]' :
                    index === 2 ? 'from-[#FFB700] to-[#da1c5c]' : 'from-[#262262] to-[#70CBD0]'
                  } flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300`}>
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#262262] mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <img src="/services/man-working-desk-medium-shot.jpg" alt="Support Team" className="w-full h-64 object-cover rounded-xl mb-6"/>
              <h3 className="text-2xl font-bold text-[#262262] mb-4">Our Support Team</h3>
              <p className="text-gray-600 mb-4">
                Experienced developers and support specialists dedicated to keeping your application running smoothly.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#da1c5c]">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#70CBD0]">24/7</div>
                  <div className="text-sm text-gray-600">Availability</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#262262]/5 to-[#da1c5c]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#262262] mb-4">Why Choose Our Support?</h2>
            <p className="text-xl text-gray-600">The benefits of having reliable technical support</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
              <h3 className="text-2xl font-bold text-[#262262] mb-4">Fast Response</h3>
              <p className="text-gray-600 mb-4">Average response time under 2 hours for critical issues</p>
              <div className="text-3xl font-bold text-[#da1c5c]">2 hours</div>
              <p className="text-sm text-gray-500">Response time</p>
            </div>
            
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🛡️</div>
              <h3 className="text-2xl font-bold text-[#262262] mb-4">Proactive Monitoring</h3>
              <p className="text-gray-600 mb-4">We catch issues before they impact your users</p>
              <div className="text-3xl font-bold text-[#70CBD0]">99.9%</div>
              <p className="text-sm text-gray-500">Uptime guarantee</p>
            </div>
            
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">📈</div>
              <h3 className="text-2xl font-bold text-[#262262] mb-4">Growth Focused</h3>
              <p className="text-gray-600 mb-4">Support that scales with your business needs</p>
              <div className="text-3xl font-bold text-[#FFB700]">100%</div>
              <p className="text-sm text-gray-500">Scalable</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-gradient-to-r from-[#FFB700] to-[#da1c5c] rounded-3xl p-12 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative text-center">
              <h2 className="text-4xl font-bold mb-4">Need Reliable Support?</h2>
              <p className="text-xl mb-8 opacity-90">Let's keep your application running smoothly with our comprehensive support services.</p>
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

export default MaintenanceSupport;