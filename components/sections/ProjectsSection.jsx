"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "../../data/projects";
import { ProjectCard } from "../ui/ProjectCard";

export function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="bg-gray-100 dark:bg-zinc-800 p-6 rounded-xl shadow-lg"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-10 text-center text-blue-600 dark:text-yellow-400 flex items-center justify-center gap-2">
        📁 Projects
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </motion.section>
  );
}

