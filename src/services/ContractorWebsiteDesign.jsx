import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

// SVG Icons matching services page style
const Icon = ({ children }) => (
  <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

const Hammer = () => (
  <Icon>
    <path d="M14 4l6 6"/><path d="M9 15l5-5 2 2-5 5z"/><path d="M3 21l6-6"/>
  </Icon>
);

const Building = () => (
  <Icon>
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18z"/>
    <path d="M6 12H4a2 2 0 0 0-2 2v8h2"/>
    <path d="M18 9h2a2 2 0 0 1 2 2v11h-2"/>
    <path d="M10 6h4"/>
    <path d="M10 10h4"/>
    <path d="M10 14h4"/>
    <path d="M10 18h4"/>
  </Icon>
);

const Award = () => (
  <Icon>
    <circle cx="12" cy="8" r="6"/>
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
  </Icon>
);

const Users = () => (
  <Icon>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </Icon>
);

const CheckCircle = () => (
  <Icon>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22,4 12,14.01 9,11.01"/>
  </Icon>
);

const Phone = () => (
  <Icon>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </Icon>
);

const ContractorWebsiteDesign = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  const contractorwebsitedesignStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Contractor Website Design - Construction & Home Improvement",
    "description": "Build trust with professional contractor website design. Project galleries, service areas, customer testimonials, and lead generation for construction businesses.",
    "provider": {
        "@type": "Organization",
        "name": "LunaraTech",
        "url": "https://lunaratech.com"
    },
    "serviceType": "Contractor Website Design",
    "areaServed": "United States",
    "url": "https://lunaratech.com/contractor-website-design"
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5">
      <SEOHead 
        title="Contractor Website Design - Construction & Home Improvement"
        description="Build trust with professional contractor website design. Project galleries, service areas, customer testimonials, and lead generation for construction businesses."
        keywords="contractor website design, construction website, home improvement website, contractor business website, construction marketing, building contractor website"
        canonicalUrl="https://lunaratech.com/contractor-website-design"
        structuredData={contractorwebsitedesignStructuredData}
      />
      <Header />
      
      {/* SEO Meta Content */}
      <div className="sr-only">
        <h1>Contractor Website Design Services | Construction Company Websites</h1>
        <p>Professional contractor website design that showcases your construction projects and wins more bids. Custom construction websites with project galleries, client reviews, and lead generation tools. Grow your contracting business with our expert website design services.</p>
        <h2>Contractor Website Features</h2>
        <ul>
          <li>Project portfolio galleries with before/after photos</li>
          <li>Service area coverage and project types</li>
          <li>Client reviews and case studies</li>
          <li>Lead capture forms and quote requests</li>
          <li>Mobile-optimized design for on-site viewing</li>
          <li>Local SEO for "contractor near me" searches</li>
          <li>Insurance and licensing information</li>
          <li>Contact forms and emergency services</li>
        </ul>
        <h2>Why Choose Our Contractor Website Design</h2>
        <p>We specialize in creating professional websites for contractors and construction companies. Our team understands the construction industry and designs websites that showcase your work, build trust with potential clients, and convert visitors into high-value projects.</p>
      </div>
      
      {/* Hero Section - Construction Industry Focus */}
      <section className="relative bg-gradient-to-br from-orange-50 via-yellow-50 to-red-100 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-orange-100/20"></div>
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-orange-100 text-orange-800 text-sm font-medium mb-8">
              Professional Contractors
            </div>
            <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Showcase Your <span className="text-orange-600">Construction Projects</span> and <span className="text-red-600">Win More Bids</span>
            </h1>
            <p className="text-2xl text-gray-600 mb-12 leading-relaxed">
              Stand out from the competition with a professional contractor website that showcases your expertise, builds credibility, and converts visitors into high-value construction projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-10 py-5 bg-orange-600 text-white font-bold text-lg rounded-xl hover:bg-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25"
              >
                Build Professional Site
                <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                to="tel:+15074003910" 
                className="inline-flex items-center px-10 py-5 border-2 border-orange-600 text-orange-600 font-bold text-lg rounded-xl hover:bg-orange-50 transition-all duration-300"
              >
                <Phone className="mr-3" />
                Call (507) 400-3910
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Website Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Contractor Website Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to showcase projects and win more bids
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Portfolio</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Project Galleries</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Showcase your best work with stunning before/after photo galleries that demonstrate your expertise and attract potential clients.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Coverage</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Service Areas</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Interactive maps showing your coverage areas and local service locations to help clients find you easily.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Leads</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Quote Requests</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Easy-to-use forms that capture lead information and project details to convert visitors into potential clients.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Credibility</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Licensing & Insurance</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Display your licenses, certifications, and insurance information to build trust and credibility with potential clients.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Mobile</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Mobile Optimization</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Perfect mobile experience for clients viewing your work on-site or on-the-go, ensuring accessibility across all devices.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Mobile</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Mobile Optimization</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Perfect mobile experience for clients viewing your work on-site or on-the-go with seamless functionality.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Local</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Local SEO</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Optimize for local searches to appear when potential clients search for contractors in your area.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Contractor Principles Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Our Contractor Design Principles</h2>
            <p className="text-xl text-gray-600 mb-8">The core values that guide our construction website design</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="group relative flex h-full flex-col rounded-2xl border-2 bg-gradient-to-br p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] from-[#da1c5c]/15 to-[#da1c5c]/5 border-[#da1c5c]/20 hover:shadow-[#da1c5c]/20 hover:border-[#da1c5c]/40">
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">Trust & Credibility Focus</h3>
              <p className="text-sm text-gray-700 leading-relaxed flex-grow">Every design decision prioritizes building trust with homeowners, showcasing your expertise, certifications, and past projects to establish immediate credibility.</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>
            <div className="group relative flex h-full flex-col rounded-2xl border-2 bg-gradient-to-br p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] from-[#262262]/15 to-[#262262]/5 border-[#262262]/20 hover:shadow-[#262262]/20 hover:border-[#262262]/40">
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">Project Showcase Priority</h3>
              <p className="text-sm text-gray-700 leading-relaxed flex-grow">Visual storytelling through project galleries, before/after photos, and detailed case studies that demonstrate your quality and expertise to potential clients.</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-gradient-to-br from-[#262262] to-[#262262]/80 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <img src="/lunaratechIcon.png" alt="Trust" className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Trust Building</h3>
              <p className="text-white/90">Licensed, bonded, and insured messaging with clear credentials and customer testimonials.</p>
            </div>
            
            <div className="group bg-gradient-to-br from-[#70CBD0] to-[#70CBD0]/80 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <img src="/lunaratechIcon.png" alt="Portfolio" className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Portfolio Showcase</h3>
              <p className="text-white/90">Stunning project galleries that highlight your best work and demonstrate quality craftsmanship.</p>
            </div>
            
            <div className="group bg-gradient-to-br from-[#da1c5c] to-[#da1c5c]/80 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <img src="/lunaratechIcon.png" alt="Local" className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Local Focus</h3>
              <p className="text-white/90">Service area maps, local testimonials, and community-focused content that resonates with neighbors.</p>
            </div>
            
            <div className="group bg-gradient-to-br from-[#FFB700] to-[#FFB700]/80 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <img src="/lunaratechIcon.png" alt="Conversion" className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Lead Generation</h3>
              <p className="text-white/90">Strategic design elements that convert visitors into qualified leads and project inquiries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Card Style Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl mb-4">Our Design Tools & Process</h2>
            <p className="text-xl text-gray-600 mb-8">Professional tools and methodologies we use to create your contractor website</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group bg-gradient-to-br from-[#da1c5c]/5 to-[#FFB700]/5 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#da1c5c]/20 hover:border-[#da1c5c]/20">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#da1c5c] to-[#FFB700] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <img src="/lunaratechIcon.png" alt="Figma" className="h-12 w-12" />
                </div>
                <div className="flex-grow min-w-0">
                  <h3 className="text-2xl font-bold text-[#262262] mb-2 group-hover:text-[#da1c5c] transition-colors duration-300">Figma</h3>
                  <p className="text-gray-600 mb-4 text-lg">Collaborative design tool</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-[#da1c5c]/10 text-[#da1c5c] text-sm font-medium rounded-full">Real-time collaboration</span>
                    <span className="px-3 py-1 bg-[#da1c5c]/10 text-[#da1c5c] text-sm font-medium rounded-full">Component libraries</span>
                    <span className="px-3 py-1 bg-[#da1c5c]/10 text-[#da1c5c] text-sm font-medium rounded-full">Auto-layout</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-[#70CBD0]/5 to-[#262262]/5 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#70CBD0]/20 hover:border-[#70CBD0]/20">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#70CBD0] to-[#262262] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <img src="/lunaratechIcon.png" alt="Adobe XD" className="h-12 w-12" />
                </div>
                <div className="flex-grow min-w-0">
                  <h3 className="text-2xl font-bold text-[#262262] mb-2 group-hover:text-[#70CBD0] transition-colors duration-300">Adobe XD</h3>
                  <p className="text-gray-600 mb-4 text-lg">Professional prototyping</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-[#70CBD0]/10 text-[#70CBD0] text-sm font-medium rounded-full">Voice prototyping</span>
                    <span className="px-3 py-1 bg-[#70CBD0]/10 text-[#70CBD0] text-sm font-medium rounded-full">Responsive design</span>
                    <span className="px-3 py-1 bg-[#70CBD0]/10 text-[#70CBD0] text-sm font-medium rounded-full">Developer handoff</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-[#FFB700]/5 to-[#da1c5c]/5 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#FFB700]/20 hover:border-[#FFB700]/20">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#FFB700] to-[#da1c5c] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <img src="/lunaratechIcon.png" alt="Principle" className="h-12 w-12" />
                </div>
                <div className="flex-grow min-w-0">
                  <h3 className="text-2xl font-bold text-[#262262] mb-2 group-hover:text-[#FFB700] transition-colors duration-300">Principle</h3>
                  <p className="text-gray-600 mb-4 text-lg">Animation and interaction</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-[#FFB700]/10 text-[#FFB700] text-sm font-medium rounded-full">Micro-interactions</span>
                    <span className="px-3 py-1 bg-[#FFB700]/10 text-[#FFB700] text-sm font-medium rounded-full">Timeline editing</span>
                    <span className="px-3 py-1 bg-[#FFB700]/10 text-[#FFB700] text-sm font-medium rounded-full">Export options</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-[#262262]/5 to-[#70CBD0]/5 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#262262]/20 hover:border-[#262262]/20">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#262262] to-[#70CBD0] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <img src="/lunaratechIcon.png" alt="InVision" className="h-12 w-12" />
                </div>
                <div className="flex-grow min-w-0">
                  <h3 className="text-2xl font-bold text-[#262262] mb-2 group-hover:text-[#262262] transition-colors duration-300">InVision</h3>
                  <p className="text-gray-600 mb-4 text-lg">Design workflow platform</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-[#262262]/10 text-[#262262] text-sm font-medium rounded-full">Design systems</span>
                    <span className="px-3 py-1 bg-[#262262]/10 text-[#262262] text-sm font-medium rounded-full">User testing</span>
                    <span className="px-3 py-1 bg-[#262262]/10 text-[#262262] text-sm font-medium rounded-full">Feedback collection</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Win More Construction Projects?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a professional contractor website that builds trust and converts visitors into clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
            </Link>
            <Link 
              to="tel:+15074003910" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call (507) 400-3910
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContractorWebsiteDesign;
