"use client";

export function SkillCategoryCard({ title, items }) {
  return (
    <div className="transform hover:scale-105 transition-all duration-500 hover:bg-blue-100 dark:hover:bg-zinc-800 rounded-lg">
      <h3 className="text-xl font-semibold mb-2 text-blue-500 dark:text-yellow-300 flex items-center gap-2">
        {title}
      </h3>
      <ul className="list-disc list-inside space-y-1">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

