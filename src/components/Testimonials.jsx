import React from "react";

const testimonials = [
  {
    name: "Amrita Shah",
    role: "Author",
    quote: "Ravan Publishers elevated my debut with a launch that felt cinematic, strategic, and utterly unforgettable.",
  },
  {
    name: "Dev Nayak",
    role: "Book Designer",
    quote: "The creative direction is premium, thoughtful, and always aligned with the author’s vision.",
  },
  {
    name: "Meera Joshi",
    role: "Literary Agent",
    quote: "A remarkable partner for authors who want beautiful books and real audience impact.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-950/90 px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.32em] text-sky-300">What others say</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Trusted by authors and creators.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/20 transition hover:-translate-y-1">
              <p className="text-xl leading-8 text-slate-200">“{item.quote}”</p>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-sky-500/20"></div>
                <div>
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-slate-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
