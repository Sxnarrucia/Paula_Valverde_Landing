"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SignatureWordmark } from "@/components/ui/SignatureWordmark";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-20 pb-14 sm:pt-24 sm:pb-16">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SignatureWordmark />

          <p className="mt-6 max-w-lg font-body text-lg text-ink-secondary sm:text-xl">
            {/* TODO: reemplazar con la frase de impacto real de Paula */}
            Acompaño a personas como vos a dar el siguiente paso, con
            claridad y sin vueltas.
          </p>

          <div className="mt-9">
            <WhatsAppButton />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl bg-brand-secondary/30 lg:max-w-none"
        >
          {/* TODO: reemplazar por la foto profesional real en
              /public/images/paula-hero.jpg (mínimo 1200px de ancho) */}
          <Image
            src="/images/paula-hero.JPEG"
            alt="Retrato de Paula Valverde"
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
          />
        </motion.div>
      </Container>

      {/* Señal de que hay más contenido abajo — sutil, se detiene sola
          si el usuario tiene animaciones reducidas. */}
      <motion.div
        aria-hidden="true"
        animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="mt-4 hidden justify-center sm:flex"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-ink-secondary/50">
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </section>
  );
}