import { motion, AnimatePresence } from 'motion/react';
import { Home, User, Lightbulb, Image, MessageSquare, Newspaper, Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Logo from './Logo';

interface NavbarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navItems = [
  { id: 'accueil', label: 'Accueil', icon: Home },
  { id: 'biographie', label: 'Biographie', icon: User },
  { id: 'vision', label: 'Vision', icon: Lightbulb },
  { id: 'galerie', label: 'Galerie', icon: Image },
  { id: 'temoignages', label: 'Témoignages', icon: MessageSquare },
];

export default function Navbar({ activeTab, onTabChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12">
        <div className="flex items-center">
          <Logo className="-mt-3 scale-90 md:scale-100 origin-left" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`relative text-[11px] uppercase tracking-[0.2em] font-bold transition-colors ${
                activeTab === item.id ? 'text-gold' : 'text-gray-400 hover:text-gold'
              }`}
            >
              {item.label}
              {activeTab === item.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-2 left-0 h-[2px] w-full bg-gold"
                  initial={false}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* mobile / toggle */}
        <div className="flex items-center gap-4 md:hidden">
          {!isOpen && (
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold">Menu</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <ArrowRight size={14} className="text-gold" />
              </motion.div>
            </motion.div>
          )}
          <button
            className="relative h-10 w-10 flex items-center justify-center rounded-full border border-gray-100 bg-gray-50/50 text-gray-600 transition-colors hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white border-b border-gray-100 px-6 pb-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onTabChange(item.id);
                    setIsOpen(false);
                  }}
                  className={`text-left text-sm font-bold uppercase tracking-widest ${
                    activeTab === item.id ? 'text-gold' : 'text-gray-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
