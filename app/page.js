import Header from "../components/Header";
import Hero from "../components/Hero";
import SpecialSection from "../components/SpecialSection";
import SignatureSection from "../components/SignatureSection";
import GallerySection from "../components/GallerySection";
import MenuSection from "../components/MenuSection";
import StorySection from "../components/StorySection";
import ProcessSection from "../components/ProcessSection";
import DeliverySection from "../components/DeliverySection";
import TestimonialSection from "../components/TestimonialSection";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import FloatingWA from "../components/FloatingWA";

export default function Home() {
  return (
    <main className="site-main" id="home">
      <Header />
      <Hero />
      <SpecialSection />
      <SignatureSection />
      <GallerySection />
      <MenuSection />
      <StorySection />
      <ProcessSection />
      <DeliverySection />
      <TestimonialSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <FloatingWA />
    </main>
  );
}
