"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function WriteMeSection() {
  const [toast, setToast] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <motion.section
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

          const data = {
            access_key: "ccd7f275-4f38-4d32-8601-07c56f04984f",
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
            subject: "New Message from Portfolio Contact Form",
          };

          try {
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
          } catch {
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
    </motion.section>
  );
}

