"use client";

export function Preloader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-zinc-900">
      <div className="loader" aria-label="Loading">
        <div className="cup">
          <div className="cup-handle" />
          <div className="smoke one" />
          <div className="smoke two" />
          <div className="smoke three" />
        </div>
        <div className="load">Loading...</div>
      </div>
    </div>
  );
}

