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
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hostingFeatures = [
    {
      title: "Cloud Infrastructure",
      description: "AWS, Google Cloud, and Azure hosting with auto-scaling",
      icon: "☁️",
      color: "from-[#da1c5c] to-[#FFB700]",
      specs: ["99.9% Uptime", "Auto-scaling", "Global CDN", "Load Balancing"]
    },
    {
      title: "Security & SSL",
      description: "Automatic SSL certificates and DDoS protection",
      icon: "🔒",
      color: "from-[#70CBD0] to-[#262262]",
      specs: ["SSL Certificates", "DDoS Protection", "Firewall", "Monitoring"]
    },
    {
      title: "Performance",
      description: "Caching, compression, and CDN optimization",
      icon: "⚡",
      color: "from-[#FFB700] to-[#da1c5c]",
      specs: ["CDN", "Caching", "Compression", "Optimization"]
    },
    {
      title: "Monitoring",
      description: "24/7 monitoring and alerting systems",
      icon: "📊",
      color: "from-[#262262] to-[#70CBD0]",
      specs: ["Real-time Monitoring", "Alerts", "Logs", "Analytics"]
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

      {/* Hero Section with Infrastructure Theme */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#262262]/5 to-[#70CBD0]/5"></div>
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="bg-[#262262] rounded animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
            ))}
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-6xl md:text-8xl font-bold text-[#262262] mb-6">
                Hosting & Deployment
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Secure, scalable hosting and smooth deployments — your site stays fast and reliable.
              </p>
            </div>
          </div>

          {/* Infrastructure Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {infrastructureStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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
            <h2 className="text-4xl font-bold text-[#262262] mb-4">Hosting Solutions</h2>
            <p className="text-xl text-gray-600">Enterprise-grade infrastructure for your applications</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hostingFeatures.map((feature, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-[#70CBD0]">
                <div className="text-center mb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#262262] mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                </div>
                <ul className="space-y-2">
                  {feature.specs.map((spec, specIndex) => (
                    <li key={specIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-[#70CBD0] rounded-full mr-3"></div>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#262262] mb-4">Deployment Process</h2>
            <p className="text-xl text-gray-600">Streamlined deployment workflows for reliable releases</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Tab Navigation */}
            <div className="space-y-4">
              {deploymentTabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                    activeTab === index
                      ? 'bg-[#262262] text-white shadow-xl scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <h3 className="text-xl font-bold mb-2">{tab.title}</h3>
                  <p className="text-sm opacity-80">{tab.description}</p>
                </button>
              ))}
            </div>
            
            {/* Tab Content */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#262262] mb-2">
                  {deploymentTabs[activeTab].title}
                </h3>
                <p className="text-gray-600">{deploymentTabs[activeTab].description}</p>
              </div>
              
              <div className="space-y-4">
                {deploymentTabs[activeTab].steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="flex items-center space-x-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                      stepIndex === 0 ? 'bg-[#da1c5c]' :
                      stepIndex === 1 ? 'bg-[#70CBD0]' :
                      stepIndex === 2 ? 'bg-[#FFB700]' : 'bg-[#262262]'
                    }`}>
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
            <h2 className="text-4xl font-bold text-[#262262] mb-4">Technology Stack</h2>
            <p className="text-xl text-gray-600">Modern tools and platforms for reliable hosting</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "AWS", description: "Amazon Web Services", icon: "☁️", features: ["EC2", "S3", "CloudFront", "RDS"] },
              { name: "Docker", description: "Containerization", icon: "🐳", features: ["Containers", "Orchestration", "Scaling", "Deployment"] },
              { name: "Kubernetes", description: "Container Orchestration", icon: "⚙️", features: ["Auto-scaling", "Load Balancing", "Service Mesh", "Monitoring"] },
              { name: "Nginx", description: "Web Server", icon: "🌐", features: ["Load Balancing", "SSL Termination", "Caching", "Compression"] },
              { name: "Redis", description: "Caching Layer", icon: "🔴", features: ["In-Memory Cache", "Session Storage", "Pub/Sub", "Persistence"] },
              { name: "PostgreSQL", description: "Database", icon: "🐘", features: ["ACID Compliance", "Scalability", "Backup", "Replication"] }
            ].map((tech, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#262262] mb-2">{tech.name}</h3>
                  <p className="text-gray-600 text-sm">{tech.description}</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {tech.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded text-center">
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
            <h2 className="text-4xl font-bold text-[#262262] mb-4">Real-time Monitoring</h2>
            <p className="text-xl text-gray-600">24/7 monitoring and alerting for your infrastructure</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full flex items-center justify-center">
                  <span className="text-2xl text-white">📊</span>
                </div>
                <h3 className="text-xl font-bold text-[#262262] mb-2">Performance Metrics</h3>
                <p className="text-gray-600">CPU, memory, and network monitoring</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-[#70CBD0] to-[#262262] rounded-full flex items-center justify-center">
                  <span className="text-2xl text-white">🔔</span>
                </div>
                <h3 className="text-xl font-bold text-[#262262] mb-2">Smart Alerts</h3>
                <p className="text-gray-600">Proactive notifications for issues</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-[#FFB700] to-[#da1c5c] rounded-full flex items-center justify-center">
                  <span className="text-2xl text-white">📈</span>
                </div>
                <h3 className="text-xl font-bold text-[#262262] mb-2">Analytics</h3>
                <p className="text-gray-600">Detailed insights and reporting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-gradient-to-r from-[#262262] to-[#70CBD0] rounded-3xl p-12 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative text-center">
              <h2 className="text-4xl font-bold mb-4">Ready for Reliable Hosting?</h2>
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