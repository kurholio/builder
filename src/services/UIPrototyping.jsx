import React from 'react';
import { Link } from 'react-router-dom';

const UIPrototyping = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3">
              <img src="/lunaratechLogo.png" alt="LunaraTech Logo" className="h-10 w-auto"/>
              <span className="text-xl font-bold text-[#262262]">LunaraTech</span>
            </Link>
            <Link 
              to="/" 
              className="bg-[#FFB700] text-[#262262] px-6 py-2 rounded-xl font-medium hover:bg-[#FFB700]/90 transition-colors duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-[#262262] mb-6">
              UI Prototyping
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Interactive wireframes and prototypes to validate flows and align stakeholders before build.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-[#262262] mb-6">Why Prototyping Matters</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#da1c5c] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#262262] mb-2">Validate Ideas Early</h3>
                    <p className="text-gray-600">Test concepts and user flows before investing in full development, saving time and resources.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#70CBD0] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#262262] mb-2">Align Stakeholders</h3>
                    <p className="text-gray-600">Get everyone on the same page with visual, interactive representations of your vision.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#FFB700] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#262262] mb-2">Reduce Risk</h3>
                    <p className="text-gray-600">Identify and fix usability issues before they become expensive development problems.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <img src="/niks3.png" alt="UI Prototyping" className="w-full h-64 object-cover rounded-xl mb-6"/>
              <h3 className="text-xl font-semibold text-[#262262] mb-4">Our Prototyping Process</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 bg-[#da1c5c] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <span className="text-gray-700">User Research & Analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 bg-[#70CBD0] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <span className="text-gray-700">Wireframe Creation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 bg-[#FFB700] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <span className="text-gray-700">Interactive Prototyping</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 bg-[#262262] text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  <span className="text-gray-700">Testing & Iteration</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tools Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
            <h2 className="text-3xl font-bold text-[#262262] text-center mb-8">Prototyping Tools We Use</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#da1c5c] to-[#FFB700] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">F</span>
                </div>
                <h3 className="text-lg font-semibold text-[#262262] mb-2">Figma</h3>
                <p className="text-gray-600 text-sm">Collaborative design tool for creating high-fidelity prototypes and design systems.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#70CBD0] to-[#262262] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <h3 className="text-lg font-semibold text-[#262262] mb-2">Adobe XD</h3>
                <p className="text-gray-600 text-sm">Professional prototyping tool for creating interactive user experiences.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FFB700] to-[#da1c5c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <h3 className="text-lg font-semibold text-[#262262] mb-2">Principle</h3>
                <p className="text-gray-600 text-sm">Animation and interaction design tool for creating realistic user flows.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-[#70CBD0] to-[#262262] rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Prototype Your Idea?</h2>
            <p className="text-xl mb-8 opacity-90">Let's bring your vision to life with interactive prototypes that wow stakeholders.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/#contact" 
                className="bg-white text-[#262262] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Get Started
              </Link>
              <a 
                href="tel:+15074003910" 
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#262262] transition-colors duration-300"
              >
                Call (507) 400-3910
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UIPrototyping;
