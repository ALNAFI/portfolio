"use client";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

