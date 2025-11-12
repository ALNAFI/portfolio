"use client";
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';
import Lenis from 'lenis';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Initialize Lenis with 3s duration
    const lenis = new Lenis({
      duration: 3.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    // Make lenis accessible globally for scroll buttons
    if (typeof window !== "undefined") {
      window.lenis = lenis;
    }

    // Handle anchor links with Lenis
    lenis.on('scroll', () => {
      // Lenis automatically handles anchor links
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle anchor link clicks
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target && lenis) {
          lenis.scrollTo(target, { duration: 3.0, offset: -80 });
        }
      }
    };

    // Add event listeners to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleAnchorClick);
    });

    return () => {
      lenis.destroy();
      if (typeof window !== "undefined") {
        window.lenis = null;
      }
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
