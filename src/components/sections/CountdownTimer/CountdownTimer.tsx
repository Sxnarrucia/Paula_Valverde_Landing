"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { useCountdownToMidnight } from "@/hooks/useCountdownToMidnight";

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex min-w-[4.25rem] flex-col items-center sm:min-w-[6.5rem]">
      <span className="font-heading text-5xl font-semibold tabular-nums leading-none text-brand-primary sm:text-7xl">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-2 font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-secondary sm:text-sm sm:tracking-[0.22em]">
        {label}
      </span>
    </div>
  );
}

export function CountdownTimer() {
  const { isReady, hours, minutes, seconds } = useCountdownToMidnight();

  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-3xl text-center">
        <Reveal>
          <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-[1.75rem] shadow-[0_18px_50px_rgba(17,24,39,0.12)] ring-1 ring-ink-primary/8 sm:max-w-4xl">
            <Image
              src="/images/Voucher_Vacacional.png"
              alt="Voucher Vacacional"
              width={900}
              height={900}
              className="h-auto w-full object-contain"
              priority
            />
          </div>

          <p className="mt-6 font-heading text-sm font-semibold uppercase tracking-[0.35em] text-brand-primary sm:text-base">
            PROMOCIÓN VÁLIDA HASTA
          </p>

          <div
            className="mt-8 rounded-3xl bg-brand-secondary/18 px-5 py-6 shadow-[0_12px_32px_rgba(17,24,39,0.12)] ring-1 ring-ink-primary/10 sm:px-8 sm:py-8"
            role="timer"
            aria-live="off"
            aria-label={`Tiempo restante: ${hours} horas, ${minutes} minutos, ${seconds} segundos`}
          >
            <div className="mx-auto flex w-full max-w-[18rem] items-start justify-between sm:max-w-none sm:justify-center sm:gap-7">
              {/* Reservamos el mismo layout mientras isReady es false,
                  para que no haya salto de contenido (layout shift) al
                  montar en el cliente. */}
              <TimeUnit value={isReady ? hours : 0} label="Horas" />
              <TimeUnit value={isReady ? minutes : 0} label="Minutos" />
              <TimeUnit value={isReady ? seconds : 0} label="Segundos" />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
