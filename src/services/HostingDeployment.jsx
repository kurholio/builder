import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HostingDeployment = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [uptime, setUptime] = useState(99.9);

  useEffect(() => {
    setIsVisible(true);
    // Simulate uptime counter
    const interval = setInterval(() => {
      setUptime(prev => Math.min(99.99, prev + 0.01));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Icon components matching landing page style
  const Check = () => (
    <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
  );
  const Cloud = () => (
    <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
    </svg>
  );
  const Shield = () => (
    <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  );
  const Zap = () => (
    <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/>
    </svg>
  );
  const BarChart = () => (
    <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="20" x2="12" y2="10"/>
      <line x1="18" y1="20" x2="18" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="16"/>
    </svg>
  );

  const hostingFeatures = [
    {
      title: "Cloud Infrastructure",
      description: "AWS, Google Cloud, and Azure hosting with auto-scaling and global CDN distribution",
      icon: <Cloud />
    },
    {
      title: "Security & SSL",
      description: "Automatic SSL certificates and DDoS protection to keep your site safe",
      icon: <Shield />
    },
    {
      title: "Performance",
      description: "Caching, compression, and CDN optimization for lightning-fast load times",
      icon: <Zap />
    },
    {
      title: "Monitoring",
      description: "24/7 monitoring and alerting systems for proactive issue detection",
      icon: <BarChart />
    }
  ];

  const deploymentTabs = [
    {
      title: "Environment Setup",
      description: "Configure development, staging, and production environments",
      steps: ["Server Configuration", "Database Setup", "Environment Variables", "Security Configuration"]
    },
    {
      title: "CI/CD Pipeline",
      description: "Automated testing and deployment workflows",
      steps: ["Code Integration", "Automated Testing", "Build Process", "Deployment"]
    },
    {
      title: "Monitoring & Maintenance",
      description: "Ongoing monitoring and maintenance services",
      steps: ["Performance Monitoring", "Security Updates", "Backup Management", "Scaling"]
    }
  ];

  const infrastructureStats = [
    { label: "Uptime", value: `${uptime.toFixed(2)}%`, color: "text-[#da1c5c]" },
    { label: "Response Time", value: "< 100ms", color: "text-[#70CBD0]" },
    { label: "Global CDN", value: "200+ Locations", color: "text-[#FFB700]" },
    { label: "Support", value: "24/7", color: "text-[#262262]" }
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
                Hosting & Deployment
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                Secure, scalable hosting and smooth deployments — your site stays fast and reliable.
              </p>
              <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
                <p className="mb-4">
                  Our hosting and deployment services ensure your applications are always available, performant, and secure. We leverage enterprise-grade cloud infrastructure to provide reliable hosting solutions that scale with your business needs.
                </p>
                <p>
                  From initial setup to ongoing maintenance, we handle all aspects of your hosting infrastructure. Our team monitors your applications 24/7, performs regular updates, and ensures optimal performance through continuous optimization.
                </p>
              </div>
            </div>
          </div>

          {/* Infrastructure Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {infrastructureStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hosting Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Hosting Solutions</h2>
            <p className="text-xl text-gray-600 mb-8">Enterprise-grade infrastructure for your applications</p>
            <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
              <p className="mb-4">
                We provide comprehensive hosting solutions that combine reliability, performance, and security. Our infrastructure is built on industry-leading cloud platforms and includes advanced features like auto-scaling, load balancing, and global CDN distribution.
              </p>
              <p>
                Our hosting services are designed to handle everything from small websites to large-scale enterprise applications. We ensure 99.9% uptime, fast response times, and robust security measures to keep your applications running smoothly.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hostingFeatures.map((feature, index) => (
              <div key={index} className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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

      {/* Deployment Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Deployment Process</h2>
            <p className="text-xl text-gray-600 mb-8">Streamlined deployment workflows for reliable releases</p>
            <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
              <p className="mb-4">
                Our deployment process is designed to minimize downtime and ensure smooth releases. We use automated CI/CD pipelines that include testing, building, and deployment stages to catch issues early and maintain code quality.
              </p>
              <p>
                From environment setup to production deployment, we handle all aspects of the deployment process. Our team ensures proper configuration, security measures, and monitoring are in place before going live.
              </p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Tab Navigation */}
            <div className="space-y-4">
              {deploymentTabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                    activeTab === index
                      ? 'bg-[#262262] text-white shadow-xl'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
                  }`}
                >
                  <h3 className="text-xl font-semibold mb-2">{tab.title}</h3>
                  <p className="text-sm opacity-80">{tab.description}</p>
                </button>
              ))}
            </div>
            
            {/* Tab Content */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-[#262262] mb-2">
                  {deploymentTabs[activeTab].title}
                </h3>
                <p className="text-gray-600">{deploymentTabs[activeTab].description}</p>
              </div>
              
              <div className="space-y-4">
                {deploymentTabs[activeTab].steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="flex items-center space-x-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm bg-gradient-to-r from-[#da1c5c] to-[#FFB700]">
                      {stepIndex + 1}
                    </div>
                    <span className="text-gray-700 font-medium">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Technology Stack</h2>
            <p className="text-xl text-gray-600 mb-8">Modern tools and platforms for reliable hosting</p>
            <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
              <p className="mb-4">
                We use industry-leading technologies and platforms to ensure your applications are hosted on reliable, scalable infrastructure. Our technology stack includes cloud providers, containerization tools, and monitoring solutions.
              </p>
              <p>
                Our team stays current with the latest hosting technologies and best practices to provide you with the most effective solutions. We choose technologies based on your specific requirements and long-term scalability needs.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "AWS", description: "Amazon Web Services", icon: "☁️", features: ["EC2", "S3", "CloudFront", "RDS"] },
              { name: "Docker", description: "Containerization", icon: "🐳", features: ["Containers", "Orchestration", "Scaling", "Deployment"] },
              { name: "Kubernetes", description: "Container Orchestration", icon: "⚙️", features: ["Auto-scaling", "Load Balancing", "Service Mesh", "Monitoring"] },
              { name: "Nginx", description: "Web Server", icon: "🌐", features: ["Load Balancing", "SSL Termination", "Caching", "Compression"] },
              { name: "Redis", description: "Caching Layer", icon: "🔴", features: ["In-Memory Cache", "Session Storage", "Pub/Sub", "Persistence"] },
              { name: "PostgreSQL", description: "Database", icon: "🐘", features: ["ACID Compliance", "Scalability", "Backup", "Replication"] }
            ].map((tech, index) => (
              <div key={index} className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
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
            <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
              <p className="mb-4">
                Our monitoring services provide comprehensive visibility into your application's performance and health. We track key metrics, set up alerts, and provide detailed reports to help you understand your system's behavior.
              </p>
              <p>
                With real-time monitoring, we can quickly identify and resolve issues before they impact your users. Our monitoring dashboard provides insights into performance trends, resource usage, and system health.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full flex items-center justify-center">
                  <BarChart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#262262] mb-2">Performance Metrics</h3>
                <p className="text-gray-600">CPU, memory, and network monitoring</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#70CBD0] to-[#262262] rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#262262] mb-2">Smart Alerts</h3>
                <p className="text-gray-600">Proactive notifications for issues</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#FFB700] to-[#da1c5c] rounded-full flex items-center justify-center">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#262262] mb-2">Analytics</h3>
                <p className="text-gray-600">Detailed insights and reporting</p>
              </div>
            </div>
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