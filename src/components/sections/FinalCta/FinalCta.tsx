import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function FinalCta() {
  return (
    <section className="bg-brand-primary py-14 sm:py-20">
      <Container className="max-w-3xl text-center">
        <Reveal>
          <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl">
            Da el siguiente paso para transformar tus ingresos y estilo de vida.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-white/90">
            Acceso completo a mi programa para ganar dinero y viajar por el mundo + asesoria de mi parte.
          </p>

          <div className="mx-auto mt-9 max-w-2xl rounded-3xl border border-white/40 bg-white px-6 py-10 text-center shadow-lg shadow-ink-primary/15 sm:px-8 sm:py-12">
            <p className="mx-auto max-w-xl font-body text-lg italic leading-relaxed text-ink-primary sm:text-xl">
              Acceso completo a mi programa para ganar dinero y viajar por el mundo + asesoria de mi parte
            </p>

            <div className="mt-8">
              <p className="font-heading text-5xl font-semibold leading-none text-brand-primary sm:text-6xl">
                $275 usd
              </p>
              <p className="mt-2 font-heading text-2xl font-semibold text-ink-primary sm:text-3xl">
                2do mes $175 usd
              </p>
            </div>

            <ul className="mx-auto mt-8 max-w-xl space-y-3 text-left font-body text-base text-ink-primary sm:text-lg">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-brand-primary">
                  <span className="text-sm font-semibold leading-none text-brand-primary">&#10003;</span>
                </span>
                JIFU
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-brand-primary">
                  <span className="text-sm font-semibold leading-none text-brand-primary">&#10003;</span>
                </span>
                Retired Young
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-brand-primary">
                  <span className="text-sm font-semibold leading-none text-brand-primary">&#10003;</span>
                </span>
                Beneficios exclusivos de Paula Valverde
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-brand-primary">
                  <span className="text-sm font-semibold leading-none text-brand-primary">&#10003;</span>
                </span>
                Acompañamiento personalizado con educador Jonathan Sanarrucia
              </li>
            </ul>

            <div className="mt-9 flex justify-center">
              <WhatsAppButton
                href="https://shop.jifu.com/es/cr/paulavalverde/join/enrollment?enrollment_type=preferred"
                label="Empieza hoy"
                icon="external"
                className="!bg-brand-primary !text-white hover:!bg-brand-primary/90"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
