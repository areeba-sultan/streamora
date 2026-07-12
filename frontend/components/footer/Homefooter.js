'use client';
import Link from 'next/link';
import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Homefooter() {
  const [adminKey] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("adminKey");
    }
    return null;
  });

  return (
    <footer className="bg-[#0d0d0d] text-gray-300 py-10 mt-10">
      <div className="container mx-auto px-6 text-center">
        {/* Brand Name */}
        <h2 className="text-3xl font-semibold text-white">Streamora</h2>

        {/* Icons */}
        <div className="flex justify-center gap-6 text-2xl mt-4">
          <a href="#" className="hover:text-white transition"><FaFacebookF /></a>
          <a href="#" className="hover:text-white transition"><FaInstagram /></a>
          <a href="#" className="hover:text-white transition"><FaYoutube /></a>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm mt-6 text-gray-400">
          <Link href="/policy" className="hover:text-white transition">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
          <Link href="/about" className="hover:text-white transition">About Us</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>

          <Link href="/panel/adminlogin">
  <button>Admin Login</button>
</Link>
        </div>

        {/* Bottom Text */}
        <p className="text-center text-gray-500 text-xs mt-6">
          © {new Date().getFullYear()} CineVerse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}