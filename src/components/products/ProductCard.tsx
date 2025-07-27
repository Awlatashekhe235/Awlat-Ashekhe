import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Heart, ShoppingCart, Star, Eye } from "lucide-react";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  nameEn: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  category: string;
  isNew?: boolean;
  isOnSale?: boolean;
  discount?: number;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (productId: string) => void;
  onToggleFavorite?: (productId: string) => void;
}

export const ProductCard = ({ 
  product, 
  onAddToCart, 
  onToggleFavorite 
}: ProductCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    onToggleFavorite?.(product.id);
  };

  const handleAddToCart = () => {
    onAddToCart?.(product.id);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ar-SA', {
      style: 'currency',
      currency: 'SAR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="group relative overflow-hidden bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
      {/* الشارات */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {product.isNew && (
          <Badge className="bg-gradient-secondary text-secondary-foreground shadow-sm">
            جديد
          </Badge>
        )}
        {product.isOnSale && product.discount && (
          <Badge variant="destructive" className="shadow-sm">
            خصم {product.discount}%
          </Badge>
        )}
      </div>

      {/* أيقونة المفضلة */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-3 right-3 z-10 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background hover:scale-110 transition-all duration-200"
        onClick={handleToggleFavorite}
      >
        <Heart 
          className={`h-4 w-4 transition-colors ${
            isFavorite ? 'fill-red-500 text-red-500' : 'text-muted-foreground'
          }`} 
        />
      </Button>

      {/* صورة المنتج */}
      <div className="relative aspect-square overflow-hidden">
        <div className={`absolute inset-0 bg-muted animate-pulse transition-opacity duration-300 ${
          isImageLoaded ? 'opacity-0' : 'opacity-100'
        }`} />
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
            isImageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsImageLoaded(true)}
          loading="lazy"
        />
        
        {/* أزرار التفاعل عند التمرير */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <Button size="sm" variant="secondary" className="shadow-lg">
            <Eye className="h-4 w-4 mr-2" />
            عرض سريع
          </Button>
        </div>
      </div>

      <CardContent className="p-4 space-y-3">
        {/* فئة المنتج */}
        <div className="text-xs text-muted-foreground uppercase tracking-wide">
          {product.category}
        </div>

        {/* اسم المنتج */}
        <div>
          <h3 className="font-semibold text-foreground line-clamp-2 leading-tight">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            {product.nameEn}
          </p>
        </div>

        {/* التقييم */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{product.rating}</span>
          </div>
          <span className="text-xs text-muted-foreground">
            ({product.reviewCount} تقييم)
          </span>
        </div>

        {/* السعر */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={handleAddToCart}
          className="w-full gap-2 shadow-button hover:shadow-hover"
          variant="hero"
        >
          <ShoppingCart className="h-4 w-4" />
          إضافة للسلة
        </Button>
      </CardFooter>
    </Card>
  );
};