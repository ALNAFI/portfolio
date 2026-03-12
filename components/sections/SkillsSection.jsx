"use client";

import { motion } from "framer-motion";
import { SKILL_SECTIONS } from "../../data/skills";
import { SkillCategoryCard } from "../ui/SkillCategoryCard";

export function SkillsSection() {
  return (
    <motion.section
      id="skills"
      className="bg-gray-100 dark:bg-zinc-900 p-8 rounded-xl shadow-2xl border dark:border-zinc-700"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-10 text-center text-blue-600 dark:text-yellow-400 flex items-center justify-center gap-2">
        🧠 Skills Overview
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-800 dark:text-gray-100">
        {SKILL_SECTIONS.map((section) => (
          <SkillCategoryCard
            key={section.id}
            title={section.title}
            items={section.items}
          />
        ))}
      </div>
    </motion.section>
  );
}

