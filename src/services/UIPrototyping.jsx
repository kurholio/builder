import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UIPrototyping = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prototypingSteps = [
    {
      title: "Wireframing",
      description: "Low-fidelity sketches to map out user flows and information architecture",
      image: "/services/representation-user-experience-interface-design.jpg",
      color: "from-[#da1c5c] to-[#FFB700]"
    },
    {
      title: "Interactive Prototyping",
      description: "High-fidelity prototypes with clickable elements and realistic interactions",
      image: "/services/digital-art-creation-tablet-with-stylus.jpg",
      color: "from-[#70CBD0] to-[#262262]"
    },
    {
      title: "User Testing",
      description: "Validate designs with real users and gather feedback for improvements",
      image: "/services/man-working-desk-medium-shot.jpg",
      color: "from-[#FFB700] to-[#da1c5c]"
    }
  ];

  const tools = [
    { name: "Figma", description: "Collaborative design tool", icon: "🎨", features: ["Real-time collaboration", "Component libraries", "Auto-layout"] },
    { name: "Adobe XD", description: "Professional prototyping", icon: "🖥️", features: ["Voice prototyping", "Responsive design", "Developer handoff"] },
    { name: "Principle", description: "Animation and interaction", icon: "✨", features: ["Micro-interactions", "Timeline editing", "Export options"] },
    { name: "InVision", description: "Design workflow platform", icon: "🔗", features: ["Design systems", "User testing", "Feedback collection"] }
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

      {/* Hero Section with Sliding Animation */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#70CBD0]/5 to-[#da1c5c]/5"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-6xl md:text-8xl font-bold text-[#262262] mb-6">
                UI Prototyping
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Interactive wireframes and prototypes to validate flows and align stakeholders before build.
              </p>
            </div>
          </div>

          {/* Carousel Section */}
          <div className="mb-20">
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="relative h-96">
                {prototypingSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ${
                      currentSlide === index 
                        ? 'opacity-100 translate-x-0' 
                        : index < currentSlide 
                          ? 'opacity-0 -translate-x-full' 
                          : 'opacity-0 translate-x-full'
                    }`}
                  >
                    <div className="h-full bg-gradient-to-r from-gray-50 to-gray-100 flex items-center">
                      <div className="w-1/2 p-12">
                        <h2 className="text-4xl font-bold text-[#262262] mb-4">{step.title}</h2>
                        <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                        <div className={`inline-block px-6 py-3 rounded-full bg-gradient-to-r ${step.color} text-white font-semibold`}>
                          Step {index + 1}
                        </div>
                      </div>
                      <div className="w-1/2 h-full">
                        <img 
                          src={step.image} 
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Carousel Controls */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {prototypingSteps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index ? 'bg-[#da1c5c] scale-125' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section with Grid Layout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#262262] mb-4">Prototyping Tools We Use</h2>
            <p className="text-xl text-gray-600">Professional tools for creating stunning prototypes</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-[#70CBD0]"
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {tool.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#262262] mb-2">{tool.name}</h3>
                  <p className="text-gray-600 text-sm">{tool.description}</p>
                </div>
                <ul className="space-y-2">
                  {tool.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-[#70CBD0] rounded-full mr-3"></div>
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
            <h2 className="text-4xl font-bold text-[#262262] mb-4">Our Prototyping Process</h2>
            <p className="text-xl text-gray-600">A systematic approach to creating effective prototypes</p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#da1c5c] to-[#70CBD0]"></div>
            
            <div className="space-y-12">
              {[
                { title: "Research & Discovery", description: "Understanding user needs and business requirements", phase: "1" },
                { title: "Information Architecture", description: "Structuring content and defining user flows", phase: "2" },
                { title: "Wireframing", description: "Creating low-fidelity layouts and basic structure", phase: "3" },
                { title: "Visual Design", description: "Applying colors, typography, and visual elements", phase: "4" },
                { title: "Interactive Prototyping", description: "Adding interactions and micro-animations", phase: "5" },
                { title: "User Testing", description: "Validating designs with real users", phase: "6" }
              ].map((step, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                      <h3 className="text-xl font-bold text-[#262262] mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl ${
                      index === 0 ? 'bg-[#da1c5c]' :
                      index === 1 ? 'bg-[#70CBD0]' :
                      index === 2 ? 'bg-[#FFB700]' :
                      index === 3 ? 'bg-[#262262]' :
                      index === 4 ? 'bg-[#da1c5c]' : 'bg-[#70CBD0]'
                    }`}>
                      {step.phase}
                    </div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section with Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#262262]/5 to-[#da1c5c]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#262262] mb-4">Why Prototyping Matters</h2>
            <p className="text-xl text-gray-600">The benefits of investing in proper prototyping</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">💰</div>
              <h3 className="text-2xl font-bold text-[#262262] mb-4">Save Money</h3>
              <p className="text-gray-600 mb-4">Identify issues early and avoid expensive changes during development</p>
              <div className="text-3xl font-bold text-[#da1c5c]">40%</div>
              <p className="text-sm text-gray-500">Average cost reduction</p>
            </div>
            
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">⏱️</div>
              <h3 className="text-2xl font-bold text-[#262262] mb-4">Save Time</h3>
              <p className="text-gray-600 mb-4">Faster development cycles with clear direction and fewer revisions</p>
              <div className="text-3xl font-bold text-[#70CBD0]">60%</div>
              <p className="text-sm text-gray-500">Faster to market</p>
            </div>
            
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🎯</div>
              <h3 className="text-2xl font-bold text-[#262262] mb-4">Better UX</h3>
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
          <div className="relative bg-gradient-to-r from-[#70CBD0] to-[#262262] rounded-3xl p-12 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
            
            <div className="relative text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Prototype Your Idea?</h2>
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