import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../Components/Navbar";

// Wedding Images
import wed2 from "../assets/media/wed2.jpg";
import wed from "../assets/media/wed.jpg";
import wed3 from "../assets/media/wed3.jpg";
import wed4 from "../assets/media/wed4.jpg";
import wed5 from "../assets/media/wed5.jpg";
import wed6 from "../assets/media/wed6.jpg";
import wed7 from "../assets/media/wed7.jpg";
import wed8 from "../assets/media/wed8.jpg";

// Studio
import studio1 from "../assets/media/studio1.jpg";
import studio2 from "../assets/media/studio2.jpg";
import studio3 from "../assets/media/studio3.jpg";
import studio4 from "../assets/media/studio4.jpg";
import studio5 from "../assets/media/studio5.jpg";
import studio6 from "../assets/media/studio6.jpg";
import studio7 from "../assets/media/studio7.jpg";
import studio8 from "../assets/media/studio8.jpg";

// Maternity
import met2 from "../assets/media/met2.jpg";
import met3 from "../assets/media/met3.jpg";
import met4 from "../assets/media/met4.jpg";
import met5 from "../assets/media/met5.jpg";
import met6 from "../assets/media/met6.jpg";
import met7 from "../assets/media/met7.jpg";
import met8 from "../assets/media/met8.jpg";

// Performances
import perf1 from "../assets/media/perf1.jpg";
import perf2 from "../assets/media/perf2.jpg";
import perf4 from "../assets/media/perf4.jpg";
import perf5 from "../assets/media/perf5.jpg";
import perf6 from "../assets/media/perf6.jpg";
import perf7 from "../assets/media/perf7.jpg";
import perf8 from "../assets/media/perf8.jpg";
import perf9 from "../assets/media/perf9.jpg";
import perf10 from "../assets/media/perf10.jpg";

// Graduation
import grad1 from "../assets/media/grad1.jpg";
import grad3 from "../assets/media/grad3.jpg";
import grad4 from "../assets/media/grad4.jpg";
import grad5 from "../assets/media/grad5.jpg";
import grad6 from "../assets/media/grad6.jpg";
import image5 from "../assets/media/image5.jpg";
import image9 from "../assets/media/image9.jpg";

// Matric
import matric from "../assets/media/matric.jpg";
import matric1 from "../assets/media/matric1.jpg";
import matric3 from "../assets/media/matric3.jpg";
import matric4 from "../assets/media/matric4.jpg";
import matric5 from "../assets/media/matric5.jpg";
import matric6 from "../assets/media/matric6.jpg";
import matric7 from "../assets/media/matric7.jpg";
import matric8 from "../assets/media/matric8.jpg";

const albums = [
  {
    id: "weddings",
    title: "Weddings",
    images: [wed2, wed, wed3, wed4, wed5, wed6, wed7, wed8],
  },
  {
    id: "photoshoots",
    title: "Photoshoots",
    images: [
      studio1,
      studio2,
      studio3,
      studio4,
      studio5,
      studio6,
      studio7,
      studio8,
    ],
  },
  {
    id: "live-performances",
    title: "Live Performances",
    images: [
      perf1,
      perf2,
      perf4,
      perf5,
      perf6,
      perf7,
      perf8,
      perf9,
      perf10,
    ],
  },
  {
    id: "maternity",
    title: "Maternity",
    images: [met2, met3, met4, met5, met6, met7, met8],
  },
  {
    id: "graduations",
    title: "Graduations",
    images: [grad3, grad1, grad4, grad5, grad6, image5, image9],
  },
  {
    id: "matric-dance",
    title: "Matric Dance",
    images: [
      matric1,
      matric8,
      matric3,
      matric4,
      matric5,
      matric6,
      matric7,
      matric,
    ],
  },
];

const Album = () => {
  const { albumId } = useParams();
  const album = albums.find((a) => a.id === albumId);

  const [activeImage, setActiveImage] = useState(null);

  if (!album)
    return <p className="text-center mt-20">Album not found.</p>;

  return (
    <div>
      <Navbar />

      <section className="mt-20 px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          {album.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {album.images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`${album.title} ${index + 1}`}
              onClick={() =>
                setActiveImage(
                  activeImage === index ? null : index
                )
              }
              className={`
                w-full h-auto rounded-lg shadow-lg object-cover
                transition duration-500 cursor-pointer
                hover:grayscale-0
                ${
                  activeImage === index
                    ? "grayscale-0"
                    : "grayscale"
                }
              `}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Album;

