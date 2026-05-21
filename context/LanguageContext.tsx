'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.products': 'Products',
    'nav.projects': 'Projects',
    'nav.resources': 'Resources',
    'nav.blogs': 'Blogs',
    'nav.getInTouch': 'Get in Touch',
    'nav.english': 'English',
    'nav.french': 'Français',
    
    // Home Showcase
    'showcase.title1': 'Smart Solutions For Modern Systems.',
    'showcase.title2': 'Innovative Engineering for Global Trade.',
    'showcase.title3': 'Sustainable Local Development.',
    'showcase.description': 'We help transform global opportunities into sustainable local development, from international trade to investment funding and full turnkey project delivery.',
    'showcase.exploreProjects': 'Explore our Projects',
    'showcase.getInTouch': 'Get in Touch',
    
    // Home About
    'about.title': 'About Us',
    'about.profile': 'Profile',
    'about.gallery': 'Factory Gallery',
    'about.certifications': 'Our Certification',
    'about.description': 'Bati Profils is a modern manufacturing company specializing in drywall profile systems. With advanced production technology and a skilled team, we deliver high-quality, durable, and cost-effective solutions tailored to the construction industry. Based in Douala, we are committed to serving Cameroon and the wider Central African market with reliable and innovative building systems.',
    'about.galleryDesc': 'Explore our state-of-the-art production facility and advanced machinery.',
    'about.certDesc': 'Our commitment to quality is backed by international industry standards.',
    'about.feature1': 'Fast delivery across Africa',
    'about.feature2': '5000+ Satisfied Customers',
    'about.feature3': '20+ years Industry Experience',
    'about.feature4': '100+ Employee Count',
    'about.learnMore': 'Learn more about us',

    // Hot Products
    'products.title': 'Hot Products',

    // Why Choose Products
    'choose.title': 'Why Choose Our Products?',
    'choose.reason1': 'Precision Manufacturing',
    'choose.desc1': 'Consistent quality using modern production technology',
    'choose.reason2': 'Flexible Applications',
    'choose.desc2': 'Suitable for partitions, ceilings, and cladding systems.',
    'choose.reason3': 'Cost-Efficiency',
    'choose.desc3': 'Optimised for performance, durability and affordability',
    'choose.downloadCatalogue': 'Download our Catalogue',

    // Testimonials
    'testimonials.title': 'What Customers Say',
    'testimonials.quote1': 'We have been using Bati Profils\' drywall systems on multiple projects, and the quality has been consistently excellent. The profiles are strong, lightweight, and very easy to install.',
    'testimonials.author1': 'Construction Company',
    'testimonials.location1': 'Douala, Cameroon',
    'testimonials.quote2': 'The overall experience working with Bati Profils has been very positive. From product quality to delivery timelines, everything has been handled professionally.',
    'testimonials.author2': 'Project Manager',
    'testimonials.location2': 'Libreville, Gabon',
    'testimonials.quote3': 'What stands out about Bati Profils is their commitment to reliability and service. Their team is responsive and understands the needs of large-scale construction projects.',
    'testimonials.author3': 'Engineering Consultant',
    'testimonials.location3': 'Brazzaville, Republic of Congo',

    // Featured Projects
    'projects.title': 'Featured Projects',
    'projects.project1': 'Doula Office Complex',
    'projects.desc1': 'We were entrusted with the interior partition and ceiling systems for a commercial office complex...',
    'projects.project2': 'Libreville Residential Development (Gabon)',
    'projects.desc2': 'For a high-end residential development in Libreville, we provided complete drywall profile...',
    'projects.project3': 'Bangui Education Facility (Central African Republic)',
    'projects.desc3': 'In Bangui, we delivered cost-effective drywall profile solutions for an educational facility...',
    'projects.project4': 'Malabo Hotel (Equatorial Guinea)',
    'projects.desc4': 'For a large hospitality project in Malabo, we supplied and supported the installation of...',
    'projects.seeMore': 'See more',
    'projects.explore': 'Explore our Projects',

    // Contractors
    'contractors.title': 'Why Contractors and Distributors Choose us?',
    'contractors.description': 'At Bati Profils, we combine advanced manufacturing, precision engineering, and strict quality control to deliver durable and efficient drywall profile systems.',
    'contractors.callFactory': 'Call our Factory',
    'contractors.downloadCatalogue': 'Download Catalogue',
    'contractors.collaborations': 'Collaborations',
    'contractors.trusted': 'Trusted Manufacturer in the CEMAC Region',

    // Partners
    'partners.title': 'Our Partners',

    // Footer
    'footer.cta': 'Ready to build your next project with confidence?',
    'footer.ctaDesc': 'We deliver reliable, high-performance drywall profile solutions for modern construction across Central Africa.',
    'footer.downloadCatalogue': 'Download our Catalogue',
    'footer.getInTouch': 'Get in Touch',
    'footer.aboutUs': 'About Us',
    'footer.companyProfile': 'Company profile',
    'footer.certifications': 'Technical Resources',
    'footer.media': 'Media',
    'footer.products': 'Products',
    'footer.contact': 'Contact',
    'footer.phone': '+237 6 90 12 11 35',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.products': 'Produits',
    'nav.projects': 'Projets',
    'nav.resources': 'Ressources',
    'nav.blogs': 'Blogs',
    'nav.getInTouch': 'Contactez-Nous',
    'nav.english': 'English',
    'nav.french': 'Français',
    
    // Home Showcase
    'showcase.title1': 'Des Solutions Intelligentes pour les Systèmes Modernes.',
    'showcase.title2': 'Ingénierie Innovante pour le Commerce Global.',
    'showcase.title3': 'Développement Durable Local.',
    'showcase.description': 'Nous aidons à transformer les opportunités mondiales en développement local durable, du commerce international au financement des investissements et à la livraison complète de projets clés en main.',
    'showcase.exploreProjects': 'Explorez nos Projets',
    'showcase.getInTouch': 'Contactez-Nous',
    
    // Home About
    'about.title': 'À Propos de Nous',
    'about.profile': 'Profil',
    'about.gallery': 'Galerie de l\'Usine',
    'about.certifications': 'Nos Certifications',
    'about.description': 'Bati Profils est une entreprise de fabrication moderne spécialisée dans les systèmes de profilés de cloison sèche. Avec une technologie de production avancée et une équipe compétente, nous livrons des solutions de haute qualité, durables et rentables adaptées à l\'industrie de la construction. Basée à Douala, nous nous engageons à servir le Cameroun et le marché d\'Afrique centrale plus large avec des systèmes de construction fiables et innovants.',
    'about.galleryDesc': 'Explorez nos installations de production ultramodernes et nos machines avancées.',
    'about.certDesc': 'Notre engagement envers la qualité est soutenu par les normes internationales de l\'industrie.',
    'about.feature1': 'Livraison rapide partout en Afrique',
    'about.feature2': '5000+ Clients Satisfaits',
    'about.feature3': '20+ ans d\'Expérience Industrielle',
    'about.feature4': '100+ Employés',
    'about.learnMore': 'En savoir plus sur nous',

    // Hot Products
    'products.title': 'Produits Chauds',

    // Why Choose Products
    'choose.title': 'Pourquoi Choisir Nos Produits?',
    'choose.reason1': 'Fabrication de Précision',
    'choose.desc1': 'Qualité constante grâce à la technologie de production moderne',
    'choose.reason2': 'Applications Flexibles',
    'choose.desc2': 'Adapté aux cloisons, plafonds et systèmes de revêtement.',
    'choose.reason3': 'Rentabilité',
    'choose.desc3': 'Optimisé pour les performances, la durabilité et l\'abordabilité',
    'choose.downloadCatalogue': 'Téléchargez notre Catalogue',

    // Testimonials
    'testimonials.title': 'Ce Que Disent Nos Clients',
    'testimonials.quote1': 'Nous utilisons les systèmes de cloison sèche de Bati Profils sur plusieurs projets, et la qualité a été constamment excellente. Les profils sont solides, légers et très faciles à installer.',
    'testimonials.author1': 'Entreprise de Construction',
    'testimonials.location1': 'Douala, Cameroun',
    'testimonials.quote2': 'L\'expérience globale de travail avec Bati Profils a été très positive. De la qualité des produits aux délais de livraison, tout a été géré de manière professionnelle.',
    'testimonials.author2': 'Chef de Projet',
    'testimonials.location2': 'Libreville, Gabon',
    'testimonials.quote3': 'Ce qui se démarque chez Bati Profils, c\'est leur engagement envers la fiabilité et le service. Leur équipe est réactive et comprend les besoins des grands projets de construction.',
    'testimonials.author3': 'Consultant en Ingénierie',
    'testimonials.location3': 'Brazzaville, République du Congo',

    // Featured Projects
    'projects.title': 'Projets en Vedette',
    'projects.project1': 'Complexe de Bureaux de Douala',
    'projects.desc1': 'Nous avons été chargés des systèmes de cloisons intérieures et de plafonds pour un complexe de bureaux commercial...',
    'projects.project2': 'Développement Résidentiel de Libreville (Gabon)',
    'projects.desc2': 'Pour un développement résidentiel haut de gamme à Libreville, nous avons fourni des profilés de cloison sèche complets...',
    'projects.project3': 'Établissement Éducatif de Bangui (République Centrafricaine)',
    'projects.desc3': 'À Bangui, nous avons livré des solutions de profilés de cloison sèche rentables pour un établissement d\'enseignement...',
    'projects.project4': 'Hôtel Malabo (Guinée Équatoriale)',
    'projects.desc4': 'Pour un grand projet d\'hôtellerie à Malabo, nous avons fourni et soutenu l\'installation de...',
    'projects.seeMore': 'Voir plus',
    'projects.explore': 'Explorez nos Projets',

    // Contractors
    'contractors.title': 'Pourquoi les Entrepreneurs et les Distributeurs Nous Choisissent?',
    'contractors.description': 'Chez Bati Profils, nous combinons la fabrication avancée, l\'ingénierie de précision et le contrôle de qualité strict pour fournir des systèmes de profilés de cloison sèche durables et efficaces.',
    'contractors.callFactory': 'Appelez Notre Usine',
    'contractors.downloadCatalogue': 'Télécharger le Catalogue',
    'contractors.collaborations': 'Collaborations',
    'contractors.trusted': 'Fabricant de Confiance dans la Région CEMAC',

    // Partners
    'partners.title': 'Nos Partenaires',

    // Footer
    'footer.cta': 'Prêt à construire votre prochain projet en confiance?',
    'footer.ctaDesc': 'Nous livrons des solutions de profilés de cloison sèche fiables et performantes pour la construction moderne en Afrique centrale.',
    'footer.downloadCatalogue': 'Télécharger notre Catalogue',
    'footer.getInTouch': 'Contactez-Nous',
    'footer.aboutUs': 'À Propos de Nous',
    'footer.companyProfile': 'Profil de l\'Entreprise',
    'footer.certifications': 'Certifications',
    'footer.media': 'Médias',
    'footer.products': 'Produits',
    'footer.contact': 'Contact',
    'footer.phone': '+237 6 90 12 11 35',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  // Hydrate from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fr')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
