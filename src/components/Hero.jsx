import React from "react";

const heroImage = new URL("../assets/3791192f-f691-42d3-b57d-2929e6ecf065.png", import.meta.url).href;

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-6 pb-24 pt-28 lg:px-12">
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="absolute left-0 top-28 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="mx-auto flex max-w-7xl flex-col gap-16 lg:flex-row lg:items-center">
        <div className="max-w-2xl space-y-8">
          <p className="inline-flex items-center rounded-full border border-sky-300/30 bg-sky-300/5 px-4 py-2 text-sm uppercase tracking-[0.3em] text-sky-200">
            Cinematic publishing
          </p>
          <h1 className="text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Ravan Publishers creates premium books with bold voice and cinematic design.
          </h1>
          <p className="max-w-xl text-lg leading-8 text-slate-300">
            From editorial strategy to cover direction and launch campaigns, we help authors publish stories that feel modern, memorable, and built to stand out.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#books" className="inline-flex items-center justify-center rounded-full bg-sky-500 px-8 py-4 text-base font-semibold text-slate-950 transition hover:bg-sky-400">
              Explore Books
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10">
              Work with us
            </a>
          </div>
        </div>

        <div className="relative hidden overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900/90 shadow-2xl shadow-slate-950/40 lg:block">
          <img src={heroImage} alt="Premium book launch" className="h-[580px] w-full object-cover" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
          <div className="absolute bottom-8 left-8 rounded-[2rem] border border-white/10 bg-white/10 px-6 py-5 backdrop-blur-xl text-white">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-200">Ultimate launch suite</p>
            <p className="mt-3 max-w-xs text-lg leading-7">Design, print, and campaign strategy crafted for premium authors.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
