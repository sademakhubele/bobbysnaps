import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">BOBBY SNAPS</h2>
          <p className="text-gray-400">
            Professional photography capturing unforgettable moments.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>

          <div className="flex flex-col space-y-2">
            <Link to="/" className="hover:text-gray-400 transition">
              Home
            </Link>

            <Link to="/services" className="hover:text-gray-400 transition">
              Services
            </Link>

            <Link to="/gallery" className="hover:text-gray-400 transition">
              Gallery
            </Link>

            <Link to="/about" className="hover:text-gray-400 transition">
              About
            </Link>
          </div>
        </div>

        {/* Contact */}
       <div className="space-y-4 text-gray-400">

  <a
    href="https://wa.me/27606332948"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 hover:text-white transition"
  >
    <FaWhatsapp size={22} />
    <span>+27 60 633 2948</span>
  </a>

  <a
    href="mailto:bobbysnaps@gmail.com"
    className="hover:text-white transition block"
  >
    📧 bobbysnaps@gmail.com
  </a>

  <a
    href="https://instagram.com/bobby.snaps"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 hover:text-white transition"
  >
    <FaInstagram size={22} />
    <span>@bobby.snaps</span>
  </a>

</div>
 </div>

      {/* Bottom */}
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-500 text-sm">
        © 2026 Bobby Snaps. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;