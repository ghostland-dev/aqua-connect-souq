
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Language } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { Droplet, Users, LightbulbIcon, Globe } from 'lucide-react';

const About = () => {
  const [language, setLanguage] = useState<Language>('ar');

  // Content based on selected language
  const content = {
    ar: {
      title: 'عن منصة أكواكونيكت',
      subtitle: 'مهمتنا هي توفير الوصول إلى المياه النظيفة للجميع',
      description: 'أكواكونيكت هي منصة مبتكرة تهدف إلى تحسين إدارة المياه في المناطق النائية بجنوب شرق المغرب. نحن نجمع بين التكنولوجيا والمعرفة المحلية لخلق حلول مستدامة لتحديات المياه.',
      mission: 'مهمتنا',
      missionText: 'نسعى لضمان وصول الجميع إلى مياه نظيفة وآمنة من خلال تمكين المجتمعات المحلية وتوفير الأدوات والمعرفة اللازمة لإدارة مواردهم المائية بشكل أفضل.',
      vision: 'رؤيتنا',
      visionText: 'نتطلع إلى عالم تتمتع فيه جميع المجتمعات بإمكانية الوصول المستدام إلى المياه النظيفة، مما يؤدي إلى تحسين الصحة والرفاهية والازدهار الاقتصادي.',
      team: 'فريقنا',
      teamText: 'نحن فريق متنوع من الخبراء في مجال المياه والمهندسين والباحثين والمتخصصين في التنمية المجتمعية الملتزمين بإيجاد حلول مبتكرة لتحديات المياه.',
      partners: 'شركاؤنا',
      partnersText: 'نعمل بالشراكة مع المنظمات المحلية والدولية، بما في ذلك الوكالات الحكومية والمنظمات غير الحكومية والجامعات والقطاع الخاص.'
    },
    fr: {
      title: 'À propos d\'AquaConnect',
      subtitle: 'Notre mission est de fournir un accès à l\'eau propre pour tous',
      description: 'AquaConnect est une plateforme innovante visant à améliorer la gestion de l\'eau dans les régions isolées du Sud-Est du Maroc. Nous combinons technologie et connaissances locales pour créer des solutions durables aux défis de l\'eau.',
      mission: 'Notre mission',
      missionText: 'Nous cherchons à garantir que chacun ait accès à une eau propre et sûre en autonomisant les communautés locales et en fournissant les outils et les connaissances nécessaires pour mieux gérer leurs ressources en eau.',
      vision: 'Notre vision',
      visionText: 'Nous envisageons un monde où toutes les communautés bénéficient d\'un accès durable à l\'eau propre, conduisant à une meilleure santé, un bien-être accru et une prospérité économique.',
      team: 'Notre équipe',
      teamText: 'Nous sommes une équipe diversifiée d\'experts en eau, d\'ingénieurs, de chercheurs et de spécialistes du développement communautaire dédiés à trouver des solutions innovantes aux défis de l\'eau.',
      partners: 'Nos partenaires',
      partnersText: 'Nous travaillons en partenariat avec des organisations locales et internationales, y compris des agences gouvernementales, des ONG, des universités et le secteur privé.'
    },
    en: {
      title: 'About AquaConnect',
      subtitle: 'Our mission is to provide clean water access for all',
      description: 'AquaConnect is an innovative platform aimed at improving water management in remote areas of South-Eastern Morocco. We combine technology and local knowledge to create sustainable solutions to water challenges.',
      mission: 'Our Mission',
      missionText: 'We seek to ensure everyone has access to clean, safe water by empowering local communities and providing the tools and knowledge needed to better manage their water resources.',
      vision: 'Our Vision',
      visionText: 'We envision a world where all communities have sustainable access to clean water, leading to improved health, wellbeing, and economic prosperity.',
      team: 'Our Team',
      teamText: 'We are a diverse team of water experts, engineers, researchers, and community development specialists dedicated to finding innovative solutions to water challenges.',
      partners: 'Our Partners',
      partnersText: 'We work in partnership with local and international organizations, including government agencies, NGOs, universities, and the private sector.'
    }
  };

  const langContent = content[language];

  return (
    <div className="min-h-screen bg-white">
      <Navbar language={language} onLanguageChange={setLanguage} />
      
      <main className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-morocco-blue to-morocco-blue-dark text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                className="text-3xl md:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {langContent.title}
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl opacity-90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {langContent.subtitle}
              </motion.p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                {langContent.description}
              </p>

              <div className="grid md:grid-cols-2 gap-10 mb-16">
                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Droplet className="h-8 w-8 text-morocco-blue mr-3" />
                    <h2 className="text-2xl font-bold text-gray-800">{langContent.mission}</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {langContent.missionText}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Globe className="h-8 w-8 text-morocco-blue mr-3" />
                    <h2 className="text-2xl font-bold text-gray-800">{langContent.vision}</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {langContent.visionText}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Users className="h-8 w-8 text-morocco-blue mr-3" />
                    <h2 className="text-2xl font-bold text-gray-800">{langContent.team}</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {langContent.teamText}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <LightbulbIcon className="h-8 w-8 text-morocco-blue mr-3" />
                    <h2 className="text-2xl font-bold text-gray-800">{langContent.partners}</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {langContent.partnersText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer language={language} />
    </div>
  );
};

export default About;
