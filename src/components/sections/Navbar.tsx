"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/constants/data";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple intersection observer logic based on scroll position
      const sections = navItems.map((item) => item.href.substring(1));
      let current = sections[0];

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            current = section;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed left-0 right-0 top-0 z-50 flex h-20 items-center transition-all duration-300",
          scrolled ? "bg-[#050816]/70 backdrop-blur-xl border-b border-white/5 shadow-lg" : "bg-transparent"
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-6 lg:px-12">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#hero");
            }}
            className="group relative flex items-center gap-2"
          >
            <span className="text-xl font-bold tracking-tight text-white transition-colors group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-indigo group-hover:to-accent-cyan">
              AD.
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 rounded-full bg-white/[0.03] px-6 py-2 border border-white/[0.05] backdrop-blur-md">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.href);
                }}
                className="relative px-2 py-1 text-sm font-medium transition-colors hover-trigger"
              >
                <span
                  className={cn(
                    "relative z-10 transition-colors",
                    activeSection === item.href.substring(1)
                      ? "text-white"
                      : "text-foreground-secondary hover:text-white"
                  )}
                >
                  {item.name}
                </span>
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-accent-indigo to-accent-cyan rounded-full"
                  />
                )}
              </a>
            ))}
          </div>

          {/* Connect Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollTo("#contact")}
              className="px-5 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 rounded-full border border-white/10 transition-all hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] hover-trigger"
            >
              Let's Connect
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-6 bg-current transition-transform"
              ></motion.span>
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-0.5 w-6 bg-current transition-opacity"
              ></motion.span>
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-6 bg-current transition-transform"
              ></motion.span>
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#050816]/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col items-center gap-8 text-2xl font-semibold">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(item.href);
                  }}
                  className="text-foreground-secondary hover:text-white transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                onClick={() => scrollTo("#contact")}
                className="mt-4 px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-accent-indigo to-accent-cyan rounded-full shadow-lg"
              >
                Let's Connect
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
