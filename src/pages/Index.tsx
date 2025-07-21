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
    </div>
  );
};

export default Index;
