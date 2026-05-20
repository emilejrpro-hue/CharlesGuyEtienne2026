import { motion, AnimatePresence } from 'motion/react';
import { Quote, Send, X, Calendar, User, MessageSquare, Info } from 'lucide-react';
import { useState, useEffect } from 'react';
import { db, collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from '../../lib/firebase';

const staticTestimonials = [
  {
    name: "Ciguino Michaelle",
    role: "7ème année fondamentale • Élève de l'école",
    text: "Monsieur le Directeur, on voulait juste vous dire merci. Pas pour une occasion spéciale — parce que vous êtes là chaque jour. On voit le travail que vous faites pour cette école, et ça compte pour nous.",
    createdAt: new Date('2024-05-19T08:00:00Z').getTime()
  },
  {
    name: "Salomon Christie",
    role: "7ème Année • Élève de l'école",
    text: "Monsieur le Directeur, on n'a pas beaucoup de mots, mais on a beaucoup de respect. Vous tenez cette école debout. On le voit, on le ressent, et on vous en est reconnaissants.",
    createdAt: new Date('2024-05-19T08:10:00Z').getTime()
  },
  {
    name: "Guilloux Aya",
    role: "7ème A • Élève de l'école",
    text: "Ce que je veux vraiment, c'est que Monsieur Étienne reste avec nous. Avec Béob. Que ses jambes le portent encore longtemps. Je vous aime, Monsieur Étienne. Vous êtes notre directeur, mais pour moi, vous êtes surtout quelqu'un qu'on ne veut pas perdre.",
    createdAt: new Date('2024-05-19T08:20:00Z').getTime()
  },
  {
    name: "Sarah-Lizz",
    role: "8ème année • Élève de l'école",
    text: "Il y a des gens qui parlent fort pour se faire entendre. Lui, non. Quand il ouvre la bouche, on écoute — pas parce qu'on y est obligés, mais parce que ça a du poids. Même quand il n'est pas là, on sent sa présence dans l'école. Lui gentil, c'est quelqu'un de vraiment gentil. Lui fâché — on ne rigole plus.",
    createdAt: new Date('2024-05-19T08:30:00Z').getTime()
  },
  {
    name: "Auguste Thamar",
    role: "8ème année • Élève de l'école",
    text: "Monsieur, je veux juste vous dire merci. Merci d'être là. Vos conseils, je les ai appliqués, et ça a marché. Vous avez quelque chose que peu de gens ont — une façon de voir les choses clairement, de guider sans écraser. Pour moi, vous êtes un pilier. Notre père d'école, si on peut dire.",
    createdAt: new Date('2024-05-19T08:40:00Z').getTime()
  },
  {
    name: "Henrys Nickoline",
    role: "7ème année • Élève de l'école",
    text: "Cher M. Étienne, on vous regarde et on apprend. La patience, la persévérance — vous nous les montrez sans forcément les nommer. Sans vous, quelque chose manquerait dans cette école. Merci. C'est tout ce qu'on a à dire, mais on le dit avec tout ce qu'on a.",
    createdAt: new Date('2024-05-19T08:50:00Z').getTime()
  },
  {
    name: "Georgelass Gloria Jimma",
    role: "7ème AF • Élève de l'école",
    text: "Ce qui m'a frappée chez notre directeur, c'est qu'il sait être exigeant sans être dur. Il crée un espace où on veut faire mieux — pas parce qu'on a peur, mais parce qu'il nous fait croire qu'on en est capables. C'est rare.",
    createdAt: new Date('2024-05-19T09:00:00Z').getTime()
  },
  {
    name: "Anonyme",
    role: "9ème • Élève de l'école",
    text: "Monsieur Étienne est quelqu'un d'élégant — et pas juste dans la façon de s'habiller. Dans la façon de diriger. Il n'a pas besoin de crier ni de mettre de pression. On fait bien parce qu'il nous a appris à faire bien. C'est ça son héritage.",
    createdAt: new Date('2024-05-19T09:10:00Z').getTime()
  },
  {
    name: "Amicy Karl-Ruben",
    role: "7ème AF • Élève de l'école",
    text: "Il y a des directeurs qui dirigent une école. Lui, il s'occupe de ses élèves. On le sent — dans la façon dont il nous parle, dont il nous regarde. Ce n'est pas juste un chef, c'est quelqu'un qui veut vraiment qu'on s'en sorte.",
    createdAt: new Date('2024-05-19T09:20:00Z').getTime()
  },
  {
    name: "Métayer Ann-Lee",
    role: "7ème • Élève de l'école",
    text: "Monsieur Étienne, ce que vous faites pour cette école, ça ne s'oublie pas. Vous êtes là chaque matin, vous portez cette école sur vos épaules, et ça se voit dans ce qu'on devient. On vous aime, et on prie pour que Dieu vous garde longtemps avec nous.",
    createdAt: new Date('2024-05-19T09:30:00Z').getTime()
  },
  {
    name: "Blaise Sandro G.",
    role: "7ème • Élève de l'école",
    text: "Monsieur, vous n'avez jamais lâché sur la rigueur — mais vous n'avez jamais lâché sur nous encore. Vos corrections piquaient parfois, vos conseils prenaient du temps à rentrer, mais au final, on comprend pourquoi vous le faisiez. Merci pour ça.",
    createdAt: new Date('2024-05-19T09:40:00Z').getTime()
  },
  {
    name: "Pierre Karima",
    role: "Secondaire 1 • Élève de l'école",
    text: "Monsieur le Directeur, on a connu des adultes qui commandent fort et dirigent mal. Vous, c'est différent. Vous tenez cette école avec fermeté, oui mais on sent que derrière tout ça, il y a quelqu'un qui nous veut du bien. C'est ce qu'on retient.",
    createdAt: new Date('2024-05-19T09:50:00Z').getTime()
  },
  {
    name: "Léonidas Mahira E.",
    role: "Secondaire 1 • Élève de l'école",
    text: "Quand on est arrivés ici pour la première fois, on ne savait pas trop où on mettait les pieds. C'est M. Étienne qui nous a guidés pas d'une façon formelle, mais vraiment. Il était là. Il répondait. Il nous rassurait. Aujourd'hui on se retourne et on réalise ce que ça a changé pour nous. Pour moi, c'est un deuxième père.",
    createdAt: new Date('2024-05-19T10:00:00Z').getTime()
  },
  {
    name: "Brizard Habrana",
    role: "Secondaire 1 • Élève de l'école",
    text: "On n'a pas un grand discours à faire. Juste ça : restez en bonne santé, restez avec nous longtemps. On vous aime.",
    createdAt: new Date('2024-05-19T10:10:00Z').getTime()
  },
  {
    name: "Stécy Alcindor",
    role: "8ème année • Élève de l'école",
    text: "M. Étienne ne sait probablement pas à quel point il m'influence. Il n'a pas besoin de me parler directement. Juste sa façon d'entrer dans une pièce, de marcher, de se tenir — ça suffit. On comprend tout de suite que c'est quelqu'un qu'on respecte, pas parce qu'on nous l'a dit, mais parce qu'on le sent.",
    createdAt: new Date('2024-05-19T10:20:00Z').getTime()
  }
];

const roles = [
  "Ancien élève du collège Catts Pressoir",
  "Membre du staff du collège Catts Pressoir",
  "Ancien membre du staff du collège Catts Pressoir",
  "Élève du collège Catts Pressoir",
  "Autres"
];

export default function Testimonials() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [dynamicTestimonials, setDynamicTestimonials] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    text: '',
    role: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  useEffect(() => {
    if (!db) return;

    const q = query(collection(db, 'testimonials'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate()?.getTime() || Date.now()
      }));
      setDynamicTestimonials(items);
    });

    return () => unsubscribe();
  }, [db]);

  const allTestimonials = [...dynamicTestimonials, ...staticTestimonials].sort((a, b) => b.createdAt - a.createdAt);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.text) return;

    setIsSubmitting(true);
    setMessage(null);

    try {
      if (db) {
        await addDoc(collection(db, 'testimonials'), {
          ...formData,
          createdAt: serverTimestamp()
        });
      } else {
        // Fallback for demo if Firebase is not connected yet
        const newTestimonial = {
          ...formData,
          createdAt: Date.now(),
          id: Math.random().toString(36).substr(2, 9),
          avatar: `https://i.pravatar.cc/150?u=${formData.name}`
        };
        setDynamicTestimonials(prev => [newTestimonial, ...prev]);
        console.warn("Firebase not connected. Testimonial added to local state for now.");
      }
      
      setFormData({ name: '', text: '', role: '' });
      setMessage({ type: 'success', text: 'Témoignage envoyé avec succès !' });
      setTimeout(() => {
        setIsFormOpen(false);
        setMessage(null);
      }, 2000);
    } catch (error) {
      console.error(error);
      setMessage({ type: 'error', text: "Erreur lors de l'envoi. Veuillez réessayer." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (timestamp: number) => {
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(new Date(timestamp));
  };

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
        {allTestimonials.map((item, i) => (
          <motion.div
            key={item.id || i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative"
          >
            <div className="absolute -left-4 -top-4 text-gold/20">
              <Quote size={64} fill="currentColor" />
            </div>
            <div className="relative p-12 rounded-[3rem] border border-gray-100 bg-white hover:bg-gray-50 transition-all hover:border-gold/30 hover:shadow-xl h-full flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                  <Calendar size={12} className="text-gold" />
                  {formatDate(item.createdAt)}
                </div>
              </div>
              <p className="mb-10 text-xl font-light italic leading-relaxed text-gray-600 flex-grow">
                “{item.text}”
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="h-12 w-12 rounded-full border border-gold/20 bg-gray-100 flex items-center justify-center text-gray-400 overflow-hidden">
                  <User size={28} fill="currentColor" className="translate-y-1" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900">{item.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-gold font-bold">{item.role || 'Visiteur'}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="rounded-[4rem] bg-gold p-12 md:p-20 text-center text-white relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="mb-8 text-4xl font-display italic">Contribuez à cet héritage</h2>
          <p className="mx-auto mb-12 max-w-xl text-lg text-white/80 font-light">
            Votre témoignage est une pierre précieuse ajoutée à l'édifice de son héritage universel. Partagez votre expérience avec nous.
          </p>
          <button 
            onClick={() => setIsFormOpen(true)}
            className="rounded-full bg-white px-12 py-4 text-[10px] font-bold uppercase tracking-[0.3em] text-gold transition-all hover:scale-105 active:scale-95 shadow-xl"
          >
            Rédiger un témoignage
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden relative"
            >
              <button 
                onClick={() => setIsFormOpen(false)}
                className="absolute top-8 right-8 p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400"
              >
                <X size={24} />
              </button>

              <div className="p-12 md:p-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-12 w-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display italic text-gray-900">Nouveau Témoignage</h3>
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Partagez votre histoire</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 flex items-center gap-2">
                      <User size={12} className="text-gold" /> Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Votre nom"
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-gold/50 focus:ring-0 transition-all text-sm"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 flex items-center gap-2">
                      <Info size={12} className="text-gold" /> Qui êtes-vous ? (Facultatif)
                    </label>
                    <select
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-gold/50 focus:ring-0 transition-all text-sm appearance-none cursor-pointer"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    >
                      <option value="">Choisir un rôle</option>
                      {roles.map(role => (
                        <option key={role} value={role}>{role}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 flex items-center gap-2">
                      <MessageSquare size={12} className="text-gold" /> Votre témoignage *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Votre message..."
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-gold/50 focus:ring-0 transition-all text-sm resize-none"
                      value={formData.text}
                      onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                    />
                  </div>

                  {message && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className={`p-4 rounded-2xl text-xs font-bold uppercase tracking-widest ${
                        message.type === 'success' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                      }`}
                    >
                      {message.text}
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-dark text-white rounded-full py-5 text-[10px] font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-black transition-all disabled:opacity-50 disabled:cursor-not-allowed group shadow-xl"
                  >
                    {isSubmitting ? (
                      <div className="h-4 w-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Envoyer le témoignage
                        <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

