import React from 'react';
import { useTranslations } from '../hooks/useTranslations';

const ContactPage: React.FC = () => {
  const { t } = useTranslations();

  return (
    <div className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800">{t('contact_title')}</h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                ما همیشه برای پاسخگویی به سوالات و دریافت نظرات شما آماده هستیم.
            </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">{t('contact_info')}</h2>
                <div className="space-y-4 text-slate-700">
                    <p><strong>تلفن اصلی:</strong> <a href="tel:09123891181" className="text-blue-600 hover:underline" dir="ltr">09123891181</a></p>
                    <p><strong>تلفن دوم:</strong> <a href="tel:09372800282" className="text-blue-600 hover:underline" dir="ltr">09372800282</a></p>
                    <p><strong>واتساپ:</strong> <a href="https://wa.me/989123891181" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline" dir="ltr">09123891181</a></p>
                    <p><strong>ایمیل:</strong> <a href="mailto:ghasemloshahram@gmail.com" className="text-blue-600 hover:underline">ghasemloshahram@gmail.com</a></p>
                </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">{t('contact_form_title')}</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-600">{t('full_name')}</label>
                        <input type="text" id="name" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"/>
                    </div>
                     <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-600">{t('phone_number')}</label>
                        <input type="email" id="email" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"/>
                    </div>
                     <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-600">{t('your_message')}</label>
                        <textarea id="message" rows={4} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"></textarea>
                    </div>
                    <div>
                         <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
                            {t('send_message')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;