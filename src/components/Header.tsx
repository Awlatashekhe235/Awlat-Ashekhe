import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  ShoppingCart, 
  User, 
  Globe, 
  Sun, 
  Moon,
  Plus,
  Menu,
  Heart,
  Bell
} from "lucide-react";
import AddProductDialog from "./AddProductDialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/hooks/useTranslation";
import SearchResults from "./SearchResults";

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const { toast } = useToast();
  const { t, currentLanguage, changeLanguage } = useTranslation();

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
    toast({
      title: isDark ? t('theme.light_mode') : t('theme.dark_mode'),
      description: isDark ? t('theme.light_activated') : t('theme.dark_activated'),
    });
  };

  const handleLanguageChange = (lang: 'ar' | 'en' | 'fr') => {
    changeLanguage(lang);
    toast({
      title: t('language.changed'),
      description: `${t('language.current')} ${t(`language.${lang === 'ar' ? 'arabic' : lang === 'en' ? 'english' : 'french'}`)}`,
    });
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setShowSearchResults(true);
      toast({
        title: t('search.searching'),
        description: `${t('search.search_for')} ${searchQuery}`,
      });
    }
  };

  const languages = [
    { code: 'ar', name: 'العربية', flag: '🇸🇩' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-glass backdrop-blur-md border-card-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4 space-x-reverse">
          <h1 className="text-2xl font-bold font-arabic bg-gradient-primary bg-clip-text text-transparent animate-pulse-glow">
            {t('header.logo')}
          </h1>
          <Badge className="bg-success text-success-foreground text-xs">{t('header.first_in_sudan')}</Badge>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <Input
              placeholder={t('header.search_placeholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              className="pl-12 bg-card-glass border-card-border backdrop-blur-sm text-right font-arabic"
            />
            <Button
              size="sm"
              onClick={handleSearch}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 bg-gradient-primary hover:bg-gradient-accent transition-all duration-300 hover:scale-110"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4 space-x-reverse">
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className="rounded-full bg-muted-glass hover:bg-card-glass transition-all duration-300 hover:scale-110"
              >
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-card backdrop-blur-md border-card-border min-w-40">
              {languages.map((lang) => (
                <DropdownMenuItem 
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code as 'ar' | 'en' | 'fr')}
                  className={`cursor-pointer font-arabic hover:bg-primary/10 ${currentLanguage === lang.code ? 'bg-primary/20' : ''}`}
                >
                  <span className="ml-2">{lang.flag}</span>
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full bg-muted-glass hover:bg-card-glass transition-all duration-300 hover:scale-110"
          >
            {isDark ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-blue-500" />}
          </Button>

          {/* Add Product */}
          <AddProductDialog />

          {/* Notifications */}
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-muted-glass hover:bg-card-glass transition-all duration-300 hover:scale-110 relative"
          >
            <Bell className="h-5 w-5" />
            <Badge className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 flex items-center justify-center bg-destructive text-destructive-foreground text-xs animate-pulse">
              3
            </Badge>
          </Button>

          {/* Favorites */}
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-muted-glass hover:bg-card-glass transition-all duration-300 hover:scale-110"
          >
            <Heart className="h-5 w-5 text-red-500" />
          </Button>

          {/* Cart */}
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-muted-glass hover:bg-card-glass transition-all duration-300 hover:scale-110 relative"
          >
            <ShoppingCart className="h-5 w-5" />
            <Badge className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 flex items-center justify-center bg-accent text-accent-foreground text-xs animate-pulse">
              2
            </Badge>
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className="rounded-full bg-muted-glass hover:bg-card-glass transition-all duration-300 hover:scale-110"
              >
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-card backdrop-blur-md border-card-border min-w-48">
              <DropdownMenuItem className="font-arabic cursor-pointer hover:bg-primary/10" onClick={() => window.location.href = '/auth'}>
                {t('header.login')}
              </DropdownMenuItem>
              <DropdownMenuItem className="font-arabic cursor-pointer hover:bg-primary/10">
                {t('header.profile')}
              </DropdownMenuItem>
              <DropdownMenuItem className="font-arabic cursor-pointer hover:bg-primary/10">
                {t('header.orders')}
              </DropdownMenuItem>
              <DropdownMenuItem className="font-arabic cursor-pointer hover:bg-primary/10">
                {t('header.settings')}
              </DropdownMenuItem>
              <DropdownMenuItem className="font-arabic cursor-pointer hover:bg-primary/10">
                {t('header.notifications_settings')}
              </DropdownMenuItem>
              <DropdownMenuItem className="font-arabic cursor-pointer hover:bg-primary/10">
                {t('header.theme_settings')}
              </DropdownMenuItem>
              <DropdownMenuItem className="font-arabic cursor-pointer hover:bg-primary/10">
                {t('header.privacy_security')}
              </DropdownMenuItem>
              <DropdownMenuItem className="font-arabic cursor-pointer hover:bg-primary/10">
                {t('header.logout')}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full bg-muted-glass hover:bg-card-glass transition-all duration-300"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      <SearchResults 
        searchQuery={searchQuery}
        isVisible={showSearchResults}
        onClose={() => setShowSearchResults(false)}
      />
    </header>
  );
};

export default Header;