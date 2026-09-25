import React from 'react';
import { MessageSquare, Phone, CalendarCheck } from 'lucide-react';
import { BUSINESS, getWhatsAppLink } from '../data/business';

interface MobileQuickBarProps {
  onBookClick: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onBookClick }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-30 md:hidden bg-[#151413]/95 backdrop-blur-md border-t border-[#2D2925] px-3 py-2 flex items-center justify-between gap-2 shadow-2xl">
      {/* WhatsApp Quick Button */}
      <a
        href={BUSINESS.contacts.whatsappPrimaryUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Chef Edem on WhatsApp"
        className="flex-1 min-h-[44px] flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#25D366] text-white text-xs font-bold active:scale-95 transition-transform"
      >
        <MessageSquare className="w-4 h-4 fill-white" />
        <span className="truncate">WhatsApp</span>
      </a>

      {/* Call Quick Button */}
      <a
        href={BUSINESS.contacts.telPrimaryUrl}
        aria-label="Call Chef Edem directly"
        className="min-h-[44px] min-w-[44px] px-3 py-2 rounded-xl bg-[#2C2925] text-[#FBF6EC] hover:bg-[#3E3A34] text-xs font-semibold flex items-center justify-center gap-1 border border-[#3E3A34] active:scale-95 transition-transform"
      >
        <Phone className="w-4 h-4 text-[#C9A227]" />
        <span className="sr-only">Call</span>
      </a>

      {/* Book Chef Edem Button */}
      <button
        onClick={onBookClick}
        aria-label="Book Chef Edem"
        className="flex-[1.3] min-h-[44px] flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#C9A227] text-[#151413] text-xs font-bold active:scale-95 transition-transform cursor-pointer"
      >
        <CalendarCheck className="w-4 h-4" />
        <span className="truncate">Book (GH₵500)</span>
      </button>
    </div>
  );
};
