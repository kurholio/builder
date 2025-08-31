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

        {/* Contact */}
        <section className="px-4 py-16 sm:py-20" id="contact">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Let's get to work</h2>
            <p className="mt-3 text-gray-600">Tell us about your project. We'll reply with a quick plan, timeline, and budget.</p>
          </div>
          
          <div className="mx-auto mt-10 max-w-xl">
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
              </form>
            ) : (
              <div className="text-center">
                <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 6L9 17l-5-5"/></svg>
                </div>
                <h3 className="text-lg font-semibold">Thanks! We'll be in touch shortly.</h3>
                <p className="mt-2 text-sm text-gray-600">Want to talk now? Email <a className="underline" href="mailto:hello@lunaratech.example">hello@lunaratech.example</a>.</p>
              </div>
            )}
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

