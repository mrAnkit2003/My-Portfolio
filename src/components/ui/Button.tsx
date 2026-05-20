"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-medium transition-all duration-300 ease-out overflow-hidden rounded-full";

    const variants = {
      primary:
        "bg-gradient-to-r from-accent-indigo to-accent-cyan text-white shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] border border-white/10",
      secondary:
        "bg-white/5 backdrop-blur-md text-white hover:bg-white/10 border border-white/10 hover:border-white/20",
      outline:
        "border border-accent-indigo text-accent-indigo hover:bg-accent-indigo/10",
      ghost: "hover:bg-white/5 text-foreground-secondary hover:text-white",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        {variant === "primary" && (
          <span className="absolute inset-0 z-0 bg-gradient-to-r from-accent-violet to-accent-indigo opacity-0 transition-opacity duration-300 hover:opacity-100" />
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
