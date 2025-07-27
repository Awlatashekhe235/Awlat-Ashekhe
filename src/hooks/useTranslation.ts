import { useState } from 'react';

type Language = 'ar' | 'en' | 'fr';

interface Translations {
  [key: string]: {
    ar: string;
    en: string;
    fr: string;
  };
}

const translations: Translations = {
  // Header translations
  'header.logo': {
    ar: '🛍️ أولاد الشيخ',
    en: '🛍️ Awlad Al-Sheikh',
    fr: '🛍️ Awlad Al-Sheikh'
  },
  'header.first_in_sudan': {
    ar: 'الأول في السودان',
    en: 'First in Sudan',
    fr: 'Premier au Soudan'
  },
  'header.search_placeholder': {
    ar: '🔍 ابحث عن المنتجات...',
    en: '🔍 Search for products...',
    fr: '🔍 Rechercher des produits...'
  },
  'header.login': {
    ar: '🔐 تسجيل الدخول',
    en: '🔐 Login',
    fr: '🔐 Connexion'
  },
  'header.profile': {
    ar: '👤 الملف الشخصي',
    en: '👤 Profile',
    fr: '👤 Profil'
  },
  'header.orders': {
    ar: '📦 طلباتي',
    en: '📦 My Orders',
    fr: '📦 Mes Commandes'
  },
  'header.settings': {
    ar: '⚙️ الإعدادات العامة',
    en: '⚙️ General Settings',
    fr: '⚙️ Paramètres Généraux'
  },
  'header.notifications_settings': {
    ar: '🔔 إعدادات الإشعارات',
    en: '🔔 Notification Settings',
    fr: '🔔 Paramètres de Notification'
  },
  'header.theme_settings': {
    ar: '🎨 إعدادات المظهر',
    en: '🎨 Theme Settings',
    fr: '🎨 Paramètres de Thème'
  },
  'header.privacy_security': {
    ar: '🔒 الخصوصية والأمان',
    en: '🔒 Privacy & Security',
    fr: '🔒 Confidentialité et Sécurité'
  },
  'header.logout': {
    ar: '🚪 تسجيل الخروج',
    en: '🚪 Logout',
    fr: '🚪 Déconnexion'
  },
  
  // Footer translations
  'footer.newsletter_title': {
    ar: '📧 اشترك في النشرة الإخبارية',
    en: '📧 Subscribe to Newsletter',
    fr: '📧 S\'abonner à la Newsletter'
  },
  'footer.newsletter_desc': {
    ar: 'احصل على أحدث العروض والمنتجات الجديدة',
    en: 'Get the latest offers and new products',
    fr: 'Obtenez les dernières offres et nouveaux produits'
  },
  'footer.subscribe_btn': {
    ar: 'اشتراك ✨',
    en: 'Subscribe ✨',
    fr: 'S\'abonner ✨'
  },
  'footer.email_placeholder': {
    ar: 'أدخل بريدك الإلكتروني',
    en: 'Enter your email',
    fr: 'Entrez votre email'
  },
  'footer.quick_links': {
    ar: '🔗 روابط سريعة',
    en: '🔗 Quick Links',
    fr: '🔗 Liens Rapides'
  },
  'footer.main_categories': {
    ar: '📂 الفئات الرئيسية',
    en: '📂 Main Categories',
    fr: '📂 Catégories Principales'
  },
  'footer.follow_us': {
    ar: '🌐 تابعنا',
    en: '🌐 Follow Us',
    fr: '🌐 Suivez-nous'
  },
  'footer.payment_methods': {
    ar: '💳 طرق الدفع',
    en: '💳 Payment Methods',
    fr: '💳 Méthodes de Paiement'
  },
  
  // Languages
  'language.arabic': {
    ar: 'العربية',
    en: 'العربية',
    fr: 'العربية'
  },
  'language.english': {
    ar: 'English',
    en: 'English',
    fr: 'English'
  },
  'language.french': {
    ar: 'Français',
    en: 'Français',
    fr: 'Français'
  },
  
  // Theme messages
  'theme.dark_mode': {
    ar: '🌙 الوضع الليلي',
    en: '🌙 Dark Mode',
    fr: '🌙 Mode Sombre'
  },
  'theme.light_mode': {
    ar: '🌞 الوضع النهاري',
    en: '🌞 Light Mode',
    fr: '🌞 Mode Clair'
  },
  'theme.dark_activated': {
    ar: 'تم تفعيل الوضع الليلي',
    en: 'Dark mode activated',
    fr: 'Mode sombre activé'
  },
  'theme.light_activated': {
    ar: 'تم تفعيل الوضع النهاري',
    en: 'Light mode activated',
    fr: 'Mode clair activé'
  },
  
  // Search
  'search.searching': {
    ar: '🔍 جارٍ البحث...',
    en: '🔍 Searching...',
    fr: '🔍 Recherche en cours...'
  },
  'search.search_for': {
    ar: 'البحث عن:',
    en: 'Searching for:',
    fr: 'Recherche de:'
  },
  
  // Language change
  'language.changed': {
    ar: '🌍 تم تغيير اللغة',
    en: '🌍 Language Changed',
    fr: '🌍 Langue Changée'
  },
  'language.current': {
    ar: 'اللغة الحالية:',
    en: 'Current language:',
    fr: 'Langue actuelle:'
  }
};

export const useTranslation = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('ar');

  const t = (key: string): string => {
    return translations[key]?.[currentLanguage] || key;
  };

  const changeLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    // Update document direction based on language
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  return {
    t,
    currentLanguage,
    changeLanguage
  };
};