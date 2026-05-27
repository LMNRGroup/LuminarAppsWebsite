"use client";

import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface RainbowButtonBaseProps {
  children: ReactNode;
  className?: string;
}

type RainbowButtonProps =
  | (RainbowButtonBaseProps &
      ButtonHTMLAttributes<HTMLButtonElement> & {
        href?: never;
      })
  | (RainbowButtonBaseProps &
      AnchorHTMLAttributes<HTMLAnchorElement> & {
        href: string;
      });

export function RainbowButton(props: RainbowButtonProps) {
  const { children, className } = props;
  const sharedClassName = cn(
    "group relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-full p-[1px] text-sm font-semibold text-[#f7f2e8] transition-transform duration-300 hover:scale-[1.01]",
    className,
  );
  const content = (
    <>
      <span className="absolute inset-0 rounded-full bg-[linear-gradient(115deg,#8b5cf6_8%,#b57abf_28%,#f4d27a_58%,#9a86ff_88%)] opacity-95 transition duration-300 group-hover:scale-[1.03]" />
      <span className="absolute inset-[1px] rounded-full bg-[linear-gradient(180deg,#15181f_0%,#0d1015_100%)]" />
      <span className="absolute inset-x-8 top-0 h-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.28),transparent_72%)] opacity-80" />
      <span className="relative z-10 px-6 py-3 tracking-[0.02em]">{children}</span>
    </>
  );

  if ("href" in props && props.href) {
    const anchorProps = props as RainbowButtonBaseProps &
      AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
    const restAnchorProps = {
      ...anchorProps,
    } as AnchorHTMLAttributes<HTMLAnchorElement> & {
      children?: ReactNode;
      className?: string;
      href?: string;
    };
    delete restAnchorProps.children;
    delete restAnchorProps.className;
    const href = restAnchorProps.href ?? anchorProps.href;
    delete restAnchorProps.href;

    return (
      <a className={sharedClassName} href={href} {...restAnchorProps}>
        {content}
      </a>
    );
  }

  const buttonProps = props as RainbowButtonBaseProps &
    ButtonHTMLAttributes<HTMLButtonElement>;
  const restButtonProps = { ...buttonProps };
  delete restButtonProps.children;
  delete restButtonProps.className;
  delete restButtonProps.type;

  return (
    <button className={sharedClassName} type="button" {...restButtonProps}>
      {content}
    </button>
  );
}
