import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, Gift, Timer, Star } from "lucide-react";
import { useState } from "react";

export const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-secondary text-secondary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10" />
      
      <div className="container mx-auto px-4 py-3 relative z-10">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Gift className="h-5 w-5 animate-pulse" />
              <Badge variant="outline" className="border-white/30 bg-white/20 text-white">
                عرض محدود
              </Badge>
            </div>
            
            <div className="flex items-center gap-2">
              <Timer className="h-4 w-4" />
              <span className="font-semibold">خصم 30% على جميع المنتجات - ينتهي خلال 24 ساعة!</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="border-white/30 bg-white/20 text-white hover:bg-white/30"
            >
              تسوق الآن
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 text-white hover:bg-white/20"
              onClick={() => setIsVisible(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};