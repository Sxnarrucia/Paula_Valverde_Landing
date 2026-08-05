"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { SITE } from "@/lib/constants";

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 sm:h-9 sm:w-9">
      <path d="M8 5v14l11-7-11-7Z" />
    </svg>
  );
}

export function VideoIntro() {
  const [isPlaying, setIsPlaying] = useState(false);
  const { presentationVideoId } = SITE;

  return (
    <section id="conoceme" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <Reveal>
          <h2 className="text-center font-heading text-3xl font-semibold text-ink-primary sm:text-4xl">
            Conoce mi negocio
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-3xl">
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-ink-primary/5 shadow-sm">
            {isPlaying ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${presentationVideoId}?autoplay=1`}
                title="Video de presentación de Paula Valverde"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            ) : (
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                aria-label="Reproducir video de presentación de Paula Valverde"
                className="group absolute inset-0 h-full w-full"
              >
                <Image
                  src={`https://i.ytimg.com/vi/${presentationVideoId}/maxresdefault.jpg`}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 768px, 100vw"
                />
                <span className="absolute inset-0 bg-ink-primary/25 transition-colors group-hover:bg-ink-primary/35" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-brand-primary shadow-lg transition-transform group-hover:scale-105 sm:h-20 sm:w-20">
                    <PlayIcon />
                  </span>
                </span>
              </button>
            )}
          </div>

          <div className="mt-5 flex justify-center">
            <WhatsAppButton
              variant="compact"
              label="Quiero hablar por WhatsApp"
              className="!px-5 !py-3"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
