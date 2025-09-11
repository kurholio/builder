import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const WebsiteDevelopment = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Icon components matching landing page style
  const Check = () => (
    <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
  );
  const Code = () => (
    <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16,18 22,12 16,6"/>
      <polyline points="8,6 2,12 8,18"/>
    </svg>
  );
  const Globe = () => (
    <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  );
  const Smartphone = () => (
    <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
      <line x1="12" y1="18" x2="12.01" y2="18"/>
    </svg>
  );

  const features = [
    {
      title: "Modern Frameworks",
      description: "React, Next.js, Vue.js, and Angular for lightning-fast, scalable applications that deliver exceptional user experiences.",
      icon: <Code />
    },
    {
      title: "E-commerce Solutions",
      description: "Complete online stores with secure payment processing, inventory management, and customer analytics to drive sales growth.",
      icon: <Globe />
    },
    {
      title: "Enterprise Applications",
      description: "Scalable applications handling thousands of users and complex workflows with enterprise-grade security and performance.",
      icon: <Check />
    },
    {
      title: "Mobile-First Design",
      description: "Responsive designs that work perfectly on all devices and screen sizes, ensuring optimal user experience everywhere.",
      icon: <Smartphone />
    }
  ];

  const technologies = [
    { name: "React", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "Node.js", level: 88 },
    { name: "TypeScript", level: 85 },
    { name: "AWS", level: 92 },
    { name: "Docker", level: 80 }
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
                Website Development
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                Fast, scalable, user-friendly websites using modern frameworks — crafted to meet your goals and delight users.
              </p>
              <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
                <p className="mb-4">
                  At LunaraTech, we specialize in creating custom web applications that drive business growth. Our development team combines cutting-edge technologies with proven methodologies to deliver solutions that not only meet your current needs but scale with your business.
                </p>
                <p>
                  From responsive websites to complex enterprise applications, we ensure every project is built with performance, security, and user experience as top priorities. Our expertise spans across modern JavaScript frameworks, cloud infrastructure, and mobile-first design principles.
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`group relative flex h-full flex-col rounded-xl border-2 border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] hover:border-[#262262] ${
                  activeFeature === index ? 'border-[#da1c5c]' : ''
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <div className="text-[#da1c5c]">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-grow">{feature.description}</p>
                <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Our Technology Stack</h2>
            <p className="text-xl text-gray-600 mb-8">Cutting-edge technologies for modern web development</p>
            <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
              <p className="mb-4">
                We stay at the forefront of web development by leveraging the latest technologies and frameworks. Our team is proficient in React, Next.js, Vue.js, and Angular for frontend development, while Node.js, Python, and Go power our backend solutions.
              </p>
              <p>
                For deployment and infrastructure, we rely on AWS, Google Cloud, and Azure to ensure scalability and reliability. Our development process includes automated testing, continuous integration, and containerization with Docker for consistent deployments.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
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
            <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
              <p className="mb-4">
                Our proven development methodology ensures every project is delivered on time, within budget, and exceeds expectations. We follow industry best practices including agile development, test-driven development, and continuous integration.
              </p>
              <p>
                From initial concept to final deployment, we maintain clear communication, regular updates, and thorough testing at every stage. Our process is designed to minimize risks while maximizing the value delivered to your business.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery & Planning", description: "Understanding your business goals, target audience, and technical requirements through comprehensive analysis." },
              { step: "02", title: "Design & Prototyping", description: "Creating wireframes, mockups, and interactive prototypes to visualize the user experience and functionality." },
              { step: "03", title: "Development & Testing", description: "Building the application using modern frameworks with continuous testing and quality assurance." },
              { step: "04", title: "Launch & Optimization", description: "Deploying to production with monitoring, performance optimization, and ongoing maintenance support." }
            ].map((step, index) => (
              <div key={index} className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-[#262262] mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#262262]/5 to-[#da1c5c]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Recent Projects</h2>
            <p className="text-xl text-gray-600 mb-8">See what we've built for our clients</p>
            <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
              <p className="mb-4">
                Our portfolio showcases a diverse range of successful web development projects across various industries. From e-commerce platforms to enterprise applications, each project demonstrates our commitment to quality, innovation, and client satisfaction.
              </p>
              <p>
                We take pride in delivering solutions that not only meet technical requirements but also drive real business results. Our clients consistently report improved user engagement, increased conversions, and enhanced operational efficiency.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-[#da1c5c] to-[#FFB700] flex items-center justify-center">
                <Globe className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#262262] mb-2">Fintech Platform</h3>
                <p className="text-gray-600 mb-4">Modern banking application with real-time transactions and advanced security features.</p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'PostgreSQL', 'AWS'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-[#70CBD0]/20 text-[#262262] rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-[#70CBD0] to-[#262262] flex items-center justify-center">
                <Smartphone className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#262262] mb-2">Real Estate Portal</h3>
                <p className="text-gray-600 mb-4">Property listing platform with advanced search functionality and virtual tour integration.</p>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'TypeScript', 'MongoDB', 'Vercel'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-[#FFB700]/20 text-[#262262] rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-[#FFB700] to-[#da1c5c] flex items-center justify-center">
                <Code className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#262262] mb-2">E-commerce Store</h3>
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