import { motion } from 'motion/react';
import { GraduationCap, Award, Microscope, BookOpen, MapPin } from 'lucide-react';
import Logo from '../Logo';

export default function Biography() {
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
          <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">Un Héritage d'Excellence</span>
          <h1 className="mb-6 text-5xl md:text-8xl italic font-display text-gray-900">Parcours & Histoire</h1>
          <div className="h-0.5 w-24 bg-gold/30 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Portrait d'un visionnaire qui a consacré sa vie à réinventer l'éducation en Haïti.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Main Narrative - Left Column (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            <motion.section 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-8 top-0 text-7xl font-display text-gold/10 pointer-events-none select-none">
                "
              </div>
              <p className="text-2xl md:text-3xl text-gray-800 font-light leading-snug font-display italic">
                Monsieur Charles Guy Étienne est un éducateur, ingénieur et promoteur de l’innovation pédagogique en Haïti.
              </p>
              <div className="mt-8 text-gray-600 leading-relaxed space-y-6 text-lg">
                <p>
                  Né le 13 mai 1953 au Cap-Haïtien, il a consacré plus de quarante ans de sa vie à l’enseignement et à la formation des jeunes haïtiens. 
                  Directeur du Collège Catts Pressoir, il est reconnu pour son engagement en faveur d’une éducation moderne, scientifique et tournée vers le développement du pays.
                </p>
              </div>
            </motion.section>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex gap-4">
                <div className="h-10 w-10 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
                  <GraduationCap className="text-gold" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 uppercase text-xs tracking-widest mb-2">Formation Académique</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Faculté des Sciences de l’UEH & Université Paul Sabatier de Toulouse.
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex gap-4">
                <div className="h-10 w-10 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
                  <Award className="text-gold" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 uppercase text-xs tracking-widest mb-2">Distinctions</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Doctorat Honoris Causa & Global Teacher Prize Finalist.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 text-gray-600 leading-relaxed text-lg"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="h-px flex-grow bg-gray-100"></div>
                <BookOpen size={20} className="text-gold/40" />
                <div className="h-px flex-grow bg-gray-100"></div>
              </div>
              
              <p>
                Après ses études secondaires, monsieur Etienne a étudié les sciences, le génie civil et la chimie à la Faculté des Sciences de l’Université d’État d’Haïti. 
                Il a ensuite poursuivi des études supérieures en France, notamment à l’Université Paul Sabatier de Toulouse, avec l’ambition de devenir docteur en chimie. 
                Cependant, il choisit de revenir en Haïti afin de prendre la direction du Collège Catts Pressoir et de mettre ses connaissances au service de la jeunesse haïtienne.
              </p>

              <blockquote className="border-l-4 border-gold bg-gold/5 p-8 rounded-r-2xl my-10 italic text-gray-700">
                "Sous sa direction, le Collège Catts Pressoir s’est distingué par la qualité de son enseignement, particulièrement dans les domaines des sciences, de la technologie et de l’innovation."
              </blockquote>

              <p>
                Il a encouragé l’intégration des nouvelles technologies dans l’apprentissage et défend une vision de l’école comme moteur du développement économique et social d’Haïti. 
                Sa carrière est jalonnée de distinctions prestigieuses qui témoignent de son rayonnement international.
              </p>

              <div className="bg-dark text-white p-10 rounded-3xl relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-gold font-display italic text-2xl mb-6">Reconnaissance Mondiale</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                      <div className="text-gold font-bold font-display text-xl w-16 pt-1">2015</div>
                      <p className="text-white/70 text-sm">Finaliste du prestigieux <span className="text-white font-medium">Global Teacher Prize</span>, récompensant les meilleurs éducateurs du monde.</p>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="text-gold font-bold font-display text-xl w-16 pt-1">2023</div>
                      <p className="text-white/70 text-sm">L’ISTEAH lui décerne un <span className="text-white font-medium">doctorat honoris causa</span> pour son immense contribution à l’éducation et à la promotion de l’excellence académique en Haïti.</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:scale-110 transition-transform duration-700">
                  <Logo className="scale-150 rotate-[-10deg]" />
                </div>
              </div>

              <p className="pt-6">
                Visionnaire et profondément attaché à l’avenir du pays, il considère l’éducation comme l’un des investissements les plus importants pour reconstruire Haïti. 
                À travers son travail, il inspire de nombreux jeunes à croire en leur potentiel, à développer leur esprit critique et à participer activement au progrès de la société haïtienne.
              </p>
            </motion.section>
          </div>

          {/* Sidebar - Right Column (4 cols) */}
          <aside className="lg:col-span-4 sticky top-32 space-y-8">
            <div className="p-8 border border-gray-100 rounded-3xl bg-white shadow-sm">
              <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-gold mb-6 pb-4 border-b border-gray-100">Fiche de Synthèse</h4>
              <ul className="space-y-6">
                <li className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Naissance</span>
                  <span className="text-gray-800 text-sm font-medium flex items-center gap-2">
                    <MapPin size={12} className="text-gold" /> 13 Mai 1953, Cap-Haitïen
                  </span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Profession</span>
                  <span className="text-gray-800 text-sm font-medium">Éducateur & Ingénieur</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Institution</span>
                  <span className="text-gray-800 text-sm font-medium">Collège Catts Pressoir</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-gold/5 border border-gold/10 rounded-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Microscope className="text-gold" size={18} />
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-900">Méthodologie</h4>
              </div>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                Reconnu pour avoir transformé l'école Catts Pressoir en laboratoire vivant, favorisant l'expérimentation avant la théorie.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

