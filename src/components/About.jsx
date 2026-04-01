import React from "react";

const founderImage = new URL("../assets/ravan2.png", import.meta.url).href;

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-24 lg:px-12">
      <div className="absolute -right-32 top-20 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl" />

      <div className="mx-auto max-w-7xl space-y-20">
        <div className="space-y-8">
          <p className="text-sm uppercase tracking-[0.32em] text-sky-300">About Ravan</p>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="space-y-6">
              <h2 className="text-4xl font-semibold text-white sm:text-5xl">Ravan Publishers Joins Global Research Infrastructure</h2>
              <p className="max-w-3xl text-slate-300 leading-8">
                March 30, 2026 — Ravan Publishers is proud to announce a major institutional upgrade to our digital archival system. We are migrating the 105-volume 2026 Archive into the global system of record so every title becomes persistent, discoverable, and citable across international research ecosystems.
              </p>
              <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40">
                <p className="text-sm uppercase tracking-[0.32em] text-sky-300">Executive highlight</p>
                <p className="mt-5 text-lg font-semibold text-white leading-8">
                  Our mission is to ensure that regional scholarship is not just published, but preserved and cited on a global scale.
                </p>
                <p className="mt-4 text-slate-400">— Dr. M. L. Nivedita, PhD, Founder</p>
              </div>
            </div>

            <div className="space-y-4 rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-sky-300">Archive impact</p>
                <h3 className="mt-3 text-3xl font-semibold text-white">105 volumes · 120+ scholars</h3>
              </div>
              <p className="text-slate-300 leading-7">
                A global archive built for scholarly equity, with rigorous editorial oversight, international metadata standards, and a collaborative cohort of over 120 distinguished academicians.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-950/80 p-5">
                  <p className="text-3xl font-semibold text-white">105</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.28em] text-slate-400">Volumes</p>
                </div>
                <div className="rounded-3xl bg-slate-950/80 p-5">
                  <p className="text-3xl font-semibold text-white">120+</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.28em] text-slate-400">Scholarly contributors</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="history" className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/40">
          <p className="text-sm uppercase tracking-[0.32em] text-sky-300">History</p>
          <h3 className="mt-4 text-3xl font-semibold text-white">Founding Story</h3>
          <p className="mt-6 text-slate-300 leading-8 max-w-3xl">
            Ravan Publishers was founded on March 3, 2025, a milestone date that marked the fourth birthday of Rohan, the son of renowned academicians Ms. M. L. Nivedita and Mr. Ashwin Prakash. This auspicious occasion served as the catalyst for the establishment of Ravan Publishers, a venture that embodies the couple’s passion for education, research, and dissemination of knowledge.
          </p>
          <p className="mt-5 text-slate-300 leading-8 max-w-3xl">
            “The name Ravan Publishers is inspired by the confluence of three distinct entities. ‘Ravan’ pays homage to the mythological figure, renowned for his intellect and strategic prowess. ‘Ra’ is also derived from ‘Rasikaa’, symbolizing the pursuit of knowledge and wisdom. Lastly, ‘Van’ is a nod to ‘Rohan’, representing growth, harmony, and innovation. This synergy reflects our publishing house’s mission: to foster intellectual exploration, creativity, and growth.”
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-8 rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/40">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-sky-300">Technical roadmap</p>
              <h3 className="mt-4 text-3xl font-semibold text-white">Global persistence through discovery-ready metadata</h3>
            </div>
            <div className="space-y-6">
              <article className="rounded-[1.5rem] bg-slate-950/80 p-6">
                <p className="text-xs uppercase tracking-[0.32em] text-slate-400">Phase 1</p>
                <h4 className="mt-3 text-xl font-semibold text-white">WorldCat (OCLC) Integration</h4>
                <p className="mt-3 text-slate-300 leading-7">
                  Partnering with OCLC to index our entire catalog in WorldCat, the world’s largest library database. This ensures every Ravan Publishers monograph is visible to thousands of university libraries and researchers worldwide.
                </p>
              </article>

              <article className="rounded-[1.5rem] bg-slate-950/80 p-6">
                <p className="text-xs uppercase tracking-[0.32em] text-slate-400">Phase 2</p>
                <h4 className="mt-3 text-xl font-semibold text-white">Crossref DOI Assignment</h4>
                <div className="mt-3 space-y-3 text-slate-300 leading-7">
                  <p className="font-semibold text-white">Monograph Level</p>
                  <p>Every book in our archive is being assigned a permanent DOI to secure accurate citation and scholarly tracking.</p>
                  <p className="font-semibold text-white">Chapter Level</p>
                  <p>Beginning Chapter-Level DOI mapping so individual contributions within edited collections are independently searchable and citable.</p>
                </div>
              </article>

              <article className="rounded-[1.5rem] bg-slate-950/80 p-6">
                <p className="text-xs uppercase tracking-[0.32em] text-slate-400">Standardization</p>
                <h4 className="mt-3 text-xl font-semibold text-white">ONIX 3.0 Metadata</h4>
                <p className="mt-3 text-slate-300 leading-7">
                  Our internal data architecture now adheres to ONIX 3.0, the international standard for academic book metadata, ensuring seamless supply chain and discovery-layer integration.
                </p>
              </article>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/40">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-sky-300">Academic network</p>
              <h3 className="mt-4 text-3xl font-semibold text-white">A Global Network of 120+ Scholarly Contributors</h3>
            </div>
            <p className="mt-6 text-slate-300 leading-7">
              At the heart of Ravan Publishers is a robust, growing community of distinguished academicians. Our contributors represent a diverse spectrum of intellectual curiosity and rigorous research across multiple international institutions.
            </p>
            <div className="mt-8 grid gap-4">
              <div className="rounded-3xl bg-slate-950/80 p-6">
                <p className="text-sm uppercase tracking-[0.32em] text-sky-300">Monograph Authors</p>
                <p className="mt-3 text-slate-300 leading-7">
                  Leading experts producing original, single-subject historical and social research for the 2026 Archive.
                </p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-6">
                <p className="text-sm uppercase tracking-[0.32em] text-sky-300">Volume Editors & Associate Editors</p>
                <p className="mt-3 text-slate-300 leading-7">
                  Senior scholars providing critical oversight, peer-review management, and thematic curation across every edited collection.
                </p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-6">
                <p className="text-sm uppercase tracking-[0.32em] text-sky-300">Chapter Contributors</p>
                <p className="mt-3 text-slate-300 leading-7">
                  Specialist researchers contributing high-impact studies within our larger 105-volume framework.
                </p>
              </div>
            </div>
            <blockquote className="mt-8 rounded-3xl border border-white/10 bg-slate-950/90 p-6 italic text-slate-300">
              “Ravan Publishers is more than a press; it is a collaborative intellectual hub. By bringing together 120+ voices, we ensure that regional history is documented with the depth and diversity it deserves.”
            </blockquote>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/40">
            <p className="text-sm uppercase tracking-[0.32em] text-sky-300">Executive Preface</p>
            <h3 className="mt-4 text-3xl font-semibold text-white">The Ravan Archive & The Mission of Scholarly Equity</h3>
            <div className="mt-8 flex justify-center">
              <div className="flex h-45 w-45 items-center justify-center overflow-hidden rounded-full border-4 border-slate-800 bg-slate-950">
                <img src={founderImage} alt="Founder portrait" className="h-full w-full object-cover" />
              </div>
            </div>
            <p className="mt-8 text-slate-300 leading-8">
              By Dr. M. L. Nivedita, PhD | Founder & Managing Editor. The 2025-26 Ravan Archive was conceived as a response to the Data Gap in regional and gendered histories. My work is defined by institutionalizing marginalized narratives and turning regional scholarship into a citable global legacy.
            </p>
            <div className="mt-8 space-y-5 text-slate-300">
              <div>
                <p className="font-semibold text-white">Scholarly Curation at Scale</p>
                <p className="mt-2 leading-7">
                  Overseeing 105 volumes required a unique blend of historical expertise and project management to meet rigorous international indexing standards.
                </p>
              </div>
              <div>
                <p className="font-semibold text-white">Gendered Economic History</p>
                <p className="mt-2 leading-7">
                  Signature titles such as Daughters of the Land and Sovereign Women establish a framework for evaluating women’s agency as economic and political drivers in history.
                </p>
              </div>
              <div>
                <p className="font-semibold text-white">Digital Persistence</p>
                <p className="mt-2 leading-7">
                  Our metadata architecture work with OCLC and Crossref makes the archive discoverable and persistent in the global system of record.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/40">
            <p className="text-sm uppercase tracking-[0.32em] text-sky-300">Upcoming series</p>
            <h3 className="mt-4 text-3xl font-semibold text-white">The Women’s Legacy Collection</h3>
            <p className="mt-6 text-slate-300 leading-8">
              A curated collection of four seminal titles designed to disrupt traditional narratives by exploring untapped archives, identity, and the economic contributions of women across history and geography.
            </p>
            <div className="mt-8 space-y-6">
              <div className="rounded-3xl bg-slate-950/80 p-6">
                <p className="font-semibold text-white">Sovereign Women: A Journey Through History</p>
                <p className="mt-3 text-slate-400 leading-7">
                  An exhaustive exploration of female leadership and political agency that moves beyond exception to systemic influence across centuries.
                </p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-6">
                <p className="font-semibold text-white">Daughters of the Land: Women’s Economic Legacy in India</p>
                <p className="mt-3 text-slate-400 leading-7">
                  A ground-breaking study of the invisible engines powering India’s economy, redefining land rights, labor, and fiscal legacy in the Global South.
                </p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-6">
                <p className="font-semibold text-white">Game Changers: Women in Sports</p>
                <p className="mt-3 text-slate-400 leading-7">
                  More than athletic achievement, this title analyzes sports as a site of social resistance and public visibility.
                </p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-6">
                <p className="font-semibold text-white">Beyond the Frame: Women in Media Arts</p>
                <p className="mt-3 text-slate-400 leading-7">
                  Examining how women artists navigate the tensions between traditional aesthetics and modern identity politics in visual media.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
