import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import RecentBlogsSection from "@/components/RecentBlogsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseSection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <RecentBlogsSection />
        <CTASection />
      </main>
      <Footer />
      <StickyWhatsApp />
    </div>
  );
};

export default Index;
