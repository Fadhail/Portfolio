"use client";

import { motion } from "framer-motion";
import { Code, Brain, Cpu } from "lucide-react";
import { SECTION_IDS } from "@/lib/constants/sectionIds";
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/components/kibo-ui/contribution-graph";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function AboutSection() {
  const [contributions, setContributions] = useState<any[]>([]);

  useEffect(() => {
    let mounted = true;

    async function loadContributions() {
      try {
        const response = await fetch(
          "https://github-contributions-api.jogruber.de/v4/Fadhail?y=last"
        );
        if (!response.ok) return;
        const data = await response.json();
        if (mounted) setContributions(data.contributions || []);
      } catch (err) {
        // ignore errors for now
      }
    }

    loadContributions();
    return () => {
      mounted = false;
    };
  }, []);

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
                Hi! I'm an Informatics Engineering student who loves building real world solutions that make life easier. I enjoy coding everything from backend APIs to web frontends, and I'm deeply passionate about IoT and robotics, especially creating systems that connect the physical and digital worlds. I'm always curious about how things work behind the scenes, from embedded systems to cloud integrations. I care about clean code, solid architecture, and meaningful technology that truly helps people.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-emerald-400">
                  <Cpu size={20} />
                  <span>IoT Developer</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <Code size={20} />
                  <span>Full Stack Developer</span>
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

          <div className="mt-12 flex justify-center">
            <ContributionGraph blockMargin={1} blockSize={15} data={contributions} fontSize={12}>
              <ContributionGraphCalendar>
                {({ activity, dayIndex, weekIndex }) => (
                  <ContributionGraphBlock
                    activity={activity}
                    className={cn(
                      'data-[level="0"]:fill-[#374151] dark:data-[level="0"]:fill-[#071124]',
                      'data-[level="1"]:fill-[#d1fae5] dark:data-[level="1"]:fill-[#08332b]',
                      'data-[level="2"]:fill-[#86efac] dark:data-[level="2"]:fill-[#065f46]',
                      'data-[level="3"]:fill-[#34d399] dark:data-[level="3"]:fill-[#059669]',
                      'data-[level="4"]:fill-[#059669] dark:data-[level="4"]:fill-[#064e3b]'
                    )}
                    dayIndex={dayIndex}
                    weekIndex={weekIndex}
                  />
                )}
              </ContributionGraphCalendar>

              <ContributionGraphFooter>
                <div className="w-full relative py-1">
                  <div className="absolute right-0 top-0 flex items-center gap-3 text-sm text-gray-300">
                    <span className="whitespace-nowrap">Less</span>
                    <div className="flex items-center gap-1">
                      <span className="w-3 h-3 rounded-sm bg-[#374151] dark:bg-[#071124]" />
                      <span className="w-3 h-3 rounded-sm bg-[#d1fae5] dark:bg-[#08332b]" />
                      <span className="w-3 h-3 rounded-sm bg-[#86efac] dark:bg-[#065f46]" />
                      <span className="w-3 h-3 rounded-sm bg-[#34d399] dark:bg-[#059669]" />
                      <span className="w-3 h-3 rounded-sm bg-[#059669] dark:bg-[#064e3b]" />
                    </div>
                    <span className="whitespace-nowrap">More</span>
                  </div>

                  <div className="absolute left-0 top-0">
                    <ContributionGraphTotalCount />
                  </div>
                </div>
              </ContributionGraphFooter>
            </ContributionGraph>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
