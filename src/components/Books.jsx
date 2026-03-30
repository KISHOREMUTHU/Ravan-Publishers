import React, { useMemo, useState } from "react";

const covers = [
  new URL("../assets/00000055-PHOTO-2025-07-06-12-53-12.jpg", import.meta.url).href,
  new URL("../assets/00000224-PHOTO-2025-11-24-13-53-18.jpg", import.meta.url).href,
  new URL("../assets/00000225-PHOTO-2025-11-24-13-53-19.jpg", import.meta.url).href,
  new URL("../assets/00000226-PHOTO-2025-11-24-13-53-19.jpg", import.meta.url).href,
  new URL("../assets/00000227-PHOTO-2025-11-24-13-53-19.jpg", import.meta.url).href,
  new URL("../assets/3791192f-f691-42d3-b57d-2929e6ecf065.png", import.meta.url).href,
];

const books = [
  {
    title: "Midnight Pages",
    author: "A. K. Ravan",
    genre: "Literary Fiction",
    summary: "A poetic thriller about legacy, loss, and the stories that bind us.",
    cover: covers[0],
    tags: ["Popular", "Classic"],
  },
  {
    title: "City of Echoes",
    author: "M. Varma",
    genre: "Historical Drama",
    summary: "A sweeping saga across generations of dreamers, rebels, and storytellers.",
    cover: covers[1],
    tags: ["New", "Epic"],
  },
  {
    title: "The Last Manuscript",
    author: "R. S. Patel",
    genre: "Mystery",
    summary: "A gripping tale of a detective, a hidden publisher, and a vanished contract.",
    cover: covers[2],
    tags: ["Mystery", "Suspense"],
  },
  {
    title: "Ocean of Words",
    author: "L. Sharma",
    genre: "Non-fiction",
    summary: "A creative guide to writing with courage, clarity, and emotional power.",
    cover: covers[3],
    tags: ["Guide", "Trending"],
  },
  {
    title: "Raven & Flame",
    author: "S. Kapoor",
    genre: "Fantasy",
    summary: "A lush, cinematic adventure where myth, memory, and music collide.",
    cover: covers[4],
    tags: ["Fantasy", "Worldbuilding"],
  },
  {
    title: "The Publisher's Code",
    author: "N. Iyer",
    genre: "Business",
    summary: "Behind the scenes of book launches, audience building, and author brands.",
    cover: covers[5],
    tags: ["Business", "Strategy"],
  },
];

const genres = ["All", "Literary Fiction", "Historical Drama", "Mystery", "Non-fiction", "Fantasy", "Business"];

export default function Books() {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [query, setQuery] = useState("");

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const matchesGenre = selectedGenre === "All" || book.genre === selectedGenre;
      const matchesQuery = [book.title, book.author, book.genre].some((value) =>
        value.toLowerCase().includes(query.toLowerCase())
      );
      return matchesGenre && matchesQuery;
    });
  }, [selectedGenre, query]);

  return (
    <section id="books" className="px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.32em] text-sky-300">Books</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Browse our premium collection.</h2>
          <p className="mt-5 text-slate-400 leading-8">Filter by genre, popularity, and style to discover stories built for modern readers.</p>
        </div>

        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            {genres.map((genre) => (
              <button
                key={genre}
                type="button"
                onClick={() => setSelectedGenre(genre)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                  selectedGenre === genre
                    ? "bg-sky-500 text-slate-950"
                    : "border border-white/10 bg-slate-900/70 text-slate-300 hover:border-sky-400/30 hover:text-white"
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search titles, authors or genres"
            className="w-full rounded-full border border-white/10 bg-slate-900/80 px-5 py-3 text-sm text-slate-100 outline-none focus:border-sky-400 lg:w-[320px]"
          />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {filteredBooks.map((book) => (
            <article key={book.title} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 shadow-2xl shadow-slate-950/20 transition duration-500 hover:-translate-y-1 hover:bg-slate-900/95">
              <div className="relative overflow-hidden">
                <img src={book.cover} alt={book.title} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-xl">
                  {book.genre}
                </div>
              </div>
              <div className="space-y-4 p-6">
                <h3 className="text-2xl font-semibold text-white">{book.title}</h3>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">by {book.author}</p>
                <p className="text-slate-300 leading-7">{book.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {book.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="mt-4 rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
                  View details
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
