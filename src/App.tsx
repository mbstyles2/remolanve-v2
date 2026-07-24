import React, { useState } from 'react';
import { Page } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SelfieProjectModal } from './components/SelfieProjectModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { BecomeContributorPage } from './pages/BecomeContributorPage';
import { PartnerWithUsPage } from './pages/PartnerWithUsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isSelfieModalOpen, setIsSelfieModalOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage 
            setCurrentPage={setCurrentPage} 
            onOpenSelfieProject={() => setIsSelfieModalOpen(true)} 
          />
        );
      case 'about':
        return <AboutPage setCurrentPage={setCurrentPage} />;
      case 'services':
        return <ServicesPage setCurrentPage={setCurrentPage} />;
      case 'industries':
        return <IndustriesPage setCurrentPage={setCurrentPage} />;
      case 'clients':
      case 'partner':
        return <PartnerWithUsPage setCurrentPage={setCurrentPage} />;
      case 'contributor':
        return (
          <BecomeContributorPage 
            setCurrentPage={setCurrentPage} 
            onOpenSelfieProject={() => setIsSelfieModalOpen(true)} 
          />
        );
      case 'contact':
        return <ContactPage setCurrentPage={setCurrentPage} />;
      default:
        return (
          <HomePage 
            setCurrentPage={setCurrentPage} 
            onOpenSelfieProject={() => setIsSelfieModalOpen(true)} 
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#070A12] text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-950 flex flex-col justify-between">
      
      <div>
        <Navbar 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
          onOpenSelfieProject={() => setIsSelfieModalOpen(true)} 
        />

        <main className="transition-opacity duration-300">
          {renderPage()}
        </main>
      </div>

      <Footer 
        setCurrentPage={setCurrentPage} 
        onOpenSelfieProject={() => setIsSelfieModalOpen(true)} 
      />

      {/* Dedicated Interactive Modal for Global Selfie Collection Project */}
      <SelfieProjectModal 
        isOpen={isSelfieModalOpen} 
        onClose={() => setIsSelfieModalOpen(false)} 
      />

    </div>
  );
}
