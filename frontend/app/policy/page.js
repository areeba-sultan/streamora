"use client";
import React from "react";
import Navbar from "../../components/bar/Navbar";
import Homefooter from "../../components/footer/Homefooter";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#111] text-white">
      <Navbar />

      <div className="container mx-auto px-5 py-16">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-300 text-lg mb-4">
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website.
        </p>
        <p className="text-gray-300 text-lg mb-4">
          We do not sell your data to third parties and take all reasonable measures to ensure your information is secure.
        </p>
        <p className="text-gray-300 text-lg mb-4">
          By using our website, you agree to the terms outlined in this Privacy Policy.
        </p>
      </div>

      <Homefooter />
    </div>
  );
}
