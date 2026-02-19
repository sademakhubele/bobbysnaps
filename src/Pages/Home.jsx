import React from "react";
import Hero from "../Components/Hero";
import { Navbar } from "../Components/Navbar";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

// Import images from src/assets/media
import servicesImg from "../assets/media/image11.jpg";
import galleryImg from "../assets/media/image2.jpg";
import classesImg from "../assets/media/image3.jpg";
import logoImg from "../assets/media/logo.jpg";

const Home = ({ navigate }) => {
  return (
    <div className="bg-white text-black font-poppins min-h-screen">
      <Navbar />
      <Hero navigate={navigate} />

      {/* Services Section */}
      <section id="services" className="py-12 text-center">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className="max-w-lg mx-auto mb-6">
          Graduation, Corporate, Weddings, Studio, Drone photoshoots Nationwide,
          events & more — we create lasting memories for every occasion.
        </p>
        <img
          src={servicesImg}
          alt="Services"
          className="w-3/4 md:w-1/2 mx-auto rounded-lg shadow-md mb-4"
        />
        <RouterLink to="/services">
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
            Explore Services
          </button>
        </RouterLink>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-12 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-4">Client Gallery</h2>
        <p className="max-w-lg mx-auto mb-6">
          See our beautiful clients and breathtaking results.
        </p>
        <img
          src={galleryImg}
          alt="Gallery"
          className="w-3/4 md:w-1/2 mx-auto transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 shadow-md mb-4"
        />
        <RouterLink to="/gallery">
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
            View Gallery
          </button>
        </RouterLink>
      </section>

      {/* Bookings Section */}
      <section id="classes" className="py-12 text-center">
        <h2 className="text-4xl font-bold mb-4">Photoshoot Bookings</h2>
        <p className="max-w-lg mx-auto mb-6">
          Book professional photography sessions for graduations, weddings, corporate
          events, studio portraits, and special occasions. We capture moments that last
          a lifetime.
        </p>
        <img
          src={classesImg}
          alt="image"
          className="w-1/2 md:w-1/2 mx-auto rounded-lg shadow-md mb-4"
        />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-4">📞 Contact Us</h2>
        <p className="max-w-lg mx-auto mb-6">
          Let’s connect. Book your session or ask a question.
        </p>

        <img
          src={logoImg}
          alt="bobby snapps"
          className="w-24 h-24 mx-auto rounded-full mb-6 shadow-md"
        />

        {/* WhatsApp Button (unchanged) */}
        <a
          href="https://wa.me/27606332948?text=Hi%20Bobby.Snaps!%20I’d%20like%20to%20book%20a%20photoshoot%20session"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
            Get in Touch
          </button>
        </a>

        {/* Alternative Text Links */}
        <div className="mt-6 text-sm text-gray-600">
          <p>
            Instagram:{" "}
            <a
              href="https://instagram.com/bobby.snaps"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-black transition"
            >
              @bobbysnaps
            </a>
          </p>

          <p className="mt-2">
            Email:{" "}
            <a
              href="mailto:bobbysnaps111@gmail.com"
              className="underline hover:text-black transition"
            >
              youremail@example.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;

