
type Translations = {
  [key: string]: {
    [key: string]: string;
  };
};

const translations: Translations = {
  ar: {
    // Navigation
    home: "الرئيسية",
    map: "خريطة المياه",
    dashboard: "لوحة التحكم",
    education: "التعليم والتوعية",
    contact: "اتصل بنا",
    about: "عن المنصة",
    
    // Hero Section
    heroTitle: "نصل المياه النقية إلى كل منزل",
    heroSubtitle: "منصة مبتكرة لتحسين إدارة المياه في المناطق النائية بجنوب شرق المغرب",
    getStarted: "ابدأ الآن",
    learnMore: "اكتشف المزيد",
    
    // Stats Section
    statsTitle: "تأثيرنا في أرقام",
    communitiesServed: "المجتمعات المستفيدة",
    waterAccessImproved: "تحسين الوصول للمياه",
    waterSaved: "المياه الموفرة سنوياً",
    
    // Features Section
    featuresTitle: "كيف تساعد منصتنا",
    dataManagement: "إدارة البيانات والتخطيط",
    dataManagementDesc: "جمع وتحليل البيانات حول نقاط المياه الموجودة وحالتها واستخدامها",
    educationFeature: "التدريب والتوعية",
    educationDesc: "توفير موارد تعليمية حول النظافة والاستخدام الرشيد للمياه",
    innovation: "الابتكار والتكنولوجيا",
    innovationDesc: "تسهيل اعتماد حلول مبتكرة مثل إعادة استخدام المياه المعالجة للري",
    community: "التنسيق والمشاركة المجتمعية",
    communityDesc: "إنشاء منتدى للنقاش لتسهيل التنسيق بين مختلف الجهات الفاعلة في قطاع المياه",
    
    // Map Section
    mapTitle: "خريطة الوصول إلى المياه",
    mapDesc: "استكشف نقاط المياه في منطقتك",
    waterMap: "خريطة المياه",
    waterData: "بيانات المياه",
    
    // Water Data Panel
    analytics: "التحليلات",
    waterPoints: "نقاط المياه",
    waterQuality: "جودة المياه",
    filter: "تصفية",
    search: "بحث",
    download: "تنزيل",
    
    // Education Section
    educationResourcesTitle: "موارد التعليم والتوعية",
    viewAllResources: "عرض جميع الموارد",
    
    // Footer
    rights: "جميع الحقوق محفوظة",
    
    // Language
    language: "اللغة",
    arabic: "العربية",
    french: "الفرنسية",
    english: "الإنجليزية"
  },
  fr: {
    // Navigation
    home: "Accueil",
    map: "Carte des Eaux",
    dashboard: "Tableau de Bord",
    education: "Éducation et Sensibilisation",
    contact: "Contact",
    about: "À Propos",
    
    // Hero Section
    heroTitle: "Apporter de l'eau propre à chaque foyer",
    heroSubtitle: "Une plateforme innovante pour améliorer la gestion de l'eau dans les régions isolées du Sud-Est du Maroc",
    getStarted: "Commencer",
    learnMore: "En savoir plus",
    
    // Stats Section
    statsTitle: "Notre impact en chiffres",
    communitiesServed: "Communautés servies",
    waterAccessImproved: "Accès à l'eau amélioré",
    waterSaved: "Eau économisée par an",
    
    // Features Section
    featuresTitle: "Comment notre plateforme aide",
    dataManagement: "Gestion des données et planification",
    dataManagementDesc: "Collecter et analyser des données sur les points d'eau existants, leur état et leur utilisation",
    educationFeature: "Formation et sensibilisation",
    educationDesc: "Fournir des ressources éducatives sur l'hygiène et l'utilisation rationnelle de l'eau",
    innovation: "Innovation et technologie",
    innovationDesc: "Faciliter l'adoption de solutions innovantes comme la réutilisation des eaux usées traitées pour l'irrigation",
    community: "Coordination et participation communautaire",
    communityDesc: "Créer un forum de discussion pour faciliter la coordination entre les différents acteurs du secteur de l'eau",
    
    // Map Section
    mapTitle: "Carte d'accès à l'eau",
    mapDesc: "Explorez les points d'eau dans votre région",
    waterMap: "Carte de l'eau",
    waterData: "Données sur l'eau",
    
    // Water Data Panel
    analytics: "Analyses",
    waterPoints: "Points d'eau",
    waterQuality: "Qualité de l'eau",
    filter: "Filtrer",
    search: "Rechercher",
    download: "Télécharger",
    
    // Education Section
    educationResourcesTitle: "Ressources éducatives et de sensibilisation",
    viewAllResources: "Voir toutes les ressources",
    
    // Footer
    rights: "Tous droits réservés",
    
    // Language
    language: "Langue",
    arabic: "Arabe",
    french: "Français",
    english: "Anglais"
  },
  en: {
    // Navigation
    home: "Home",
    map: "Water Map",
    dashboard: "Dashboard",
    education: "Education & Awareness",
    contact: "Contact",
    about: "About",
    
    // Hero Section
    heroTitle: "Bringing Clean Water to Every Home",
    heroSubtitle: "An innovative platform to improve water management in remote areas of South-Eastern Morocco",
    getStarted: "Get Started",
    learnMore: "Learn More",
    
    // Stats Section
    statsTitle: "Our Impact in Numbers",
    communitiesServed: "Communities Served",
    waterAccessImproved: "Water Access Improved",
    waterSaved: "Water Saved Yearly",
    
    // Features Section
    featuresTitle: "How Our Platform Helps",
    dataManagement: "Data Management & Planning",
    dataManagementDesc: "Collect and analyze data on existing water points, their condition and usage",
    educationFeature: "Training & Awareness",
    educationDesc: "Provide educational resources on hygiene and rational water use",
    innovation: "Innovation & Technology",
    innovationDesc: "Facilitate the adoption of innovative solutions such as treated wastewater reuse for irrigation",
    community: "Coordination & Community Participation",
    communityDesc: "Create a discussion forum to facilitate coordination between different water sector stakeholders",
    
    // Map Section
    mapTitle: "Water Access Map",
    mapDesc: "Explore water points in your area",
    waterMap: "Water Map",
    waterData: "Water Data",
    
    // Water Data Panel
    analytics: "Analytics",
    waterPoints: "Water Points",
    waterQuality: "Water Quality",
    filter: "Filter",
    search: "Search",
    download: "Download",
    
    // Education Section
    educationResourcesTitle: "Education & Awareness Resources",
    viewAllResources: "View All Resources",
    
    // Footer
    rights: "All Rights Reserved",
    
    // Language
    language: "Language",
    arabic: "Arabic",
    french: "French",
    english: "English"
  }
};

export type Language = 'ar' | 'fr' | 'en';

export const getTranslation = (lang: Language, key: string): string => {
  return translations[lang][key] || key;
};

export const availableLanguages: { code: Language; name: string }[] = [
  { code: 'ar', name: 'العربية' },
  { code: 'fr', name: 'Français' },
  { code: 'en', name: 'English' }
];

export default translations;
