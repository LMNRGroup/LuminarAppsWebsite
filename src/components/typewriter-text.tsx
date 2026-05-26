"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface TypewriterTextProps {
  characterDelay?: number;
  className?: string;
  highlightWord?: string;
  sessionKey?: string;
  startDelay?: number;
  startOnView?: boolean;
  text: string;
  triggerOnScrollDown?: boolean;
  viewportAmount?: number;
}

export function TypewriterText({
  characterDelay = 28,
  className,
  highlightWord,
  sessionKey,
  startDelay = 0,
  startOnView = false,
  text,
  triggerOnScrollDown = false,
  viewportAmount = 0.35,
}: TypewriterTextProps) {
  const containerRef = useRef<HTMLSpanElement | null>(null);
  const previousInViewRef = useRef(false);
  const hasStartedRef = useRef(false);
  const sessionAppliedRef = useRef(false);
  const shouldReduceMotion = Boolean(useReducedMotion());
  const inView = useInView(containerRef, {
    amount: viewportAmount,
    once: true,
  });

  const [visibleLength, setVisibleLength] = useState(
    shouldReduceMotion ? text.length : 0,
  );
  const [scrollDirection, setScrollDirection] = useState<"down" | "idle" | "up">(
    "idle",
  );

  useEffect(() => {
    hasStartedRef.current = shouldReduceMotion;
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (!triggerOnScrollDown) {
      return;
    }

    let previousScrollY = window.scrollY;

    const handleScroll = () => {
      const nextScrollY = window.scrollY;

      setScrollDirection(
        nextScrollY > previousScrollY
          ? "down"
          : nextScrollY < previousScrollY
            ? "up"
            : "idle",
      );

      previousScrollY = nextScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [triggerOnScrollDown]);

  useEffect(() => {
    if (hasStartedRef.current) {
      return;
    }

    if (shouldReduceMotion) {
      const frameId = window.requestAnimationFrame(() => {
        hasStartedRef.current = true;
        setVisibleLength(text.length);
      });

      return () => {
        window.cancelAnimationFrame(frameId);
      };
    }

    if (sessionKey && !sessionAppliedRef.current) {
      const hasPlayedThisSession =
        window.sessionStorage.getItem(sessionKey) === "played";

      if (hasPlayedThisSession) {
        const frameId = window.requestAnimationFrame(() => {
          hasStartedRef.current = true;
          sessionAppliedRef.current = true;
          setVisibleLength(text.length);
        });

        return () => {
          window.cancelAnimationFrame(frameId);
        };
      }
    }

    const justEnteredView = inView && !previousInViewRef.current;
    previousInViewRef.current = inView;

    if (startOnView && !inView) {
      return;
    }

    if (startOnView && triggerOnScrollDown) {
      const isScrollingDownIntoView =
        justEnteredView && scrollDirection === "down" && window.scrollY > 0;

      if (!isScrollingDownIntoView) {
        return;
      }
    }

    let intervalId: number | undefined;

    const startTimeoutId = window.setTimeout(() => {
      hasStartedRef.current = true;
      let nextLength = 0;

      intervalId = window.setInterval(() => {
        nextLength += 1;
        setVisibleLength(nextLength);

        if (nextLength >= text.length) {
          window.clearInterval(intervalId);

          if (sessionKey) {
            window.sessionStorage.setItem(sessionKey, "played");
          }
        }
      }, characterDelay);
    }, startDelay);

    return () => {
      window.clearTimeout(startTimeoutId);

      if (intervalId) {
        window.clearInterval(intervalId);
      }
    };
  }, [
    characterDelay,
    highlightWord,
    inView,
    scrollDirection,
    sessionKey,
    shouldReduceMotion,
    startDelay,
    startOnView,
    text.length,
    triggerOnScrollDown,
  ]);

  const typedText = shouldReduceMotion ? text : text.slice(0, visibleLength);
  const hasFinishedTyping = shouldReduceMotion || visibleLength >= text.length;

  const renderDisplayedText = () => {
    if (!hasFinishedTyping) {
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
    const highlightedText = text.slice(
      matchIndex,
      matchIndex + highlightWord.length,
    );
    const after = text.slice(matchIndex + highlightWord.length);

    return (
      <>
        {before}
        <span className="relative inline-block">
          <span className="text-white/45">{highlightedText}</span>
          <motion.span
            animate={{ clipPath: "inset(0 0 0 0)" }}
            className="gradient-reveal-fill absolute inset-0 block"
            initial={
              shouldReduceMotion
                ? { clipPath: "inset(0 0 0 0)" }
                : { clipPath: "inset(0 100% 0 0)" }
            }
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {highlightedText}
          </motion.span>
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
