import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const handleQuickLinkClick = (link: string) => {
    if (link.includes('الرئيسية')) {
      window.location.href = '/';
    } else if (link.includes('من نحن')) {
      window.location.href = '/about';
    } else if (link.includes('الصيانة')) {
      window.location.href = '/maintenance';
    } else if (link.includes('المبادلة')) {
      window.location.href = '/exchange';
    } else if (link.includes('الألعاب')) {
      window.location.href = '/games';
    } else if (link.includes('تواصل معنا')) {
      window.open('https://wa.me/23566687837', '_blank');
    }
  };

  const socialLinks = [
    { name: "LinkedIn", icon: "💼", url: "https://www.linkedin.com/in/hamza-macki-" },
    { name: "Messenger", icon: "💬", url: "https://m.me/hamzamacki235" },
    { name: "YouTube", icon: "📺", url: "https://www.youtube.com/@Awladashekhe" },
    { name: "TikTok", icon: "🎵", url: "https://www.tiktok.com/@hamzamacki235?_t=ZM-8xvz4Fo93Mk&_r=1" },
    { name: "X (Twitter)", icon: "🐦", url: "https://x.com/Hamzamacki1?t=LBvD2sgjONZd4DwWzIS6RQ&s=09" },
    { name: "Facebook", icon: "📘", url: "https://www.facebook.com/share/1M5Pjmq9Tb/" },
    { name: "Instagram", icon: "📸", url: "https://www.instagram.com/hamzamacki235t?igsh=MXFpbjF4d2Flb211eA==" }
  ];

  const bankIcons = [
    { name: "ECOBANK", icon: "🏦", color: "text-green-600" },
    { name: "UBA", icon: "🏧", color: "text-red-600" },
    { name: "بنك الخرطوم", icon: "🏛️", color: "text-blue-600" }
  ];

  const categories = [
    "📱 الهواتف والإكسسوارات",
    "💻 الكمبيوترات واللابتوبات", 
    "🏠 الأجهزة المنزلية",
    "🎮 الألعاب والترفيه",
    "👕 الملابس والموضة",
    "🚗 السيارات والمركبات"
  ];

  const quickLinks = [
    "🏠 الرئيسية",
    "ℹ️ من نحن",
    "📞 تواصل معنا",
    "🔧 الصيانة",
    "🔄 المبادلة",
    "🎮 الألعاب",
    "📋 سياسة الخصوصية",
    "📜 شروط الاستخدام"
  ];

  return (
    <footer className="relative bg-gradient-to-br from-background via-muted/30 to-card/50 border-t border-card-border">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-30"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Newsletter Section */}
        <Card className="mb-12 bg-gradient-primary text-primary-foreground border-0 shadow-primary animate-fade-in">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold font-arabic mb-4 flex items-center justify-center gap-2">
              📧 اشترك في النشرة الإخبارية
            </h3>
            <p className="mb-6 font-arabic opacity-90">
              احصل على أحدث العروض والمنتجات الجديدة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/70 font-arabic text-right"
              />
              <Button
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 font-arabic px-6"
              >
                اشتراك ✨
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-bold font-arabic text-primary mb-4 flex items-center gap-2">
                <img 
                  src="/lovable-uploads/33817c84-36b0-4930-b40c-2ac38fd2c539.png" 
                  alt="أولاد الشيخ حمزه مكي" 
                  className="w-8 h-8 rounded-full"
                />
                أولاد الشيخ حمزه مكي
              </h3>
              <p className="text-muted-foreground font-arabic leading-relaxed">
                منصتك الموثوقة للتجارة الإلكترونية في السودان وتشاد. نوفر لك أفضل المنتجات بأسعار منافسة مع خدمة عملاء استثنائية.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 font-arabic">
                <span>📧</span>
                <span>walmacki235@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 font-arabic">
                <span>📱</span>
                <span>+235 66 68 78 37</span>
              </div>
              <div className="flex items-center gap-2 font-arabic">
                <span>📍</span>
                <span>جمهورية تشاد - السودان</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in">
            <h4 className="text-lg font-bold font-arabic mb-6 text-primary">
              🔗 روابط سريعة
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-right justify-start font-arabic text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
                    onClick={() => handleQuickLinkClick(link)}
                  >
                    {link}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="animate-fade-in">
            <h4 className="text-lg font-bold font-arabic mb-6 text-primary">
              📂 الفئات الرئيسية
            </h4>
            <ul className="space-y-3">
              {categories.map((category, index) => (
                <li key={index}>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-right justify-start font-arabic text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {category}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Banks */}
          <div className="animate-slide-in-right">
            <h4 className="text-lg font-bold font-arabic mb-6 text-primary">
              🌐 تابعنا
            </h4>
            <div className="flex flex-wrap gap-3 mb-8">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  size="icon"
                  variant="outline"
                  className="rounded-full bg-card-glass border-card-border hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300"
                  onClick={() => window.open(social.url, '_blank')}
                >
                  <span className="text-lg">{social.icon}</span>
                </Button>
              ))}
            </div>

            <h4 className="text-lg font-bold font-arabic mb-4 text-primary">
              💳 طرق الدفع
            </h4>
            <div className="flex gap-3">
              {bankIcons.map((bank, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className={`${bank.color} border-current hover:bg-current hover:text-white transition-all duration-300 font-arabic`}
                >
                  <span className="ml-2">{bank.icon}</span>
                  {bank.name}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <Separator className="mb-8 bg-card-border" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <div className="text-center md:text-right font-arabic">
            <p>© 2024 سوق التجارة الإلكترونية. جميع الحقوق محفوظة.</p>
            <p className="mt-2">صُمم بـ ❤️ في السودان وتشاد</p>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="font-arabic text-muted-foreground hover:text-primary">
              سياسة الخصوصية
            </Button>
            <Button variant="ghost" size="sm" className="font-arabic text-muted-foreground hover:text-primary">
              شروط الاستخدام
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 text-3xl animate-float opacity-30">🛍️</div>
        <div className="absolute top-20 right-20 text-2xl animate-bounce-gentle opacity-30">💎</div>
      </div>
    </footer>
  );
};

export default Footer;