import { motion } from 'motion/react';
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

const images = [
  { url: img1, caption: "", category: "Éducation", source: "cattspressoir.org" },
  { url: img2, caption: "", category: "Professionnel", source: "cattspressoir.org" },
  { url: img3, caption: "Carnaval au Collège", category: "Innovation", source: "cattspressoir.org" },
  { url: img4, caption: "", category: "Leadership", source: "cattspressoir.org" },
  { url: img5, caption: "", category: "Pédagogie", source: "cattspressoir.org" },
  { url: img6, caption: "Visite du Collège Catts Pressoir", category: "Archives", source: "cattspressoir.org" },
  { url: extraImg1, caption: "Exposcience annuelle du Collège", category: "Vision", source: "Ticket Magazine" },
  { url: extraImg2, caption: "M. Étienne au laboratoire de chimie", category: "Engagement", source: "cattspressoir.org" },
  { url: extraImg4, caption: "À l'écoute de ses enfants du primaire", category: "Technologie", source: "cattspressoir.org" },
  { url: extraImg5, caption: "Leadership exemplaire", category: "Excellence", source: "cattspressoir.org" },
  { url: extraImg6, caption: "Transmettre le savoir aux générations futures", category: "Transmission", source: "cattspressoir.org" },
];

export default function Gallery() {
  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-24 text-center"
      >
        <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">Mémoire visuelle</span>
        <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-8xl italic font-display text-gray-900">Média & Archives</h1>
        <p className="text-xl text-gray-400 font-light">Des décennies de moments capturés au cœur de l'action éducative.</p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {images.map((image, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative aspect-square overflow-hidden rounded-3xl border border-gray-100 bg-white"
          >
            <img
              src={image.url}
              alt={image.caption || "Galerie Image"}
              className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8">
              {image.caption && (
                <p className="text-sm md:text-base font-bold text-white leading-tight mb-2">
                  {image.caption}
                </p>
              )}
              <p className="text-[9px] uppercase tracking-widest text-gold font-bold italic">
                Source de l'image : {image.source}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
