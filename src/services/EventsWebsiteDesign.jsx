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

const Calendar = () => (
  <Icon>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
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

const Ticket = () => (
  <Icon>
    <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2z"/>
    <path d="M13 5v2"/>
    <path d="M13 17v2"/>
    <path d="M13 11v2"/>
  </Icon>
);

const Mic = () => (
  <Icon>
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
    <line x1="12" y1="19" x2="12" y2="23"/>
    <line x1="8" y1="23" x2="16" y2="23"/>
  </Icon>
);

const Camera = () => (
  <Icon>
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
    <circle cx="12" cy="13" r="3"/>
  </Icon>
);

const Phone = () => (
  <Icon>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </Icon>
);

const EventsWebsiteDesign = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  const eventswebsitedesignStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Events Website Design - Event Planning & Management",
    "description": "Create memorable events with professional event website design. Event registration, ticketing systems, venue showcases, and event management solutions.",
    "provider": {
        "@type": "Organization",
        "name": "LunaraTech",
        "url": "https://lunaratech.com"
    },
    "serviceType": "Events Website Design",
    "areaServed": "United States",
    "url": "https://lunaratech.com/events-website-design"
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5">
      <SEOHead 
        title="Events Website Design - Event Planning & Management"
        description="Create memorable events with professional event website design. Event registration, ticketing systems, venue showcases, and event management solutions."
        keywords="event website design, event planning website, wedding website, conference website, event management, event registration, ticketing system, event marketing"
        canonicalUrl="https://lunaratech.com/events-website-design"
        structuredData={eventswebsitedesignStructuredData}
      />
      <Header />
      
      {/* SEO Meta Content */}
      <div className="sr-only">
        <h1>Event Website Design Services | Conference & Event Websites</h1>
        <p>Create stunning event websites that build excitement and drive registrations. Professional event website design with online registration, speaker profiles, and live streaming integration. Make your events unforgettable with our custom event website solutions.</p>
        <h2>Event Website Features</h2>
        <ul>
          <li>Online event registration and ticket sales</li>
          <li>Speaker profiles and session schedules</li>
          <li>Event calendar and timeline management</li>
          <li>Live streaming and virtual event integration</li>
          <li>Mobile-optimized design for event attendees</li>
          <li>Social media integration and sharing</li>
          <li>Event updates and notifications</li>
          <li>Sponsor and exhibitor showcase</li>
        </ul>
        <h2>Why Choose Our Event Website Design</h2>
        <p>We specialize in creating engaging event websites that build excitement and drive registrations. From conferences to weddings, we design websites that make your events memorable and successful.</p>
      </div>
      
      {/* Hero Section - Event Industry Focus */}
      <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-100 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-purple-100/20"></div>
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium">
                  Event Specialists
                </div>
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                  Create <span className="text-purple-600">Unforgettable Events</span> with <span className="text-pink-600">Stunning Websites</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Build excitement, manage registrations, and create memorable experiences with a professional event website that engages attendees and drives ticket sales.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors shadow-lg"
                >
                  Create Event Site
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link 
                  to="tel:+15074003910" 
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors"
                >
                  <Phone className="mr-2" />
                  Call (507) 400-3910
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-4">
                  <div className="h-32 bg-gradient-to-br from-purple-200 to-pink-300 rounded-lg flex items-center justify-center">
                    <span className="text-purple-700 font-semibold text-lg">Event Registration</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-16 bg-gradient-to-br from-pink-200 to-purple-200 rounded"></div>
                    <div className="h-16 bg-gradient-to-br from-indigo-200 to-purple-200 rounded"></div>
                  </div>
                  <div className="bg-purple-600 text-white p-3 rounded-lg text-center font-semibold">
                    Register Now
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-pink-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Event Website Features
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Create unforgettable events with our comprehensive event website solutions. From seamless registration 
              to stunning galleries, we provide everything you need to drive attendance, build excitement, and 
              create lasting memories for your attendees.
            </p>
          </div>

          {/* Primary Features - ServiceCard Style */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="group relative flex h-full flex-col rounded-xl border-2 border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] hover:border-[#262262]">
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <div className="text-[#da1c5c]">
                  <img src="/lunaratechIcon.png" alt="Event Registration" className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">Event Registration</h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-grow">Seamless online registration with ticket sales, attendee management, and payment processing. Increase registrations with our proven system.</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>

            <div className="group relative flex h-full flex-col rounded-xl border-2 border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] hover:border-[#262262]">
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <div className="text-[#da1c5c]">
                  <img src="/lunaratechIcon.png" alt="Speaker Showcase" className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">Speaker Showcase</h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-grow">Professional speaker profiles, bios, and presentation schedules that build credibility and attract high-quality attendees.</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>

            <div className="group relative flex h-full flex-col rounded-xl border-2 border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] hover:border-[#262262]">
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <div className="text-[#da1c5c]">
                  <img src="/lunaratechIcon.png" alt="Event Calendar" className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">Event Calendar</h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-grow">Interactive calendar with event schedules, venue information, and real-time updates to keep attendees informed and engaged.</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>
          </div>

          {/* Secondary Features - AboutCard Style with Colors */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="group relative flex h-full flex-col rounded-2xl border-2 bg-gradient-to-br p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] from-purple-500/15 to-purple-500/5 border-purple-500/20 hover:shadow-purple-500/20 hover:border-purple-500/40">
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-4">Live Streaming</h3>
              <p className="text-sm text-gray-700 leading-relaxed flex-grow">Integrate live streaming and virtual event capabilities for hybrid experiences that reach more attendees worldwide.</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border-2 bg-gradient-to-br p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] from-blue-500/15 to-blue-500/5 border-blue-500/20 hover:shadow-blue-500/20 hover:border-blue-500/40">
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-4">Social Integration</h3>
              <p className="text-sm text-gray-700 leading-relaxed flex-grow">Connect social media feeds, enable easy sharing, and maximize event visibility across all platforms for maximum reach.</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>

            <div className="group relative flex h-full flex-col rounded-2xl border-2 bg-gradient-to-br p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] from-green-500/15 to-green-500/5 border-green-500/20 hover:shadow-green-500/20 hover:border-green-500/40">
              <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-4">Photo Gallery</h3>
              <p className="text-sm text-gray-700 leading-relaxed flex-grow">Stunning photo galleries showcasing past events, creating excitement and demonstrating the quality of your event experiences.</p>
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-pink-600">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Create Unforgettable Events?
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Get a professional event website that builds excitement and drives registrations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
            </Link>
            <Link 
              to="tel:+15074003910" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors"
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

export default EventsWebsiteDesign;
