"use client";

import React from "react";
import { motion } from "framer-motion";
import { stats } from "@/constants/data";

export const About = () => {
  return (
    <section id="about" className="relative py-32 w-full overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <div>
                <h2 className="text-sm uppercase tracking-[0.3em] text-accent-cyan mb-4">About Me</h2>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight font-exo2">
                  Engineering products that feel <span className="text-gradient">alive</span>.
                </h3>
              </div>
              
              <div className="space-y-4 text-foreground-secondary text-lg leading-relaxed">
                <p>
                  I bridge the gap between design and engineering, combining deep technical knowledge with a keen eye for aesthetics.
                </p>
                <p>
                  My focus is on building performant, accessible, and cinematic web experiences that don't just work well, but leave a lasting impression. From complex frontend architectures to scalable backend systems, I strive for excellence in every line of code.
                </p>
              </div>
            </div>

            <div className="w-full md:w-[40%] flex flex-col gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6 rounded-3xl relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-indigo/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}+</div>
                  <div className="text-sm text-foreground-secondary uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
