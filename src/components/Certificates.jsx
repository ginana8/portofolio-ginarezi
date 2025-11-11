import React, { useState } from "react";
import useLightbox from "../hooks/useLightbox";
import useScrollReveal from "../hooks/useScrollReveal";

const certificates = [
  { id: 1, category: "sertifikasi", title: "FullStack Developer", subtitle: "Platform for Financial/Banking", img: "/assets/Sertifikat/sertif/halofina.jpg" },
  { id: 2, category: "cursus", title: "Fundamental Laravel 9", subtitle: "Coding Studio", img: "/assets/Sertifikat/kursus/Certificate_Mahir-Membuat-Website-dengan-Laravel-9_nagina-1.jpg" },
  { id: 3, category: "sertifikasi", title: "FrontEnd Developer", subtitle: "E-Commerce", img: "/assets/Sertifikat/sertif/Sertifikasi & Transkip Nilai-images-0.jpg" },
  { id: 4, category: "sertifikasi", title: "Sertifikasi Algoritma", subtitle: "Universitas", img: "/assets/Sertifikat/sertif/Sertifikasi Algo-1.jpg" },
  { id: 5, category: "cursus", title: "Fundamental Front-End", subtitle: "Coding Studio", img: "/assets/Sertifikat/kursus/Certificate_Fundamental-Front-End-Web-Development-I_nagina-1.jpg" },
  { id: 6, category: "cursus", title: "Fundamental Python", subtitle: "Progate", img: "/assets/Sertifikat/kursus/Kursus python-1.jpg" },
  { id: 7, category: "webinar", title: "Certificate MSIB 6", subtitle: "Kampus Merdeka", img: "/assets/Sertifikat/WEBINAR/1728014276383.jpeg" },
  { id: 8, category: "webinar", title: "Best Capstone Project", subtitle: "HaloFina", img: "/assets/Sertifikat/WEBINAR/1736355056352.jpeg" },
  { id: 9, category: "webinar", title: "UI Design at Gojek", subtitle: "Dibimbing", img: "/assets/Sertifikat/WEBINAR/Designer UI Gojek-1.jpg" },
  { id: 10, category: "sertifikasi", title: "Sololearn", subtitle: "Web Development", img: "/assets/Sertifikat/sertif/Sertifikat Kepanitiaan-1.jpg" },
  { id: 11, category: "webinar", title: "Certificate Tribe MSIB 7", subtitle: "Kampus Merdeka", img: "/assets/Sertifikat/WEBINAR/1736356758739.jpeg" },
  { id: 12, category: "cursus", title: "Fundamental UI Design", subtitle: "Coding Studio", img: "/assets/Sertifikat/kursus/Certificate_Fundamental-UI-Design_nagina-1.jpg" },
  { id: 13, category: "webinar", title: "Certificate MSIB 7", subtitle: "Kampus Merdeka", img: "/assets/Sertifikat/WEBINAR/9912825_Sertifikat Tribe MSIB7_Gina Putri Rezi_page-0001.jpg" },
  { id: 14, category: "webinar", title: "Kampus Merdeka", subtitle: "Certificate MSIB", img: "/assets/Sertifikat/WEBINAR/Sertifikat Bersama Erick Thohir.jpeg" },
  { id: 15, category: "webinar", title: "Webinar Manage time", subtitle: "Certificate edufund", img: "/assets/Sertifikat/WEBINAR/Gina Putri Rezi-Certificate WeTalk by Edufund-1.jpg" },
  { id: 16, category: "webinar", title: "Webinar Digital Workshop", subtitle: "Certificate The Rocketeers", img: "/assets/Sertifikat/WEBINAR/Digital Creativepreneur.png" },
  { id: 17, category: "sertifikasi", title: "Volunteer WWF Indonesia", subtitle: "Youth Activist 2023", img: "/assets/Sertifikat/WEBINAR/Gina Putri Rezi - Volunteer-1.jpg" },
  { id: 18, category: "sertifikasi", title: "Sertifikasi Kompetensi", subtitle: "Multimedia", img: "/assets/Sertifikat/sertif/Sertifikat uji kompetensi keahlian-1.jpg" },
];

export default function CertificateSection() {
  const [filter, setFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(8);
  const lightbox = useLightbox();
  useScrollReveal();

  const filtered = filter === "all" ? certificates : certificates.filter((item) => item.category === filter);

  return (
    <section className="certificate-section bg-[#f3e9f9] py-20" id="certificate">
      <div className="certificate-container max-w-6xl mx-auto px-6">
        <div data-reveal="left" className="text-center">
          <h2 className="text-3xl font-bold text-[#3b2e5a] mb-2">Sertifikasi & Penghargaan</h2>
          <p className="text-gray-600 mb-8">Kumpulan sertifikasi profesional yang menunjukkan validasi keahlian dan pencapaian saya di berbagai bidang.</p>

          <div className="category-menu flex justify-center gap-4 flex-wrap mb-8">
            {[{ label: "All", value: "all" }, { label: "Sertifikasi", value: "sertifikasi" }, { label: "Course", value: "cursus" }, { label: "Lainnya", value: "webinar" }].map((btn) => (
              <button
                key={btn.value}
                onClick={() => setFilter(btn.value)}
                className={`category-btn px-6 py-2 rounded-full border transition-all ${
                  filter === btn.value
                    ? "bg-[#d87ca6] text-white border-[#d87ca6]"
                    : "bg-transparent border-[#d87ca6] text-[#d87ca6] hover:bg-[#d87ca6]/10"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          <div className="certificates-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" id="certificatesGrid">
            {filtered.slice(0, visibleCount).map((cert) => (
              <div
                key={cert.id}
                className="cert-card bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition cursor-pointer"
                data-category={cert.category}
              >
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="preview-img w-full h-56 object-cover"
                  onClick={() => lightbox.open(cert.img)}
                />
                <div className="cert-info p-4">
                  <h4 className="font-semibold text-[#6b46c1] text-base">{cert.title}</h4>
                  <p className="text-sm text-gray-600">{cert.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {visibleCount < filtered.length && (
            <div className="show-more-container mt-10">
              <button
                id="showMoreBtn"
                className="category-btn px-8 py-3 rounded-full bg-[#d87ca6] text-white hover:bg-[#c26493] transition-all"
                onClick={() => setVisibleCount((prev) => prev + 8)}
              >
                Selanjutnya
              </button>
            </div>
          )}
        </div>
      </div>

      {lightbox.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={lightbox.close}>
          <button className="absolute top-6 right-8 text-white text-4xl" onClick={lightbox.close}>×</button>
          <img src={lightbox.src} alt="preview" className="max-w-[90%] max-h-[90vh] rounded-lg shadow-lg" />
        </div>
      )}
    </section>
  );
}
