import React from "react";

const navLinks = [
  {label: "Home", href: "#home"},
  {label: "About", href: "#about"},
  {label: "Books", href: "#books"},
  {label: "Events", href: "#events"},
  {label: "Contact", href: "#contact"},
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-semibold tracking-[0.24em] text-slate-100">
          RAVAN PUBLISHERS
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-slate-300 transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 md:inline-flex">
          Get in Touch
        </a>
      </div>
    </header>
  );
}
