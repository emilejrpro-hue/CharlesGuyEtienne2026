import { motion } from 'motion/react';
import { Calendar, ArrowRight, Share2 } from 'lucide-react';

const articles = [
  {
    date: "15 Mai 2026",
    title: "Célébration du Jubilé de Charles Guy Étienne",
    excerpt: "Une journée mémorable réunissant d'anciens élèves et des personnalités du monde éducatif pour célébrer son anniversaire.",
    category: "Événement",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800"
  },
  {
    date: "02 Avril 2026",
    title: "Lancement de la Bourse de l'Excellence",
    excerpt: "Un nouveau fonds est créé sous son impulsion pour soutenir les élèves les plus méritants issus de milieux défavorisés.",
    category: "Héritage",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800"
  },
  {
    date: "10 Mars 2026",
    title: "Conférence sur l'Entrepreneuriat Scolaire",
    excerpt: "Charles Guy Étienne s'exprime sur l'importance d'enseigner la création de valeur dès le plus jeune âge.",
    category: "Vision",
    image: "https://images.unsplash.com/photo-1475721027187-4024733924f7?auto=format&fit=crop&q=80&w=800"
  }
];

export default function News() {
  return (
    <div className="py-12 space-y-32">
       <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">Actualités récents</span>
        <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-8xl italic font-display text-gray-900">Nouvelles & Médias</h1>
        <p className="text-xl text-gray-400 font-light">Suivez l'évolution de nos projets et les moments forts de l'institution.</p>
      </motion.div>

      <div className="grid grid-cols-1 gap-16">
        {articles.map((article, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className={`aspect-video overflow-hidden rounded-3xl group-hover:shadow-2xl transition-all duration-500 ${i % 2 === 1 ? 'md:order-2' : ''}`}>
               <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">{article.category}</span>
                <span className="h-[1px] w-8 bg-gold/30"></span>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-300">{article.date}</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 group-hover:text-gold transition-colors">{article.title}</h3>
              <p className="text-gray-500 font-light leading-relaxed">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-8 pt-4">
                 <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-900 border-b border-gray-900 pb-1">
                    Lire l'article <ArrowRight size={14} />
                 </button>
                 <button className="text-gray-300 hover:text-gold transition-colors">
                    <Share2 size={18} />
                 </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
