import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-12 pb-24">
        <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl font-bold text-white text-center mb-12">Get in Touch</h1>

            <div className="glass-panel rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
                <div className="grid md:grid-cols-2 gap-12">
                    
                    {/* Contact Info */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">We're here to help</h2>
                            <p className="text-slate-400 mb-8 leading-relaxed">
                                Have questions about your order, shipping, or how to use the device? Our support team is based in Austin, TX and ready to assist you.
                            </p>
                            
                            <div className="space-y-6">
                                {/* Email */}
                                <a href="mailto:support@therajaw.com" className="flex items-center gap-4 text-slate-300 hover:text-white transition group p-3 rounded-xl hover:bg-white/5">
                                    <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Email Us</p>
                                        <p className="font-medium">support@therajaw.com</p>
                                    </div>
                                </a>

                                {/* Phone */}
                                <a href="tel:+18005550199" className="flex items-center gap-4 text-slate-300 hover:text-white transition group p-3 rounded-xl hover:bg-white/5">
                                    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Call Us</p>
                                        <p className="font-medium">+1 (800) 555-0199</p>
                                    </div>
                                </a>

                                {/* Office */}
                                <div className="flex items-center gap-4 text-slate-300 p-3">
                                    <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Office</p>
                                        <p className="font-medium">123 Wellness Blvd, Austin, TX</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-[#0B1120]/50 p-6 rounded-2xl border border-white/5">
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-2 tracking-wide">Name</label>
                                <input type="text" className="w-full bg-[#0B1120] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition" placeholder="Your name" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-2 tracking-wide">Email</label>
                                <input type="email" className="w-full bg-[#0B1120] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition" placeholder="you@example.com" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-2 tracking-wide">Message</label>
                                <textarea rows={4} className="w-full bg-[#0B1120] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition" placeholder="How can we help?"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-sky-500 hover:bg-sky-400 text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20">
                                <Send size={18} /> Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
  );
};

export default Contact;