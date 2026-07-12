"use client";
import React from "react";
import Navbar from "../../components/bar/Navbar";
import Homefooter from "../../components/footer/Homefooter";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#111] text-white">
      <Navbar />

      <div className="container mx-auto px-5 py-16">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-gray-300 text-lg mb-4">
          Welcome to Streamora! We provide the best streaming experience with high-quality movies and TV shows from Hollywood, Bollywood, and worldwide.
        </p>
        <p className="text-gray-300 text-lg mb-4">
          Our mission is to deliver entertainment seamlessly to your devices with an easy-to-use platform.
        </p>
        <p className="text-gray-300 text-lg mb-4">
          We continuously update our collection to ensure you have access to the latest releases.
        </p>
      </div>

      <Homefooter />
    </div>
  );
}
