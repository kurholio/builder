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

function App() {
  console.log('App component rendering with animations...');
  
  return (
    <>
      <AnimatedBackground />
      <FloatingPattern />
      <div style={{
        position: 'relative',
        zIndex: 10,
        minHeight: '100vh',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '32px',
        color: '#1f2937',
        textAlign: 'center',
        padding: '20px'
      }}>
        ✨ Your Beautiful Background Animations Are Now Working! ✨
        <br />
        <span style={{fontSize: '18px', marginTop: '20px', opacity: 0.8}}>
          Look for the blue and green borders - those are your animation canvases!
        </span>
      </div>
    </>
  );
}

export default App;