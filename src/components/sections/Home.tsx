import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Award } from 'lucide-react';

import img1 from '../img2 (1).jpg';
import img2 from '../img2 (2).jpg';
import img3 from '../img3.jpg';
import img4 from '../img4.jpg';
import img5 from '../img5.jpg';
import img6 from '../img6.jpg';
import extraImg1 from '../IMG_2391.jpeg';
import extraImg2 from '../IMG_2392.jpeg';
import extraImg3 from '../IMG_2393.jpeg';
import extraImg4 from '../unnamed.png';
import extraImg5 from '../unnamed1.png';
import extraImg6 from '../unnamed2.png';

const slideshowImages = [
  img1, img2, img3, img4, img5, img6,
  extraImg1, extraImg2, extraImg3, extraImg4, extraImg5, extraImg6
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 7500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-32 py-12">
      {/* Hero Section */}
      <section className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold/20 bg-gold/5 px-6 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
            <Award size={14} /> Officier du Savoir
          </div>
          <h1 className="mb-8 text-5xl font-bold tracking-tight text-gray-900 md:text-8xl leading-tight">
            L'excellence au service de <span className="text-gold italic font-display font-light normal-case">l'éducation.</span>
          </h1>
          <p className="mb-10 text-xl leading-relaxed text-gray-500 font-light max-w-xl">
            Charles Guy Étienne a transformé le paysage éducatif avec une vision audacieuse, alliant discipline, innovation et entrepreneuriat. Son héritage vit à travers des milliers de réussites.
          </p>
          <div className="flex flex-wrap gap-4 md:gap-8 items-center py-6 px-8 rounded-3xl bg-gray-900 text-white shadow-2xl shadow-gold/10">
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-bold text-gold tracking-tight">1.2K+</span>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-medium text-gray-400 mt-1">élèves impactés</span>
            </div>
            <div className="h-10 w-px bg-white/10 hidden md:block" />
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-bold text-gold tracking-tight">50+</span>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-medium text-gray-400 mt-1">Ans d'innovation</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-gray-100 shadow-2xl bg-gray-50"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={slideshowImages[currentImageIndex]}
              alt="Charles Guy Étienne in action"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 3, ease: "easeInOut" }}
              className="absolute inset-0 h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gold/5 pointer-events-none" />
        </motion.div>
      </section>

      {/* Quote Section */}
      <section className="relative overflow-hidden group">
        <div className="absolute inset-0 bg-gold/5 blur-[120px] rounded-full -z-10" />
        <div className="relative border-y border-gray-100 py-32 text-center">
          <Quote size={48} className="mx-auto mb-10 text-gold opacity-20" />
          <h2 className="mx-auto max-w-4xl text-3xl font-display font-light italic text-gray-800 md:text-6xl md:leading-[1.4]">
            “L'éducation n'est pas seulement la transmission de connaissances, c'est la construction d'un caractère et d'une vision pour l'avenir.”
          </h2>
        </div>
      </section>
    </div>
  );
}
