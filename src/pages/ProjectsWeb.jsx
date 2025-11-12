import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import projects from "../data/projectsData";

const techColors = {
  Laravel: "bg-red-500 text-white",
  Django: "bg-green-600 text-white",
  Flask: "bg-yellow-500 text-black",
  PHP: "bg-blue-500 text-white",
  "React + Tailwind CSS": "bg-sky-500 text-white",
};

export default function ProjectsWeb() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImage(0);
  };

  const nextImage = () =>
    selectedProject &&
    setCurrentImage((prev) => (prev + 1) % selectedProject.images.length);

  const prevImage = () =>
    selectedProject &&
    setCurrentImage((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);

  return (
    <section id="projects" className="pt-44 pb-32 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-gray-800"
        >
          My <span className="text-[#d16b86]">Web Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              onClick={() => setSelectedProject(project)}
              className="group bg-white shadow-md rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>

              <div className="p-6 flex flex-col">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-[#d16b86] transition">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-5 leading-relaxed">{project.description}</p>

                <div className="flex items-center justify-between">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 px-3 py-2 bg-[#d16b86] text-white rounded-lg text-sm font-medium hover:bg-[#b45771] transition"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                  {project.tech && (
                    <span
                      className={`text-sm font-medium px-2 py-1 rounded ${
                        techColors[project.tech] || "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {project.tech}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-white rounded-3xl shadow-2xl max-w-xl w-full mx-4 overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, type: "spring" }}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full z-10 transition"
              >
                <X size={22} />
              </button>

              <div className="relative w-full h-[500px] sm:h-[400px] bg-gray-100 flex items-center justify-center">
                <motion.img
                  key={currentImage}
                  src={selectedProject.images[currentImage]}
                  alt={selectedProject.title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />

                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition"
                    >
                      <ChevronLeft size={22} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition"
                    >
                      <ChevronRight size={22} />
                    </button>
                  </>
                )}

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  {selectedProject.images.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        idx === currentImage ? "bg-[#d16b86]" : "bg-white/70 hover:bg-white"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">{selectedProject.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {selectedProject.fullDescription || selectedProject.description}
                </p>

                <div className="flex justify-center items-center gap-4">
                  {selectedProject.demoLink && (
                    <a
                      href={selectedProject.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#d16b86] text-white rounded-lg text-sm font-medium hover:bg-[#b45771] transition"
                    >
                      <ExternalLink size={16} /> Demo
                    </a>
                  )}
                  {selectedProject.tech && (
                    <span
                      className={`text-sm font-medium px-2 py-1 rounded ${
                        techColors[selectedProject.tech] || "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {selectedProject.tech}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
