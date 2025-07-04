"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/common/ProjectCard";
import { projects } from "@/lib/data/projects";
import { SECTION_IDS } from "@/lib/constants/sectionIds";

export function ProjectsSection() {
  return (
    <section id={SECTION_IDS.PROJECTS} className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
