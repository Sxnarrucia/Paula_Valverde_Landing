import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dejamos el build estándar de Next.js (no "export" estático) para
  // conservar la optimización automática de next/image (WebP/AVIF,
  // tamaños responsivos servidos on-demand). Es clave para el objetivo
  // de Lighthouse >95, y funciona sin fricción en Vercel.
  // Si más adelante hosteás en algo sin soporte para Next (ej. hosting
  // compartido plano), cambiamos a output: "export" y pre-optimizamos
  // las imágenes a mano antes del build.
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
};

export default nextConfig;
