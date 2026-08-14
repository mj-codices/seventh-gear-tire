import Hero from "./components/hero/Hero";
import Services from "./components/services/ServicesSection";
import BrandMarquee from "./components/brands/BrandMarquee";
import HowItWorks from "./components/valueProp/ValueProp";

export default function Home() {
  return (
    <section>
      <Hero />
      <Services />
      <BrandMarquee />
      <HowItWorks />
    </section>
  );
}
