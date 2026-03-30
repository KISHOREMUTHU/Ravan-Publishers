import React from "react";

const partners = ["Aurora Books", "Storyline Studio", "Ink & Paper", "Novella Press", "Lumen Media"];

export default function Partners() {
  return (
    <section id="partners" className="px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-sky-300">Trusted partners</p>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Collaborating with visionary publishers.</h2>
          </div>
          <p className="max-w-xl text-slate-400">Our premium book launches are supported by a network of editorial, design, and marketing partners who care about craft.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {partners.map((name) => (
            <div key={name} className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 text-center text-sm text-slate-300 transition hover:-translate-y-1 hover:border-sky-400/40 hover:bg-slate-900/95">
              <p className="font-semibold text-white">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
