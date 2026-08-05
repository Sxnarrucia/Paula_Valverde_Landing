import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// next/font descarga y auto-hospeda las fuentes en build time:
// no hay request a fonts.googleapis.com en runtime, cero layout shift
// por fuentes, y funciona incluso si el usuario bloquea Google.
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paula Valverde",
  description:
    "Paula Valverde — conocé mi historia y hablemos por WhatsApp.",
  openGraph: {
    title: "Paula Valverde",
    description:
      "Paula Valverde — conocé mi historia y hablemos por WhatsApp.",
    type: "website",
    locale: "es_CR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
