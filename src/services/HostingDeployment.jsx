import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HostingDeployment = () => {
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

  const Cloud = () => (
    <Icon>
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
    </Icon>
  );

  const Shield = () => (
    <Icon>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </Icon>
  );

  const Zap = () => (
    <Icon>
      <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/>
    </Icon>
  );

  const BarChart = () => (
    <Icon>
      <line x1="12" y1="20" x2="12" y2="10"/>
      <line x1="18" y1="20" x2="18" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="16"/>
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
                Hosting & Deployment
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                Secure, scalable hosting and smooth deployments — your site stays fast and reliable.
              </p>
            </div>
          </div>

          {/* Content Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            <AboutCard color="navy" title="Enterprise Infrastructure">
              Our hosting and deployment services ensure your applications are always available, performant, and secure. We leverage enterprise-grade cloud infrastructure to provide reliable hosting solutions that scale with your business needs.
            </AboutCard>
            <AboutCard color="gold" title="Comprehensive Support">
              From initial setup to ongoing maintenance, we handle all aspects of your hosting infrastructure. Our team monitors your applications 24/7, performs regular updates, and ensures optimal performance through continuous optimization.
            </AboutCard>
          </div>

          {/* Infrastructure Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            <Stat value="99.9%" label="Uptime Guarantee" />
            <Stat value="< 100ms" label="Response Time" />
            <Stat value="200+" label="Global CDN Locations" />
            <Stat value="24/7" label="Support Available" />
          </div>
        </div>
      </section>

      {/* Hosting Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Hosting Solutions</h2>
            <p className="text-xl text-gray-600 mb-8">Enterprise-grade infrastructure for your applications</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <AboutCard color="fuschia" title="Cloud Infrastructure">
              We provide comprehensive hosting solutions that combine reliability, performance, and security. Our infrastructure is built on industry-leading cloud platforms and includes advanced features like auto-scaling, load balancing, and global CDN distribution.
            </AboutCard>
            <AboutCard color="navy" title="Performance Focus">
              Our hosting services are designed to handle everything from small websites to large-scale enterprise applications. We ensure 99.9% uptime, fast response times, and robust security measures to keep your applications running smoothly.
            </AboutCard>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard title="Cloud Infrastructure" icon={<Cloud />}>
              AWS, Google Cloud, and Azure hosting with auto-scaling and global CDN distribution for optimal performance worldwide.
            </ServiceCard>
            <ServiceCard title="Security & SSL" icon={<Shield />}>
              Automatic SSL certificates and DDoS protection to keep your site safe and secure from threats and attacks.
            </ServiceCard>
            <ServiceCard title="Performance" icon={<Zap />}>
              Caching, compression, and CDN optimization for lightning-fast load times and exceptional user experience.
            </ServiceCard>
            <ServiceCard title="Monitoring" icon={<BarChart />}>
              24/7 monitoring and alerting systems for proactive issue detection and rapid response to any problems.
            </ServiceCard>
          </div>
        </div>
      </section>

      {/* Deployment Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Deployment Process</h2>
            <p className="text-xl text-gray-600 mb-8">Streamlined deployment workflows for reliable releases</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <AboutCard color="gold" title="Automated Workflows">
              Our deployment process is designed to minimize downtime and ensure smooth releases. We use automated CI/CD pipelines that include testing, building, and deployment stages to catch issues early and maintain code quality.
            </AboutCard>
            <AboutCard color="fuschia" title="Comprehensive Setup">
              From environment setup to production deployment, we handle all aspects of the deployment process. Our team ensures proper configuration, security measures, and monitoring are in place before going live.
            </AboutCard>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProcessCard step="01" title="Environment Setup">
              Configure development, staging, and production environments with proper security and performance optimization.
            </ProcessCard>
            <ProcessCard step="02" title="CI/CD Pipeline">
              Automated testing and deployment workflows that ensure code quality and smooth releases without manual intervention.
            </ProcessCard>
            <ProcessCard step="03" title="Security Configuration">
              Implement security measures, SSL certificates, and access controls to protect your application and data.
            </ProcessCard>
            <ProcessCard step="04" title="Monitoring & Maintenance">
              Ongoing monitoring and maintenance services to ensure optimal performance and rapid issue resolution.
            </ProcessCard>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Technology Stack</h2>
            <p className="text-xl text-gray-600 mb-8">Modern tools and platforms for reliable hosting</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <AboutCard color="navy" title="Industry Standards">
              We use industry-leading technologies and platforms to ensure your applications are hosted on reliable, scalable infrastructure. Our technology stack includes cloud providers, containerization tools, and monitoring solutions.
            </AboutCard>
            <AboutCard color="gold" title="Continuous Innovation">
              Our team stays current with the latest hosting technologies and best practices to provide you with the most effective solutions. We choose technologies based on your specific requirements and long-term scalability needs.
            </AboutCard>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "AWS", description: "Amazon Web Services", features: ["EC2", "S3", "CloudFront", "RDS"] },
              { name: "Docker", description: "Containerization", features: ["Containers", "Orchestration", "Scaling", "Deployment"] },
              { name: "Kubernetes", description: "Container Orchestration", features: ["Auto-scaling", "Load Balancing", "Service Mesh", "Monitoring"] },
              { name: "Nginx", description: "Web Server", features: ["Load Balancing", "SSL Termination", "Caching", "Compression"] },
              { name: "Redis", description: "Caching Layer", features: ["In-Memory Cache", "Session Storage", "Pub/Sub", "Persistence"] },
              { name: "PostgreSQL", description: "Database", features: ["ACID Compliance", "Scalability", "Backup", "Replication"] }
            ].map((tech, index) => (
              <div key={index} className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <img src="/lunaratechIcon.png" alt="LunaraTech Icon" className="h-16 w-16" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#262262] mb-2">{tech.name}</h3>
                  <p className="text-gray-600 text-sm">{tech.description}</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {tech.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-xs bg-gray-100 text-gray-700 px-3 py-2 rounded text-center">
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monitoring Dashboard Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#262262]/5 to-[#da1c5c]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Real-time Monitoring</h2>
            <p className="text-xl text-gray-600 mb-8">24/7 monitoring and alerting for your infrastructure</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <AboutCard color="fuschia" title="Comprehensive Monitoring">
              Our monitoring services provide comprehensive visibility into your application's performance and health. We track key metrics, set up alerts, and provide detailed reports to help you understand your system's behavior.
            </AboutCard>
            <AboutCard color="navy" title="Proactive Management">
              With real-time monitoring, we can quickly identify and resolve issues before they impact your users. Our monitoring dashboard provides insights into performance trends, resource usage, and system health.
            </AboutCard>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <img src="/lunaratechIcon.png" alt="LunaraTech Icon" className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold text-[#262262] mb-2">Performance Metrics</h3>
              <p className="text-gray-600">CPU, memory, and network monitoring with real-time alerts and detailed analytics.</p>
            </div>
            
            <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <img src="/lunaratechIcon.png" alt="LunaraTech Icon" className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold text-[#262262] mb-2">Smart Alerts</h3>
              <p className="text-gray-600">Proactive notifications for issues with intelligent filtering and escalation procedures.</p>
            </div>
            
            <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-transform duration-300">
                <img src="/lunaratechIcon.png" alt="LunaraTech Icon" className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold text-[#262262] mb-2">Analytics</h3>
              <p className="text-gray-600">Detailed insights and reporting with historical data and trend analysis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Our Hosting Performance</h2>
            <p className="text-xl text-gray-600 mb-8">Proven reliability and performance metrics</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Stat value="99.9%" label="Uptime SLA" />
            <Stat value="< 100ms" label="Average Response" />
            <Stat value="24/7" label="Support Coverage" />
            <Stat value="100%" label="Client Satisfaction" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-gradient-to-r from-[#262262] to-[#70CBD0] rounded-2xl p-12 text-white overflow-hidden">
            <div className="relative text-center">
              <h2 className="text-3xl font-bold mb-4">Ready for Reliable Hosting?</h2>
              <p className="text-xl mb-8 opacity-90">Let's deploy your project with enterprise-grade hosting and support.</p>
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

export default HostingDeployment;