import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-primary/5 bg-white/80 backdrop-blur-md">
      <Container className="flex items-center justify-between py-4">
        <a href="#top" className="font-heading text-lg font-semibold text-ink-primary">
          {SITE.name}
        </a>

        <nav
          aria-label="Secciones de la página"
          className="hidden items-center gap-8 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-ink-secondary transition-colors hover:text-brand-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <WhatsAppButton variant="compact" label="WhatsApp" />
      </Container>
    </header>
  );
}