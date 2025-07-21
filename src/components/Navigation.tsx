import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useToast } from "@/hooks/use-toast";

const Navigation = () => {
  const { toast } = useToast();

  const categories = [
    {
      name: "📱 الهواتف والإكسسوارات",
      icon: "📱",
      subcategories: [
        "📱 الهواتف الذكية",
        "⌚ الساعات الذكية", 
        "🎧 السماعات",
        "🔌 الشواحن والكابلات",
        "📷 كاميرات الهواتف"
      ]
    },
    {
      name: "💻 الكمبيوترات واللابتوبات",
      icon: "💻",
      subcategories: [
        "💻 أجهزة الكمبيوتر",
        "⌨️ لوحات المفاتيح",
        "🖱️ الفئران",
        "🖥️ الشاشات",
        "💾 وحدات التخزين"
      ]
    },
    {
      name: "🏠 الأجهزة المنزلية",
      icon: "🏠",
      subcategories: [
        "📺 أجهزة التلفزيون",
        "❄️ الثلاجات",
        "🌀 الغسالات",
        "🔥 المكيفات",
        "☕ أجهزة المطبخ"
      ]
    },
    {
      name: "🎮 الألعاب والترفيه",
      icon: "🎮",
      subcategories: [
        "🎮 أجهزة الألعاب",
        "🎯 الألعاب",
        "🎵 الأنظمة الصوتية",
        "📚 الكتب الإلكترونية",
        "🎬 الأفلام والمسلسلات"
      ]
    },
    {
      name: "👕 الملابس والموضة",
      icon: "👕",
      subcategories: [
        "👔 ملابس رجالية",
        "👗 ملابس نسائية",
        "👶 ملابس أطفال",
        "👟 الأحذية",
        "💍 الإكسسوارات"
      ]
    },
    {
      name: "🚗 السيارات والمركبات",
      icon: "🚗",
      subcategories: [
        "🚗 السيارات",
        "🏍️ الدراجات النارية",
        "🚲 الدراجات الهوائية",
        "🔧 قطع الغيار",
        "⛽ الزيوت والسوائل"
      ]
    }
  ];

  const handleCategoryClick = (category: string) => {
    toast({
      title: `📂 ${category}`,
      description: "جارٍ تحميل المنتجات...",
    });
  };

  return (
    <nav className="border-b bg-gradient-glass backdrop-blur-sm border-card-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Main Categories */}
          <div className="flex items-center space-x-6 space-x-reverse overflow-x-auto">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-4 space-x-reverse">
                {categories.map((category, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuTrigger className="font-arabic text-sm bg-transparent hover:bg-card-glass transition-all duration-300 hover:scale-105">
                      <span className="ml-2">{category.icon}</span>
                      {category.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-card-glass backdrop-blur-md border-card-border">
                      <div className="grid gap-2 p-4 w-80">
                        {category.subcategories.map((sub, subIndex) => (
                          <NavigationMenuLink
                            key={subIndex}
                            className="block p-3 rounded-lg hover:bg-primary-glass transition-all duration-300 cursor-pointer font-arabic text-right"
                            onClick={() => handleCategoryClick(sub)}
                          >
                            {sub}
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Special Actions */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.location.href = '/exchange'}
              className="font-arabic bg-accent-glass hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105 animate-float"
            >
              🔄 المبادلة
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.location.href = '/maintenance'}
              className="font-arabic bg-secondary-glass hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-105"
            >
              🔧 الصيانة
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.location.href = '/games'}
              className="font-arabic bg-success/10 hover:bg-success hover:text-success-foreground transition-all duration-300 hover:scale-105"
            >
              🎮 الألعاب
            </Button>

            <Badge 
              variant="secondary" 
              className="animate-pulse-glow bg-gradient-primary text-primary-foreground font-arabic flex items-center gap-2 px-6 py-2"
            >
              <img 
                src="/lovable-uploads/33817c84-36b0-4930-b40c-2ac38fd2c539.png" 
                alt="أولاد الشيخ حمزه مكي" 
                className="w-8 h-8 rounded-full border border-white/30"
              />
              عروض اليوم
            </Badge>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;