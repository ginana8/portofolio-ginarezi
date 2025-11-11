import React, { useState, useEffect } from "react";
import { FaInstagram } from "react-icons/fa";

export default function Header() {
  const [navActive, setNavActive] = useState(false);
  const [headerActive, setHeaderActive] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 200);
  }, []);

  useEffect(() => {
    const handleScroll = () => setHeaderActive(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavbar = () => {
    setNavActive(!navActive);
    document.body.classList.toggle("overflow-hidden", !navActive);
  };

  return (
    <>
      {/* Overlay untuk mobile */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          navActive ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
        onClick={toggleNavbar}
      ></div>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          headerActive ? "bg-white py-3 shadow-md" : "bg-transparent py-5"
        } ${animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
          <div
            className={`flex flex-wrap md:flex-nowrap justify-between items-center transition-all duration-500 ${
              headerActive
                ? "bg-white rounded-none shadow-none py-3"
                : "bg-white rounded-2xl shadow-md py-4 px-4 sm:px-6"
            }`}
          >
            {/* Logo */}
            <a
              href="#"
              className="text-xl sm:text-2xl md:text-3xl font-bold text-[#d16b86] whitespace-nowrap mb-2 md:mb-0"
            >
              Gina Rezi
            </a>

            {/* Navigation */}
            <nav className="hidden md:flex flex-wrap items-center justify-center gap-6 lg:gap-10 text-gray-800 font-semibold text-sm lg:text-base">
              <a href="#home" className="hover:text-[#d16b86]">
                Home
              </a>
              <a href="#skill" className="hover:text-[#d16b86]">
                Skill
              </a>
              <a href="#projects" className="hover:text-[#d16b86]">
                Portfolio
              </a>
              <a href="#certificate" className="hover:text-[#d16b86]">
                Sertifikat
              </a>
              <a href="#contact" className="hover:text-[#d16b86]">
                Contact
              </a>
            </nav>

            {/* Icons + Menu Button */}
            <div className="flex items-center gap-3 sm:gap-4 text-gray-800 ml-auto md:ml-0">
              <a
                href="https://instagram.com/ginarezi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#d16b86] text-lg sm:text-xl transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://instagram.com/sk.rlsk"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#d16b86] text-lg sm:text-xl transition"
              >
                <FaInstagram />
              </a>

              {/* Tombol menu untuk mobile */}
              <button
                onClick={toggleNavbar}
                className="block md:hidden text-2xl text-gray-700"
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar menu untuk mobile */}
      <nav
        className={`fixed top-0 right-0 h-full w-64 sm:w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 md:hidden ${
          navActive ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-[#d16b86] font-bold text-lg">Menu</h2>
          <button onClick={toggleNavbar} className="text-2xl">
            ✕
          </button>
        </div>

        <ul className="flex flex-col p-6 gap-6 text-gray-700 font-medium text-base sm:text-lg">
          <li>
            <a href="#home" onClick={toggleNavbar}>
              Home
            </a>
          </li>
          <li>
            <a href="#skill" onClick={toggleNavbar}>
              Skill
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggleNavbar}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#certificate" onClick={toggleNavbar}>
              Sertifikat
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleNavbar}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
