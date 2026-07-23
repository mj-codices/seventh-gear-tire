import Hero from "./components/hero/Hero";
import Services from "./components/services/ServicesSection";
import BrandMarquee from "./components/brands/BrandMarquee";

export default function Home() {
  return (
    <section>
      <Hero />
      <Services />
      <BrandMarquee />
    </section>
  );
}
