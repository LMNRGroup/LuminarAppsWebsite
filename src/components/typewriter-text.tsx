"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface TypewriterTextProps {
  characterDelay?: number;
  className?: string;
  highlightDelay?: number;
  highlightWord?: string;
  startDelay?: number;
  startOnView?: boolean;
  text: string;
  viewportAmount?: number;
}

export function TypewriterText({
  characterDelay = 28,
  className,
  highlightDelay = 160,
  highlightWord,
  startDelay = 0,
  startOnView = false,
  text,
  viewportAmount = 0.35,
}: TypewriterTextProps) {
  const containerRef = useRef<HTMLSpanElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const inView = useInView(containerRef, {
    amount: viewportAmount,
    once: true,
  });
  const hasStartedRef = useRef(shouldReduceMotion);

  const [visibleLength, setVisibleLength] = useState(
    shouldReduceMotion ? text.length : 0,
  );
  const [isComplete, setIsComplete] = useState(shouldReduceMotion);
  const [showHighlight, setShowHighlight] = useState(
    shouldReduceMotion && Boolean(highlightWord),
  );

  const shouldStart = shouldReduceMotion || !startOnView || inView;

  useEffect(() => {
    if (shouldReduceMotion || !shouldStart || hasStartedRef.current) {
      return;
    }

    let intervalId: number | undefined;
    let highlightTimeoutId: number | undefined;

    const startTimeoutId = window.setTimeout(() => {
      hasStartedRef.current = true;
      let nextLength = 0;

      intervalId = window.setInterval(() => {
        nextLength += 1;
        setVisibleLength(nextLength);

        if (nextLength >= text.length) {
          window.clearInterval(intervalId);
          setIsComplete(true);

          if (highlightWord) {
            highlightTimeoutId = window.setTimeout(() => {
              setShowHighlight(true);
            }, highlightDelay);
          }
        }
      }, characterDelay);
    }, startDelay);

    return () => {
      window.clearTimeout(startTimeoutId);

      if (intervalId) {
        window.clearInterval(intervalId);
      }

      if (highlightTimeoutId) {
        window.clearTimeout(highlightTimeoutId);
      }
    };
  }, [
    characterDelay,
    highlightDelay,
    highlightWord,
    hasStartedRef,
    shouldReduceMotion,
    shouldStart,
    startDelay,
    text.length,
  ]);

  const typedText = shouldReduceMotion ? text : text.slice(0, visibleLength);

  const renderDisplayedText = () => {
    if (!isComplete) {
      return typedText;
    }

    if (!highlightWord) {
      return text;
    }

    const matchIndex = text.toLowerCase().indexOf(highlightWord.toLowerCase());

    if (matchIndex === -1) {
      return text;
    }

    const before = text.slice(0, matchIndex);
    const highlightedText = text.slice(matchIndex, matchIndex + highlightWord.length);
    const after = text.slice(matchIndex + highlightWord.length);

    return (
      <>
        {before}
        <span className="relative inline-block pb-[0.08em]">
          {highlightedText}
          {showHighlight ? (
            <motion.span
              animate={{ opacity: 1, scaleX: 1 }}
              className="absolute bottom-[0.01em] left-0 h-[0.08em] w-full origin-left rounded-full bg-[linear-gradient(90deg,rgba(255,233,196,0.94),rgba(141,161,255,0.82))] shadow-[0_0_28px_rgba(122,145,255,0.18)]"
              initial={{ opacity: 0, scaleX: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            />
          ) : null}
        </span>
        {after}
      </>
    );
  };

  return (
    <span ref={containerRef} className={`block overflow-visible ${className ?? ""}`}>
      {renderDisplayedText()}
    </span>
  );
}
