import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#E91E63", // fucsia — CTA, acentos, firma del Hero
          secondary: "#F8BBD0", // fucsia claro — fondos suaves, hover states
        },
        ink: {
          primary: "#1F2937", // texto principal
          secondary: "#6B7280", // texto secundario / metadatos
        },
      },
      fontFamily: {
        // Se definen como variables CSS en layout.tsx vía next/font,
        // acá solo las conectamos a las clases de Tailwind.
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "draw-signature": "draw-signature 1.2s ease-out forwards",
      },
      keyframes: {
        "draw-signature": {
          "0%": { strokeDashoffset: "1" },
          "100%": { strokeDashoffset: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
