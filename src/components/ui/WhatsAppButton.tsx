"use client";

import { motion } from "framer-motion";
import { buildWhatsAppLink } from "@/lib/constants";

type WhatsAppButtonProps = {
  variant?: "primary" | "compact";
  label?: string;
  message?: string;
  href?: string;
  icon?: "message" | "external";
  className?: string;
};

function MessageIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path d="M12 2C6.48 2 2 6.13 2 11.22c0 2.62 1.19 4.98 3.13 6.65-.1.9-.42 2.4-1.32 4.13a.5.5 0 0 0 .6.7c2.16-.72 3.68-1.6 4.5-2.16 1 .27 2.06.42 3.09.42 5.52 0 10-4.13 10-9.22S17.52 2 12 2Z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5 stroke-current"
    >
      <path
        d="M14 5h5v5m0-5L10 14"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 14v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WhatsAppButton({
  variant = "primary",
  label = "Hablar por WhatsApp",
  message,
  href,
  icon = "message",
  className = "",
}: WhatsAppButtonProps) {
  const resolvedHref = href ?? buildWhatsAppLink(message);

  const base =
    "inline-flex items-center gap-2 font-heading font-semibold transition-colors focus-visible:outline-2";

  const styles =
    variant === "primary"
      ? "rounded-full bg-brand-primary px-8 py-4 text-base text-white hover:bg-brand-primary/90 sm:text-lg"
      : "rounded-full border border-brand-primary/30 px-4 py-2 text-sm text-brand-primary hover:bg-brand-secondary/40";

  const ariaLabel = icon === "external"
    ? `${label} (abre un enlace en una nueva pestaña)`
    : `${label} (abre WhatsApp en una nueva pestaña)`;

  return (
    <motion.a
      href={resolvedHref}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${styles} ${className}`}
      aria-label={ariaLabel}
    >
      {icon === "external" ? <ExternalLinkIcon /> : <MessageIcon />}
      {label}
    </motion.a>
  );
}
