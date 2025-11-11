import React from "react";
import { motion } from "framer-motion";
import useScrollReveal from "../hooks/useScrollReveal";

export default function AboutSkills() {
  useScrollReveal();

  const skills = [
    { name: "Figma to Code", percent: 85, color: "bg-[#939df5]" },
    { name: "API / AI Integration", percent: 70, color: "bg-[#b0e3c5]" },
    { name: "Deployment / Hosting", percent: 72, color: "bg-[#e3b0b0]" },
    { name: "Version Control (Git)", percent: 75, color: "bg-[#e7e3b0]" },
    { name: "Responsive Design", percent: 80, color: "bg-[#c4b0e3]" },
  ];

  const techStacks = [
    { name: "Figma", img: "/assets/images/figma.png" },
    { name: "Bootstrap CSS", img: "/assets/images/bootstrap-1024.png" },
    { name: "Laravel", img: "/assets/images/logo-laravel-icon-1024.png" },
    { name: "Django", img: "/assets/images/1758903.png" },
    { name: "Flask", img: "/assets/images/98-985032_flask-logo-flask-python-icon.png" },
    { name: "TypeScript", img: "/assets/images/Typescript_logo_2020.svg.png" },
    { name: "React.js", img: "/assets/images/React-Logo-PNG-Pic.png" },
    { name: "MySQL", img: "/assets/images/mysql_PNG1.png" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  const iconVariant = {
    hidden: { opacity: 0, scale: 0.7, y: 20 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, type: "spring", stiffness: 120 },
    }),
  };

  return (
    <section id="skill" className="py-24 px-6 md:px-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-start mb-20">
          <motion.div
            data-reveal="left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Soft Skill & Hard Skill</h2>
            <ul className="space-y-3 text-[#5b6ea8] text-lg">
              {[
                "Komunikasi yang baik",
                "Mampu bekerja sama dengan orang lain",
                "Berfikir kreatif",
                "Research",
                "Perhatian yang detail",
              ].map((text, i) => (
                <motion.li key={i} variants={fadeUp} custom={i * 0.2}>
                  {text}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            data-reveal="right"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            {skills.map((skill, i) => (
              <motion.div key={i} variants={fadeUp} custom={i * 0.2} className="mb-4">
                <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.percent}%</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-2 rounded-full ${skill.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 * i }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          data-reveal="bottom"
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="text-3xl font-bold mb-10 text-gray-800">Tech Stack</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
            {techStacks.map((item, i) => (
              <motion.li
                key={i}
                className="flex flex-col items-center cursor-pointer"
                variants={iconVariant}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.15, rotate: 3, transition: { type: "spring", stiffness: 200 } }}
              >
                <motion.img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 object-contain mb-3 drop-shadow-md"
                  whileHover={{ scale: 1.2, rotate: -3 }}
                  transition={{ duration: 0.2 }}
                />
                <span className="text-lg font-medium text-gray-700">{item.name}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
