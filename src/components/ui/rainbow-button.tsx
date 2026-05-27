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
    "rainbow-button group relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-full px-[1px] py-[1px] text-sm font-semibold text-[#f7f2e8] transition-transform duration-300 hover:scale-[1.01]",
    className,
  );
  const content = (
    <>
      <span className="rainbow-button-glow absolute inset-[-24%] rounded-full opacity-70 blur-xl transition duration-300 group-hover:opacity-100" />
      <span className="rainbow-button-border absolute inset-0 rounded-full" />
      <span className="absolute inset-[1px] rounded-full bg-[linear-gradient(180deg,rgba(17,20,27,0.96)_0%,rgba(10,12,17,0.98)_100%)]" />
      <span className="absolute inset-x-10 top-[1px] h-[44%] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.24),transparent_68%)] opacity-80" />
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
