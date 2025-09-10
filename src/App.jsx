import React, { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';

// Single-file, preview-ready React landing page
// Theme: clean, airy, white with soft accents
// Tailwind is available by default in this environment
// Icons: inline SVG (black & white, lightweight, fully scalable)

// Animated Background Component
const AnimatedBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById('animated-bg');
    if (!canvas) {
      return;
    }
    
    const ctx = canvas.getContext('2d');
    let animationId;
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Simple visible animation
    let time = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw moving circles
      for (let i = 0; i < 20; i++) {
        const x = (canvas.width / 2) + Math.cos(time + i * 0.5) * 100;
        const y = (canvas.height / 2) + Math.sin(time + i * 0.3) * 80;
        const size = 5 + Math.sin(time + i) * 3;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${0.3 + Math.sin(time + i) * 0.2})`; // Blue with varying opacity
        ctx.fill();
      }
      
      time += 0.02;
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas
      id="animated-bg"
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

// Floating Geometric Pattern Overlay
const FloatingPattern = () => {
  useEffect(() => {
    const canvas = document.getElementById('floating-pattern');
    if (!canvas) {
      return;
    }
    
    const ctx = canvas.getContext('2d');
    let animationId;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Simple floating shapes
    let time = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw floating triangles
      for (let i = 0; i < 8; i++) {
        const x = (canvas.width / 4) + Math.cos(time + i * 0.8) * 150;
        const y = (canvas.height / 4) + Math.sin(time + i * 0.6) * 120;
        const size = 15 + Math.sin(time + i * 0.5) * 8;
        
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(time + i * 0.3);
        
        ctx.beginPath();
        ctx.moveTo(0, -size);
        ctx.lineTo(size * 0.866, size * 0.5);
        ctx.lineTo(-size * 0.866, size * 0.5);
        ctx.closePath();
        ctx.strokeStyle = `rgba(147, 51, 234, ${0.4 + Math.sin(time + i) * 0.2})`; // Purple with varying opacity
        ctx.lineWidth = 2;
        ctx.stroke();
        
        ctx.restore();
      }
      
      time += 0.015;
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas
      id="floating-pattern"
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm shadow-sm">
    {children}
  </span>
);

// Generic icon wrapper
const Icon = ({ children }) => (
  <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

// Small UI glyphs
const Check = () => (
  <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
);
const Star = () => (<svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4"><path d="M12 2l3.09 6.26L22 9.27l-5 4.88L18.18 22 12 18.56 5.82 22 7 14.15l-5-4.88 6.91-1.01z" fill="currentColor"/></svg>);
const Arrow = () => (<svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>);

// Industry icon set (lightweight B/W inline SVGs)
const Faucet = () => (
  <Icon>
    <path d="M4 14h10a4 4 0 0 0 4-4V8M8 14v4M6 18h4M18 8h2a2 2 0 1 1 0 4h-2"/>
    <path d="M12 6h2v2h-2z"/>
  </Icon>
);
const Leaf = () => (
  <Icon>
    <path d="M3 21c6-2 10-6 12-12 2-6 6-6 6-6s0 4-6 6c-6 2-10 6-12 12Z"/>
  </Icon>
);
const Heart = () => (
  <Icon>
    <path d="M20.8 8.6a5.5 5.5 0 0 0-9.8-3.6 5.5 5.5 0 1 0-7.8 7.8L11 20l7.8-7.8a5.5 5.5 0 0 0 2-3.6Z"/>
  </Icon>
);
const Cart = () => (
  <Icon>
    <circle cx="9" cy="20" r="1"/><circle cx="17" cy="20" r="1"/>
    <path d="M3 4h2l2 12h11l2-8H6"/>
  </Icon>
);
const Hammer = () => (
  <Icon>
    <path d="M14 4l6 6"/><path d="M9 15l5-5 2 2-5 5z"/><path d="M3 21l6-6"/>
  </Icon>
);
const Utensils = () => (
  <Icon>
    <path d="M4 3v7a2 2 0 0 0 2 2v9"/>
    <path d="M10 3v7a2 2 0 0 1-2 2"/>
    <path d="M14 3h2a3 3 0 0 1 3 3v15"/>
  </Icon>
);
const HomeIco = () => (
  <Icon>
    <path d="M3 10l9-7 9 7"/><path d="M9 22V12h6v10"/>
  </Icon>
);
const HandHeart = () => (
  <Icon>
    <path d="M12 8c-1.5-3-6-2.5-6 1 0 2 2 3.5 6 7 4-3.5 6-5 6-7 0-3.5-4.5-4-6-1Z"/>
    <path d="M3 18h7l2 3 2-3h7"/>
  </Icon>
);
const Book = () => (
  <Icon>
    <path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20"/>
    <path d="M20 2H6.5A2.5 2.5 0 0 0 4 4.5v15"/>
  </Icon>
);
const Calendar = () => (
  <Icon>
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <path d="M16 2v4M8 2v4M3 10h18"/>
  </Icon>
);
const UserIco = () => (
  <Icon>
    <circle cx="12" cy="8" r="4"/><path d="M4 22a8 8 0 0 1 16 0"/>
  </Icon>
);
const Sparkles = () => (
  <Icon>
    <path d="M12 3l1.5 3 3 1.5-3 1.5-1.5 3-1.5-3L7 7.5 10 6z"/>
    <path d="M18 13l.8 1.6L20 15l-1.2.4L18 17l-.8-1.6L16 15l1.2-.4z"/>
  </Icon>
);

const Stat = ({ value, label, className }) => (
  <div className={`rounded-2xl border-2 p-6 text-center shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:scale-105 ${className || 'bg-white border-gray-200'}`}>
    <div className="text-4xl font-bold tracking-tight transition-all duration-300 hover:text-[#262262] animate-pulse-slow">{value}</div>
    <div className="mt-2 text-sm text-gray-600 leading-tight" dangerouslySetInnerHTML={{ __html: label }} />
  </div>
);

const SectionHeader = ({ eyebrow, title, subtitle, id }) => (
  <div className="mx-auto max-w-3xl text-center" id={id}>
    {eyebrow && (
      <div className="mb-3 inline-block rounded-lg border border-gray-200 bg-white px-3 py-1 text-xs uppercase tracking-wide text-gray-600">
        {eyebrow}
      </div>
    )}
    <h2 className="text-3xl font-semibold tracking-tight text-[#262262] sm:text-4xl">{title}</h2>
    {subtitle && (
      <p className="mt-3 text-gray-600">{subtitle}</p>
    )}
  </div>
);

// Value Props Cards - Gradient with brand colors
const ValueCard = ({ title, children, icon, className, color }) => {
  const colorClasses = {
    fuschia: "from-[#da1c5c]/10 to-[#da1c5c]/5 border-[#da1c5c]/20 hover:shadow-[#da1c5c]/20",
    navy: "from-[#262262]/10 to-[#262262]/5 border-[#262262]/20 hover:shadow-[#262262]/20", 
    gold: "from-[#FFB700]/10 to-[#FFB700]/5 border-[#FFB700]/20 hover:shadow-[#FFB700]/20"
  };
  
  return (
    <div className={`group relative flex h-full flex-col rounded-2xl border-2 bg-gradient-to-br p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] ${colorClasses[color]} ${className || ''}`}>
      <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#262262]">{title}</h3>
      <p className="mt-3 text-gray-700 leading-relaxed">{children}</p>
      <div className="mt-6 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
    </div>
  );
};

// Services Cards - Clean with accent borders
const ServiceCard = ({ title, children, icon, className }) => (
  <div className={`group relative flex h-full flex-col rounded-xl border-2 border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] hover:border-[#262262] ${className || ''}`}>
    <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">{title}</h3>
    <p className="mt-2 text-sm text-gray-600 leading-relaxed flex-grow">{children}</p>
    <div className="mt-4 flex items-center text-[#FFB700] font-medium text-sm group-hover:text-[#da1c5c] transition-colors duration-300">
      Learn more →
    </div>
  </div>
);

// Niche Cards - Modern with brand accents
const NicheCard = ({ title, children, icon, className }) => (
  <div className={`group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0] ${className || ''}`}>
    <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">{title}</h3>
    <p className="mt-2 text-sm text-gray-600 leading-relaxed">{children}</p>
    <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
  </div>
);

// Process Cards - Clean design with new color
const ProcessCard = ({ title, children, step, className }) => (
  <div className={`group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0] ${className || ''}`}>
    <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">{step}</div>
    <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">{title}</h3>
    <p className="mt-2 text-sm text-gray-600 leading-relaxed">{children}</p>
    <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
  </div>
);

// About Section Cards - Slick and modern with brand colors
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

// Legacy Card for backward compatibility
const Card = ({ title, children, icon, className }) => (
  <div className={`group relative flex h-full flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] ${className || ''}`}>
    <div className="mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-gray-700">{title}</h3>
    <p className="mt-2 text-sm text-gray-600 leading-relaxed">{children}</p>
    <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent transition-all duration-300 group-hover:from-transparent group-hover:via-gray-400 group-hover:to-transparent" />
  </div>
);

const Input = (props) => (
  <input {...props} className={`w-full rounded-xl border-2 border-gray-200 bg-white/80 backdrop-blur-sm px-5 py-4 text-sm text-gray-900 placeholder:text-gray-500 shadow-sm transition-all duration-300 focus:border-[#da1c5c] focus:outline-none focus:ring-4 focus:ring-[#da1c5c]/20 focus:bg-white hover:border-gray-300 hover:shadow-md ${props.className||''}`} />
);

const Textarea = (props) => (
  <textarea {...props} className={`w-full rounded-xl border-2 border-gray-200 bg-white/80 backdrop-blur-sm px-5 py-4 text-sm text-gray-900 placeholder:text-gray-500 shadow-sm transition-all duration-300 focus:border-[#da1c5c] focus:outline-none focus:ring-4 focus:ring-[#da1c5c]/20 focus:bg-white hover:border-gray-300 hover:shadow-md resize-none ${props.className||''}`} />
);

export default function App() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Form field ${name} changed to:`, value);
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

  // Add custom CSS animations
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
      @keyframes slideInLeft {
        from { opacity: 0; transform: translateX(-30px); }
        to { opacity: 1; transform: translateX(0); }
      }
      @keyframes slideInRight {
        from { opacity: 0; transform: translateX(30px); }
        to { opacity: 1; transform: translateX(0); }
      }
      @keyframes gentleBounce {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-8px); }
      }
      .animate-fade-in {
        animation: fadeIn 1s ease-out;
      }
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      .animate-pulse-slow {
        animation: pulse 2s ease-in-out infinite;
      }
      .animate-gentle-bounce {
        animation: gentleBounce 2s ease-in-out infinite;
      }
      .animate-slide-in-left {
        animation: slideInLeft 0.8s ease-out;
      }
      .animate-slide-in-right {
        animation: slideInRight 0.8s ease-out;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#niches", label: "Niches" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#process", label: "Process" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <AnimatedBackground />
      <FloatingPattern />
      <main className="min-h-screen bg-white/95 backdrop-blur-sm text-gray-900 relative z-10">
        {/* Top nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/90 border-b border-gray-100">
        <div className="mx-auto flex max-w-7xl items-start justify-between px-4 py-3 sm:py-4">
          <a href="#home" className="flex items-center">
            <img 
              src="/lunaratechLogo.png" 
              alt="LunaraTech Logo" 
              className="h-12 w-auto"
            />
          </a>
          <nav className="hidden gap-6 text-sm text-gray-700 sm:flex mt-5">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-gray-900">{n.label}</a>
            ))}
          </nav>
          <a href="#contact" className="hidden rounded-md bg-[#FFB700] px-4 py-2 text-sm font-medium text-gray-900 hover:bg-[#e6a038] transition-all duration-300 sm:inline-flex mt-2">Get Quote</a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            
            <h1 className="mt-15 text-4xl font-semibold tracking-tight text-[#262262] sm:text-6xl animate-pulse">Turn vision into velocity</h1>
            <p className="mx-auto mt-10 max-w-2xl text-gray-600 animate-fade-in">We craft clean code, bold design, and real connections. From idea to launch, we build experiences that scale, convert, and feel great to use.</p>
            
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a href="#contact" className="rounded-md bg-[#da1c5c] px-6 py-3 text-sm font-medium text-white hover:bg-[#c01a52] transition-all duration-300 hover:scale-105 ">Start a Project</a>
              <a href="#services" className="rounded-md border border-[#262262] bg-white px-6 py-3 text-sm font-medium text-[#262262] hover:border-[#1a1a4a] hover:bg-[#f8f9ff] transition-all duration-300 hover:scale-105">What we do</a>
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="border-y border-gray-100 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-16 sm:grid-cols-3">
          <ValueCard title="Clean Code" icon={<img src="/lunaratechIcon.png" alt="LunaraTech Icon" className="h-12 w-12"/>} color="fuschia" className="animate-float" style={{animationDelay: '0s'}}>We write code that's readable, maintainable, and built to scale — ensuring smooth development and long-term stability.</ValueCard>
          <ValueCard title="Bold Design" icon={<img src="/lunaratechIcon.png" alt="LunaraTech Icon" className="h-12 w-12"/>} color="navy" className="animate-float" style={{animationDelay: '1s'}}>Modern, intuitive, and tailored to create lasting impressions across devices and contexts.</ValueCard>
          <ValueCard title="Real Connection" icon={<img src="/lunaratechIcon.png" alt="LunaraTech Icon" className="h-12 w-12"/>} color="gold" className="animate-float" style={{animationDelay: '2s'}}>Genuine collaboration that turns your ideas into digital experiences people love.</ValueCard>
        </div>
      </section>

      {/* Niches */}
      <section className="px-4 py-16 sm:py-20" id="niches">
        <SectionHeader
          eyebrow=""
          title="Niches that work for your world"
          subtitle="We tailor strategy, design, and technology to your industry — built to perform and evolve."
        />
        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {t:"Plumbing", d:"Fast, functional sites with service highlights, testimonials, and simple booking.", icon:<Faucet/>},
            {t:"Landscaping", d:"Showcase projects with beautiful, responsive portfolios for outdoor services.", icon:<Leaf/>},
            {t:"Wellness", d:"Calm design, booking systems, and storytelling that builds trust.", icon:<Heart/>},
            {t:"eCommerce", d:"Scalable stores with streamlined navigation, secure checkout, and conversion-focused UX.", icon:<Cart/>},
            {t:"Contractors", d:"Lead-driving sites that highlight expertise and portfolios.", icon:<Hammer/>},
            {t:"Restaurants", d:"Menus, reservations, delivery integrations — sites that whet appetites.", icon:<Utensils/>},
            {t:"Real Estate", d:"Custom listings, MLS integrations, and smart lead capture.", icon:<HomeIco/>},
            {t:"Nonprofit", d:"Donation tools, volunteer signups, and compelling impact visuals.", icon:<HandHeart/>},
            {t:"Education", d:"Websites for schools and e-learning with scheduling and content delivery.", icon:<Book/>},
            {t:"Events", d:"Speaker bios, registration, schedules, and live-stream integrations.", icon:<Calendar/>},
            {t:"Personal", d:"Creators, coaches, influencers — elevate your brand and grow your audience.", icon:<UserIco/>},
            {t:"Custom", d:"Have a unique vision? We’ll build it from the ground up for your goals.", icon:<Sparkles/>},
          ].map((i, index)=> (
            <NicheCard key={i.t} title={i.t} icon={i.icon} className="animate-float" style={{animationDelay: `${index * 0.1}s`}}>{i.d}</NicheCard>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-gray-100 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 px-4 py-16 sm:py-20" id="services">
        <SectionHeader
          eyebrow=""
          title="From concept to launch — and beyond"
          subtitle="Design, development, hosting, and ongoing support for a seamless digital experience."
        />
        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard title="Website Development" icon={<Check/>}>Fast, scalable, user-friendly websites using modern frameworks — crafted to meet your goals and delight users.</ServiceCard>
          <ServiceCard title="UI Prototyping" icon={<Check/>}>Interactive wireframes and prototypes to validate flows and align stakeholders before build.</ServiceCard>
          <ServiceCard title="Graphic Design" icon={<Check/>}>Pixel-perfect UI aligned to your brand for a consistent, engaging experience.</ServiceCard>
          <ServiceCard title="Hosting & Deployment" icon={<Check/>}>Secure, scalable hosting and smooth deployments — your site stays fast and reliable.</ServiceCard>
          <ServiceCard title="Maintenance & Support" icon={<Check/>}>Reliable updates, monitoring, and feature rollouts to keep you growing.</ServiceCard>
          <ServiceCard title="Accessibility" icon={<Check/>}>WCAG/ADA-minded design for inclusivity, compliance, and better UX for everyone.</ServiceCard>
        </div>
      </section>

      {/* About */}
      <section className="px-4 py-16 sm:py-20" id="about">
        <SectionHeader
          eyebrow=""
          title="Who we are"
          subtitle="A family-run boutique. Less boardroom, more creative kitchen table — with better snacks."
        />
        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2 items-stretch">
          <div className="flex flex-col gap-6 h-full">
            {/* Team Image */}
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/niks1.png" 
                alt="LunaraTech Team" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            
            {/* Main Content Card */}
            <div className="rounded-2xl border border-[#262262]/20 bg-gradient-to-br from-[#262262]/5 to-[#da1c5c]/5 p-6 shadow-lg flex-grow">
            <p className="text-gray-700 leading-relaxed">
              Our small but mighty team blends software development, graphic design, and marketing into a digital 
                Swiss Army knife. We're the folks who actually build your product — no hand-offs, no support queues,
               and definitely no "it works on my machine" excuses. 
            </p>
           
            <div className="mt-8 grid grid-cols-3 gap-3">
              <div className="animate-gentle-bounce" style={{animationDelay: '0s', animationDuration: '2s', animationIterationCount: 'infinite'}}>
                <Stat className ="pl-0 pr-0 bg-gradient-to-br from-[#da1c5c]/10 to-[#da1c5c]/5" value="6" label="Areas of<br/>Expertise"/>
              </div>
              <div className="animate-gentle-bounce" style={{animationDelay: '1.5s', animationDuration: '2.5s', animationIterationCount: 'infinite'}}>
                <Stat className ="pl-0 pr-0 bg-gradient-to-br from-[#262262]/10 to-[#262262]/5" value="1" label="Tightly-Knit<br/>Team"/>
              </div>
              <div className="animate-gentle-bounce" style={{animationDelay: '3s', animationDuration: '1.8s', animationIterationCount: 'infinite'}}>
                <Stat className ="pl-0 pr-0 bg-gradient-to-br from-[#FFB700]/10 to-[#FFB700]/5" value="3" label="Decades<br/>Combined"/>
              </div>
            </div>
            <p className="mt-6 text-sm text-gray-600 leading-relaxed">
              When we're not coding, we're probably arguing about whether pineapple belongs on pizza (it doesn't) or debating the best way to center a div (flexbox, obviously). But most importantly, we're the team that turns your "wouldn't it be cool if..." into "holy cow, this is amazing!"
            </p>
            {/* Cool Slideshow */}
            <div className="mt-8 relative overflow-hidden rounded-lg bg-gradient-to-br from-[#FFB700]/10 to-[#70CBD0]/10 p-6">
              <div className="relative h-36 sm:h-44">
                {(() => {
                  const [currentSlide, setCurrentSlide] = React.useState(0);
                  
                  React.useEffect(() => {
                    const timer = setInterval(() => {
                      setCurrentSlide((prev) => (prev + 1) % 5);
                    }, 3000);
                    return () => clearInterval(timer);
                  }, []);
                  
                  const slides = [
                    {
                      title: "Modern Tech Stack",
                      content: "React, Next.js, Node.js, AWS, and cutting-edge tools that keep your project ahead of the curve."
                    },
                    {
                      title: "Design Excellence",
                      content: "From wireframes to pixel-perfect UI, we craft experiences that users love and remember."
                    },
                    {
                      title: "Performance First",
                      content: "Lightning-fast load times, SEO optimization, and mobile-first responsive design that converts."
                    },
                    {
                      title: "Mobile Applications",
                      content: "Full-stack mobile apps for iOS and Android with native performance, smooth animations, and platform-specific UX patterns."
                    },
                    {
                      title: "Enterprise Security",
                      content: "Bank-level security, GDPR compliance, and bulletproof infrastructure that scales with your business."
                    }
                  ];
                  
                  return (
                    <>
                      {slides.map((slide, index) => (
                        <div
                          key={index}
                          className={`absolute inset-0 flex flex-col justify-center transition-all duration-2500 ease-in-out px-12 ${
                            index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                          }`}
                        >
                          <h4 className="text-lg font-semibold text-[#262262] mb-2 text-center">{slide.title}</h4>
                          <p className="text-sm text-gray-700 text-center leading-relaxed">{slide.content}</p>
                        </div>
                      ))}
                      

                      
                      {/* Navigation Arrows */}
                      <button
                        onClick={() => setCurrentSlide((prev) => (prev - 1 + 5) % 5)}
                        className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-[#70CBD0] hover:bg-white hover:text-[#262262] transition-all duration-300 shadow-md"
                      >
                        ←
                      </button>
                      <button
                        onClick={() => setCurrentSlide((prev) => (prev + 1) % 5)}
                        className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-[#70CBD0] hover:bg-white hover:text-[#262262] transition-all duration-300 shadow-md"
                      >
                        →
                      </button>
                      
                      {/* Floating Elements */}
                      <div className="absolute top-2 right-2 w-3 h-3 bg-[#70CBD0] rounded-full animate-pulse opacity-60"></div>
                      <div className="absolute bottom-8 left-4 w-2 h-2 bg-[#da1c5c] rounded-full animate-bounce opacity-40"></div>
                      <div className="absolute top-8 left-8 w-1.5 h-1.5 bg-[#FFB700] rounded-full animate-ping opacity-30"></div>
                    </>
                  );
                })()}
              </div>
            </div>
                          <p className="mt-6 text-sm text-gray-600 leading-relaxed">
                            Think of us as your tech-savvy friend who happens to know how to make websites and mobile apps that don't break when someone sneezes at them.
                            We don't just build – we build digital empires that your competitors will envy.</p>
            </div>
                          </div>
          <div className="flex flex-col gap-6 h-full">
            <AboutCard title="What we do" color="navy">
              Modern websites and mobile apps that are intuitive, scalable, and deeply aligned with your brand's goals and audience. From e-commerce platforms to enterprise solutions, we build digital experiences that drive real business results.
              
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <img src="/lunaratechIcon.png" alt="LunaraTech Icon" className="h-8 w-8 flex-shrink-0"/>
                  <span className="text-sm text-gray-600">Custom web applications built with React, Next.js, and modern frameworks</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/lunaratechIcon.png" alt="LunaraTech Icon" className="h-8 w-8 flex-shrink-0"/>
                  <span className="text-sm text-gray-600">Mobile apps for iOS and Android with native performance</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/lunaratechIcon.png" alt="LunaraTech Icon" className="h-8 w-8 flex-shrink-0"/>
                  <span className="text-sm text-gray-600">E-commerce platforms and enterprise solutions that scale</span>
                </div>
              </div>
            </AboutCard>
            <AboutCard title="How we do it" color="gold">
              Intentional design, clean development, and strategic thinking to turn bold ideas into products that connect and perform. We combine cutting-edge technology with time-tested methodologies to deliver solutions that scale with your growth.
              
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <img src="/lunaratechIcon.png" alt="LunaraTech Icon" className="h-8 w-8 flex-shrink-0"/>
                  <span className="text-sm text-gray-600">User-centered design process with wireframes and prototypes</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/lunaratechIcon.png" alt="LunaraTech Icon" className="h-8 w-8 flex-shrink-0"/>
                  <span className="text-sm text-gray-600">Agile development with continuous testing and iteration</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/lunaratechIcon.png" alt="LunaraTech Icon" className="h-8 w-8 flex-shrink-0"/>
                  <span className="text-sm text-gray-600">Performance optimization and security best practices</span>
                </div>
              </div>
            </AboutCard>
            <AboutCard title="Built on Collaboration" color="fuschia">
              Designers, developers, and strategists working side-by-side (literally). We listen, challenge, and support — every step of the way. This collaborative approach ensures every decision is informed by multiple perspectives and every solution is crafted with your success in mind.
              
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <img src="/lunaratechIcon.png" alt="LunaraTech Icon" className="h-8 w-8 flex-shrink-0"/>
                  <span className="text-sm text-gray-600">Regular check-ins and transparent communication throughout</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/lunaratechIcon.png" alt="LunaraTech Icon" className="h-8 w-8 flex-shrink-0"/>
                  <span className="text-sm text-gray-600">Cross-functional team approach with shared ownership</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/lunaratechIcon.png" alt="LunaraTech Icon" className="h-8 w-8 flex-shrink-0"/>
                  <span className="text-sm text-gray-600">Your feedback drives every decision and iteration</span>
                </div>
              </div>
            </AboutCard>
              </div>
            </div>

        {/* Latest Projects Subsection - Full Width */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-semibold text-[#262262] mb-3">Latest Projects</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Real work, real results. See how we've helped businesses grow with modern web solutions.</p>
            </div>
          <div className="mx-auto max-w-6xl grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
              {/* Mortgage Calculator Project */}
              <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] flex flex-col">
                <div className="aspect-video overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-br from-[#FFB700]/20 to-[#FFB700]/10 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 mx-auto mb-4 bg-[#FFB700]/20 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-[#FFB700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Mortgage Estimator</h4>
                      <p className="text-sm text-gray-600">Free & Easy to Use</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-semibold text-gray-900 group-hover:text-[#da1c5c] transition-colors">Home Mortgage Estimator</h4>
                    <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Live</span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed flex-grow">
                    A comprehensive mortgage calculator that helps users estimate monthly payments, view detailed amortization schedules, 
                    and analyze home loans including PMI, property tax, and insurance costs.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">React</span>
                    <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">JavaScript</span>
                    <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">Financial Tools</span>
                    <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">Note JS</span>
                    <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">Responsive Design</span>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <a 
                      href="https://www.homemortgagecalculator.net/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#da1c5c] hover:text-[#c01a52] font-medium text-sm transition-colors"
                    >
                      View Project
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <div className="text-xs text-gray-500">2025</div>
                  </div>
                </div>
              </div>

              {/* Macroaxis Project */}
              <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] flex flex-col">
                <div className="aspect-video overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-br from-[#262262]/20 to-[#262262]/10 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 mx-auto mb-4 bg-[#262262]/20 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-[#262262]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Macroaxis</h4>
                      <p className="text-sm text-gray-600">Financial Analytics Platform</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-semibold text-gray-900 group-hover:text-[#262262] transition-colors">Fintech Platform</h4>
                    <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Live</span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed flex-grow">
                    A comprehensive AI-powered financial analytics platform providing investment research, portfolio analysis, 
                    and market data tools for investors and financial professionals across hundreds of exchanges from over 60 countries.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">Java</span>
                    <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">Spring</span>
                    <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">JavaScript</span>
                    <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">Optimization</span>
                    <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">Financial API</span>
                    <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">Analytics</span>
                    <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">AWS</span>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <a 
                      href="https://www.macroaxis.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#262262] hover:text-[#1a1a4a] font-medium text-sm transition-colors"
                    >
                      View Project
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <div className="text-xs text-gray-500">2025</div>
                  </div>
                </div>
              </div>

              {/* Chosen Rooter Project */}
              <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] flex flex-col">
                <div className="aspect-video overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-br from-[#da1c5c]/20 to-[#da1c5c]/10 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 mx-auto mb-4 bg-[#da1c5c]/20 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-[#da1c5c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Chosen Rooter</h4>
                      <p className="text-sm text-gray-600">Plumbing Services</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-semibold text-gray-900 group-hover:text-[#da1c5c] transition-colors">Chosen Rooter & Plumbing</h4>
                    <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Live</span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed flex-grow">
                    San Francisco's top plumbing company providing emergency plumbing services, drain cleaning, 
                    water heater repairs, and comprehensive plumbing solutions throughout the Bay Area.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">WordPress</span>
                    <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">PHP</span>
                    <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">HTML</span>
                    <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">CSS</span>
                    <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">Local Business</span>
                    <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">SEO</span>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <a 
                      href="https://chosenrooter.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#da1c5c] hover:text-[#c01a52] font-medium text-sm transition-colors"
                    >
                      View Project
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <div className="text-xs text-gray-500">2025</div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-gray-100 bg-gray-50 px-4 py-16 sm:py-20" id="process">
        <SectionHeader
          eyebrow=""
          title="Minus the jargon, plus the momentum"
          subtitle="We listen closely, design with purpose, and build with precision — so your site informs, converts, and grows."
        />
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            {t:"Discover", d:"We align on goals, users, scope, and success metrics."},
            {t:"Design", d:"Wireframes → prototypes → beautiful, accessible UI."},
            {t:"Develop", d:"Clean, scalable code with performance baked in."},
            {t:"Deploy", d:"Zero-drama hosting & deployment with observability."},
            {t:"Drive", d:"Iterate with data: SEO, UX, and feature improvements."},
            {t:"Support", d:"We stay with you — updates, fixes, and new ideas."},
          ].map((s, i)=> (
            <ProcessCard key={s.t} title={s.t} step={`Step ${i+1}`}>{s.d}</ProcessCard>
          ))}
        </div>
      </section>


      {/* CTA / Contact */}
      
      <section className="bg-gradient-to-br from-[#70CBD0]/15 to-[#FFB700]/10 py-16 sm:py-20" id="contact">
        <div className="mx-auto max-w-7xl px-4">
      <SectionHeader
              eyebrow=""
            title={"Let's get to work"}
            subtitle="Tell us about your project. We'll reply with a quick plan, timeline, and budget."
            />
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2 items-stretch mt-12">
          <div className="flex flex-col gap-6 h-full">
            {/* Enhanced Features Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="group relative rounded-xl border border-gray-200 bg-gradient-to-br from-[#da1c5c]/10 to-[#da1c5c]/5 p-4 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:scale-105">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#da1c5c]/20 to-[#da1c5c]/10 text-[#da1c5c] transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-[#da1c5c] transition-colors">Fast Response</h4>
                <p className="text-xs text-gray-600">Clear next steps</p>
                <div className="mt-2 h-0.5 w-8 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full mx-auto transition-all duration-300 group-hover:w-12" />
              </div>
              
              <div className="group relative rounded-xl border border-gray-200 bg-gradient-to-br from-[#FFB700]/10 to-[#FFB700]/5 p-4 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:scale-105">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#FFB700]/20 to-[#FFB700]/10 text-[#FFB700] transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-[#FFB700] transition-colors">Fixed Pricing</h4>
                <p className="text-xs text-gray-600">Sprint-based options</p>
                <div className="mt-2 h-0.5 w-8 bg-gradient-to-r from-[#FFB700] to-[#70CBD0] rounded-full mx-auto transition-all duration-300 group-hover:w-12" />
              </div>
              
              <div className="group relative rounded-xl border border-gray-200 bg-gradient-to-br from-[#262262]/10 to-[#262262]/5 p-4 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:scale-105">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#262262]/20 to-[#262262]/10 text-[#262262] transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-[#262262] transition-colors">No Jargon</h4>
                <p className="text-xs text-gray-600">Just outcomes</p>
                <div className="mt-2 h-0.5 w-8 bg-gradient-to-r from-[#262262] to-[#da1c5c] rounded-full mx-auto transition-all duration-300 group-hover:w-12" />
              </div>
            </div>
            
            {/* Additional Benefits */}
            <div className="mt-0 rounded-xl border border-gray-200 bg-gradient-to-r from-gray-50 to-[#262262]/5 p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="flex items-center justify-center gap-3">
                <div className="flex h-8 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#262262]/20 to-[#262262]/10 text-[#262262]">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Professional team with 10+ years of experience</span>
              </div>
            </div>
            
            {/* niks3 Image - moved to left side for balance */}
            <div className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex-grow">
              <img 
                src="/niks3.png" 
                alt="LunaraTech Team" 
                className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 h-full">
            <div className="relative rounded-3xl border-2 border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] flex-grow overflow-hidden">
              
              
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
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-xs text-gray-500">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    We usually respond within a day
                  </label>
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
                <p className="text-xs text-gray-500">Prefer to call? <a className="underline" href="tel:+15074003910">(507) 400-3910</a></p>
              </form>
            ) : (
              <div className="text-center flex flex-col h-full">
                <div className="flex-grow">
                  <img src="/lunaratechIcon.png" alt="LunaraTech Icon" className="mx-auto mb-6 h-16 w-16 animate-pulse"/>
                  <h3 className="text-2xl font-bold text-[#262262] mb-3">Message Sent Successfully!</h3>
                  <p className="text-gray-600 mb-6">Thanks for reaching out! We'll review your project details and get back to you within 24 hours.</p>
                  <div className="bg-gradient-to-r from-[#70CBD0]/10 to-[#FFB700]/10 rounded-xl p-4 mb-6">
                    <p className="text-sm text-gray-700 mb-2">Want to talk now?</p>
                    <a className="inline-flex items-center gap-2 text-[#da1c5c] hover:text-[#c01a52] font-medium" href="tel:+15074003910">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      (507) 400-3910
                    </a>
                  </div>
                </div>
                <a href="#home" className="inline-flex items-center gap-2 rounded-xl border-2 border-[#262262] bg-white px-6 py-3 text-sm font-medium text-[#262262] hover:border-[#1a1a4a] hover:bg-[#f8f9ff] hover:-translate-y-1 transition-all duration-300 mt-auto">
                  <Arrow/> Back to top
                </a>
              </div>
            )}
          </div>
          </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
          <div className="text-sm text-gray-600">© {new Date().getFullYear()} LunaraTech. All rights reserved.</div>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </main>
    </>
  );
}