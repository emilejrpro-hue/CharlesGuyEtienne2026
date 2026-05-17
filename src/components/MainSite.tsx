import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import Navbar from './Navbar';
import Home from './sections/Home';
import Biography from './sections/Biography';
import Vision from './sections/Vision';
import Gallery from './sections/Gallery';
import Testimonials from './sections/Testimonials';
import News from './sections/News';

export default function MainSite() {
  const [activeTab, setActiveTab] = useState('accueil');

  const renderContent = () => {
    switch (activeTab) {
      case 'accueil': return <Home />;
      case 'biographie': return <Biography />;
      case 'vision': return <Vision />;
      case 'galerie': return <Gallery />;
      case 'temoignages': return <Testimonials />;
      case 'actualites': return <News />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-gold/10 selection:text-gold">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="mx-auto max-w-7xl pt-32 pb-20 px-6 md:px-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="border-t border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-12">
          <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
            <div className="flex flex-col gap-4">
              <div className="text-2xl font-bold tracking-widest text-gold uppercase">C.G.E</div>
              <p className="max-w-xs text-xs tracking-wide text-gray-500 leading-relaxed uppercase">
                Une vie consacrée à l’éducation, à la discipline et à l’excellence.
              </p>
            </div>
            
            <div className="flex gap-12 text-[10px] uppercase tracking-[0.2em] font-medium text-gray-400">
              <a href="#" className="hover:text-gold transition-colors">Confidentialité</a>
              <a href="#" className="hover:text-gold transition-colors">Légal</a>
              <a href="#" className="hover:text-gold transition-colors">Contact</a>
            </div>

            <div className="text-[9px] uppercase tracking-widest text-gray-300">
              © 2026 Fondation Charles Guy Étienne
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
