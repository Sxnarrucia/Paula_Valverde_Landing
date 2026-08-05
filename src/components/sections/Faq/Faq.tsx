"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { FaqItem } from "./FaqItem";
import { SITE } from "@/lib/constants";

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 sm:h-9 sm:w-9">
      <path d="M8 5v14l11-7-11-7Z" />
    </svg>
  );
}

function FaqVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const { faqVideoId } = SITE;

  return (
    <div className="mx-auto mt-10 max-w-3xl">
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-ink-primary/5 shadow-sm">
        {isPlaying ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${faqVideoId}?autoplay=1`}
            title="Video de preguntas frecuentes de Paula Valverde"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            aria-label="Reproducir video de preguntas frecuentes de Paula Valverde"
            className="group absolute inset-0 h-full w-full"
          >
            <Image
              src={`https://i.ytimg.com/vi/${faqVideoId}/maxresdefault.jpg`}
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
    </div>
  );
}

// TODO: reemplazar las respuestas con el copy final de Paula.
const FAQS = [
  {
    id: "faq-cajita-1",
    questionImage: "/images/CAJITA1.png",
    questionAlt: "Necesito experiencia previa?",
    answerLead: "No.",
    answerParagraphs: [
      "Lo bueno de este sistema de negocio es que no necesitas experiencia, sino estar dispuesto a aprender nuevas habilidades.",
      "Comenzamos desde lo mas basico y avanzamos paso a paso.",
    ],
  },
  {
    id: "faq-cajita-2",
    questionImage: "/images/CAJITA2.png",
    questionAlt: "Cuanto tiempo recomiendas dedicarle al dia?",
    answerParagraphs: [
      "Puede variar dependiendo de cuantas areas quieres desarrollar; puedes iniciar con 1 a 2 horas o bien a medio tiempo.",
    ],
  },
  {
    id: "faq-cajita-3",
    questionImage: "/images/CAJITA3.png",
    questionAlt: "Tengo que invitar a personas?",
    answerParagraphs: [
      "No, unicamente para quienes desean ser embajadores de la marca.",
      "Si deseas, tambien puedes aprovechar servicios como el trading y disfrutar de los beneficios de las sesiones y aplicaciones para generar en inversiones.",
    ],
  },
  {
    id: "faq-cajita-4",
    questionImage: "/images/CAJITA4.png",
    questionAlt: "Tendre asesoria o solo la app?",
    answerLead: "Si.",
    answerParagraphs: [
      "Adicional a nuestra plataforma y app, tambien contaras con apoyo por chat de WhatsApp con soporte y acceso a educadores.",
      "Ademas, tendras personas con experiencia para asesorarte paso a paso.",
    ],
  },
  {
    id: "faq-cajita-5",
    questionImage: "/images/CAJITA5.png",
    questionAlt: "Como funciona la promo del viaje gratis?",
    answerParagraphs: [
      "Recibiras un voucher vacacional de 4 a 7 noches para ti y 3 acompanantes, valido en mas de 500 hoteles alrededor del mundo.",
      "Solo deberas cubrir el impuesto hotelero (entre $150 y $250 dependiendo del destino), como cualquier reservacion internacional.",
      "Tu eliges donde, cuando y con quien viajaras.",
    ],
  },
  {
    id: "faq-cajita-6",
    questionImage: "/images/CAJITA6.png",
    questionAlt: "Y si no tengo dinero?",
    answerParagraphs: [
      "Si hoy no tienes $275 para invertir en ti y tu futuro, es aun mas urgente tomar accion y hacer un cambio.",
      "Para tener resultados distintos, debes hacer cosas distintas. Lo que hoy parece un gasto, manana puede ser la llave para vivir una vida distinta en paz y abundancia.",
      "No dejes que la falta de dinero te frene; que sea el motivo para no querer seguir igual y empezar cambios. Se pierde mas dinero por miedo a no intentarlo que tomando accion.",
    ],
  },
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

export function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFaq = FAQS[activeIndex] ?? FAQS[0];

  if (!activeFaq) {
    return null;
  }

  function goToPrevious() {
    setActiveIndex((current) => (current === 0 ? FAQS.length - 1 : current - 1));
  }

  function goToNext() {
    setActiveIndex((current) => (current === FAQS.length - 1 ? 0 : current + 1));
  }

  return (
    <section id="preguntas-frecuentes" className="scroll-mt-24 py-16 sm:py-20">
      <Container className="max-w-2xl">
        <Reveal>
          <h2 className="text-center font-heading text-3xl font-semibold text-ink-primary sm:text-4xl">
            20 dudas más frecuentes
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <FaqVideo />
          <div className="mt-5 flex justify-center">
            <WhatsAppButton
              variant="compact"
              label="Quiero hablar por WhatsApp"
              className="!px-5 !py-3"
            />
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-8 sm:mt-10">
          <div>
            <div className="relative mx-auto max-w-[38rem] px-8 sm:px-12">
              <button
                type="button"
                onClick={goToPrevious}
                aria-label="Ver pregunta anterior"
                className="absolute left-0 top-[9.25rem] z-10 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink-primary shadow ring-1 ring-ink-primary/10 transition-transform hover:scale-105 sm:top-[11.5rem] sm:h-10 sm:w-10"
              >
                <ArrowIcon direction="left" />
              </button>

              <FaqItem
                key={activeFaq.id}
                questionImage={activeFaq.questionImage}
                questionAlt={activeFaq.questionAlt}
                answerLead={activeFaq.answerLead}
                answerParagraphs={activeFaq.answerParagraphs}
              />

              <button
                type="button"
                onClick={goToNext}
                aria-label="Ver pregunta siguiente"
                className="absolute right-0 top-[9.25rem] z-10 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink-primary shadow ring-1 ring-ink-primary/10 transition-transform hover:scale-105 sm:top-[11.5rem] sm:h-10 sm:w-10"
              >
                <ArrowIcon direction="right" />
              </button>
            </div>

            <div className="mt-8 flex justify-center gap-3" aria-label="Selector de preguntas frecuentes">
              {FAQS.map((faq, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={faq.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Ver pregunta ${index + 1}`}
                    aria-pressed={isActive}
                    className={`h-2.5 rounded-full transition-all ${
                      isActive
                        ? "w-8 bg-brand-primary"
                        : "w-2.5 bg-ink-primary/20 hover:bg-ink-primary/35"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
