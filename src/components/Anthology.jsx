import React from "react";

const anthologyImage = new URL("../assets/head1.jpeg", import.meta.url).href;

export default function Anthology() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 lg:px-12">
      <img
        src={anthologyImage}
        alt="Anthology"
        className="w-full rounded-2xl object-cover shadow-2xl shadow-slate-950/50"
      />
    </section>
  );
}
