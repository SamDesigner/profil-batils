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

    // About Page - Hero
    'about.breadcrumb.home': 'Home',
    'about.breadcrumb.about': 'About Us',
    'about.hero.title': 'Engineering the Skeleton of Modern Architecture.',
    'about.hero.description': 'Bati Profils is a leader in precision-engineered drywall systems, delivering the structural integrity required for the CEMAC region\'s most ambitious construction projects.',
    'about.hero.established': 'EST. 2015',

    // About Page - Mission & Vision
    'about.mission.title': 'Our Mission',
    'about.mission.text': 'To provide high-performance drywall systems that simplify construction without compromising on structural integrity, ensuring every build in the CEMAC region stands on a foundation of excellence.',
    'about.vision.title': 'Our Vision',
    'about.vision.text': 'To be the standard-bearer for industrial manufacturing across Central Africa, driving innovation in steel profile engineering and sustainable urban development.',

    // About Page - Manufacturing Process
    'about.process.title': 'Our Manufacturing Process',
    'about.process.step1': 'Material Selection',
    'about.process.desc1': 'We source high-grade galvanized steel to ensure maximum corrosion resistance.',
    'about.process.step2': 'Precision Forming',
    'about.process.desc2': 'Using advanced roll-forming technology for exact dimensions and structural load capacity.',
    'about.process.step3': 'Supply Chain Logics',
    'about.process.desc3': 'Strategically distributed from our Douala hub to construction sites across Central Africa.',

    // About Page - Leadership & Regional Reach
    'about.leadership.title': 'Dominating the CEMAC Region',
    'about.leadership.heading': 'From Douala to the Continent.',
    'about.leadership.para1': 'Established in 2015, Bati Profils identified a gap in the Central African market for high-standard drywall components. Today, we bridge that gap by operating one of the most technologically advanced roll-forming facilities in Cameroon.',
    'about.leadership.para2': 'Our logistics network ensures that whether you are building a commercial hub in Libreville or an educational facility in Bangui, our profiles arrive on time, every time.',
    'about.leadership.button': 'Request Company Profile',

    // Contact Page
    'contact.directProcurement': 'Direct Procurement',
    'contact.contactUs': 'Contact Us',
    'contact.heroDescription': 'Submit your construction project specs below to route your bill of quantities or custom framing request directly to our commercial office desk via WhatsApp.',
    'contact.headquartersOffice': 'Headquarters Office',
    'contact.officeDescription': 'Our local manufacturing units and administrative hubs remain positioned to facilitate rapid submittal processing across central logistical corridors.',
    'contact.callingDesk': 'Calling Desk',
    'contact.availabilityWindow': 'Availability Window',
    'contact.emailSubmittals': 'Email Submittals',
    'contact.plantLocation': 'Plant Location',
    'contact.hours': 'Mon - Fri: 8:00 AM – 4:30 PM',
    'contact.saturdayHours': 'Saturday: 9:00 AM – 1:00 PM',
    'contact.formFullName': 'Full Name',
    'contact.formEmail': 'Email',
    'contact.formProjectType': 'Project Type',
    'contact.formMessage': 'Message',
    'contact.formSubmit': 'Send Inquiry',
    'contact.formValidationAll': 'All required specification details must be completed before transmission.',
    'contact.formValidationEmail': 'Please enter a valid corporate email address.',
    'contact.formValidationMessage': 'Please provide a more detailed project quantity description (min. 10 characters).',

    // Floating WhatsApp
    'whatsapp.chatWithUs': 'Chat With Us',

    // Products Page
    'products.page.title': 'Technical',
    'products.page.titleHighlight': 'Catalog',
    'products.page.description': 'Precision-engineered galvanized steel profiles compliant with global structural construction standards.',
    'products.filter.label': 'Filter Profiles',
    'products.category.all': 'All',
    'products.category.partition': 'Partition',
    'products.category.ceiling': 'Ceiling',
    'products.category.cladding': 'Cladding',
    'products.category.systems': 'Systems',
    'products.action.quickSpec': 'Quick Spec',
    'products.action.downloadAsset': 'Download technical asset',
    'products.action.downloadAssetFr': 'Télécharger la fiche technique',

    // Projects Page
    'projects.page.subtitle': 'Proven Infrastructure',
    'projects.page.title': 'Our',
    'projects.page.titleHighlight': 'Projects',
    'projects.page.description': 'A comprehensive track record of precision-engineered steel profile applications across critical structural builds in the CEMAC region.',
    'projects.filter.label': 'Sector Filter:',
    'projects.filter.all': 'All',
    'projects.filter.commercial': 'Commercial',
    'projects.filter.industrial': 'Industrial',
    'projects.filter.infrastructure': 'Infrastructure',

    // Blogs Page
    'blogs.page.subtitle': 'Company Insights',
    'blogs.page.title': 'Our',
    'blogs.page.titleHighlight': 'Blogs',
    'blogs.page.description': 'Stay informed with construction breakthroughs, steel manufacturing analysis, and official company announcements from Bati Profils.',
    'blogs.filter.all': 'All',
    'blogs.filter.allPosts': 'All Posts',
    'blogs.filter.technical': 'Technical',
    'blogs.filter.industryNews': 'Industry News',
    'blogs.filter.caseStudy': 'Case Study',
    'blogs.search.placeholder': 'Search articles & highlights...',

    // Resources Page
    'resources.page.subtitle': 'Technical Submittals',
    'resources.page.title': 'Technical',
    'resources.page.titleHighlight': 'Resources',
    'resources.page.description': 'Access and download structural data sheets, architectural design assets, compliance records, and configuration manuals for submittal approvals.',
    'resources.filter.all': 'All',
    'resources.filter.allDocuments': 'All Documents',
    'resources.filter.catalogues': 'Catalogues',
    'resources.filter.technicalData': 'Technical Data',
    'resources.filter.certificates': 'Certificates',
    'resources.filter.guides': 'Guides',
    'resources.search.placeholder': 'Search documentation files...',
    'resources.action.downloadAsset': 'Download Asset',
    'resources.empty.message': 'No technical documentation matching search parameters found.',
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

    // About Page - Hero
    'about.breadcrumb.home': 'Accueil',
    'about.breadcrumb.about': 'À Propos',
    'about.hero.title': 'Concevoir le Squelette de l\'Architecture Moderne.',
    'about.hero.description': 'Bati Profils est un leader dans les systèmes de cloisons sèches d\'ingénierie de précision, offrant l\'intégrité structurelle requise pour les projets de construction les plus ambitieux de la région de la CEMAC.',
    'about.hero.established': 'DEPUIS 2015',

    // About Page - Mission & Vision
    'about.mission.title': 'Notre Mission',
    'about.mission.text': 'Fournir des systèmes de cloisons sèches haute performance qui simplifient la construction sans compromettre l\'intégrité structurelle, garantissant que chaque construction dans la région CEMAC repose sur une fondation d\'excellence.',
    'about.vision.title': 'Notre Vision',
    'about.vision.text': 'Être le porte-étendard de la fabrication industrielle en Afrique centrale, en stimulant l\'innovation dans l\'ingénierie des profils d\'acier et le développement urbain durable.',

    // About Page - Manufacturing Process
    'about.process.title': 'Notre Processus de Fabrication',
    'about.process.step1': 'Sélection des Matériaux',
    'about.process.desc1': 'Nous approvisionnons de l\'acier galvanisé de haute qualité pour assurer une résistance maximale à la corrosion.',
    'about.process.step2': 'Profilage de Précision',
    'about.process.desc2': 'Utilisation de la technologie de profilage avancée pour des dimensions exactes et une capacité de charge structurelle.',
    'about.process.step3': 'Logistique de Chaîne d\'Approvisionnement',
    'about.process.desc3': 'Distribuée stratégiquement depuis notre centre de Douala vers les sites de construction en Afrique centrale.',

    // About Page - Leadership & Regional Reach
    'about.leadership.title': 'Dominer la Région CEMAC',
    'about.leadership.heading': 'De Douala au Continent.',
    'about.leadership.para1': 'Fondée en 2015, Bati Profils a identifié une lacune sur le marché d\'Afrique centrale pour les composants de cloisons sèches de haute qualité. Aujourd\'hui, nous comblons cette lacune en exploitant l\'une des installations de profilage les plus technologiquement avancées du Cameroun.',
    'about.leadership.para2': 'Notre réseau logistique assure que vous construisiez un centre commercial à Libreville ou une établissement d\'enseignement à Bangui, nos profilés arrivent à temps, toujours.',
    'about.leadership.button': 'Demander le Profil de l\'Entreprise',

    // Contact Page
    'contact.directProcurement': 'Approvisionnement Direct',
    'contact.contactUs': 'Nous Contacter',
    'contact.heroDescription': 'Soumettez les spécifications de votre projet de construction ci-dessous pour acheminer votre devis ou demande de cadre personnalisé directement à notre bureau commercial via WhatsApp.',
    'contact.headquartersOffice': 'Bureau Siège',
    'contact.officeDescription': 'Nos unités de fabrication locales et nos centres administratifs restent positionnés pour faciliter le traitement rapide des demandes dans les corridors logistiques centraux.',
    'contact.callingDesk': 'Bureau Téléphonique',
    'contact.availabilityWindow': 'Fenêtre de Disponibilité',
    'contact.emailSubmittals': 'Soumissions par Email',
    'contact.plantLocation': 'Localisation de l\'Usine',
    'contact.hours': 'Lun - Ven: 8h00 - 16h30',
    'contact.saturdayHours': 'Samedi: 9h00 - 13h00',
    'contact.formFullName': 'Nom Complet',
    'contact.formEmail': 'Email',
    'contact.formProjectType': 'Type de Projet',
    'contact.formMessage': 'Message',
    'contact.formSubmit': 'Envoyer la Demande',
    'contact.formValidationAll': 'Tous les détails de spécification requis doivent être complétés avant la transmission.',
    'contact.formValidationEmail': 'Veuillez entrer une adresse e-mail professionnelle valide.',
    'contact.formValidationMessage': 'Veuillez fournir une description de quantité de projet plus détaillée (min. 10 caractères).',

    // Floating WhatsApp
    'whatsapp.chatWithUs': 'Discutez avec Nous',

    // Products Page
    'products.page.title': 'Technique',
    'products.page.titleHighlight': 'Catalogue',
    'products.page.description': 'Profilés en acier galvanisé d\'ingénierie de précision conformes aux normes mondiales de construction structurelle.',
    'products.filter.label': 'Filtrer les Profils',
    'products.category.all': 'Tous',
    'products.category.partition': 'Cloisons',
    'products.category.ceiling': 'Plafonds',
    'products.category.cladding': 'Revêtement',
    'products.category.systems': 'Systèmes',
    'products.action.quickSpec': 'Spécification Rapide',
    'products.action.downloadAsset': 'Télécharger la fiche technique',
    'products.action.downloadAssetFr': 'Télécharger la fiche technique',

    // Projects Page
    'projects.page.subtitle': 'Infrastructure Éprouvée',
    'projects.page.title': 'Nos',
    'projects.page.titleHighlight': 'Projets',
    'projects.page.description': 'Un bilan complet des applications de profils d\'acier d\'ingénierie de précision dans les constructions structurales critiques de la région CEMAC.',
    'projects.filter.label': 'Filtre Secteur:',
    'projects.filter.all': 'Tous',
    'projects.filter.commercial': 'Commercial',
    'projects.filter.industrial': 'Industriel',
    'projects.filter.infrastructure': 'Infrastructure',

    // Blogs Page
    'blogs.page.subtitle': 'Aperçus de l\'Entreprise',
    'blogs.page.title': 'Nos',
    'blogs.page.titleHighlight': 'Blogs',
    'blogs.page.description': 'Restez informé avec les percées en construction, l\'analyse de la fabrication de l\'acier et les annonces officielles de l\'entreprise de Bati Profils.',
    'blogs.filter.all': 'Tous',
    'blogs.filter.allPosts': 'Tous les Articles',
    'blogs.filter.technical': 'Technique',
    'blogs.filter.industryNews': 'Actualités de l\'Industrie',
    'blogs.filter.caseStudy': 'Étude de Cas',
    'blogs.search.placeholder': 'Rechercher des articles et points forts...',

    // Resources Page
    'resources.page.subtitle': 'Soumissions Techniques',
    'resources.page.title': 'Ressources',
    'resources.page.titleHighlight': 'Techniques',
    'resources.page.description': 'Accédez et téléchargez les fiches techniques structurelles, les documentations de conception, les registres de conformité et les manuels de configuration.',
    'resources.filter.all': 'Tous',
    'resources.filter.allDocuments': 'Tous les Documents',
    'resources.filter.catalogues': 'Catalogues',
    'resources.filter.technicalData': 'Données Techniques',
    'resources.filter.certificates': 'Certificats',
    'resources.filter.guides': 'Guides',
    'resources.search.placeholder': 'Rechercher des documents...',
    'resources.action.downloadAsset': 'Télécharger l\'élément',
    'resources.empty.message': 'Aucune documentation technique ne correspond aux paramètres de recherche.',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('fr');

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
