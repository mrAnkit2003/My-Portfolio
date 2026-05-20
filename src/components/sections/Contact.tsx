"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/constants/data";
import { Button } from "@/components/ui/Button";
import { Send, Mail, MapPin } from "lucide-react";

export const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormState({ name: "", email: "", message: "" });
      alert("Message sent successfully!");
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-32 w-full">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto glass-card rounded-[3rem] p-8 md:p-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent-indigo/10 via-transparent to-accent-cyan/10 pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div className="space-y-8">
              <div>
                <h2 className="text-sm uppercase tracking-[0.3em] text-accent-cyan mb-4">Get in touch</h2>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 font-exo2">
                  Let's build something <br className="hidden md:block" />
                  <span className="text-gradient">extraordinary.</span>
                </h3>
                <p className="text-foreground-secondary text-lg leading-relaxed">
                  Whether you have a project in mind or just want to chat about technology, I'm always open to discussing new opportunities.
                </p>
              </div>

              <div className="space-y-6 pt-8 border-t border-white/10">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 text-foreground-secondary hover:text-white transition-colors group">
                  <div className="p-4 rounded-2xl glass group-hover:bg-accent-indigo/20 transition-colors">
                    <Mail className="w-6 h-6 text-accent-indigo" />
                  </div>
                  <div>
                    <div className="text-sm text-foreground-muted mb-1">Email</div>
                    <div className="font-medium text-lg">{personalInfo.email}</div>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 text-foreground-secondary group">
                  <div className="p-4 rounded-2xl glass group-hover:bg-accent-cyan/20 transition-colors">
                    <MapPin className="w-6 h-6 text-accent-cyan" />
                  </div>
                  <div>
                    <div className="text-sm text-foreground-muted mb-1">Location</div>
                    <div className="font-medium text-lg">Remote / Global</div>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground-secondary ml-1">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent-indigo focus:ring-1 focus:ring-accent-indigo transition-all placeholder:text-foreground-muted"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground-secondary ml-1">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent-indigo focus:ring-1 focus:ring-accent-indigo transition-all placeholder:text-foreground-muted"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground-secondary ml-1">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent-indigo focus:ring-1 focus:ring-accent-indigo transition-all placeholder:text-foreground-muted resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full py-4 text-lg">
                {isSubmitting ? "Sending..." : "Send Message"} <Send className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
