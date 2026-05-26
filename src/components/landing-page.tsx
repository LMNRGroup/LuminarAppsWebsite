"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FocusCard } from "@/components/focus-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import brandLogo from "../../Luminar Apps Brand Logo.png";

const emailAddress = "apps@lmnrgroup.com";
const emailHref = `mailto:${emailAddress}`;

const navigationItems = [
  { href: "#platform", label: "Platform" },
  { href: "#focus", label: "Focus" },
  { href: "#contact", label: "Contact" },
] as const;

const platformItems = [
  {
    title: "Interactive Digital Experiences",
    description:
      "Custom interfaces and audience touchpoints designed to make digital content feel clear, engaging, and intuitive.",
  },
  {
    title: "Event and Activation Technology",
    description:
      "Flexible software layers for live environments, branded activations, installations, and public-facing moments.",
  },
  {
    title: "Automation Tools",
    description:
      "Operational systems that reduce repetitive work, simplify coordination, and help teams move with more clarity.",
  },
  {
    title: "Smart Display and Signage Systems",
    description:
      "Display-ready platforms for screens and environments where information, motion, and visuals need to stay current.",
  },
  {
    title: "Custom Web Apps and Workflow Systems",
    description:
      "Tailored web software built around real operational needs, internal tools, and evolving digital processes.",
  },
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

const audienceAreas = ["Brands", "Businesses", "Public Spaces"] as const;

export function LandingPage() {
  const shouldReduceMotion = useReducedMotion();
  const year = new Date().getFullYear();

  return (
    <div id="top" className="relative min-h-screen overflow-x-clip">
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : { scale: [1, 1.08, 1], x: [0, 24, 0], y: [0, -18, 0] }
        }
        className="pointer-events-none absolute left-[8%] top-24 -z-10 h-72 w-72 rounded-full bg-amber-300/15 blur-[110px]"
        transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : { scale: [1, 0.96, 1], x: [0, -18, 0], y: [0, 20, 0] }
        }
        className="pointer-events-none absolute right-[10%] top-[32rem] -z-10 h-80 w-80 rounded-full bg-indigo-300/14 blur-[120px]"
        transition={{ duration: 20, ease: "easeInOut", repeat: Infinity }}
      />

      <header className="sticky top-0 z-50 border-b border-white/8 bg-[#2b3037]/72 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4 sm:px-8 lg:px-10">
          <a
            className="inline-flex shrink-0 rounded-full border border-white/10 bg-white/[0.94] px-3 py-2 shadow-[0_14px_42px_rgba(15,19,26,0.18)] transition duration-300 hover:bg-white"
            href="#top"
          >
            <Image
              alt="Luminar Apps logo"
              className="h-auto w-[8.4rem] sm:w-[10.5rem]"
              priority
              src={brandLogo}
            />
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

      <main className="relative">
        <section className="border-b border-white/8">
          <div className="mx-auto grid w-full max-w-7xl gap-16 px-6 py-20 sm:px-8 sm:py-24 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-center lg:gap-20 lg:px-10 lg:py-32">
            <Reveal className="max-w-3xl">
              <p className="mono-copy inline-flex rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-[0.72rem] uppercase tracking-[0.32em] text-white/62">
                Interactive Apps • Event Technology • Automation Systems
              </p>
              <h1 className="mt-8 text-5xl font-semibold tracking-[-0.07em] text-white sm:text-6xl lg:text-[5.4rem] lg:leading-[0.94]">
                Digital systems for modern experiences.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/64 sm:text-lg">
                Luminar Apps builds interactive software, automation tools, and
                smart visual systems for brands, businesses, and public spaces.
              </p>
              <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <a
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#f3efe8] px-6 py-3 text-sm font-medium text-[#22262d] transition duration-300 hover:bg-white"
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
                className="glass-panel relative mx-auto w-full max-w-lg overflow-hidden rounded-[2rem] border border-white/10 p-6 shadow-[0_40px_140px_rgba(0,0,0,0.26)] sm:p-8"
                transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
              >
                <div className="hero-grid absolute inset-0 opacity-20" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(250,189,101,0.16),transparent_26%),radial-gradient(circle_at_82%_80%,rgba(148,162,255,0.16),transparent_28%)]" />

                <div className="relative flex flex-col gap-8">
                  <div className="flex items-start justify-between gap-4 text-[0.68rem] uppercase tracking-[0.32em] text-white/40">
                    <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.92] px-4 py-3 shadow-[0_12px_36px_rgba(15,19,26,0.15)]">
                      <Image
                        alt="Luminar Apps logo"
                        className="h-auto w-[9.25rem] sm:w-[10.75rem]"
                        src={brandLogo}
                      />
                    </div>
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
                          className="rounded-full border border-white/12 bg-[#20242b]/50 px-3 py-2 text-sm text-white/72"
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
                        className="rounded-[1.35rem] border border-white/10 bg-[#20242b]/60 p-5"
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

                  <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.05] p-4 text-sm leading-6 text-white/58">
                    Modular by design for activations, environments, and
                    evolving operational systems.
                  </div>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </section>

        <section id="platform" className="py-20 sm:py-24">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
            <Reveal>
              <SectionHeading
                description="Luminar Apps creates digital systems that bridge software, operational flow, and visual experience without adding unnecessary complexity."
                eyebrow="Platform"
                title="What Luminar Apps builds."
              />
            </Reveal>

            <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {platformItems.map((item, index) => (
                <Reveal key={item.title} delay={0.05 * index}>
                  <article className="h-full rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6 transition-colors duration-300 hover:border-white/18 hover:bg-white/[0.065] sm:p-7">
                    <p className="mono-copy text-xs uppercase tracking-[0.32em] text-white/40">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-white/60">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="focus" className="border-t border-white/8 py-20 sm:py-24">
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

        <section className="py-20 sm:py-24">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
            <Reveal>
              <div className="glass-panel relative overflow-hidden rounded-[2rem] border border-white/10 p-8 shadow-[0_32px_120px_rgba(0,0,0,0.28)] sm:p-10 lg:p-14">
                <div className="pointer-events-none absolute inset-x-1/4 top-0 h-40 rounded-full bg-amber-300/12 blur-3xl" />
                <p className="mono-copy relative text-xs uppercase tracking-[0.32em] text-white/45">
                  Mission
                </p>
                <p className="relative mt-6 max-w-5xl text-3xl leading-tight tracking-[-0.05em] text-white sm:text-4xl lg:text-[2.9rem] lg:leading-[1.1]">
                  Our mission is to simplify and modernize how people connect
                  with content, audiences, and experiences through intuitive
                  software, immersive visuals, and scalable digital solutions.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="border-t border-white/8 py-20 sm:py-24">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
            <Reveal>
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 sm:p-10 lg:flex lg:items-end lg:justify-between lg:gap-10">
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

      <footer className="border-t border-white/8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-white/48 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="flex flex-col gap-4">
            <div className="inline-flex w-fit rounded-[1.25rem] border border-white/10 bg-white/[0.92] px-4 py-3 shadow-[0_12px_36px_rgba(15,19,26,0.15)]">
              <Image
                alt="Luminar Apps logo"
                className="h-auto w-[8.8rem] sm:w-[10.5rem]"
                src={brandLogo}
              />
            </div>
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
