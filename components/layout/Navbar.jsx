"use client";

import { useState } from "react";
import { NAV_LINKS } from "../../data/nav";
import { ThemeToggle } from "../common/ThemeToggle";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (href) => (e) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target && window.lenis) {
      window.lenis.scrollTo(target, { duration: 3.0, offset: -80 });
    } else {
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-zinc-950 z-50 shadow-md px-6 py-3">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <span className="text-3xl text-blue-600 dark:text-yellow-400 font-bold">
          <a href="#start" onClick={handleNavClick("#start")}>
            AL NAFI
          </a>
        </span>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative w-10 h-10 focus:outline-none z-50"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block absolute h-0.5 w-6 bg-blue-600 dark:bg-yellow-400 transform transition duration-300 ease-in-out ${
                menuOpen ? "rotate-45 top-5" : "top-7"
              }`}
            />
            <span
              className={`block absolute h-0.5 w-6 bg-blue-600 dark:bg-yellow-400 transform transition duration-300 ease-in-out ${
                menuOpen ? "opacity-0" : "top-5"
              }`}
            />
            <span
              className={`block absolute h-0.5 w-6 bg-blue-600 dark:bg-yellow-400 transform transition duration-300 ease-in-out ${
                menuOpen ? "-rotate-45 top-5" : "top-3"
              }`}
            />
          </button>
        </div>

        <div className="space-x-4 hidden md:flex items-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick(link.href)}
              className="hover:text-yellow-400 dark:hover:text-white duration-200 text-blue-600 dark:text-yellow-400 hover:underline cursor-pointer"
            >
              {link.label}
            </a>
          ))}

          <ThemeToggle />
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-2 flex flex-col items-start space-y-2 px-2 bg-base-200 w-56">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                  handleNavClick(link.href)(e);
                }}
                className="menu-item hover:text-yellow-400 dark:hover:text-white duration-200 text-blue-600 dark:text-yellow-400 hover:underline"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="flex justify-center">
            <ThemeToggle />
          </li>
        </div>
      )}
    </nav>
  );
}

