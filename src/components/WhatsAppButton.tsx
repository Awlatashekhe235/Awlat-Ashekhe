import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide button when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("مرحباً! أريد الاستفسار عن المنتجات المتاحة في موقعكم 🛒");
    const whatsappUrl = `https://wa.me/23566687837?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "📱 جارٍ فتح واتساب",
      description: "سيتم توجيهك إلى محادثة واتساب...",
    });
  };

  return (
    <div className={`fixed bottom-6 left-6 z-50 transition-all duration-500 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
    }`}>
      <Button
        onClick={handleWhatsAppClick}
        className="group relative w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-float"
        style={{
          animation: 'float 3s ease-in-out infinite, pulse-glow 2s ease-in-out infinite'
        }}
      >
        {/* WhatsApp Icon */}
        <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
          💬
        </div>
        
        {/* Ripple Effect */}
        <div className="absolute inset-0 rounded-full bg-green-400 opacity-0 group-hover:opacity-30 group-hover:scale-125 transition-all duration-300"></div>
        
        {/* Notification Badge */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-bounce">
          1
        </div>
      </Button>

      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-arabic">
        تواصل معنا عبر واتساب
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 rounded-full bg-green-500/20 blur-xl scale-150 opacity-50 animate-pulse-glow"></div>
    </div>
  );
};

export default WhatsAppButton;