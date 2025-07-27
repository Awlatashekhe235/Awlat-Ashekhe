import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowLeft, Zap, Shield, Truck } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

export const HeroSection = () => {
  const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=1920&auto=format&fit=crop",
      alt: "هواتف ذكية متطورة",
      title: "هواتف ذكية متطورة",
      subtitle: "أحدث التقنيات والابتكارات"
    },
    {
      src: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1920&auto=format&fit=crop",
      alt: "حواسيب محمولة عالية الأداء",
      title: "حواسيب محمولة عالية الأداء",
      subtitle: "لجميع احتياجاتك المهنية والشخصية"
    },
    {
      src: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1920&auto=format&fit=crop",
      alt: "ساعات ذكية متقدمة",
      title: "ساعات ذكية متقدمة",
      subtitle: "اتبع نشاطك اليومي بذكاء"
    },
    {
      src: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1920&auto=format&fit=crop",
      alt: "سماعات عالية الجودة",
      title: "سماعات عالية الجودة",
      subtitle: "تجربة صوتية استثنائية"
    },
    {
      src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1920&auto=format&fit=crop",
      alt: "كاميرات احترافية",
      title: "كاميرات احترافية",
      subtitle: "احفظ لحظاتك بأعلى جودة"
    }
  ];

  return (
    <section className="relative overflow-hidden min-h-screen">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full h-full"
      >
        <CarouselContent>
          {heroImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative min-h-screen">
                {/* صورة الخلفية */}
                <div className="absolute inset-0">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                </div>
                
                {/* المحتوى */}
                <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 min-h-screen flex items-center">
                  <div className="max-w-2xl text-white space-y-8">
                    <div className="space-y-4">
                      <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                        <Zap className="h-4 w-4 mr-2" />
                        أحدث التقنيات
                      </Badge>
                      
                      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        أفضل متجر
                        <br />
                        <span className="text-secondary">للإلكترونيات</span>
                      </h1>
                      
                      <p className="text-lg md:text-xl text-white/90">
                        اكتشف أحدث الهواتف والحاسوب والإكسسوارات التقنية بأفضل الأسعار والجودة العالية
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button size="xl" variant="secondary" className="gap-2 shadow-lg hover:shadow-xl">
                        تسوق الآن
                        <ArrowLeft className="h-5 w-5" />
                      </Button>
                      
                      <Button size="xl" variant="outline" className="gap-2 bg-white/10 border-white/30 text-white hover:bg-white/20">
                        استكشف المنتجات
                      </Button>
                    </div>

                    {/* المميزات */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                          <Truck className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold">شحن مجاني</p>
                          <p className="text-sm text-white/80">للطلبات أكثر من 500 ريال</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                          <Shield className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold">ضمان شامل</p>
                          <p className="text-sm text-white/80">على جميع المنتجات</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                          <Zap className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold">خدمة سريعة</p>
                          <p className="text-sm text-white/80">دعم فني 24/7</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="left-4 bg-white/20 border-white/30 text-white hover:bg-white/30" />
        <CarouselNext className="right-4 bg-white/20 border-white/30 text-white hover:bg-white/30" />
      </Carousel>
    </section>
  );
};