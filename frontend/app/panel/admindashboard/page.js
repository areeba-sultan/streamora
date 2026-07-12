'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../components/admin/sidebar";
import DashboardCards from "../components/admin/dashboardCards";
import { FaShieldAlt, FaChartLine } from "react-icons/fa";

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    const key = localStorage.getItem("adminKey");
    if (!key) router.push("/adminlogin");
  }, [router]);

  return (
    <div className="flex min-h-screen bg-linear-to-br from-black via-zinc-950 to-red-950 text-white">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="flex-1 p-6 md:p-10">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">

          <div className="flex items-center gap-3">
            <FaChartLine className="text-red-500 text-2xl" />
            <h1 className="text-3xl md:text-4xl font-bold">
              Admin Dashboard
            </h1>
          </div>

        </div>

        {/* ALERT BOX (GLASS STYLE) */}
        <div className="
          mb-8
          flex items-center gap-3
          p-4 rounded-2xl
          bg-white/5 backdrop-blur-xl
          border border-white/10
          shadow-lg
          text-red-300
        ">

          <FaShieldAlt className="text-red-500 text-lg" />

          <span className="text-sm md:text-base">
            System running in secure admin mode
          </span>

        </div>

        {/* CARDS WRAPPER (GLASS CONTAINER) */}
        <div className="
          bg-white/5 backdrop-blur-xl
          border border-white/10
          rounded-3xl
          p-6 md:p-8
          shadow-2xl
        ">
          <DashboardCards />
        </div>

      </div>
    </div>
  );
}