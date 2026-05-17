import { motion } from 'motion/react';
import { Lightbulb, Cpu, ShieldCheck, TrendingUp } from 'lucide-react';

const pillars = [
  {
    title: "Philosophie Éducative",
    desc: "L'apprentissage centré sur l'élève, où la curiosité est le moteur de la réussite individuelle.",
    icon: Lightbulb
  },
  {
    title: "Innovation Numérique",
    desc: "L'utilisation des outils technologiques pour préparer les élèves aux défis du 21e siècle.",
    icon: Cpu
  },
  {
    title: "Rigueur & Caractère",
    desc: "Forger des citoyens responsables par la discipline morale et l'intégrité constante.",
    icon: ShieldCheck
  },
  {
    title: "Esprit d'Entreprise",
    desc: "Inciter à l'initiative individuelle pour créer de la valeur à impact social durable.",
    icon: TrendingUp
  }
];

export default function Vision() {
  return (
    <div className="py-12 space-y-32">
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">Les piliers du futur</span>
        <h1 className="mb-8 text-5xl font-bold tracking-tight md:text-8xl italic font-display text-gray-900">Vision Stratégique</h1>
        <p className="mx-auto max-w-2xl text-xl text-gray-400 font-light">
          Bâtir une nation forte commence par la formation d'esprits libres et compétents capables d'innover sans peur.
        </p>
      </motion.section>

      <section className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {pillars.map((pillar, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex gap-8 p-10 rounded-3xl border border-gray-100 bg-white hover:bg-gray-50 transition-all hover:border-gold/30 hover:shadow-xl"
          >
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gold/10 text-gold">
              <pillar.icon size={32} />
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold uppercase tracking-tight text-gray-900">{pillar.title}</h3>
              <p className="text-gray-500 font-light leading-relaxed text-sm">
                {pillar.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 bg-gray-900 rounded-[3rem] overflow-hidden text-white h-[600px]">
        <div className="p-20 flex flex-col justify-center">
           <h2 className="text-4xl font-display italic mb-8">Transformer l'éducation par l'action concrète</h2>
           <p className="text-gray-400 font-light mb-12 leading-relaxed">
             La vision de Charles Guy Étienne ne se limite pas aux murs d'une salle de classe. C'est un écosystème complet qui favorise l'éclosion des talents naturels. En introduisant l'informatique dès ses débuts, il a prouvé que l'innovation n'était pas une option, mais une nécessité pour le développement national.
           </p>
           <button className="self-start text-xs font-bold uppercase tracking-widest border-b border-gold text-gold pb-2 transition-all hover:tracking-[0.4em]">
             En savoir plus sur nos méthodes
           </button>
        </div>
        <div className="relative overflow-hidden grayscale contrast-125 opacity-50">
           <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800" alt="Technology" className="w-full h-full object-cover" />
        </div>
      </section>
    </div>
  );
}
