import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import uiuxProjects from "../data/projectsUIUXData";

export default function ProjectsUIUX() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImage(0);
  };

  const nextImage = () => {
    if (!selectedProject) return;
    setCurrentImage((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevImage = () => {
    if (!selectedProject) return;
    setCurrentImage((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
  };

  return (
    <section id="uiux" className="pt-44 pb-32 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-gray-800"
        >
          My <span className="text-[#d16b86]">UI/UX Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {uiuxProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              onClick={() => setSelectedProject(project)}
              className="group bg-white shadow-md rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col md:flex-row h-[320px]"
            >
              <div className="relative md:w-[42%] w-full h-[300px] bg-gray-50 flex justify-center items-center px-3">
                <div className="relative bg-white rounded-[1.7rem] shadow-md border border-gray-200 flex justify-center items-center p-2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-[260px] w-auto rounded-[1.5rem] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              <div className="p-6 md:w-1/2 flex flex-col justify-center text-left">
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-[#d16b86] transition">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{project.description}</p>
                {project.prototypeLink && (
                  <a
                    href={project.prototypeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 px-4 py-2 bg-[#d16b86] text-white rounded-lg text-sm font-medium hover:bg-[#b45771] transition w-fit"
                  >
                    <ExternalLink size={16} /> Prototype
                  </a>
                )}
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
              className="relative bg-white rounded-3xl shadow-2xl max-w-[520px] w-full mx-4 overflow-hidden flex flex-col md:flex-row"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, type: "spring" }}
            >
              <button
                onClick={closeModal}
                className="absolute top-5 right-5 bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full z-10 transition"
              >
                <X size={22} />
              </button>

              <div className="relative w-full md:w-[50%] h-[520px] bg-gray-50 flex items-center justify-center">
                <motion.img
                  key={currentImage}
                  src={selectedProject.images[currentImage]}
                  alt={selectedProject.title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="h-[92%] w-auto max-w-[280px] object-cover rounded-[2rem] shadow-xl border border-gray-300 bg-white"
                />
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition"
                    >
                      <ChevronLeft size={22} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition"
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

              <div className="w-full md:w-[50%] p-10 flex flex-col justify-center text-left bg-white">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">{selectedProject.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {selectedProject.fullDescription || selectedProject.description}
                </p>
                {selectedProject.prototypeLink && (
                  <a
                    href={selectedProject.prototypeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#d16b86] text-white rounded-lg text-sm font-medium hover:bg-[#b45771] transition self-start"
                  >
                    <ExternalLink size={16} /> View Prototype
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
