'use client';
import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolio';
import { HiOutlineEnvelope, HiOutlinePhone } from 'react-icons/hi2';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${portfolioData.links.email}?subject=Portfolio Contact from ${formData.name}&body=${formData.message} (${formData.email})`;
  };

  return (
    <section id="contact" className="pt-8 pb-12 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-sm font-medium text-zinc-900 dark:text-zinc-200">Name</label>
            <input
              type="text"
              required
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-zinc-900 dark:border-zinc-300 bg-transparent text-zinc-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:focus:ring-white"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-zinc-900 dark:text-zinc-200">Email</label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-zinc-900 dark:border-zinc-300 bg-transparent text-zinc-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:focus:ring-white"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-zinc-900 dark:text-zinc-200">Message</label>
            <textarea
              required
              rows={4}
              placeholder="Your message..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-zinc-900 dark:border-zinc-300 bg-transparent text-zinc-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:focus:ring-white"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl border border-zinc-900 dark:border-zinc-300 font-medium text-zinc-900 dark:text-white hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-all text-sm"
          >
            Submit
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">Get in Touch</h2>
          <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed border-b border-zinc-300 dark:border-zinc-800 pb-4">
            For any inquiries or collaborations, please reach out to me via email or phone.
          </p>

          <div className="space-y-3 text-sm font-medium text-zinc-900 dark:text-zinc-200">
            <a href={`mailto:${portfolioData.links.email}`} className="flex items-center gap-3 hover:opacity-70 transition-opacity">
              <HiOutlineEnvelope className="w-5 h-5 shrink-0" />
              <span>{portfolioData.links.email}</span>
            </a>
            <a href={`tel:${portfolioData.links.phone}`} className="flex items-center gap-3 hover:opacity-70 transition-opacity">
              <HiOutlinePhone className="w-5 h-5 shrink-0" />
              <span>{portfolioData.links.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}