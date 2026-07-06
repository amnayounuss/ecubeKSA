import Hero from "@/components/home/Hero";
import KineticBand from "@/components/home/KineticBand";
import Logos from "@/components/home/Logos";
import Solution from "@/components/home/Solution";
import Features from "@/components/home/Features";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <KineticBand />
      <Logos />
      <Solution />
      <Features />
      <Services />
      <Testimonials />
      <CTA />
    </>
  );
}
