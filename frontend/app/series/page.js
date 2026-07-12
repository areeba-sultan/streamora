"use client";
import Image from "next/image";
import Navbar from "../../components/bar/Navbar";
import Homefooter from "../../components/footer/Homefooter";
import moviesData from "../../dummydata/moviesData";
import { useState } from "react";
import MoviePopup from "../../components/modal/MoviePop";

export default function WebSeriesPage() {
  const [open, setOpen] = useState(false);
  const [selectedSeries, setSelectedSeries] = useState(null);

  // Filter only Web Series
  const webSeries = moviesData.filter(
    (item) => item.category?.toLowerCase() === "webseries"
  );

  return (
    <div className="min-h-screen bg-[#111] text-white overflow-x-hidden">
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 md:px-10 py-10">
        <h1 className="text-4xl font-bold mb-10">Web Series</h1>

        {/* Grid of Web Series */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {webSeries.map((series) => (
            <div
              key={series.id}
              onClick={() => {
                setSelectedSeries(series);
                setOpen(true);
              }}
              className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
            >
             <div className="relative w-full aspect-3/4">
              <Image
                src={series.image}
                alt={series.title}
                fill
                className="object-cover"
              />
              </div>

              <div className="absolute bottom-0 left-0 w-full bg-gradient from-black/80 p-3">
                <h3 className="text-lg font-semibold">{series.title}</h3>
                <p className="text-sm text-gray-300">{series.genre}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup to show episodes / play links */}
      <MoviePopup open={open} setOpen={setOpen} movie={selectedSeries} />

      <Homefooter />
    </div>
  );
}
