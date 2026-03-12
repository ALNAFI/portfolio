"use client";

import { motion } from "framer-motion";
import { CONTACT_INFO } from "../../data/contact";

export function ContactSection() {
  const { email, github, location } = CONTACT_INFO;

  return (
    <motion.section
      id="contact"
      className="bg-gray-100 dark:bg-zinc-900 p-8 rounded-xl shadow-2xl border dark:border-zinc-700"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-6 flex items-center justify-center gap-2 text-blue-600 dark:text-yellow-400">
        📌 Reach Me!
      </h2>

      <div className="space-y-6 text-gray-800 dark:text-gray-300">
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300">
            <span className="text-2xl text-pink-500">📧</span>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {email.label}
              </p>
              <a
                href={email.href}
                className="text-lg font-medium text-blue-600 dark:text-yellow-400 underline"
              >
                {email.value}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300">
            <span className="text-2xl text-pink-500">🐙</span>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {github.label}
              </p>
              <a
                href={github.href}
                className="text-lg font-medium text-blue-600 dark:text-yellow-400 underline"
              >
                {github.value}
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300 justify-center">
          <span className="text-2xl text-pink-500">📍</span>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {location.label}
            </p>
            <a
              href={location.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-blue-600 dark:text-yellow-400 underline"
            >
              {location.value}
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

