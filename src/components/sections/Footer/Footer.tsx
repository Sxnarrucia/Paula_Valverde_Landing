import { Container } from "@/components/ui/Container";
import { SITE } from "@/lib/constants";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-ink-primary/10 py-12">
      <Container className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-heading text-lg font-semibold text-ink-primary">
            {SITE.name}
          </p>
        </div>

        <nav
          aria-label="Redes sociales"
          className="flex items-center gap-5 font-body text-sm text-ink-secondary"
        >
          <a
            href={SITE.social.instagram}
            aria-label="Instagram de Paula Valverde"
            className="hover:text-brand-primary"
          >
            <InstagramIcon />
          </a>
        </nav>
      </Container>
    </footer>
  );
}
