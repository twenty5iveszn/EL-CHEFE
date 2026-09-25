import React from 'react';
import { ArrowUp, Phone, Mail, Clock, Calendar, MessageSquare } from 'lucide-react';
import { BUSINESS, getWhatsAppLink } from '../data/business';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#151413] text-[#FBF6EC] pt-14 pb-24 md:pb-14 border-t border-[#2C2925]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top footer row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#2C2925]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a 
              href="#" 
              className="text-2xl font-serif font-bold text-white tracking-tight hover:text-[#C9A227] transition-colors"
            >
              {BUSINESS.name}
            </a>
            <p className="text-sm text-[#A89E92] leading-relaxed max-w-sm">
              Private culinary service by Chef Edem. Bringing freshly prepared local Ghanaian and continental dishes to your home kitchen, followed by thorough kitchen cleaning.
            </p>
            <div className="text-xs text-[#C9A227] font-medium">
              GH₵500 per day · Monday to Sunday · 7:00 AM – 3:00 PM
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs uppercase font-bold tracking-wider text-[#C9A227] block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs text-[#C8BFB3]">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Chef Edem</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services & Cleaning</a>
              </li>
              <li>
                <a href="#cuisine" className="hover:text-white transition-colors">Ghanaian & Continental Cuisine</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">Transparent Pricing (GH₵500)</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">Why Choose EL CHEFE</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">Frequently Asked Questions</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-white transition-colors">Book Chef Edem</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact Details</a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs uppercase font-bold tracking-wider text-[#C9A227] block">
              Direct Contact
            </span>
            <ul className="space-y-2.5 text-xs text-[#C8BFB3]">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C9A227] shrink-0" />
                <a href={BUSINESS.contacts.telPrimaryUrl} className="hover:text-white transition-colors">
                  {BUSINESS.contacts.phonePrimaryDisplay}
                </a>
                <span className="text-[#6E6248]">/</span>
                <a href={BUSINESS.contacts.telSecondaryUrl} className="hover:text-white transition-colors">
                  {BUSINESS.contacts.phoneSecondaryDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C9A227] shrink-0" />
                <a href={BUSINESS.contacts.mailtoUrl} className="hover:text-white transition-colors truncate">
                  {BUSINESS.contacts.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#C9A227] shrink-0" />
                <span>{BUSINESS.workingHours}</span>
              </li>
              <li className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#C9A227] shrink-0" />
                <span>{BUSINESS.workingDays}</span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={BUSINESS.contacts.whatsappPrimaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#25D366]/20 text-[#25D366] text-xs font-semibold hover:bg-[#25D366]/30 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp ({BUSINESS.contacts.phonePrimaryDisplay})</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7A7063] gap-4">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Chef Edem</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
