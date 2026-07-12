"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Trash2, Heart } from "lucide-react";
import Navbar from "../../components/bar/Navbar";
import Homefooter from "../../components/footer/Homefooter";

export default function MyListPage() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("myList") || "[]");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setList(saved);
  }, []);

  const removeItem = (id) => {
    const updated = list.filter((item) => item.id !== id);
    setList(updated);
    localStorage.setItem("myList", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

      {/* ✅ NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <div className="flex-1 px-6 py-10">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-2 text-white">
            <Heart className="text-red-700" /> My List
          </h1>

          <p className="text-gray-400 text-sm">
            {list.length} saved items
          </p>
        </div>

        {/* EMPTY STATE */}
        {list.length === 0 ? (
          <div className="text-center mt-20 text-gray-400">
            <p className="text-lg">No movies saved yet</p>
            <p className="text-sm mt-2">Add movies to your list ❤️</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

            {list.map((movie) => (
              <div
                key={movie.id}
                className="group relative bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:scale-105 transition"
              >

                {/* IMAGE */}
                <div className="relative w-full h-60">
                  <Image
                    src={movie.image}
                    alt={movie.title}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
                </div>

                {/* INFO */}
                <div className="p-3">
                  <h2 className="text-sm font-semibold truncate">
                    {movie.title}
                  </h2>

                  <p className="text-xs text-gray-400">
                    {movie.genre} • {movie.releasedyear}
                  </p>
                </div>

                {/* ACTIONS */}
                <div className="absolute top-2 right-2 flex gap-2">

                  <Link
                    href={`/movies/${movie.type}/${movie.id}`}
                    className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full text-xs"
                  >
                    ▶
                  </Link>

                  <button
                    onClick={() => removeItem(movie.id)}
                    className="bg-black/70 hover:bg-red-600 p-2 rounded-full"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>

              </div>
            ))}

          </div>
        )}
      </div>

      {/* ✅ FOOTER */}
      <Homefooter />

    </div>
  );
}