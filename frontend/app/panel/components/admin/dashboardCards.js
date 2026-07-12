'use client';

import { useRouter } from "next/navigation";

export default function DashboardCards() {
  const router = useRouter();

  const cards = [
    {
      title: "Add Movies",
      desc: "Create new content",
      route: "/panel/admindashboard/add",
      color: "from-green-500/30 to-green-700/30 border-green-500"
    },
    {
      title: "All Movies",
      desc: "View all records",
      route: "/panel/admindashboard/allmovies",
      color: "from-blue-500/30 to-blue-700/30 border-blue-500"
    },
    {
      title: "Update Movies",
      desc: "Edit existing movies",
      route: "/panel/admindashboard/update",
      color: "from-yellow-500/30 to-yellow-700/30 border-yellow-500"
    },
    {
      title: "Delete Movies",
      desc: "Remove content",
      route: "/panel/admindashboard/delete",
      color: "from-red-500/30 to-red-700/30 border-red-500"
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {cards.map((card, i) => (
        <div
          key={i}
          onClick={() => router.push(card.route)}
          tabIndex={0}
          className={`
            cursor-pointer
            p-6 rounded-2xl
            bg-gradient-to-br ${card.color}
            backdrop-blur-xl
            border border-white/10
            shadow-lg

            hover:scale-105 hover:shadow-red-500/30
            focus:scale-105 focus:outline-none

            transition-all duration-300
          `}
        >

          <h2 className="text-lg font-bold text-white">
            {card.title}
          </h2>

          <p className="text-sm text-white/70 mt-2">
            {card.desc}
          </p>

        </div>
      ))}

    </div>
  );
}