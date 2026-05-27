"use client";

import { motion, useAnimationControls, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef } from "react";

import { cn } from "@/lib/utils";

interface KineticWordProps {
  className?: string;
  text: string;
}

export function KineticWord({ className, text }: KineticWordProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const controls = useAnimationControls();
  const shouldReduceMotion = Boolean(useReducedMotion());
  const inView = useInView(ref, { amount: 0.8, once: true });
  const characters = useMemo(() => Array.from(text), [text]);

  useEffect(() => {
    if (shouldReduceMotion || !inView) {
      return;
    }

    void controls.start((index) => ({
      filter: [
        "drop-shadow(0 0 0 rgba(244,210,122,0))",
        "drop-shadow(0 0 10px rgba(244,210,122,0.28))",
        "drop-shadow(0 0 8px rgba(139,92,246,0.22))",
        "drop-shadow(0 0 0 rgba(244,210,122,0))",
      ],
      fontVariationSettings: [
        '"wght" 580',
        '"wght" 740',
        '"wght" 620',
        '"wght" 680',
      ],
      transition: {
        delay: index * 0.04,
        duration: 0.62,
        ease: "easeInOut",
      },
      y: [0, -5, 1, 0],
    }));
  }, [controls, inView, shouldReduceMotion]);

  const triggerHover = () => {
    if (shouldReduceMotion) {
      return;
    }

    void controls.start((index) => ({
      filter: [
        "drop-shadow(0 0 0 rgba(244,210,122,0))",
        "drop-shadow(0 0 12px rgba(244,210,122,0.28))",
        "drop-shadow(0 0 10px rgba(139,92,246,0.24))",
        "drop-shadow(0 0 0 rgba(244,210,122,0))",
      ],
      fontVariationSettings: [
        '"wght" 580',
        '"wght" 760',
        '"wght" 640',
        '"wght" 680',
      ],
      transition: {
        delay: index * 0.03,
        duration: 0.56,
        ease: "easeInOut",
      },
      y: [0, -4, 0],
    }));
  };

  return (
    <span
      ref={ref}
      className={cn("inline-block whitespace-pre", className)}
      onMouseEnter={triggerHover}
    >
      {characters.map((character, index) => (
        <motion.span
          key={`${character}-${index}`}
          animate={controls}
          className="gradient-reveal-fill inline-block"
          custom={index}
          initial={
            shouldReduceMotion
              ? undefined
              : {
                  filter: "drop-shadow(0 0 0 rgba(244,210,122,0))",
                  fontVariationSettings: '"wght" 580',
                  y: 0,
                }
          }
        >
          {character}
        </motion.span>
      ))}
    </span>
  );
}
