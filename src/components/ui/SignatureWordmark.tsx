"use client";

import { motion, useReducedMotion } from "framer-motion";

export function SignatureWordmark() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="inline-block">
      <h1 className="font-heading text-5xl font-semibold tracking-tight text-ink-primary sm:text-6xl lg:text-7xl">
        Paula Valverde
      </h1>
      {/* El trazo se "firma" debajo del nombre — es el único momento de
          animación protagonista del Hero, todo lo demás se mantiene quieto. */}
      <svg
        viewBox="0 0 400 24"
        className="mt-2 h-4 w-full max-w-md text-brand-primary"
        aria-hidden="true"
      >
        <motion.path
          d="M4 14 C 80 4, 160 20, 240 10 S 360 4, 396 12"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 1.1, ease: "easeOut", delay: 0.3 }
          }
        />
      </svg>
    </div>
  );
}
