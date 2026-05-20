"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  el?: keyof React.JSX.IntrinsicElements;
  once?: boolean;
}

export const AnimatedText = ({
  text,
  className,
  el: Wrapper = "p",
  once = true,
}: AnimatedTextProps) => {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  const WrapperComponent = Wrapper as any;

  return (
    <WrapperComponent className={cn(className)}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: "-10%" }}
        className="inline-block"
      >
        {text.split(" ").map((word, index) => (
          <span className="inline-block" key={index}>
            {word.split("").map((char, charIndex) => (
              <motion.span variants={child} key={charIndex} className="inline-block">
                {char}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </motion.span>
    </WrapperComponent>
  );
};
