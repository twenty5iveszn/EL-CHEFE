import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, Clock, Calendar, Copy, Check, ExternalLink } from 'lucide-react';
import { BUSINESS, getWhatsAppLink } from '../data/business';

export const Contact: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#F5EDDD] border-b border-[#E5D4B8]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-widest text-[#A67C00] font-bold">
            Get in Touch
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#151413] tracking-tight mt-1">
            Contact Chef Edem
          </h2>
          <p className="text-sm sm:text-base text-[#6E6248] mt-2">
            Reach out directly for private chef bookings, enquiries, and custom meal planning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          
          {/* Card 1: Phone Lines */}
          <div className="bg-[#FBF6EC] p-7 rounded-2xl border border-[#E5D4B8] shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#151413] text-[#C9A227] flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#151413]">
                  Direct Phone Lines
                </h3>
                <p className="text-xs text-[#6E6248] mt-0.5">
                  Call Chef Edem directly for reservations & questions.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {/* Primary */}
                <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#E5D4B8] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-[#8A7A5E] block">Primary Line</span>
                    <a
                      href={BUSINESS.contacts.telPrimaryUrl}
                      className="text-sm font-bold text-[#151413] hover:text-[#B8860B] transition-colors"
                    >
                      {BUSINESS.contacts.phonePrimaryDisplay}
                    </a>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => copyToClipboard(BUSINESS.contacts.phonePrimary, 'p1')}
                      title="Copy phone"
                      className="p-1.5 rounded-md hover:bg-[#FBF6EC] text-[#6E6248] hover:text-[#151413] transition-colors cursor-pointer"
                    >
                      {copiedKey === 'p1' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                    <a
                      href={BUSINESS.contacts.telPrimaryUrl}
                      className="px-2.5 py-1 rounded-md bg-[#151413] text-white text-[11px] font-semibold hover:bg-[#2C2925]"
                    >
                      Call
                    </a>
                  </div>
                </div>

                {/* Secondary */}
                <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#E5D4B8] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-[#8A7A5E] block">Secondary Line</span>
                    <a
                      href={BUSINESS.contacts.telSecondaryUrl}
                      className="text-sm font-bold text-[#151413] hover:text-[#B8860B] transition-colors"
                    >
                      {BUSINESS.contacts.phoneSecondaryDisplay}
                    </a>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => copyToClipboard(BUSINESS.contacts.phoneSecondary, 'p2')}
                      title="Copy phone"
                      className="p-1.5 rounded-md hover:bg-[#FBF6EC] text-[#6E6248] hover:text-[#151413] transition-colors cursor-pointer"
                    >
                      {copiedKey === 'p2' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                    <a
                      href={BUSINESS.contacts.telSecondaryUrl}
                      className="px-2.5 py-1 rounded-md bg-[#151413] text-white text-[11px] font-semibold hover:bg-[#2C2925]"
                    >
                      Call
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-[#7A7063]">
              Available Monday – Sunday, 7:00 AM – 3:00 PM
            </div>
          </div>

          {/* Card 2: WhatsApp Chat */}
          <div className="bg-[#FBF6EC] p-7 rounded-2xl border border-[#E5D4B8] shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#151413] text-[#25D366] flex items-center justify-center">
                <MessageSquare className="w-5 h-5 fill-white" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#151413]">
                  WhatsApp Messaging
                </h3>
                <p className="text-xs text-[#6E6248] mt-0.5">
                  Direct WhatsApp messaging for bookings and inquiries.
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                <a
                  href={BUSINESS.contacts.whatsappPrimaryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-xs font-semibold text-[#128C7E] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#25D366]" />
                    WhatsApp on {BUSINESS.contacts.phonePrimaryDisplay}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={BUSINESS.contacts.whatsappSecondaryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-[#FFFFFF] hover:bg-[#FBF6EC] border border-[#E5D4B8] text-xs font-semibold text-[#151413] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#25D366]" />
                    WhatsApp on {BUSINESS.contacts.phoneSecondaryDisplay}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#7A7063]" />
                </a>
              </div>
            </div>

            <div className="text-[11px] text-[#7A7063]">
              Primary WhatsApp: {BUSINESS.contacts.phonePrimaryDisplay}
            </div>
          </div>

          {/* Card 3: Email & Schedule */}
          <div className="bg-[#FBF6EC] p-7 rounded-2xl border border-[#E5D4B8] shadow-xs flex flex-col justify-between space-y-6 md:col-span-2 lg:col-span-1">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#151413] text-[#C9A227] flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#151413]">
                  Email & Operating Schedule
                </h3>
                <p className="text-xs text-[#6E6248] mt-0.5">
                  Direct email communication for private chef bookings.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#E5D4B8] space-y-1">
                <span className="text-[10px] uppercase font-semibold text-[#8A7A5E] block">Email Address</span>
                <div className="flex items-center justify-between gap-1">
                  <a
                    href={BUSINESS.contacts.mailtoUrl}
                    className="text-xs font-bold text-[#151413] hover:text-[#B8860B] transition-colors truncate"
                  >
                    {BUSINESS.contacts.email}
                  </a>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(BUSINESS.contacts.email, 'email')}
                    title="Copy email"
                    className="p-1 rounded-md hover:bg-[#FBF6EC] text-[#6E6248] hover:text-[#151413] transition-colors cursor-pointer shrink-0"
                  >
                    {copiedKey === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between text-xs py-1 border-b border-[#F2E9D5]">
                  <span className="text-[#6E6248] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#B8860B]" />
                    Days
                  </span>
                  <span className="font-semibold text-[#151413]">{BUSINESS.workingDays}</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1 border-b border-[#F2E9D5]">
                  <span className="text-[#6E6248] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#B8860B]" />
                    Hours
                  </span>
                  <span className="font-semibold text-[#151413]">{BUSINESS.workingHours}</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1">
                  <span className="text-[#6E6248]">Daily Rate</span>
                  <span className="font-bold text-[#A67C00]">{BUSINESS.currency}{BUSINESS.ratePerDay} / day</span>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-[#7A7063]">
              Replies usually provided promptly within working hours.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
