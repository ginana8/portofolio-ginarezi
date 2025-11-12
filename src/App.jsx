import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Resume from "./components/Resume";
import AboutSkills from "./components/AboutSkills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeaderPortfolio from "./components/HeaderPortfolio";
import ProjectsWeb from "./pages/ProjectsWeb";
import ProjectsUIUX from "./pages/ProjectsUIUX";
import ProjectDetail from "./pages/ProjectDetail";

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      <Routes>
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

        <Route
          path="/projects-web"
          element={
            <>
              <HeaderPortfolio />
              <ProjectsWeb />
            </>
          }
        />

        <Route
          path="/projects-uiux"
          element={
            <>
              <HeaderPortfolio />
              <ProjectsUIUX />
            </>
          }
        />

        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}
