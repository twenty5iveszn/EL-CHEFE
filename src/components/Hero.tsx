import React from 'react';
import { ArrowRight, MessageSquare, Clock, Calendar, Sparkles, ShieldCheck } from 'lucide-react';
import { BUSINESS } from '../data/business';
import { IMAGES } from '../data/images';
import { HeroTicker } from './HeroTicker';

const HERO_MESSAGES = [
  { label: 'PRIVATE DINING', message: 'Prepared in your kitchen.' },
  { label: 'FRESHLY PREPARED MEALS', message: 'Local Ghanaian & Continental dishes.' },
  { label: 'KITCHEN CLEANING', message: 'Included after every booking.' },
  { label: 'BOOK DIRECTLY', message: 'WhatsApp 024 886 0055' },
  { label: 'AVAILABILITY', message: 'Monday – Sunday, 7:00 AM – 3:00 PM' },
  { label: 'STANDARD RATE', message: 'GH₵500 per day' },
] as const;

interface HeroProps {
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section className="relative overflow-hidden border-b border-[#E5D4B8]/60 bg-[#F5EDDD]">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#151413]" />
      <div className="absolute -right-40 -top-32 h-96 w-96 rounded-full bg-[#C9A227]/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="mx-auto max-w-4xl lg:mx-0">
            <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#A67C00]">
              <span>EL CHEFE</span>
              <span aria-hidden="true" className="text-[#B8860B]">/</span>
              <span className="text-[#5A544C]">Private Chef Service</span>
            </div>

            <h1 className="max-w-2xl text-5xl font-serif font-bold leading-[0.98] tracking-tight text-[#151413] sm:text-6xl lg:text-8xl">
              Your kitchen.<br />
              <span className="bg-gradient-to-br from-[#E8C547] via-[#C9A227] to-[#B8860B] bg-clip-text text-transparent">Elevated.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-[#5A544C] sm:text-lg">
              Private dining by Chef Edem, prepared fresh in your home. Choose from local Ghanaian favourites or continental dishes, with the kitchen left spotless after cooking.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              onClick={onBookClick}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#151413] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#151413]/15 transition-all hover:bg-[#2C2925] active:scale-[0.98] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227]"
            >
              <span>Book Chef Edem</span>
              <ArrowRight className="w-4 h-4 text-[#C9A227]" />
            </button>

            <a
              href={BUSINESS.contacts.whatsappPrimaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#DBC9A8] bg-[#F2E9D5] px-6 py-3.5 text-sm font-semibold text-[#151413] transition-all hover:bg-[#E5D4B8] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227]"
            >
              <MessageSquare className="w-4 h-4 text-[#128C7E]" />
              <span>WhatsApp ({BUSINESS.contacts.phonePrimaryDisplay})</span>
            </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 border-y border-[#DBC9A8] py-4 text-left">
              <div>
                <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#8A7A5E]">Daily rate</span>
                <span className="mt-1 block text-lg font-bold tabular-nums text-[#151413]">GH₵500 <small className="text-xs font-normal text-[#6E6248]">/ day</small></span>
              </div>
              <div className="border-l border-[#DBC9A8] pl-4">
                <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#8A7A5E]">Hours</span>
                <span className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-[#151413]"><Clock className="h-3.5 w-3.5 text-[#B8860B]" />7 AM – 3 PM</span>
              </div>
              <div className="border-l border-[#DBC9A8] pl-4">
                <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#8A7A5E]">Availability</span>
                <span className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-[#151413]"><Calendar className="h-3.5 w-3.5 text-[#B8860B]" />7 days</span>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#6B6358]">
              <span className="inline-flex items-center gap-1.5"><Sparkles className="h-3.5 w-3.5 text-[#B8860B]" />Freshly prepared meals</span>
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-[#B8860B]" />Kitchen cleaning included</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -left-5 -top-5 h-28 w-28 border-l border-t border-[#B8860B]/60" />
            <div className="relative overflow-hidden rounded-[2rem] border border-[#DBC9A8] bg-[#FDFBF7] p-5 shadow-2xl shadow-[#151413]/15">
              <img
                src={IMAGES.logo}
                alt="EL CHEFE Private Chef Service logo"
                className="h-auto w-full rounded-[1.35rem] object-cover"
              />
            </div>
            <HeroTicker messages={HERO_MESSAGES} />
          </div>

        </div>
      </div>
    </section>
  );
};
