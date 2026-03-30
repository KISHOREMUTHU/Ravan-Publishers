import React from "react";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-24 lg:px-12">
      <div className="absolute -right-32 top-20 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="absolute left-0 top-1/2 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl" />
      <div className="mx-auto max-w-7xl space-y-16">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.32em] text-sky-300">About Ravan</p>
            <h2 className="text-4xl font-semibold text-white sm:text-5xl">A modern publisher for authors who want books that feel iconic.</h2>
            <p className="max-w-xl text-slate-300 leading-8">
              Ravan Publishers blends editorial excellence, premium print design, and sophisticated launch strategy. We help storytellers from debut authors to seasoned creators craft books that earn attention and respect.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8">
              <p className="text-sm uppercase tracking-[0.32em] text-sky-300">Vision</p>
              <p className="mt-4 text-slate-300 leading-7">
                To make every published story feel premium, forward-thinking, and built to stand the test of time.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8">
              <p className="text-sm uppercase tracking-[0.32em] text-sky-300">Mission</p>
              <p className="mt-4 text-slate-300 leading-7">
                To elevate authors with editorial rigor, beautiful design, and launch campaigns that connect with readers.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/40">
            <p className="text-sm uppercase tracking-[0.32em] text-sky-300">Why publishers choose us</p>
            <ul className="mt-8 space-y-4 text-slate-300">
              <li className="flex gap-3 text-sm leading-7">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-400" />
                Bespoke editorial and cover design with a cinematic storytelling focus.
              </li>
              <li className="flex gap-3 text-sm leading-7">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-400" />
                Integrated launch strategy that builds brand authority and reader demand.
              </li>
              <li className="flex gap-3 text-sm leading-7">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-400" />
                Premium production standards across print, digital, and marketing assets.
              </li>
            </ul>
          </div>
          <div className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/40">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-sky-300">Team highlights</p>
              <h3 className="mt-4 text-3xl font-semibold text-white">Creative direction meets editorial precision.</h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-950/80 p-5">
                <p className="font-semibold text-white">Anika Mehra</p>
                <p className="mt-2 text-sm text-slate-400">Publishing Director</p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-5">
                <p className="font-semibold text-white">Sameer Gupta</p>
                <p className="mt-2 text-sm text-slate-400">Design Lead</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
