"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { skills } from "@/lib/data/skills";
import { SECTION_IDS } from "@/lib/constants/sectionIds";

export function SkillsSection() {
  return (
    <section id={SECTION_IDS.SKILLS} className="py-20 bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-lg p-6"
              >
                <h3 className="text-lg font-bold mb-4 text-emerald-400">{category}</h3>
                <div className="space-y-2">
                  {skillList.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-gray-300">
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <motion.a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={18} />
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
