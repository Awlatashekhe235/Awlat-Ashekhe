import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { PromoBanner } from "@/components/sections/PromoBanner";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PromoBanner />
      <Header cartItemsCount={3} />
      
      <main>
        <HeroSection />
        <CategoriesSection />
        <FeaturedProducts />
      </main>
      
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
