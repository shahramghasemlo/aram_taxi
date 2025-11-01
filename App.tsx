import React, { useState, useCallback } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { LanguageProvider } from './context/LanguageContext';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.Home);

  const handleNavigate = useCallback((page: Page) => {
    setActivePage(page);
    window.scrollTo(0, 0);
  }, []);

  const renderPage = () => {
    switch (activePage) {
      case Page.Home:
        return <HomePage onNavigate={handleNavigate} />;
      case Page.Booking:
        return <BookingPage />;
      case Page.Services:
        return <ServicesPage onNavigate={handleNavigate} />;
      case Page.About:
        return <AboutPage />;
      case Page.Contact:
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        <Header activePage={activePage} onNavigate={handleNavigate} />
        <main className="flex-grow">
          {renderPage()}
        </main>
        <Footer onNavigate={handleNavigate} />
      </div>
    </LanguageProvider>
  );
};

export default App;