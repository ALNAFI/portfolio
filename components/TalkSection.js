// components/TalkSection.js
"use client";
import { useTheme } from "next-themes";
import {
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
  FaTelegramPlane,
} from "react-icons/fa";

export default function TalkSection() {
  const { resolvedTheme } = useTheme(); // Detect actual light/dark mode

  return (
    <div className="text-center py-16 bg-transparent">
      <div className="flex justify-center">
        <div
          className={`bg-gradient-to-br ${resolvedTheme === "dark"
              ? "from-yellow-400 to-slate-950"
              : "from-blue-500 to-blue-300"
            } w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg`}
        >
          AL
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-4 dark:text-white text-black">
        Let’s Talk With Me!
      </h2>
      <p className="text-gray-500 dark:text-gray-300 mt-2 max-w-md mx-auto px-4">
        An open invitation to connect, and explore collaborative opportunities
        on my personal portfolio website.
      </p>

      <div className="flex justify-center gap-6 mt-6 text-xl">
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-400 transition"
        >
          <FaTwitter />
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-600 transition"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-pink-500 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/8801824748778"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-green-500 transition"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-700 transition"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://t.me/your_username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-sky-500 transition"
        >
          <FaTelegramPlane />
        </a>
      </div>
    </div>
  );
}
