"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/constants/data";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group relative rounded-[2rem] overflow-hidden glass-card p-2 md:p-4 hover:border-accent-indigo/50 transition-colors"
    >
      <div className="glow-effect absolute inset-0 -z-10" />
      
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 bg-[#0B1120]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1c29] to-[#050816] flex items-center justify-center">
            <span className="text-2xl font-bold opacity-30">{project.title} Preview</span>
        </div>
        
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="p-4 rounded-full bg-white text-black hover:scale-110 transition-transform">
            <ExternalLink className="w-6 h-6" />
          </a>
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-4 rounded-full bg-white/20 text-white hover:bg-white/30 hover:scale-110 transition-all backdrop-blur-md">
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>

      <div className="px-2 md:px-4 pb-4">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent-cyan transition-colors">{project.title}</h3>
        <p className="text-foreground-secondary mb-6 line-clamp-2 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-foreground-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="relative py-32 w-full">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-sm uppercase tracking-[0.3em] text-accent-indigo mb-4">Selected Work</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight font-exo2">
            Featured <span className="text-gradient">Projects</span>.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
