import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../Components/Navbar";

// Images
import img1 from "../assets/media/image1.jpg";
import img2 from "../assets/media/image2.jpg";
import img14 from "../assets/media/image14.jpg";
import img5 from "../assets/media/image5.jpg";
import img6 from "../assets/media/image6.jpg";
import img7 from "../assets/media/image7.jpg";
import img8 from "../assets/media/image8.jpg";
import img9 from "../assets/media/image12.jpg";
import img10 from "../assets/media/image10.jpg";

const albums = [
  {
    id: "weddings",
    title: "Weddings",
    images: [img1, img7, img14],
  },
  {
    id: "photoshoots",
    title: "Photoshoots",
    images: [img5, img6, img8],
  },
  {
    id: "clients",
    title: "Clients",
    images: [img9, img2, img10],
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


