import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2';
import { FaGithub } from 'react-icons/fa6';

export default function Projects() {
  return (
    <section id="projects" className="space-y-6 pt-8">
      <h2 className="text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
        Projects.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioData.projects.map((project, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl border border-zinc-900 dark:border-zinc-300 flex flex-col justify-between space-y-6 bg-transparent"
          >
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 text-xs font-medium rounded-lg border border-zinc-400 dark:border-zinc-600 text-zinc-800 dark:text-zinc-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Updated Action Buttons (Horizontal Row Flex) */}
            <div className="flex items-center gap-3 pt-4 border-t border-zinc-300 dark:border-zinc-800">
              {/* 1. Live App Button */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-900 dark:border-zinc-200 font-medium text-sm bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all cursor-pointer"
              >
                <span>Live App</span>
                <HiOutlineArrowTopRightOnSquare className="w-4 h-4" />
              </a>

              {/* 2. Code (GitHub) Button */}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-900 dark:border-zinc-200 font-medium text-sm text-zinc-900 dark:text-white hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-all cursor-pointer"
              >
                <span>Code</span>
                <FaGithub className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}