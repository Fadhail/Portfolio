"use client";

import { motion } from "framer-motion";
import { useWindowDimensions } from "@/lib/hooks/useWindowDimensions";

export function AnimatedBackground() {
  const { width, height } = useWindowDimensions();

  if (width === 0 || height === 0) {
    return null; // Don't render until dimensions are available
  }

  return (
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20"></div>
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-emerald-400 rounded-full"
          initial={{
            x: Math.random() * width,
            y: Math.random() * height,
            opacity: 0,
          }}
          animate={{
            x: Math.random() * width,
            y: Math.random() * height,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
