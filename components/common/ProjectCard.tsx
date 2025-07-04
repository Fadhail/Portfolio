import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
    >
      <h3 className="text-xl font-bold mb-3 text-emerald-400">{project.title}</h3>
      <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, techIndex) => (
          <span key={techIndex} className="bg-gray-700 text-emerald-400 px-3 py-1 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={project.github}
          className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors"
        >
          <Github size={18} />
          <span>Code</span>
        </a>
        {project.demo && (
          <a
            href={project.demo}
            className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors"
          >
            <ExternalLink size={18} />
            <span>Demo</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}
