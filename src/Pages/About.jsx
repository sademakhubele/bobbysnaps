import React from 'react'
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Components/Navbar";

import img13 from "../assets/media/image13.jpg";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-black font-poppins min-h-screen">
      <Navbar />
      <section className="min-h-screen bg-white text-black px-6 md:px-20 py-16 flex flex-col md:flex-row items-center justify-between gap-12 mt-20">
        <div className="flex-1">
          <img
            src={img13}
            alt="Founder"
            className="rounded-lg shadow-lg w-full md:w-[400px] object-cover"
          />
        </div>

        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black font-script">
            Meet the Founder of Bobby Snaps Photography
          </h2>
          <p className="text-lg mb-4">
            I'm Mikateko Mhlongo, a passionate young photographer with years of experience capturing unforgettable moments across South Africa. 
          </p>
          <p className="text-lg mb-4">
            My journey with photography started at a young age, and over the years I've mastered the art of storytelling through my lens. From intimate studio portraits and high-energy events to cinematic drone shots and corporate branding. I focus on creating timeless images that capture genuine emotion and authentic beauty.
          </p>
          <p className="text-lg mb-4">
            To me, photography is more than just pictures, it’s about preserving memories, celebrating milestones, and telling stories that stand the test of time. Every click of my camera is guided by creativity, precision, unwavering dedication, and a deep passion for the craft.
          </p>

          <button
            onClick={() => navigate("/")}
            className="mt-6 bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
          >
            Back to Home
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
