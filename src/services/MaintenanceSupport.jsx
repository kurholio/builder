import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MaintenanceSupport = () => {
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

  const Eye = () => (
    <Icon>
      <path d="M1 12s4-8 7-8 7 8 7 8-4 8-7 8-7-8-7-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </Icon>
  );

  const RefreshCw = () => (
    <Icon>
      <polyline points="23,4 23,10 17,10"/>
      <polyline points="1,20 1,14 7,14"/>
      <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/>
    </Icon>
  );

  const Rocket = () => (
    <Icon>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
    </Icon>
  );

  const Wrench = () => (
    <Icon>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </Icon>
  );

  const Arrow = () => (
    <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
  );

  // Card components matching landing page exactly
  const ServiceCard = ({ title, children, icon, className }) => (
    <div className={`group relative flex h-full flex-col rounded-xl border-2 border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] hover:border-[#262262] ${className || ''}`}>
      <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
        <div className="text-[#FFB700]">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 leading-relaxed flex-grow">{children}</p>
      <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#FFB700] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-20" />
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
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center group">
              <img src="/lunaratechLogo.png" alt="LunaraTech Logo" className="h-10 w-auto group-hover:scale-110 transition-transform duration-300"/>
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
                Maintenance & Support
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                Reliable updates, monitoring, and feature rollouts to keep you growing.
              </p>
            </div>
          </div>

          {/* Content Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            <AboutCard color="navy" title="Comprehensive Support">
              Our maintenance and support services ensure your applications remain secure, performant, and up-to-date. We provide comprehensive support that covers everything from routine maintenance to emergency response and feature development.
            </AboutCard>
            <AboutCard color="gold" title="Proactive Monitoring">
              With 24/7 monitoring and proactive maintenance, we help prevent issues before they impact your users. Our support team is always available to address any concerns and keep your applications running smoothly.
            </AboutCard>
          </div>

          {/* Support Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            <Stat value="< 2 hours" label="Response Time" />
            <Stat value="99.9%" label="Uptime Guarantee" />
            <Stat value="500+" label="Tickets Resolved" />
            <Stat value="98%" label="Client Satisfaction" />
          </div>
        </div>
      </section>

      {/* Support Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Support Services</h2>
            <p className="text-xl text-gray-600 mb-8">Comprehensive support to keep your application running smoothly</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <AboutCard color="fuschia" title="Multi-Level Support">
              Our support services are designed to provide peace of mind and ensure your applications continue to deliver value to your business. We offer multiple levels of support to match your specific needs and budget.
            </AboutCard>
            <AboutCard color="navy" title="Expert Team">
              From basic monitoring to dedicated support teams, we have solutions that scale with your business. Our experienced support professionals are available around the clock to address any issues and keep your systems running optimally.
            </AboutCard>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard title="24/7 Monitoring" icon={<Eye />}>
              Continuous monitoring of your application performance and uptime with real-time alerts and proactive issue detection.
            </ServiceCard>
            <ServiceCard title="Regular Updates" icon={<RefreshCw />}>
              Scheduled updates for security patches and feature enhancements to keep your application current and secure.
            </ServiceCard>
            <ServiceCard title="Feature Development" icon={<Rocket />}>
              Ongoing development of new features based on user feedback and business requirements for continuous improvement.
            </ServiceCard>
            <ServiceCard title="Technical Support" icon={<Wrench />}>
              Expert technical support for any issues or questions with rapid response times and comprehensive solutions.
            </ServiceCard>
          </div>
        </div>
      </section>

      {/* Support Tiers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Support Tiers</h2>
            <p className="text-xl text-gray-600 mb-8">Choose the support level that fits your needs</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <AboutCard color="gold" title="Flexible Options">
              We offer flexible support tiers to accommodate different business needs and budgets. Each tier includes specific features and response times designed to provide the right level of support for your application.
            </AboutCard>
            <AboutCard color="fuschia" title="Scalable Solutions">
              Our support tiers are designed to scale with your business, allowing you to upgrade or downgrade as your needs change. All tiers include our core monitoring and maintenance services with varying levels of support and response times.
            </AboutCard>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Basic", price: "$299", period: "/month", features: ["Email Support", "Basic Monitoring", "Monthly Updates", "Documentation"], popular: false },
              { name: "Premium", price: "$599", period: "/month", features: ["Phone + Email Support", "24/7 Monitoring", "Weekly Updates", "Priority Response"], popular: true },
              { name: "Enterprise", price: "$999", period: "/month", features: ["Dedicated Support", "Real-time Monitoring", "Daily Updates", "On-site Support"], popular: false }
            ].map((tier, index) => (
              <div key={index} className={`relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
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
                  <h3 className="text-2xl font-semibold text-[#262262] mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-[#262262] mb-1">
                    {tier.price}
                    <span className="text-lg text-gray-500">{tier.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <Check className="w-5 h-5 text-[#FFB700] mr-3" />
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
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">How We Support You</h2>
            <p className="text-xl text-gray-600 mb-8">Our systematic approach to providing exceptional support</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <AboutCard color="navy" title="Structured Process">
              Our support process is designed to ensure quick resolution of issues while maintaining high service quality. We follow a structured approach that prioritizes critical issues and provides clear communication throughout the resolution process.
            </AboutCard>
            <AboutCard color="gold" title="Transparent Communication">
              From initial issue detection to final resolution, our support team works efficiently to minimize downtime and ensure your applications continue to serve your users effectively. We provide regular updates and detailed reports on all support activities.
            </AboutCard>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                { step: "1", title: "Issue Detection", description: "Proactive monitoring identifies issues before they impact users", icon: <Eye /> },
                { step: "2", title: "Rapid Response", description: "Quick response and initial assessment of the issue", icon: <RefreshCw /> },
                { step: "3", title: "Resolution", description: "Expert team works to resolve the issue efficiently", icon: <Wrench /> },
                { step: "4", title: "Prevention", description: "Implement measures to prevent similar issues in the future", icon: <Rocket /> }
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold bg-gradient-to-r from-[#FFB700] to-[#da1c5c] group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#262262] mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <img src="/services/man-working-desk-medium-shot.jpg" alt="Support Team" className="w-full h-64 object-cover rounded-xl mb-6"/>
              <h3 className="text-2xl font-semibold text-[#262262] mb-4">Our Support Team</h3>
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
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Why Choose Our Support?</h2>
            <p className="text-xl text-gray-600 mb-8">The benefits of having reliable technical support</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <AboutCard color="fuschia" title="Peace of Mind">
              Our support services provide more than just issue resolution—they offer peace of mind and ensure your applications continue to deliver value to your business. With our comprehensive support, you can focus on growing your business while we handle the technical details.
            </AboutCard>
            <AboutCard color="navy" title="Proven Results">
              Our support team's expertise and dedication result in faster issue resolution, improved system reliability, and better overall performance. This translates to better user experiences and increased business success.
            </AboutCard>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <img src="/lunaratechIcon.png" alt="LunaraTech Icon" className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#262262] mb-4">Fast Response</h3>
              <p className="text-gray-600 mb-4">Average response time under 2 hours for critical issues</p>
              <div className="text-3xl font-bold text-[#da1c5c]">2 hours</div>
              <p className="text-sm text-gray-500">Response time</p>
            </div>
            
            <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <img src="/lunaratechIcon.png" alt="LunaraTech Icon" className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#262262] mb-4">Proactive Monitoring</h3>
              <p className="text-gray-600 mb-4">We catch issues before they impact your users</p>
              <div className="text-3xl font-bold text-[#70CBD0]">99.9%</div>
              <p className="text-sm text-gray-500">Uptime guarantee</p>
            </div>
            
            <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <img src="/lunaratechIcon.png" alt="LunaraTech Icon" className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#262262] mb-4">Growth Focused</h3>
              <p className="text-gray-600 mb-4">Support that scales with your business needs</p>
              <div className="text-3xl font-bold text-[#FFB700]">100%</div>
              <p className="text-sm text-gray-500">Scalable</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Our Support Performance</h2>
            <p className="text-xl text-gray-600 mb-8">Proven results in maintenance and support services</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Stat value="< 2 hours" label="Average Response" />
            <Stat value="99.9%" label="Uptime SLA" />
            <Stat value="500+" label="Issues Resolved" />
            <Stat value="98%" label="Client Satisfaction" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-gradient-to-r from-[#FFB700] to-[#da1c5c] rounded-2xl p-12 text-white overflow-hidden">
            <div className="relative text-center">
              <h2 className="text-3xl font-bold mb-4">Need Reliable Support?</h2>
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