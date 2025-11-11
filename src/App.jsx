import React from "react";
import { Routes, Route } from "react-router-dom";

// 🏠 Komponen utama
import Header from "./components/Header";
import Hero from "./components/Hero";
import Resume from "./components/Resume";
import AboutSkills from "./components/AboutSkills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// 💻 Komponen portfolio
import HeaderPortfolio from "./components/HeaderPortfolio";
import ProjectsWeb from "./pages/ProjectsWeb";
import ProjectsUIUX from "./pages/ProjectsUIUX";
import ProjectDetail from "./pages/ProjectDetail";

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      <Routes>
        {/* 🏠 Halaman utama */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <main>
                <Hero />
                <Resume />
                <AboutSkills />
                <Projects />
                <Certificates />
                <Contact />
              </main>
              <Footer />
            </>
          }
        />

        {/* 💻 Halaman Web Project */}
        <Route
          path="/projects-web"
          element={
            <>
              <HeaderPortfolio />
              <ProjectsWeb />
            </>
          }
        />

        {/* 🎨 Halaman UI/UX Project */}
        <Route
          path="/projects-uiux"
          element={
            <>
              <HeaderPortfolio />
              <ProjectsUIUX />
            </>
          }
        />

        {/* 📄 Detail project */}
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}
