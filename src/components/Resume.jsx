import React, { useState } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Resume() {
  useScrollReveal();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDetail = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const experiences = [
    {
      period: "Sept 2024 - Dec 2024",
      title: "Fullstack Developer",
      company: "PT Akselerasi Edukasi Internasional",
      description:
        "Bertanggung jawab dalam merancang dan mengembangkan platform web finansial, membuat UI/UX responsif, membangun RESTful API, mengintegrasikan elemen interaktif, serta melakukan analisis dan visualisasi data finansial.",
      bullets: [
        "Merancang dan mengembangkan platform finansial berbasis web.",
        "Membangun REST API (Django) & UI Interaktif.",
        "Mengimplementasikan elemen gamifikasi.",
        "Analisis data & visualisasi.",
      ],
      tags: [
        "Django",
        "Python",
        "RESTful API",
        "UI/UX Design",
        "Figma",
        "Data Analysis",
        "Gamification",
      ],
    },
    {
      period: "Aug 2023 - Dec 2023",
      title: "Spesialis Desain Grafis",
      company: "CV Media Asia - Printku",
      description:
        "Bertanggung jawab dalam membuat desain branding, memasukkan data pesanan pelanggan ke dalam sistem ERP, memahami alur kerja ERP, dan merancang visual produk untuk branding perusahaan.",
      bullets: [
        "Membuat desain branding dan memasukkan data pesanan pelanggan ke dalam sistem ERP.",
        "Memahami alur kerja ERP dan integrasinya dalam layanan berbasis web.",
        "Merancang visual produk untuk situs web branding baru perusahaan.",
      ],
      tags: [
        "Desain Grafis",
        "Branding",
        "ERP Workflow",
        "Web Services",
        "Product Visuals",
      ],
    },
    {
      period: "Maret 2024 - Juni 2024",
      title: "Front-End Web Developer",
      company: "PT Vetencode Pradani Abadi",
      description:
        "Bertanggung jawab dalam mengembangkan situs web e-commerce responsif, membangun front-end web interaktif, membuat UI/UX responsif, mengimplementasikan RESTful API, dan merancang antarmuka pembelian seluler yang mulus.",
      bullets: [
        "Mengembangkan situs web e-commerce yang responsif menggunakan Laravel.",
        "Membangun front-end web yang responsif dengan fitur-fitur interaktif.",
        "Membuat UI/UX responsif menggunakan prinsip-prinsip desain dan Figma mockups.",
        "Mengimplementasikan RESTful API untuk produk dan manajemen pengguna.",
        "Merancang antarmuka pembelian seluler dengan alur pengguna yang mulus.",
      ],
      tags: [
        "Laravel",
        "HTML",
        "CSS",
        "JavaScript",
        "UI/UX Design",
        "Figma",
        "RESTful API",
        "Mobile UI",
      ],
    },
    {
      period: "Januari 2020",
      title: "BBPPMPV BMTI - Multimedia",
      company: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
      description:
        "Bertanggung jawab dalam merancang sketsa dan materi grafis promosi, membuat audio digital dan melakukan video editing, mengembangkan aplikasi seluler, serta membangun konten multimedia interaktif untuk tujuan pendidikan.",
      bullets: [
        "Merancang sketsa dan materi grafis promosi.",
        "Membuat audio digital dan melakukan video editing.",
        "Mengembangkan aplikasi seluler dalam format SWF.",
        "Membangun konten multimedia interaktif untuk tujuan pendidikan.",
      ],
      tags: [
        "Desain Grafis",
        "Branding",
        "ERP Workflow",
        "Web Services",
        "Product Visuals",
      ],
    },
  ];

  const educations = [
    {
      period: "2021 — 2025",
      title: "Teknik Informatika, 3.62/4.00",
      school: "Universitas Budi Luhur",
      icon: "🎓",
    },
    {
      period: "2019 — 2021",
      title: "SMKS Prima Unggul",
      school: "Multimedia",
      icon: "🏫",
    },
  ];

  return (
    <section
      id="resume"
      className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#fffaf1] py-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-3xl font-extrabold text-gray-800 text-center mb-12"
          data-reveal="top"
        >
          Education
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16" data-reveal="left">
          {educations.map((edu, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[#f0e4d7] hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">{edu.icon}</div>
                <div>
                  <p className="text-sm text-gray-600">{edu.period}</p>
                  <p className="font-semibold text-gray-900">{edu.title}</p>
                  <p className="text-sm text-gray-600">{edu.school}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <hr className="border-t border-[#e8dcca] my-10" />

        <h2
          className="text-3xl font-extrabold text-gray-800 text-center mb-12"
          data-reveal="top"
        >
          Experience
        </h2>

        <div className="columns-1 md:columns-2 gap-8 space-y-6" data-reveal="right">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="break-inside-avoid bg-white rounded-2xl p-6 shadow-sm border border-[#f0e4d7] hover:shadow-md transition-all"
            >
              <p className="text-sm text-pink-600 font-semibold">{exp.period}</p>
              <p className="text-lg font-bold text-gray-900">{exp.title}</p>
              <p className="text-sm text-gray-600 mb-4">{exp.company}</p>

              <div className="flex flex-wrap gap-2 mb-3">
                {exp.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-[#fff6eb] text-sm text-gray-700 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => toggleDetail(i)}
                className="text-[#d16b86] font-medium hover:text-[#b4576f] transition-colors"
              >
                {openIndex === i ? "Sembunyikan Detail ▲" : "Lihat Detail ▼"}
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === i
                    ? "max-h-[800px] opacity-100 mt-3"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="text-gray-700">
                  {exp.description && <p className="mb-2">{exp.description}</p>}
                  <ul className="list-disc list-inside space-y-2">
                    {exp.bullets.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
