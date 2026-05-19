import { motion } from 'motion/react';

const images = [
  { url: "https://images.unsplash.com/photo-1523050335392-9bc567597280?auto=format&fit=crop&q=80&w=800", caption: "Cérémonie de remise des diplômes", category: "Événements" },
  { url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800", caption: "Session de travail avec les professeurs", category: "Professionnel" },
  { url: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800", caption: "Ancienne photo de classe - 1995", category: "Archives" },
  { url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800", caption: "Inauguration du laboratoire informatique", category: "Innovation" },
  { url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=800", caption: "Rencontre avec les élèves du primaire", category: "Éducation" },
  { url: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?auto=format&fit=crop&q=80&w=800", caption: "Forum sur l'entrepreneuriat scolaire", category: "Événements" },
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
              alt={image.caption}
              className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8">
              <span className="mb-2 text-[10px] uppercase tracking-widest text-gold font-bold">
                {image.category}
              </span>
              <p className="text-sm md:text-base font-bold text-white leading-tight">
                {image.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
