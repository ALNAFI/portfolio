"use client";

import { motion } from "framer-motion";
import { EDUCATION } from "../../data/education";

export function EducationSection() {
  return (
    <motion.section
      id="education"
      className="w-full bg-gray-100 dark:bg-zinc-900 p-8 rounded-xl shadow-2xl border dark:border-zinc-700"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-10 text-center text-blue-600 dark:text-yellow-400 flex items-center justify-center gap-2">
        🎓 My Educational Journey
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {EDUCATION.map((item) => (
          <div
            key={item.id}
            className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-yellow-900 dark:to-yellow-800 p-5 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <h3 className="text-lg font-semibold text-blue-900 dark:text-yellow-100">
              {item.institution}
            </h3>
            <p className="text-sm text-gray-800 dark:text-gray-300 mt-2">
              🧑‍🎓 {item.degree} <br />
              🗓️ {item.period} <br />
              📊{" "}
              <strong>
                {item.statLabel}: {item.statValue}
              </strong>
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

