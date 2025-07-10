"use client";
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import ParticlesBackground from '../components/ParticlesBackground';
import { useTheme } from 'next-themes';
import TalkSection from "../components/TalkSection";


export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [toast, setToast] = useState('');
  const [loading, setLoading] = useState(false);


  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>

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
                className={`block absolute h-0.5 w-6 bg-blue-600 dark:bg-yellow-400 transform transition duration-300 ease-in-out ${menuOpen ? 'rotate-45 top-5' : 'top-7'
                  }`}
              ></span>
              <span
                className={`block absolute h-0.5 w-6 bg-blue-600 dark:bg-yellow-400 transform transition duration-300 ease-in-out ${menuOpen ? 'opacity-0' : 'top-5'
                  }`}
              ></span>
              <span
                className={`block absolute h-0.5 w-6 bg-blue-600 dark:bg-yellow-400 transform transition duration-300 ease-in-out ${menuOpen ? '-rotate-45 top-5' : 'top-3'
                  }`}
              ></span>
            </button>
          </div>

          {/* ---------------------------Mobile hamburger icon End------------------------------- */}

          {/* ---------------------------Desktop nav links Start------------------------------- */}
          <div className="space-x-4 hidden md:flex items-center">
            <a
              href="#projects"
              className="hover:text-yellow-400 dark:hover:text-white duration-200 text-blue-600 dark:text-yellow-400 hover:underline"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="hover:text-yellow-400 dark:hover:text-white duration-200 text-blue-600 dark:text-yellow-400 hover:underline"
            >
              Skills
            </a>
            <a
              href="#certifications"
              className="hover:text-yellow-400 dark:hover:text-white duration-200 text-blue-600 dark:text-yellow-400 hover:underline"
            >
              Certifications
            </a>
            <a
              href="#education"
              className="hover:text-yellow-400 dark:hover:text-white duration-200 text-blue-600 dark:text-yellow-400 hover:underline"
            >
              Education
            </a>
            <a
              href="#contact"
              className="hover:text-yellow-400 dark:hover:text-white duration-200 text-blue-600 dark:text-yellow-400 hover:underline"
            >
              Contact
            </a>

            {/* ---------------------------Desktop nav links End------------------------------- */}


            {/* ---------------------------Theme toggle button Start------------------------------- */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.button
                key={theme}
                onClick={toggleTheme}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="h-10 w-10 flex items-center justify-center border border-blue-600 dark:border-yellow-400 rounded-full bg-white dark:bg-zinc-900 shadow hover:bg-blue-100 dark:hover:bg-yellow-900 hover:text-white dark:hover:text-black transition"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? (
                  <img src="/ThemeSun.svg" alt="Light Mode" className="w-6 h-6" />
                ) : (
                  <Image
                    src="/ThemeMoon.svg"
                    alt="Dark Mode"
                    width={24}
                    height={24}
                  />
                )}
              </motion.button>
            </AnimatePresence>

            {/* ---------------------------Theme toggle button End------------------------------- */}

          </div>
        </div>

        {/* ---------------------------Mobile menu items Start------------------------------- */}

        {menuOpen && (
          <div className="md:hidden mt-2 flex flex-col items-start space-y-2 px-2 bg-base-200 w-56">
            <li>
              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}  // Close menu on click
                className="menu-item hover:text-yellow-400 dark:hover:text-white duration-200 text-blue-600 dark:text-yellow-400 hover:underline"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}  // Close menu on click
                className="menu-item hover:text-yellow-400 dark:hover:text-white duration-200 text-blue-600 dark:text-yellow-400 hover:underline"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#certifications"
                onClick={() => setMenuOpen(false)}  // Close menu on click
                className="menu-item hover:text-yellow-400 dark:hover:text-white duration-200 text-blue-600 dark:text-yellow-400 hover:underline"
              >
                Certifications
              </a>
            </li>
            <li>
              <a
                href="#education"
                onClick={() => setMenuOpen(false)}  // Close menu on click
                className="menu-item hover:text-yellow-400 dark:hover:text-white duration-200 text-blue-600 dark:text-yellow-400 hover:underline"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}  // Close menu on click
                className="menu-item hover:text-yellow-400 dark:hover:text-white duration-200 text-blue-600 dark:text-yellow-400 hover:underline"
              >
                Contact
              </a>
            </li>
            <li>
              <button
                onClick={() => {
                  setMenuOpen(false);  // Close menu on theme toggle
                  toggleTheme();
                }}
                className="menu-item text-blue-600 dark:text-yellow-400 px-1 py-0.5 rounded hover:bg-blue-600 dark:hover:bg-yellow-400 hover:text-white dark:hover:text-black transition"
              >
                {theme === 'dark' ? 'Light ☀️' : 'Dark 🌙'}
              </button>
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

            <h1 className="text-4xl md:text-5xl font-bold mt-6">
              Hi, I'm{' '}
              <span className="text-blue-600 dark:text-yellow-400">AL NAFI</span>{' '}
              👋
              <br />
              <span className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
                <Typewriter
                  words={[
                    'Web Developer',
                    'UI/UX Designer',
                    'Tech Enthusiast',
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={60}
                  deleteSpeed={40}
                  delaySpeed={1500}
                />
              </span>
            </h1>
            <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Code is my canvas, design is my rhythm, and curiosity is my compass. I love blending logic with emotion to build digital experiences that feel as good as they function. Whether it's a clean interface or a clever backend, I'm all about creating things people remember.
            </p>

            {/* ---------------------------CV Section Start------------------------------- */}

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* View CV */}
              <a
                href="https://drive.google.com/file/d/1GeSDPNQMezB9hap-OLnjkFrkWJkq3Dv6/preview"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 border border-blue-600 dark:border-yellow-400 text-blue-600 dark:text-yellow-400 rounded hover:bg-blue-600 dark:hover:bg-yellow-400 hover:text-white dark:hover:text-black transition"
              >
                👁️ View CV
              </a>
              {/* Download CV */}
              <a
                href="/AL-NAFI-CV.pdf"
                download
                className="inline-block px-6 py-2 border border-blue-600 dark:border-yellow-400 text-blue-600 dark:text-yellow-400 rounded hover:bg-blue-600 dark:hover:bg-yellow-400 hover:text-white dark:hover:text-black transition"
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
            <h2 className="text-3xl font-bold mb-10 text-center text-blue-600 dark:text-yellow-400 flex items-center justify-center gap-2">📁 Projects</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


              {/* Project Card 1 (OutfitGo) */}
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105">
                <img
                  src="/p1.png"
                  alt="Project Four"
                  className="w-full h-auto rounded-lg dark:hidden"  // Image for light theme
                />
                <img
                  src="/p11.png"
                  alt="Project Four"
                  className="w-full h-auto rounded-lg hidden dark:block"  // Image for dark theme
                />
                <h3 className="text-xl font-semibold text-blue-600 dark:text-yellow-400">OutfitGo</h3>
                <p className="text-gray-800 dark:text-gray-300"><b>PL: NestJS, NextJS, HTML & CSS </b></p>
                <p className="text-gray-800 dark:text-gray-300">Elevating Your Shopping Experience with Modern Design and Technology</p>
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
                <img
                  src="/p22.png"
                  alt="Project Four"
                  className="w-full h-auto rounded-lg dark:hidden"  // Image for light theme
                />
                <img
                  src="/p2.png"
                  alt="Project Four"
                  className="w-full h-auto rounded-lg hidden dark:block"  // Image for dark theme
                />
                <h3 className="text-xl font-semibold text-blue-600 dark:text-yellow-400">Moon Quest</h3>
                <p className="text-gray-800 dark:text-gray-300"><b>PL: C++</b></p>
                <p className="text-gray-800 dark:text-gray-300">Computer Graphics Project Using C++ & OpenGL</p>
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
                <img
                  src="/p33.png"
                  alt="Project Four"
                  className="w-full h-auto rounded-lg dark:hidden"  // Image for light theme
                />
                <img
                  src="/p3.png"
                  alt="Project Four"
                  className="w-full h-auto rounded-lg hidden dark:block"  // Image for dark theme
                />
                <h3 className="text-xl font-semibold text-blue-600 dark:text-yellow-400">Polling-System</h3>
                <p className="text-gray-800 dark:text-gray-300"><b>PL: C# and Dot Net (MVC)</b></p>
                <p className="text-gray-800 dark:text-gray-300">Voting System for Efficient Management and Real-time Results</p>
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

                <img
                  src="/p44.png"
                  alt="Project Four"
                  className="w-full h-auto rounded-lg dark:hidden"  // Image for light theme
                />
                <img
                  src="/p4.png"
                  alt="Project Four"
                  className="w-full h-auto rounded-lg hidden dark:block"  // Image for dark theme
                />
                <h3 className="text-xl font-semibold text-blue-600 dark:text-yellow-400">Product Management </h3>
                <p className="text-gray-800 dark:text-gray-300"><b>PL: NestJS, DB: PostgreSQL</b></p>
                <p className="text-gray-800 dark:text-gray-300">Streamline Your Inventory, Sales, and Customer Experience with Our PMS</p>
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
                <img
                  src="/p55.png"
                  alt="Project Four"
                  className="w-full h-auto rounded-lg dark:hidden"  // Image for light theme
                />
                <img
                  src="/p5.png"
                  alt="Project Four"
                  className="w-full h-auto rounded-lg hidden dark:block"  // Image for dark theme
                />
                <h3 className="text-xl font-semibold text-blue-600 dark:text-yellow-400">MindMaze</h3>
                <p className="text-gray-800 dark:text-gray-300"><b>PL: C#, DB: MySQL</b></p>
                <p className="text-gray-800 dark:text-gray-300">A Quiz Game to test Your Knowledge and Boost Your Brain Power</p>
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

                <img
                  src="/p6.png"
                  alt="Project Four"
                  className="w-full h-auto rounded-lg dark:hidden"  // Image for light theme
                />
                <img
                  src="/p667.png"
                  alt="Project Four"
                  className="w-full h-auto rounded-lg hidden dark:block"  // Image for dark theme
                />
                <h3 className="text-xl font-semibold text-blue-600 dark:text-yellow-400">Pack & Go</h3>
                <p className="text-gray-800 dark:text-gray-300"><b>Tools: Figma (UI/UX Design)</b></p>
                <p className="text-gray-800 dark:text-gray-300">Your Ultimate Travel Planner for Seamless Adventures</p>
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
            <h2 className="text-3xl font-bold mb-10 text-center text-blue-600 dark:text-yellow-400 flex items-center justify-center gap-2">🧠 Skills Overview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-800 dark:text-gray-100">

              {/* Frontend */}
              <div className="transform hover:scale-105 transition-all duration-500 hover:bg-blue-100 dark:hover:bg-zinc-800 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-blue-500 dark:text-yellow-300 flex items-center gap-2">
                  🎨 Frontend
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Tailwind, Daisy UI</li>
                  <li>Next.js</li>
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
                'Cisco IT Essentials',
                'Research Nutshell',
                'V.I. Graphic Design',
                'Microsoft Office',
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
                  📊 <strong>CGPA:</strong> 3.62 / 4.00
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
              {/* Email */}
              <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300">
                <span className="text-2xl text-pink-500">📧</span>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
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
                  <p className="text-sm text-gray-500 dark:text-gray-400">GitHub</p>
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
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
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
                const data = new FormData(form);

                const res = await fetch("https://formsubmit.co/ajax/innocentboynafi1111@gmail.com", {
                  method: "POST",
                  body: data,
                });

                if (res.ok) {
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
              <input type="hidden" name="_captcha" value="false" />

              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-zinc-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-400 transition-transform duration-200 transform focus:scale-105"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
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
                {loading ? 'Sending...' : 'Send Message'}
              </button>

            </form>
          </motion.div>
        </section>


        {/* ---------------------------Write me  End------------------------------- */}


        {/* ---------------------------Scroll button Start------------------------------- */}

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>

        {/* ---------------------------Scroll button End------------------------------- */}


        <TalkSection />
      </main>


      {/* ---------------------------Footer Start------------------------------- */}

      <footer className="text-center py-4 text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} AL NAFI. All rights reserved.
      </footer>

      {/* ---------------------------Footer End------------------------------- */}


    </>
  );
}
