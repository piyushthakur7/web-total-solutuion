import React, { useState, useEffect } from 'react';
import { ViewType } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import ServicesView from './components/ServicesView';
import PortfolioView from './components/PortfolioView';
import PricingView from './components/PricingView';
import ContactView from './components/ContactView';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [navContext, setNavContext] = useState<{ projectType?: string; details?: string } | null>(null);

  // Auto-scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const handleNavigate = (view: ViewType, context: any = null) => {
    setNavContext(context);
    setCurrentView(view);
  };

  const renderActiveView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView onNavigate={handleNavigate} />;
      case 'services':
        return <ServicesView onNavigate={handleNavigate} />;
      case 'portfolio':
        return <PortfolioView onNavigate={handleNavigate} />;
      case 'pricing':
        return <PricingView onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactView initialContext={navContext} />;
      default:
        return <HomeView onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Dynamic Header */}
      <Header currentView={currentView} onNavigate={handleNavigate} />

      {/* Main Content Stage with Motion Transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Dynamic Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
