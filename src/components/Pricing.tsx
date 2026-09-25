import React from 'react';
import { Check, Clock, Calendar, HelpCircle, ArrowRight } from 'lucide-react';
import { BUSINESS } from '../data/business';

interface PricingProps {
  days: number;
  onDaysChange: (days: number) => void;
  onBookClick: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ days, onDaysChange, onBookClick }) => {
  const calculateTotal = (numDays: number) => numDays * BUSINESS.ratePerDay;

  const quickDayOptions = [1, 2, 3, 5, 7, 14];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-[#FBF6EC] border-b border-[#E5D4B8]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest text-[#A67C00] font-bold">
            Transparent Service Rate
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#151413] tracking-tight mt-1">
            Standard Daily Service Rate
          </h2>
          <p className="text-sm sm:text-base text-[#6E6248] mt-2">
            The service rate is {BUSINESS.currency}{BUSINESS.ratePerDay} per day for on-site meal preparation and kitchen cleaning after cooking during the 7:00 AM – 3:00 PM session.
          </p>
        </div>

        {/* Pricing & Interactive Day Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Pricing Box */}
          <div className="lg:col-span-6 bg-[#FFFFFF] rounded-2xl border-2 border-[#151413] p-7 sm:p-9 shadow-md flex flex-col justify-between relative">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#A67C00] tracking-widest uppercase block">
                    Full Day Culinary Service
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-[#151413] mt-0.5">
                    Private Chef Daily Rate
                  </h3>
                </div>
                <div className="px-3 py-1 rounded-md bg-[#FBF6EC] border border-[#E5D4B8] text-xs font-semibold text-[#151413]">
                  Standard Daily Rate
                </div>
              </div>

              <div className="py-2 border-b border-[#F2E9D5]">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-serif font-bold text-[#151413] tabular-nums">
                    {BUSINESS.currency}{BUSINESS.ratePerDay}
                  </span>
                  <span className="text-sm font-medium text-[#7A7063]">
                    / day
                  </span>
                </div>
                <p className="text-xs text-[#8A7A5E] mt-1">
                  Service window: 7:00 AM – 3:00 PM.
                </p>
              </div>

              {/* Inclusions List */}
              <div className="space-y-3">
                <span className="text-xs uppercase font-bold text-[#151413] tracking-wider block">
                  What is included in every booking:
                </span>
                
                <div className="flex items-start gap-3 text-sm text-[#3E3A34]">
                  <div className="w-5 h-5 rounded-full bg-[#C9A227]/20 text-[#A67C00] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong>Freshly prepared meals</strong>: Cooked on-site in your kitchen.
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-[#3E3A34]">
                  <div className="w-5 h-5 rounded-full bg-[#C9A227]/20 text-[#A67C00] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong>Kitchen cleaning after cooking</strong>: Pots, pans, cooking utensils, and surfaces cleaned.
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-[#3E3A34]">
                  <div className="w-5 h-5 rounded-full bg-[#C9A227]/20 text-[#A67C00] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong>Cuisine options</strong>: Local Ghanaian dishes and continental dishes.
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-[#3E3A34]">
                  <div className="w-5 h-5 rounded-full bg-[#C9A227]/20 text-[#A67C00] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong>Operating days</strong>: Available Monday to Sunday.
                  </div>
                </div>
              </div>

            </div>

            <div className="pt-8 border-t border-[#F2E9D5] mt-6">
              <button
                onClick={() => {
                  onDaysChange(1);
                  onBookClick();
                }}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#D4A346] to-[#B8860B] text-white hover:from-[#E8C547] hover:to-[#C9A227] font-semibold text-sm transition-all shadow-[0_8px_24px_-8px_rgba(201,162,39,0.5)] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Chef Edem for GH₵500/day</span>
                <ArrowRight className="w-4 h-4 text-[#C9A227]" />
              </button>
            </div>
          </div>

          {/* Interactive Multi-Day Estimator */}
          <div className="lg:col-span-6 bg-[#F5EDDD] rounded-2xl border border-[#E5D4B8] p-7 sm:p-9 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#A67C00] font-bold">
                  Interactive Planner
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#151413] mt-1">
                  Duration & Cost Calculator
                </h3>
                <p className="text-xs sm:text-sm text-[#6E6248] mt-1">
                  Select your required booking duration. The estimated service fee is calculated as days × GH₵500:
                </p>
              </div>

              {/* Day selection buttons */}
              <div>
                <label className="text-xs font-semibold text-[#151413] block mb-2">
                  Select Number of Days:
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {quickDayOptions.map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => onDaysChange(d)}
                      className={`py-2 px-3 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                        days === d
                          ? 'bg-[#151413] text-white border-[#151413] shadow-xs'
                          : 'bg-[#FBF6EC] text-[#4A453F] border-[#DBC9A8] hover:border-[#151413]'
                      }`}
                    >
                      {d} {d === 1 ? 'Day' : 'Days'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider for custom days */}
              <div className="space-y-1.5 pt-2">
                <div className="flex justify-between text-xs text-[#5A544C]">
                  <span>Or adjust slider:</span>
                  <span className="font-bold text-[#151413]">{days} {days === 1 ? 'day' : 'days'}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="14"
                  value={days}
                  onChange={(e) => onDaysChange(Number(e.target.value))}
                  className="w-full accent-[#B8860B] cursor-pointer"
                  aria-label="Booking duration in days"
                />
              </div>

              {/* Live Calculation Output Card */}
              <div className="p-5 rounded-xl bg-[#FBF6EC] border border-[#E5D4B8] space-y-3">
                <div className="flex items-center justify-between text-sm text-[#5A544C]">
                  <span>Rate per day:</span>
                  <span className="font-semibold text-[#151413] tabular-nums">{BUSINESS.currency}{BUSINESS.ratePerDay}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-[#5A544C]">
                  <span>Duration:</span>
                  <span className="font-semibold text-[#151413]">{days} {days === 1 ? 'day' : 'days'}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-[#5A544C]">
                  <span>Daily hours:</span>
                  <span className="font-semibold text-[#151413]">{BUSINESS.workingHours}</span>
                </div>
                
                <div className="pt-3 border-t border-[#F2E9D5] flex items-baseline justify-between">
                  <span className="text-sm font-bold text-[#151413]">Estimated service fee:</span>
                  <span className="text-2xl font-serif font-bold text-[#A67C00] tabular-nums">
                    {BUSINESS.currency}{calculateTotal(days).toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="text-[11px] text-[#7A7063] leading-relaxed flex items-start gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-[#B8860B] shrink-0 mt-0.5" />
                <span>The service rate covers on-site meal preparation and kitchen cleaning after cooking during the 7:00 AM – 3:00 PM session. Specific menu preferences and ingredient arrangements can be discussed directly with Chef Edem.</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={onBookClick}
                className="w-full py-3.5 px-6 rounded-xl bg-[#C9A227] text-[#151413] hover:bg-[#B8860B] font-bold text-sm transition-all shadow-sm active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book For {days} {days === 1 ? 'Day' : 'Days'} ({BUSINESS.currency}{calculateTotal(days).toLocaleString()})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
