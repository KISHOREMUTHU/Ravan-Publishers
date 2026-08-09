import React from "react";

const head1 = new URL("../assets/head1.jpeg", import.meta.url).href;
const head2 = new URL("../assets/head2.jpeg", import.meta.url).href;
const head3 = new URL("../assets/head3.jpeg", import.meta.url).href;

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-6 pb-24 pt-28 lg:px-12">
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="absolute left-0 top-28 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="mx-auto flex max-w-7xl flex-col gap-16 lg:flex-row lg:items-start">
        <div className="max-w-2xl space-y-8">
          <h1 className="text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Ravan Publishers creates premium books with bold voice.
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

        <div className="relative hidden lg:flex lg:min-w-[460px] lg:max-w-[520px] gap-4 items-start">
          <div className="flex flex-col gap-4 flex-1">
            <img src={head1} alt="" className="w-full rounded-2xl object-cover shadow-xl" />
            <img src={head2} alt="" className="w-full rounded-2xl object-cover shadow-xl" />
          </div>
          <div className="flex flex-col justify-center flex-1 mt-12">
            <img src={head3} alt="" className="w-full rounded-2xl object-cover shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
