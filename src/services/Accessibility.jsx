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

  // Icon components matching landing page style
  const Check = () => (
    <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
  );
  const Eye = () => (
    <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 7-8 7 8 7 8-4 8-7 8-7-8-7-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  );
  const Keyboard = () => (
    <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  );
  const Mouse = () => (
    <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
      <line x1="12" y1="18" x2="12.01" y2="18"/>
    </svg>
  );
  const Users = () => (
    <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );

  const accessibilityStandards = [
    {
      level: "A",
      title: "WCAG Level A",
      description: "Basic accessibility requirements including keyboard navigation and alternative text",
      requirements: ["Keyboard Navigation", "Alternative Text", "Color Contrast", "Semantic HTML"]
    },
    {
      level: "AA",
      title: "WCAG Level AA",
      description: "Enhanced accessibility with color contrast, focus indicators, and screen reader support",
      requirements: ["Color Contrast 4.5:1", "Focus Indicators", "Screen Reader Support", "Resizable Text"]
    },
    {
      level: "AAA",
      title: "WCAG Level AAA",
      description: "Highest level of accessibility with advanced features and comprehensive support",
      requirements: ["Color Contrast 7:1", "Sign Language", "Extended Audio Description", "No Timing"]
    }
  ];

  const accessibilityFeatures = [
    {
      title: "Screen Reader Support",
      description: "Semantic HTML and ARIA labels for assistive technologies",
      icon: <Eye />
    },
    {
      title: "Keyboard Navigation",
      description: "Full functionality accessible via keyboard only",
      icon: <Keyboard />
    },
    {
      title: "Visual Accessibility",
      description: "High contrast modes and scalable fonts for visual impairments",
      icon: <Mouse />
    },
    {
      title: "Motor Accessibility",
      description: "Alternative input methods and larger touch targets",
      icon: <Users />
    }
  ];

  const testingMethods = [
    {
      title: "Automated Testing",
      description: "Tools that automatically scan for accessibility issues",
      tools: ["axe-core", "WAVE", "Lighthouse", "Pa11y"]
    },
    {
      title: "Manual Testing",
      description: "Human evaluation of accessibility features",
      tools: ["Keyboard Testing", "Screen Reader Testing", "Color Contrast Analysis", "User Testing"]
    },
    {
      title: "User Testing",
      description: "Testing with real users who have disabilities",
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

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-5xl md:text-6xl font-bold text-[#262262] mb-6">
                Accessibility
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                WCAG/ADA-minded design for inclusivity, compliance, and better UX for everyone.
              </p>
              <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
                <p className="mb-4">
                  Our accessibility services ensure your digital products are inclusive and usable by everyone, regardless of their abilities. We follow WCAG guidelines and ADA compliance standards to create experiences that work for all users.
                </p>
                <p>
                  Accessibility is not just about compliance—it's about creating better user experiences for everyone. By designing with accessibility in mind, we create products that are more usable, discoverable, and effective for all users.
                </p>
              </div>
            </div>
          </div>

          {/* Compliance Score */}
          <div className="flex justify-center mb-20">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <h3 className="text-2xl font-semibold text-[#262262] mb-4">Compliance Score</h3>
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
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Accessibility Features</h2>
            <p className="text-xl text-gray-600 mb-8">Comprehensive accessibility solutions for inclusive design</p>
            <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
              <p className="mb-4">
                Our accessibility services cover all aspects of inclusive design, from initial planning to final implementation. We ensure your digital products meet WCAG guidelines and provide excellent user experiences for people with disabilities.
              </p>
              <p>
                We work with you to understand your specific accessibility requirements and implement solutions that not only meet compliance standards but also enhance the overall user experience for all users.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessibilityFeatures.map((feature, index) => (
              <div key={index} className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <div className="text-[#70CBD0]">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-grow">{feature.description}</p>
                <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WCAG Standards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">WCAG Standards</h2>
            <p className="text-xl text-gray-600 mb-8">Web Content Accessibility Guidelines compliance levels</p>
            <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
              <p className="mb-4">
                The Web Content Accessibility Guidelines (WCAG) provide a framework for creating accessible digital content. We help you understand and implement these guidelines to ensure your products are accessible to everyone.
              </p>
              <p>
                Our team is well-versed in all WCAG levels and can help you choose the appropriate compliance level for your project. We provide detailed audits and recommendations to help you achieve and maintain compliance.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {accessibilityStandards.map((standard, index) => (
              <div 
                key={index}
                className={`group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer ${
                  activeStandard === index ? 'border-2 border-[#70CBD0] scale-105' : 'border-2 border-transparent'
                }`}
                onClick={() => setActiveStandard(index)}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                    {standard.level}
                  </div>
                  <h3 className="text-xl font-semibold text-[#262262] mb-2">{standard.title}</h3>
                  <p className="text-gray-600">{standard.description}</p>
                </div>
                
                <ul className="space-y-3">
                  {standard.requirements.map((requirement, reqIndex) => (
                    <li key={reqIndex} className="flex items-center text-gray-600">
                      <Check className="w-5 h-5 text-[#70CBD0] mr-3" />
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
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Testing Methods</h2>
            <p className="text-xl text-gray-600 mb-8">Comprehensive testing to ensure accessibility compliance</p>
            <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
              <p className="mb-4">
                Our accessibility testing combines automated tools with manual evaluation and user testing to ensure comprehensive coverage. We use industry-standard tools and methodologies to identify and resolve accessibility issues.
              </p>
              <p>
                Testing is an ongoing process that should be integrated throughout the development lifecycle. We provide testing services at every stage to ensure accessibility is maintained as your product evolves.
              </p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testingMethods.map((method, index) => (
              <div key={index} className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {index === 0 ? '🤖' : index === 1 ? '👤' : '👥'}
                  </div>
                  <h3 className="text-2xl font-semibold text-[#262262] mb-2">{method.title}</h3>
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
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Why Accessibility Matters</h2>
            <p className="text-xl text-gray-600 mb-8">The benefits of accessible design for everyone</p>
            <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
              <p className="mb-4">
                Accessibility is not just about compliance—it's about creating better user experiences for everyone. Accessible design benefits all users, not just those with disabilities, and can improve your business outcomes.
              </p>
              <p>
                By investing in accessibility, you expand your potential user base, improve SEO performance, and demonstrate your commitment to inclusivity. Accessible design often leads to better overall usability and user satisfaction.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                🌍
              </div>
              <h3 className="text-xl font-semibold text-[#262262] mb-4">Inclusive Design</h3>
              <p className="text-gray-600 mb-4">Design that works for everyone, regardless of ability</p>
              <div className="text-3xl font-bold text-[#da1c5c]">1B+</div>
              <p className="text-sm text-gray-500">People with disabilities worldwide</p>
            </div>
            
            <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#70CBD0] to-[#262262] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                ⚖️
              </div>
              <h3 className="text-xl font-semibold text-[#262262] mb-4">Legal Compliance</h3>
              <p className="text-gray-600 mb-4">Meet ADA and WCAG requirements to avoid legal issues</p>
              <div className="text-3xl font-bold text-[#70CBD0]">100%</div>
              <p className="text-sm text-gray-500">Compliance rate</p>
            </div>
            
            <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FFB700] to-[#da1c5c] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                📈
              </div>
              <h3 className="text-xl font-semibold text-[#262262] mb-4">Better UX</h3>
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
          <div className="relative bg-gradient-to-r from-[#262262] to-[#da1c5c] rounded-2xl p-12 text-white overflow-hidden">
            <div className="relative text-center">
              <h2 className="text-3xl font-bold mb-4">Make Your Site Accessible</h2>
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