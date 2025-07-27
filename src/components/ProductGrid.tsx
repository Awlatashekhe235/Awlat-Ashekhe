import { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, ShoppingCart, Eye, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Tables } from "@/integrations/supabase/types";

type Product = Tables<"public.products">;

const ProductGrid = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('public.products')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
      toast({
        title: "خطأ في تحميل المنتجات",
        description: "لم نتمكن من تحميل المنتجات، يرجى المحاولة لاحقاً",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = (productId: string) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
    
    const isFavorited = !favorites.includes(productId);
    toast({
      title: isFavorited ? "❤️ تمت الإضافة للمفضلة" : "💔 تم الحذف من المفضلة",
      description: isFavorited ? "يمكنك العثور عليه في قائمة المفضلة" : "تم حذف المنتج من المفضلة",
    });
  };

  const addToCart = (product: any) => {
    toast({
      title: "🛒 تمت الإضافة للسلة",
      description: `تم إضافة ${product.name} للسلة بنجاح`,
    });
  };

  const viewProduct = (product: any) => {
    toast({
      title: `👀 عرض ${product.name}`,
      description: "جارٍ تحميل تفاصيل المنتج...",
    });
  };

  const shareProduct = (product: any) => {
    toast({
      title: "📤 مشاركة المنتج",
      description: `تم نسخ رابط ${product.name}`,
    });
  };

  const contactSeller = (product: Product) => {
    if (product.whatsapp) {
      const message = `مرحباً، أنا مهتم بالمنتج: ${product.name}`;
      const whatsappUrl = `https://wa.me/${product.whatsapp.replace('+', '')}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      
      toast({
        title: "📞 التواصل مع البائع",
        description: `تم فتح واتساب للتواصل مع البائع`,
      });
    } else {
      toast({
        title: "❌ لا يتوفر واتساب",
        description: "لم يقم البائع بإضافة رقم واتساب",
        variant: "destructive"
      });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold font-arabic mb-4 text-transparent bg-clip-text bg-gradient-primary">
            🛍️ أحدث المنتجات المميزة
          </h2>
          <p className="text-lg text-muted-foreground font-arabic max-w-2xl mx-auto">
            اكتشف مجموعة متنوعة من المنتجات عالية الجودة بأفضل الأسعار
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['🔥 الأكثر طلباً', '✨ جديد', '💱 للمبادلة', '💰 عروض', '⭐ مميز'].map((filter, index) => (
            <Button
              key={index}
              variant="outline"
              className="font-arabic bg-card-glass border-card-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-16">
            <div className="animate-spin text-6xl mb-4">⏳</div>
            <p className="text-lg font-arabic text-muted-foreground">جارٍ تحميل المنتجات...</p>
          </div>
        ) : (
          <>
            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group bg-card-glass backdrop-blur-md border-card-border hover:shadow-hover transition-all duration-500 hover:scale-105 animate-fade-in relative overflow-hidden"
            >
              {/* Product Badges */}
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                {product.type === 'new' && (
                  <Badge className="bg-gradient-accent text-accent-foreground animate-pulse">
                    ✨ جديد
                  </Badge>
                )}
                {product.type === 'hot' && (
                  <Badge className="bg-gradient-primary text-primary-foreground animate-bounce-gentle">
                    🔥 مطلوب
                  </Badge>
                )}
                {product.exchange_opt && (
                  <Badge className="bg-gradient-secondary text-secondary-foreground">
                    🔄 للمبادلة
                  </Badge>
                )}
                {product.type === 'premium' && (
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                    👑 مميز
                  </Badge>
                )}
              </div>

              {/* Favorite Button */}
              <Button
                size="icon"
                variant="ghost"
                className="absolute top-4 right-4 z-10 rounded-full bg-white/80 hover:bg-white transition-all duration-300 hover:scale-110"
                onClick={() => toggleFavorite(product.id)}
              >
                <Heart 
                  className={`h-5 w-5 transition-colors duration-300 ${
                    favorites.includes(product.id) 
                      ? 'text-red-500 fill-red-500' 
                      : 'text-gray-400'
                  }`} 
                />
              </Button>

              <CardContent className="p-0">
                {/* Product Image */}
                <div 
                  className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center cursor-pointer group-hover:scale-110 transition-transform duration-300"
                  onClick={() => viewProduct(product)}
                >
                  {product.image_url ? (
                    <img 
                      src={product.image_url} 
                      alt={product.name || 'منتج'} 
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  ) : (
                    <div className="text-8xl">📦</div>
                  )}
                </div>

                <div className="p-6">
                  {/* Product Info */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg font-arabic mb-1 group-hover:text-primary transition-colors duration-300">
                        {product.name || 'منتج بدون اسم'}
                      </h3>
                      <p className="text-sm text-muted-foreground font-arabic">
                        📂 {product.category || 'غير محدد'}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating || 0)
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium">{product.rating || 0}</span>
                    <span className="text-sm text-muted-foreground">
                      تقييم
                    </span>
                  </div>

                  {/* Seller Info */}
                  <div className="text-sm text-muted-foreground font-arabic mb-4">
                    <p>📍 الموقع: {product.location || 'غير محدد'}</p>
                    {product.condition && <p>📋 الحالة: {product.condition}</p>}
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-primary font-arabic">
                        {product.price || 'السعر غير محدد'}
                      </span>
                      <span className="text-sm text-muted-foreground">جنيه</span>
                    </div>
                    {product.quantity && product.quantity > 1 && (
                      <span className="text-sm text-muted-foreground">
                        الكمية: {product.quantity}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0 flex flex-col gap-3">
                {/* Action Buttons */}
                <div className="flex gap-2 w-full">
                  <Button
                    className="flex-1 bg-gradient-primary hover:bg-gradient-accent transition-all duration-300 font-arabic"
                    onClick={() => addToCart(product)}
                  >
                    <ShoppingCart className="h-4 w-4 ml-2" />
                    إضافة للسلة
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-card-border hover:bg-card-glass transition-all duration-300 hover:scale-110"
                    onClick={() => viewProduct(product)}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-card-border hover:bg-card-glass transition-all duration-300 hover:scale-110"
                    onClick={() => shareProduct(product)}
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>

                {/* Contact Seller */}
                <Button
                  variant="outline"
                  className="w-full font-arabic border-success/50 text-success hover:bg-success hover:text-success-foreground transition-all duration-300"
                  onClick={() => contactSeller(product)}
                >
                  📞 تواصل مع البائع
                </Button>
              </CardFooter>
            </Card>
              ))}
            </div>

            {/* Empty State */}
            {products.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">📦</div>
                <h3 className="text-xl font-bold font-arabic mb-2">لا توجد منتجات حالياً</h3>
                <p className="text-muted-foreground font-arabic">ستتم إضافة منتجات جديدة قريباً</p>
              </div>
            )}
          </>
        )}

        {/* Load More */}
        {!loading && products.length > 0 && (
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="font-arabic px-8 py-4 bg-card-glass border-card-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
              onClick={fetchProducts}
            >
              📦 تحديث المنتجات
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;