import React from 'react';
import BookingForm from '../components/BookingForm';
import { useTranslations } from '../hooks/useTranslations';
import { Page } from '../types';
import { IconMap } from '../components/icons/IconMap';
import { IconClock } from '../components/icons/IconClock';
import { IconShield } from '../components/icons/IconShield';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
        <div className="flex justify-center items-center mb-4">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-full">{icon}</div>
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
    </div>
);

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { t } = useTranslations();

  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center text-white py-24 md:py-40" 
        style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://picsum.photos/1600/900?image=1074')" }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">{t('hero_title')}</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">{t('hero_subtitle')}</p>
          <button onClick={() => onNavigate(Page.Booking)} className="mt-8 bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-transform transform hover:scale-105">
            {t('book_now')}
          </button>
        </div>
      </section>

      {/* Quick Booking Section */}
      <section className="py-16 md:py-24 -mt-20 relative z-10">
        <div className="container mx-auto px-4">
          <BookingForm isQuickForm={true} />
        </div>
      </section>
      
      {/* Features Section */}
      <section className="bg-slate-100 py-16 md:py-24">
          <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-800">{t('features_title')}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <FeatureCard icon={<IconShield className="w-8 h-8"/>} title={t('feature_1_title')} description={t('feature_1_desc')} />
                  <FeatureCard icon={<IconClock className="w-8 h-8"/>} title={t('feature_2_title')} description={t('feature_2_desc')} />
                  <FeatureCard icon={<IconMap className="w-8 h-8"/>} title={t('feature_3_title')} description={t('feature_3_desc')} />
              </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white">
          <div className="container mx-auto px-4 py-16 text-center">
              <h2 className="text-3xl font-bold">{t('cta_title')}</h2>
              <a href="tel:09123891181" className="mt-6 inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg shadow-md transition-transform transform hover:scale-105">
                  {t('cta_button')} (09123891181)
              </a>
          </div>
      </section>
    </div>
  );
};

export default HomePage;