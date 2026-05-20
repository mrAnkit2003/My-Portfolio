"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/constants/data";

export const Skills = () => {
  return (
    <section id="skills" className="relative py-32 w-full overflow-hidden bg-[#07111F]/50">
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-violet/10 via-transparent to-transparent blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-sm uppercase tracking-[0.3em] text-accent-violet mb-4">Expertise</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight font-exo2">
            Technical <span className="text-gradient">Arsenal</span>.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: catIndex * 0.1, duration: 0.6 }}
              className="glass p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300"
            >
              <h4 className="text-xl font-bold text-white mb-6 pb-4 border-b border-white/10">{category.name}</h4>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (catIndex * 0.1) + (index * 0.05) }}
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-accent-violet/50 rounded-xl text-sm text-foreground-secondary hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
