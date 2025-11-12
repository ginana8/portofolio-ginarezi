import React, { useState, useEffect } from "react";
import { FaInstagram } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function HeaderPortfolio() {
  const [navActive, setNavActive] = useState(false);
  const [headerActive, setHeaderActive] = useState(false);
  const [animate, setAnimate] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setHeaderActive(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavbar = () => {
    setNavActive((prev) => !prev);
    document.body.classList.toggle("overflow-hidden", !navActive);
  };

  useEffect(() => {
    setNavActive(false);
    document.body.classList.remove("overflow-hidden");
  }, [location]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 md:hidden ${
          navActive ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleNavbar}
      />

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          headerActive ? "bg-white py-4" : "bg-transparent py-6"
        } ${animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}
      >
        <div className="container mx-auto flex justify-center">
          <div
            className={`transition-all duration-500 flex items-center justify-between w-[95%] sm:w-[90%] md:w-[80%] px-4 sm:px-6 md:px-10 ${
              headerActive
                ? "rounded-none shadow-none bg-white py-4"
                : "rounded-2xl shadow-md bg-white py-4"
            }`}
          >
            <Link to="/" className="text-2xl md:text-3xl font-bold text-[#d16b86]">
              Gina Rezi
            </Link>

            <nav className="hidden md:flex gap-8 text-gray-800 font-semibold justify-center items-center">
              <Link
                to="/"
                className={`hover:text-[#d16b86] ${
                  location.pathname === "/" ? "text-[#d16b86]" : ""
                }`}
              >
                Home
              </Link>
              <Link
                to="/projects-web"
                className={`hover:text-[#d16b86] ${
                  location.pathname === "/projects-web" ? "text-[#d16b86]" : ""
                }`}
              >
                Website
              </Link>
              <Link
                to="/projects-uiux"
                className={`hover:text-[#d16b86] ${
                  location.pathname === "/projects-uiux" ? "text-[#d16b86]" : ""
                }`}
              >
                UI/UX
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-4">
                <a
                  href="https://instagram.com/ginarezi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Gina Rezi"
                  className="hover:text-[#d16b86] text-xl relative group"
                >
                  <FaInstagram />
                  <span className="absolute hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded-md top-8 left-1/2 -translate-x-1/2">
                    @ginarezi
                  </span>
                </a>
                <a
                  href="https://instagram.com/sk.rlsk"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram sk.rlsk"
                  className="hover:text-[#d16b86] text-xl relative group"
                >
                  <FaInstagram />
                  <span className="absolute hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded-md top-8 left-1/2 -translate-x-1/2">
                    @sk.rlsk
                  </span>
                </a>
              </div>

              <button
                onClick={toggleNavbar}
                aria-label="Toggle navigation"
                className="md:hidden text-3xl text-[#d16b86]"
              >
                {navActive ? "✕" : "☰"}
              </button>
            </div>
          </div>
        </div>
      </header>

      <nav
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 md:hidden ${
          navActive ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-[#d16b86] font-bold text-lg">Menu</h2>
          <button onClick={toggleNavbar} className="text-2xl font-bold" aria-label="Close menu">
            ✕
          </button>
        </div>

        <ul className="flex flex-col p-4 gap-4 text-gray-700 font-medium text-base sm:text-lg">
          <li>
            <Link to="/" onClick={toggleNavbar} className="block w-full">
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects-web" onClick={toggleNavbar} className="block w-full">
              Website
            </Link>
          </li>
          <li>
            <Link to="/projects-uiux" onClick={toggleNavbar} className="block w-full">
              UI/UX
            </Link>
          </li>
          <li className="flex gap-4 mt-4">
            <a
              href="https://instagram.com/ginarezi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Gina Rezi"
              className="hover:text-[#d16b86] text-xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://instagram.com/sk.rlsk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram sk.rlsk"
              className="hover:text-[#d16b86] text-xl"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
