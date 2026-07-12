"use client";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Heart, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Star, Clapperboard, Calendar, Globe } from "lucide-react";

export default function MoviePopup({ movie, open, setOpen }) {
  const [liked, setLiked] = useState(false);
  const router = useRouter();
  const [msg, setMsg] = useState("");

  if (!movie) return null;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const categoryPath = movie.category?.toLowerCase();
  const typePath = movie.type?.split(",")[0].trim().toLowerCase().replace(/\s+/g, "-");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl w-full max-h-[85vh] p-0 overflow-hidden bg-black/90 text-white border border-red-600/20 rounded-2xl shadow-2xl">
        {msg && (
          <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg text-sm shadow-lg z-50 animate-pulse">
        {msg}
      </div>
     )}
        {/* HERO IMAGE */}
        <div className="relative w-full h-72">
          <Image
            src={movie.image}
            alt={movie.title}
            fill
            className="object-cover"
          />

          {/* dark overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

          {/* title on image */}
          <div className="absolute bottom-4 left-4">
            <h2 className="text-2xl font-bold">{movie.title}</h2>
            <p className="text-sm text-gray-300">
              {movie.genre} • {movie.releasedyear}
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-6 overflow-y-auto space-y-4">

          {/* BADGES */}
         <div className="flex flex-wrap gap-2 text-xs">

          <span className="flex items-center gap-1 bg-red-600 px-3 py-1 rounded-full">
         <Star size={14} /> IMDB {movie.imdb}
        </span>
             <div className="flex items-center flex-wrap gap-2">
               {movie.genre?.split(",").map((genre, index) => (
                 <span
                 key={index}
                 className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full"
              >
           <Clapperboard size={14} />
           {genre.trim()}
           </span>
        ))}
    </div>

  <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full">
    <Calendar size={14} /> {movie.releasedyear}
  </span>

  <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full">
    <Globe size={14} /> {movie.language}
  </span>

</div>

          {/* DESCRIPTION */}
          <p className="text-gray-300 text-sm leading-relaxed">
            {movie.description}
          </p>

          {/* DIRECTOR + CAST */}
          <div className="space-y-2 text-sm text-gray-300">
            <p><span className="text-white font-semibold">Director:</span> {movie.director}</p>
            <p><span className="text-white font-semibold">Cast:</span> {movie.casts}</p>
          </div>

          {/* BUTTONS */}
          <div className="flex items-center gap-3 pt-2">

            <Link href={`/movies/${typePath}/${movie.id}`}>
              <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg font-semibold transition">
                <Play size={18} /> Play
              </button>
            </Link>

            <button
  onClick={() => {
  setLiked(true);

  // Get old list
  const existing = JSON.parse(localStorage.getItem("myList") || "[]");

  // prevent duplicates
  const alreadyExists = existing.some((item) => item.id === movie.id);

  if (!alreadyExists) {
    const updatedList = [...existing, movie];
    localStorage.setItem("myList", JSON.stringify(updatedList));
  }

  // ⭐ professional toast message
  setMsg("Added to My List ❤️");

  setTimeout(() => setMsg(""), 2000);
}}
        className="p-2 rounded-full border border-white/20 hover:bg-white/10 transition"
       >
       <Heart
           size={20}
           className={liked ? "text-red-500 fill-red-500" : "text-white"}
        />
     </button>
          </div>

          {/* EPISODES (ONLY IF AVAILABLE) */}
          {movie.seasons?.length > 0 && (
            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-2 text-red-500">
                Episodes
              </h3>

              <div className="space-y-3">
                {movie.seasons.map((season) => (
                  <div key={season.seasonNumber}>
                    <p className="text-white font-medium mb-2">
                      Season {season.seasonNumber}
                    </p>

                    <div className="space-y-2">
                      {season.episodes.map((ep) => (
                        <div
                          key={ep.ep}
                          className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/10"
                        >
                          <span className="text-sm text-gray-300">
                            Ep {ep.ep}: {ep.title} ({ep.duration})
                          </span>

                          {ep.video && (
                            <a
                              href={ep.video}
                              target="_blank"
                              className="text-red-400 text-sm hover:underline"
                            >
                              Watch
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </DialogContent>
    </Dialog>
  );
}