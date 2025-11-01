import React, { useState } from 'react';
import { Page } from '../types';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslations } from '../hooks/useTranslations';
import { IconMenu } from './icons/IconMenu';
import { IconClose } from './icons/IconClose';

interface HeaderProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ activePage, onNavigate }) => {
  const { t } = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { page: Page.Home, label: t('nav_home') },
    { page: Page.Booking, label: t('nav_booking') },
    { page: Page.Services, label: t('nav_services') },
    { page: Page.About, label: t('nav_about') },
    { page: Page.Contact, label: t('nav_contact') },
  ];
  
  const handleMobileNavClick = (page: Page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Logo onNavigate={onNavigate} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:space-x-8 md:rtl:space-x-reverse">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`text-base font-medium transition-colors ${
                  activePage === item.page ? 'text-blue-600' : 'text-slate-600 hover:text-blue-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center">
             <div className="hidden md:block">
                <LanguageSwitcher />
             </div>
             
             {/* Mobile Menu Button */}
             <div className="md:hidden">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                    aria-controls="mobile-menu"
                    aria-expanded={isMenuOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    {isMenuOpen ? (
                        <IconClose className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                        <IconMenu className="block h-6 w-6" aria-hidden="true" />
                    )}
                </button>
             </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item) => (
                    <button
                        key={item.page}
                        onClick={() => handleMobileNavClick(item.page)}
                        className={`block w-full text-start px-3 py-2 rounded-md text-base font-medium transition-colors ${
                            activePage === item.page ? 'bg-blue-100 text-blue-700' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                        }`}
                        aria-current={activePage === item.page ? 'page' : undefined}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
            <div className="pt-4 pb-3 border-t border-slate-200">
                <div className="flex items-center px-4">
                    <LanguageSwitcher />
                </div>
            </div>
        </div>
      )}
    </header>
  );
};

export default Header;
