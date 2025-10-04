import { useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";

import logoImg from "../assets/media/logo.jpg";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  // Prevent scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.85)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logoImg}
              alt="bobby snaps Logo"
              className="w-12 h-12 rounded-full object-cover"
            />
            <span className="font-script text-2xl text-white">BOBBY SNAPS</span>
          </Link>

          {/* Hamburger Icon (mobile) */}
          <div
            className="w-7 h-5 relative cursor-pointer z-50 md:hidden text-white text-3xl"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? "✖" : "☰"}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-gray-300 transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-white hover:text-gray-300 transition-colors">
              Services
            </Link>
            <Link to="/gallery" className="text-white hover:text-gray-300 transition-colors">
              Gallery
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-[rgba(10,10,10,0.95)] backdrop-blur-lg flex flex-col items-center text-white space-y-6 py-8 transition-all duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link to="/services" onClick={() => setMenuOpen(false)}>
          Services
        </Link>
        <Link to="/gallery" onClick={() => setMenuOpen(false)}>
          Gallery
        </Link>
      </div>
    </nav>
  );
};

