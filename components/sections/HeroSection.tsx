"use client";

import { motion } from "framer-motion";
import { SECTION_IDS } from "@/lib/constants/sectionIds";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section id={SECTION_IDS.HERO} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-emerald-400">Fadel</span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            An Informatics Engineering <span className="text-emerald-400">student</span> passionate about <span className="text-emerald-400">technology.</span> 
          </p>
          <motion.button
            onClick={() => scrollToSection(SECTION_IDS.PROJECTS)}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
