// TODO: reemplazar con los datos reales de Paula antes de lanzar.
export const SITE = {
  name: "Paula Valverde",
  whatsapp: {
    number: "50671256188",
    defaultMessage:
      "Hola Paula, un gusto!!\n\nVi tu página y me gustaría una asesoría personalizada contigo.",
  },
  email: "hola@paulavalverde.com",
  social: {
    instagram: "https://www.instagram.com/paulavalverder/",
    tiktok: "https://tiktok.com/@paulavalverde",
    linkedin: "https://linkedin.com/in/paulavalverde",
  },
  presentationVideoId: "CwNqiQbAp4s", // de youtube.com/watch?v=CwNqiQbAp4s
  faqVideoId: "1lYL4Z_eKCw", // de youtube.com/watch?v=1lYL4Z_eKCw
} as const;

export const NAV_LINKS = [
  { label: "Conóceme", href: "#conoceme" },
  { label: "Preguntas frecuentes", href: "#preguntas-frecuentes" },
  { label: "Testimonios", href: "#testimonios" },
] as const;

export function buildWhatsAppLink(
  message: string = SITE.whatsapp.defaultMessage,
) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${SITE.whatsapp.number}?text=${encoded}`;
}
