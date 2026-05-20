import { motion } from 'motion/react';
import { Lightbulb, Cpu, ShieldCheck, Users, Target, Rocket, MessageCircle, Sparkles } from 'lucide-react';
import Logo from '../Logo';

export default function Vision() {
  return (
    <div className="py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">Les Piliers du Futur</span>
          <h1 className="mb-6 text-5xl md:text-8xl italic font-display text-gray-900">Vision Stratégique</h1>
          <div className="h-0.5 w-24 bg-gold/30 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Une éducation fondée sur l’excellence, la discipline et l’innovation pour forger les citoyens de demain.
          </p>
        </motion.div>

        {/* Main Philosophy Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-display italic text-gray-900 leading-tight">
              Une vision centrée sur le <span className="text-gold underline decoration-gold/20 underline-offset-8">développement humain</span>
            </h2>
            <div className="text-gray-600 leading-relaxed space-y-4 text-lg">
              <p>
                À la tête du Collège Catts Pressoir, Monsieur Étienne incarne une vision de l’éducation fondée sur l’excellence, la discipline et l’innovation. 
                Convaincu que l’école ne doit pas seulement transmettre des connaissances, mais aussi former des citoyens capables de réfléchir, de créer et d’agir pour leur pays, 
                il place le développement intellectuel et humain des élèves au cœur de sa mission.
              </p>
              <p className="font-medium text-gray-900 underline decoration-gold/30 underline-offset-4">
                Pour lui, chaque jeune possède un potentiel unique qu’il faut révéler et encourager.
              </p>
            </div>
          </motion.div>

          {/* The "Blue Box" (Cadran Bleu) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-12 bg-[#0A192F] rounded-[3rem] overflow-hidden group shadow-2xl"
          >
            <div className="relative z-10">
              <ShieldCheck className="text-gold mb-6" size={40} />
              <h3 className="text-white text-2xl font-display italic mb-6">Confiance & Rigueur</h3>
              <p className="text-blue-100/70 text-sm leading-relaxed mb-8">
                Son état d’esprit repose sur la rigueur, la persévérance et la confiance dans les capacités de la jeunesse haïtienne. 
                Malgré les défis auxquels le pays fait face, il croit profondément que les jeunes peuvent devenir des acteurs du changement grâce au savoir, à la créativité et au travail. 
                Cette conviction l’a poussé à moderniser l’enseignement au sein du collège en favorisant les sciences, la technologie, l’innovation et les activités qui stimulent la réflexion et l’expression personnelle.
              </p>
              <div className="flex gap-4">
                <Target size={18} className="text-gold" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-white/40">Objectif : Excellence Nationale</span>
              </div>
            </div>
            <div className="absolute inset-0 opacity-20 filter grayscale blend-luminosity hover:scale-110 transition-transform duration-1000">
               <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800" alt="Innovation" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>

        {/* Management & Values Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 bg-white border border-gray-100 p-12 md:p-16 rounded-[3rem] shadow-sm relative overflow-hidden"
        >
          <div className="max-w-3xl relative z-10">
            <h3 className="text-2xl font-display italic text-gold mb-8 italic">Management & Valeurs</h3>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Dans sa manière de gérer l’école, il privilégie l’organisation, l’exigence académique et l’encadrement des élèves. 
                Il instaure un environnement où le respect, la discipline et l’effort sont considérés comme des valeurs essentielles à la réussite.
              </p>
              <p>
                Cependant, au-delà de cette exigence, il accorde aussi une grande importance à l’épanouissement personnel des élèves. 
                Il cherche à développer chez eux l’autonomie, la confiance en soi, l’esprit critique et le sens des responsabilités.
              </p>
            </div>
          </div>
          <div className="absolute top-1/2 right-12 -translate-y-1/2 opacity-[0.03] pointer-events-none hidden lg:block">
            <Users size={300} />
          </div>
        </motion.section>

        {/* Empowerment Section */}
        <section className="bg-gray-50 rounded-[4rem] p-12 md:p-20 relative overflow-hidden">
          <div className="max-w-3xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-3xl md:text-5xl font-display italic text-gray-900 mb-8 mt-4">Espaces d’expression et de valorisation</h3>
              <div className="text-gray-600 leading-relaxed text-lg space-y-6">
                <p>
                  L’une des particularités de sa vision éducative est sa volonté de mettre les élèves en avant et de leur offrir des espaces d’expression et de valorisation. 
                  Il encourage activement ces élèves à participer à des activités à l'école afin de développer leur capacité d’argumentation, leur ouverture d’esprit et leur réflexion personnelle.
                </p>
                <p>
                  Il favorise également leur présence dans des expositions technologiques et scientifiques, où ils peuvent présenter leurs projets, leurs talents et leur créativité. 
                  À travers ces activités, il permet aux élèves de sortir du cadre traditionnel de la salle de classe et de découvrir leurs capacités dans des domaines variés.
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full border border-gray-100 shadow-sm text-xs font-bold text-gray-700">
                  <Sparkles size={14} className="text-gold" /> Expositions Tech
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="absolute -bottom-24 -right-24 opacity-5 pointer-events-none">
            <Logo className="scale-[3]" />
          </div>
        </section>

        {/* Conclusion / Legacy Text */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center max-w-3xl mx-auto"
        >
          <div className="flex justify-center mb-8">
             <div className="h-1 w-12 bg-gold rounded-full"></div>
          </div>
          <div className="space-y-6 text-2xl text-gray-700 font-display italic leading-relaxed">
            <p>
              "Pour monsieur Étienne, l’école doit être un lieu où les jeunes apprennent à penser, à innover et à croire en leurs compétences. 
              Grâce à son leadership et à sa vision tournée vers l’avenir, il inspire de nombreuses générations d’élèves à viser l’excellence et à comprendre que l’éducation est l’un des plus grands outils pour construire un avenir meilleur pour Haïti."
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

