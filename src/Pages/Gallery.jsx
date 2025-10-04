import React from 'react'
import { Navbar } from "../Components/Navbar";

// ✅ Import images from src/assets/media
import img1 from "../assets/media/image1.jpg";
import img2 from "../assets/media/image2.jpg";
import img14 from "../assets/media/image14.jpg";
import img5 from "../assets/media/image5.jpg";
import img6 from "../assets/media/image6.jpg";
import img7 from "../assets/media/image7.jpg";
import img8 from "../assets/media/image8.jpg";
import img9 from "../assets/media/image12.jpg";
import img10 from "../assets/media/image10.jpg";

const Gallery = () => {
  const images = [
    img7,
    img1,
    img14,
    img5,
    img6,
    img8,
    img9,
    img2,
    img10,
  ];

  return (
    <div>
      <Navbar />

      <section className="mt-20 px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Our Beautiful Clients
        </h2>
        <p className="max-w-xl mx-auto text-lg mb-12">
          A collection of our work from weddings to photoshoots. Real beauty, real results.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-auto rounded-lg border border-solid-black shadow-lg object-cover transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
