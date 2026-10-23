import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TimelineSection from "@/components/TimelineSection";
import PrepaSection from "@/components/PrepaSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import CtaBannerSection from "@/components/CtaBannerSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          <HeroSection />
          <FeaturesSection />
          <TimelineSection />
          <PrepaSection />
          <TestimonialsSection />
          <FaqSection />
          <CtaBannerSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
