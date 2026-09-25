import React, { useState } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS, getWhatsAppLink } from '../data/business';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Cuisine', href: '#cuisine' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FBF6EC]/95 backdrop-blur-md border-b border-[#E5D4B8]/70 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Zone 1: Single text element brand wordmark */}
        <a 
          href="#" 
          className="text-2xl font-bold tracking-tight text-[#151413] hover:text-[#B8860B] transition-colors font-display"
        >
          {BUSINESS.shortName}
        </a>

        {/* Zone 2: 4–6 nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4A453F]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#151413] transition-colors tracking-normal hover:underline underline-offset-8 decoration-[#C9A227]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary action button & mobile trigger */}
        <div className="flex items-center gap-3">
          <a
            href={BUSINESS.contacts.whatsappPrimaryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#151413] bg-[#F2E9D5] hover:bg-[#E5D4B8] rounded-lg transition-colors border border-[#E5D4B8]"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#2E7D32]" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={onBookClick}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#151413] hover:bg-[#2C2925] rounded-lg transition-colors shadow-sm active:scale-[0.98] whitespace-nowrap cursor-pointer"
          >
            Book Chef Edem
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-[#151413] hover:bg-[#F2E9D5] rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E5D4B8] bg-[#FBF6EC] px-6 py-5 space-y-4 shadow-lg">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#2D2925] hover:text-[#B8860B] py-1 border-b border-[#F2E9D5] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 space-y-2.5">
            <a
              href={BUSINESS.contacts.whatsappPrimaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#25D366]/10 text-[#128C7E] font-medium text-sm border border-[#25D366]/20"
            >
              <MessageSquare className="w-4 h-4" />
              Chat on WhatsApp
            </a>
            <a
              href={BUSINESS.contacts.telPrimaryUrl}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#F2E9D5] text-[#151413] font-medium text-sm"
            >
              <Phone className="w-4 h-4 text-[#B8860B]" />
              Call {BUSINESS.contacts.phonePrimaryDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
