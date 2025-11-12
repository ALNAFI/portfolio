import Head from "next/head";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import ParticlesBackground from "../components/ParticlesBackground";
import { useTheme } from "next-themes";
import TalkSection from "../components/TalkSection";
import SplitText from "../components/SplitText";
import TextCursor from "../components/TextCursor";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [toast, setToast] = useState("");
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    
    // Hide preloader when page is fully loaded
    const handleLoad = () => {
      // Wait for all resources to load
      if (document.readyState === 'complete') {
        setTimeout(() => {
          setPageLoading(false);
        }, 300);
      }
    };

    // Check if already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      // Listen for load event
      window.addEventListener('load', handleLoad);
      
      // Also check periodically for slow loading
      const checkInterval = setInterval(() => {
        if (document.readyState === 'complete') {
          clearInterval(checkInterval);
          handleLoad();
        }
      }, 100);

      return () => {
        window.removeEventListener('load', handleLoad);
        clearInterval(checkInterval);
      };
    }
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleDownloadCV = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/AL-NAFI-CV.pdf");
      if (!response.ok) throw new Error("Failed to fetch file");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "AL-NAFI-CV.pdf";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Download failed:", error);
      // Fallback to direct link
      window.open("/AL-NAFI-CV.pdf", "_blank");
    }
  };

  return (
    <>
      {/* Preloader */}
      {pageLoading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-zinc-900">
          <div className="loader">
            <div className="cup">
              <div className="cup-handle"></div>
              <div className="smoke one"></div>
              <div className="smoke two"></div>
              <div className="smoke three"></div>
            </div>
            <div className="load">Loading...</div>
          </div>
        </div>
      )}

      {/* Text Cursor Effect */}
      <div className="fixed inset-0 z-[9998] pointer-events-none">
        <TextCursor
          text="."
          delay={0.05}
          spacing={80}
          followMouseDirection={true}
          randomFloat={true}
          exitDuration={0.5}
          removalInterval={20}
          maxPoints={10}
        />
      </div>

      <Head>
        <title>AL NAFI - Web Developer & UI/UX Designer Portfolio</title>
        <meta name="description" content="Portfolio of AL NAFI - Web Developer, UI/UX Designer, and Tech Enthusiast. Explore my projects, skills, certifications, and get in touch for collaborations." />
        <meta name="keywords" content="AL NAFI, Web Developer, UI/UX Designer, Frontend Developer, Backend Developer, React, Next.js, NestJS, Portfolio, Bangladesh" />
        <meta name="author" content="AL NAFI" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/profile.png" />
        <link rel="apple-touch-icon" href="/profile.png" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alnafi.dev/" />
        <meta property="og:title" content="AL NAFI - Portfolio" />
        <meta property="og:description" content="Portfolio of AL NAFI - Web Developer, UI/UX Designer, and Tech Enthusiast. Explore my projects, skills, certifications, and get in touch." />
        <meta property="og:image" content="/profile.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://alnafi.dev/" />
        <meta property="twitter:title" content="AL NAFI - Portfolio" />
        <meta property="twitter:description" content="Portfolio of AL NAFI - Web Developer, UI/UX Designer, and Tech Enthusiast. Explore my projects, skills, certifications, and get in touch." />
        <meta property="twitter:image" content="/profile.png" />
        
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#3B82F6" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://alnafi.dev/" />
      </Head>
      
      {/* ---------------------------Nav bar Start------------------------------- */}
      <nav className="fixed top-0 left-0 w-full bg-white dark:bg-zinc-950 z-50 shadow-md px-6 py-3">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <span className="text-3xl text-blue-600 dark:text-yellow-400 font-bold">
            <a href="#start">AL NAFI</a>
          </span>

          {/* ---------------------------Mobile hamburger icon Start------------------------------- */}

          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative w-10 h-10 focus:outline-none z-50"
              aria-label="Toggle menu"
            >
              <span
                className={`block absolute h-0.5 w-6 bg-blue-600 dark:bg-yellow-400 transform transition duration-300 ease-in-out ${menuOpen ? "rotate-45 top-5" : "top-7"
                  }`}
              ></span>
              <span
                className={`block absolute h-0.5 w-6 bg-blue-600 dark:bg-yellow-400 transform transition duration-300 ease-in-out ${menuOpen ? "opacity-0" : "top-5"
                  }`}
              ></span>
              <span
                className={`block absolute h-0.5 w-6 bg-blue-600 dark:bg-yellow-400 transform transition duration-300 ease-in-out ${menuOpen ? "-rotate-45 top-5" : "top-3"
                  }`}
              ></span>
            </button>
          </div>

          {/* ---------------------------Mobile hamburger icon End------------------------------- */}

          {/* ---------------------------Desktop nav links Start------------------------------- */}
          <div className="space-x-4 hidden md:flex items-center">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector("#projects");
                if (target && window.lenis) {
                  window.lenis.scrollTo(target, { duration: 3.0, offset: -80 });
                }
              }}
              className="hover:text-yellow-400 dark:hover:text-white duration-200 text-blue-600 dark:text-yellow-400 hover:underline cursor-pointer"
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector("#skills");
                if (target && window.lenis) {
                  window.lenis.scrollTo(target, { duration: 3.0, offset: -80 });
                }
              }}
              className="hover:text-yellow-400 dark:hover:text-white duration-200 text-blue-600 dark:text-yellow-400 hover:underline cursor-pointer"
            >
              Skills
            </a>
            <a
              href="#certifications"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector("#certifications");
                if (target && window.lenis) {
                  window.lenis.scrollTo(target, { duration: 3.0, offset: -80 });
                }
              }}
              className="hover:text-yellow-400 dark:hover:text-white duration-200 text-blue-600 dark:text-yellow-400 hover:underline cursor-pointer"
            >
              Certifications
            </a>
            <a
              href="#education"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector("#education");
                if (target && window.lenis) {
                  window.lenis.scrollTo(target, { duration: 3.0, offset: -80 });
                }
              }}
              className="hover:text-yellow-400 dark:hover:text-white duration-200 text-blue-600 dark:text-yellow-400 hover:underline cursor-pointer"
            >
              Education
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector("#contact");
                if (target && window.lenis) {
                  window.lenis.scrollTo(target, { duration: 3.0, offset: -80 });
                }
              }}
              className="hover:text-yellow-400 dark:hover:text-white duration-200 text-blue-600 dark:text-yellow-400 hover:underline cursor-pointer"
            >
              Contact
            </a>

            {/* ---------------------------Desktop nav links End------------------------------- */}

            {/* ---------------------------Theme toggle button Start------------------------------- */}
            <label className="theme-switch" aria-label="Toggle Theme">
              <input
                type="checkbox"
                className="theme-switch__checkbox"
                checked={theme === "dark"}
                onChange={toggleTheme}
              />
              <div className="theme-switch__container">
                <div className="theme-switch__clouds"></div>
                <div className="theme-switch__stars-container">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 55" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M135.831 3.00688C135.055 3.85027 134.111 4.29946 133 4.35447C134.111 4.40947 135.055 4.85867 135.831 5.71123C136.607 6.55462 136.996 7.56303 136.996 8.72727C136.996 7.95722 137.172 7.25134 137.525 6.59129C137.886 5.93124 138.372 5.39954 138.98 5.00535C139.598 4.60199 140.268 4.39114 141 4.35447C139.88 4.2903 138.936 3.85027 138.16 3.00688C137.384 2.16348 136.996 1.16425 136.996 0C136.996 1.16425 136.607 2.16348 135.831 3.00688ZM31 23.3545C32.1114 23.2995 33.0551 22.8503 33.8313 22.0069C34.6075 21.1635 34.9956 20.1642 34.9956 19C34.9956 20.1642 35.3837 21.1635 36.1599 22.0069C36.9361 22.8503 37.8798 23.2903 39 23.3545C38.2679 23.3911 37.5976 23.602 36.9802 24.0053C36.3716 24.3995 35.8864 24.9312 35.5248 25.5913C35.172 26.2513 34.9956 26.9572 34.9956 27.7273C34.9956 26.563 34.6075 25.5546 33.8313 24.7112C33.0551 23.8587 32.1114 23.4095 31 23.3545ZM0 36.3545C1.11136 36.2995 2.05513 35.8503 2.83131 35.0069C3.6075 34.1635 3.99559 33.1642 3.99559 32C3.99559 33.1642 4.38368 34.1635 5.15987 35.0069C5.93605 35.8503 6.87982 36.2903 8 36.3545C7.26792 36.3911 6.59757 36.602 5.98015 37.0053C5.37155 37.3995 4.88644 37.9312 4.52481 38.5913C4.172 39.2513 3.99559 39.9572 3.99559 40.7273C3.99559 39.563 3.6075 38.5546 2.83131 37.7112C2.05513 36.8587 1.11136 36.4095 0 36.3545ZM56.8313 24.0069C56.0551 24.8503 55.1114 25.2995 54 25.3545C55.1114 25.4095 56.0551 25.8587 56.8313 26.7112C57.6075 27.5546 57.9956 28.563 57.9956 29.7273C57.9956 28.9572 58.172 28.2513 58.5248 27.5913C58.8864 26.9312 59.3716 26.3995 59.9802 26.0053C60.5976 25.602 61.2679 25.3911 62 25.3545C60.8798 25.2903 59.9361 24.8503 59.1599 24.0069C58.3837 23.1635 57.9956 22.1642 57.9956 21C57.9956 22.1642 57.6075 23.1635 56.8313 24.0069ZM81 25.3545C82.1114 25.2995 83.0551 24.8503 83.8313 24.0069C84.6075 23.1635 84.9956 22.1642 84.9956 21C84.9956 22.1642 85.3837 23.1635 86.1599 24.0069C86.9361 24.8503 87.8798 25.2903 89 25.3545C88.2679 25.3911 87.5976 25.602 86.9802 26.0053C86.3716 26.3995 85.8864 26.9312 85.5248 27.5913C85.172 28.2513 84.9956 28.9572 84.9956 29.7273C84.9956 28.563 84.6075 27.5546 83.8313 26.7112C83.0551 25.8587 82.1114 25.4095 81 25.3545ZM136 36.3545C137.111 36.2995 138.055 35.8503 138.831 35.0069C139.607 34.1635 139.996 33.1642 139.996 32C139.996 33.1642 140.384 34.1635 141.16 35.0069C141.936 35.8503 142.88 36.2903 144 36.3545C143.268 36.3911 142.598 36.602 141.98 37.0053C141.372 37.3995 140.886 37.9312 140.525 38.5913C140.172 39.2513 139.996 39.9572 139.996 40.7273C139.996 39.563 139.607 38.5546 138.831 37.7112C138.055 36.8587 137.111 36.4095 136 36.3545ZM101.831 49.0069C101.055 49.8503 100.111 50.2995 99 50.3545C100.111 50.4095 101.055 50.8587 101.831 51.7112C102.607 52.5546 102.996 53.563 102.996 54.7273C102.996 53.9572 103.172 53.2513 103.525 52.5913C103.886 51.9312 104.372 51.3995 104.98 51.0053C105.598 50.602 106.268 50.3911 107 50.3545C105.88 50.2903 104.936 49.8503 104.16 49.0069C103.384 48.1635 102.996 47.1642 102.996 46C102.996 47.1642 102.607 48.1635 101.831 49.0069Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="theme-switch__circle-container">
                  <div className="theme-switch__sun-moon-container">
                    <div className="theme-switch__moon">
                      <div className="theme-switch__spot"></div>
                      <div className="theme-switch__spot"></div>
                      <div className="theme-switch__spot"></div>
                    </div>
                  </div>
                </div>
              </div>
            </label>

            {/* ---------------------------Theme toggle button End------------------------------- */}
          </div>
        </div>

        {/* ---------------------------Mobile menu items Start------------------------------- */}

        {menuOpen && (
          <div className="md:hidden mt-2 flex flex-col items-start space-y-2 px-2 bg-base-200 w-56">
            <li>
              <a
                href="#projects"
                onClick={() => setMenuOpen(false)} // Close menu on click
                className="menu-item hover:text-yellow-400 dark:hover:text-white duration-200 text-blue-600 dark:text-yellow-400 hover:underline"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={() => setMenuOpen(false)} // Close menu on click
                className="menu-item hover:text-yellow-400 dark:hover:text-white duration-200 text-blue-600 dark:text-yellow-400 hover:underline"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#certifications"
                onClick={() => setMenuOpen(false)} // Close menu on click
                className="menu-item hover:text-yellow-400 dark:hover:text-white duration-200 text-blue-600 dark:text-yellow-400 hover:underline"
              >
                Certifications
              </a>
            </li>
            <li>
              <a
                href="#education"
                onClick={() => setMenuOpen(false)} // Close menu on click
                className="menu-item hover:text-yellow-400 dark:hover:text-white duration-200 text-blue-600 dark:text-yellow-400 hover:underline"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)} // Close menu on click
                className="menu-item hover:text-yellow-400 dark:hover:text-white duration-200 text-blue-600 dark:text-yellow-400 hover:underline"
              >
                Contact
              </a>
            </li>
            <li className="flex justify-center">
              <label 
                className="theme-switch" 
                aria-label="Toggle Theme"
              >
                <input
                  type="checkbox"
                  className="theme-switch__checkbox"
                  checked={theme === "dark"}
                  onChange={() => {
                    setMenuOpen(false);
                    toggleTheme();
                  }}
                />
                <div className="theme-switch__container">
                  <div className="theme-switch__clouds"></div>
                  <div className="theme-switch__stars-container">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 55" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M135.831 3.00688C135.055 3.85027 134.111 4.29946 133 4.35447C134.111 4.40947 135.055 4.85867 135.831 5.71123C136.607 6.55462 136.996 7.56303 136.996 8.72727C136.996 7.95722 137.172 7.25134 137.525 6.59129C137.886 5.93124 138.372 5.39954 138.98 5.00535C139.598 4.60199 140.268 4.39114 141 4.35447C139.88 4.2903 138.936 3.85027 138.16 3.00688C137.384 2.16348 136.996 1.16425 136.996 0C136.996 1.16425 136.607 2.16348 135.831 3.00688ZM31 23.3545C32.1114 23.2995 33.0551 22.8503 33.8313 22.0069C34.6075 21.1635 34.9956 20.1642 34.9956 19C34.9956 20.1642 35.3837 21.1635 36.1599 22.0069C36.9361 22.8503 37.8798 23.2903 39 23.3545C38.2679 23.3911 37.5976 23.602 36.9802 24.0053C36.3716 24.3995 35.8864 24.9312 35.5248 25.5913C35.172 26.2513 34.9956 26.9572 34.9956 27.7273C34.9956 26.563 34.6075 25.5546 33.8313 24.7112C33.0551 23.8587 32.1114 23.4095 31 23.3545ZM0 36.3545C1.11136 36.2995 2.05513 35.8503 2.83131 35.0069C3.6075 34.1635 3.99559 33.1642 3.99559 32C3.99559 33.1642 4.38368 34.1635 5.15987 35.0069C5.93605 35.8503 6.87982 36.2903 8 36.3545C7.26792 36.3911 6.59757 36.602 5.98015 37.0053C5.37155 37.3995 4.88644 37.9312 4.52481 38.5913C4.172 39.2513 3.99559 39.9572 3.99559 40.7273C3.99559 39.563 3.6075 38.5546 2.83131 37.7112C2.05513 36.8587 1.11136 36.4095 0 36.3545ZM56.8313 24.0069C56.0551 24.8503 55.1114 25.2995 54 25.3545C55.1114 25.4095 56.0551 25.8587 56.8313 26.7112C57.6075 27.5546 57.9956 28.563 57.9956 29.7273C57.9956 28.9572 58.172 28.2513 58.5248 27.5913C58.8864 26.9312 59.3716 26.3995 59.9802 26.0053C60.5976 25.602 61.2679 25.3911 62 25.3545C60.8798 25.2903 59.9361 24.8503 59.1599 24.0069C58.3837 23.1635 57.9956 22.1642 57.9956 21C57.9956 22.1642 57.6075 23.1635 56.8313 24.0069ZM81 25.3545C82.1114 25.2995 83.0551 24.8503 83.8313 24.0069C84.6075 23.1635 84.9956 22.1642 84.9956 21C84.9956 22.1642 85.3837 23.1635 86.1599 24.0069C86.9361 24.8503 87.8798 25.2903 89 25.3545C88.2679 25.3911 87.5976 25.602 86.9802 26.0053C86.3716 26.3995 85.8864 26.9312 85.5248 27.5913C85.172 28.2513 84.9956 28.9572 84.9956 29.7273C84.9956 28.563 84.6075 27.5546 83.8313 26.7112C83.0551 25.8587 82.1114 25.4095 81 25.3545ZM136 36.3545C137.111 36.2995 138.055 35.8503 138.831 35.0069C139.607 34.1635 139.996 33.1642 139.996 32C139.996 33.1642 140.384 34.1635 141.16 35.0069C141.936 35.8503 142.88 36.2903 144 36.3545C143.268 36.3911 142.598 36.602 141.98 37.0053C141.372 37.3995 140.886 37.9312 140.525 38.5913C140.172 39.2513 139.996 39.9572 139.996 40.7273C139.996 39.563 139.607 38.5546 138.831 37.7112C138.055 36.8587 137.111 36.4095 136 36.3545ZM101.831 49.0069C101.055 49.8503 100.111 50.2995 99 50.3545C100.111 50.4095 101.055 50.8587 101.831 51.7112C102.607 52.5546 102.996 53.563 102.996 54.7273C102.996 53.9572 103.172 53.2513 103.525 52.5913C103.886 51.9312 104.372 51.3995 104.98 51.0053C105.598 50.602 106.268 50.3911 107 50.3545C105.88 50.2903 104.936 49.8503 104.16 49.0069C103.384 48.1635 102.996 47.1642 102.996 46C102.996 47.1642 102.607 48.1635 101.831 49.0069Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="theme-switch__circle-container">
                    <div className="theme-switch__sun-moon-container">
                      <div className="theme-switch__moon">
                        <div className="theme-switch__spot"></div>
                        <div className="theme-switch__spot"></div>
                        <div className="theme-switch__spot"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </label>
            </li>
          </div>
        )}

        {/* ---------------------------Mobile menu items End------------------------------- */}
      </nav>

      {/* ---------------------------Nav bar End------------------------------- */}

      {/* ---------------------------Hero Start------------------------------- */}

      <main className="relative z-10 min-h-screen bg-white dark:bg-zinc-900 text-black dark:text-white px-6 py-32">
        <ParticlesBackground />
        <section className="max-w-5xl mx-auto space-y-20">
          {/* Hero Section */}
          <motion.div
            id="start"
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/profile.png"
              alt="AL NAFI"
              width={160}
              height={160}
              className="rounded-full mx-auto border-4 border-blue-600 dark:border-yellow-400"
            />

            <div className="mt-6">
              <SplitText
                text="Hi, I'm AL NAFI 👋"
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
                  words={["Web Developer", "UI/UX Designer", "Tech Enthusiast"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={60}
                  deleteSpeed={40}
                  delaySpeed={1500}
                />
              </span>
            </div>
            <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Code is my canvas, design is my rhythm, and curiosity is my
              compass. I love blending logic with emotion to build digital
              experiences that feel as good as they function. Whether it's a
              clean interface or a clever backend, I'm all about creating things
              people remember.
            </p>

            {/* ---------------------------CV Section Start------------------------------- */}

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* View CV */}
              <a
                href="https://drive.google.com/file/d/1qoysSZnwlUCvClVotP7vIF0Oa9sebCrL/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 border border-blue-600 dark:border-yellow-400 text-blue-600 dark:text-yellow-400 rounded hover:bg-blue-600 dark:hover:bg-yellow-400 hover:text-white dark:hover:text-black transition"
              >
                👁️ View CV
              </a>
              {/* Download CV */}
              <a
                href="/AL-NAFI-CV.pdf"
                onClick={handleDownloadCV}
                className="inline-block px-6 py-2 border border-blue-600 dark:border-yellow-400 text-blue-600 dark:text-yellow-400 rounded hover:bg-blue-600 dark:hover:bg-yellow-400 hover:text-white dark:hover:text-black transition cursor-pointer"
              >
                📄 Download CV
              </a>
            </div>

            {/* ---------------------------CV Section End------------------------------- */}
          </motion.div>

          {/* ---------------------------Hero End------------------------------- */}

          {/* ---------------------------Projects Start------------------------------- */}
          <motion.div
            id="projects"
            className="bg-gray-100 dark:bg-zinc-800 p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-10 text-center text-blue-600 dark:text-yellow-400 flex items-center justify-center gap-2">
              📁 Projects
            </h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Project Card 1 (OutfitGo) */}
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105">
                <Image
                  src="/p1.png"
                  alt="OutfitGo Project - Light Theme"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg dark:hidden"
                />
                <Image
                  src="/p11.png"
                  alt="OutfitGo Project - Dark Theme"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg hidden dark:block"
                />
                <h3 className="text-xl font-semibold text-blue-600 dark:text-yellow-400">
                  OutfitGo
                </h3>
                <p className="text-gray-800 dark:text-gray-300">
                  <b>PL: NestJS, NextJS, HTML & CSS </b>
                </p>
                <p className="text-gray-800 dark:text-gray-300">
                  Elevating Your Shopping Experience with Modern Design and
                  Technology
                </p>
                <div className="mt-4">
                  <a
                    className="text-blue-600 dark:text-yellow-400 underline"
                    href="https://github.com/ALNAFI/OutfitGo_BE"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub (BE)
                  </a>
                  ,&nbsp;
                  <a
                    className="text-blue-600 dark:text-yellow-400 underline"
                    href="https://github.com/ALNAFI/OutfitGo_FE"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub (FE)
                  </a>
                  ,&nbsp;
                  <a
                    className="text-blue-600 dark:text-yellow-400 underline"
                    href="https://www.figma.com/design/WLISECxJf8A2wS6QYkinw9/Outfit-Go?node-id=0-1&p=f"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    UI/UX
                  </a>
                  ,&nbsp;
                  <a
                    className="text-blue-600 dark:text-yellow-400 underline"
                    href="https://youtu.be/FgnbV4_oSUU"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    YT
                  </a>
                </div>
              </div>

              {/* Project Card 2 (Moon Quest)*/}
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105">
                <Image
                  src="/p22.png"
                  alt="Moon Quest Project - Light Theme"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg dark:hidden"
                />
                <Image
                  src="/p2.png"
                  alt="Moon Quest Project - Dark Theme"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg hidden dark:block"
                />
                <h3 className="text-xl font-semibold text-blue-600 dark:text-yellow-400">
                  Moon Quest
                </h3>
                <p className="text-gray-800 dark:text-gray-300">
                  <b>PL: C++</b>
                </p>
                <p className="text-gray-800 dark:text-gray-300">
                  Computer Graphics Project Using C++ & OpenGL
                </p>
                <div className="mt-4">
                  <a
                    className="text-blue-600 dark:text-yellow-400 underline"
                    href="https://github.com/ALNAFI/Moon_Quest"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  ,&nbsp;
                  <a
                    className="text-blue-600 dark:text-yellow-400 underline"
                    href="https://www.youtube.com/watch?v=c0WMaGYZFtg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch YouTube
                  </a>
                </div>
              </div>

              {/* Project Card 3 (Polling-System)*/}
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105">
                <Image
                  src="/p33.png"
                  alt="Polling System Project - Light Theme"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg dark:hidden"
                />
                <Image
                  src="/p3.png"
                  alt="Polling System Project - Dark Theme"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg hidden dark:block"
                />
                <h3 className="text-xl font-semibold text-blue-600 dark:text-yellow-400">
                  Polling-System
                </h3>
                <p className="text-gray-800 dark:text-gray-300">
                  <b>PL: C# and Dot Net (MVC)</b>
                </p>
                <p className="text-gray-800 dark:text-gray-300">
                  Voting System for Efficient Management and Real-time Results
                </p>
                <div className="mt-4">
                  <a
                    className="text-blue-600 dark:text-yellow-400 underline"
                    href="https://github.com/ALNAFI/Simple_Polling_System"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {/* Project Card 4 (Product Management) */}
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105">
                <Image
                  src="/p44.png"
                  alt="Product Management Project - Light Theme"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg dark:hidden"
                />
                <Image
                  src="/p4.png"
                  alt="Product Management Project - Dark Theme"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg hidden dark:block"
                />
                <h3 className="text-xl font-semibold text-blue-600 dark:text-yellow-400">
                  Product Management{" "}
                </h3>
                <p className="text-gray-800 dark:text-gray-300">
                  <b>PL: NestJS, DB: PostgreSQL</b>
                </p>
                <p className="text-gray-800 dark:text-gray-300">
                  Streamline Your Inventory, Sales, and Customer Experience with
                  Our PMS
                </p>
                <div className="mt-4">
                  <a
                    className="text-blue-600 dark:text-yellow-400 underline"
                    href="https://github.com/ALNAFI/Product-Management-System"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {/* Project Card 5 (MindMaze)*/}
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105">
                <Image
                  src="/p55.png"
                  alt="MindMaze Project - Light Theme"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg dark:hidden"
                />
                <Image
                  src="/p5.png"
                  alt="MindMaze Project - Dark Theme"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg hidden dark:block"
                />
                <h3 className="text-xl font-semibold text-blue-600 dark:text-yellow-400">
                  MindMaze
                </h3>
                <p className="text-gray-800 dark:text-gray-300">
                  <b>PL: C#, DB: MySQL</b>
                </p>
                <p className="text-gray-800 dark:text-gray-300">
                  A Quiz Game to test Your Knowledge and Boost Your Brain Power
                </p>
                <div className="mt-4">
                  <a
                    className="text-blue-600 dark:text-yellow-400 underline"
                    href="https://github.com/ALNAFI/Mind_Maze"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {/* Project Card 6 (Pack & Go) */}
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105">
                <Image
                  src="/p6.png"
                  alt="Pack & Go Project - Light Theme"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg dark:hidden"
                />
                <Image
                  src="/p667.png"
                  alt="Pack & Go Project - Dark Theme"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg hidden dark:block"
                />
                <h3 className="text-xl font-semibold text-blue-600 dark:text-yellow-400">
                  Pack & Go
                </h3>
                <p className="text-gray-800 dark:text-gray-300">
                  <b>Tools: Figma (UI/UX Design)</b>
                </p>
                <p className="text-gray-800 dark:text-gray-300">
                  Your Ultimate Travel Planner for Seamless Adventures
                </p>
                <div className="mt-4">
                  <a
                    className="text-blue-600 dark:text-yellow-400 underline"
                    href="https://www.figma.com/design/hcS4yb9hQ8hLDBlK6crl7x/Customer-Page?node-id=0-1&t=Gj6OfcFIufBlQ8W0-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    UI/UX
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ---------------------------Projects End------------------------------- */}

          {/* ---------------------------Skills Start------------------------------- */}

          <motion.div
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
              {/* Frontend */}
              <div className="transform hover:scale-105 transition-all duration-500 hover:bg-blue-100 dark:hover:bg-zinc-800 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-blue-500 dark:text-yellow-300 flex items-center gap-2">
                  🎨 Frontend
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>HTML CSS</li>
                  <li>Next.js</li>
                  <li>React.js</li>
                  <li>Tailwind, Daisy UI</li>
                  <li>JavaScript</li>
                </ul>
              </div>

              {/* Backend */}
              <div className="transform hover:scale-105 transition-all duration-500 hover:bg-blue-100 dark:hover:bg-zinc-800 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-blue-500 dark:text-yellow-300 flex items-center gap-2">
                  🖥️ Backend
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>NestJS</li>
                  <li>.NET MVC</li>
                  <li>C#</li>
                  <li>Node.js</li>
                  <li>PHP (Basic)</li>
                </ul>
              </div>

              {/* Tools */}
              <div className="transform hover:scale-105 transition-all duration-500 hover:bg-blue-100 dark:hover:bg-zinc-800 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-blue-500 dark:text-yellow-300 flex items-center gap-2">
                  🧰 Tools
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>GitHub</li>
                  <li>Postman</li>
                  <li>Microsoft Office</li>
                  <li>VS Code</li>
                  <li>Matlab</li>
                </ul>
              </div>

              {/* Databases */}
              <div className="transform hover:scale-105 transition-all duration-500 hover:bg-blue-100 dark:hover:bg-zinc-800 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-blue-500 dark:text-yellow-300 flex items-center gap-2">
                  🗄️ Databases
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>PostgreSQL</li>
                  <li>MySQL</li>
                  <li>MongoDB (Basic)</li>
                </ul>
              </div>

              {/* Design */}
              <div className="transform hover:scale-105 transition-all duration-500 hover:bg-blue-100 dark:hover:bg-zinc-800 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-blue-500 dark:text-yellow-300 flex items-center gap-2">
                  🎯 Design
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Figma</li>
                  <li>Canva</li>
                  <li>Draw.io</li>
                </ul>
              </div>

              {/* Soft Skills */}
              <div className="transform hover:scale-105 transition-all duration-500 hover:bg-blue-100 dark:hover:bg-zinc-800 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-blue-500 dark:text-yellow-300 flex items-center gap-2">
                  🧩 Soft Skills
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Team Collaboration</li>
                  <li>Time Management</li>
                  <li>Communication</li>
                  <li>Problem Solving</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* ---------------------------Skills End------------------------------- */}

          {/* ---------------------------Certifications Start------------------------------- */}

          <motion.div
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
              {/* Each certification card */}
              {[
                "Cisco IT Essentials",
                "Research Nutshell",
                "V.I. Graphic Design",
                "Microsoft Office",
              ].map((cert, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-blue-100 dark:bg-zinc-800 hover:bg-blue-200 dark:hover:bg-zinc-700 text-blue-900 dark:text-yellow-300 px-4 py-3 rounded-lg shadow-sm transition-transform transform hover:-translate-y-1"
                >
                  <span className="text-xl">✅</span>
                  <span className="font-medium">{cert}</span>
                </div>
              ))}

              {/* See More */}
              <a
                href="https://bit.ly/4drdPlv"
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-full text-center mt-4 block text-blue-600 dark:text-yellow-400 underline hover:text-blue-800 dark:hover:text-yellow-200 transition"
              >
                📜 See More Certifications
              </a>
            </div>
          </motion.div>

          {/* ---------------------------Certifications End------------------------------- */}

          {/* ---------------------------Education Start------------------------------- */}

          <motion.div
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
              {/* Card 1 */}
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-yellow-900 dark:to-yellow-800 p-5 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                <h3 className="text-lg font-semibold text-blue-900 dark:text-yellow-100">
                  American International University - Bangladesh
                </h3>
                <p className="text-sm text-gray-800 dark:text-gray-300 mt-2">
                  🎓 B.Sc. in CSE <br />
                  🗓️ 2021 - 2025 <br />
                  📊 <strong>CGPA:</strong> 3.63 / 4.00
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-yellow-900 dark:to-yellow-800 p-5 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                <h3 className="text-lg font-semibold text-blue-900 dark:text-yellow-100">
                  Willes Little Flower School & College
                </h3>
                <p className="text-sm text-gray-800 dark:text-gray-300 mt-2">
                  🏫 HSC in Science <br />
                  🗓️ 2018 - 2020 <br />
                  📊 <strong>GPA:</strong> 4.00 / 5.00
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-yellow-900 dark:to-yellow-800 p-5 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                <h3 className="text-lg font-semibold text-blue-900 dark:text-yellow-100">
                  Bangladesh Bank Adarsha High School
                </h3>
                <p className="text-sm text-gray-800 dark:text-gray-300 mt-2">
                  📚 SSC in Science <br />
                  🗓️ 2015 - 2017 <br />
                  📊 <strong>GPA:</strong> 4.20 / 5.00
                </p>
              </div>
            </div>
          </motion.div>

          {/* ---------------------------Education End------------------------------- */}

          {/* ---------------------------Reach me (Contact) Start------------------------------- */}

          <motion.div
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
              {/* Email and GitHub in one row */}
              <div className="flex flex-wrap gap-6 items-center justify-center">
                {/* Email */}
                <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300">
                  <span className="text-2xl text-pink-500">📧</span>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Email
                    </p>
                    <a
                      href="mailto:alnafi.eng@gmail.com"
                      className="text-lg font-medium text-blue-600 dark:text-yellow-400 underline"
                    >
                      alnafi.eng@gmail.com
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300">
                  <span className="text-2xl text-pink-500">🐙</span>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      GitHub
                    </p>
                    <a
                      href="https://github.com/ALNAFI"
                      className="text-lg font-medium text-blue-600 dark:text-yellow-400 underline"
                    >
                      github.com/ALNAFI
                    </a>
                  
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300">
                <span className="text-2xl text-pink-500">📍</span>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Location
                  </p>
                  <a
                    href="https://www.google.com/maps/place/West+Jurain,+Dhaka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-blue-600 dark:text-yellow-400 underline"
                  >
                    West Jurain, Dhaka
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ---------------------------Reach me (Contact) End------------------------------- */}

          {/* ---------------------------Write me Start------------------------------- */}

          <motion.div
            id="WriteMe"
            className="bg-gray-100 dark:bg-zinc-800 p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center justify-center gap-2 text-blue-600 dark:text-yellow-400">
              ✉️ Write Me!
            </h2>
            {toast && (
              <div className="mb-4 px-4 py-2 rounded bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100">
                {toast}
              </div>
            )}

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setLoading(true);
                const form = e.target;
                const formData = new FormData(form);

                // Convert FormData to JSON for Web3Forms
                const data = {
                  access_key: "ccd7f275-4f38-4d32-8601-07c56f04984f", // Get from https://web3forms.com
                  name: formData.get("name"),
                  email: formData.get("email"),
                  message: formData.get("message"),
                  subject: "New Message from Portfolio Contact Form",
                };

                const res = await fetch("https://api.web3forms.com/submit", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                  },
                  body: JSON.stringify(data),
                });

                const result = await res.json();

                if (res.ok && result.success) {
                  setToast("✅ Message sent successfully!");
                  form.reset();
                } else {
                  setToast("❌ Failed to send. Try again later.");
                }

                setTimeout(() => setToast(""), 3000);
                setLoading(false);
              }}
              className="space-y-4"
            >

              <input
                type="text"
                name="name"
                placeholder="Your name"
                autoComplete="on"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-zinc-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-400 transition-transform duration-200 transform focus:scale-105"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                autoComplete="on"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-zinc-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-400 transition-transform duration-200 transform focus:scale-105"
              />
              <textarea
                name="message"
                placeholder="Your message"
                required
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-zinc-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-400 transition-transform duration-200 transform focus:scale-105"
              />

              <button
                type="submit"
                className="bg-blue-600 dark:bg-yellow-400 hover:bg-blue-700 dark:hover:bg-yellow-300 text-white dark:text-black font-semibold px-6 py-2 rounded transition flex items-center justify-center gap-2"
                disabled={loading}
              >
                {loading && (
                  <svg
                    className="animate-spin h-5 w-5 text-white dark:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                )}
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </section>

        {/* ---------------------------Write me  End------------------------------- */}

        {/* ---------------------------Scroll button Start------------------------------- */}

        <button
          onClick={() => {
            if (typeof window !== "undefined" && window.lenis) {
              window.lenis.scrollTo(0, { duration: 3.0 });
            } else {
              window.scrollTo({ top: 0, behavior: "auto" });
            }
          }}
          className="fixed bottom-6 right-6 p-3 rounded-full shadow-lg border border-blue-600 dark:border-yellow-400 bg-white dark:bg-zinc-900 text-blue-600 dark:text-yellow-400 hover:bg-blue-600 dark:hover:bg-yellow-400 hover:text-white dark:hover:text-black transition duration-300"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>

        {/* ---------------------------Scroll button End------------------------------- */}

        <TalkSection />
      </main>

      {/* ---------------------------Footer Start------------------------------- */}
      <hr className="border-gray-300 dark:border-gray-600" />
      <footer className="text-center py-4 text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} AL NAFI. All rights reserved.
      </footer>

      {/* ---------------------------Footer End------------------------------- */}
    </>
  );
}
