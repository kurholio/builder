import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    message: ''
  });

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      website: '',
      message: ''
    });
    setSent(false);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // EmailJS configuration - Replace these with your actual values from EmailJS dashboard
      const serviceId = 'service_email_malkazevka'; // Get from EmailJS → Services → Your Gmail service
      const templateId = 'template_7tqsqw9'; // Get from EmailJS → Email Templates → Your template
      const publicKey = 'zVz2a3ivQo6s7kZ47'; // Get from EmailJS → Account → General

      // Send email
      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        website: formData.website,
        message: formData.message,
        to_email: 'malkazevka@gmail.com',
        reply_to: formData.email
      }, publicKey);

    setSent(true);
    } catch (error) {
      console.error('Error sending email:', error);
      console.error('Error details:', {
        serviceId,
        templateId,
        publicKey: publicKey.substring(0, 8) + '...',
        error: error.message || error
      });
      alert(`Sorry, there was an error sending your message: ${error.message || 'Unknown error'}. Please try again or email us directly at malkazevka@gmail.com`);
    } finally {
      setLoading(false);
    }
  };

  // Input and Textarea components
  const Input = (props) => (
    <input {...props} className={`w-full rounded-xl border-2 border-gray-200 bg-white/80 backdrop-blur-sm px-5 py-4 text-sm text-gray-900 placeholder:text-gray-500 shadow-sm transition-all duration-300 focus:border-[#da1c5c] focus:outline-none focus:ring-4 focus:ring-[#da1c5c]/20 focus:bg-white hover:border-gray-300 hover:shadow-md ${props.className||''}`} />
  );

  const Textarea = (props) => (
    <textarea {...props} className={`w-full rounded-xl border-2 border-gray-200 bg-white/80 backdrop-blur-sm px-5 py-4 text-sm text-gray-900 placeholder:text-gray-500 shadow-sm transition-all duration-300 focus:border-[#da1c5c] focus:outline-none focus:ring-4 focus:ring-[#da1c5c]/20 focus:bg-white hover:border-gray-300 hover:shadow-md resize-none ${props.className||''}`} />
  );

  const Arrow = () => (<svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>);

  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact LunaraTech",
    "description": "Get in touch with LunaraTech for professional website development, e-commerce solutions, and digital marketing services. Free consultation and quote available.",
    "url": "https://lunaratech.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "LunaraTech",
      "url": "https://lunaratech.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-507-400-3910",
        "contactType": "customer service",
        "availableLanguage": "English"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5">
      <SEOHead 
        title="Contact Us - Get Your Free Website Quote"
        description="Ready to transform your business? Contact LunaraTech for professional website development, e-commerce solutions, and digital marketing. Get your free consultation and quote today!"
        keywords="contact web developer, website quote, free consultation, web development services, digital marketing consultation, business website design, e-commerce development, professional web services"
        canonicalUrl="https://lunaratech.com/contact"
        structuredData={contactStructuredData}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-8 overflow-visible">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#262262] mb-6 pb-8" style={{ lineHeight: '1.2' }}>
              Let's Build Something
              <span className="block bg-gradient-to-r from-[#da1c5c] to-[#FFB700] bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your digital presence? Get in touch and let's discuss how we can help your business grow with a stunning, high-converting website.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-[#262262]">Send us a Message</h2>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
              
              {!sent ? (
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name" 
                      required 
                    />
                    <Input 
                      name="email"
                      type="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email" 
                      required 
                    />
                  </div>
                  <Input 
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company / Organization" 
                  />
                  <Input 
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="Website (optional)" 
                  />
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5} 
                    placeholder="What are you building?" 
                    required 
                  />
                  <div className="flex items-center justify-center">
                    <div className="flex gap-3">
                      <button 
                        type="button"
                        onClick={resetForm}
                        className="rounded-xl border-2 border-gray-300 bg-white/80 backdrop-blur-sm px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-400 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                      >
                        Clear
                      </button>
                      <button 
                        type="submit" 
                        disabled={loading}
                        className="rounded-xl bg-gradient-to-r from-[#da1c5c] to-[#c01a52] px-8 py-3 text-sm font-medium text-white shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:scale-100"
                      >
                        {loading ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Sending...
                          </div>
                        ) : (
                          'Submit'
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="text-center space-y-2">
                    <p className="text-xs text-gray-500">Prefer to call? <a className="underline" href="tel:+15074003910">(507) 400-3910</a></p>
                    <p className="text-xs text-gray-500">
                      We usually respond within a day
                    </p>
                  </div>
                </form>
              ) : (
                <div className="text-center flex flex-col h-full">
                  <div className="flex-grow">
                    <img src="/lunaratechIcon.png" alt="LunaraTech Icon" className="mx-auto mb-6 h-16 w-16 animate-pulse"/>
                    <h3 className="text-2xl font-bold text-[#262262] mb-3">Message Sent Successfully!</h3>
                    <p className="text-gray-600 mb-6">Thanks for reaching out! We'll review your project details and get back to you within 24 hours.</p>
                    <div className="bg-gradient-to-r from-[#70CBD0]/10 to-[#FFB700]/10 rounded-xl p-4 mb-6 text-center">
                      <p className="text-sm text-gray-700 mb-2">Want to talk now?</p>
                      <a className="inline-flex items-center gap-2 text-[#da1c5c] hover:text-[#c01a52] font-medium justify-center" href="tel:+15074003910">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        (507) 400-3910
                      </a>
                    </div>
                  </div>
                  <Link to="/" className="inline-flex items-center gap-2 rounded-xl border-2 border-[#262262] bg-white px-6 py-3 text-sm font-medium text-[#262262] hover:border-[#1a1a4a] hover:bg-[#f8f9ff] hover:-translate-y-1 transition-all duration-300 mt-auto mx-auto">
                    <Arrow/> Back to home
                  </Link>
                </div>
              )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#262262] mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Quick answers to common questions about our services</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#262262] mb-2">How long does a typical project take?</h3>
              <p className="text-gray-600">Most projects are completed within 2-4 weeks, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#262262] mb-2">Do you provide ongoing support?</h3>
              <p className="text-gray-600">Yes! We offer comprehensive maintenance and support packages to keep your website running smoothly and up-to-date.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#262262] mb-2">What's included in the free consultation?</h3>
              <p className="text-gray-600">We'll discuss your project goals, review your current setup, provide recommendations, and give you a detailed project proposal with timeline and pricing.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#262262] mb-2">Do you work with small businesses?</h3>
              <p className="text-gray-600">Absolutely! We work with businesses of all sizes, from startups to enterprise companies. We tailor our services to fit your specific needs and budget.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
