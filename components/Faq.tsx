'use client';

import { useState } from 'react';
import { trackEvent } from '@/lib/analytics';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  items: FaqItem[];
}

export function Faq({ items }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    const newState = openIndex === index ? null : index;
    setOpenIndex(newState);
    if (newState !== null) {
      trackEvent('faq_expand', { question: items[index].question, index });
    }
  };

  return (
    <section className="py-12 sm:py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
        <p className="text-slate-400 text-lg">Everything you need to know about SoFlo Wheelie</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-800/50 transition-colors"
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="text-lg font-semibold text-white pr-8">{item.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === index && (
              <div
                id={`faq-answer-${index}`}
                className="px-6 pb-5 text-slate-300 leading-relaxed animate-in slide-in-from-top-2 duration-200"
              >
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
