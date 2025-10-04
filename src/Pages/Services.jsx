import React from "react";
import { Navbar } from "../Components/Navbar";

const Services = () => {
  const services = [
    {
      title: "Studio Shoots",
      description: "Professional studio sessions with perfect lighting and creative backdrops to capture your best look.",
    },
    {
      title: "Travelling Photography Appointments",
      description: "We bring the full photography experience to your location — ideal for home, outdoor, or destination shoots.",
    },
    {
      title: "Drone Shoots",
      description: "Breathtaking aerial photography and videography that captures unique perspectives of your special moments.",
    },
    {
      title: "Corporate Shoots",
      description: "Clean, professional portraits and branding visuals for businesses, teams, and executives.",
    },
    {
      title: "Event Shoots",
      description: "Candid and posed coverage of weddings, parties, and special events to preserve memories for a lifetime.",
    },
  ];

  return (
    <>
      <Navbar />
    <div className="min-h-screen bg-white text-black px-6 py-12">
      <h2 className="text-4xl font-bold text-center mt-40 mb-12">Our Services</h2>

      <div className="grid md:grid-cols-3 gap-10">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white/10 p-6 rounded-lg border border-black/20 hover:bg-white/20 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
            <p className="text-sm">{service.description}</p>
            <a
              href="https://wa.me/27844976772?text=Hi%20Sibu!%20I'm%20interested%20in%20your%20makeup%20services"
               target="_blank"
               rel="noopener noreferrer"
>
               <button className="mt-6 px-4 py-2 border border-black rounded hover:bg-white hover:text-black transition">
    Book Now
               </button>
            </a>

          </div>
        ))}
      </div>
    </div> 
    </>
  );
};

export default Services;