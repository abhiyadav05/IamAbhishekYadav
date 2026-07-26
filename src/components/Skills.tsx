import React from 'react';
import { portfolioData } from '@/data/portfolio';

export default function Skills() {
  const allSkills = [
    ...portfolioData.skills.languages,
    ...portfolioData.skills.frameworks,
    ...portfolioData.skills.databasesAndMessaging,
    ...portfolioData.skills.cloudAndDevOps,
  ];

  return (
    <section id="skills" className="space-y-6 pt-8">
      <h2 className="text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">Skills.</h2>
      <div className="flex flex-wrap gap-3">
        {allSkills.map((skill, idx) => (
          <span
            key={idx}
            className="px-5 py-2.5 rounded-2xl border border-zinc-900 dark:border-zinc-300 text-sm font-medium text-zinc-900 dark:text-zinc-100 bg-transparent hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}