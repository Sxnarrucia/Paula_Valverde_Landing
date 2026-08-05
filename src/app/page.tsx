import { Navbar } from "@/components/sections/Navbar/Navbar";
import { Hero } from "@/components/sections/Hero/Hero";
import { VideoIntro } from "@/components/sections/VideoIntro/VideoIntro";
import { Faq } from "@/components/sections/Faq/Faq";
import { Testimonials } from "@/components/sections/Testimonials/Testimonials";
import { CountdownTimer } from "@/components/sections/CountdownTimer/CountdownTimer";
import { FinalCta } from "@/components/sections/FinalCta/FinalCta";
import { Footer } from "@/components/sections/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <VideoIntro />
        <Faq />
        <Testimonials />
        <CountdownTimer />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}