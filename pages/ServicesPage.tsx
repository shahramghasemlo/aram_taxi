import React from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { Page } from '../types';

interface ServiceItemProps {
  title: string;
  description: string;
  price?: string;
  luggageInfo?: string;
  onBook?: () => void;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, description, price, luggageInfo, onBook }) => {
  const { t } = useTranslations();
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 h-full flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-slate-800">{title}</h3>
        <p className="mt-2 text-slate-600">{description}</p>
        {price && <p className="mt-4 text-lg font-semibold text-blue-600">{price}</p>}
        {luggageInfo && (
          <div className="mt-4 pt-4 border-t border-slate-100">
            <p className="text-sm font-medium text-slate-600">
              <span className="font-bold">{t('standard_luggage')}</span> {luggageInfo}
            </p>
          </div>
        )}
      </div>
      {onBook && (
        <button
          onClick={onBook}
          className="mt-6 w-full bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-2 px-4 rounded-lg shadow-sm transition-transform transform hover:scale-105"
        >
          {t('book_this_car')}
        </button>
      )}
    </div>
  );
};

interface ServicesPageProps {
  onNavigate: (page: Page) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const { t } = useTranslations();

  return (
    <div className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800">{t('services_title')}</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
             {t('services_subtitle')}
          </p>
        </div>
        
        <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-700 mb-8 text-center">{t('car_rates_title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <ServiceItem title={t('car_safrane')} description={t('safrane_desc')} price={t('price_1300')} luggageInfo={t('safrane_camry_luggage')} onBook={() => onNavigate(Page.Booking)} />
                <ServiceItem title={t('car_camry')} description={t('camry_desc')} price={t('price_1500')} luggageInfo={t('safrane_camry_luggage')} onBook={() => onNavigate(Page.Booking)} />
                <ServiceItem title={t('car_rav4')} description={t('rav4_desc')} price={t('price_1600')} luggageInfo={t('rav4_luggage')} onBook={() => onNavigate(Page.Booking)} />
                <ServiceItem title={t('car_van')} description={t('van_desc')} price={t('price_1800')} luggageInfo={t('van_luggage')} onBook={() => onNavigate(Page.Booking)} />
            </div>
            <p className="text-center mt-8 text-slate-600">{t('extra_luggage_fee')}</p>
        </div>

        <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-700 mb-8 text-center">{t('special_services_title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <ServiceItem title={t('service_welcome_title')} description={t('service_welcome_desc')} price={t('price_150')}/>
                <ServiceItem title={t('service_childseat_title')} description={t('service_childseat_desc')} price={t('price_100')}/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;