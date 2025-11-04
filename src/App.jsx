import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Import service pages
import WebsiteDevelopment from './services/WebsiteDevelopment';
import UIPrototyping from './services/UIPrototyping';
import GraphicDesign from './services/GraphicDesign';
import HostingDeployment from './services/HostingDeployment';
import MaintenanceSupport from './services/MaintenanceSupport';
import Accessibility from './services/Accessibility';

// Import niche pages
import PlumbingWebsiteDesign from './services/PlumbingWebsiteDesign';
import RestaurantWebsiteDesign from './services/RestaurantWebsiteDesign';
import EcommerceWebsiteDevelopment from './services/EcommerceWebsiteDevelopment';
import LandscapingWebsiteDesign from './services/LandscapingWebsiteDesign';
import WellnessWebsiteDesign from './services/WellnessWebsiteDesign';
import ContractorWebsiteDesign from './services/ContractorWebsiteDesign';
import RealEstateWebsiteDesign from './services/RealEstateWebsiteDesign';
import NonprofitWebsiteDesign from './services/NonprofitWebsiteDesign';
import EducationWebsiteDesign from './services/EducationWebsiteDesign';
import EventsWebsiteDesign from './services/EventsWebsiteDesign';
import PersonalWebsiteDesign from './services/PersonalWebsiteDesign';
import CustomWebsiteDevelopment from './services/CustomWebsiteDevelopment';
import Contact from './services/Contact';

// Single-file, preview-ready React landing page
// Theme: clean, airy, white with soft accents
// Tailwind is available by default in this environment
// Icons: inline SVG (black & white, lightweight, fully scalable)

// Enhanced Planet-like Animated Background Component
const ExodusAnimatedBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById('exodus-bg');
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
    
    // Create planet-like objects array
    const planets = [];
    const numPlanets = 40; // Much more planets for density
    
    // Color palette for planets
    const colors = [
      '#70CBD0', '#FFB700', '#da1c5c', '#262262', 
      '#8B5CF6', '#10B981', '#F59E0B', '#EF4444',
      '#06B6D4', '#84CC16', '#F97316', '#EC4899'
    ];
    
    // Initialize planets with more variety and random movement patterns
    for (let i = 0; i < numPlanets; i++) {
      // More varied sizes - some very small, some very large
      const size = Math.random() < 0.3 ? 
        Math.random() * 30 + 10 : // 30% small planets
        Math.random() * 140 + 50; // 70% larger planets
      
      // Create more random movement patterns
      const movementType = Math.random();
      const baseSpeed = Math.random() * 1.5 + 0.5; // Random base speed
      
      planets.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: size,
        baseSize: size,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.06,
        speedX: (Math.random() - 0.5) * baseSpeed,
        speedY: (Math.random() - 0.5) * baseSpeed,
        opacity: Math.random() * 0.4 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulsePhase: Math.random() * Math.PI * 2,
        orbitRadius: Math.random() * 120 + 30,
        orbitSpeed: (Math.random() - 0.5) * 0.03,
        orbitCenterX: Math.random() * canvas.width,
        orbitCenterY: Math.random() * canvas.height,
        hasOrbit: movementType < 0.3, // 30% have orbital motion
        glowIntensity: Math.random() * 0.5 + 0.2,
        type: Math.random() > 0.3 ? 'planet' : 'star',
        // New random movement properties
        movementType: movementType,
        directionChange: Math.random() * 0.05 + 0.01, // How often direction changes (slower)
        lastDirectionChange: 0,
        currentDirection: Math.random() * Math.PI * 2,
        speedVariation: Math.random() * 0.8 + 0.2, // Speed variation factor
        driftX: (Math.random() - 0.5) * 0.3, // Random drift
        driftY: (Math.random() - 0.5) * 0.3,
        // Add different movement behaviors
        behaviorType: Math.floor(Math.random() * 3), // 0: slow drift, 1: medium wander, 2: fast explore
        wanderRadius: Math.random() * 100 + 50, // For wandering behavior
        wanderCenterX: Math.random() * canvas.width,
        wanderCenterY: Math.random() * canvas.height
      });
    }
    
    // Add smaller particles
    const particles = [];
    const numParticles = 80; // More particles for atmosphere
    for (let i = 0; i < numParticles; i++) {
      const particleSpeed = Math.random() * 1.2 + 0.3; // Random speed
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 1,
        speedX: (Math.random() - 0.5) * particleSpeed,
        speedY: (Math.random() - 0.5) * particleSpeed,
        opacity: Math.random() * 0.3 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulsePhase: Math.random() * Math.PI * 2,
        // Random movement properties for particles
        directionChange: Math.random() * 0.03 + 0.01,
        lastDirectionChange: 0,
        currentDirection: Math.random() * Math.PI * 2,
        speedVariation: Math.random() * 0.6 + 0.4,
        driftX: (Math.random() - 0.5) * 0.4,
        driftY: (Math.random() - 0.5) * 0.4
      });
    }
    
    let time = 0;
    const animate = () => {
      try {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw planets
        planets.forEach((planet, index) => {
          // Random movement patterns
          if (planet.hasOrbit) {
            // Orbital motion with random drifting
            planet.orbitCenterX += planet.driftX + (Math.random() - 0.5) * 0.2;
            planet.orbitCenterY += planet.driftY + (Math.random() - 0.5) * 0.2;
            planet.x = planet.orbitCenterX + Math.cos(time * planet.orbitSpeed + index) * planet.orbitRadius;
            planet.y = planet.orbitCenterY + Math.sin(time * planet.orbitSpeed + index) * planet.orbitRadius;
          } else {
            // Different movement behaviors based on behaviorType
            if (planet.behaviorType === 0) {
              // Slow drift - very gentle movement
              if (time - planet.lastDirectionChange > planet.directionChange) {
                planet.currentDirection += (Math.random() - 0.5) * 0.1; // Very gradual turns
                planet.lastDirectionChange = time;
              }
              const moveX = Math.cos(planet.currentDirection) * planet.speedX * 0.3;
              const moveY = Math.sin(planet.currentDirection) * planet.speedY * 0.3;
              planet.x += moveX;
              planet.y += moveY;
              
            } else if (planet.behaviorType === 1) {
              // Medium wander - around a center point
              const distanceFromCenter = Math.sqrt(
                Math.pow(planet.x - planet.wanderCenterX, 2) + 
                Math.pow(planet.y - planet.wanderCenterY, 2)
              );
              
              if (distanceFromCenter > planet.wanderRadius) {
                // Move back toward center
                const angleToCenter = Math.atan2(
                  planet.wanderCenterY - planet.y, 
                  planet.wanderCenterX - planet.x
                );
                planet.currentDirection = angleToCenter;
              } else if (time - planet.lastDirectionChange > planet.directionChange) {
                // Random wander within radius
                planet.currentDirection += (Math.random() - 0.5) * 0.3;
                planet.lastDirectionChange = time;
              }
              
              const moveX = Math.cos(planet.currentDirection) * planet.speedX;
              const moveY = Math.sin(planet.currentDirection) * planet.speedY;
              planet.x += moveX;
              planet.y += moveY;
              
            } else {
              // Fast explore - more dynamic movement
              if (time - planet.lastDirectionChange > planet.directionChange) {
                const targetDirection = Math.random() * Math.PI * 2;
                const directionDiff = targetDirection - planet.currentDirection;
                planet.currentDirection += directionDiff * 0.2; // Faster turns
                planet.lastDirectionChange = time;
                
                const targetSpeed = Math.random() * planet.speedVariation;
                planet.speedX = (Math.random() - 0.5) * targetSpeed;
                planet.speedY = (Math.random() - 0.5) * targetSpeed;
              }
              
              const turbulenceX = (Math.random() - 0.5) * 0.3;
              const turbulenceY = (Math.random() - 0.5) * 0.3;
              
              const moveX = Math.cos(planet.currentDirection) * planet.speedX + turbulenceX;
              const moveY = Math.sin(planet.currentDirection) * planet.speedY + turbulenceY;
              
              planet.x += moveX;
              planet.y += moveY;
            }
          }
          
          planet.rotation += planet.rotationSpeed;
          planet.pulsePhase += 0.02;
          
          // Smooth wrap around screen - no bouncing
          if (planet.x > canvas.width + planet.size) planet.x = -planet.size;
          if (planet.x < -planet.size) planet.x = canvas.width + planet.size;
          if (planet.y > canvas.height + planet.size) planet.y = -planet.size;
          if (planet.y < -planet.size) planet.y = canvas.height + planet.size;
          
          // Calculate pulsing size and opacity with more dramatic effect
          const pulseSize = Math.max(5, planet.baseSize + Math.sin(planet.pulsePhase) * 25); // Larger size variation
          const pulseOpacity = Math.max(0, Math.min(1, planet.opacity + Math.sin(planet.pulsePhase + index) * 0.25)); // More opacity variation
          
          ctx.save();
          ctx.translate(planet.x, planet.y);
          ctx.rotate(planet.rotation);
          ctx.globalAlpha = Math.max(0, Math.min(1, pulseOpacity));
          
          if (planet.type === 'star') {
            // Draw star shape
            ctx.beginPath();
            const spikes = 8;
            const outerRadius = pulseSize;
            const innerRadius = pulseSize * 0.4;
            
            for (let i = 0; i < spikes * 2; i++) {
              const angle = (i * Math.PI) / spikes;
              const radius = i % 2 === 0 ? outerRadius : innerRadius;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              if (i === 0) {
                ctx.moveTo(x, y);
              } else {
                ctx.lineTo(x, y);
              }
            }
            ctx.closePath();
            ctx.fillStyle = planet.color;
            ctx.fill();
          } else {
            // Draw planet with gradient
            const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, pulseSize);
            gradient.addColorStop(0, planet.color);
            gradient.addColorStop(0.7, planet.color + '80');
            gradient.addColorStop(1, planet.color + '40');
            
            ctx.beginPath();
            ctx.arc(0, 0, pulseSize, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();
            
            // Add glow effect
            ctx.shadowColor = planet.color;
            ctx.shadowBlur = planet.glowIntensity * 30;
            ctx.beginPath();
            ctx.arc(0, 0, pulseSize * 0.8, 0, Math.PI * 2);
            ctx.fillStyle = planet.color + '60';
            ctx.fill();
            ctx.shadowBlur = 0;
          }
          
          ctx.restore();
        });
        
        // Update and draw particles
        particles.forEach((particle, index) => {
          // Fluid movement for particles
          if (time - particle.lastDirectionChange > particle.directionChange) {
            // Gradual direction change
            const targetDirection = Math.random() * Math.PI * 2;
            const directionDiff = targetDirection - particle.currentDirection;
            particle.currentDirection += directionDiff * 0.15; // Slightly faster turn for particles
            particle.lastDirectionChange = time;
            
            // Gradual speed change
            const targetSpeed = Math.random() * particle.speedVariation;
            particle.speedX = (Math.random() - 0.5) * targetSpeed;
            particle.speedY = (Math.random() - 0.5) * targetSpeed;
          }
          
          // Add more turbulence for particles (they're smaller, so more affected by "wind")
          const turbulenceX = (Math.random() - 0.5) * 0.3;
          const turbulenceY = (Math.random() - 0.5) * 0.3;
          
          // Move with current direction plus turbulence
          const moveX = Math.cos(particle.currentDirection) * particle.speedX + turbulenceX;
          const moveY = Math.sin(particle.currentDirection) * particle.speedY + turbulenceY;
          
          particle.x += moveX;
          particle.y += moveY;
          particle.pulsePhase += 0.03;
          
          // Wrap around screen
          if (particle.x > canvas.width) particle.x = 0;
          if (particle.x < 0) particle.x = canvas.width;
          if (particle.y > canvas.height) particle.y = 0;
          if (particle.y < 0) particle.y = canvas.height;
          
          const pulseSize = Math.max(0.5, particle.size + Math.sin(particle.pulsePhase) * 3); // More size variation
          const pulseOpacity = Math.max(0, Math.min(1, particle.opacity + Math.sin(particle.pulsePhase + index) * 0.2)); // More opacity variation
          
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2);
          ctx.fillStyle = particle.color + Math.floor(pulseOpacity * 255).toString(16).padStart(2, '0');
          ctx.fill();
        });
        
        // Add connection lines between nearby planets
        for (let i = 0; i < planets.length; i++) {
          for (let j = i + 1; j < planets.length; j++) {
            const dx = planets[i].x - planets[j].x;
            const dy = planets[i].y - planets[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 250) { // Increased connection distance
              ctx.beginPath();
              ctx.moveTo(planets[i].x, planets[i].y);
              ctx.lineTo(planets[j].x, planets[j].y);
              ctx.strokeStyle = `rgba(112, 203, 208, ${0.08 * (1 - distance / 250)})`; // Slightly more subtle
              ctx.lineWidth = 0.8; // Thinner lines
              ctx.stroke();
            }
          }
        }
        
        time += 0.005; // Reduced from 0.01 to 0.005 (slower, more settled animation)
        animationId = requestAnimationFrame(animate);
      } catch (error) {
        console.error('Animation error:', error);
        // Continue animation even if there's an error
        animationId = requestAnimationFrame(animate);
      }
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas
      id="exodus-bg"
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

// Enhanced Gradient Overlay Component
const GradientOverlay = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {/* Animated radial gradients */}
      <div 
        className="absolute inset-0 opacity-40 animate-exodus-pulse"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(112, 203, 208, 0.25) 0%, transparent 60%), 
            radial-gradient(circle at 80% 70%, rgba(255, 183, 0, 0.25) 0%, transparent 60%), 
            radial-gradient(circle at 50% 20%, rgba(139, 92, 246, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 30% 80%, rgba(236, 72, 153, 0.2) 0%, transparent 50%)
          `
        }}
      />
      
      {/* Dynamic linear gradients */}
      <div 
        className="absolute inset-0 opacity-30 animate-exodus-float"
        style={{
          background: `
            linear-gradient(135deg, rgba(112, 203, 208, 0.15) 0%, transparent 40%), 
            linear-gradient(45deg, transparent 60%, rgba(255, 183, 0, 0.15) 100%),
            linear-gradient(225deg, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            linear-gradient(315deg, transparent 70%, rgba(236, 72, 153, 0.1) 100%)
          `
        }}
      />
      
      {/* Animated gradient waves */}
      <div 
        className="absolute inset-0 opacity-20 animate-exodus-glow"
        style={{
          background: `
            conic-gradient(from 0deg at 25% 25%, rgba(112, 203, 208, 0.1), transparent, rgba(255, 183, 0, 0.1), transparent, rgba(139, 92, 246, 0.1), transparent),
            conic-gradient(from 180deg at 75% 75%, rgba(236, 72, 153, 0.1), transparent, rgba(16, 185, 129, 0.1), transparent, rgba(245, 158, 11, 0.1), transparent)
          `
        }}
      />
      
      {/* Subtle noise texture with animation */}
      <div 
        className="absolute inset-0 opacity-10 animate-pulse"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
          animation: 'pulse 4s ease-in-out infinite'
        }}
      />
      
      {/* Additional animated overlay */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          background: `
            radial-gradient(ellipse at 10% 10%, rgba(112, 203, 208, 0.3) 0%, transparent 70%),
            radial-gradient(ellipse at 90% 90%, rgba(255, 183, 0, 0.3) 0%, transparent 70%),
            radial-gradient(ellipse at 50% 50%, rgba(38, 34, 98, 0.2) 0%, transparent 80%)
          `,
          animation: 'exodusFloat 6s ease-in-out infinite'
        }}
      />
    </div>
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
  <div className={`rounded-2xl border-2 p-6 text-center transition-all duration-500 hover:-translate-y-2 hover:scale-105 ${className || 'bg-white border-gray-200'}`}>
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
    fuschia: "from-[#da1c5c]/10 to-[#da1c5c]/5 border-[#da1c5c]/20",
    navy: "from-[#262262]/10 to-[#262262]/5 border-[#262262]/20", 
    gold: "from-[#FFB700]/10 to-[#FFB700]/5 border-[#FFB700]/20"
  };
  
  return (
    <div className={`group relative flex h-full flex-col rounded-2xl border-2 bg-gradient-to-br p-8 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03] ${colorClasses[color]} ${className || ''}`}>
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
const ServiceCard = ({ title, children, icon, className, link }) => (
  <Link to={link} className={`group relative flex h-full flex-col rounded-xl border-2 border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#262262] ${className || ''}`}>
    <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">{title}</h3>
    <p className="mt-2 text-sm text-gray-600 leading-relaxed flex-grow">{children}</p>
    <div className="mt-4 flex items-center text-[#FFB700] font-medium text-sm group-hover:text-[#da1c5c] transition-colors duration-300">
      Learn more →
    </div>
  </Link>
);

// Niche Cards - Modern with brand accents
const NicheCard = ({ title, children, icon, className, link }) => (
  <Link to={link || "#"} className={`group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0] block ${className || ''}`}>
    <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">{title}</h3>
    <p className="mt-2 text-sm text-gray-600 leading-relaxed">{children}</p>
    <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
  </Link>
);

// Process Cards - Clean design with new color
const ProcessCard = ({ title, children, step, className }) => (
  <div className={`group relative flex h-full flex-col rounded-2xl border border-[#70CBD0]/30 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#70CBD0] ${className || ''}`}>
    <div className="mb-2 text-xs font-medium uppercase tracking-wide text-[#70CBD0] group-hover:text-[#da1c5c] transition-colors duration-300">{step}</div>
    <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#70CBD0]">{title}</h3>
    <p className="mt-2 text-sm text-gray-600 leading-relaxed">{children}</p>
    <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-[#70CBD0] to-[#da1c5c] rounded-full transition-all duration-300 group-hover:w-12" />
  </div>
);

// About Section Cards - Slick and modern with brand colors
const AboutCard = ({ title, children, color, className }) => {
  const colorClasses = {
    fuschia: "from-[#da1c5c]/15 to-[#da1c5c]/5 border-[#da1c5c]/20 hover:border-[#da1c5c]/40",
    navy: "from-[#262262]/15 to-[#262262]/5 border-[#262262]/20 hover:border-[#262262]/40", 
    gold: "from-[#FFB700]/15 to-[#FFB700]/5 border-[#FFB700]/20 hover:border-[#FFB700]/40"
  };
  
  return (
    <div className={`group relative flex h-full flex-col rounded-2xl border-2 bg-gradient-to-br p-6 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] ${colorClasses[color]} ${className || ''}`}>
      <h3 className="text-lg font-semibold text-[#262262] transition-colors duration-300 group-hover:text-[#da1c5c] mb-3">{title}</h3>
      <div className="text-sm text-gray-700 leading-relaxed flex-grow">{children}</div>
      <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#da1c5c] to-[#FFB700] rounded-full transition-all duration-300 group-hover:w-20" />
    </div>
  );
};

// Legacy Card for backward compatibility
const Card = ({ title, children, icon, className }) => (
  <div className={`group relative flex h-full flex-col rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] ${className || ''}`}>
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

  // Simple anchor scrolling for remaining sections
  React.useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          const headerHeight = 80;
          const elementPosition = element.offsetTop - headerHeight;
          
          window.scrollTo({
            top: Math.max(0, elementPosition),
            behavior: 'smooth'
          });
        }
      }
    };

    // Handle hash changes for remaining sections
    window.addEventListener('hashchange', scrollToHash);
    window.addEventListener('popstate', scrollToHash);
    
    // Initial attempt
    scrollToHash();

    return () => {
      window.removeEventListener('hashchange', scrollToHash);
      window.removeEventListener('popstate', scrollToHash);
    };
  }, []);

  // Google Analytics integration
  React.useEffect(() => {
    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-Y9LZTSGPKL';
    document.head.appendChild(script1);

    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-Y9LZTSGPKL');

    return () => {
      // Cleanup if needed
      if (script1.parentNode) {
        script1.parentNode.removeChild(script1);
      }
    };
  }, []);

  // Handle hash changes and browser navigation
  React.useEffect(() => {
    const scrollToAnchor = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          const headerHeight = 80;
          const elementPosition = element.offsetTop - headerHeight;
          
          window.scrollTo({
            top: Math.max(0, elementPosition),
            behavior: 'smooth'
          });
        }
      }
    };

    // Handle hash changes (same page navigation)
    const handleHashChange = () => {
      setTimeout(scrollToAnchor, 50);
    };
    window.addEventListener('hashchange', handleHashChange);

    // Handle popstate (browser back/forward)
    const handlePopState = () => {
      setTimeout(scrollToAnchor, 50);
    };
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Animated background for hero section only
  React.useEffect(() => {
    const canvas = document.getElementById('exodus-bg-hero');
    if (!canvas) {
      return;
    }
    
    const ctx = canvas.getContext('2d');
    let animationId;
    
    // Set canvas size
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
      }
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Create planet-like objects array
    const planets = [];
    const numPlanets = 40;
    
    // Color palette for planets
    const colors = [
      '#70CBD0', '#FFB700', '#da1c5c', '#262262', 
      '#8B5CF6', '#10B981', '#F59E0B', '#EF4444',
      '#06B6D4', '#84CC16', '#F97316', '#EC4899'
    ];
    
    // Initialize planets
    for (let i = 0; i < numPlanets; i++) {
      const size = Math.random() < 0.3 ? 
        Math.random() * 30 + 10 : 
        Math.random() * 140 + 50;
      
      const movementType = Math.random();
      const baseSpeed = Math.random() * 0.6 + 0.2; // Reduced from 1.5+0.5 to 0.6+0.2
      
      planets.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: size,
        baseSize: size,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02, // Reduced from 0.06 to 0.02
        speedX: (Math.random() - 0.5) * baseSpeed,
        speedY: (Math.random() - 0.5) * baseSpeed,
        opacity: Math.random() * 0.15 + 0.08, // Reduced from 0.4+0.2 to 0.15+0.08 (much more subtle)
        color: colors[Math.floor(Math.random() * colors.length)],
        pulsePhase: Math.random() * Math.PI * 2,
        orbitRadius: Math.random() * 120 + 30,
        orbitSpeed: (Math.random() - 0.5) * 0.01, // Reduced from 0.03 to 0.01
        orbitCenterX: Math.random() * canvas.width,
        orbitCenterY: Math.random() * canvas.height,
        hasOrbit: movementType < 0.3,
        glowIntensity: Math.random() * 0.2 + 0.1, // Reduced from 0.5+0.2 to 0.2+0.1 (less glow)
        type: Math.random() > 0.3 ? 'planet' : 'star',
        movementType: movementType,
        directionChange: Math.random() * 0.1 + 0.05, // Increased from 0.05+0.01 to 0.1+0.05 (slower direction changes)
        lastDirectionChange: 0,
        currentDirection: Math.random() * Math.PI * 2,
        speedVariation: Math.random() * 0.5 + 0.3, // Reduced variation
        driftX: (Math.random() - 0.5) * 0.15, // Reduced from 0.3 to 0.15
        driftY: (Math.random() - 0.5) * 0.15, // Reduced from 0.3 to 0.15
        behaviorType: Math.floor(Math.random() * 3),
        wanderRadius: Math.random() * 100 + 50,
        wanderCenterX: Math.random() * canvas.width,
        wanderCenterY: Math.random() * canvas.height
      });
    }
    
    // Add smaller particles
    const particles = [];
    const numParticles = 80;
    for (let i = 0; i < numParticles; i++) {
      const particleSpeed = Math.random() * 0.5 + 0.15; // Reduced from 1.2+0.3 to 0.5+0.15
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 1,
        speedX: (Math.random() - 0.5) * particleSpeed,
        speedY: (Math.random() - 0.5) * particleSpeed,
        opacity: Math.random() * 0.15 + 0.05, // Reduced from 0.3+0.1 to 0.15+0.05 (much more subtle)
        color: colors[Math.floor(Math.random() * colors.length)],
        pulsePhase: Math.random() * Math.PI * 2,
        directionChange: Math.random() * 0.08 + 0.05, // Increased from 0.03+0.01 to 0.08+0.05 (slower changes)
        lastDirectionChange: 0,
        currentDirection: Math.random() * Math.PI * 2,
        speedVariation: Math.random() * 0.4 + 0.3, // Reduced variation
        driftX: (Math.random() - 0.5) * 0.2, // Reduced from 0.4 to 0.2
        driftY: (Math.random() - 0.5) * 0.2 // Reduced from 0.4 to 0.2
      });
    }
    
    let time = 0;
    const animate = () => {
      try {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw planets (same logic as ExodusAnimatedBackground)
        planets.forEach((planet, index) => {
          if (planet.hasOrbit) {
            planet.orbitCenterX += planet.driftX + (Math.random() - 0.5) * 0.2;
            planet.orbitCenterY += planet.driftY + (Math.random() - 0.5) * 0.2;
            planet.x = planet.orbitCenterX + Math.cos(time * planet.orbitSpeed + index) * planet.orbitRadius;
            planet.y = planet.orbitCenterY + Math.sin(time * planet.orbitSpeed + index) * planet.orbitRadius;
          } else {
            if (planet.behaviorType === 0) {
              if (time - planet.lastDirectionChange > planet.directionChange) {
                planet.currentDirection += (Math.random() - 0.5) * 0.1;
                planet.lastDirectionChange = time;
              }
              const moveX = Math.cos(planet.currentDirection) * planet.speedX * 0.3;
              const moveY = Math.sin(planet.currentDirection) * planet.speedY * 0.3;
              planet.x += moveX;
              planet.y += moveY;
            } else if (planet.behaviorType === 1) {
              const distanceFromCenter = Math.sqrt(
                Math.pow(planet.x - planet.wanderCenterX, 2) + 
                Math.pow(planet.y - planet.wanderCenterY, 2)
              );
              
              if (distanceFromCenter > planet.wanderRadius) {
                const angleToCenter = Math.atan2(
                  planet.wanderCenterY - planet.y, 
                  planet.wanderCenterX - planet.x
                );
                planet.currentDirection = angleToCenter;
              } else if (time - planet.lastDirectionChange > planet.directionChange) {
                planet.currentDirection += (Math.random() - 0.5) * 0.3;
                planet.lastDirectionChange = time;
              }
              
              const moveX = Math.cos(planet.currentDirection) * planet.speedX;
              const moveY = Math.sin(planet.currentDirection) * planet.speedY;
              planet.x += moveX;
              planet.y += moveY;
            } else {
              if (time - planet.lastDirectionChange > planet.directionChange) {
                const targetDirection = Math.random() * Math.PI * 2;
                const directionDiff = targetDirection - planet.currentDirection;
                planet.currentDirection += directionDiff * 0.1; // Reduced from 0.2 to 0.1 (slower turns)
                planet.lastDirectionChange = time;
                
                const targetSpeed = Math.random() * planet.speedVariation;
                planet.speedX = (Math.random() - 0.5) * targetSpeed;
                planet.speedY = (Math.random() - 0.5) * targetSpeed;
              }
              
              const turbulenceX = (Math.random() - 0.5) * 0.1; // Reduced from 0.3 to 0.1
              const turbulenceY = (Math.random() - 0.5) * 0.1; // Reduced from 0.3 to 0.1
              
              const moveX = Math.cos(planet.currentDirection) * planet.speedX + turbulenceX;
              const moveY = Math.sin(planet.currentDirection) * planet.speedY + turbulenceY;
              
              planet.x += moveX;
              planet.y += moveY;
            }
          }
          
          planet.rotation += planet.rotationSpeed;
          planet.pulsePhase += 0.01; // Reduced from 0.02 to 0.01 (slower pulsing)
          
          if (planet.x > canvas.width + planet.size) planet.x = -planet.size;
          if (planet.x < -planet.size) planet.x = canvas.width + planet.size;
          if (planet.y > canvas.height + planet.size) planet.y = -planet.size;
          if (planet.y < -planet.size) planet.y = canvas.height + planet.size;
          
          const pulseSize = Math.max(5, planet.baseSize + Math.sin(planet.pulsePhase) * 25);
          const pulseOpacity = Math.max(0, Math.min(1, planet.opacity + Math.sin(planet.pulsePhase + index) * 0.25));
          
          ctx.save();
          ctx.translate(planet.x, planet.y);
          ctx.rotate(planet.rotation);
          ctx.globalAlpha = Math.max(0, Math.min(1, pulseOpacity));
          
          if (planet.type === 'star') {
            ctx.beginPath();
            const spikes = 8;
            const outerRadius = pulseSize;
            const innerRadius = pulseSize * 0.4;
            
            for (let i = 0; i < spikes * 2; i++) {
              const angle = (i * Math.PI) / spikes;
              const radius = i % 2 === 0 ? outerRadius : innerRadius;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              if (i === 0) {
                ctx.moveTo(x, y);
              } else {
                ctx.lineTo(x, y);
              }
            }
            ctx.closePath();
            ctx.fillStyle = planet.color + '40'; // Added transparency '40' (was opaque)
            ctx.fill();
          } else {
            const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, pulseSize);
            gradient.addColorStop(0, planet.color + '40'); // Added transparency '40' (was opaque)
            gradient.addColorStop(0.7, planet.color + '30'); // Reduced from '80' to '30'
            gradient.addColorStop(1, planet.color + '15'); // Reduced from '40' to '15'
            
            ctx.beginPath();
            ctx.arc(0, 0, pulseSize, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();
            
            ctx.shadowColor = planet.color;
            ctx.shadowBlur = planet.glowIntensity * 15; // Reduced from 30 to 15
            ctx.beginPath();
            ctx.arc(0, 0, pulseSize * 0.8, 0, Math.PI * 2);
            ctx.fillStyle = planet.color + '30'; // Reduced from '60' to '30'
            ctx.fill();
            ctx.shadowBlur = 0;
          }
          
          ctx.restore();
        });
        
        // Update and draw particles
        particles.forEach((particle, index) => {
          if (time - particle.lastDirectionChange > particle.directionChange) {
            const targetDirection = Math.random() * Math.PI * 2;
            const directionDiff = targetDirection - particle.currentDirection;
            particle.currentDirection += directionDiff * 0.08; // Reduced from 0.15 to 0.08 (slower turns)
            particle.lastDirectionChange = time;
            
            const targetSpeed = Math.random() * particle.speedVariation;
            particle.speedX = (Math.random() - 0.5) * targetSpeed;
            particle.speedY = (Math.random() - 0.5) * targetSpeed;
          }
          
          const turbulenceX = (Math.random() - 0.5) * 0.1; // Reduced from 0.3 to 0.1
          const turbulenceY = (Math.random() - 0.5) * 0.1; // Reduced from 0.3 to 0.1
          
          const moveX = Math.cos(particle.currentDirection) * particle.speedX + turbulenceX;
          const moveY = Math.sin(particle.currentDirection) * particle.speedY + turbulenceY;
          
          particle.x += moveX;
          particle.y += moveY;
          particle.pulsePhase += 0.015; // Reduced from 0.03 to 0.015 (slower pulsing)
          
          if (particle.x > canvas.width) particle.x = 0;
          if (particle.x < 0) particle.x = canvas.width;
          if (particle.y > canvas.height) particle.y = 0;
          if (particle.y < 0) particle.y = canvas.height;
          
          const pulseSize = Math.max(0.5, particle.size + Math.sin(particle.pulsePhase) * 3);
          const pulseOpacity = Math.max(0, Math.min(1, particle.opacity + Math.sin(particle.pulsePhase + index) * 0.1)); // Reduced from 0.2 to 0.1 (less variation)
          
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2);
          ctx.fillStyle = particle.color + Math.floor(pulseOpacity * 255).toString(16).padStart(2, '0');
          ctx.fill();
        });
        
        // Connection lines between nearby planets
        for (let i = 0; i < planets.length; i++) {
          for (let j = i + 1; j < planets.length; j++) {
            const dx = planets[i].x - planets[j].x;
            const dy = planets[i].y - planets[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 250) {
              ctx.beginPath();
              ctx.moveTo(planets[i].x, planets[i].y);
              ctx.lineTo(planets[j].x, planets[j].y);
              ctx.strokeStyle = `rgba(112, 203, 208, ${0.03 * (1 - distance / 250)})`; // Reduced from 0.08 to 0.03 (more subtle)
              ctx.lineWidth = 0.5; // Reduced from 0.8 to 0.5 (thinner lines)
              ctx.stroke();
            }
          }
        }
        
        time += 0.005; // Reduced from 0.01 to 0.005 (slower, more settled animation)
        animationId = requestAnimationFrame(animate);
      } catch (error) {
        console.error('Animation error:', error);
        animationId = requestAnimationFrame(animate);
      }
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);



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
      @keyframes exodusFloat {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        25% { transform: translateY(-10px) rotate(1deg); }
        50% { transform: translateY(-5px) rotate(0deg); }
        75% { transform: translateY(-15px) rotate(-1deg); }
      }
      @keyframes exodusPulse {
        0%, 100% { transform: scale(1); opacity: 0.3; }
        50% { transform: scale(1.1); opacity: 0.6; }
      }
      @keyframes exodusGlow {
        0%, 100% { box-shadow: 0 0 20px rgba(112, 203, 208, 0.3); }
        50% { box-shadow: 0 0 40px rgba(112, 203, 208, 0.6), 0 0 60px rgba(255, 183, 0, 0.3); }
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
      .animate-exodus-float {
        animation: exodusFloat 4s ease-in-out infinite;
      }
      .animate-exodus-pulse {
        animation: exodusPulse 3s ease-in-out infinite;
      }
      .animate-exodus-glow {
        animation: exodusGlow 2s ease-in-out infinite;
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
    { href: "/contact", label: "Contact" },
  ];

  return (
    <HelmetProvider>
      <Router>
      <Routes>
        <Route path="/" element={
          <>
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "LunaraTech",
                "url": "https://lunaratech.com",
                "logo": "https://lunaratech.com/lunaratechLogo.png",
                "description": "Professional website development and digital solutions company specializing in custom websites, e-commerce, and digital marketing for businesses across all industries.",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "US"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+1-507-400-3910",
                  "contactType": "customer service",
                  "availableLanguage": "English"
                },
                "sameAs": ["https://lunaratech.com"],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Web Development Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Website Development"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "E-commerce Development"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "UI/UX Design"
                      }
                    }
                  ]
                }
              })}
            </script>
            <GradientOverlay />
            <main className="min-h-screen bg-white/95 backdrop-blur-sm text-gray-900 relative z-20">
        {/* Wrapper for header and hero with animated background */}
        <div className="relative overflow-hidden">
          {/* Animated background for header and hero sections only */}
          <div className="absolute inset-0 pointer-events-none z-0" style={{height: 'calc(100vh + 80px)'}}>
            <canvas
              id="exodus-bg-hero"
              className="absolute inset-0 pointer-events-none z-0"
              style={{ background: 'transparent' }}
            />
          </div>
          
          {/* Top nav */}
          <header className="sticky top-0 z-40 backdrop-blur-sm bg-transparent relative overflow-hidden">
            {/* Background image for header */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 z-0 pointer-events-none"
              style={{backgroundImage: 'url(/lunara-background.jpg)'}}
            />
            <div className="mx-auto flex max-w-7xl items-start justify-between px-4 py-3 sm:py-4 relative z-10">
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
              <a href="/contact" className="hidden rounded-md bg-[#FFB700] px-4 py-2 text-sm font-medium text-gray-900 hover:bg-[#e6a038] transition-all duration-300 sm:inline-flex mt-2">Get Quote</a>
            </div>
          </header>

          {/* Hero */}
          <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image - barely visible */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 z-0"
          style={{backgroundImage: 'url(/lunara-background.jpg)'}}
        />
        {/* Enhanced background with multiple animated layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#70CBD0]/10 via-white to-[#FFB700]/10 animate-exodus-pulse z-10" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#262262]/8 to-transparent animate-exodus-float" />
        <div className="absolute inset-0 bg-gradient-to-bl from-[#8B5CF6]/5 via-transparent to-[#EC4899]/5 animate-exodus-glow" />
        
        {/* Content */}
        <div className="relative z-30 mx-auto max-w-7xl px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mt-15 text-4xl font-bold tracking-tight sm:text-7xl" style={{textRendering: 'optimizeLegibility', WebkitFontSmoothing: 'antialiased'}}>
              <span className="text-[#0f0f3d]">Turn</span>{' '}
              <span className="text-[#006b7d]">vision</span>{' '}
              <span className="text-[#8b0036]">into</span>{' '}
              <span className="text-[#b8860b]">velocity</span>
            </h1>
            <p className="mx-auto mt-10 max-w-3xl text-lg text-gray-600 animate-fade-in leading-relaxed">
              We craft clean code, bold design, and real connections. From idea to launch, we build experiences that scale, convert, and feel great to use.
            </p>
            
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <a href="/contact" className="group relative rounded-xl bg-gradient-to-r from-[#da1c5c] to-[#c01a52] px-8 py-4 text-sm font-semibold text-white hover:from-[#c01a52] hover:to-[#b0184a] transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg">
                <span className="relative z-10">Start a Project</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#da1c5c] to-[#c01a52] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a href="#services" className="group relative rounded-xl border-2 border-[#262262] bg-white/80 backdrop-blur-sm px-8 py-4 text-sm font-semibold text-[#262262] hover:border-[#1a1a4a] hover:bg-[#f8f9ff] transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <span className="relative z-10">What we do</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#70CBD0]/10 to-[#FFB700]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>
            
          </div>
        </div>
        
        {/* Enhanced floating decorative elements - larger and more dynamic */}
        <div className="absolute top-20 left-10 w-8 h-8 bg-gradient-to-br from-[#70CBD0]/40 to-[#70CBD0]/20 rounded-full animate-exodus-float shadow-lg" style={{animationDelay: '0s'}} />
        <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-br from-[#FFB700]/40 to-[#FFB700]/20 rounded-full animate-exodus-pulse shadow-lg" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-40 left-20 w-6 h-6 bg-gradient-to-br from-[#da1c5c]/40 to-[#da1c5c]/20 rounded-full animate-exodus-float shadow-lg" style={{animationDelay: '2s'}} />
        <div className="absolute bottom-20 right-10 w-10 h-10 bg-gradient-to-br from-[#262262]/40 to-[#262262]/20 rounded-full animate-exodus-pulse shadow-lg" style={{animationDelay: '0.5s'}} />
        
        {/* Additional floating shapes - more variety */}
        <div className="absolute top-60 left-1/4 w-4 h-4 bg-gradient-to-br from-[#8B5CF6]/30 to-[#8B5CF6]/10 rounded-full animate-exodus-float" style={{animationDelay: '1.5s'}} />
        <div className="absolute top-80 right-1/3 w-6 h-6 bg-gradient-to-br from-[#10B981]/30 to-[#10B981]/10 rounded-full animate-exodus-pulse" style={{animationDelay: '2.5s'}} />
        <div className="absolute bottom-60 right-1/4 w-4 h-4 bg-gradient-to-br from-[#F59E0B]/30 to-[#F59E0B]/10 rounded-full animate-exodus-float" style={{animationDelay: '3s'}} />
        <div className="absolute bottom-80 left-1/3 w-8 h-8 bg-gradient-to-br from-[#EC4899]/30 to-[#EC4899]/10 rounded-full animate-exodus-pulse" style={{animationDelay: '0.8s'}} />
        
        {/* More floating elements for density */}
        <div className="absolute top-32 left-1/3 w-3 h-3 bg-[#06B6D4]/25 rounded-full animate-exodus-float" style={{animationDelay: '2.2s'}} />
        <div className="absolute top-72 right-1/4 w-5 h-5 bg-[#84CC16]/25 rounded-full animate-exodus-pulse" style={{animationDelay: '1.8s'}} />
        <div className="absolute bottom-32 left-1/2 w-4 h-4 bg-[#F97316]/25 rounded-full animate-exodus-float" style={{animationDelay: '3.5s'}} />
        <div className="absolute bottom-72 right-1/2 w-3 h-3 bg-[#EF4444]/25 rounded-full animate-exodus-pulse" style={{animationDelay: '1.2s'}} />
        
        {/* Large background orbs */}
        <div className="absolute top-10 left-1/2 w-32 h-32 bg-gradient-to-br from-[#70CBD0]/10 to-transparent rounded-full animate-exodus-float blur-sm" style={{animationDelay: '0s', animationDuration: '8s'}} />
        <div className="absolute bottom-10 right-1/2 w-40 h-40 bg-gradient-to-br from-[#FFB700]/10 to-transparent rounded-full animate-exodus-pulse blur-sm" style={{animationDelay: '2s', animationDuration: '10s'}} />
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-gradient-to-br from-[#8B5CF6]/8 to-transparent rounded-full animate-exodus-glow blur-sm" style={{animationDelay: '4s', animationDuration: '12s'}} />
        <div className="absolute top-1/2 right-10 w-28 h-28 bg-gradient-to-br from-[#EC4899]/8 to-transparent rounded-full animate-exodus-float blur-sm" style={{animationDelay: '6s', animationDuration: '9s'}} />
        
        {/* Additional floating bubbles for more density */}
        <div className="absolute top-1/4 left-1/3 w-6 h-6 bg-[#10B981]/20 rounded-full animate-exodus-float" style={{animationDelay: '1.2s'}} />
        <div className="absolute top-3/4 right-1/3 w-4 h-4 bg-[#F59E0B]/20 rounded-full animate-exodus-pulse" style={{animationDelay: '2.8s'}} />
        <div className="absolute top-1/3 right-1/4 w-5 h-5 bg-[#06B6D4]/20 rounded-full animate-exodus-float" style={{animationDelay: '3.2s'}} />
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-[#84CC16]/20 rounded-full animate-exodus-pulse" style={{animationDelay: '1.8s'}} />
        <div className="absolute top-2/3 left-2/3 w-4 h-4 bg-[#F97316]/20 rounded-full animate-exodus-float" style={{animationDelay: '4.1s'}} />
        <div className="absolute bottom-1/4 right-2/3 w-5 h-5 bg-[#EF4444]/20 rounded-full animate-exodus-pulse" style={{animationDelay: '2.5s'}} />
        
        {/* Extra small floating dots */}
        <div className="absolute top-16 left-1/2 w-2 h-2 bg-[#70CBD0]/15 rounded-full animate-exodus-float" style={{animationDelay: '0.5s'}} />
        <div className="absolute top-24 right-1/2 w-1.5 h-1.5 bg-[#FFB700]/15 rounded-full animate-exodus-pulse" style={{animationDelay: '1.5s'}} />
        <div className="absolute bottom-16 left-1/2 w-2 h-2 bg-[#da1c5c]/15 rounded-full animate-exodus-float" style={{animationDelay: '3.5s'}} />
        <div className="absolute bottom-24 right-1/2 w-1.5 h-1.5 bg-[#262262]/15 rounded-full animate-exodus-pulse" style={{animationDelay: '2.2s'}} />
      </section>
        </div>

      {/* Value props */}
      <section className="border-y border-gray-100 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-16 sm:grid-cols-3">
          <ValueCard title="Clean Code" icon={<img src="/lunaratechIcon3.png" alt="LunaraTech Icon" className="h-20 w-20"/>} color="fuschia" className="animate-float" style={{animationDelay: '0s'}}>We write code that's readable, maintainable, and built to scale — ensuring smooth development and long-term stability.</ValueCard>
          <ValueCard title="Bold Design" icon={<img src="/lunaratechIcon3.png" alt="LunaraTech Icon" className="h-20 w-20"/>} color="navy" className="animate-float" style={{animationDelay: '1s'}}>Modern, intuitive, and tailored to create lasting impressions across devices and contexts.</ValueCard>
          <ValueCard title="Real Connection" icon={<img src="/lunaratechIcon3.png" alt="LunaraTech Icon" className="h-20 w-20"/>} color="gold" className="animate-float" style={{animationDelay: '2s'}}>Genuine collaboration that turns your ideas into digital experiences people love.</ValueCard>
        </div>
      </section>

      {/* Niches */}
      <section className="px-4 py-16 sm:py-20" id="niches" style={{paddingTop: '8rem'}}>
        <SectionHeader
          eyebrow=""
          title="Niches that work for your world"
          subtitle="We tailor strategy, design, and technology to your industry — built to perform and evolve."
        />
        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {t:"Plumbing", d:"Fast, functional sites with service highlights, testimonials, and simple booking.", icon:<Faucet/>, link:"/plumbing-website-design"},
            {t:"Landscaping", d:"Showcase projects with beautiful, responsive portfolios for outdoor services.", icon:<Leaf/>, link:"/landscaping-website-design"},
            {t:"Wellness", d:"Calm design, booking systems, and storytelling that builds trust.", icon:<Heart/>, link:"/wellness-website-design"},
            {t:"eCommerce", d:"Scalable stores with streamlined navigation, secure checkout, and conversion-focused UX.", icon:<Cart/>, link:"/ecommerce-website-development"},
            {t:"Contractors", d:"Lead-driving sites that highlight expertise and portfolios.", icon:<Hammer/>, link:"/contractor-website-design"},
            {t:"Restaurants", d:"Menus, reservations, delivery integrations — sites that whet appetites.", icon:<Utensils/>, link:"/restaurant-website-design"},
            {t:"Real Estate", d:"Custom listings, MLS integrations, and smart lead capture.", icon:<HomeIco/>, link:"/real-estate-website-design"},
            {t:"Nonprofit", d:"Donation tools, volunteer signups, and compelling impact visuals.", icon:<HandHeart/>, link:"/nonprofit-website-design"},
            {t:"Education", d:"Websites for schools and e-learning with scheduling and content delivery.", icon:<Book/>, link:"/education-website-design"},
            {t:"Events", d:"Speaker bios, registration, schedules, and live-stream integrations.", icon:<Calendar/>, link:"/events-website-design"},
            {t:"Personal", d:"Creators, coaches, influencers — elevate your brand and grow your audience.", icon:<UserIco/>, link:"/personal-website-design"},
            {t:"Custom", d:"Have a unique vision? We'll build it from the ground up for your goals.", icon:<Sparkles/>, link:"/custom-website-development"},
          ].map((i, index)=> (
            <NicheCard key={i.t} title={i.t} icon={i.icon} link={i.link} className="animate-float" style={{animationDelay: `${index * 0.1}s`}}>{i.d}</NicheCard>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-gray-100 bg-gradient-to-br from-[#70CBD0]/10 to-[#70CBD0]/5 px-4 py-16 sm:py-20" id="services" style={{paddingTop: '8rem'}}>
        <SectionHeader
          eyebrow=""
          title="From concept to launch — and beyond"
          subtitle="Design, development, hosting, and ongoing support for a seamless digital experience."
        />
        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard title="Website Development" icon={<Check/>} link="/website-development">Fast, scalable, user-friendly websites using modern frameworks — crafted to meet your goals and delight users.</ServiceCard>
          <ServiceCard title="UI Prototyping" icon={<Check/>} link="/ui-prototyping">Interactive wireframes and prototypes to validate flows and align stakeholders before build.</ServiceCard>
          <ServiceCard title="Graphic Design" icon={<Check/>} link="/graphic-design">Pixel-perfect UI aligned to your brand for a consistent, engaging experience.</ServiceCard>
          <ServiceCard title="Hosting & Deployment" icon={<Check/>} link="/hosting-deployment">Secure, scalable hosting and smooth deployments — your site stays fast and reliable.</ServiceCard>
          <ServiceCard title="Maintenance & Support" icon={<Check/>} link="/maintenance-support">Reliable updates, monitoring, and feature rollouts to keep you growing.</ServiceCard>
          <ServiceCard title="Accessibility" icon={<Check/>} link="/accessibility">WCAG/ADA-minded design for inclusivity, compliance, and better UX for everyone.</ServiceCard>
        </div>
      </section>

      {/* About */}
      <section className="px-4 py-16 sm:py-20" id="about" style={{paddingTop: '8rem'}}>
        <SectionHeader
          eyebrow=""
          title="Who we are"
          subtitle="A family-run boutique. Less boardroom, more creative kitchen table — with better snacks."
        />
        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2 items-stretch">
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
            <div className="rounded-2xl border border-[#262262]/20 bg-gradient-to-br from-[#262262]/5 to-[#da1c5c]/5 p-6 flex-grow">
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
                <Stat className ="pl-0 pr-0 bg-gradient-to-br from-[#FFB700]/10 to-[#FFB700]/5" value="3" label="Decades<br/>of Experience"/>
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
                  <img src="/lunaratechIcon2.png" alt="LunaraTech Icon" className="h-12 w-12 flex-shrink-0"/>
                  <span className="text-sm text-gray-600">Custom web applications built with React, Next.js, Java, Kotlin, and cloud infrastructure across AWS, GCP, and Azure</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/lunaratechIcon2.png" alt="LunaraTech Icon" className="h-12 w-12 flex-shrink-0"/>
                  <span className="text-sm text-gray-600">Mobile apps for iOS and Android using modern frameworks, microservices, and native architecture</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/lunaratechIcon2.png" alt="LunaraTech Icon" className="h-12 w-12 flex-shrink-0"/>
                  <span className="text-sm text-gray-600">E-commerce platforms and enterprise solutions that scale against modern requirements</span>
                </div>
              </div>
            </AboutCard>
            <AboutCard title="How we do it" color="gold">
              Intentional design, clean development, and strategic thinking to turn bold ideas into products that connect and perform. We combine cutting-edge technology with time-tested methodologies to deliver solutions that scale with your growth.
              
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <img src="/lunaratechIcon2.png" alt="LunaraTech Icon" className="h-12 w-12 flex-shrink-0"/>
                  <span className="text-sm text-gray-600">User-centered, AI-powered design and development process with wireframes and prototypes</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/lunaratechIcon2.png" alt="LunaraTech Icon" className="h-12 w-12 flex-shrink-0"/>
                  <span className="text-sm text-gray-600">Agile development with continuous testing, model retraining, and iterative refinement across data-driven pipelines</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/lunaratechIcon2.png" alt="LunaraTech Icon" className="h-12 w-12 flex-shrink-0"/>
                  <span className="text-sm text-gray-600">Integrating AI into customer products and workflows to transform static systems into dynamic, learning-driven experiences</span>
                </div>
              </div>
            </AboutCard>
            <AboutCard title="Built on Collaboration" color="fuschia">
              Designers, developers, and strategists working side-by-side (literally). We listen, challenge, and support — every step of the way. This collaborative approach ensures every decision is informed by multiple perspectives and every solution is crafted with your success in mind.
              
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <img src="/lunaratechIcon2.png" alt="LunaraTech Icon" className="h-12 w-12 flex-shrink-0"/>
                  <span className="text-sm text-gray-600">Regular check-ins and transparent communication throughout the project to address challenges early, and keep every stakeholder engaged</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/lunaratechIcon2.png" alt="LunaraTech Icon" className="h-12 w-12 flex-shrink-0"/>
                  <span className="text-sm text-gray-600">Cross-functional team approach with shared ownership to ensure that every aspect of the project is aligned and working towards the same goals</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/lunaratechIcon2.png" alt="LunaraTech Icon" className="h-12 w-12 flex-shrink-0"/>
                  <span className="text-sm text-gray-600">Your feedback drives every decision and iteration to ensure that the final product meets your expectations and needs</span>
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
              <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] flex flex-col">
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
              <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] flex flex-col">
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
              <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] flex flex-col">
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
      <section className="border-y border-gray-100 bg-gray-50 px-4 py-16 sm:py-20" id="process" style={{paddingTop: '8rem'}}>
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



      {/* Footer */}
      <footer className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
          <div className="text-sm text-gray-600">© {new Date().getFullYear()} LunaraTech. All rights reserved.</div>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="/contact" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
            </main>
            
            {/* Hidden SEO Content for Search Engines */}
            <div className="sr-only">
              <h1>LunaraTech - Professional Website Development & Digital Solutions</h1>
              <p>Transform your business with custom website development, e-commerce solutions, and digital marketing services. We specialize in creating professional websites for restaurants, contractors, healthcare providers, and businesses across all industries.</p>
              
              <h2>Our Services</h2>
              <ul>
                <li>Custom Website Development - Responsive, mobile-optimized websites</li>
                <li>E-commerce Development - Online stores with payment processing</li>
                <li>UI/UX Design - User-friendly interface design and prototyping</li>
                <li>Graphic Design - Logo design, branding, and marketing materials</li>
                <li>Hosting & Deployment - Reliable web hosting and deployment services</li>
                <li>Website Maintenance - Ongoing support and updates</li>
                <li>Accessibility Services - ADA-compliant website design</li>
              </ul>
              
              <h2>Industry Specializations</h2>
              <ul>
                <li>Restaurant Website Design - Online ordering and menu integration</li>
                <li>Plumbing Website Design - Emergency service websites</li>
                <li>Contractor Website Design - Construction and home improvement</li>
                <li>Real Estate Website Design - Property listings and agent websites</li>
                <li>Healthcare Website Design - Medical practice websites</li>
                <li>E-commerce Development - Online store solutions</li>
                <li>Nonprofit Website Design - Charity and organization websites</li>
                <li>Education Website Design - School and learning websites</li>
                <li>Events Website Design - Event planning and management</li>
                <li>Personal Website Design - Portfolio and professional websites</li>
                <li>Custom Website Development - Bespoke web solutions</li>
              </ul>
              
              <h2>Why Choose LunaraTech?</h2>
              <ul>
                <li>Professional web development services</li>
                <li>Mobile-responsive design</li>
                <li>SEO optimization</li>
                <li>Fast loading times</li>
                <li>Secure hosting</li>
                <li>24/7 support</li>
                <li>Free consultation and quote</li>
                <li>Proven track record with 100+ businesses</li>
              </ul>
              
              <p>Contact us today at (507) 400-3910 or visit our website for a free consultation and quote. We're here to help your business succeed online with professional website development and digital marketing solutions.</p>
            </div>
          </>
        } />
        <Route path="/website-development" element={<WebsiteDevelopment />} />
        <Route path="/ui-prototyping" element={<UIPrototyping />} />
        <Route path="/graphic-design" element={<GraphicDesign />} />
        <Route path="/hosting-deployment" element={<HostingDeployment />} />
        <Route path="/maintenance-support" element={<MaintenanceSupport />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Niche Pages */}
        <Route path="/plumbing-website-design" element={<PlumbingWebsiteDesign />} />
        <Route path="/restaurant-website-design" element={<RestaurantWebsiteDesign />} />
        <Route path="/ecommerce-website-development" element={<EcommerceWebsiteDevelopment />} />
        <Route path="/landscaping-website-design" element={<LandscapingWebsiteDesign />} />
        <Route path="/wellness-website-design" element={<WellnessWebsiteDesign />} />
        <Route path="/contractor-website-design" element={<ContractorWebsiteDesign />} />
        <Route path="/real-estate-website-design" element={<RealEstateWebsiteDesign />} />
        <Route path="/nonprofit-website-design" element={<NonprofitWebsiteDesign />} />
        <Route path="/education-website-design" element={<EducationWebsiteDesign />} />
        <Route path="/events-website-design" element={<EventsWebsiteDesign />} />
        <Route path="/personal-website-design" element={<PersonalWebsiteDesign />} />
        <Route path="/custom-website-development" element={<CustomWebsiteDevelopment />} />
      </Routes>
      </Router>
    </HelmetProvider>
  );
}