import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/products/ProductCard";
import { useParams } from "react-router-dom";

export default function Categories() {
  const { category } = useParams();
  
  const categoryNames: { [key: string]: string } = {
    phones: "الهواتف الذكية",
    computers: "أجهزة الكمبيوتر", 
    accessories: "الإكسسوارات",
    cameras: "الكاميرات",
    audio: "الصوتيات",
    exchange: "المبادلة",
    other: "أخرى"
  };

  // منتجات تجريبية
  const sampleProducts = [
    {
      id: "1",
      name: "iPhone 15 Pro Max",
      nameEn: "iPhone 15 Pro Max",
      price: 1200000,
      currency: "جنيه",
      image: "/lovable-uploads/e86cc04d-36b5-4502-99e2-d5e45a98983e.png",
      condition: "جديد",
      location: "نجامينا",
      whatsapp: "+23599987837",
      rating: 4.8,
      reviewCount: 25,
      category: "phones"
    },
    {
      id: "2",
      name: "Samsung Galaxy S24",
      nameEn: "Samsung Galaxy S24",
      price: 900000,
      currency: "جنيه",
      image: "/lovable-uploads/e86cc04d-36b5-4502-99e2-d5e45a98983e.png",
      condition: "مستعمل",
      location: "أبشه",
      whatsapp: "+23566687837",
      rating: 4.6,
      reviewCount: 18,
      category: "phones"
    },
    {
      id: "3",
      name: "MacBook Pro M3",
      nameEn: "MacBook Pro M3",
      price: 2500000,
      currency: "جنيه", 
      image: "/lovable-uploads/e86cc04d-36b5-4502-99e2-d5e45a98983e.png",
      condition: "جديد",
      location: "مندوا",
      whatsapp: "+23599987837",
      rating: 5.0,
      reviewCount: 32,
      category: "computers"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
            {categoryNames[category || 'other'] || 'جميع المنتجات'}
          </h1>
          <p className="text-muted-foreground">
            تصفح المنتجات في هذه الفئة
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {sampleProducts.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-lg font-semibold text-muted-foreground mb-2">
              لا توجد منتجات في هذه الفئة حالياً
            </h3>
            <p className="text-muted-foreground">
              تابعنا للحصول على أحدث المنتجات
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}