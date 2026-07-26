import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

export default function Hero() {
  const firstName = portfolioData.name.split(' ')[0];

  return (
    <section className="pt-12 pb-6 flex flex-col-reverse md:flex-row items-center justify-between gap-8">
      <div className="space-y-6 max-w-2xl">
        <div className="space-y-2">
          <span className="text-4xl inline-block">👋</span>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-zinc-900 dark:text-white">
            Namaste,<br />I&apos;m {firstName}
          </h1>
        </div>

        <p className="text-zinc-800 dark:text-zinc-300 leading-relaxed text-base sm:text-lg">
          {portfolioData.bio}
        </p>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 pt-2">
          {/* 1. View Resume Button (Identical style to Projects button) */}
          <a
            href={portfolioData.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-xl border border-zinc-900 dark:border-zinc-200 font-medium text-sm text-zinc-900 dark:text-white hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-all cursor-pointer"
          >
            View Resume
          </a>

          {/* 2. Projects Button */}
          <a
            href="#projects"
            className="px-6 py-2.5 rounded-xl border border-zinc-900 dark:border-zinc-200 font-medium text-sm text-zinc-900 dark:text-white hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-all cursor-pointer"
          >
            Projects
          </a>

          {/* 3. Social Links */}
          <a
            href={portfolioData.links.github}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-900 dark:text-white text-2xl hover:opacity-70 transition-opacity"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={portfolioData.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-900 dark:text-white text-2xl hover:opacity-70 transition-opacity"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-2 border-zinc-900 dark:border-zinc-200 shrink-0">
        <img
          src="/profile.png"
          alt={portfolioData.name}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}