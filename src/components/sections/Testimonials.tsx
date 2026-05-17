import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Jean-Pierre Durand",
    role: "Ancien élève (Promotion 1998)",
    text: "Charles Guy Étienne m'a appris bien plus que les mathématiques. Il m'a appris la discipline de l'esprit. Aujourd'hui entrepreneur, je lui dois une grande partie de ma rigueur.",
    avatar: "https://i.pravatar.cc/150?u=jp"
  },
  {
    name: "Marie-Claire Joseph",
    role: "Professeure de Littérature",
    text: "Sa vision de l'éducation est révolutionnaire. Travailler sous sa direction a été la période la plus enrichissante de ma carrière. Un véritable leader inspirant.",
    avatar: "https://i.pravatar.cc/150?u=mc"
  },
  {
    name: "Ricardo Sanon",
    role: "Parent d'élève",
    text: "Nous avons confié nos trois enfants à son institution. Ils en sont sortis non seulement brillants académiquement, mais surtout dotés d'un sens civique exemplaire.",
    avatar: "https://i.pravatar.cc/150?u=rs"
  },
  {
    name: "Wideline Petit-Frère",
    role: "Ingénieure Software",
    text: "C'est grâce à son insistance sur les technologies de l'information que j'ai découvert ma passion. Il voyait l'avenir avant tout le monde.",
    avatar: "https://i.pravatar.cc/150?u=wp"
  }
];

export default function Testimonials() {
  return (
    <div className="py-12 space-y-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">Voix de la communauté</span>
        <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-8xl italic font-display text-gray-900">Témoignages</h1>
        <p className="text-xl text-gray-400 font-light">L'impact de Charles Guy Étienne à travers ceux qui l'ont côtoyé.</p>
      </motion.div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {testimonials.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative"
          >
            <div className="absolute -left-4 -top-4 text-gold/20">
              <Quote size={64} fill="currentColor" />
            </div>
            <div className="relative p-12 rounded-[3rem] border border-gray-100 bg-white hover:bg-gray-50 transition-all hover:border-gold/30 hover:shadow-xl">
              <p className="mb-10 text-xl font-light italic leading-relaxed text-gray-600">
                “{item.text}”
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="h-12 w-12 rounded-full border border-gold/20"
                />
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900">{item.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-gold font-bold">{item.role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="rounded-[4rem] bg-gold p-20 text-center text-white">
        <h2 className="mb-8 text-4xl font-display italic">Contribuez à cet héritage</h2>
        <p className="mx-auto mb-12 max-w-xl text-lg text-white/80 font-light">
          Votre témoignage est une pierre précieuse ajoutée à l'édifice de son héritage universel. Partagez votre expérience avec nous.
        </p>
        <button className="rounded-full bg-white px-12 py-4 text-[10px] font-bold uppercase tracking-[0.3em] text-gold transition-all hover:scale-105">
          Rédiger un témoignage
        </button>
      </div>
    </div>
  );
}
