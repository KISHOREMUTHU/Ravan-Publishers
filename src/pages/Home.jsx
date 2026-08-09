import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Anthology from "../components/Anthology";
import About from "../components/About";
import Books from "../components/Books";
import Partners from "../components/Partners";
import Testimonials from "../components/Testimonials";
import Events from "../components/Events";
import LatestLaunch from "../components/LatestLaunch";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <Navbar />
      <main className="pt-24">
        <Anthology />
        <Hero />
        <LatestLaunch />
        <About />
        <Books />
        <Partners />
        <Testimonials />
        <Events />
        <Contact />
      </main>
    </div>
  );
}