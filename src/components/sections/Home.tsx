import { motion } from 'motion/react';
import { Quote, Award, BookOpen, Users } from 'lucide-react';

export default function Home() {
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
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <Users className="text-gold" size={24} />
              <div>
                <div className="text-2xl font-bold text-gray-900">10k+</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Élèves Impactés</div>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <BookOpen className="text-gold" size={24} />
              <div>
                <div className="text-2xl font-bold text-gray-900">35+ Ans</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">D'Innovation</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-gray-100 shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1544717297-fa15c390fe67?auto=format&fit=crop&q=80&w=1000"
            alt="Charles Guy Étienne in action"
            className="h-full w-full object-cover transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
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
          <div className="mt-12 text-[11px] uppercase tracking-[0.4em] text-gold font-bold">
            Charles Guy Étienne
          </div>
        </div>
      </section>

      {/* Key Impact Cards */}
      <section className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {[
          {
            title: "Discipline & Rigueur",
            desc: "Une approche structurée qui forge les leaders de demain par l'exigence morale.",
            icon: "⚖️"
          },
          {
            title: "Innovation Numérique",
            desc: "Pionnier de l'intégration du numérique dans l'apprentissage dès les années 90.",
            icon: "🚀"
          },
          {
            title: "Esprit de Création",
            desc: "Encourager chaque élève à entreprendre et à devenir acteur de sa propre vie.",
            icon: "💡"
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group p-10 rounded-2xl border border-gray-100 bg-white hover:bg-gray-50 transition-all hover:border-gold/30 hover:shadow-xl"
          >
            <div className="mb-6 text-4xl">{item.icon}</div>
            <h3 className="mb-4 text-xl font-bold uppercase tracking-tight text-gray-900">{item.title}</h3>
            <p className="text-gray-500 leading-relaxed text-sm font-light">{item.desc}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
