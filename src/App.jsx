import React, { useState, useEffect } from "react";

// Animated Background Component
const AnimatedBackground = () => {
  useEffect(() => {
    console.log('AnimatedBackground: Setting up canvas...');
    const canvas = document.getElementById('animated-bg');
    if (!canvas) {
      console.log('AnimatedBackground: Canvas not found!');
      return;
    }
    console.log('AnimatedBackground: Canvas found, starting animation...');
    
    const ctx = canvas.getContext('2d');
    let animationId;
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Particle system
    const particles = [];
    const particleCount = 50;
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.6 + 0.3;
        this.angle = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
      }
      
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.angle += this.rotationSpeed;
        
        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }
      
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.globalAlpha = this.opacity;
        
        // Draw subtle geometric shapes
        if (Math.random() > 0.7) {
          // Diamond
          ctx.beginPath();
          ctx.moveTo(0, -this.size);
          ctx.lineTo(this.size, 0);
          ctx.lineTo(0, this.size);
          ctx.lineTo(-this.size, 0);
          ctx.closePath();
          ctx.strokeStyle = '#e5e7eb';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        } else {
          // Circle
          ctx.beginPath();
          ctx.arc(0, 0, this.size, 0, Math.PI * 2);
          ctx.fillStyle = '#f3f4f6';
          ctx.fill();
        }
        
        ctx.restore();
      }
    }
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw subtle gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(249, 250, 251, 0.3)');
      gradient.addColorStop(1, 'rgba(243, 244, 246, 0.1)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(229, 231, 235, 0.3)';
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
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
      style={{ background: 'transparent', border: '1px solid rgba(59, 130, 246, 0.3)' }}
    />
  );
};

// Floating Geometric Pattern Overlay
const FloatingPattern = () => {
  useEffect(() => {
    console.log('FloatingPattern: Setting up canvas...');
    const canvas = document.getElementById('floating-pattern');
    if (!canvas) {
      console.log('FloatingPattern: Canvas not found!');
      return;
    }
    console.log('FloatingPattern: Canvas found, starting animation...');
    
    const ctx = canvas.getContext('2d');
    let animationId;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const patterns = [];
    const patternCount = 8;
    
    class Pattern {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 40 + 20;
        this.opacity = Math.random() * 0.2 + 0.1;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.005;
        this.floatOffset = Math.random() * Math.PI * 2;
        this.floatSpeed = Math.random() * 0.01 + 0.005;
      }
      
      update() {
        this.rotation += this.rotationSpeed;
        this.floatOffset += this.floatSpeed;
        this.y += Math.sin(this.floatOffset) * 0.2;
      }
      
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = this.opacity;
        
        // Draw hexagon pattern
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (i * Math.PI) / 3;
          const x = Math.cos(angle) * this.size;
          const y = Math.sin(angle) * this.size;
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.closePath();
        ctx.strokeStyle = '#d1d5db';
        ctx.lineWidth = 1;
        ctx.stroke();
        
        ctx.restore();
      }
    }
    
    for (let i = 0; i < patternCount; i++) {
      patterns.push(new Pattern());
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      patterns.forEach(pattern => {
        pattern.update();
        pattern.draw();
      });
      
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
      style={{ background: 'transparent', border: '1px solid rgba(16, 185, 129, 0.3)' }}
    />
  );
};

export default function LunaraTechLanding() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
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

  console.log('LunaraTechLanding component rendering with animations...');
  
  return (
    <>
      <AnimatedBackground />
      <FloatingPattern />
      <main className="min-h-screen bg-white/95 backdrop-blur-sm text-gray-900 relative z-10">
        {/* Top nav */}
        <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-gray-100">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:py-4">
            <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gray-900 text-white animate-pulse-slow">L</span>
              LunaraTech
            </a>
            <nav className="hidden gap-6 text-sm text-gray-700 sm:flex">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} className="hover:text-gray-900">{n.label}</a>
              ))}
            </nav>
            <a href="#contact" className="hidden rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-black hover:bg-gray-300 transition-all duration-300 sm:inline-flex">Get Quote</a>
          </div>
        </header>

        {/* Hero */}
        <section id="home" className="relative">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mt-15 text-4xl font-semibold tracking-tight sm:text-6xl animate-pulse">Turn vision into velocity</h1>
              <p className="mx-auto mt-10 max-w-2xl text-gray-600 animate-fade-in">We craft clean code, bold design, and real connections. From idea to launch, we build experiences that scale, convert, and feel great to use.</p>
              
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <a href="#contact" className="rounded-md bg-blue-50 px-6 py-3 text-sm font-medium text-blue-600 hover:bg-blue-100 transition-all duration-300 hover:scale-105">Start a Project</a>
                <a href="#services" className="rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 hover:scale-105">What we do</a>
              </div>
            </div>
          </div>
        </section>

        {/* Value props */}
        <section className="border-y border-gray-100 bg-gray-50">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-12 sm:grid-cols-3">
            <div className="group relative flex h-full flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] bg-red-50 animate-float">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gray-50 text-gray-700 ring-1 ring-gray-200 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 6L9 17l-5-5"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-gray-700">Clean Code</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">We write code that's readable, maintainable, and built to scale — ensuring smooth development and long‑term stability.</p>
            </div>
            
            <div className="group relative flex h-full flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] bg-blue-50 animate-float" style={{animationDelay: '1s'}}>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gray-50 text-gray-700 ring-1 ring-gray-200 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.88L18.18 22 12 18.56 5.82 22 7 14.15l-5-4.88 6.91-1.01z"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-gray-700">Bold Design</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Modern, intuitive, and tailored to create lasting impressions across devices and contexts.</p>
            </div>
            
            <div className="group relative flex h-full flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] bg-green-50 animate-float" style={{animationDelay: '2s'}}>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gray-50 text-gray-700 ring-1 ring-gray-200 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-gray-700">Real Connection</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Genuine collaboration that turns your ideas into digital experiences people love.</p>
            </div>
          </div>
        </section>

        {/* Niches */}
        <section className="px-4 py-16 sm:py-20" id="niches">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Niches that work for your world</h2>
            <p className="mt-3 text-gray-600">We tailor strategy, design, and technology to your industry — built to perform and evolve.</p>
          </div>
          <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {t:"Plumbing", d:"Fast, functional sites with service highlights, testimonials, and simple booking.", icon: "🔧"},
              {t:"Landscaping", d:"Showcase projects with beautiful, responsive portfolios for outdoor services.", icon: "🌿"},
              {t:"Wellness", d:"Calm design, booking systems, and storytelling that builds trust.", icon: "💚"},
              {t:"eCommerce", d:"Scalable stores with streamlined navigation, secure checkout, and conversion‑focused UX.", icon: "🛒"},
              {t:"Contractors", d:"Lead‑driving sites that highlight expertise and portfolios.", icon: "🔨"},
              {t:"Restaurants", d:"Menus, reservations, delivery integrations — sites that whet appetites.", icon: "🍽️"},
              {t:"Real Estate", d:"Custom listings, MLS integrations, and smart lead capture.", icon: "🏠"},
              {t:"Nonprofit", d:"Donation tools, volunteer signups, and compelling impact visuals.", icon: "🤝"},
              {t:"Education", d:"Websites for schools and e‑learning with scheduling and content delivery.", icon: "📚"},
              {t:"Events", d:"Speaker bios, registration, schedules, and live‑stream integrations.", icon: "📅"},
              {t:"Personal", d:"Creators, coaches, influencers — elevate your brand and grow your audience.", icon: "👤"},
              {t:"Custom", d:"Have a unique vision? We'll build it from the ground up for your goals.", icon: "✨"},
            ].map((i, index)=> (
              <div 
                key={i.t} 
                className="group relative flex h-full flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.03] hover:border-gray-300"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeIn 0.6s ease-out forwards',
                  opacity: 0
                }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="h-16 w-16 text-gray-700 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <div className="scale-150 transition-transform duration-500 group-hover:scale-[1.2]">
                      {i.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 text-center transition-colors duration-300 group-hover:text-gray-700">{i.t}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed text-center">{i.d}</p>
                <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent transition-all duration-300 group-hover:from-transparent group-hover:via-gray-400 group-hover:to-transparent" />
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="border-y border-gray-100 bg-gray-50 px-4 py-16 sm:py-20" id="services">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">From concept to launch — and beyond</h2>
            <p className="mt-3 text-gray-600">Design, development, hosting, and ongoing support for a seamless digital experience.</p>
          </div>
          <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group relative flex h-full flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gray-50 text-gray-700 ring-1 ring-gray-200 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 6L9 17l-5-5"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-gray-700">Website Development</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Fast, scalable, user‑friendly websites using modern frameworks — crafted to meet your goals and delight users.</p>
            </div>
            <div className="group relative flex h-full flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gray-50 text-gray-700 ring-1 ring-gray-200 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 6L9 17l-5-5"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-gray-700">UI Prototyping</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Interactive wireframes and prototypes to validate flows and align stakeholders before build.</p>
            </div>
            <div className="group relative flex h-full flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gray-50 text-gray-700 ring-1 ring-gray-200 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 6L9 17l-5-5"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-gray-700">Graphic Design</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Pixel‑perfect UI aligned to your brand for a consistent, engaging experience.</p>
            </div>
            <div className="group relative flex h-full flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gray-50 text-gray-700 ring-1 ring-gray-200 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 6L9 17l-5-5"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-gray-700">Hosting & Deployment</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Secure, scalable hosting and smooth deployments — your site stays fast and reliable.</p>
            </div>
            <div className="group relative flex h-full flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gray-50 text-gray-700 ring-1 ring-gray-200 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 6L9 17l-5-5"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-gray-700">Maintenance & Support</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">Reliable updates, monitoring, and feature rollouts to keep you growing.</p>
            </div>
            <div className="group relative flex h-full flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gray-50 text-gray-700 ring-1 ring-gray-200 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 6L9 17l-5-5"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-gray-700">Accessibility</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">WCAG/ADA‑minded design for inclusivity, compliance, and better UX for everyone.</p>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="px-4 py-16 sm:py-20" id="about">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Who we are</h2>
            <p className="mt-3 text-gray-600">A family‑run boutique. Less boardroom, more creative kitchen table — with better snacks.</p>
          </div>
          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm h-full">
              <p className="text-gray-700 leading-relaxed">
                Our small but mighty team blends software development, graphic design, and marketing into a digital 
                Swiss Army knife. We're the folks who actually build your product — no hand‑offs, no support queues,
                 and definitely no "it works on my machine" excuses. 
              </p>
              
              <div className="mt-8 grid grid-cols-3 gap-3">
                <div className="animate-gentle-bounce" style={{animationDelay: '0s', animationDuration: '2s', animationIterationCount: 'infinite'}}>
                  <div className="rounded-lg border p-6 text-center shadow-sm bg-red-50 border-red-200">
                    <div className="text-4xl font-semibold tracking-tight transition-all duration-300 hover:text-gray-700">6</div>
                    <div className="mt-2 text-sm text-gray-600 leading-tight">Areas of<br/>Expertise</div>
                  </div>
                </div>
                <div className="animate-gentle-bounce" style={{animationDelay: '1.5s', animationDuration: '2.5s', animationIterationCount: 'infinite'}}>
                  <div className="rounded-lg border p-6 text-center shadow-sm bg-blue-50 border-blue-200">
                    <div className="text-4xl font-semibold tracking-tight transition-all duration-300 hover:text-gray-700">1</div>
                    <div className="mt-2 text-sm text-gray-600 leading-tight">Tightly-Knit<br/>Team</div>
                  </div>
                </div>
                <div className="animate-gentle-bounce" style={{animationDelay: '3s', animationDuration: '1.8s', animationIterationCount: 'infinite'}}>
                  <div className="rounded-lg border p-6 text-center shadow-sm bg-green-50 border-green-200">
                    <div className="text-4xl font-semibold tracking-tight transition-all duration-300 hover:text-gray-700">3</div>
                    <div className="mt-2 text-sm text-gray-600 leading-tight">Decades<br/>Combined</div>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-sm text-gray-600 leading-relaxed">
                When we're not coding, we're probably arguing about whether pineapple belongs on pizza (it doesn't) or debating the best way to center a div (flexbox, obviously). But most importantly, we're the team that turns your "wouldn't it be cool if..." into "holy cow, this is amazing!"
              </p>
            </div>
            <div className="flex flex-col gap-6 h-full">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/niks1.png" 
                  alt="LunaraTech Team" 
                  className="w-full h-56 object-cover rounded-lg"
                />
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">What we do</h3>
                <p className="mt-2 text-sm text-gray-700">Modern websites and mobile apps that are intuitive, scalable, and deeply aligned with your brand's goals and audience. From e-commerce platforms to enterprise solutions, we build digital experiences that drive real business results.</p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">How we do it</h3>
                <p className="mt-2 text-sm text-gray-700">Intentional design, clean development, and strategic thinking to turn bold ideas into products that connect and perform. We combine cutting-edge technology with time-tested methodologies to deliver solutions that scale with your growth.</p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Built on Collaboration</h3>
                <p className="mt-2 text-sm text-gray-700">Designers, developers, and strategists working side‑by‑side (literally). We listen, challenge, and support — every step of the way. This collaborative approach ensures every decision is informed by multiple perspectives and every solution is crafted with your success in mind.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="border-y border-gray-100 bg-gray-50 px-4 py-16 sm:py-20" id="process">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Minus the jargon, plus the momentum</h2>
            <p className="mt-3 text-gray-600">We listen closely, design with purpose, and build with precision — so your site informs, converts, and grows.</p>
          </div>
          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {t:"Discover", d:"We align on goals, users, scope, and success metrics."},
              {t:"Design", d:"Wireframes → prototypes → beautiful, accessible UI."},
              {t:"Develop", d:"Clean, scalable code with performance baked in."},
              {t:"Deploy", d:"Zero‑drama hosting & deployment with observability."},
              {t:"Drive", d:"Iterate with data: SEO, UX, and feature improvements."},
              {t:"Support", d:"We stay with you — updates, fixes, and new ideas."},
            ].map((s, i)=> (
              <div key={s.t} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">Step {i+1}</div>
                <div className="text-lg font-semibold">{s.t}</div>
                <p className="mt-2 text-sm text-gray-600">{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="px-4 py-16 sm:py-20" id="contact">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Let's get to work</h2>
            <p className="mt-3 text-gray-600">Tell us about your project. We'll reply with a quick plan, timeline, and budget.</p>
          </div>
          
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="flex flex-col gap-6 h-full">
              {/* Enhanced Features Grid */}
              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="group relative rounded-lg border border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-100 p-4 text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-all duration-300 group-hover:scale-110">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">Fast Response</h4>
                  <p className="text-xs text-gray-600">Clear next steps</p>
                </div>
                
                <div className="group relative rounded-lg border border-gray-200 bg-gradient-to-br from-green-50 to-emerald-100 p-4 text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 transition-all duration-300 group-hover:scale-110">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">Fixed Pricing</h4>
                  <p className="text-xs text-gray-600">Sprint-based options</p>
                </div>
                
                <div className="group relative rounded-lg border border-gray-200 bg-gradient-to-br from-purple-50 to-violet-100 p-4 text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 transition-all duration-300 group-hover:scale-110">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">No Jargon</h4>
                  <p className="text-xs text-gray-600">Just outcomes</p>
                </div>
              </div>
              
              {/* Additional Benefits */}
              <div className="mt-0 rounded-lg border border-gray-200 bg-gradient-to-r from-gray-50 to-blue-50 p-4">
                <div className="flex items-center justify-center gap-3">
                  <div className="flex h-8 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Professional team with 10+ years of experience</span>
                </div>
              </div>
              
              {/* niks3 Image - moved to left side for balance */}
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/niks3.png" 
                  alt="LunaraTech Team" 
                  className="w-full h-56 object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="flex flex-col gap-6 mt-10 h-full">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                {!sent ? (
                  <form onSubmit={onSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <input placeholder="Your name" required className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-sm focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200" />
                      <input type="email" placeholder="Email" required className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-sm focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200" />
                    </div>
                    <input placeholder="Company / Organization" className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-sm focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200" />
                    <textarea rows={5} placeholder="What are you building?" required className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-sm focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"></textarea>
                    <div className="flex items-center justify-between">
                      <label className="flex items-center gap-2 text-xs text-gray-600">
                        <input type="checkbox" className="rounded border-gray-300" />
                        I'd like a quick 15‑min intro call
                      </label>
                      <button type="submit" className="rounded-md bg-green-50 px-5 py-2 text-sm font-medium text-green-600 hover:bg-green-100 transition-all duration-300">Contact Us</button>
                    </div>
                    <div className="text-xs text-gray-500 space-y-1">
                      <div>Prefer to call? <a className="underline" href="tel:+1234567890">+1 (234) 567-890</a></div>
                      <div>Prefer email? <a className="underline" href="mailto:hello@lunaratech.example">hello@lunaratech.example</a></div>
                    </div>
                  </form>
                ) : (
                  <div className="text-center">
                    <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 6L9 17l-5-5"/></svg>
                    </div>
                    <h3 className="text-lg font-semibold">Thanks! We'll be in touch shortly.</h3>
                    <p className="mt-2 text-sm text-gray-600">Want to talk now? Email <a className="underline" href="mailto:hello@lunaratech.example">hello@lunaratech.example</a>.</p>
                    <a href="#home" className="mt-6 inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm hover:border-gray-300">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                      Back to top
                    </a>
                  </div>
                )}
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

