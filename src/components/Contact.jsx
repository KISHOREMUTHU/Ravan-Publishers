import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const mailTo = "ravanpublishers@gmail.com";
    const subject = encodeURIComponent(`New enquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name || "N/A"}
Email: ${email || "N/A"}

${message || "No message provided."}`
    );

    window.location.href = `mailto:${mailTo}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-white/10 bg-slate-950/80 px-8 py-16 shadow-2xl shadow-slate-950/40">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-sky-300">Contact</p>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Bring your next book to life.</h2>
            <p className="mt-6 max-w-xl text-slate-400 leading-8">
              Whether you are an emerging author or a creative brand, we provide editorial direction, cover design, production, and launch support.
            </p>
            <div className="mt-10 space-y-4 text-slate-300">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Email</p>
                <p className="mt-2">ravanpublishers@gmail.com</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Office</p>
                <p className="mt-2">Chennai, India</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Phone</p>
                <p className="mt-2">+91 96775 86405</p>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6 rounded-[2rem] bg-slate-900/90 p-8">
            <div>
              <label className="text-sm font-medium text-slate-300">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/90 px-5 py-4 text-slate-100 outline-none transition focus:border-sky-400"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-300">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/90 px-5 py-4 text-slate-100 outline-none transition focus:border-sky-400"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-300">Message</label>
              <textarea
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your project"
                className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/90 px-5 py-4 text-slate-100 outline-none transition focus:border-sky-400"
              />
            </div>
            <button type="submit" className="w-full rounded-full bg-sky-500 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="mt-12 text-center text-slate-500">© 2026 Ravan Publishers. Designed with cinematic storytelling in mind.</div>
    </section>
  );
}


