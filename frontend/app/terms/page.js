"use client";
import React from "react";
import Navbar from "../../components/bar/Navbar";
import Homefooter from "../../components/footer/Homefooter";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#111] text-white">
      <Navbar />

      <div className="container mx-auto px-5 py-16">
        <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
        <p className="text-gray-300 text-lg mb-4">
          By accessing or using our website, you agree to comply with these Terms of Service. Please read them carefully.
        </p>
        <p className="text-gray-300 text-lg mb-4">
          We reserve the right to update or modify these terms at any time without prior notice.
        </p>
        <p className="text-gray-300 text-lg mb-4">
          Using our services constitutes acceptance of these terms.
        </p>
      </div>

      <Homefooter />
    </div>
  );
}
