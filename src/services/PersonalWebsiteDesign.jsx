import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const PersonalWebsiteDesign = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  const personalwebsitedesignStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Personal Website Design - Portfolio & Professional Websites",
    "description": "Build your personal brand with professional personal website design. Portfolio showcases, resume websites, personal branding, and professional presence online.",
    "provider": {
        "@type": "Organization",
        "name": "LunaraTech",
        "url": "https://lunaratech.com"
    },
    "serviceType": "Personal Website Design",
    "areaServed": "United States",
    "url": "https://lunaratech.com/personal-website-design"
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5">
      <SEOHead 
        title="Personal Website Design - Portfolio & Professional Websites"
        description="Build your personal brand with professional personal website design. Portfolio showcases, resume websites, personal branding, and professional presence online."
        keywords="personal website design, portfolio website, personal branding, resume website, professional website, personal brand, individual website, personal marketing"
        canonicalUrl="https://lunaratech.com/personal-website-design"
        structuredData={personalwebsitedesignStructuredData}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-100 py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mb-8">
              Personal Brand Specialists
            </div>
            <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Build Your <span className="text-indigo-600">Personal Brand</span> with a <span className="text-purple-600">Stunning Personal Website</span>
            </h1>
            <p className="text-2xl text-gray-600 mb-12 leading-relaxed">
              Stand out from the crowd with a professional personal website that showcases your expertise, builds your audience, and grows your influence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-10 py-5 bg-indigo-600 text-white font-bold text-lg rounded-xl hover:bg-indigo-700 transition-all duration-300 shadow-2xl hover:shadow-indigo-500/25"
              >
                Create Personal Site
                <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                to="tel:+15074003910" 
                className="inline-flex items-center px-10 py-5 border-2 border-indigo-600 text-indigo-600 font-bold text-lg rounded-xl hover:bg-indigo-50 transition-all duration-300"
              >
                Call (507) 400-3910
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Personal Website Features
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Build your personal brand with a professional website that showcases your expertise, 
              attracts opportunities, and establishes you as a thought leader in your field. Our 
              comprehensive solutions help you stand out in today's competitive digital landscape.
            </p>
          </div>

          {/* Primary Features - ServiceCard Style */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="group relative flex h-full flex-col rounded-xl border-2 border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] hover:border-[#262262]">
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <div className="text-[#da1c5c]">
                  <img src="/lunaratechIcon.png" alt="Portfolio Showcase" className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">Portfolio Showcase</h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-grow">Display your work, projects, and achievements in a stunning portfolio format that showcases your expertise and attracts opportunities.</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>

            <div className="group relative flex h-full flex-col rounded-xl border-2 border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] hover:border-[#262262]">
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <div className="text-[#da1c5c]">
                  <img src="/lunaratechIcon.png" alt="Contact Integration" className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">Contact Integration</h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-grow">Easy ways for potential clients and collaborators to reach you directly through your website with professional contact forms.</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>

            <div className="group relative flex h-full flex-col rounded-xl border-2 border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] hover:border-[#262262]">
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <div className="text-[#da1c5c]">
                  <img src="/lunaratechIcon.png" alt="Social Integration" className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">Social Integration</h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-grow">Connect your social media profiles and showcase your online presence across platforms for maximum visibility.</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>
          </div>

          {/* Secondary Features - AboutCard Style with Colors */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="group relative flex h-full flex-col rounded-2xl border-2 bg-gradient-to-br p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] from-indigo-500/15 to-indigo-500/5 border-indigo-500/20 hover:shadow-indigo-500/20 hover:border-indigo-500/40">
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-4">Blog Platform</h3>
              <p className="text-sm text-gray-700 leading-relaxed flex-grow">Share your thoughts, expertise, and insights through a professional blog that establishes you as a thought leader.</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border-2 bg-gradient-to-br p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] from-emerald-500/15 to-emerald-500/5 border-emerald-500/20 hover:shadow-emerald-500/20 hover:border-emerald-500/40">
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-4">Resume Integration</h3>
              <p className="text-sm text-gray-700 leading-relaxed flex-grow">Showcase your professional experience, skills, and achievements with an integrated resume section.</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border-2 bg-gradient-to-br p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] from-pink-500/15 to-pink-500/5 border-pink-500/20 hover:shadow-pink-500/20 hover:border-pink-500/40">
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-4">Testimonials</h3>
              <p className="text-sm text-gray-700 leading-relaxed flex-grow">Display client reviews, recommendations, and endorsements to build credibility and trust with potential clients.</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>
          </div>

        </div>
      </section>

      {/* Why Personal Websites Matter Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Personal Websites Are Essential
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In today's digital-first world, your personal website is your most powerful tool for building authority and growing your influence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#262262] to-[#262262]/80 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <img src="/lunaratechIcon.png" alt="LunaraTech" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Professional Credibility</h3>
              <p className="text-white/90 leading-relaxed">
                A well-designed personal website instantly establishes your professional credibility. 
                It shows you're serious about your craft and willing to invest in your personal brand. 
                Clients and collaborators will trust you more when they can see your work presented professionally.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#70CBD0] to-[#70CBD0]/80 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <img src="/lunaratechIcon.png" alt="LunaraTech" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Control Your Narrative</h3>
              <p className="text-white/90 leading-relaxed">
                Unlike social media platforms where algorithms control who sees your content, 
                your personal website gives you complete control over your message and presentation. 
                You own the platform and can showcase exactly what you want, when you want.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#da1c5c] to-[#da1c5c]/80 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <img src="/lunaratechIcon.png" alt="LunaraTech" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">SEO Benefits</h3>
              <p className="text-white/90 leading-relaxed">
                When people search for your name or expertise, your personal website will appear 
                in search results. This helps you build authority in your field and makes it easier 
                for potential clients and opportunities to find you organically.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#FFB700] to-[#FFB700]/80 rounded-2xl p-8 shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">The Personal Brand Advantage</h3>
              <p className="text-lg text-white/90 leading-relaxed max-w-4xl mx-auto">
                Personal websites aren't just for freelancers and entrepreneurs. Whether you're a consultant, 
                creative professional, thought leader, or simply want to establish your digital presence, 
                a personal website gives you the platform to share your story, showcase your expertise, 
                and connect with your audience on your own terms. It's an investment in your future that 
                pays dividends in credibility, opportunities, and professional growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Brand Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Personal Websites Drive Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Personal websites provide unique advantages that social media and other platforms simply cannot match.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Control</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Complete Ownership</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">You own your platform completely. No algorithm changes, no platform restrictions, and no risk of losing your audience due to policy changes.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Credibility</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Professional Authority</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">A personal website instantly establishes your professional credibility and positions you as an expert in your field.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Growth</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">SEO Benefits</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Your personal website helps you rank in search results for your name and expertise, making you more discoverable to potential clients and opportunities.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Personal Website Design Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We take a strategic approach to personal website design, ensuring every element supports your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Step 01</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Discovery & Strategy</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Understanding your goals, target audience, and unique value proposition to ensure your website speaks directly to the right people.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Step 02</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Content Planning</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Organizing your content, from your story and expertise to your portfolio and reviews, creating a compelling narrative that builds trust.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Step 03</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Design & Development</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Creating a beautiful, responsive design that reflects your personality while maintaining professional standards and optimal user experience.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Step 04</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Launch & Optimize</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Handling the technical setup, SEO optimization, and providing training so you can easily update your content and grow your online presence.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build Your Personal Brand?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Get a professional personal website that showcases your expertise and grows your influence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
            </Link>
            <Link 
              to="tel:+15074003910" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
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

export default PersonalWebsiteDesign;
