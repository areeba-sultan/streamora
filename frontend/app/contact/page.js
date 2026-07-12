"use client";
import React, { useState } from "react";
import Navbar from "../../components/bar/Navbar";
import Homefooter from "../../components/footer/Homefooter";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#111] text-white">
      <Navbar />

      <div className="container mx-auto px-5 py-16">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        {submitted ? (
          <p className="text-green-400 text-lg">Thank you! Your message has been sent.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col max-w-lg gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
              rows={5}
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-bold py-3 px-6 rounded"
            >
              Send Message
            </button>
          </form>
        )}
      </div>

      <Homefooter />
    </div>
  );
}
