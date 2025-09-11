import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UIPrototyping = () => {
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

  const Palette = () => (
    <Icon>
      <circle cx="13.5" cy="6.5" r=".5"/>
      <circle cx="17.5" cy="10.5" r=".5"/>
      <circle cx="8.5" cy="7.5" r=".5"/>
      <circle cx="6.5" cy="12.5" r=".5"/>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
    </Icon>
  );

  const MousePointer = () => (
    <Icon>
      <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
      <path d="M13 13l6 6"/>
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

  const Eye = () => (
    <Icon>
      <path d="M1 12s4-8 7-8 7 8 7 8-4 8-7 8-7-8-7-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </Icon>
  );

  const Arrow = () => (
    <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
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
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center group">
              <img src="/lunaratechLogo.png" alt="LunaraTech Logo" className="h-10 w-auto group-hover:scale-110 transition-transform duration-300"/>
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
                UI Prototyping
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                Interactive wireframes and prototypes to validate flows and align stakeholders before build.
              </p>
            </div>
          </div>

          {/* Content Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            <AboutCard color="navy" title="Our Approach">
              Our UI prototyping services help you visualize and test your digital product before development begins. We create interactive prototypes that allow stakeholders to experience the user journey, identify potential issues, and make informed decisions about design and functionality.
            </AboutCard>
            <AboutCard color="gold" title="Strategic Value">
              By investing in prototyping, you can save significant time and resources while ensuring your final product meets user expectations. Our team uses industry-leading tools and follows best practices to create prototypes that accurately represent your vision and provide valuable insights for development.
            </AboutCard>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            <ServiceCard title="Wireframing" icon={<Palette />}>
              Low-fidelity sketches to map out user flows and information architecture, establishing the foundation for your design.
            </ServiceCard>
            <ServiceCard title="Interactive Prototyping" icon={<MousePointer />}>
              High-fidelity prototypes with clickable elements and realistic interactions that bring your design to life.
            </ServiceCard>
            <ServiceCard title="User Testing" icon={<Users />}>
              Validate designs with real users and gather feedback for improvements, ensuring optimal user experience.
            </ServiceCard>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Prototyping Tools We Use</h2>
            <p className="text-xl text-gray-600 mb-8">Professional tools for creating stunning prototypes</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <AboutCard color="fuschia" title="Industry Standards">
              We leverage industry-standard prototyping tools to create high-fidelity, interactive prototypes that accurately represent your final product. Our team is proficient in Figma, Adobe XD, Principle, and InVision, allowing us to choose the best tool for each project's specific requirements.
            </AboutCard>
            <AboutCard color="navy" title="Tool Selection">
              Each tool offers unique advantages, from real-time collaboration features to advanced animation capabilities. We select the most appropriate tool based on project complexity, team collaboration needs, and client preferences to ensure optimal results.
            </AboutCard>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Figma", description: "Collaborative design tool", features: ["Real-time collaboration", "Component libraries", "Auto-layout"] },
              { name: "Adobe XD", description: "Professional prototyping", features: ["Voice prototyping", "Responsive design", "Developer handoff"] },
              { name: "Principle", description: "Animation and interaction", features: ["Micro-interactions", "Timeline editing", "Export options"] },
              { name: "InVision", description: "Design workflow platform", features: ["Design systems", "User testing", "Feedback collection"] }
            ].map((tool, index) => (
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
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <AboutCard color="gold" title="Structured Approach">
              Our prototyping process is designed to maximize value while minimizing time and effort. We follow a structured approach that ensures every prototype serves its intended purpose and provides actionable insights for development.
            </AboutCard>
            <AboutCard color="fuschia" title="Iterative Refinement">
              From initial research and discovery to final user testing, each phase builds upon the previous one, creating a comprehensive understanding of user needs and design requirements. This iterative approach allows for continuous refinement and optimization.
            </AboutCard>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProcessCard step="01" title="Research & Discovery">
              Understanding user needs and business requirements through stakeholder interviews and user research to inform design decisions.
            </ProcessCard>
            <ProcessCard step="02" title="Information Architecture">
              Structuring content and defining user flows to create intuitive navigation and information hierarchy for optimal user experience.
            </ProcessCard>
            <ProcessCard step="03" title="Wireframing">
              Creating low-fidelity layouts and basic structure to establish the foundation for the design and validate information architecture.
            </ProcessCard>
            <ProcessCard step="04" title="Visual Design">
              Applying colors, typography, and visual elements to create a cohesive and appealing interface that reflects your brand identity.
            </ProcessCard>
            <ProcessCard step="05" title="Interactive Prototyping">
              Adding interactions and micro-animations to create realistic user experiences that demonstrate functionality and user flows.
            </ProcessCard>
            <ProcessCard step="06" title="User Testing">
              Validating designs with real users and gathering feedback for continuous improvement and optimization of the user experience.
            </ProcessCard>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#262262]/5 to-[#da1c5c]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Why Prototyping Matters</h2>
            <p className="text-xl text-gray-600 mb-8">The benefits of investing in proper prototyping</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <AboutCard color="navy" title="Strategic Investment">
              Prototyping is not just a design step—it's a strategic investment that pays dividends throughout the development process. By creating interactive prototypes, you can identify and resolve issues early, when they're least expensive to fix.
            </AboutCard>
            <AboutCard color="gold" title="Proven Results">
              Studies show that projects that invest in prototyping see 40% fewer changes during development, 60% faster time to market, and 85% higher user satisfaction rates. The upfront investment in prototyping saves significant time and money while ensuring better outcomes.
            </AboutCard>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <img src="/lunaratechIcon.png" alt="LunaraTech Icon" className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#262262] mb-4">Save Money</h3>
              <p className="text-gray-600 mb-4">Identify issues early and avoid expensive changes during development</p>
              <div className="text-3xl font-bold text-[#da1c5c]">40%</div>
              <p className="text-sm text-gray-500">Average cost reduction</p>
            </div>
            
            <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <img src="/lunaratechIcon.png" alt="LunaraTech Icon" className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#262262] mb-4">Save Time</h3>
              <p className="text-gray-600 mb-4">Faster development cycles with clear direction and fewer revisions</p>
              <div className="text-3xl font-bold text-[#70CBD0]">60%</div>
              <p className="text-sm text-gray-500">Faster to market</p>
            </div>
            
            <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <img src="/lunaratechIcon.png" alt="LunaraTech Icon" className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#262262] mb-4">Better UX</h3>
              <p className="text-gray-600 mb-4">User-tested designs that deliver exceptional user experiences</p>
              <div className="text-3xl font-bold text-[#FFB700]">85%</div>
              <p className="text-sm text-gray-500">User satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Our Prototyping Expertise</h2>
            <p className="text-xl text-gray-600 mb-8">Proven results in prototyping and user experience design</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Stat value="100+" label="Prototypes Created" />
            <Stat value="95%" label="Client Satisfaction" />
            <Stat value="< 2 weeks" label="Average Delivery" />
            <Stat value="50+" label="User Tests Conducted" />
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