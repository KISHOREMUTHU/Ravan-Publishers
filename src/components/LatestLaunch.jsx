import React from "react";
import video from "../assets/new-book-video.mp4";

export default function LatestLaunch() {
  return (
    <section id="latest-launch" className="px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-10 text-center text-4xl font-semibold tracking-tight text-white">
          Latest Launch
        </h2>
        <video
          src={video}
          controls
          className="w-full rounded-2xl shadow-2xl shadow-slate-950/60"
        />
      </div>
    </section>
  );
}
