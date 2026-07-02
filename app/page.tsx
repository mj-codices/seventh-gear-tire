import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import BrandMarquee from "./components/Brands/BrandMarquee";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <section>
      <Hero />
      <Services />
      <BrandMarquee />
      <Footer />
    </section>
  );
}
