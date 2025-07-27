import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ShoppingCart, User, Search, Menu, Heart, Bell } from "lucide-react";
import { useState } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { AddProductDialog } from "../dialogs/AddProductDialog";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
interface HeaderProps {
  cartItemsCount?: number;
}
export const Header = ({
  cartItemsCount = 0
}: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  return <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* الشعار والقائمة */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <img src="/lovable-uploads/e86cc04d-36b5-4502-99e2-d5e45a98983e.png" alt="أولاد الشيخ" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">
                  متجر أولاد الشيخ
                </h1>
                <span className="text-xs text-muted-foreground -mt-1">للإلكترونيات</span>
              </div>
            </div>

            {/* القائمة الرئيسية - مخفية على الموبايل */}
            <nav className="hidden md:flex items-center gap-6 ml-8">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                الرئيسية
              </Button>
              
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-primary">فئات المنتجات</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid grid-cols-2 gap-3 p-4 w-[400px]">
                        <Button variant="ghost" className="justify-start text-foreground hover:text-primary" onClick={() => window.location.href = '/categories/phones'}>
                          الهواتف الذكية
                        </Button>
                        <Button variant="ghost" className="justify-start text-foreground hover:text-primary" onClick={() => window.location.href = '/categories/computers'}>
                          أجهزة الحاسوب
                        </Button>
                        <Button variant="ghost" className="justify-start text-foreground hover:text-primary">
                          السماعات والصوتيات
                        </Button>
                        <Button variant="ghost" className="justify-start text-foreground hover:text-primary">
                          الساعات الذكية
                        </Button>
                        <Button variant="ghost" className="justify-start text-foreground hover:text-primary">
                          الكاميرات
                        </Button>
                        <Button variant="ghost" className="justify-start text-foreground hover:text-primary">
                          الإكسسوارات
                        </Button>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              
              <Button variant="ghost" className="text-foreground hover:text-primary rounded text-base" onClick={() => window.location.href = '/engineers'}>أصحاب الصيانة</Button>
              <Button variant="ghost" className="text-foreground hover:text-primary">
                العروض
              </Button>
              
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-primary">روابط سريعة</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="flex flex-col gap-2 p-4 w-[250px]">
                        <Button variant="ghost" className="justify-start text-foreground hover:text-primary">
                          من نحن
                        </Button>
                        <Button variant="ghost" className="justify-start text-foreground hover:text-primary">
                          سياسة الخصوصية
                        </Button>
                        <Button variant="ghost" className="justify-start text-foreground hover:text-primary">
                          شروط الاستخدام
                        </Button>
                        <Button variant="ghost" className="justify-start text-foreground hover:text-primary">
                          الضمان والإرجاع
                        </Button>
                        <Button variant="ghost" className="justify-start text-foreground hover:text-primary">
                          أسئلة شائعة
                        </Button>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>
          </div>

          {/* شريط البحث */}
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="ابحث عن المنتجات..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-10 bg-muted/50 border-0 focus:bg-background" />
            </div>
          </div>

          {/* أيقونات المستخدم */}
          <div className="flex items-center gap-2">
            <AddProductDialog />
            
            <LanguageSwitcher />
            
            <ThemeToggle />
            
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Heart className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Bell className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {cartItemsCount}
                </Badge>}
            </Button>

            <Button variant="default" size="sm" className="gap-2" onClick={() => window.location.href = '/auth'}>
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">دخول</span>
            </Button>
          </div>
        </div>
      </div>
    </header>;
};