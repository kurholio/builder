import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GraphicDesign = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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
  const Monitor = () => (
    <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  );
  const FileText = () => (
    <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14,2 14,8 20,8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <polyline points="10,9 9,9 8,9"/>
    </svg>
  );
  const Globe = () => (
    <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  );

  const designServices = [
    {
      title: "Brand Identity",
      description: "Complete visual identity including logos, color palettes, and brand guidelines",
      icon: <Palette />
    },
    {
      title: "UI/UX Design",
      description: "User interface designs that are both beautiful and functional",
      icon: <Monitor />
    },
    {
      title: "Marketing Materials",
      description: "Brochures, flyers, and promotional materials that convert",
      icon: <FileText />
    },
    {
      title: "Web Graphics",
      description: "Custom graphics and illustrations for websites and applications",
      icon: <Globe />
    }
  ];

  const designPrinciples = [
    { title: "Consistency", description: "Every element follows your brand guidelines", icon: "🔄" },
    { title: "Usability", description: "Designs that are intuitive and user-friendly", icon: "👆" },
    { title: "Innovation", description: "Cutting-edge design trends with timeless appeal", icon: "✨" },
    { title: "Accessibility", description: "Inclusive design that works for everyone", icon: "♿" }
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <h1 className="text-5xl md:text-6xl font-bold text-[#262262] mb-6 leading-tight">
                Graphic Design
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Pixel-perfect UI aligned to your brand for a consistent, engaging experience.
              </p>
              <div className="max-w-2xl text-gray-600 leading-relaxed">
                <p className="mb-4">
                  Our graphic design services combine creativity with strategic thinking to create visual solutions that communicate your brand's message effectively. We understand that great design is not just about aesthetics—it's about creating meaningful connections with your audience.
                </p>
                <p className="mb-6">
                  From brand identity development to marketing materials and web graphics, we ensure every design element aligns with your business goals and resonates with your target audience. Our team stays current with design trends while maintaining timeless appeal.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="px-4 py-2 bg-[#da1c5c] text-white rounded-full text-sm font-semibold">Brand Identity</div>
                  <div className="px-4 py-2 bg-[#70CBD0] text-white rounded-full text-sm font-semibold">UI/UX Design</div>
                  <div className="px-4 py-2 bg-[#FFB700] text-white rounded-full text-sm font-semibold">Marketing</div>
                </div>
              </div>
            </div>
            
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <img src="/services/digital-art-creation-tablet-with-stylus.jpg" alt="Graphic Design" className="w-full h-80 object-cover rounded-xl mb-6"/>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-[#262262] mb-2">Creative Process</h3>
                  <p className="text-gray-600">From concept to final design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Design Services</h2>
            <p className="text-xl text-gray-600 mb-8">Comprehensive design solutions for your business</p>
            <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
              <p className="mb-4">
                Our design services cover every aspect of your visual identity, from initial concept development to final implementation. We work closely with you to understand your brand values, target audience, and business objectives to create designs that truly represent your company.
              </p>
              <p>
                Whether you need a complete brand overhaul or specific marketing materials, our team has the expertise and creativity to deliver exceptional results. We combine traditional design principles with modern techniques to create visually stunning and highly effective designs.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designServices.map((service, index) => (
              <div
                key={index}
                className={`group relative flex h-full flex-col rounded-xl border-2 border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] hover:border-[#262262] ${
                  hoveredCard === index ? 'border-[#da1c5c]' : ''
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <div className="text-[#da1c5c]">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-grow">{service.description}</p>
                <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Principles Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Our Design Principles</h2>
            <p className="text-xl text-gray-600 mb-8">The core values that guide our design process</p>
            <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
              <p className="mb-4">
                Every design we create is guided by fundamental principles that ensure consistency, usability, and impact. These principles help us maintain high standards while adapting to different project requirements and client needs.
              </p>
              <p>
                By adhering to these principles, we create designs that not only look great but also function effectively and communicate your message clearly. This approach results in designs that stand the test of time and deliver measurable results for your business.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designPrinciples.map((principle, index) => (
              <div key={index} className="group text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#da1c5c] to-[#FFB700] rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#262262] mb-3">{principle.title}</h3>
                <p className="text-gray-600">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Our Creative Process</h2>
            <p className="text-xl text-gray-600 mb-8">How we bring your vision to life</p>
            <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
              <p className="mb-4">
                Our creative process is designed to ensure every project meets your expectations while staying within budget and timeline. We follow a structured approach that allows for collaboration and feedback at every stage.
              </p>
              <p>
                From initial concept development to final delivery, we maintain clear communication and provide regular updates. This transparent process ensures you're always informed about progress and can provide input when needed.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", description: "Understanding your brand and goals through research and stakeholder interviews." },
              { step: "02", title: "Research", description: "Analyzing market trends and competitors to inform design decisions." },
              { step: "03", title: "Concept", description: "Creating initial design concepts and exploring different creative directions." },
              { step: "04", title: "Refine", description: "Iterating and perfecting the design based on feedback and testing." }
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

      {/* Portfolio Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#262262]/5 to-[#da1c5c]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Our Design Portfolio</h2>
            <p className="text-xl text-gray-600 mb-8">Recent projects that showcase our design expertise</p>
            <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
              <p className="mb-4">
                Our portfolio represents the diversity and quality of our design work across various industries and project types. Each project demonstrates our ability to adapt to different brand personalities and design requirements.
              </p>
              <p>
                From startup branding to enterprise marketing materials, we've helped businesses of all sizes establish strong visual identities and create compelling marketing assets that drive results.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-[#da1c5c] to-[#FFB700] flex items-center justify-center">
                <Palette className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#262262] mb-2">E-commerce Brand</h3>
                <p className="text-gray-600 mb-4">Complete brand identity for online fashion store including logo, color palette, and marketing materials.</p>
                <div className="flex flex-wrap gap-2">
                  {['Logo Design', 'Brand Guidelines', 'Marketing Materials'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-[#da1c5c]/20 text-[#262262] rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-[#70CBD0] to-[#262262] flex items-center justify-center">
                <Monitor className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#262262] mb-2">Mobile App UI</h3>
                <p className="text-gray-600 mb-4">User interface design for fitness tracking app with focus on usability and engagement.</p>
                <div className="flex flex-wrap gap-2">
                  {['UI Design', 'User Experience', 'Mobile App'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-[#70CBD0]/20 text-[#262262] rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-[#FFB700] to-[#da1c5c] flex items-center justify-center">
                <FileText className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#262262] mb-2">Marketing Campaign</h3>
                <p className="text-gray-600 mb-4">Print and digital materials for product launch including brochures, flyers, and social media graphics.</p>
                <div className="flex flex-wrap gap-2">
                  {['Print Design', 'Digital Marketing', 'Campaign Materials'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-[#FFB700]/20 text-[#262262] rounded-full text-sm">
                      {tag}
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
          <div className="relative bg-gradient-to-r from-[#da1c5c] to-[#70CBD0] rounded-2xl p-12 text-white overflow-hidden">
            <div className="relative text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Brand?</h2>
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