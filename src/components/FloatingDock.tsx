'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { 
  HiOutlineHome, 
  HiOutlineWrench, 
  HiOutlineFolder, 
  HiOutlineAcademicCap, 
  HiOutlinePhone, 
  HiOutlineMoon, 
  HiOutlineSun 
} from 'react-icons/hi2';

export default function FloatingDock() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === 'system' ? resolvedTheme : theme;

  const toggleTheme = () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };

  const navItems = [
    { name: 'Home', href: '#', icon: HiOutlineHome },
    { name: 'Skills', href: '#skills', icon: HiOutlineWrench },
    { name: 'Projects', href: '#projects', icon: HiOutlineFolder },
    { name: 'Experience', href: '#experience', icon: HiOutlineAcademicCap },
    { name: 'Contact', href: '#contact', icon: HiOutlinePhone },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-7 sm:gap-8 px-8 py-3.5 rounded-full border border-zinc-900/80 dark:border-zinc-200/80 bg-zinc-100/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-2xl text-zinc-900 dark:text-zinc-100">
        
        {navItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <a
              key={idx}
              href={item.href}
              className="group relative flex items-center justify-center hover:scale-110 transition-transform duration-200"
            >
              {/* Tooltip Label on Hover */}
              <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all duration-200 px-2.5 py-1 rounded-md text-xs font-semibold bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-md whitespace-nowrap pointer-events-none">
                {item.name}
              </span>

              {/* Icon */}
              <Icon className="w-6 h-6 text-zinc-800 dark:text-zinc-200 group-hover:text-black dark:group-hover:text-white transition-colors" />
            </a>
          );
        })}

        {/* Theme Toggle Button */}
        {mounted && (
          <button
            onClick={toggleTheme}
            className="group relative flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer pl-2 border-l border-zinc-300 dark:border-zinc-700"
            type="button"
          >
            {/* Tooltip Label on Hover */}
            <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all duration-200 px-2.5 py-1 rounded-md text-xs font-semibold bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-md whitespace-nowrap pointer-events-none">
              Toggle Theme
            </span>

            {currentTheme === 'dark' ? (
              <HiOutlineSun className="w-6 h-6 text-amber-400" />
            ) : (
              <HiOutlineMoon className="w-6 h-6 text-zinc-800" />
            )}
          </button>
        )}
      </nav>
    </div>
  );
}