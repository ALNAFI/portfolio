"use client";

export function Footer() {
  return (
    <>
      <hr className="border-gray-300 dark:border-gray-600" />
      <footer className="text-center py-4 text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} AL NAFI. All rights reserved.
      </footer>
    </>
  );
}

