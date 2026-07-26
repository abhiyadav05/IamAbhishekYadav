import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { 
  HiOutlineBriefcase, 
  HiOutlineAcademicCap, 
  HiOutlineTrophy, 
  HiOutlineCodeBracket,
  HiOutlineArrowUpRight 
} from 'react-icons/hi2';

export default function ExperienceAndMore() {
  const experiences = portfolioData?.experience || [];
  const educations = portfolioData?.education || [];
  const achievements = portfolioData?.achievements || [];

  return (
    <div className="space-y-12 pt-8" id="experience">
      
      {/* 1. Work Experience */}
      {experiences.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <HiOutlineBriefcase className="w-8 h-8 text-zinc-900 dark:text-white" />
            <h2 className="text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Work Experience.
            </h2>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-zinc-900 dark:border-zinc-300 bg-zinc-100/80 dark:bg-zinc-900/50 space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                      {exp.company} • {exp.location}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium border border-zinc-900/20 dark:border-zinc-700 bg-zinc-200/60 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-300 w-fit">
                    {exp.duration}
                  </span>
                </div>

                <ul className="space-y-2 text-sm text-zinc-800 dark:text-zinc-200 list-disc list-inside leading-relaxed">
                  {exp.highlights?.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 2. Education */}
      {educations.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <HiOutlineAcademicCap className="w-8 h-8 text-zinc-900 dark:text-white" />
            <h2 className="text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Education.
            </h2>
          </div>

          <div className="space-y-6">
            {educations.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-zinc-900 dark:border-zinc-300 bg-zinc-100/80 dark:bg-zinc-900/50 space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                      {edu.institution}
                    </h3>
                    <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                      {edu.degree}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium border border-zinc-900/20 dark:border-zinc-700 bg-zinc-200/60 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-300 w-fit">
                    {edu.duration}
                  </span>
                </div>
                <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                  {edu.score}
                </p>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 3. Achievements */}
      {achievements.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <HiOutlineTrophy className="w-8 h-8 text-zinc-900 dark:text-white" />
            <h2 className="text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Achievements.
            </h2>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-900 dark:border-zinc-300 bg-zinc-100/80 dark:bg-zinc-900/50">
            <ul className="space-y-3 text-sm text-zinc-800 dark:text-zinc-200 list-disc list-inside leading-relaxed">
              {achievements.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* 4. Competitive Coding */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <HiOutlineCodeBracket className="w-8 h-8 text-zinc-900 dark:text-white" />
          <h2 className="text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Competitive Coding.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          
          {/* LeetCode Card */}
          <div className="p-5 rounded-2xl border border-zinc-900 dark:border-zinc-300 bg-zinc-100/80 dark:bg-zinc-900/50 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <h3 className="font-bold text-lg text-amber-600 dark:text-amber-400">LeetCode</h3>
              <p className="text-sm text-zinc-800 dark:text-zinc-200 font-medium">
                Max Rating: <strong>1858</strong> (Knight Badge)
              </p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                Top 6.2% globally | 750+ problems solved
              </p>
            </div>
            
            <a
              href={portfolioData?.links?.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl border border-zinc-900 dark:border-zinc-200 text-xs font-medium text-zinc-900 dark:text-white hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-all cursor-pointer w-full mt-2"
            >
              <span>View Profile</span>
              <HiOutlineArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Codeforces Card */}
          <div className="p-5 rounded-2xl border border-zinc-900 dark:border-zinc-300 bg-zinc-100/80 dark:bg-zinc-900/50 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <h3 className="font-bold text-lg text-cyan-600 dark:text-cyan-400">Codeforces</h3>
              <p className="text-sm text-zinc-800 dark:text-zinc-200 font-medium">
                Max Rating: <strong>1415</strong> (Specialist)
              </p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                350+ problems solved
              </p>
            </div>

            <a
              href={portfolioData?.links?.codeforces}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl border border-zinc-900 dark:border-zinc-200 text-xs font-medium text-zinc-900 dark:text-white hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-all cursor-pointer w-full mt-2"
            >
              <span>View Profile</span>
              <HiOutlineArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* CodeChef Card */}
          <div className="p-5 rounded-2xl border border-zinc-900 dark:border-zinc-300 bg-zinc-100/80 dark:bg-zinc-900/50 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <h3 className="font-bold text-lg text-amber-500 dark:text-amber-300">CodeChef</h3>
              <p className="text-sm text-zinc-800 dark:text-zinc-200 font-medium">
                Peak Rating: <strong>1658</strong> (3-Star)
              </p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                200+ problems solved
              </p>
            </div>

            <a
              href={portfolioData?.links?.codechef}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl border border-zinc-900 dark:border-zinc-200 text-xs font-medium text-zinc-900 dark:text-white hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-all cursor-pointer w-full mt-2"
            >
              <span>View Profile</span>
              <HiOutlineArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}