import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../Components/Navbar";

// Images


import wed1 from "../assets/media/wed1.jpg";
import photo2 from "../assets/media/photo2.jpg";
import img9 from "../assets/media/img9.jpg";
import met1 from "../assets/media/met1.jpg";
import matric3 from "../assets/media/matric3.jpg";
import grad2 from "../assets/media/grad2.jpg"

const albums = [
  {
    id: "weddings",
    title: "Weddings",
    images: [wed1],
  },
  {
    id: "photoshoots",
    title: "Photoshoots",
    images: [photo2],
  },
  {
    id: "live performances",
    title: "Live Performances",
    images: [img9],
  },
  {
    id: "maternity",
    title: "Maternity",
    images: [met1],
  },
  {
    id: "graduations",
    title: "Graduations",
    images: [grad2],
  },
  {
    id: "matric dance",
    title: "Matric Dance",
    images: [matric3],
  },
];


const Gallery = () => {
  return (
    <div>
      <Navbar />

      <section className="mt-20 px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Our Beautiful Clients
        </h2>

        <p className="max-w-xl mx-auto text-lg mb-12">
          Explore our work by category.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {albums.map((album) => (
            <Link
              key={album.id}
              to={`/gallery/${album.id}`}
              className="group block"
            >
              <img
                src={album.images[0]}
                alt={album.title}
                className="
                  w-full h-80 object-cover rounded-lg shadow-lg
                  filter grayscale
                  transition duration-300
                  group-hover:grayscale-0
                  group-focus:grayscale-0
                  active:grayscale-0
                "
              />
              <h3 className="mt-4 text-xl font-semibold">
                {album.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;


