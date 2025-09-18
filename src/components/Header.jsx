import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  const navItems = [
    { href: "/#home", label: "Home" },
    { href: "/#niches", label: "Niches" },
    { href: "/#services", label: "Services" },
    { href: "/#about", label: "About" },
    { href: "/#process", label: "Process" },
    { href: "/contact", label: "Contact" },
  ];

  const handleGetQuoteClick = (e) => {
    e.preventDefault();
    
    // Navigate to contact page
    window.location.href = '/contact';
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/90 border-b border-gray-100">
      <div className="mx-auto flex max-w-7xl items-start justify-between px-4 py-3 sm:py-4">
        <Link to="/" className="flex items-center">
          <img 
            src="/lunaratechLogo.png" 
            alt="LunaraTech Logo" 
            className="h-12 w-auto"
          />
        </Link>
        <nav className="hidden gap-6 text-sm text-gray-700 sm:flex mt-5">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-gray-900">{n.label}</a>
          ))}
        </nav>
        <button 
          onClick={handleGetQuoteClick}
          className="hidden rounded-md bg-[#FFB700] px-4 py-2 text-sm font-medium text-gray-900 hover:bg-[#e6a038] transition-all duration-300 sm:inline-flex mt-2"
        >
          Get Quote
        </button>
      </div>
    </header>
  );
};

export default Header;
