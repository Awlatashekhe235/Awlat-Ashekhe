import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { useState, useEffect } from "react";

interface Language {
  code: string;
  name: string;
  flag: string;
  direction: string;
}

export const LanguageSwitcher = () => {
  const [currentLang, setCurrentLang] = useState<string>('ar');
  
  const languages: Language[] = [
    { code: 'ar', name: 'العربية', flag: '🇸🇦', direction: 'rtl' },
    { code: 'en', name: 'English', flag: '🇺🇸', direction: 'ltr' },
    { code: 'fr', name: 'Français', flag: '🇫🇷', direction: 'ltr' },
    { code: 'td', name: 'تشادية', flag: '🇹🇩', direction: 'rtl' }
  ];

  useEffect(() => {
    // Check for saved language preference
    const savedLang = localStorage.getItem('language');
    if (savedLang && languages.some(lang => lang.code === savedLang)) {
      setCurrentLang(savedLang);
      document.documentElement.dir = languages.find(lang => lang.code === savedLang)?.direction || 'rtl';
    }
  }, []);

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode);
    const selectedLang = languages.find(lang => lang.code === langCode);
    
    // Set document direction based on language
    if (selectedLang) {
      document.documentElement.dir = selectedLang.direction;
      localStorage.setItem('language', langCode);
    }
    
    console.log('Language changed to:', langCode);
  };

  const currentLanguage = languages.find(lang => lang.code === currentLang);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/20 transition-all duration-300"
        >
          <Globe className="h-4 w-4 text-primary" />
          <span className="absolute -top-1 -right-1 text-xs">
            {currentLanguage?.flag}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background/95 backdrop-blur-sm">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`cursor-pointer ${currentLang === language.code ? 'bg-primary/10' : ''}`}
          >
            <span className="mr-2">{language.flag}</span>
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};