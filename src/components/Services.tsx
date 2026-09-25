import React from 'react';
import { Utensils, Sparkles, Check, Clock, ArrowRight } from 'lucide-react';
import { BUSINESS } from '../data/business';
import { IMAGES } from '../data/images';

interface ServicesProps {
  onBookClick: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onBookClick }) => {
  return (
    <section id="services" className="py-16 md:py-24 bg-[#FBF6EC] border-b border-[#E5D4B8]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest text-[#A67C00] font-bold">
            What We Do
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#151413] tracking-tight mt-1">
            Complete private chef care, from preparation to a clean kitchen.
          </h2>
          <p className="text-sm sm:text-base text-[#6E6248] mt-3">
            Two services included in every booking under the standard rate of {BUSINESS.currency}{BUSINESS.ratePerDay} per day.
          </p>
        </div>

        {/* 2 Marquee Service Cards (Asymmetric Bento/Card Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Service 1: Freshly Prepared Meals */}
          <div className="bg-[#FFFFFF] p-8 rounded-2xl border border-[#E5D4B8] shadow-sm flex flex-col justify-between hover:border-[#C9A227] transition-colors relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FBF6EC] -mr-10 -mt-10 rounded-full border border-[#E5D4B8]/50 -z-0 pointer-events-none group-hover:scale-110 transition-transform" />
            
            <div className="relative z-10 space-y-5">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#151413] text-[#C9A227] flex items-center justify-center">
                  <Utensils className="w-6 h-6" />
                </div>
                <span className="text-xs font-serif font-semibold text-[#8A7A5E] tracking-widest">
                  SERVICE 01
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 h-32 overflow-hidden rounded-xl">
                <img
                  src={IMAGES.cuisineGhanaian}
                  alt="Cuisine inspiration â€” Illustrative presentation of Ghanaian dish example"
                  className="w-full h-full object-cover rounded-xl"
                />
                <img
                  src={IMAGES.cuisineContinental}
                  alt="Cuisine inspiration â€” Illustrative presentation of continental dish example"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#151413]">
                  Freshly Prepared Meals
                </h3>
                <p className="text-sm text-[#5A544C] leading-relaxed mt-2">
                  Meals prepared fresh in your kitchen by Chef Edem during the 7:00 AM – 3:00 PM session. Features local Ghanaian dishes and continental dishes made to your preferences.
                </p>
              </div>

              <div className="pt-2 space-y-2.5 border-t border-[#F2E9D5]">
                <div className="flex items-start gap-2.5 text-sm text-[#3E3A34]">
                  <Check className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
                  <span>Cooked fresh on-site in your kitchen</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-[#3E3A34]">
                  <Check className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
                  <span>Local Ghanaian dishes & continental dishes</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-[#3E3A34]">
                  <Check className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
                  <span>Menu options can be discussed based on your preferences</span>
                </div>
              </div>
            </div>

            <div className="pt-6 relative z-10">
              <button
                onClick={onBookClick}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#151413] hover:text-[#B8860B] transition-colors cursor-pointer"
              >
                <span>Book this service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Service 2: Kitchen Cleaning After Cooking */}
          <div className="bg-[#FFFFFF] p-8 rounded-2xl border border-[#E5D4B8] shadow-sm flex flex-col justify-between hover:border-[#C9A227] transition-colors relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FBF6EC] -mr-10 -mt-10 rounded-full border border-[#E5D4B8]/50 -z-0 pointer-events-none group-hover:scale-110 transition-transform" />

            <div className="relative z-10 space-y-5">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#151413] text-[#C9A227] flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-xs font-serif font-semibold text-[#8A7A5E] tracking-widest">
                  SERVICE 02
                </span>
              </div>

              <div className="h-32 overflow-hidden rounded-xl">
                <img
                  src={IMAGES.serviceSpotlessKitchen}
                  alt="Illustrative representation of cleaned cooking surfaces and pots after meal preparation"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#151413]">
                  Kitchen Cleaning After Cooking
                </h3>
                <p className="text-sm text-[#5A544C] leading-relaxed mt-2">
                  Complete kitchen cleanup following meal preparation. Chef Edem washes cooking utensils, pots, and pans, and cleans cooking surfaces so your kitchen is left neat and tidy.
                </p>
              </div>

              <div className="pt-2 space-y-2.5 border-t border-[#F2E9D5]">
                <div className="flex items-start gap-2.5 text-sm text-[#3E3A34]">
                  <Check className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
                  <span>Washing pots, pans, and cooking utensils</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-[#3E3A34]">
                  <Check className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
                  <span>Wiping down cooking hobs and countertops</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-[#3E3A34]">
                  <Check className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
                  <span>Kitchen left clean and tidy after cooking</span>
                </div>
              </div>
            </div>

            <div className="pt-6 relative z-10">
              <button
                onClick={onBookClick}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#151413] hover:text-[#B8860B] transition-colors cursor-pointer"
              >
                <span>Book this service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Feature Spotlight Banner: Kitchen Cleaning */}
        <div className="mt-10 rounded-2xl bg-[#151413] text-white p-6 sm:p-8 border border-[#2D2925] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 rounded-xl overflow-hidden aspect-video lg:aspect-square relative">
            <img
              src={IMAGES.serviceSpotlessKitchen}
              alt="Illustrative representation of cleaned cooking surfaces and pots after meal preparation"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#151413]/80 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 text-xs font-medium text-[#C9A227]">
              Kitchen Cleaning After Cooking
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-xs text-[#C9A227] font-semibold uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5" />
              <span>Service Hours: 7:00 AM to 3:00 PM</span>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white text-balance">
              Both services included in the daily rate of {BUSINESS.currency}{BUSINESS.ratePerDay}.
            </h3>
            
            <p className="text-sm text-[#DBC9A8] leading-relaxed">
              Every booking with Chef Edem covers freshly prepared meals and complete kitchen cleaning after cooking within the 7:00 AM – 3:00 PM service window.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium">
              <span className="text-[#FBF6EC]">✓ Monday to Sunday availability</span>
              <span className="text-[#FBF6EC]">✓ Standard rate of GH₵500 per day</span>
              <span className="text-[#FBF6EC]">✓ Local Ghanaian and continental dishes</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
