import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { SocialLinks } from "./SocialLinks";

export const Footer = () => {
  return <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4">
        {/* الجزء العلوي من الفوتر */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* معلومات الموقع */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">م</span>
              </div>
              <h3 className="text-xl font-bold">متجر أولاد الشيخ</h3>
            </div>
            
            <p className="text-background/80 leading-relaxed">
              أفضل متجر إلكتروني في المنطقة للحصول على أحدث الأجهزة التقنية بأفضل الأسعار والجودة العالية.
            </p>

            <SocialLinks />
          </div>

          {/* روابط سريعة */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">روابط سريعة</h4>
            <nav className="flex flex-col gap-3">
              <Button variant="ghost" className="justify-start p-0 h-auto text-background/80 hover:text-background">
                من نحن
              </Button>
              <Button variant="ghost" className="justify-start p-0 h-auto text-background/80 hover:text-background">
                سياسة الخصوصية
              </Button>
              <Button variant="ghost" className="justify-start p-0 h-auto text-background/80 hover:text-background">
                شروط الاستخدام
              </Button>
              <Button variant="ghost" className="justify-start p-0 h-auto text-background/80 hover:text-background">
                الضمان والإرجاع
              </Button>
              <Button variant="ghost" className="justify-start p-0 h-auto text-background/80 hover:text-background">
                أسئلة شائعة
              </Button>
            </nav>
          </div>

          {/* الفئات */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">فئات المنتجات</h4>
            <nav className="flex flex-col gap-3">
              <Button variant="ghost" className="justify-start p-0 h-auto text-background/80 hover:text-background mx-0">
                الهواتف الذكية
              </Button>
              <Button variant="ghost" className="justify-start p-0 h-auto text-background/80 hover:text-background">
                أجهزة الحاسوب
              </Button>
              <Button variant="ghost" className="justify-start p-0 h-auto text-background/80 hover:text-background">
                السماعات والصوتيات
              </Button>
              <Button variant="ghost" className="justify-start p-0 h-auto text-background/80 hover:text-background">
                الساعات الذكية
              </Button>
              <Button variant="ghost" className="justify-start p-0 h-auto text-background/80 hover:text-background">
                الكاميرات
              </Button>
            </nav>
          </div>

          {/* التواصل والنشرة البريدية */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">تواصل معنا</h4>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-background/80" />
                <span className="text-background/80">+235 99 987 837</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-background/80" />
                <span className="text-background/80">awladashikhe@gmail.com</span>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-background/80" />
                <span className="text-background/80">مراية موندوا، تشاد</span>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-background/80" />
                <span className="text-background/80">دردشة مباشرة 24/7</span>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-background/80">اشترك في النشرة البريدية للحصول على آخر العروض:</p>
              <div className="flex gap-2">
                <Input placeholder="بريدك الإلكتروني" className="bg-background/10 border-background/20 text-background placeholder:text-background/60" />
                <Button variant="secondary" size="sm">
                  اشتراك
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-background/20" />

        {/* الجزء السفلي من الفوتر */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-background/70">© 2025 متجر أولاد الشيخ للإلكترونيات. جميع الحقوق محفوظة.</div>

          <div className="flex items-center gap-4">
            <Badge variant="outline" className="border-background/30 text-background/80">
              دفع آمن
            </Badge>
            <Badge variant="outline" className="border-background/30 text-background/80">
              شحن سريع
            </Badge>
            <Badge variant="outline" className="border-background/30 text-background/80">
              ضمان شامل
            </Badge>
          </div>
        </div>
      </div>
    </footer>;
};