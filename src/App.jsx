import React, { useState } from "react";

// Single-file, preview-ready React landing page
// Theme: clean, airy, white with soft accents
// Tailwind is available by default in this environment
// Icons: inline SVG (black & white, lightweight, fully scalable)

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
  <div className={`rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-500 hover:shadow-lg hover:-translate-y-1 hover:scale-105 hover:border-gray-300 ${className || ''}`}>
    <div className="text-4xl font-semibold tracking-tight transition-all duration-300 hover:text-gray-700">{value}</div>
    <div className="mt-2 text-sm text-gray-600">{label}</div>
  </div>
);

const SectionHeader = ({ eyebrow, title, subtitle, id }) => (
  <div className="mx-auto max-w-3xl text-center" id={id}>
    {eyebrow && (
      <div className="mb-3 inline-block rounded-lg border border-gray-200 bg-white px-3 py-1 text-xs uppercase tracking-wide text-gray-600">
        {eyebrow}
      </div>
    )}
    <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
    {subtitle && (
      <p className="mt-3 text-gray-600">{subtitle}</p>
    )}
  </div>
);

const Card = ({ title, children, icon, className }) => (
  <div className={`group relative flex h-full flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] ${className || ''}`}>
    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gray-50 text-gray-700 ring-1 ring-gray-200 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-gray-700">{title}</h3>
    <p className="mt-2 text-sm text-gray-600 leading-relaxed">{children}</p>
    <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent transition-all duration-300 group-hover:from-transparent group-hover:via-gray-400 group-hover:to-transparent" />
  </div>
);

const Input = (props) => (
  <input {...props} className={`w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-sm focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 ${props.className||''}`} />
);

const Textarea = (props) => (
  <textarea {...props} className={`w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-sm focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 ${props.className||''}`} />
);

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
      .animate-fade-in {
        animation: fadeIn 1s ease-out;
      }
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      .animate-pulse-slow {
        animation: pulse 2s ease-in-out infinite;
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
    <main className="min-h-screen bg-white text-gray-900">
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
              <a href="#contact" className="rounded-md bg-blue-50 px-6 py-3 text-sm font-medium text-blue-600 hover:bg-blue-100 transition-all duration-300 hover:scale-105 animate-bounce">Start a Project</a>
              <a href="#services" className="rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 hover:scale-105">What we do</a>
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="border-y border-gray-100 bg-gray-50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-12 sm:grid-cols-3">
          <Card title="Clean Code" icon={<Check/>} className="bg-red-50 animate-float" style={{animationDelay: '0s'}}>We write code that's readable, maintainable, and built to scale — ensuring smooth development and long‑term stability.</Card>
          <Card title="Bold Design" icon={<Star/>} className="bg-blue-50 animate-float" style={{animationDelay: '1s'}}>Modern, intuitive, and tailored to create lasting impressions across devices and contexts.</Card>
          <Card title="Real Connection" icon={<Arrow/>} className="bg-green-50 animate-float" style={{animationDelay: '2s'}}>Genuine collaboration that turns your ideas into digital experiences people love.</Card>
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
            {t:"eCommerce", d:"Scalable stores with streamlined navigation, secure checkout, and conversion‑focused UX.", icon:<Cart/>},
            {t:"Contractors", d:"Lead‑driving sites that highlight expertise and portfolios.", icon:<Hammer/>},
            {t:"Restaurants", d:"Menus, reservations, delivery integrations — sites that whet appetites.", icon:<Utensils/>},
            {t:"Real Estate", d:"Custom listings, MLS integrations, and smart lead capture.", icon:<HomeIco/>},
            {t:"Nonprofit", d:"Donation tools, volunteer signups, and compelling impact visuals.", icon:<HandHeart/>},
            {t:"Education", d:"Websites for schools and e‑learning with scheduling and content delivery.", icon:<Book/>},
            {t:"Events", d:"Speaker bios, registration, schedules, and live‑stream integrations.", icon:<Calendar/>},
            {t:"Personal", d:"Creators, coaches, influencers — elevate your brand and grow your audience.", icon:<UserIco/>},
            {t:"Custom", d:"Have a unique vision? We’ll build it from the ground up for your goals.", icon:<Sparkles/>},
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
        <SectionHeader
          eyebrow=""
          title="From concept to launch — and beyond"
          subtitle="Design, development, hosting, and ongoing support for a seamless digital experience."
        />
        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card title="Website Development" icon={<Check/>}>Fast, scalable, user‑friendly websites using modern frameworks — crafted to meet your goals and delight users.</Card>
          <Card title="UI Prototyping" icon={<Check/>}>Interactive wireframes and prototypes to validate flows and align stakeholders before build.</Card>
          <Card title="Graphic Design" icon={<Check/>}>Pixel‑perfect UI aligned to your brand for a consistent, engaging experience.</Card>
          <Card title="Hosting & Deployment" icon={<Check/>}>Secure, scalable hosting and smooth deployments — your site stays fast and reliable.</Card>
          <Card title="Maintenance & Support" icon={<Check/>}>Reliable updates, monitoring, and feature rollouts to keep you growing.</Card>
          <Card title="Accessibility" icon={<Check/>}>WCAG/ADA‑minded design for inclusivity, compliance, and better UX for everyone.</Card>
        </div>
      </section>

      {/* About */}
      <section className="px-4 py-16 sm:py-20" id="about">
        <SectionHeader
          eyebrow=""
          title="Who we are"
          subtitle="A family‑run boutique studio. Less boardroom, more creative kitchen table — with better snacks."
        />
        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-gray-700 leading-relaxed">
              Our small but mighty team blends software development, graphic design, and marketing into a digital Swiss Army knife. We're the folks who actually build your product — no hand‑offs, no support queues, and definitely no "it works on my machine" excuses. Think of us as your tech-savvy best friend who happens to know how to make websites that don't break when someone sneezes at them.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              From early‑stage UX research and wireframes to jaw‑dropping UI and flawless development, we’re with you at every step. Need go‑to‑market? We’ve got it — ideally without a single boring slide deck.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <Stat className ="pl-0 pr-0" value="6" label="Areas of Expertise"/>
              <Stat className ="pl-0 pr-0" value="1" label="Tightly-Knit Team"/>
              <Stat className ="pl-0 pr-0" value="3" label="Decades Combined"/>
            </div>
            <p className="mt-6 text-sm text-gray-600 leading-relaxed">
              We're not your typical agency. We're the kind of team that gets excited about CSS Grid, debates the merits of dark mode at 2 AM, and actually reads the documentation. When we're not coding, we're probably arguing about whether pineapple belongs on pizza (it doesn't) or debating the best way to center a div (flexbox, obviously). But most importantly, we're the team that turns your "wouldn't it be cool if..." into "holy cow, this is amazing!"
            </p>
          </div>
          <div className="flex flex-col gap-6">
                          <div className="rounded-lg overflow-hidden">
                <img 
                  src="/niks1.png" 
                  alt="LunaraTech Team" 
                  className="w-full h-56 object-cover rounded-lg"
                />
              </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">What we do</h3>
              <p className="mt-2 text-sm text-gray-700">Modern websites and mobile apps that are intuitive, scalable, and deeply aligned with your brand’s goals and audience.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">How we do it</h3>
              <p className="mt-2 text-sm text-gray-700">Intentional design, clean development, and strategic thinking to turn bold ideas into products that connect and perform.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Built on Collaboration</h3>
              <p className="mt-2 text-sm text-gray-700">Designers, developers, and strategists working side‑by‑side (literally). We listen, challenge, and support — every step of the way.</p>
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

      {/* CTA / Contact */}
      <section className="px-4 py-16 sm:py-20" id="contact">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow=""
              title={"Let’s get to work"}
              subtitle="Tell us about your project. We’ll reply with a quick plan, timeline, and budget."
            />
            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2"><Check/> Fast response, clear next steps</li>
              <li className="flex items-center gap-2"><Check/> Fixed‑price or sprint‑based options</li>
              <li className="flex items-center gap-2"><Check/> No jargon, just outcomes</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            {!sent ? (
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Input placeholder="Your name" required />
                  <Input type="email" placeholder="Email" required />
                </div>
                <Input placeholder="Company / Organization" />
                <Input placeholder="Website (optional)" />
                <Textarea rows={5} placeholder="What are you building?" required />
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-xs text-gray-600">
                    <input type="checkbox" className="rounded border-gray-300" />
                    I’d like a quick 15‑min intro call
                  </label>
                  <button type="submit" className="rounded-md bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-800 transition-all duration-300">Contact Us</button>
                </div>
                <p className="text-xs text-gray-500">Prefer email? <a className="underline" href="mailto:hello@lunaratech.example">hello@lunaratech.example</a></p>
              </form>
            ) : (
              <div className="text-center">
                <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white"><Check/></div>
                <h3 className="text-lg font-semibold">Thanks! We’ll be in touch shortly.</h3>
                <p className="mt-2 text-sm text-gray-600">Want to talk now? Email <a className="underline" href="mailto:hello@lunaratech.example">hello@lunaratech.example</a>.</p>
                <a href="#home" className="mt-6 inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm hover:border-gray-300"><Arrow/> Back to top</a>
              </div>
            )}
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
  );
}