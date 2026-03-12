"use client";

import Image from "next/image";

export function ProjectCard({ project }) {
  const { title, techStack, description, images, links } = project;

  return (
    <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105">
      <Image
        src={images.light.src}
        alt={images.light.alt}
        width={800}
        height={600}
        className="w-full h-auto rounded-lg dark:hidden"
      />
      <Image
        src={images.dark.src}
        alt={images.dark.alt}
        width={800}
        height={600}
        className="w-full h-auto rounded-lg hidden dark:block"
      />
      <h3 className="mt-4 text-xl font-semibold text-blue-600 dark:text-yellow-400">
        {title}
      </h3>
      <p className="text-gray-800 dark:text-gray-300">
        <b>PL: {techStack}</b>
      </p>
      <p className="text-gray-800 dark:text-gray-300">{description}</p>
      {links && links.length > 0 && (
        <div className="mt-4">
          {links.map((link, index) => (
            <span key={link.href}>
              <a
                className="text-blue-600 dark:text-yellow-400 underline"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
              {index < links.length - 1 && <span>,&nbsp;</span>}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

