import { Button } from "@/components/ui/button";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { ProductCard } from "@/components/products/ProductCard";
import { useState } from "react";

// بيانات مثالية للمنتجات
const demoProducts = {
  latest: [
    {
      id: "phone-1",
      name: "هاتف سوبر فون برو",
      nameEn: "SuperPhone Pro Max",
      price: 3999,
      originalPrice: 4499,
      image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=500&auto=format&fit=crop",
      rating: 4.8,
      reviewCount: 214,
      category: "الهواتف الذكية",
      isNew: true,
      isOnSale: true,
      discount: 10,
    },
    {
      id: "laptop-1",
      name: "حاسوب ألترا بوك برو",
      nameEn: "UltraBook Pro 15",
      price: 5999,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=500&auto=format&fit=crop",
      rating: 4.9,
      reviewCount: 175,
      category: "الحواسيب المحمولة",
      isNew: true,
    },
    {
      id: "watch-1",
      name: "ساعة تك ووتش سيريس",
      nameEn: "TechWatch Series 7",
      price: 1499,
      originalPrice: 1899,
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=500&auto=format&fit=crop",
      rating: 4.7,
      reviewCount: 189,
      category: "الساعات الذكية",
      isOnSale: true,
      discount: 20,
    },
    {
      id: "headphone-1",
      name: "سماعات كويت برو",
      nameEn: "QuietPro Headphones",
      price: 899,
      originalPrice: 1099,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500&auto=format&fit=crop",
      rating: 4.6,
      reviewCount: 228,
      category: "السماعات",
      isOnSale: true,
      discount: 15,
    },
  ],
  popular: [
    {
      id: "phone-2",
      name: "هاتف مني فون لايت",
      nameEn: "Mini Phone Lite 5G",
      price: 2499,
      originalPrice: 2799,
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=500&auto=format&fit=crop",
      rating: 4.5,
      reviewCount: 312,
      category: "الهواتف الذكية",
      isOnSale: true,
      discount: 10,
    },
    {
      id: "tablet-1",
      name: "تاب برو ماكس",
      nameEn: "Tab Pro Max 12",
      price: 3499,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=500&auto=format&fit=crop",
      rating: 4.7,
      reviewCount: 186,
      category: "الأجهزة اللوحية",
    },
    {
      id: "camera-1",
      name: "كاميرا دي إس إل آر برو",
      nameEn: "DSLR Pro 8K",
      price: 4299,
      originalPrice: 4599,
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=500&auto=format&fit=crop",
      rating: 4.9,
      reviewCount: 137,
      category: "الكاميرات",
    },
    {
      id: "speaker-1",
      name: "مكبر صوت سمارت 360",
      nameEn: "Smart Speaker 360",
      price: 699,
      image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=500&auto=format&fit=crop",
      rating: 4.4,
      reviewCount: 245,
      category: "مكبرات الصوت",
      isNew: true,
    },
  ],
  discounted: [
    {
      id: "phone-3",
      name: "هاتف جي برو بلس",
      nameEn: "G Pro Plus 128GB",
      price: 1899,
      originalPrice: 2899,
      image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=500&auto=format&fit=crop",
      rating: 4.6,
      reviewCount: 253,
      category: "الهواتف الذكية",
      isOnSale: true,
      discount: 35,
    },
    {
      id: "tv-1",
      name: "تلفاز سمارت 4K",
      nameEn: "Smart TV 4K HDR 55\"",
      price: 2499,
      originalPrice: 3499,
      image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=500&auto=format&fit=crop",
      rating: 4.7,
      reviewCount: 178,
      category: "التلفزيونات",
      isOnSale: true,
      discount: 30,
    },
    {
      id: "earbuds-1",
      name: "سماعات لاسلكية برو",
      nameEn: "Wireless Earbuds Pro",
      price: 499,
      originalPrice: 799,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=500&auto=format&fit=crop",
      rating: 4.5,
      reviewCount: 327,
      category: "السماعات",
      isOnSale: true,
      discount: 40,
    },
    {
      id: "printer-1",
      name: "طابعة ألوان ليزر",
      nameEn: "Color Laser Printer",
      price: 999,
      originalPrice: 1499,
      image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=500&auto=format&fit=crop",
      rating: 4.3,
      reviewCount: 129,
      category: "الطابعات",
      isOnSale: true,
      discount: 35,
    },
  ]
};

export const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState("latest");
  const [cartItems, setCartItems] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  const handleAddToCart = (productId: string) => {
    setCartItems(prev => [...prev, productId]);
  };

  const handleToggleFavorite = (productId: string) => {
    setFavorites(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-center md:text-right mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              منتجاتنا المميزة
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              تصفح أحدث وأفضل المنتجات التقنية بخصومات رائعة
            </p>
          </div>

          <div>
            <Button variant="hero" size="lg" className="shadow-button">
              عرض جميع المنتجات
            </Button>
          </div>
        </div>

        {/* تبويبات المنتجات */}
        <Tabs 
          defaultValue="latest" 
          value={activeTab} 
          onValueChange={setActiveTab} 
          className="space-y-8"
        >
          <TabsList className="mx-auto bg-muted/70 p-1">
            <TabsTrigger 
              value="latest" 
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              أحدث المنتجات
            </TabsTrigger>
            <TabsTrigger 
              value="popular" 
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              الأكثر شعبية
            </TabsTrigger>
            <TabsTrigger 
              value="discounted" 
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              العروض الخاصة
            </TabsTrigger>
          </TabsList>
          
          {/* محتوى التبويبات */}
          <TabsContent value="latest" className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {demoProducts.latest.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={handleAddToCart}
                  onToggleFavorite={handleToggleFavorite}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="popular" className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {demoProducts.popular.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={handleAddToCart}
                  onToggleFavorite={handleToggleFavorite}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="discounted" className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {demoProducts.discounted.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={handleAddToCart}
                  onToggleFavorite={handleToggleFavorite}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};