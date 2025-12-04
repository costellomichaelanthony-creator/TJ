import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "How often should I use TheraJaw?",
        answer: "We recommend using TheraJaw for 5-10 minutes a day. The best time is right before bed to relax the jaw muscles before sleep, reducing the likelihood of overnight clenching. You can also use it in the morning to relieve any tension accumulated during the night."
    },
    {
        question: "Is it safe for sensitive skin?",
        answer: "Yes. The massage heads are made from medical-grade, hypoallergenic silicone that is gentle on all skin types. It is non-porous and easy to clean with a damp cloth or mild soap."
    },
    {
        question: "Does it really help with TMJ?",
        answer: "While we cannot offer medical advice, thousands of users report significant relief from TMJ symptoms by regularly massaging the masseter muscle. Releasing trigger points in this muscle often alleviates referred pain in the temples, ears, and jaw."
    },
    {
        question: "Does it fit all head sizes?",
        answer: "TheraJaw is designed with a flexible, high-tensile frame that expands to fit head circumferences from small to extra-large without losing its ergonomic shape or applying uncomfortable pressure."
    },
    {
        question: "Can I use it while wearing a night guard?",
        answer: "Absolutely. TheraJaw works externally on the muscles, while a night guard works internally to protect teeth. Using both can provide a comprehensive approach to managing Bruxism."
    },
    {
        question: "What is the return policy?",
        answer: "We offer a 30-day money-back guarantee. If you don't feel relief within the first month of consistent use, send it back for a full refund, no questions asked."
    }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="pt-12 pb-24">
        <section className="max-w-3xl mx-auto px-6">
            <h1 className="text-4xl font-bold text-white text-center mb-6">Frequently Asked Questions</h1>
            <p className="text-slate-400 text-center mb-16">Everything you need to know about the product and billing.</p>
            
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="glass-panel rounded-xl overflow-hidden border border-white/5 transition-all duration-300">
                        <button 
                            onClick={() => toggleFAQ(index)} 
                            className="w-full p-6 text-left flex justify-between items-center text-white font-medium hover:bg-white/5 transition focus:outline-none"
                        >
                            <span className="pr-4">{faq.question}</span>
                            <ChevronDown 
                                size={20} 
                                className={`text-slate-400 transition-transform duration-300 ${activeIndex === index ? 'rotate-180 text-sky-400' : ''}`} 
                            />
                        </button>
                        <div 
                            className={`bg-[#0B1120]/50 overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            <p className="p-6 text-slate-400 text-sm leading-relaxed border-t border-white/5">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <p className="text-slate-400 mb-4">Still have questions?</p>
                <a href="mailto:support@therajaw.com" className="text-sky-400 font-bold hover:text-sky-300 transition underline underline-offset-4">
                    Contact Support
                </a>
            </div>
        </section>
    </div>
  );
};

export default FAQ;