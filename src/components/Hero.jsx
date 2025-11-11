import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Hero() {
  useScrollReveal();

  return (
    <section
      id="home"
      className="w-full bg-[#ffeaea] pt-20 pb-20 md:pt-28 md:pb-28 font-['Poppins',sans-serif]"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
        <div className="flex justify-center md:justify-end" data-reveal="left">
          <img
            src="/assets/images/Pas Foto2.jpg"
            alt="Gina Profile"
            className="rounded-xl w-[350px] md:w-[380px] lg:w-[420px] shadow-md object-cover"
          />
        </div>

        <div className="text-center md:text-left space-y-6" data-reveal="right">
          <h1 className="text-[#2f3640] font-extrabold text-4xl md:text-5xl leading-snug">
            I’m <span>UI/UX & Frontend</span> <br />
            <span>Web Developer</span>
          </h1>

          <p className="text-[#4a4a4a] text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0 font-normal">
            Hello! Saya Gina, Senang memadukan seni dan teknologi melalui UI/UX design dan frontend development. Saya suka menciptakan tampilan web yang estetis dan berkarakter.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
            <a
              href="/assets/CV - Gina Putri Rezi.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 bg-[#d16b86] text-white rounded-full font-semibold text-sm md:text-base hover:bg-[#c05d79] transition-all duration-300 shadow-sm"
            >
              See My CV
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-[#d16b86] text-[#d16b86] rounded-full font-semibold text-sm md:text-base hover:bg-[#d16b86] hover:text-white transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
