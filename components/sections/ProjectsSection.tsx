"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/common/ProjectCard";
import { projects } from "@/lib/data/projects";
import { SECTION_IDS } from "@/lib/constants/sectionIds";

export function ProjectsSection() {
  const INITIAL_COUNT = 4;
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  return (
    <section id={SECTION_IDS.PROJECTS} className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {visibleProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          {projects.length > INITIAL_COUNT && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAll((s) => !s)}
                aria-expanded={showAll}
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                {showAll ? "Show less" : `Show more`}
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
