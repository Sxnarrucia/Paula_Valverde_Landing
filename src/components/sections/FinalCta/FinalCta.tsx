import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function FinalCta() {
  return (
    <section className="bg-brand-primary py-14 sm:py-20">
      <Container className="max-w-2xl text-center">
        <Reveal>
          <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl">
            {/* TODO: reemplazar con el mensaje de cierre real */}
            Da el siguiente paso y comienza a trabajar conmigo
          </h2>
          <p className="mt-4 font-body text-white/90">
            Ingresa en el siguiente enlace y completá tu inscripción para comenzar a trabajar conmigo. ¡Te espero!
          </p>
          <div className="mt-9 flex justify-center">
            <WhatsAppButton
              href="https://shop.jifu.com/es/cr/paulavalverde/join/enrollment?enrollment_type=preferred"
              label="Continuar"
              icon="external"
              className="!bg-white !text-brand-primary hover:!bg-white/90"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
