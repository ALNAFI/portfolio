"use client";

import { motion } from "framer-motion";
import {
  CERTIFICATIONS,
  MORE_CERTIFICATIONS_URL,
} from "../../data/certifications";

export function CertificationsSection() {
  return (
    <motion.section
      id="certifications"
      className="bg-gray-100 dark:bg-zinc-900 p-8 rounded-xl shadow-2xl border dark:border-zinc-700"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-10 text-center text-blue-600 dark:text-yellow-400 flex items-center justify-center gap-2">
        🎓 Certifications
      </h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {CERTIFICATIONS.map((cert) => (
          <div
            key={cert}
            className="flex items-center gap-3 bg-blue-100 dark:bg-zinc-800 hover:bg-blue-200 dark:hover:bg-zinc-700 text-blue-900 dark:text-yellow-300 px-4 py-3 rounded-lg shadow-sm transition-transform transform hover:-translate-y-1"
          >
            <span className="text-xl">✅</span>
            <span className="font-medium">{cert}</span>
          </div>
        ))}

        <a
          href={MORE_CERTIFICATIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-full text-center mt-4 block text-blue-600 dark:text-yellow-400 underline hover:text-blue-800 dark:hover:text-yellow-200 transition"
        >
          📜 See More Certifications
        </a>
      </div>
    </motion.section>
  );
}

