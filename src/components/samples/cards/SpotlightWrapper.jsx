"use client";

import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export default function SpotlightWrapper({ children }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(event) {
    const { currentTarget, clientX, clientY } = event;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Handle the radial gradient background size and motion values
  const background = useMotionTemplate`radial-gradient(140px circle at ${mouseX}px ${mouseY}px, rgba(41, 125, 169, 0.35), transparent 80%)`;

  return (
    <div onMouseMove={handleMouseMove} className="group relative">
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition duration-300 group-hover:opacity-100"
        style={{ background }}
      />
      {children}
    </div>
  );
}

// npm install framer-motion
// Installation is required for this component to work
