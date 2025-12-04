import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative pt-20 pb-24 overflow-hidden hero-glow">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Hero Text */}
              <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-wider mb-6">
                      <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span> TMJ Therapy Technology
                  </div>
                  <h1 className="text-5xl sm:text-7xl font-bold text-white leading-[1.1] mb-6">
                      Stop the <br />
                      <span className="gradient-text">Grind.</span>
                  </h1>
                  <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-lg">
                      The first clinical-grade massager designed to release the <strong>Masseter</strong> and <strong>Temporalis</strong> muscles. Eliminate morning headaches and jaw locking in 5 minutes a day.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                      <Link to="/product" className="bg-sky-500 hover:bg-sky-400 text-white px-8 py-4 rounded-xl font-bold text-lg text-center transition shadow-[0_0_30px_rgba(56,189,248,0.3)] flex items-center justify-center gap-2">
                          Get Relief Today <ArrowRight size={20} />
                      </Link>
                  </div>
              </div>

              {/* Hero Image Placeholder */}
              <div className="relative mt-12 lg:mt-0">
                  <div className="absolute -inset-4 bg-sky-500/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                  <div className="glass-panel p-8 rounded-3xl warm-glow relative z-10 aspect-square flex flex-col items-center justify-center border border-sky-500/20">
                      <div className="w-48 h-48 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center shadow-2xl relative mb-6 border border-white/10">
                          <Activity className="text-sky-400" size={80} />
                          <div className="absolute top-4 right-4 w-4 h-4 bg-orange-500 rounded-full shadow-[0_0_10px_orange] animate-pulse"></div>
                      </div>
                      <div className="text-center">
                          <h3 className="text-white font-bold text-xl">TheraJaw Pro</h3>
                          <p className="text-sky-400 text-sm mt-1">Heating & Vibration Active</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* QUICK INTRO SECTION */}
      <section className="py-24 bg-slate-900/50">
          <div className="max-w-3xl mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Why TheraJaw?</h2>
              <p className="text-slate-400 leading-relaxed mb-8 text-lg">
                  Most solutions just protect your teeth. We treat the <span className="text-sky-400 font-semibold">cause</span>.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                  <div className="p-6 rounded-2xl bg-[#0B1120] border border-white/5">
                      <h3 className="text-white font-bold text-xl mb-2">Targeted</h3>
                      <p className="text-slate-500 text-sm">Precise relief for masseter muscles.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-[#0B1120] border border-white/5">
                      <h3 className="text-white font-bold text-xl mb-2">Thermal</h3>
                      <p className="text-slate-500 text-sm">Gentle heat to melt tension away.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-[#0B1120] border border-white/5">
                      <h3 className="text-white font-bold text-xl mb-2">Drug-Free</h3>
                      <p className="text-slate-500 text-sm">100% natural neuromuscular release.</p>
                  </div>
              </div>
              
              <div className="mt-12">
                <Link to="/about" className="text-sky-400 hover:text-sky-300 font-semibold inline-flex items-center gap-2">
                    Read our full story <ArrowRight size={16} />
                </Link>
              </div>
          </div>
      </section>
    </>
  );
};

export default Home;