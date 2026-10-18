"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "#systems", label: "Systems" },
  { href: "#job", label: "How a job runs" },
  { href: "#audience", label: "Who it's for" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [ruled, setRuled] = useState(false);

  useEffect(() => {
    const onScroll = () => setRuled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`sticky top-0 z-40 bg-ink text-bone ${ruled ? "border-b border-line-ink" : "border-b border-transparent"}`}>
      <div className="inset-page flex h-16 items-center justify-between gap-6">
        <a href="#top" className="shrink-0">
          <Image
            src="/brand/lockup.png"
            alt="Sysnet Technology"
            width={462}
            height={162}
            priority
            className="h-10 w-auto"
          />
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] tracking-[0.08em] uppercase"
            >
              {link.label}
            </a>
          ))}
          <a href="#survey" className="text-[13px] tracking-[0.08em] text-signal uppercase">
            Book a site survey
          </a>
        </nav>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <X aria-hidden strokeWidth={1.5} className="size-5" />
          ) : (
            <Menu aria-hidden strokeWidth={1.5} className="size-5" />
          )}
          <span className="sr-only">{open ? "Close menu" : "Menu"}</span>
        </button>
      </div>
      {open ? (
        <nav id="site-menu" aria-label="Primary" className="border-t border-line-ink md:hidden">
          <ul className="inset-page flex flex-col py-2">
            {links.map((link) => (
              <li key={link.href} className="border-b border-line-ink">
                <a href={link.href} className="block py-3" onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#survey"
                className="block py-3 text-signal"
                onClick={() => setOpen(false)}
              >
                Book a site survey
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
