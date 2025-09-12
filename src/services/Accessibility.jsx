import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Accessibility = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Icon components matching landing page exactly
  const Icon = ({ children }) => (
    <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );

  const Check = () => (
    <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
  );

  const Eye = () => (
    <Icon>
      <path d="M1 12s4-8 7-8 7 8 7 8-4 8-7 8-7-8-7-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </Icon>
  );

  const Keyboard = () => (
    <Icon>
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </Icon>
  );

  const Mouse = () => (
    <Icon>
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
      <line x1="12" y1="18" x2="12.01" y2="18"/>
    </Icon>
  );

  const Users = () => (
    <Icon>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </Icon>
  );

  const Arrow = () => (
    <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
  );

  const Bot = () => (
    <Icon>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <circle cx="12" cy="5" r="2"/>
      <path d="M12 7v4"/>
      <line x1="8" y1="16" x2="8" y2="16"/>
      <line x1="16" y1="16" x2="16" y2="16"/>
    </Icon>
  );

  const User = () => (
    <Icon>
      <circle cx="12" cy="8" r="4"/>
      <path d="M4 22a8 8 0 0 1 16 0"/>
    </Icon>
  );

  const Globe = () => (
    <Icon>
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </Icon>
  );

  const Scale = () => (
    <Icon>
      <path d="M16 2l4 4-4 4"/>
      <path d="M8 2l-4 4 4 4"/>
      <path d="M12 6v8"/>
      <path d="M8 14l4 4 4-4"/>
    </Icon>
  );

  const TrendingUp = () => (
    <Icon>
      <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/>
      <polyline points="16,7 22,7 22,13"/>
    </Icon>
  );

  // Card components matching landing page exactly
  const ServiceCard = ({ title, children, icon, className }) => (
    <div className={`group relative flex h-full flex-col rounded-xl border-2 border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] hover:border-[#262262] ${className || ''}`}>
      <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
        <div className="text-[#70CBD0]">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 leading-relaxed flex-grow">{children}</p>
      <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-20" />
    </div>
  );

  const ProcessCard = ({ title, children, step, className }) => (
    <div className={`group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0] ${className || ''}`}>
      <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">{step}</div>
      <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 leading-relaxed">{children}</p>
      <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
    </div>
  );

  const AboutCard = ({ title, children, color, className }) => {
    const colorClasses = {
      fuschia: "from-[#da1c5c]/15 to-[#da1c5c]/5 border-[#da1c5c]/20 hover:shadow-[#da1c5c]/20 hover:border-[#da1c5c]/40",
      navy: "from-[#262262]/15 to-[#262262]/5 border-[#262262]/20 hover:shadow-[#262262]/20 hover:border-[#262262]/40", 
      gold: "from-[#FFB700]/15 to-[#FFB700]/5 border-[#FFB700]/20 hover:shadow-[#FFB700]/20 hover:border-[#FFB700]/40"
    };
    
    return (
      <div className={`group relative flex h-full flex-col rounded-2xl border-2 bg-gradient-to-br p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] ${colorClasses[color]} ${className || ''}`}>
        <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">{title}</h3>
        <p className="text-sm text-gray-700 leading-relaxed flex-grow">{children}</p>
        <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
      </div>
    );
  };

  const Stat = ({ value, label, className }) => (
    <div className={`rounded-2xl border-2 p-6 text-center shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:scale-105 ${className || 'bg-white border-gray-200'}`}>
      <div className="text-4xl font-bold tracking-tight transition-all duration-300 hover:text-[#262262]">{value}</div>
      <div className="mt-2 text-sm text-gray-600 leading-tight">{label}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5">
      {/* Navigation */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/90 border-b border-gray-100">
        <div className="mx-auto flex max-w-7xl items-start justify-between px-4 py-3 sm:py-4">
          <Link to="/" className="flex items-center">
            <img 
              src="/lunaratechLogo.png" 
              alt="LunaraTech Logo" 
              className="h-12 w-auto"
            />
          </Link>
          <nav className="hidden gap-6 text-sm text-gray-700 sm:flex mt-5">
            <a href="/#home" className="hover:text-gray-900">Home</a>
            <a href="/#niches" className="hover:text-gray-900">Niches</a>
            <a href="/#services" className="hover:text-gray-900">Services</a>
            <a href="/#about" className="hover:text-gray-900">About</a>
            <a href="/#process" className="hover:text-gray-900">Process</a>
            <a href="/#contact" className="hover:text-gray-900">Contact</a>
          </nav>
          <Link to="/" className="hidden rounded-md bg-[#FFB700] px-4 py-2 text-sm font-medium text-gray-900 hover:bg-[#e6a038] transition-all duration-300 sm:inline-flex mt-2">Get Quote</Link>
        </div>
      </header>

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
            </div>
          </div>

          {/* Content Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            <AboutCard color="navy" title="Inclusive Design">
              Our accessibility services ensure your digital products are inclusive and usable by everyone, regardless of their abilities. We follow WCAG guidelines and ADA compliance standards to create experiences that work for all users.
            </AboutCard>
            <AboutCard color="gold" title="Better UX for All">
              Accessibility is not just about compliance—it's about creating better user experiences for everyone. By designing with accessibility in mind, we create products that are more usable, discoverable, and effective for all users.
            </AboutCard>
          </div>

          {/* Accessibility Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <ServiceCard title="Screen Reader Support" icon={<Eye />}>
              Semantic HTML and ARIA labels for assistive technologies, ensuring your content is accessible to users with visual impairments.
            </ServiceCard>
            <ServiceCard title="Keyboard Navigation" icon={<Keyboard />}>
              Full functionality accessible via keyboard only, providing alternative navigation methods for users who cannot use a mouse.
            </ServiceCard>
            <ServiceCard title="Visual Accessibility" icon={<Mouse />}>
              High contrast modes and scalable fonts for visual impairments, ensuring your content is readable by users with various visual needs.
            </ServiceCard>
            <ServiceCard title="Motor Accessibility" icon={<Users />}>
              Alternative input methods and larger touch targets for users with motor impairments, ensuring everyone can interact with your interface.
            </ServiceCard>
          </div>
        </div>
      </section>

      {/* WCAG Standards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">WCAG Standards</h2>
            <p className="text-xl text-gray-600 mb-8">Web Content Accessibility Guidelines compliance levels</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <AboutCard color="fuschia" title="Comprehensive Guidelines">
              The Web Content Accessibility Guidelines (WCAG) provide a framework for creating accessible digital content. We help you understand and implement these guidelines to ensure your products are accessible to everyone.
            </AboutCard>
            <AboutCard color="navy" title="Expert Implementation">
              Our team is well-versed in all WCAG levels and can help you choose the appropriate compliance level for your project. We provide detailed audits and recommendations to help you achieve and maintain compliance.
            </AboutCard>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                level: "A", 
                title: "WCAG Level A", 
                description: "Basic accessibility requirements including keyboard navigation and alternative text", 
                requirements: ["Keyboard Navigation", "Alternative Text", "Color Contrast", "Semantic HTML"],
                color: "from-[#da1c5c] to-[#FFB700]",
                borderColor: "border-[#da1c5c]",
                accentColor: "text-[#da1c5c]"
              },
              { 
                level: "AA", 
                title: "WCAG Level AA", 
                description: "Enhanced accessibility with color contrast, focus indicators, and screen reader support", 
                requirements: ["Color Contrast 4.5:1", "Focus Indicators", "Screen Reader Support", "Resizable Text"],
                color: "from-[#70CBD0] to-[#262262]",
                borderColor: "border-[#70CBD0]",
                accentColor: "text-[#70CBD0]"
              },
              { 
                level: "AAA", 
                title: "WCAG Level AAA", 
                description: "Highest level of accessibility with advanced features and comprehensive support", 
                requirements: ["Color Contrast 7:1", "Sign Language", "Extended Audio Description", "No Timing"],
                color: "from-[#FFB700] to-[#da1c5c]",
                borderColor: "border-[#FFB700]",
                accentColor: "text-[#FFB700]"
              }
            ].map((standard, index) => (
              <div key={index} className={`group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 ${standard.borderColor} relative overflow-hidden`}>
                {/* Decorative corner element */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${standard.color} opacity-5 rounded-bl-full`}></div>
                
                <div className="text-center mb-6 relative z-10">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full ${standard.accentColor.replace('text-', 'bg-')} flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {standard.level}
                  </div>
                  <h3 className="text-xl font-semibold text-[#262262] mb-2">{standard.title}</h3>
                  <p className="text-gray-600">{standard.description}</p>
                </div>
                
                <ul className="space-y-3 relative z-10">
                  {standard.requirements.map((requirement, reqIndex) => (
                    <li key={reqIndex} className="flex items-center text-gray-600">
                      <div className={`w-6 h-6 rounded-full ${standard.accentColor.replace('text-', 'bg-')} mr-3 group-hover:scale-110 transition-transform duration-300`}>
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
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Testing Methods</h2>
            <p className="text-xl text-gray-600 mb-8">Comprehensive testing to ensure accessibility compliance</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <AboutCard color="gold" title="Multi-Layered Approach">
              Our accessibility testing combines automated tools with manual evaluation and user testing to ensure comprehensive coverage. We use industry-standard tools and methodologies to identify and resolve accessibility issues.
            </AboutCard>
            <AboutCard color="fuschia" title="Continuous Testing">
              Testing is an ongoing process that should be integrated throughout the development lifecycle. We provide testing services at every stage to ensure accessibility is maintained as your product evolves.
            </AboutCard>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { title: "Automated Testing", description: "Tools that automatically scan for accessibility issues", tools: ["axe-core", "WAVE", "Lighthouse", "Pa11y"], icon: <Bot /> },
              { title: "Manual Testing", description: "Human evaluation of accessibility features", tools: ["Keyboard Testing", "Screen Reader Testing", "Color Contrast Analysis", "User Testing"], icon: <User /> },
              { title: "User Testing", description: "Testing with real users who have disabilities", tools: ["Focus Groups", "Usability Testing", "Feedback Collection", "Iterative Improvement"], icon: <Users /> }
            ].map((method, index) => (
              <div key={index} className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <div className="text-[#70CBD0]">
                      {method.icon}
                    </div>
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
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <AboutCard color="navy" title="Inclusive Business">
              Accessibility is not just about compliance—it's about creating better user experiences for everyone. Accessible design benefits all users, not just those with disabilities, and can improve your business outcomes.
            </AboutCard>
            <AboutCard color="gold" title="Strategic Advantage">
              By investing in accessibility, you expand your potential user base, improve SEO performance, and demonstrate your commitment to inclusivity. Accessible design often leads to better overall usability and user satisfaction.
            </AboutCard>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <Globe className="h-8 w-8 text-[#da1c5c]" />
              </div>
              <h3 className="text-xl font-semibold text-[#262262] mb-4">Inclusive Design</h3>
              <p className="text-gray-600 mb-4">Design that works for everyone, regardless of ability</p>
              <div className="text-3xl font-bold text-[#da1c5c]">1B+</div>
              <p className="text-sm text-gray-500">People with disabilities worldwide</p>
            </div>
            
            <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <Scale className="h-8 w-8 text-[#70CBD0]" />
              </div>
              <h3 className="text-xl font-semibold text-[#262262] mb-4">Legal Compliance</h3>
              <p className="text-gray-600 mb-4">Meet ADA and WCAG requirements to avoid legal issues</p>
              <div className="text-3xl font-bold text-[#70CBD0]">100%</div>
              <p className="text-sm text-gray-500">Compliance rate</p>
            </div>
            
            <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <TrendingUp className="h-8 w-8 text-[#FFB700]" />
              </div>
              <h3 className="text-xl font-semibold text-[#262262] mb-4">Better UX</h3>
              <p className="text-gray-600 mb-4">Accessible design improves user experience for everyone</p>
              <div className="text-3xl font-bold text-[#FFB700]">30%</div>
              <p className="text-sm text-gray-500">Better user engagement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Our Accessibility Impact</h2>
            <p className="text-xl text-gray-600 mb-8">Measurable results from our accessibility work</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Stat value="100+" label="Sites Audited" />
            <Stat value="WCAG 2.1 AA" label="Compliance Level" />
            <Stat value="< 1 week" label="Audit Turnaround" />
            <Stat value="100%" label="Client Satisfaction" />
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