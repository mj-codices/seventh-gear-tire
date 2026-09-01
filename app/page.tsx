import Hero from "./components/hero/Hero";
import Services from "./components/services/ServicesSection";
import BrandMarquee from "./components/brands/BrandMarquee";
import HowItWorks from "./components/how-it-works/HowItWorks";

export default function Home() {
  return (
    <section>
      <Hero />
      <HowItWorks/>
      <Services />
      <BrandMarquee />
    </section>
  );
}
