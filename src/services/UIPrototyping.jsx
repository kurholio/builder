import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UIPrototyping = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Icon components matching landing page style
  const Check = () => (
    <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
  );
  const Palette = () => (
    <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r=".5"/>
      <circle cx="17.5" cy="10.5" r=".5"/>
      <circle cx="8.5" cy="7.5" r=".5"/>
      <circle cx="6.5" cy="12.5" r=".5"/>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
    </svg>
  );
  const MousePointer = () => (
    <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
      <path d="M13 13l6 6"/>
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

  const prototypingSteps = [
    {
      title: "Wireframing",
      description: "Low-fidelity sketches to map out user flows and information architecture",
      icon: <Palette />
    },
    {
      title: "Interactive Prototyping",
      description: "High-fidelity prototypes with clickable elements and realistic interactions",
      icon: <MousePointer />
    },
    {
      title: "User Testing",
      description: "Validate designs with real users and gather feedback for improvements",
      icon: <Users />
    }
  ];

  const tools = [
    { name: "Figma", description: "Collaborative design tool", features: ["Real-time collaboration", "Component libraries", "Auto-layout"] },
    { name: "Adobe XD", description: "Professional prototyping", features: ["Voice prototyping", "Responsive design", "Developer handoff"] },
    { name: "Principle", description: "Animation and interaction", features: ["Micro-interactions", "Timeline editing", "Export options"] },
    { name: "InVision", description: "Design workflow platform", features: ["Design systems", "User testing", "Feedback collection"] }
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
                UI Prototyping
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                Interactive wireframes and prototypes to validate flows and align stakeholders before build.
              </p>
              <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
                <p className="mb-4">
                  Our UI prototyping services help you visualize and test your digital product before development begins. We create interactive prototypes that allow stakeholders to experience the user journey, identify potential issues, and make informed decisions about design and functionality.
                </p>
                <p>
                  By investing in prototyping, you can save significant time and resources while ensuring your final product meets user expectations. Our team uses industry-leading tools and follows best practices to create prototypes that accurately represent your vision and provide valuable insights for development.
                </p>
              </div>
            </div>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {prototypingSteps.map((step, index) => (
              <div 
                key={index}
                className={`group relative flex h-full flex-col rounded-xl border-2 border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] hover:border-[#262262] ${
                  currentSlide === index ? 'border-[#70CBD0]' : ''
                }`}
              >
                <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <div className="text-[#70CBD0]">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-grow">{step.description}</p>
                <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Prototyping Tools We Use</h2>
            <p className="text-xl text-gray-600 mb-8">Professional tools for creating stunning prototypes</p>
            <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
              <p className="mb-4">
                We leverage industry-standard prototyping tools to create high-fidelity, interactive prototypes that accurately represent your final product. Our team is proficient in Figma, Adobe XD, Principle, and InVision, allowing us to choose the best tool for each project's specific requirements.
              </p>
              <p>
                Each tool offers unique advantages, from real-time collaboration features to advanced animation capabilities. We select the most appropriate tool based on project complexity, team collaboration needs, and client preferences to ensure optimal results.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold text-[#262262] mb-2">{tool.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                </div>
                <ul className="space-y-2">
                  {tool.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 text-[#70CBD0] mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Our Prototyping Process</h2>
            <p className="text-xl text-gray-600 mb-8">A systematic approach to creating effective prototypes</p>
            <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
              <p className="mb-4">
                Our prototyping process is designed to maximize value while minimizing time and effort. We follow a structured approach that ensures every prototype serves its intended purpose and provides actionable insights for development.
              </p>
              <p>
                From initial research and discovery to final user testing, each phase builds upon the previous one, creating a comprehensive understanding of user needs and design requirements. This iterative approach allows for continuous refinement and optimization.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Research & Discovery", description: "Understanding user needs and business requirements through stakeholder interviews and user research." },
              { step: "02", title: "Information Architecture", description: "Structuring content and defining user flows to create intuitive navigation and information hierarchy." },
              { step: "03", title: "Wireframing", description: "Creating low-fidelity layouts and basic structure to establish the foundation for the design." },
              { step: "04", title: "Visual Design", description: "Applying colors, typography, and visual elements to create a cohesive and appealing interface." },
              { step: "05", title: "Interactive Prototyping", description: "Adding interactions and micro-animations to create realistic user experiences." },
              { step: "06", title: "User Testing", description: "Validating designs with real users and gathering feedback for continuous improvement." }
            ].map((step, index) => (
              <div key={index} className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
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

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#262262]/5 to-[#da1c5c]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Why Prototyping Matters</h2>
            <p className="text-xl text-gray-600 mb-8">The benefits of investing in proper prototyping</p>
            <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
              <p className="mb-4">
                Prototyping is not just a design step—it's a strategic investment that pays dividends throughout the development process. By creating interactive prototypes, you can identify and resolve issues early, when they're least expensive to fix.
              </p>
              <p>
                Studies show that projects that invest in prototyping see 40% fewer changes during development, 60% faster time to market, and 85% higher user satisfaction rates. The upfront investment in prototyping saves significant time and money while ensuring better outcomes.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                💰
              </div>
              <h3 className="text-xl font-semibold text-[#262262] mb-4">Save Money</h3>
              <p className="text-gray-600 mb-4">Identify issues early and avoid expensive changes during development</p>
              <div className="text-3xl font-bold text-[#da1c5c]">40%</div>
              <p className="text-sm text-gray-500">Average cost reduction</p>
            </div>
            
            <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#70CBD0] to-[#262262] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                ⏱️
              </div>
              <h3 className="text-xl font-semibold text-[#262262] mb-4">Save Time</h3>
              <p className="text-gray-600 mb-4">Faster development cycles with clear direction and fewer revisions</p>
              <div className="text-3xl font-bold text-[#70CBD0]">60%</div>
              <p className="text-sm text-gray-500">Faster to market</p>
            </div>
            
            <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FFB700] to-[#da1c5c] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                🎯
              </div>
              <h3 className="text-xl font-semibold text-[#262262] mb-4">Better UX</h3>
              <p className="text-gray-600 mb-4">User-tested designs that deliver exceptional user experiences</p>
              <div className="text-3xl font-bold text-[#FFB700]">85%</div>
              <p className="text-sm text-gray-500">User satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-gradient-to-r from-[#70CBD0] to-[#262262] rounded-2xl p-12 text-white overflow-hidden">
            <div className="relative text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Prototype Your Idea?</h2>
              <p className="text-xl mb-8 opacity-90">Let's bring your vision to life with interactive prototypes that wow stakeholders.</p>
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

export default UIPrototyping;