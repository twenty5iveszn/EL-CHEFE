import React, { useEffect, useState } from 'react';
import { Sparkles, UtensilsCrossed, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { getWhatsAppLink } from '../data/business';
import { IMAGES } from '../data/images';

const galleryImages = [
  IMAGES.fishStewEggs,
  IMAGES.breakfastSpread,
  IMAGES.okroSoup,
  IMAGES.jollofRice,
  IMAGES.freshSalad,
  IMAGES.gallery01,
  IMAGES.gallery02,
  IMAGES.gallery03,
  IMAGES.gallery04,
  IMAGES.gallery05,
  IMAGES.gallery06,
  IMAGES.gallery07,
  IMAGES.gallery08,
  IMAGES.gallery09,
  IMAGES.gallery10,
  IMAGES.gallery11,
  IMAGES.gallery12,
  IMAGES.gallery13,
  IMAGES.gallery14,
  IMAGES.gallery15,
  IMAGES.gallery16,
  IMAGES.gallery17,
];

export const Cuisine: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'both' | 'ghanaian' | 'continental'>('both');
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const slideshow = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % galleryImages.length);
    }, 5000);

    return () => window.clearInterval(slideshow);
  }, []);

  const showPreviousSlide = () => {
    setActiveSlide((currentSlide) => (currentSlide - 1 + galleryImages.length) % galleryImages.length);
  };

  const showNextSlide = () => {
    setActiveSlide((currentSlide) => (currentSlide + 1) % galleryImages.length);
  };

  return (
    <section id="cuisine" className="py-16 md:py-24 bg-[#F5EDDD] border-b border-[#E5D4B8]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#A67C00] font-bold">
              Culinary Repertoire
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#151413] tracking-tight mt-1">
              Local Ghanaian and Continental Dishes
            </h2>
            <p className="text-sm sm:text-base text-[#6E6248] mt-2 max-w-xl">
              From comforting Ghanaian home-style specialties to elegant continental dining, Chef Edem prepares dishes tailored to your preferences using fresh ingredients.
            </p>
          </div>

          {/* Functional interactive filter tabs */}
          <div className="inline-flex p-1 bg-[#EAE2D3] rounded-xl self-start md:self-auto border border-[#DBC9A8]">
            <button
              onClick={() => setActiveTab('both')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'both'
                  ? 'bg-[#151413] text-white shadow-xs'
                  : 'text-[#5A544C] hover:text-[#151413]'
              }`}
            >
              All Cuisines
            </button>
            <button
              onClick={() => setActiveTab('ghanaian')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'ghanaian'
                  ? 'bg-[#151413] text-white shadow-xs'
                  : 'text-[#5A544C] hover:text-[#151413]'
              }`}
            >
              Local Ghanaian
            </button>
            <button
              onClick={() => setActiveTab('continental')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'continental'
                  ? 'bg-[#151413] text-white shadow-xs'
                  : 'text-[#5A544C] hover:text-[#151413]'
              }`}
            >
              Continental
            </button>
          </div>
        </div>

        {/* Cuisine Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Ghanaian Cuisine Showcase */}
          {(activeTab === 'both' || activeTab === 'ghanaian') && (
            <div className="bg-[#FBF6EC] rounded-2xl border border-[#E5D4B8] overflow-hidden shadow-sm flex flex-col justify-between group">
              <div className="relative h-64 sm:h-72 overflow-hidden bg-[#E5D4B8]">
                <img
                  src={IMAGES.cuisineGhanaian}
                  alt="Cuisine inspiration — Illustrative presentation of Ghanaian dish example"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151413]/70 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 flex flex-col gap-1">
                  <span className="bg-[#151413]/90 text-[#C9A227] text-xs font-semibold px-3 py-1 rounded-md backdrop-blur-xs">
                    Local Ghanaian Dishes
                  </span>
                  <span className="bg-[#151413]/70 text-[#F2E9D5] text-[10px] px-2 py-0.5 rounded-sm backdrop-blur-xs self-start">
                    Cuisine Inspiration
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#151413]">
                    Local Ghanaian Dishes
                  </h3>
                  <p className="text-sm text-[#5A544C] leading-relaxed mt-2">
                    Chef Edem prepares authentic local Ghanaian dishes fresh in your kitchen. Examples of dishes include jollof rice, stews, soups, grilled fish, and plantain. Menu options can be discussed based on your preferences.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F2E9D5] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-medium text-[#2D2925]">
                    <CheckCircle2 className="w-4 h-4 text-[#B8860B] shrink-0" />
                    <span>Traditional Ghanaian dishes cooked on-site</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-[#2D2925]">
                    <CheckCircle2 className="w-4 h-4 text-[#B8860B] shrink-0" />
                    <span>Freshly prepared during the 7:00 AM – 3:00 PM session</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-[#2D2925]">
                    <CheckCircle2 className="w-4 h-4 text-[#B8860B] shrink-0" />
                    <span>Menu options can be discussed based on your preferences</span>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href={getWhatsAppLink("Hello Chef Edem,\n\nI would like to enquire about local Ghanaian dishes for my booking.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#151413] hover:text-[#B8860B] inline-flex items-center gap-1.5"
                  >
                    <span>Enquire about Ghanaian dishes</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Continental Cuisine Showcase */}
          {(activeTab === 'both' || activeTab === 'continental') && (
            <div className="bg-[#FBF6EC] rounded-2xl border border-[#E5D4B8] overflow-hidden shadow-sm flex flex-col justify-between group">
              <div className="relative h-64 sm:h-72 overflow-hidden bg-[#E5D4B8]">
                <img
                  src={IMAGES.cuisineContinental}
                  alt="Cuisine inspiration — Illustrative presentation of continental dish example"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151413]/70 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 flex flex-col gap-1">
                  <span className="bg-[#151413]/90 text-[#C9A227] text-xs font-semibold px-3 py-1 rounded-md backdrop-blur-xs">
                    Continental Dishes
                  </span>
                  <span className="bg-[#151413]/70 text-[#F2E9D5] text-[10px] px-2 py-0.5 rounded-sm backdrop-blur-xs self-start">
                    Cuisine Inspiration
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#151413]">
                    Continental Dishes
                  </h3>
                  <p className="text-sm text-[#5A544C] leading-relaxed mt-2">
                    Chef Edem prepares a variety of continental dishes fresh in your kitchen. Examples of dishes include steaks, chicken, pastas, and continental side dishes. Menu options can be discussed based on your preferences.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F2E9D5] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-medium text-[#2D2925]">
                    <CheckCircle2 className="w-4 h-4 text-[#B8860B] shrink-0" />
                    <span>Continental dishes cooked on-site</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-[#2D2925]">
                    <CheckCircle2 className="w-4 h-4 text-[#B8860B] shrink-0" />
                    <span>Freshly prepared during the 7:00 AM – 3:00 PM session</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-[#2D2925]">
                    <CheckCircle2 className="w-4 h-4 text-[#B8860B] shrink-0" />
                    <span>Menu options can be discussed based on your preferences</span>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href={getWhatsAppLink("Hello Chef Edem,\n\nI would like to enquire about continental dishes for my booking.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#151413] hover:text-[#B8860B] inline-flex items-center gap-1.5"
                  >
                    <span>Enquire about Continental dishes</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Chef's Dish Gallery */}
        <div className="mt-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-5">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#A67C00] font-bold">
                From the chef's kitchen
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#151413] tracking-tight mt-1">
                Cuisine Gallery
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#6E6248] max-w-md sm:text-right">
              A taste of the fresh, personalised meals available for your booking.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-[#E5D4B8] bg-[#FBF6EC] shadow-sm">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {galleryImages.map((image) => (
                <figure key={image} className="min-w-full">
                  <div className="aspect-[4/5] sm:aspect-[16/10] overflow-hidden bg-[#F2E9D5]">
                    <img
                      src={image}
                      alt="A dish prepared by Chef Edem"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </figure>
              ))}
            </div>

            <button
              type="button"
              onClick={showPreviousSlide}
              aria-label="Show previous gallery image"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#151413]/85 text-white flex items-center justify-center transition-colors hover:bg-[#2D2925] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={showNextSlide}
              aria-label="Show next gallery image"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#151413]/85 text-white flex items-center justify-center transition-colors hover:bg-[#2D2925] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-1.5 max-w-[80%]">
              {galleryImages.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Show gallery image ${index + 1}`}
                  aria-current={activeSlide === index ? 'true' : undefined}
                  className={`h-1.5 rounded-full transition-all ${
                    activeSlide === index ? 'w-5 bg-[#C9A227]' : 'w-1.5 bg-white/75 hover:bg-white'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Custom Menu Planning Note */}
        <div className="mt-8 p-4 sm:p-5 rounded-xl bg-[#F2E9D5]/80 border border-[#DBC9A8] text-xs sm:text-sm text-[#5A544C] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-[#151413] font-medium">
            <UtensilsCrossed className="w-4 h-4 text-[#B8860B] shrink-0" />
            <span>Menu options can be discussed based on your preferences.</span>
          </div>
          <span className="text-[#7A7063]">Local Ghanaian dishes and continental dishes available.</span>
        </div>

      </div>
    </section>
  );
};
