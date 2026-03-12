"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import SplitText from "../SplitText";
import { PERSONAL_INFO } from "../../data/personalInfo";

export function HeroSection({ onDownloadCv }) {
  return (
    <section className="max-w-5xl mx-auto space-y-20">
      <div
        id="start"
        className="text-center"
      >
        <Image
          src="/profile.png"
          alt={PERSONAL_INFO.name}
          width={160}
          height={160}
          className="rounded-full mx-auto border-4 border-blue-600 dark:border-yellow-400"
        />

        <div className="mt-6">
          <SplitText
            text={PERSONAL_INFO.heroTitle}
            tag="h1"
            className="text-4xl md:text-5xl font-bold split-hero-text"
            delay={50}
            duration={0.8}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <br />
          <span className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
            <Typewriter
              words={PERSONAL_INFO.heroSubtitleWords}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </span>
        </div>

        <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          {PERSONAL_INFO.heroDescription}
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={PERSONAL_INFO.viewCvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 border border-blue-600 dark:border-yellow-400 text-blue-600 dark:text-yellow-400 rounded hover:bg-blue-600 dark:hover:bg-yellow-400 hover:text-white dark:hover:text-black transition"
          >
            👁️ View CV
          </a>
          <a
            href={PERSONAL_INFO.downloadCvPath}
            onClick={onDownloadCv}
            className="inline-block px-6 py-2 border border-blue-600 dark:border-yellow-400 text-blue-600 dark:text-yellow-400 rounded hover:bg-blue-600 dark:hover:bg-yellow-400 hover:text-white dark:hover:text-black transition cursor-pointer"
          >
            📄 Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

