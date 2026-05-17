import { motion } from 'motion/react';
import { Building, Laptop, Heart, Gift, GraduationCap } from 'lucide-react';

const milestones = [
  {
    year: "1988",
    title: "Fondation de l'Institution",
    desc: "Début d'une aventure éducative sans précédent avec la création de l'Institution Charles Guy Étienne.",
    icon: Building
  },
  {
    year: "1995",
    title: "Pionnier du Numérique",
    desc: "Intégration précoce des outils informatiques dans le cursus scolaire, une première en Haïti.",
    icon: Laptop
  },
  {
    year: "2010",
    title: "Résilience Post-Séisme",
    desc: "Réouverture rapide de l'école pour offrir un sanctuaire d'apprentissage et de stabilité aux élèves.",
    icon: Heart
  },
  {
    year: "2024",
    title: "Célébration de l'Aniversaire",
    desc: "Un moment de reconnaissance nationale pour plus de trois décennies au service de la nation.",
    icon: Gift
  }
];

export default function Biography() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24 text-center"
        >
          <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">Héritage temporel</span>
          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-8xl italic font-display text-gray-900">Parcours & Histoire</h1>
          <p className="text-xl text-gray-400 font-light">Une vie dédiée à l'excellence et à la formation de l'esprit.</p>
        </motion.div>

        <div className="relative space-y-24 before:absolute before:left-4 before:top-2 before:h-full before:w-[1px] before:bg-gray-100 md:before:left-1/2">
          {milestones.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative flex items-center justify-between group ${
                i % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 z-10 hidden h-3 w-3 rounded-full border-2 border-gold bg-white md:left-1/2 md:-ml-[6px] md:block transition-transform group-hover:scale-150" />

              <div className="w-full pl-12 md:w-1/2 md:pl-0 md:px-12">
                <div className={`p-10 rounded-3xl border border-gray-100 bg-white hover:bg-gray-50 transition-all hover:border-gold/30 hover:shadow-xl ${
                  i % 2 === 0 ? 'text-left md:text-right' : 'text-left'
                }`}>
                  <span className="mb-4 block text-3xl font-black text-gold/80 italic font-display">{item.year}</span>
                  <h3 className="mb-4 text-xl font-bold text-gray-900 uppercase tracking-tight">{item.title}</h3>
                  <p className="text-gray-500 font-light leading-relaxed text-sm">{item.desc}</p>
                </div>
              </div>
              <div className="hidden w-1/2 md:block" />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 p-16 text-center border border-gray-100 rounded-3xl bg-gray-50"
        >
          <h2 className="mb-8 text-2xl font-bold uppercase tracking-widest text-gold font-sans">Un engagement sans faille</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-500 font-light leading-relaxed font-sans">
            Derrière chaque date se cachent des milliers d'heures de travail, de réflexion et de dialogue avec les élèves et les parents. Charles Guy Étienne n'a jamais vu l'éducation comme un simple métier, mais comme une vocation sacrée pour transformer la société.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
