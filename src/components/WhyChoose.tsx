import React from 'react';
import { Sparkles, Utensils, Clock, Calendar, ShieldCheck, PhoneCall } from 'lucide-react';
import { BUSINESS } from '../data/business';

export const WhyChoose: React.FC = () => {
  const points = [
    {
      icon: Utensils,
      title: "Freshly Prepared Meals",
      description: "Meals prepared fresh on-site in your kitchen by Chef Edem during the 7:00 AM – 3:00 PM session."
    },
    {
      icon: Sparkles,
      title: "Kitchen Cleaning After Cooking",
      description: "Pots, pans, and cooking utensils are washed, and cooking surfaces are wiped down before completing the session."
    },
    {
      icon: Clock,
      title: "Hours: 7:00 AM – 3:00 PM",
      description: "Dedicated daily working hours from 7:00 AM to 3:00 PM for on-site meal preparation and cleanup."
    },
    {
      icon: Calendar,
      title: "Monday to Sunday Operating Days",
      description: "Chef Edem is available seven days a week, Monday through Sunday, to fit your schedule."
    },
    {
      icon: ShieldCheck,
      title: "Standard Rate: GH₵500 / Day",
      description: "A clear rate of GH₵500 per day covering both on-site meal preparation and kitchen cleaning after cooking."
    },
    {
      icon: PhoneCall,
      title: "Direct Contact With Chef Edem",
      description: `Speak directly with Chef Edem for enquiries and arrangements via call or WhatsApp on ${BUSINESS.contacts.phonePrimaryDisplay} or ${BUSINESS.contacts.phoneSecondaryDisplay}.`
    }
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 bg-[#F5EDDD] border-b border-[#E5D4B8]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest text-[#A67C00] font-bold">
            Service Details
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#151413] tracking-tight mt-1">
            Why choose EL CHEFE Private Chef Service
          </h2>
          <p className="text-sm sm:text-base text-[#6E6248] mt-2">
            Clear service details and verified standards for every private chef booking with Chef Edem.
          </p>
        </div>

        {/* 6 Clean Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {points.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#FBF6EC] p-7 rounded-2xl border border-[#E5D4B8] hover:border-[#C9A227] transition-colors shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-[#151413] text-[#C9A227] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#151413]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A544C] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-2 border-t border-[#F2E9D5]/80 flex items-center justify-between text-[11px] text-[#8A7A5E]">
                  <span>EL CHEFE Standard</span>
                  <span className="font-serif font-semibold text-[#151413]">0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
