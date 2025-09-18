import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const EducationWebsiteDesign = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  const educationwebsitedesignStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Education Website Design - School & Learning Websites",
    "description": "Enhance learning with professional education website design. Student portals, course catalogs, enrollment systems, and educational content management.",
    "provider": {
        "@type": "Organization",
        "name": "LunaraTech",
        "url": "https://lunaratech.com"
    },
    "serviceType": "Education Website Design",
    "areaServed": "United States",
    "url": "https://lunaratech.com/education-website-design"
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5">
      <SEOHead 
        title="Education Website Design - School & Learning Websites"
        description="Enhance learning with professional education website design. Student portals, course catalogs, enrollment systems, and educational content management."
        keywords="education website design, school website, educational institution website, learning management system, student portal, course catalog, education technology"
        canonicalUrl="https://lunaratech.com/education-website-design"
        structuredData={educationwebsitedesignStructuredData}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8">
              Education Specialists
            </div>
            <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Enhance <span className="text-blue-600">Learning</span> with a <span className="text-indigo-600">Professional Education Website</span>
            </h1>
            <p className="text-2xl text-gray-600 mb-12 leading-relaxed">
              Create an engaging online presence for your school, university, or e-learning platform that connects with students and parents.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-10 py-5 bg-blue-600 text-white font-bold text-lg rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
              >
                Create Education Site
                <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                to="tel:+15074003910" 
                className="inline-flex items-center px-10 py-5 border-2 border-blue-600 text-blue-600 font-bold text-lg rounded-xl hover:bg-blue-50 transition-all duration-300"
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Education Website Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tools designed for educational excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Courses</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Course Management</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Organize courses, schedules, and educational content effectively for seamless learning experiences.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Portal</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Student Portal</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Secure student access to grades, assignments, and resources for enhanced learning management.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Grades</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Grade Management</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Secure grade posting, progress tracking, and academic performance analytics for students and parents.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Educational Impact Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Power of Educational Websites
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern educational institutions need websites that engage students, inform parents, and showcase academic excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#262262] to-[#262262]/80 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <img src="/lunaratechIcon.png" alt="LunaraTech" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Student Engagement</h3>
              <p className="text-white/90 leading-relaxed">
                Interactive features like student portals, assignment tracking, and grade access 
                keep students engaged and informed. Modern students expect digital-first experiences 
                that make learning more accessible and convenient.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#70CBD0] to-[#70CBD0]/80 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <img src="/lunaratechIcon.png" alt="LunaraTech" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Parent Communication</h3>
              <p className="text-white/90 leading-relaxed">
                Keep parents informed with real-time updates, event calendars, and progress reports. 
                A well-designed education website builds trust and keeps families connected to 
                their child's educational journey.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#da1c5c] to-[#da1c5c]/80 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <img src="/lunaratechIcon.png" alt="LunaraTech" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Administrative Efficiency</h3>
              <p className="text-white/90 leading-relaxed">
                Streamline enrollment, course management, and communication with integrated systems. 
                Reduce administrative workload while improving the experience for students, parents, and staff.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Educational Excellence in the Digital Age</h3>
              <p className="text-lg leading-relaxed max-w-4xl mx-auto">
                Today's educational institutions face unique challenges: engaging digital-native students, 
                meeting parent expectations for transparency, and maintaining academic standards while 
                embracing technology. A professional education website addresses all these needs while 
                showcasing your institution's values, achievements, and commitment to student success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Technology Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Educational Technology Advantages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern educational websites provide powerful tools that enhance learning, communication, and administrative efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Engagement</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Student Engagement</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Interactive features and digital tools keep students engaged and motivated to learn, improving academic outcomes and retention rates.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Communication</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Parent Communication</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Real-time updates and transparent communication keep parents informed and involved in their child's educational journey.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Efficiency</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Administrative Efficiency</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Streamlined processes and automated systems reduce administrative workload while improving accuracy and response times.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Educational Technology Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Educational Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our education websites include everything you need to manage, engage, and grow your institution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Student Tools</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Student Portals</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Secure access to grades, assignments, schedules, and academic resources with real-time updates and progress tracking.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Course Management</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Course Catalogs</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Interactive course listings with descriptions, prerequisites, and enrollment options for seamless academic planning.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0]">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">Administration</div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">Enrollment Management</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Streamlined enrollment processes with online applications, document submission, and automated workflows.</p>
              <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Enhance Your Education Platform?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a professional education website that engages students and parents.
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

export default EducationWebsiteDesign;
