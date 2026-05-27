"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BrandLogo } from "@/components/brand-logo";
import { FocusCard } from "@/components/focus-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { TypewriterText } from "@/components/typewriter-text";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";

const emailAddress = "apps@lmnrgroup.com";
const emailHref = `mailto:${emailAddress}`;

const navigationItems = [
  { href: "#focus", label: "Focus" },
  { href: "#contact", label: "Contact" },
] as const;

const focusItems = [
  {
    title: "Interactive Experiences",
    description:
      "Software-led touchpoints that help people explore, respond, and connect with content in a more natural way.",
  },
  {
    title: "Automation & Systems",
    description:
      "Connected tools that simplify workflows, remove friction from repetitive tasks, and support smoother operations.",
  },
  {
    title: "Visual Technology",
    description:
      "Display-focused systems that blend software, motion, and spatial storytelling across physical and digital environments.",
  },
] as const;

const heroHighlights = [
  {
    title: "Interactive software",
    description:
      "Interfaces for audiences, customers, and guests across digital and physical environments.",
  },
  {
    title: "Automation clarity",
    description:
      "Operational tools that make repeatable work cleaner, faster, and easier to manage.",
  },
  {
    title: "Visual systems",
    description:
      "Display-aware experiences shaped for modern spaces, activations, and content surfaces.",
  },
] as const;

const audienceAreas = [
  "Government",
  "Corporate",
  "Brands",
  "Public Spaces",
] as const;

export function LandingPage() {
  const shouldReduceMotion = useReducedMotion();
  const year = new Date().getFullYear();

  return (
    <div id="top" className="relative isolate min-h-screen overflow-x-clip">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <InteractiveGridPattern
          className="absolute inset-0 size-full opacity-70 [mask-image:radial-gradient(58%_52%_at_50%_34%,white,rgba(255,255,255,0.72),transparent)]"
          height={22}
          radius={shouldReduceMotion ? 0 : 5}
          width={22}
        />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0c0e13]/88 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4 sm:px-8 lg:px-10">
          <a
            className="inline-flex shrink-0 items-center rounded-md opacity-95 transition-opacity duration-300 hover:opacity-100"
            href="#top"
          >
            <BrandLogo priority variant="header" />
          </a>
          <nav
            aria-label="Primary"
            className="flex items-center gap-4 text-xs text-white/58 sm:gap-6 sm:text-sm"
          >
            {navigationItems.map((item) => (
              <a
                key={item.href}
                className="transition-colors hover:text-white"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        <section className="border-b border-white/8">
          <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-14 sm:gap-16 sm:px-8 sm:py-24 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-center lg:gap-20 lg:px-10 lg:py-32">
            <Reveal className="max-w-3xl">
              <p className="mono-copy mx-auto max-w-[18rem] text-center text-[0.62rem] uppercase leading-[1.65] tracking-[0.18em] text-white/62 sm:mx-0 sm:max-w-none sm:text-left sm:text-[0.72rem] sm:leading-normal sm:tracking-[0.3em]">
                <span className="whitespace-nowrap">
                  Interactive Apps • Event Technology
                </span>
                <span className="hidden sm:inline"> • </span>
                <br className="sm:hidden" />
                <span className="whitespace-nowrap">Automation Systems</span>
              </p>
              <h1 className="mt-8 text-5xl font-semibold tracking-[-0.07em] text-white sm:text-6xl lg:text-[5.4rem] lg:leading-[0.94]">
                <TypewriterText
                  characterDelay={56}
                  className="min-h-[3.9em] sm:min-h-[2.7em] lg:min-h-[2em]"
                  highlightWord="experiences"
                  startDelay={260}
                  text="Digital systems for modern experiences."
                />
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/64 sm:text-lg">
                Luminar Apps builds interactive software, automation tools, and
                smart visual systems for brands, businesses, and public spaces.
              </p>
              <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <a
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#f6e0a1]/45 bg-[linear-gradient(135deg,#f8e6b6_0%,#e7c978_48%,#c69431_100%)] px-6 py-3 text-sm font-semibold text-[#181b21] shadow-[0_18px_48px_rgba(198,148,49,0.24)] transition duration-300 hover:scale-[1.01] hover:brightness-105"
                  href={emailHref}
                >
                  Start an Inquiry
                </a>
                <p className="max-w-sm text-sm leading-6 text-white/50">
                  Temporary site for platform direction, capability focus, and
                  direct inquiries.
                </p>
              </div>
            </Reveal>

            <Reveal className="lg:justify-self-end" delay={0.12}>
              <motion.div
                animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
                className="glass-panel relative mx-auto w-full max-w-lg overflow-hidden rounded-[2rem] border border-white/7 p-6 shadow-[0_40px_140px_rgba(0,0,0,0.46)] sm:p-8"
                transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
              >
                <div className="hero-grid absolute inset-0 opacity-20" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(250,189,101,0.16),transparent_26%),radial-gradient(circle_at_82%_80%,rgba(148,162,255,0.16),transparent_28%)]" />

                <div className="relative flex flex-col gap-8">
                  <div className="flex items-start justify-between gap-4 text-[0.68rem] uppercase tracking-[0.32em] text-white/40">
                    <BrandLogo variant="panel" />
                    <span className="mono-copy">01</span>
                  </div>

                  <div>
                    <p className="mono-copy text-[0.68rem] uppercase tracking-[0.32em] text-white/45">
                      Designed For
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {audienceAreas.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/8 bg-[#090b10]/72 px-3 py-2 text-sm text-white/72"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    {heroHighlights.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-[1.35rem] border border-white/7 bg-[#080a0f]/74 p-5"
                      >
                        <h2 className="text-lg font-semibold tracking-[-0.03em] text-white">
                          {item.title}
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-white/60">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-[1.35rem] border border-white/7 bg-white/[0.018] p-4 text-sm leading-6 text-white/58">
                    Modular by design for activations, environments, and
                    evolving operational systems.
                  </div>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </section>

        <section id="focus" className="py-20 sm:py-24">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
            <Reveal>
              <SectionHeading
                align="center"
                description="A focused set of capabilities shaped around clear interfaces, dependable systems, and modern visual environments."
                eyebrow="Focus"
                title="Three areas of emphasis."
              />
            </Reveal>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {focusItems.map((item, index) => (
                <Reveal key={item.title} delay={0.06 * index}>
                  <FocusCard
                    description={item.description}
                    index={String(index + 1).padStart(2, "0")}
                    title={item.title}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="mission" className="py-20 sm:py-24">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
            <Reveal>
              <div className="glass-panel relative overflow-hidden rounded-[2rem] border border-white/7 p-8 shadow-[0_32px_120px_rgba(0,0,0,0.44)] sm:p-10 lg:p-14">
                <div className="pointer-events-none absolute inset-x-1/4 top-0 h-40 rounded-full bg-amber-300/12 blur-3xl" />
                <p className="mono-copy relative text-xs uppercase tracking-[0.32em] text-white/45">
                  Mission
                </p>
                <p className="relative mt-6 max-w-5xl text-3xl leading-tight tracking-[-0.05em] text-white sm:text-4xl lg:text-[2.9rem] lg:leading-[1.1]">
                  <TypewriterText
                    characterDelay={24}
                    className="min-h-[6.5em] sm:min-h-[5.2em] lg:min-h-[3.4em]"
                    highlightWords={["intuitive", "immersive", "scalable"]}
                    sessionKey="luminar-apps-mission-typewriter"
                    startDelay={220}
                    startOnView
                    text="Our mission is to simplify and modernize how people connect with content, audiences, and experiences through intuitive software, immersive visuals, and scalable digital solutions."
                    triggerOnScrollDown
                    viewportAmount={0.45}
                  />
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="border-t border-white/8 py-20 sm:py-24">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
            <Reveal>
              <div className="rounded-[2rem] border border-white/7 bg-white/[0.018] p-8 sm:p-10 lg:flex lg:items-end lg:justify-between lg:gap-10">
                <div className="max-w-3xl">
                  <p className="mono-copy text-xs uppercase tracking-[0.32em] text-white/45">
                    Contact
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                    Have a project, activation, or digital system in mind?
                  </h2>
                  <p className="mt-5 text-base leading-7 text-white/62 sm:text-lg">
                    Reach out directly and we&apos;ll start the conversation.
                  </p>
                </div>

                <div className="mt-8 flex flex-col items-start gap-4 lg:mt-0 lg:items-end">
                  <a
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#f3efe8] px-6 py-3 text-sm font-medium text-[#22262d] transition duration-300 hover:bg-white"
                    href={emailHref}
                  >
                    Email Luminar Apps
                  </a>
                  <a
                    className="text-sm text-white/62 transition-colors hover:text-white"
                    href={emailHref}
                  >
                    {emailAddress}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-white/48 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="flex flex-col gap-4">
            <BrandLogo variant="footer" />
            <div>
              <p className="font-medium text-white/78">Luminar Apps</p>
              <p className="mt-1">Technology, design, and digital systems.</p>
            </div>
          </div>
          <p className="lg:text-right">© {year} Luminar Apps. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
