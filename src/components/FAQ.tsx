import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare, Phone } from 'lucide-react';
import { BUSINESS } from '../data/business';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: "What does EL CHEFE offer?",
      answer: "EL CHEFE Private Chef Service provides freshly prepared meals cooked on-site in your kitchen and complete kitchen cleaning after cooking."
    },
    {
      question: "What is the daily rate?",
      answer: "The stated private chef service rate is GH₵500 per day, covering on-site cooking and kitchen cleaning after cooking during the daily service window."
    },
    {
      question: "What are the working hours?",
      answer: "Chef Edem is available Monday to Sunday from 7:00 AM to 3:00 PM."
    },
    {
      question: "What types of cuisine are available?",
      answer: "Local Ghanaian dishes and continental dishes. Menu options can be discussed based on your preferences."
    },
    {
      question: "How do I enquire about a booking?",
      answer: "You can submit the booking enquiry form on this website or reach out directly to Chef Edem via WhatsApp (024 886 0055), phone, or email."
    },
    {
      question: "Is my requested date automatically confirmed?",
      answer: "No. The booking form is an enquiry system. Chef Edem will review your request and personally confirm availability for your preferred date upon receiving your message."
    }
  ];

  // Open first item by default for immediate preview
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-20 bg-[#FBF6EC] border-b border-[#E5D4B8]/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs uppercase tracking-widest text-[#A67C00] font-bold">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#151413] tracking-tight mt-1">
            Questions & Answers
          </h2>
          <p className="text-sm sm:text-base text-[#6E6248] mt-2">
            Clear information about Chef Edem's private chef service, rates, and booking process.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-[#E5D4B8] bg-[#FFFFFF] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full min-h-[52px] px-5 py-4 flex items-center justify-between text-left gap-4 hover:bg-[#FBF6EC]/60 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227]"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#151413]">
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full bg-[#FBF6EC] border border-[#E5D4B8] flex items-center justify-center shrink-0 text-[#151413] transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#151413] text-white border-[#151413]' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-[#5A544C] leading-relaxed border-t border-[#F2E9D5]/60">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct communication note */}
        <div className="mt-8 p-4 sm:p-5 rounded-xl bg-[#F5EDDD] border border-[#E5D4B8] text-xs sm:text-sm text-[#5A544C] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-start sm:items-center gap-2">
            <HelpCircle className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5 sm:mt-0" />
            <span>Have specific questions regarding ingredients, menus, or arrangements?</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={BUSINESS.contacts.whatsappPrimaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#128C7E] hover:underline inline-flex items-center gap-1"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Ask on WhatsApp</span>
            </a>
            <span className="text-[#A89E92]">·</span>
            <a
              href={BUSINESS.contacts.telPrimaryUrl}
              className="font-bold text-[#151413] hover:text-[#B8860B] inline-flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 text-[#B8860B]" />
              <span>Call Chef Edem</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
