"use client";

import React, { useState } from "react";
import Navbar from "../../components/bar/Navbar";
import Homefooter from "../../components/footer/Homefooter";
import Link from "next/link";
import Image from "next/image";
import moviesData from "../../dummydata/moviesData";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!query) return setResults([]);

    const q = query.toLowerCase();

    const filtered = moviesData.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(q) ||
        movie.genre.toLowerCase().includes(q) ||
        movie.type.toLowerCase().includes(q)
      );
    });

    setResults(filtered);
  };

  return (
    <div className="min-h-screen bg-[#111] text-white">
      <Navbar />

      <div className="container mx-auto px-10 py-10">
        <h1 className="text-4xl font-bold mb-6">Search Movies & TV Shows</h1>

        {/* Search Input */}
        <form onSubmit={handleSearch} className="mb-8 flex gap-2">
          <input
            type="text"
            placeholder="Search by title, genre, type..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            Search
          </button>
        </form>

        {/* Results */}
        {results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {results.map((movie) => {
              const typePath = movie.type.split(",")[0].trim().toLowerCase().replace(/\s+/g, "-");
              return (
                <Link key={movie.id} href={`/movies/${typePath}/${movie.id}`}>
                  <div className="relative w-full h-72 rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition duration-300 cursor-pointer">
                    <Image
                      src={movie.image}
                      alt={movie.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black/80 via-black/50 to-transparent p-4">
                      <h3 className="text-lg font-bold">{movie.title}</h3>
                      <p className="text-sm text-gray-300">{movie.genre}</p>
                      <p className="text-xs text-gray-400">{movie.year}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <p className="text-gray-400 text-lg">No results found.</p>
        )}
      </div>

      <Homefooter />
    </div>
  );
}
