"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
}

export function Reveal({
  children,
  className,
  delay = 0,
  ...props
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 1, y: 24 }}
      transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ amount: 0.25, once: true }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
