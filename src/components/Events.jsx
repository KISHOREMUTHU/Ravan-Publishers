import React from "react";

const events = [
  {
    title: "Author Live: The Future of Storytelling",
    date: "June 12, 2026",
    location: "Mumbai Literary Hall",
    description: "A curated evening with authors, editors, and creative directors exploring narrative craft.",
  },
  {
    title: "Book Launch: Ocean of Words",
    date: "July 5, 2026",
    location: "Ravan Studio, Delhi",
    description: "Experience the launch of our newest nonfiction release with a live panel and book signing.",
  },
  {
    title: "Publishing Masterclass",
    date: "August 19, 2026",
    location: "Virtual Event",
    description: "A practical workshop for new authors on crafting proposals, covers, and audience strategy.",
  },
];

export default function Events() {
  return (
    <section id="events" className="px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.32em] text-sky-300">Events</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Connect at our next event.</h2>
          <p className="mt-5 text-slate-400 leading-8">Join our author gatherings, launch celebrations, and publishing workshops designed for serious creatives.</p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {events.map((event) => (
            <article key={event.title} className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/20 transition hover:-translate-y-1">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">{event.date}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{event.title}</h3>
              <p className="mt-3 text-slate-400 leading-7">{event.description}</p>
              <div className="mt-6 rounded-3xl bg-slate-800/90 p-5 text-sm text-slate-300">
                <p className="font-medium text-white">Location</p>
                <p className="mt-1">{event.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
