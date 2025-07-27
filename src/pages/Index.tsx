<<<<<<< HEAD
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
=======
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AddProductDialog from "@/components/AddProductDialog";

const Index = () => {
  return (
    <div className="min-h-screen bg-pattern font-arabic" style={{ direction: 'rtl' }}>
      <Header />
      <Navigation />
      <Hero />
      <div id="products-section">
        <ProductGrid />
      </div>
      <Footer />
      <WhatsAppButton />
>>>>>>> 406e6e1fa55f0aa354a97e93f4637c8c197d5497
    </div>
  );
};

export default Index;
