'use client';
import React from 'react';
import { portfolioData } from '@/data/portfolio';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800/80">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-lg text-white tracking-tight hover:text-indigo-400 transition-colors">
          {portfolioData.name.split(' ').map(n => n[0]).join('')}
          <span className="text-indigo-500">.</span>
        </a>
        <nav className="flex items-center gap-6 text-xs sm:text-sm text-gray-400 font-medium">
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
}