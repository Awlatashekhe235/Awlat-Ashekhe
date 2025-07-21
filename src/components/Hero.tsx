import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import laptopImage from "@/assets/laptop.jpg";
import phoneImage from "@/assets/phone.jpg";
import electronicsImage from "@/assets/electronics.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { toast } = useToast();

  const heroSlides = [
    {
      title: "💻 أجهزة كمبيوتر وبرمجيات",
      subtitle: "اكتشف أحدث أجهزة الكمبيوتر والبرمجيات بأفضل الأسعار",
      image: laptopImage,
      gradient: "bg-gradient-primary",
      action: "تسوق الآن",
      description: "آلاف المنتجات في انتظارك"
    },
    {
      title: "📱 هواتف ذكية وملحقات",
      subtitle: "أحدث الهواتف الذكية والملحقات العصرية",
      image: phoneImage,
      gradient: "bg-gradient-secondary",
      action: "ابدأ المبادلة",
      description: "نظام مبادلة آمن ومضمون"
    },
    {
      title: "⚡ أجهزة إلكترونية متطورة",
      subtitle: "تشكيلة واسعة من الأجهزة الإلكترونية الحديثة",
      image: electronicsImage,
      gradient: "bg-gradient-accent",
      action: "اطلب صيانة",
      description: "صيانة سريعة وموثوقة"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleAction = (action: string) => {
    if (action === "تسوق الآن") {
      // Scroll to products section
      const productsSection = document.querySelector('#products-section');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (action === "ابدأ المبادلة") {
      window.location.href = '/exchange';
    } else if (action === "اطلب صيانة") {
      window.location.href = '/maintenance';
    }
    
    toast({
      title: `✨ ${action}`,
      description: "جارٍ توجيهك للصفحة المناسبة...",
    });
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 text-4xl animate-float">📱</div>
      <div className="absolute top-20 right-20 text-3xl animate-bounce-gentle">💻</div>
      <div className="absolute bottom-20 left-20 text-3xl animate-pulse-glow">🎮</div>
      <div className="absolute bottom-10 right-10 text-4xl animate-wiggle">⌚</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          {/* Main Hero Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="w-full max-w-2xl h-96 mx-auto mb-8 rounded-3xl overflow-hidden shadow-2xl animate-bounce-gentle relative">
              <img 
                src={heroSlides[currentSlide].image} 
                alt={heroSlides[currentSlide].title}
                className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-arabic text-transparent bg-clip-text bg-gradient-primary">
              {heroSlides[currentSlide].title}
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-arabic max-w-3xl mx-auto">
              {heroSlides[currentSlide].subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className={`${heroSlides[currentSlide].gradient} text-white font-arabic text-lg px-8 py-4 rounded-full hover:scale-110 transition-all duration-300 shadow-primary animate-pulse-glow`}
                onClick={() => handleAction(heroSlides[currentSlide].action)}
              >
                {heroSlides[currentSlide].action} ✨
              </Button>
              
              <Badge 
                variant="secondary" 
                className="text-lg px-6 py-2 font-arabic bg-card-glass backdrop-blur-sm animate-bounce-gentle"
              >
                {heroSlides[currentSlide].description}
              </Badge>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 space-x-reverse mt-8">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary w-8 animate-pulse-glow' 
                    : 'bg-muted hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <Card className="group bg-card-glass backdrop-blur-md border-card-border hover:bg-card transition-all duration-300 hover:scale-105 hover:shadow-hover animate-slide-in-left">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4 group-hover:animate-bounce-gentle">🚚</div>
              <h3 className="text-xl font-bold font-arabic mb-2">توصيل سريع</h3>
              <p className="text-muted-foreground font-arabic">توصيل مجاني خلال 24 ساعة</p>
            </CardContent>
          </Card>

          <Card className="group bg-card-glass backdrop-blur-md border-card-border hover:bg-card transition-all duration-300 hover:scale-105 hover:shadow-hover animate-fade-in">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4 group-hover:animate-pulse-glow">🛡️</div>
              <h3 className="text-xl font-bold font-arabic mb-2">ضمان الجودة</h3>
              <p className="text-muted-foreground font-arabic">ضمان شامل على جميع المنتجات</p>
            </CardContent>
          </Card>

          <Card className="group bg-card-glass backdrop-blur-md border-card-border hover:bg-card transition-all duration-300 hover:scale-105 hover:shadow-hover animate-slide-in-right">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4 group-hover:animate-wiggle">💳</div>
              <h3 className="text-xl font-bold font-arabic mb-2">دفع آمن</h3>
              <p className="text-muted-foreground font-arabic">طرق دفع متعددة وآمنة</p>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center animate-fade-in">
            <div className="text-3xl md:text-4xl font-bold text-primary font-arabic">+1000</div>
            <p className="text-muted-foreground font-arabic">منتج متاح</p>
          </div>
          <div className="text-center animate-fade-in">
            <div className="text-3xl md:text-4xl font-bold text-secondary font-arabic">+500</div>
            <p className="text-muted-foreground font-arabic">عميل سعيد</p>
          </div>
          <div className="text-center animate-fade-in">
            <div className="text-3xl md:text-4xl font-bold text-accent font-arabic">24/7</div>
            <p className="text-muted-foreground font-arabic">دعم فني</p>
          </div>
          <div className="text-center animate-fade-in">
            <div className="text-3xl md:text-4xl font-bold text-success font-arabic">99%</div>
            <p className="text-muted-foreground font-arabic">رضا العملاء</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;