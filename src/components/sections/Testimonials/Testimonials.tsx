"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const TESTIMONIALS = [
  "Testimonio.jpeg",
  "Testimonio1.jpeg",
  "Testimonio2.jpeg",
  "Testimonio3.jpeg",
  "Testimonio4.jpeg",
  "Testimonio5.jpeg",
  "Testimonio6.jpeg",
  "Testimonio7.jpeg",
  "Testimonio8.jpeg",
  "Testimonio9.jpeg",
  "Testimonio10.jpeg",
  "Testimonio11.jpeg",
  "Testimonio12.jpeg",
  "Testimonio13.jpeg",
  "Testimonio14.jpeg",
  "Testimonio15.jpeg",
  "Testimonio16.jpeg",
  "Testimonio17.jpeg",
  "Testimonio18.jpeg",
];

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path
        d={direction === "left" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"}
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const activeFile = TESTIMONIALS[activeIndex];

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => (current === 0 ? TESTIMONIALS.length - 1 : current - 1));
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) => (current === TESTIMONIALS.length - 1 ? 0 : current + 1));
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function goToPrevious() {
    setActiveIndex((current) => (current === 0 ? TESTIMONIALS.length - 1 : current - 1));
  }

  function goToNext() {
    setActiveIndex((current) => (current === TESTIMONIALS.length - 1 ? 0 : current + 1));
  }

  return (
    <section id="testimonios" className="scroll-mt-24 py-16 sm:py-20">
      <Container className="max-w-5xl">
        <Reveal>
          <h2 className="text-center font-heading text-3xl font-semibold text-ink-primary sm:text-4xl">
            Lo que dicen de trabajar conmigo
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <Reveal>
            <div className="relative mx-auto w-full max-w-[28rem] rounded-[2rem] bg-ink-primary/5 p-3 shadow-[0_24px_60px_rgba(17,24,39,0.14)] ring-1 ring-ink-primary/8 sm:max-w-[31rem]">
              <div
                tabIndex={0}
                aria-label="Carrusel de testimonios"
                className="relative overflow-hidden rounded-[1.65rem] bg-white outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-4"
              >
                <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-4 py-4 sm:px-5">
                  <button
                    type="button"
                    onClick={goToPrevious}
                    aria-label="Ver testimonio anterior"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-ink-primary shadow-lg ring-1 ring-ink-primary/10 transition-transform hover:scale-105"
                  >
                    <ArrowIcon direction="left" />
                  </button>

                  <div className="rounded-full bg-black/70 px-3 py-1 font-body text-xs font-medium tracking-[0.25em] text-white backdrop-blur-sm">
                    {String(activeIndex + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
                  </div>

                  <button
                    type="button"
                    onClick={goToNext}
                    aria-label="Ver testimonio siguiente"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-ink-primary shadow-lg ring-1 ring-ink-primary/10 transition-transform hover:scale-105"
                  >
                    <ArrowIcon direction="right" />
                  </button>
                </div>

                <div className="relative aspect-[9/16] w-full bg-white sm:aspect-[4/5]">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={activeFile}
                      initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 28 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: shouldReduceMotion ? 0 : -28 }}
                      transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: "easeOut" }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={`/images/${activeFile}`}
                        alt={`Captura de testimonio ${activeIndex + 1}`}
                        fill
                        priority={activeIndex === 0}
                        className="object-contain object-center"
                        sizes="(min-width: 1024px) 28rem, (min-width: 640px) 31rem, 100vw"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-5">
              <div>
                <span className="font-heading text-sm font-semibold uppercase tracking-[0.35em] text-brand-primary">
                  Testimonios reales
                </span>
                <h3 className="mt-3 max-w-md font-heading text-2xl font-semibold text-ink-primary sm:text-3xl">
                  Un vistazo claro a lo que dicen después de trabajar conmigo.
                </h3>
              </div>

              <div className="flex flex-wrap gap-3" aria-label="Selector de testimonios">
                {TESTIMONIALS.map((filename, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={filename}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Ver testimonio ${index + 1}`}
                      aria-pressed={isActive}
                      className={`h-2.5 rounded-full transition-all ${
                        isActive ? "w-10 bg-brand-primary" : "w-2.5 bg-ink-primary/20 hover:bg-ink-primary/35"
                      }`}
                    />
                  );
                })}
              </div>

              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                {TESTIMONIALS.slice(0, 7).map((filename, index) => {
                  const realIndex = index;

                  return (
                    <button
                      key={filename}
                      type="button"
                      onClick={() => setActiveIndex(realIndex)}
                      className={`relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 transition-all ${
                        realIndex === activeIndex
                          ? "ring-brand-primary shadow-[0_12px_30px_rgba(233,30,99,0.18)]"
                          : "ring-ink-primary/10 opacity-70 hover:opacity-100"
                      }`}
                      aria-label={`Seleccionar testimonio ${realIndex + 1}`}
                    >
                      <Image
                        src={`/images/${filename}`}
                        alt=""
                        fill
                        className="object-cover object-top"
                        sizes="120px"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}