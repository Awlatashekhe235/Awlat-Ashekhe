import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  Laptop, 
  Headphones, 
  Watch, 
  Camera, 
  Gamepad2,
  Tablet,
  Speaker
} from "lucide-react";

const categories = [
  {
    id: "phones",
    name: "الهواتف الذكية",
    nameEn: "Smartphones",
    icon: Smartphone,
    count: 150,
    color: "from-blue-500 to-purple-600"
  },
  {
    id: "laptops", 
    name: "أجهزة الحاسوب",
    nameEn: "Laptops & PCs",
    icon: Laptop,
    count: 85,
    color: "from-green-500 to-teal-600"
  },
  {
    id: "audio",
    name: "الصوتيات",
    nameEn: "Audio & Headphones", 
    icon: Headphones,
    count: 120,
    color: "from-purple-500 to-pink-600"
  },
  {
    id: "wearables",
    name: "الأجهزة القابلة للارتداء",
    nameEn: "Smartwatches",
    icon: Watch,
    count: 65,
    color: "from-orange-500 to-red-600"
  },
  {
    id: "cameras",
    name: "الكاميرات",
    nameEn: "Cameras & Photography",
    icon: Camera,
    count: 45,
    color: "from-indigo-500 to-blue-600"
  },
  {
    id: "gaming",
    name: "ألعاب الفيديو",
    nameEn: "Gaming",
    icon: Gamepad2,
    count: 95,
    color: "from-red-500 to-pink-600"
  },
  {
    id: "tablets",
    name: "الأجهزة اللوحية",
    nameEn: "Tablets",
    icon: Tablet,
    count: 40,
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: "speakers",
    name: "السماعات",
    nameEn: "Speakers",
    icon: Speaker,
    count: 75,
    color: "from-yellow-500 to-orange-600"
  }
];

export const CategoriesSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            تسوق حسب الفئة
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            اكتشف مجموعة واسعة من المنتجات التقنية المصنفة بعناية لتسهيل عملية البحث والتسوق
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            
            return (
              <Card 
                key={category.id}
                className="group cursor-pointer bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <CardContent className="p-6 text-center space-y-4">
                  {/* أيقونة الفئة */}
                  <div className="relative">
                    <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    {/* عدد المنتجات */}
                    <Badge 
                      variant="secondary" 
                      className="absolute -top-2 -right-2 bg-background border shadow-sm"
                    >
                      {category.count}
                    </Badge>
                  </div>

                  {/* اسم الفئة */}
                  <div className="space-y-1">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.nameEn}
                    </p>
                  </div>

                  {/* زر التسوق */}
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    تسوق الآن
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* زر عرض جميع الفئات */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="gap-2 shadow-button">
            عرض جميع الفئات
            <Smartphone className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};