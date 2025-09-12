import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GraphicDesign = () => {
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

  const Monitor = () => (
    <Icon>
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </Icon>
  );

  const FileText = () => (
    <Icon>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14,2 14,8 20,8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <polyline points="10,9 9,9 8,9"/>
    </Icon>
  );

  const Globe = () => (
    <Icon>
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </Icon>
  );

  const Arrow = () => (
    <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
  );

  const RefreshCw = () => (
    <Icon>
      <polyline points="23,4 23,10 17,10"/>
      <polyline points="1,20 1,14 7,14"/>
      <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/>
    </Icon>
  );

  const Target = () => (
    <Icon>
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2"/>
    </Icon>
  );

  const Sparkles = () => (
    <Icon>
      <path d="M12 3l1.5 3 3 1.5-3 1.5-1.5 3-1.5-3L7 7.5 10 6z"/>
      <path d="M18 13l.8 1.6L20 15l-1.2.4L18 17l-.8-1.6L16 15l1.2-.4z"/>
    </Icon>
  );

  const Heart = () => (
    <Icon>
      <path d="M20.8 8.6a5.5 5.5 0 0 0-9.8-3.6 5.5 5.5 0 1 0-7.8 7.8L11 20l7.8-7.8a5.5 5.5 0 0 0 2-3.6Z"/>
    </Icon>
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
            <Link to="/" className="hover:text-gray-900">Home</Link>
            <Link to="/" className="hover:text-gray-900">Niches</Link>
            <Link to="/" className="hover:text-gray-900">Services</Link>
            <Link to="/" className="hover:text-gray-900">About</Link>
            <Link to="/" className="hover:text-gray-900">Process</Link>
            <Link to="/" className="hover:text-gray-900">Contact</Link>
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
                Graphic Design
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                Pixel-perfect UI aligned to your brand for a consistent, engaging experience.
              </p>
            </div>
          </div>

          {/* Content Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            <AboutCard color="navy" title="Our Philosophy">
              Our graphic design services combine creativity with strategic thinking to create visual solutions that communicate your brand's message effectively. We understand that great design is not just about aesthetics—it's about creating meaningful connections with your audience.
            </AboutCard>
            <AboutCard color="gold" title="Brand Focus">
              From brand identity development to marketing materials and web graphics, we ensure every design element aligns with your business goals and resonates with your target audience. Our team stays current with design trends while maintaining timeless appeal.
            </AboutCard>
          </div>

          {/* Design Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <ServiceCard title="Brand Identity" icon={<Palette />}>
              Complete visual identity including logos, color palettes, typography, and brand guidelines that represent your company's values and personality.
            </ServiceCard>
            <ServiceCard title="UI/UX Design" icon={<Monitor />}>
              User interface designs that are both beautiful and functional, optimized for user experience and conversion across all devices.
            </ServiceCard>
            <ServiceCard title="Marketing Materials" icon={<FileText />}>
              Brochures, flyers, social media graphics, and promotional materials that convert and engage your target audience effectively.
            </ServiceCard>
            <ServiceCard title="Web Graphics" icon={<Globe />}>
              Custom graphics, icons, and illustrations for websites and applications that enhance user experience and brand recognition.
            </ServiceCard>
          </div>
        </div>
      </section>

      {/* Design Principles Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Our Design Principles</h2>
            <p className="text-xl text-gray-600 mb-8">The core values that guide our design process</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <AboutCard color="fuschia" title="Consistency & Quality">
              Every design we create is guided by fundamental principles that ensure consistency, usability, and impact. These principles help us maintain high standards while adapting to different project requirements and client needs.
            </AboutCard>
            <AboutCard color="navy" title="Timeless Design">
              By adhering to these principles, we create designs that not only look great but also function effectively and communicate your message clearly. This approach results in designs that stand the test of time and deliver measurable results for your business.
            </AboutCard>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <RefreshCw className="h-8 w-8 text-[#da1c5c]" />
              </div>
              <h3 className="text-xl font-semibold text-[#262262] mb-3">Consistency</h3>
              <p className="text-gray-600">Every element follows your brand guidelines for a cohesive visual identity across all touchpoints.</p>
            </div>
            
            <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <Target className="h-8 w-8 text-[#70CBD0]" />
              </div>
              <h3 className="text-xl font-semibold text-[#262262] mb-3">Usability</h3>
              <p className="text-gray-600">Designs that are intuitive and user-friendly, ensuring optimal user experience and engagement.</p>
            </div>
            
            <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <Sparkles className="h-8 w-8 text-[#FFB700]" />
              </div>
              <h3 className="text-xl font-semibold text-[#262262] mb-3">Innovation</h3>
              <p className="text-gray-600">Cutting-edge design trends with timeless appeal, creating memorable and impactful visual experiences.</p>
            </div>
            
            <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <Heart className="h-8 w-8 text-[#262262]" />
              </div>
              <h3 className="text-xl font-semibold text-[#262262] mb-3">Accessibility</h3>
              <p className="text-gray-600">Inclusive design that works for everyone, ensuring your brand reaches the widest possible audience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Our Creative Process</h2>
            <p className="text-xl text-gray-600 mb-8">How we bring your vision to life</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <AboutCard color="gold" title="Structured Approach">
              Our creative process is designed to ensure every project meets your expectations while staying within budget and timeline. We follow a structured approach that allows for collaboration and feedback at every stage.
            </AboutCard>
            <AboutCard color="fuschia" title="Transparent Communication">
              From initial concept development to final delivery, we maintain clear communication and provide regular updates. This transparent process ensures you're always informed about progress and can provide input when needed.
            </AboutCard>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProcessCard step="01" title="Discovery">
              Understanding your brand and goals through research and stakeholder interviews to inform design decisions and creative direction.
            </ProcessCard>
            <ProcessCard step="02" title="Research">
              Analyzing market trends and competitors to inform design decisions and ensure your brand stands out in the marketplace.
            </ProcessCard>
            <ProcessCard step="03" title="Concept">
              Creating initial design concepts and exploring different creative directions to find the perfect solution for your brand.
            </ProcessCard>
            <ProcessCard step="04" title="Refine">
              Iterating and perfecting the design based on feedback and testing to ensure the final result exceeds your expectations.
            </ProcessCard>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#262262]/5 to-[#da1c5c]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Our Design Portfolio</h2>
            <p className="text-xl text-gray-600 mb-8">Recent projects that showcase our design expertise</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <AboutCard color="navy" title="Diverse Portfolio">
              Our portfolio represents the diversity and quality of our design work across various industries and project types. Each project demonstrates our ability to adapt to different brand personalities and design requirements.
            </AboutCard>
            <AboutCard color="gold" title="Proven Results">
              From startup branding to enterprise marketing materials, we've helped businesses of all sizes establish strong visual identities and create compelling marketing assets that drive results and brand recognition.
            </AboutCard>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/graphic-design" className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-[#da1c5c] to-[#FFB700] flex items-center justify-center">
                <img src="/lunaratechIcon.png" alt="LunaraTech Icon" className="h-20 w-20" />
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
            </Link>
            
            <Link to="/ui-prototyping" className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-[#70CBD0] to-[#262262] flex items-center justify-center">
                <img src="/lunaratechIcon.png" alt="LunaraTech Icon" className="h-20 w-20" />
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
            </Link>
            
            <Link to="/graphic-design" className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-[#FFB700] to-[#da1c5c] flex items-center justify-center">
                <img src="/lunaratechIcon.png" alt="LunaraTech Icon" className="h-20 w-20" />
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
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Our Design Impact</h2>
            <p className="text-xl text-gray-600 mb-8">Measurable results from our design work</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Stat value="200+" label="Designs Created" />
            <Stat value="98%" label="Client Satisfaction" />
            <Stat value="< 1 week" label="Average Turnaround" />
            <Stat value="50+" label="Brands Transformed" />
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