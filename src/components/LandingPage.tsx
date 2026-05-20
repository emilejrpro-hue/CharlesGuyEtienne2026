import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import heroImage from '../CharlesGEtienne.jpg';

interface LandingPageProps {
  onEnter: () => void;
}

export default function LandingPage({ onEnter }: LandingPageProps) {
  // Anniversary animations: sparkles/confetti
  const sparkles = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 5,
    duration: Math.random() * 4 + 3,
    color: i % 2 === 0 ? '#C5A059' : '#FFFFFF',
  }));

  return (
    <div className="relative h-screen w-full overflow-hidden bg-dark text-white font-sans">
      
      {/* Background Image with Parallax effect */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute inset-0 z-0 grayscale"
      >
        <img
          src={heroImage}
          alt="Charles Guy Étienne"
          className="h-full w-full object-cover brightness-110 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/30 via-transparent to-dark/70" />
        {/* Glow effect */}
        <div className="absolute inset-0 flex items-center justify-center opacity-40">
           <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-t from-gold/40 to-transparent blur-3xl"></div>
        </div>
      </motion.div>

      {/* Floating Sparkles / Anniversary Animation */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {sparkles.map((s) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: [0, 0.8, 0],
              y: [0, -150 - Math.random() * 200],
              x: (Math.random() * 40 - 20) + "px",
              scale: [0, 1, 0]
            }}
            transition={{
              duration: s.duration,
              repeat: Infinity,
              delay: s.delay,
              ease: "easeOut"
            }}
            style={{
              left: s.x + "%",
              top: s.y + "%",
              width: s.size,
              height: s.size,
              backgroundColor: s.color,
              borderRadius: '50%',
              boxShadow: `0 0 10px ${s.color}`
            }}
            className="absolute"
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
        >
          <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.4em] text-gold">
            Hommage & Célébration
          </span>
          <motion.h1 
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="mb-4 font-display text-5xl italic font-light leading-tight md:text-7xl text-gold"
          >
            Joyeux Anniversaire
          </motion.h1>
          <h2 className="mb-12 font-sans text-4xl font-bold uppercase tracking-tight text-white md:text-8xl">
            Charles Guy Étienne
          </h2>
        </motion.div>

        <motion.div
           initial={{ y: 20, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay: 1.2, duration: 1.2 }}
           className="max-w-2xl"
        >
          <p className="text-xl italic font-light leading-relaxed text-white/70 md:text-2xl">
            “Merci pour votre vision, votre dévouement et l'impact que vous laissez dans la vie de milliers d'élèves.”
          </p>
        </motion.div>

        <div className="mt-16 flex flex-col items-center gap-6">
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            onClick={onEnter}
            className="group relative px-12 py-5 bg-gold text-black font-bold uppercase tracking-[0.2em] text-sm hover:scale-105 transition-all shadow-[0_0_20px_rgba(197,160,89,0.3)]"
          >
            Découvrir votre héritage
            <div className="absolute -inset-1 border border-gold/30 group-hover:inset-0 transition-all" />
          </motion.button>
        </div>
      </div>

      {/* Photo credit */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20"
      >
        <p className="text-[9px] uppercase tracking-[0.2em] text-white/20 font-medium">
          Source image : <span className="text-white/30">lenouvelliste.com</span>
        </p>
      </motion.div>

      {/* Background texture overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]" />
    </div>
  );
}
