import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const WebsiteDevelopment = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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

  const Code = () => (
    <Icon>
      <polyline points="16,18 22,12 16,6"/>
      <polyline points="8,6 2,12 8,18"/>
    </Icon>
  );

  const Globe = () => (
    <Icon>
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </Icon>
  );

  const Smartphone = () => (
    <Icon>
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
      <line x1="12" y1="18" x2="12.01" y2="18"/>
    </Icon>
  );

  const Zap = () => (
    <Icon>
      <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/>
    </Icon>
  );

  const Shield = () => (
    <Icon>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </Icon>
  );

  const Arrow = () => (
    <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
  );

  // Card components matching landing page exactly
  const ServiceCard = ({ title, children, icon, className }) => (
    <div className={`group relative flex h-full flex-col rounded-xl border-2 border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] hover:border-[#262262] ${className || ''}`}>
      <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
        <div className="text-[#da1c5c]">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 leading-relaxed flex-grow">{children}</p>
      <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
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
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center group">
              <img src="/lunaratechLogo.png" alt="LunaraTech Logo" className="h-12 w-auto group-hover:scale-110 transition-transform duration-300"/>
            </Link>
            <Link
              to="/"
              className="rounded-md bg-[#FFB700] px-4 py-2 text-sm font-medium text-gray-900 hover:bg-[#e6a038] transition-all duration-300"
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
                Website Development
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                Fast, scalable, user-friendly websites using modern frameworks — crafted to meet your goals and delight users.
              </p>
            </div>
          </div>

          {/* Content Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            <AboutCard color="navy" title="Our Expertise">
              At LunaraTech, we specialize in creating custom web applications that drive business growth. Our development team combines cutting-edge technologies with proven methodologies to deliver solutions that not only meet your current needs but scale with your business.
            </AboutCard>
            <AboutCard color="gold" title="Technology Focus">
              From responsive websites to complex enterprise applications, we ensure every project is built with performance, security, and user experience as top priorities. Our expertise spans across modern JavaScript frameworks, cloud infrastructure, and mobile-first design principles.
            </AboutCard>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <ServiceCard title="Modern Frameworks" icon={<Code />}>
              React, Next.js, Vue.js, and Angular for lightning-fast, scalable applications that deliver exceptional user experiences.
            </ServiceCard>
            <ServiceCard title="E-commerce Solutions" icon={<Globe />}>
              Complete online stores with secure payment processing, inventory management, and customer analytics to drive sales growth.
            </ServiceCard>
            <ServiceCard title="Enterprise Applications" icon={<Shield />}>
              Scalable applications handling thousands of users and complex workflows with enterprise-grade security and performance.
            </ServiceCard>
            <ServiceCard title="Mobile-First Design" icon={<Smartphone />}>
              Responsive designs that work perfectly on all devices and screen sizes, ensuring optimal user experience everywhere.
            </ServiceCard>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Our Technology Stack</h2>
            <p className="text-xl text-gray-600 mb-8">Cutting-edge technologies for modern web development</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <AboutCard color="fuschia" title="Frontend Technologies">
              We stay at the forefront of web development by leveraging the latest technologies and frameworks. Our team is proficient in React, Next.js, Vue.js, and Angular for frontend development, ensuring optimal performance and user experience.
            </AboutCard>
            <AboutCard color="navy" title="Backend & Infrastructure">
              For deployment and infrastructure, we rely on AWS, Google Cloud, and Azure to ensure scalability and reliability. Our development process includes automated testing, continuous integration, and containerization with Docker for consistent deployments.
            </AboutCard>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "React", level: 95 },
              { name: "Next.js", level: 90 },
              { name: "Node.js", level: 88 },
              { name: "TypeScript", level: 85 },
              { name: "AWS", level: 92 },
              { name: "Docker", level: 80 },
              { name: "GraphQL", level: 82 },
              { name: "REST", level: 90 },
              { name: "Redis", level: 28 },
              { name: "Elasticsearch", level: 18 },
              { name: "GCP", level: 45 },
              { name: "Azure", level: 83 },
              { name: "Kotlin", level: 80 },
              { name: "Java", level: 88 },
              { name: "Vue.js", level: 83 }
            ].map((tech, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-[#262262]">{tech.name}</h3>
                  <span className="text-sm text-gray-500">{tech.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div 
                    className="h-2 rounded-full bg-gradient-to-r from-[#da1c5c] to-[#FFB700] transition-all duration-1000"
                    style={{ width: `${tech.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600 mb-8">A systematic approach to delivering exceptional web applications</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <AboutCard color="gold" title="Methodology">
              Our proven development methodology ensures every project is delivered on time, within budget, and exceeds expectations. We follow industry best practices including agile development, test-driven development, and continuous integration.
            </AboutCard>
            <AboutCard color="fuschia" title="Quality Assurance">
              From initial concept to final deployment, we maintain clear communication, regular updates, and thorough testing at every stage. Our process is designed to minimize risks while maximizing the value delivered to your business.
            </AboutCard>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProcessCard step="01" title="Discovery & Planning">
              Understanding your business goals, target audience, and technical requirements through comprehensive analysis and stakeholder interviews.
            </ProcessCard>
            <ProcessCard step="02" title="Design & Prototyping">
              Creating wireframes, mockups, and interactive prototypes to visualize the user experience and functionality before development begins.
            </ProcessCard>
            <ProcessCard step="03" title="Development & Testing">
              Building the application using modern frameworks with continuous testing, code reviews, and quality assurance throughout the process.
            </ProcessCard>
            <ProcessCard step="04" title="Launch & Optimization">
              Deploying to production with comprehensive monitoring, performance optimization, and ongoing maintenance support for long-term success.
            </ProcessCard>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#262262]/5 to-[#da1c5c]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Recent Projects</h2>
            <p className="text-xl text-gray-600 mb-8">See what we've built for our clients</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <AboutCard color="navy" title="Portfolio Diversity">
              Our portfolio showcases a diverse range of successful web development projects across various industries. From e-commerce platforms to enterprise applications, each project demonstrates our commitment to quality, innovation, and client satisfaction.
            </AboutCard>
            <AboutCard color="gold" title="Business Results">
              We take pride in delivering solutions that not only meet technical requirements but also drive real business results. Our clients consistently report improved user engagement, increased conversions, and enhanced operational efficiency.
            </AboutCard>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mortgage Calculator Project */}
            <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] flex flex-col">
              <div className="aspect-video overflow-hidden">
                <div className="h-full w-full bg-gradient-to-br from-[#FFB700]/20 to-[#FFB700]/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 mx-auto mb-4 bg-[#FFB700]/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-[#FFB700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Mortgage Estimator</h4>
                    <p className="text-sm text-gray-600">Free & Easy to Use</p>
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xl font-semibold text-gray-900 group-hover:text-[#da1c5c] transition-colors">Home Mortgage Estimator</h4>
                  <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Live</span>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed flex-grow">
                  A comprehensive mortgage calculator that helps users estimate monthly payments, view detailed amortization schedules, 
                  and analyze home loans including PMI, property tax, and insurance costs.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">React</span>
                  <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">JavaScript</span>
                  <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">Financial Tools</span>
                  <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">Note JS</span>
                  <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">Responsive Design</span>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <a 
                    href="https://www.homemortgagecalculator.net/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#da1c5c] hover:text-[#c01a52] font-medium text-sm transition-colors"
                  >
                    View Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <div className="text-xs text-gray-500">2025</div>
                </div>
              </div>
            </div>

            {/* Macroaxis Project */}
            <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] flex flex-col">
              <div className="aspect-video overflow-hidden">
                <div className="h-full w-full bg-gradient-to-br from-[#262262]/20 to-[#262262]/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 mx-auto mb-4 bg-[#262262]/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-[#262262]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Macroaxis</h4>
                    <p className="text-sm text-gray-600">Financial Analytics Platform</p>
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xl font-semibold text-gray-900 group-hover:text-[#262262] transition-colors">Fintech Platform</h4>
                  <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Live</span>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed flex-grow">
                  A comprehensive AI-powered financial analytics platform providing investment research, portfolio analysis, 
                  and market data tools for investors and financial professionals across hundreds of exchanges from over 60 countries.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">Java</span>
                  <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">Spring</span>
                  <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">JavaScript</span>
                  <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">Optimization</span>
                  <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">Financial API</span>
                  <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">Analytics</span>
                  <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">AWS</span>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <a 
                    href="https://www.macroaxis.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#262262] hover:text-[#1a1a4a] font-medium text-sm transition-colors"
                  >
                    View Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <div className="text-xs text-gray-500">2025</div>
                </div>
              </div>
            </div>

            {/* Chosen Rooter Project */}
            <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] flex flex-col">
              <div className="aspect-video overflow-hidden">
                <div className="h-full w-full bg-gradient-to-br from-[#da1c5c]/20 to-[#da1c5c]/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 mx-auto mb-4 bg-[#da1c5c]/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-[#da1c5c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Chosen Rooter</h4>
                    <p className="text-sm text-gray-600">Plumbing Services</p>
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xl font-semibold text-gray-900 group-hover:text-[#da1c5c] transition-colors">Chosen Rooter & Plumbing</h4>
                  <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Live</span>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed flex-grow">
                  San Francisco's top plumbing company providing emergency plumbing services, drain cleaning, 
                  water heater repairs, and comprehensive plumbing solutions throughout the Bay Area.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">WordPress</span>
                  <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">PHP</span>
                  <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">HTML</span>
                  <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">CSS</span>
                  <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">Local Business</span>
                  <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">SEO</span>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <a 
                    href="https://chosenrooter.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#da1c5c] hover:text-[#c01a52] font-medium text-sm transition-colors"
                  >
                    View Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <div className="text-xs text-gray-500">2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Why Choose LunaraTech</h2>
            <p className="text-xl text-gray-600 mb-8">Proven results and expertise in web development</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Stat value="50+" label="Projects Delivered" />
            <Stat value="99.9%" label="Uptime Guarantee" />
            <Stat value="< 2s" label="Average Load Time" />
            <Stat value="100%" label="Client Satisfaction" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-2xl p-12 text-white overflow-hidden">
            <div className="relative text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Build Your Website?</h2>
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