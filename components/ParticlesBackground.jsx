"use client";
import { useCallback, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { loadSlim } from "tsparticles-slim";
import { Particles } from "react-tsparticles";

export default function ParticlesBackground() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#3B82F6");

  useEffect(() => {
    if (resolvedTheme === "dark") {
      setColor("#FACC15");
    } else if (resolvedTheme === "light") {
      setColor("#3B82F6");
    }
  }, [resolvedTheme]);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      key={resolvedTheme}
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "transparent" },
        particles: {
          color: { value: color },
          links: { enable: true, color: color, distance: 150 },
          move: { enable: true, speed: 1 },
          number: { value: 60 },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 4 } },
        },
        detectRetina: true,
      }}
    />
  );
}
