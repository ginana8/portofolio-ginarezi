import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import webImg from "/public/assets/images/web.png";
import uiuxImg from "/public/assets/images/Desain tanpa judul(13).png";

export default function Projects() {
  const projects = [
    {
      title: "Pengembangan Web",
      color: "bg-purple-50",
      link: "/projects-web",
      textColor: "text-purple-500",
      img: webImg,
    },
    {
      title: "UI / UX Design",
      color: "bg-blue-50",
      link: "/projects-uiux",
      textColor: "text-blue-600",
      img: uiuxImg,
    },
  ];

  return (
    <section id="projects" className="relative py-24">
      <div className="absolute top-0 left-0 w-full border-t border-gray-200"></div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 mt-2">
          Portfolio
        </h2>
        <p className="text-lg sm:text-lg md:text-xl text-gray-600 mb-16">
          Lihat beberapa proyek terbaru saya dengan ide-ide kreatif.
        </p>

        <div className="flex flex-col gap-20">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`${p.color} rounded-3xl shadow-sm transition p-8 sm:p-12 md:p-20 flex flex-col md:flex-row items-center justify-between ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Teks / Judul */}
              <div className="md:w-1/2 w-full mb-6 md:mb-0 md:pl-8">
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8">
                  {p.title}
                </h3>
                <Link
                  to={p.link}
                  className={`${p.textColor} text-lg sm:text-lg md:text-xl font-medium inline-flex items-center gap-1 hover:underline`}
                >
                  See Portfolio <ArrowRight size={18} />
                </Link>
              </div>

              {/* Gambar */}
              <div className="md:w-1/2 w-full flex justify-center md:justify-end">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full max-w-md sm:max-w-xl md:max-w-2xl object-contain drop-shadow-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
