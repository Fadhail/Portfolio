"use client";

import { motion } from "framer-motion";
import { Code, Brain, Database } from "lucide-react";
import { SECTION_IDS } from "@/lib/constants/sectionIds";

export function AboutSection() {
  return (
    <section id={SECTION_IDS.ABOUT} className="py-20 bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Hi! I'm an Informatics Engineering student who loves building things that actually work and make life easier. I enjoy coding everything from backend APIs to web frontends, and I'm always curious about how systems run behind the scenes. Clean code and good architecture are things I care about, and I believe tech should be both useful and meaningful.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-emerald-400">
                  <Database size={20} />
                  <span>System Architecture</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <Code size={20} />
                  <span>Full-Stack Development</span>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 p-2 flex items-center justify-center shadow-lg">
              <img
                src="/Profile-Edit-1.png"
                alt="Fadel Profile"
                className="w-full h-full rounded-full object-cover border-2"
              />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
