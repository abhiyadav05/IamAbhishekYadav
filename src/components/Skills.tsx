import React from 'react';
import { portfolioData } from '@/data/portfolio';

const categoryLabels: Record<string, string> = {
  languages: 'Languages',
  frameworks: 'Frameworks',
  databasesAndMessaging: 'Databases & Messaging',
  cloudAndDevOps: 'Cloud & DevOps',
  toolsAndFundamentals: 'Tools & Fundamentals',
  Agentic: 'Agentic AI',
};

export default function Skills() {
  const categories = Object.entries(portfolioData.skills) as [string, string[]][];

  return (
    <section id="skills" className="space-y-5 pt-8">
      <h2 className="text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
        Technical Skills.
      </h2>

      <div className="space-y-3">
        {categories.map(([key, skills]) => (
          <div key={key} className="flex items-start gap-2 sm:gap-3">
            <span className="w-40 sm:w-52 shrink-0 pt-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {categoryLabels[key] ?? key}
              <span className="float-right pr-1">:</span>
            </span>

            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg border border-zinc-900 dark:border-zinc-300 text-xs font-medium text-zinc-900 dark:text-zinc-100 bg-transparent hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}