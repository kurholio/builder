import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Accessibility = () => {
  const [activeStandard, setActiveStandard] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [complianceScore, setComplianceScore] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    // Simulate compliance score animation
    const interval = setInterval(() => {
      setComplianceScore(prev => Math.min(100, prev + 1));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const accessibilityStandards = [
    {
      level: "A",
      title: "WCAG Level A",
      description: "Basic accessibility requirements including keyboard navigation and alternative text",
      color: "from-[#da1c5c] to-[#FFB700]",
      requirements: ["Keyboard Navigation", "Alternative Text", "Color Contrast", "Semantic HTML"]
    },
    {
      level: "AA",
      title: "WCAG Level AA",
      description: "Enhanced accessibility with color contrast, focus indicators, and screen reader support",
      color: "from-[#70CBD0] to-[#262262]",
      requirements: ["Color Contrast 4.5:1", "Focus Indicators", "Screen Reader Support", "Resizable Text"]
    },
    {
      level: "AAA",
      title: "WCAG Level AAA",
      description: "Highest level of accessibility with advanced features and comprehensive support",
      color: "from-[#FFB700] to-[#da1c5c]",
      requirements: ["Color Contrast 7:1", "Sign Language", "Extended Audio Description", "No Timing"]
    }
  ];

  const accessibilityFeatures = [
    {
      title: "Screen Reader Support",
      description: "Semantic HTML and ARIA labels for assistive technologies",
      icon: "👁️",
      color: "from-[#da1c5c] to-[#FFB700]",
      tools: ["NVDA", "JAWS", "VoiceOver", "TalkBack"]
    },
    {
      title: "Keyboard Navigation",
      description: "Full functionality accessible via keyboard only",
      icon: "⌨️",
      color: "from-[#70CBD0] to-[#262262]",
      tools: ["Tab Navigation", "Skip Links", "Focus Management", "Keyboard Shortcuts"]
    },
    {
      title: "Visual Accessibility",
      description: "High contrast modes and scalable fonts for visual impairments",
      icon: "👓",
      color: "from-[#FFB700] to-[#da1c5c]",
      tools: ["High Contrast", "Font Scaling", "Color Blind Support", "Custom Themes"]
    },
    {
      title: "Motor Accessibility",
      description: "Alternative input methods and larger touch targets",
      icon: "🖱️",
      color: "from-[#262262] to-[#70CBD0]",
      tools: ["Voice Control", "Switch Navigation", "Large Touch Targets", "Gesture Alternatives"]
    }
  ];

  const testingMethods = [
    {
      title: "Automated Testing",
      description: "Tools that automatically scan for accessibility issues",
      icon: "🤖",
      tools: ["axe-core", "WAVE", "Lighthouse", "Pa11y"]
    },
    {
      title: "Manual Testing",
      description: "Human evaluation of accessibility features",
      icon: "👤",
      tools: ["Keyboard Testing", "Screen Reader Testing", "Color Contrast Analysis", "User Testing"]
    },
    {
      title: "User Testing",
      description: "Testing with real users who have disabilities",
      icon: "👥",
      tools: ["Focus Groups", "Usability Testing", "Feedback Collection", "Iterative Improvement"]
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

      {/* Hero Section with Accessibility Theme */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#262262]/5 to-[#da1c5c]/5"></div>
        
        {/* Accessibility Icons Animation */}
        <div className="absolute top-20 left-10 text-4xl animate-bounce">♿</div>
        <div className="absolute top-40 right-20 text-3xl animate-pulse">👁️</div>
        <div className="absolute bottom-20 left-1/4 text-2xl animate-ping">⌨️</div>
        <div className="absolute top-60 right-1/3 text-3xl animate-bounce">🔊</div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-6xl md:text-8xl font-bold text-[#262262] mb-6">
                Accessibility
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                WCAG/ADA-minded design for inclusivity, compliance, and better UX for everyone.
              </p>
            </div>
          </div>

          {/* Compliance Score */}
          <div className="flex justify-center mb-20">
            <div className="bg-white rounded-2xl p-8 shadow-2xl text-center">
              <h3 className="text-2xl font-bold text-[#262262] mb-4">Compliance Score</h3>
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${complianceScore * 2.51} 251`}
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#da1c5c" />
                      <stop offset="100%" stopColor="#70CBD0" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-[#262262]">{complianceScore}%</span>
                </div>
              </div>
              <p className="text-gray-600">WCAG 2.1 AA Compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#262262] mb-4">Accessibility Features</h2>
            <p className="text-xl text-gray-600">Comprehensive accessibility solutions for inclusive design</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessibilityFeatures.map((feature, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-[#70CBD0]">
                <div className="text-center mb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#262262] mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                </div>
                <ul className="space-y-2">
                  {feature.tools.map((tool, toolIndex) => (
                    <li key={toolIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-[#70CBD0] rounded-full mr-3"></div>
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WCAG Standards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#262262] mb-4">WCAG Standards</h2>
            <p className="text-xl text-gray-600">Web Content Accessibility Guidelines compliance levels</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {accessibilityStandards.map((standard, index) => (
              <div 
                key={index}
                className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                  activeStandard === index ? 'border-2 border-[#70CBD0] scale-105' : 'border-2 border-transparent'
                }`}
                onClick={() => setActiveStandard(index)}
              >
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${standard.color} flex items-center justify-center text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300`}>
                    {standard.level}
                  </div>
                  <h3 className="text-2xl font-bold text-[#262262] mb-2">{standard.title}</h3>
                  <p className="text-gray-600">{standard.description}</p>
                </div>
                
                <ul className="space-y-3">
                  {standard.requirements.map((requirement, reqIndex) => (
                    <li key={reqIndex} className="flex items-center text-gray-600">
                      <div className="w-5 h-5 bg-[#70CBD0] rounded-full flex items-center justify-center mr-3">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Methods Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#262262] mb-4">Testing Methods</h2>
            <p className="text-xl text-gray-600">Comprehensive testing to ensure accessibility compliance</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testingMethods.map((method, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#262262] mb-2">{method.title}</h3>
                  <p className="text-gray-600">{method.description}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  {method.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="text-sm bg-gray-100 text-gray-700 px-3 py-2 rounded text-center">
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#262262]/5 to-[#da1c5c]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#262262] mb-4">Why Accessibility Matters</h2>
            <p className="text-xl text-gray-600">The benefits of accessible design for everyone</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🌍</div>
              <h3 className="text-2xl font-bold text-[#262262] mb-4">Inclusive Design</h3>
              <p className="text-gray-600 mb-4">Design that works for everyone, regardless of ability</p>
              <div className="text-3xl font-bold text-[#da1c5c]">1B+</div>
              <p className="text-sm text-gray-500">People with disabilities worldwide</p>
            </div>
            
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">⚖️</div>
              <h3 className="text-2xl font-bold text-[#262262] mb-4">Legal Compliance</h3>
              <p className="text-gray-600 mb-4">Meet ADA and WCAG requirements to avoid legal issues</p>
              <div className="text-3xl font-bold text-[#70CBD0]">100%</div>
              <p className="text-sm text-gray-500">Compliance rate</p>
            </div>
            
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">📈</div>
              <h3 className="text-2xl font-bold text-[#262262] mb-4">Better UX</h3>
              <p className="text-gray-600 mb-4">Accessible design improves user experience for everyone</p>
              <div className="text-3xl font-bold text-[#FFB700]">30%</div>
              <p className="text-sm text-gray-500">Better user engagement</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-gradient-to-r from-[#262262] to-[#da1c5c] rounded-3xl p-12 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative text-center">
              <h2 className="text-4xl font-bold mb-4">Make Your Site Accessible</h2>
              <p className="text-xl mb-8 opacity-90">Let's create inclusive digital experiences that work for everyone, everywhere.</p>
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

export default Accessibility;