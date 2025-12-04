import React from 'react';
import { Flame, Waves, ScanFace, Check, Star } from 'lucide-react';

const Product: React.FC = () => {
  return (
    <div className="pt-12">
      {/* HEADER */}
      <section className="text-center px-6 mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Clinical Technology. <br /><span className="gradient-text">Personal Relief.</span></h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              TheraJaw combines sonic vibration with thermal therapy to break the cycle of clenching and grinding.
          </p>
      </section>

      {/* FEATURES GRID */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="grid md:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div className="glass-panel p-8 rounded-2xl hover:border-sky-500/30 transition duration-300">
                  <div className="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center text-sky-400 mb-6">
                      <Waves size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Sonic Vibration</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                      Gentle micro-vibrations oscillate at 120Hz to penetrate deep into the muscle belly, breaking up lactic acid buildup and interrupting the clenching reflex signal.
                  </p>
              </div>
              {/* Feature 2 */}
              <div className="glass-panel p-8 rounded-2xl border-orange-500/30 shadow-[0_0_30px_rgba(234,88,12,0.1)] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 blur-2xl rounded-full"></div>
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-400 mb-6 relative z-10">
                      <Flame size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 relative z-10">Thermal Therapy</h3>
                  <p className="text-slate-400 text-sm leading-relaxed relative z-10">
                      Consistent warmth (104°F / 40°C) increases localized blood flow to the jaw joint (TMJ), instantly soothing chronic pain and improving range of motion.
                  </p>
              </div>
              {/* Feature 3 */}
              <div className="glass-panel p-8 rounded-2xl hover:border-sky-500/30 transition duration-300">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center text-indigo-400 mb-6">
                      <ScanFace size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Ergonomic Fit</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                      Designed with an adjustable, medical-grade silicone headset that glides over the temples and jawline without pinching, accommodating all head shapes.
                  </p>
              </div>
          </div>
      </section>

      {/* PRICING / BUY SECTION */}
      <section className="py-24 bg-slate-900/50">
          <div className="max-w-5xl mx-auto px-6">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row gap-12 items-center">
                  
                  <div className="flex-1 space-y-6">
                      <div className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full uppercase tracking-wide">In Stock - Ships Free</div>
                      <h2 className="text-3xl font-bold text-white">TheraJaw Pro System</h2>
                      <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-bold text-white">$49.99</span>
                          <span className="text-slate-500 line-through text-lg">$89.99</span>
                      </div>
                      <p className="text-slate-400 text-sm">
                          Everything you need to stop the grind. Includes the TheraJaw device, USB-C charging cable, and travel case.
                      </p>
                      
                      <ul className="space-y-3 pt-4">
                          {['30-Day Money Back Guarantee', '1-Year Warranty', 'Free US Shipping'].map((item, i) => (
                              <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                                  <div className="w-5 h-5 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                                      <Check size={12} />
                                  </div>
                                  {item}
                              </li>
                          ))}
                      </ul>
                  </div>

                  <div className="flex-1 w-full">
                      <div className="bg-[#0B1120] p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center">
                           {/* Placeholder for Product Image */}
                           <div className="w-full aspect-[4/3] bg-slate-800 rounded-xl mb-6 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 to-transparent"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <ScanFace size={64} className="text-white/20 group-hover:text-sky-500/50 transition duration-500 transform group-hover:scale-110" />
                                </div>
                           </div>
                           
                           <button className="w-full bg-white text-indigo-900 text-lg font-bold py-4 rounded-xl hover:bg-sky-50 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mb-3">
                               Add to Cart
                           </button>
                           <p className="text-xs text-slate-500">Secure checkout powered by Stripe</p>
                      </div>
                  </div>

              </div>
          </div>
      </section>

      {/* REVIEWS SNIPPET */}
      <section className="py-20 max-w-4xl mx-auto px-6 text-center">
        <div className="flex justify-center gap-1 text-yellow-500 mb-4">
            {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={20} />)}
        </div>
        <h3 className="text-2xl font-bold text-white mb-6">"I haven't woken up with a headache in 3 weeks."</h3>
        <p className="text-slate-400">– Sarah J., Verified Buyer</p>
      </section>
    </div>
  );
};

export default Product;