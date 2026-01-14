import React from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../Components/Navbar";

import img1 from "../assets/media/image1.jpg";
import img2 from "../assets/media/image2.jpg";
import img5 from "../assets/media/image5.jpg";
import img6 from "../assets/media/image6.jpg";
import img7 from "../assets/media/image7.jpg";
import img8 from "../assets/media/image8.jpg";
import img9 from "../assets/media/image12.jpg";
import img10 from "../assets/media/image10.jpg";
import img14 from "../assets/media/image14.jpg";

const albums = [
  {
    id: "weddings",
    title: "Weddings",
    images: [img1, img7, img14],
  },
  {
    id: "Studio photoshoots",
    title: "Studio Photoshoots",
    images: [img5, img6, img8],
  },
  {
    id: "Perfomances",
    title: "Perfomances",
    images: [img9, img2, img10],
  },
];

const Album = () => {
  const { albumId } = useParams();

  const album = albums.find((a) => a.id === albumId);

  if (!album) return <p className="text-center mt-20">Album not found.</p>;

  return (
    <div>
      <Navbar />

      <section className="mt-20 px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-10">{album.title}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {album.images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`${album.title} ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-lg object-cover grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Album;
