import React, { useState } from 'react';
import { ChefHat, Check, Clock, Calendar, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS } from '../data/business';
import { IMAGES } from '../data/images';

export const About: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="py-16 md:py-24 bg-[#F5EDDD] border-b border-[#E5D4B8]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Authoritative Chef Edem Portrait */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative max-w-sm sm:max-w-md mx-auto lg:max-w-none">
              
              {/* Portrait Frame Container with Gold Accent */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-[#E5D4B8] bg-[#F2E9D5] aspect-[4/5] sm:aspect-[3/4]">
                
                {/* Subtle Gold Hairline Inset Border */}
                <div className="absolute inset-0 border-2 border-[#C9A227]/30 rounded-2xl sm:rounded-3xl pointer-events-none z-10" />

                {!imgError ? (
                  <img
                    src={IMAGES.chefEdem}
                    alt="Chef Edem of EL CHEFE Private Chef Service"
                    className="w-full h-full object-cover object-[center_18%] sm:object-[center_20%] transition-transform duration-700 hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                    onError={() => {
                      setImgError(true);
                    }}
                  />
                ) : (
                  /* Zero-broken-image graceful styled fallback container */
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#2D2925] to-[#151413] text-white p-8 text-center">
                    <div className="w-20 h-20 rounded-2xl bg-[#C9A227]/20 border border-[#C9A227]/40 flex items-center justify-center text-[#C9A227] mb-4">
                      <ChefHat className="w-10 h-10" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-white">Chef Edem</h3>
                    <p className="text-xs text-[#C9A227] mt-1 font-medium tracking-wide">EL CHEFE Private Chef Service</p>
                    <div className="mt-4 pt-4 border-t border-[#FBF6EC]/10 text-xs text-[#F2E9D5]/80 space-y-1">
                      <p>Mon – Sun · 7:00 AM – 3:00 PM</p>
                      <p className="text-[#C9A227] font-semibold">GH₵500 / day</p>
                    </div>
                  </div>
                )}

                {/* Scrim Overlay with Chef Edem Badge */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#151413]/95 via-[#151413]/70 to-transparent p-5 sm:p-6 text-white z-20">
                  <span className="text-[11px] uppercase tracking-widest text-[#C9A227] font-semibold block mb-1">
                    Private Chef
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
                    Chef Edem
                  </h3>
                  <div className="text-xs text-[#F2E9D5]/85 mt-2 flex flex-wrap items-center justify-between gap-2 pt-2.5 border-t border-[#FBF6EC]/20">
                    <span className="font-medium">EL CHEFE Private Chef Service</span>
                  </div>
                </div>

              </div>

              {/* Service Assurance Micro-Strip */}
              <div className="mt-3 p-3.5 rounded-xl bg-[#FBF6EC] border border-[#E5D4B8] shadow-xs flex items-center justify-between text-xs text-[#4A453F]">
                <div className="flex items-center gap-1.5 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-[#B8860B]" />
                  <span>Mon – Sun</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#B8860B]" />
                  <span>7:00 AM – 3:00 PM</span>
                </div>
                <div className="text-[#151413] font-bold">
                  GH₵500
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Factual Pillars */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#A67C00] font-bold">
                About Chef Edem
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#151413] tracking-tight text-balance">
                Dedicated private chef service for your home.
              </h2>
            </div>

            <div className="space-y-4 text-base text-[#5A544C] leading-relaxed">
              <p>
                <strong>EL CHEFE Private Chef Service</strong> is operated by <strong>Chef Edem</strong>, providing dedicated in-home cooking services.
              </p>
              <p>
                Chef Edem is available <strong>Monday to Sunday</strong> between <strong>7:00 AM and 3:00 PM</strong> at a standard rate of <strong>GH₵500 per day</strong>. The service includes the preparation of local Ghanaian dishes and continental dishes made fresh on-site according to your preferences.
              </p>
              <p>
                Every booking includes complete kitchen cleaning after cooking. Pots, pans, and cooking utensils are washed, and countertops and cooking surfaces are wiped down, leaving your kitchen clean and tidy.
              </p>
            </div>

            {/* 4 Clean Verified Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-3.5 rounded-xl bg-[#FBF6EC] border border-[#E5D4B8] flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#C9A227]/20 text-[#A67C00] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs text-[#4A453F]">
                  <strong className="text-[#151413] block font-semibold">Personalized In-Home Cooking</strong>
                  Cooked fresh in your kitchen during the 7:00 AM – 3:00 PM session.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FBF6EC] border border-[#E5D4B8] flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#C9A227]/20 text-[#A67C00] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs text-[#4A453F]">
                  <strong className="text-[#151413] block font-semibold">Two Cuisine Categories</strong>
                  Local Ghanaian dishes and continental dishes made to your preferences.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FBF6EC] border border-[#E5D4B8] flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#C9A227]/20 text-[#A67C00] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs text-[#4A453F]">
                  <strong className="text-[#151413] block font-semibold">Kitchen Cleaning Included</strong>
                  Pots, pans, utensils washed, and cook surfaces wiped clean after cooking.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FBF6EC] border border-[#E5D4B8] flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#C9A227]/20 text-[#A67C00] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs text-[#4A453F]">
                  <strong className="text-[#151413] block font-semibold">Stated Daily Rate</strong>
                  Standard GH₵500 per day with clear, transparent terms.
                </div>
              </div>
            </div>

            {/* Direct Contact Links */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={BUSINESS.contacts.whatsappPrimaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-[#151413] hover:bg-[#2C2925] rounded-xl transition-all shadow-sm active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227]"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Chef Edem ({BUSINESS.contacts.phonePrimaryDisplay})</span>
              </a>

              <a
                href={BUSINESS.contacts.telPrimaryUrl}
                className="inline-flex items-center gap-2 px-4 py-3 text-xs font-semibold text-[#151413] bg-[#F2E9D5] hover:bg-[#E5D4B8] border border-[#DBC9A8] rounded-xl transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227]"
              >
                <Phone className="w-3.5 h-3.5 text-[#B8860B]" />
                <span>Call {BUSINESS.contacts.phonePrimaryDisplay}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
