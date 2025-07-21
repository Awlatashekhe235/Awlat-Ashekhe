import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: string;
  name: string;
  description?: string;
  price?: number;
  category: string;
  condition: string;
  location: string;
  image_url?: string;
  whatsapp: string;
  email?: string;
  exchange_opt: boolean;
  type: string;
  created_at: string;
}

interface SearchResultsProps {
  searchQuery: string;
  isVisible: boolean;
  onClose: () => void;
}

const SearchResults = ({ searchQuery, isVisible, onClose }: SearchResultsProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  // Real product images from Unsplash
  const productImages = [
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=400&h=300&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=300&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop&crop=center'
  ];

  useEffect(() => {
    if (searchQuery && isVisible) {
      searchProducts();
    }
  }, [searchQuery, isVisible]);

  const searchProducts = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .or(`name.ilike.%${searchQuery}%, description.ilike.%${searchQuery}%, category.ilike.%${searchQuery}%`)
        .eq('is_active', true)
        .order('created_at', { ascending: false })
        .limit(12);

      if (error) {
        toast({
          title: "❌ خطأ في البحث",
          description: error.message,
          variant: "destructive"
        });
        return;
      }

      setProducts(data || []);
    } catch (error: any) {
      toast({
        title: "❌ خطأ",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleContactSeller = (whatsapp: string, productName: string) => {
    const message = `مرحباً، أريد الاستفسار عن المنتج: ${productName}`;
    const whatsappUrl = `https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card-glass backdrop-blur-md border-card-border rounded-xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-card-border flex justify-between items-center">
          <h2 className="text-2xl font-bold font-arabic">
            🔍 نتائج البحث عن: "{searchQuery}"
          </h2>
          <Button 
            variant="outline" 
            onClick={onClose}
            className="rounded-full"
          >
            ✕
          </Button>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin text-4xl mb-4">🔄</div>
              <p className="font-arabic text-muted-foreground">جارٍ البحث...</p>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">😔</div>
              <h3 className="text-xl font-bold font-arabic mb-2">لا توجد نتائج</h3>
              <p className="font-arabic text-muted-foreground">
                لم نجد أي منتجات تطابق بحثك. جرب كلمات مختلفة أو تصفح الفئات.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <Card key={product.id} className="bg-card-glass border-card-border hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in">
                  <CardContent className="p-4">
                    <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-muted">
                      <img
                        src={product.image_url || productImages[index % productImages.length]}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.src = productImages[index % productImages.length];
                        }}
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold font-arabic text-lg line-clamp-2">{product.name}</h3>
                        <Badge variant={product.type === 'sale' ? 'default' : 'secondary'} className="text-xs">
                          {product.type === 'sale' ? '💰 للبيع' : '🔄 للمبادلة'}
                        </Badge>
                      </div>
                      
                      {product.description && (
                        <p className="text-sm text-muted-foreground font-arabic line-clamp-2">
                          {product.description}
                        </p>
                      )}
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-arabic text-muted-foreground">
                          📍 {product.location}
                        </span>
                        <Badge variant="outline" className="text-xs">
                          {product.condition === 'new' ? '✨ جديد' : 
                           product.condition === 'used' ? '📦 مستعمل' : '🔧 مُجدد'}
                        </Badge>
                      </div>
                      
                      {product.type === 'sale' && product.price && (
                        <div className="text-xl font-bold font-arabic text-primary">
                          {product.price.toLocaleString()} ج.س
                        </div>
                      )}
                      
                      <div className="flex gap-2">
                        <Button 
                          className="flex-1 bg-gradient-primary hover:bg-gradient-accent font-arabic text-sm"
                          onClick={() => handleContactSeller(product.whatsapp, product.name)}
                        >
                          💬 واتساب
                        </Button>
                        {product.email && (
                          <Button 
                            variant="outline" 
                            size="icon"
                            onClick={() => window.location.href = `mailto:${product.email}`}
                          >
                            📧
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;