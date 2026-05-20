"use client";

import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/constants/data";
import { Background3D } from "@/components/ui/Background3D";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/Button";
import { ArrowRight, FileText, Github, Linkedin } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-20">
      <Background3D />

      <div className="container relative z-10 mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
        
        <div className="flex-1 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border-accent-indigo/30"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-foreground-secondary">
              Available for new opportunities
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 font-exo2">
            <span className="block text-white">Crafting Modern</span>
            <AnimatedText text="Digital Experiences" className="text-gradient" />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg md:text-xl text-foreground-secondary max-w-2xl mb-10 leading-relaxed"
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button onClick={() => window.open(personalInfo.github, "_blank")}>
              View Work <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button variant="secondary" onClick={() => window.open(personalInfo.resume, "_blank")}>
              <FileText className="w-4 h-4 mr-2" /> Resume
            </Button>
            
            <div className="flex items-center gap-2 ml-4">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="p-3 rounded-full glass hover:bg-white/10 transition-colors">
                <Github className="w-5 h-5 text-white" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-full glass hover:bg-white/10 transition-colors">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hidden lg:block relative flex-1"
        >
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative w-72 h-[28rem] xl:w-80 xl:h-[32rem] mx-auto"
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent-indigo via-accent-violet to-accent-cyan opacity-40 blur-[80px]" 
            />
            
            <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden glass p-3 border-accent-indigo/30 shadow-2xl hover:border-accent-cyan/50 transition-colors duration-500 group">
               <div className="h-full w-full rounded-[2rem] flex items-center justify-center overflow-hidden relative bg-[#0B1120]">
                  <Image 
                    src={personalInfo.photo} 
                    alt={personalInfo.name} 
                    fill 
                    className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/60 via-transparent to-transparent opacity-60" />
               </div>
            </div>
          </motion.div>
        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-foreground-muted">Scroll</span>
        <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-white"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
};
