import React from 'react';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ExperienceAndMore from '@/components/ExperienceAndMore';
import Contact from '@/components/Contact';
import FloatingDock from '@/components/FloatingDock';

export default function Home() {
  return (
    <div className="min-h-screen relative pb-28">
      <main className="max-w-4xl mx-auto px-6 space-y-12">
        <Hero />
        <ExperienceAndMore />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <FloatingDock />
    </div>
  );
}