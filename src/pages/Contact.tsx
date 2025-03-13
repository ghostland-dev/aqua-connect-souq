
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Language } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const [language, setLanguage] = useState<Language>('ar');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Content based on selected language
  const content = {
    ar: {
      title: 'اتصل بنا',
      subtitle: 'نحن هنا للإجابة على أسئلتك ومساعدتك',
      getInTouch: 'تواصل معنا',
      address: 'العنوان',
      addressText: 'المعهد العالي للمياه والبيئة، أكادير، المغرب',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      formName: 'الاسم الكامل',
      formEmail: 'البريد الإلكتروني',
      formSubject: 'الموضوع',
      formMessage: 'رسالتك',
      formSubmit: 'إرسال الرسالة',
      formSuccess: 'تم إرسال رسالتك بنجاح!'
    },
    fr: {
      title: 'Contactez-nous',
      subtitle: 'Nous sommes là pour répondre à vos questions et vous aider',
      getInTouch: 'Entrer en contact',
      address: 'Adresse',
      addressText: 'Institut Supérieur de l\'Eau et de l\'Environnement, Agadir, Maroc',
      phone: 'Téléphone',
      email: 'Email',
      formName: 'Nom complet',
      formEmail: 'Email',
      formSubject: 'Sujet',
      formMessage: 'Votre message',
      formSubmit: 'Envoyer le message',
      formSuccess: 'Votre message a été envoyé avec succès!'
    },
    en: {
      title: 'Contact Us',
      subtitle: 'We\'re here to answer your questions and help you',
      getInTouch: 'Get in Touch',
      address: 'Address',
      addressText: 'Higher Institute of Water and Environment, Agadir, Morocco',
      phone: 'Phone',
      email: 'Email',
      formName: 'Full Name',
      formEmail: 'Email',
      formSubject: 'Subject',
      formMessage: 'Your Message',
      formSubmit: 'Send Message',
      formSuccess: 'Your message has been sent successfully!'
    }
  };

  const langContent = content[language];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would normally send the data to a server
    alert(langContent.formSuccess);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar language={language} onLanguageChange={setLanguage} />
      
      <main className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-morocco-blue to-morocco-blue-dark text-white py-12">
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
                className="text-lg md:text-xl opacity-90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {langContent.subtitle}
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-morocco-blue text-white p-8">
                  <h3 className="text-2xl font-bold mb-6">{langContent.getInTouch}</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">{langContent.address}</p>
                        <p className="opacity-90">{langContent.addressText}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">{langContent.phone}</p>
                        <p className="opacity-90">+212 528 123 456</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">{langContent.email}</p>
                        <p className="opacity-90">contact@aquaconnect.ma</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3 p-8">
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          {langContent.formName}
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          {langContent.formEmail}
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        {langContent.formSubject}
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        {langContent.formMessage}
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full"
                        rows={5}
                      />
                    </div>
                    
                    <Button type="submit" className="bg-morocco-blue hover:bg-morocco-blue-dark">
                      {langContent.formSubmit}
                    </Button>
                  </form>
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

export default Contact;
