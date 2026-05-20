"use client";

import React from "react";
import { personalInfo, navItems } from "@/constants/data";
import { Github, Linkedin, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050816] pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-16">
          <div className="max-w-sm text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tighter mb-4 text-white">
              Ankit Das.
            </h2>
            <p className="text-foreground-muted text-sm leading-relaxed">
              Building premium digital experiences with modern web technologies. Focus on design, performance, and user experience.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-medium text-foreground-secondary hover:text-white transition-colors">
                  {item.name}
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-foreground-muted hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-foreground-muted hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-sm text-foreground-muted">
            © {new Date().getFullYear()} Ankit Das. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-foreground-secondary hover:text-white transition-colors group"
          >
            Back to top 
            <span className="p-2 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
              <ArrowUp className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};
