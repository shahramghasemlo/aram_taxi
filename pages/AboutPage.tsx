
import React from 'react';
import { useTranslations } from '../hooks/useTranslations';

const AboutPage: React.FC = () => {
  const { t } = useTranslations();
  
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800">{t('about_title')}</h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">{t('about_text')}</p>
          </div>
          <div>
            <img 
              src="https://picsum.photos/600/400?image=1011" 
              alt="Professional driver"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
