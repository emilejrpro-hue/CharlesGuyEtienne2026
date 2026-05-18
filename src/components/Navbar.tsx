import { motion, AnimatePresence } from 'motion/react';
import { Home, User, Lightbulb, Image, MessageSquare, Newspaper, Menu, X } from 'lucide-react';
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
  { id: 'actualites', label: 'Actualités', icon: Newspaper },
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
          <button
            className="text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
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
