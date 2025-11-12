import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import projects from "../data/projectsData";

export default function ProjectsWeb() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImage(0);
  };

  const changeImage = (direction) => {
    if (!selectedProject) return;
    const total = selectedProject.images.length;
    setCurrentImage((prev) => (prev + direction + total) % total);
  };

  const ProjectCard = ({ project, index }) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      onClick={() => setSelectedProject(project)}
      className="group bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 cursor-pointer"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-[#d16b86] transition">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm mb-5 leading-relaxed">
          {project.description}
        </p>
        <div className="flex gap-3">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 px-3 py-2 bg-[#d16b86] text-white rounded-lg text-sm font-medium hover:bg-[#b45771] transition"
          >
            <ExternalLink size={16} /> Demo
          </a>
        </div>
      </div>
    </motion.div>
  );

  const ProjectModal = ({ project }) => (
    <motion.div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full overflow-hidden"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full z-10"
        >
          <X size={22} />
        </button>

        <div className="relative w-full h-80 bg-gray-100">
          <img
            src={project.images[currentImage]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          {project.images.length > 1 && (
            <>
              <button
                onClick={() => changeImage(-1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={() => changeImage(1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}
        </div>

        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h2>
          <p className="text-gray-600 mb-5 leading-relaxed">
            {project.fullDescription || project.description}
          </p>

          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 bg-[#d16b86] text-white rounded-lg text-sm font-medium hover:bg-[#b45771] transition"
            >
              <ExternalLink size={16} /> Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section
      id="projects"
      className="pt-44 pb-32 bg-gradient-to-b from-gray-50 to-white min-h-screen"
    >
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
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} />}
      </AnimatePresence>
    </section>
  );
}
