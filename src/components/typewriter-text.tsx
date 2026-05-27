"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface TypewriterTextProps {
  characterDelay?: number;
  className?: string;
  highlightWord?: string;
  highlightWords?: string[];
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
  highlightWords,
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
  const [hasCompletedHighlightReveal, setHasCompletedHighlightReveal] =
    useState(false);
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
          setHasCompletedHighlightReveal(true);
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
  const highlightRevealComplete =
    shouldReduceMotion || hasCompletedHighlightReveal;
  const activeHighlightWords = (
    highlightWords && highlightWords.length > 0 ? highlightWords : highlightWord ? [highlightWord] : []
  ).filter(Boolean);

  const renderDisplayedText = () => {
    if (!hasFinishedTyping) {
      return typedText;
    }

    if (activeHighlightWords.length === 0) {
      return text;
    }

    const lowerText = text.toLowerCase();
    const matches = activeHighlightWords
      .map((word) => {
        const start = lowerText.indexOf(word.toLowerCase());

        return start === -1
          ? null
          : {
              end: start + word.length,
              start,
            };
      })
      .filter(
        (match): match is { end: number; start: number } => match !== null,
      )
      .sort((a, b) => a.start - b.start);

    if (matches.length === 0) {
      return text;
    }

    const segments: React.ReactNode[] = [];
    let cursor = 0;

    matches.forEach((match) => {
      if (match.start < cursor) {
        return;
      }

      if (cursor < match.start) {
        segments.push(text.slice(cursor, match.start));
      }

      const highlightedText = text.slice(match.start, match.end);

      segments.push(
        <span
          key={`${match.start}-${match.end}`}
          className="relative inline-block align-baseline"
        >
          <span
            className={highlightRevealComplete ? "text-transparent" : "text-white/45"}
          >
            {highlightedText}
          </span>
          <motion.span
            animate={{ clipPath: "inset(0 0 0 0)" }}
            className="gradient-reveal-fill absolute inset-0 block whitespace-pre"
            initial={
              shouldReduceMotion
                ? { clipPath: "inset(0 0 0 0)" }
                : { clipPath: "inset(0 100% 0 0)" }
            }
            onAnimationComplete={() => {
              setHasCompletedHighlightReveal(true);
            }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {highlightedText}
          </motion.span>
        </span>,
      );

      cursor = match.end;
    });

    if (cursor < text.length) {
      segments.push(text.slice(cursor));
    }

    return <>{segments}</>;
  };

  return (
    <span
      ref={containerRef}
      className={`relative block overflow-visible ${className ?? ""}`}
    >
      <span className="pointer-events-none invisible block">{text}</span>
      <span className="absolute inset-0 block">{renderDisplayedText()}</span>
    </span>
  );
}
