import React from 'react';
import { Heart, Brain, Smile } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-12">
        <section className="max-w-3xl mx-auto px-6 text-center mb-20">
            <h1 className="text-4xl font-bold text-white mb-6">Our Story</h1>
            <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full mb-8"></div>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
                We founded TheraJaw because we were tired of the "mouthguard solution." Dentists told us to just put plastic between our teeth to stop the damage, but that never solved the root cause: <strong>Muscle Tension.</strong>
            </p>
        </section>

        <section className="bg-slate-900/50 py-20">
            <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div>
                     <div className="aspect-square bg-slate-800 rounded-2xl overflow-hidden relative border border-white/5">
                        {/* Abstract placeholder visual for 'Founders' or 'Lab' */}
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-sky-900/50"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Brain size={120} className="text-white/5" />
                        </div>
                     </div>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-white mb-6">The Missing Piece</h2>
                    <p className="text-slate-400 leading-relaxed mb-6">
                        For decades, the standard of care for Bruxism (teeth grinding) has been purely protective. While night guards save your enamel, they often act as a chew toy for your subconscious, actually <em>increasing</em> the muscle activity during sleep.
                    </p>
                    <p className="text-slate-400 leading-relaxed">
                        TheraJaw was developed in consultation with neuromuscular dentists and physical therapists. We realized that if we could relax the masseter muscle <em>before</em> sleep, the brain would have less feedback loops triggering the grind.
                    </p>
                </div>
            </div>
        </section>

        <section className="py-24 max-w-7xl mx-auto px-6">
             <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
                <p className="text-slate-400 mt-4">To provide non-invasive, drug-free relief for the millions suffering in silence.</p>
             </div>

             <div className="grid md:grid-cols-3 gap-8">
                 <div className="text-center p-8 border border-white/5 rounded-2xl bg-[#0B1120] hover:bg-slate-900 transition">
                     <div className="w-16 h-16 bg-red-500/10 text-red-400 rounded-full flex items-center justify-center mx-auto mb-6">
                         <Heart size={32} />
                     </div>
                     <h3 className="text-white font-bold text-xl mb-3">Holistic Wellness</h3>
                     <p className="text-slate-400 text-sm">We believe in treating the body as a whole system, not just treating symptoms.</p>
                 </div>
                 <div className="text-center p-8 border border-white/5 rounded-2xl bg-[#0B1120] hover:bg-slate-900 transition">
                     <div className="w-16 h-16 bg-sky-500/10 text-sky-400 rounded-full flex items-center justify-center mx-auto mb-6">
                         <Brain size={32} />
                     </div>
                     <h3 className="text-white font-bold text-xl mb-3">Neuromuscular Science</h3>
                     <p className="text-slate-400 text-sm">Every product we design is backed by the physiology of how muscles contract and release.</p>
                 </div>
                 <div className="text-center p-8 border border-white/5 rounded-2xl bg-[#0B1120] hover:bg-slate-900 transition">
                     <div className="w-16 h-16 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                         <Smile size={32} />
                     </div>
                     <h3 className="text-white font-bold text-xl mb-3">Accessible Relief</h3>
                     <p className="text-slate-400 text-sm">Clinical therapy shouldn't cost thousands. We make professional relief available at home.</p>
                 </div>
             </div>
        </section>
    </div>
  );
};

export default About;