"use client";

export function ScrollToTopButton() {
  const handleClick = () => {
    if (typeof window !== "undefined" && window.lenis) {
      window.lenis.scrollTo(0, { duration: 3.0 });
    } else if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  };

  return (
    <button
      onClick={handleClick}
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
  );
}

