import React, { useState } from 'react';
import { Calendar, Clock, Check, MessageSquare, Mail, Sparkles, Copy, CheckCircle, ArrowRight, Phone, AlertCircle, RefreshCw } from 'lucide-react';
import { BUSINESS } from '../data/business';

interface BookingEnquiryProps {
  days: number;
  onDaysChange: (days: number) => void;
}

export const BookingEnquiry: React.FC<BookingEnquiryProps> = ({ days, onDaysChange }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [cuisineChoice, setCuisineChoice] = useState('Local Ghanaian dishes');
  const [notes, setNotes] = useState('');
  
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const todayString = new Date().toISOString().split('T')[0];
  const totalAmount = days * BUSINESS.ratePerDay;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    // 1. Client Name Validation (non-empty, not just whitespace)
    if (!fullName.trim()) {
      newErrors.fullName = 'Please enter your name.';
    }

    // 2. Phone Validation (accepts Ghanaian phone formats: 0248860055, +233248860055, etc.)
    const rawPhone = phone.trim();
    const cleanPhone = rawPhone.replace(/[\s()-]/g, '');
    if (!cleanPhone) {
      newErrors.phone = 'Please enter your phone or WhatsApp number.';
    } else {
      // Ghana numbers: either 10 digits starting with 0, or 12/13 digits starting with +233 or 233
      const isGhanaLocal = /^0\d{9}$/.test(cleanPhone);
      const isGhanaIntl = /^(\+?233)\d{9}$/.test(cleanPhone);
      const isGeneralIntl = /^\+?[1-9]\d{8,14}$/.test(cleanPhone);

      if (!isGhanaLocal && !isGhanaIntl && !isGeneralIntl) {
        newErrors.phone = 'Please enter a valid phone number (e.g. 024 886 0055 or +233 24 886 0055).';
      }
    }

    // 3. Preferred Date Validation (required, not in the past)
    if (!bookingDate) {
      newErrors.bookingDate = 'Please select your preferred date.';
    } else if (bookingDate < todayString) {
      newErrors.bookingDate = 'Please select today or a future date.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateWhatsAppMessage = () => {
    const lines = [
      'Hello Chef Edem,',
      '',
      'I would like to enquire about your private chef service.',
      '',
      `Name: ${fullName.trim()}`,
      `Phone/WhatsApp: ${phone.trim()}`,
      `Preferred date: ${bookingDate}`,
      `Duration: ${days} ${days === 1 ? 'day' : 'days'}`,
      `Cuisine preference: ${cuisineChoice}`,
    ];

    // Only include dietary notes if provided (prevent empty fields)
    if (notes.trim()) {
      lines.push(`Dietary notes: ${notes.trim()}`);
    }

    lines.push('');
    lines.push(`Estimated service fee: GH₵${totalAmount.toLocaleString()}`);
    lines.push('');
    lines.push('Please let me know if you are available.');

    return lines.join('\n');
  };

  const handleWhatsAppSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!validate()) {
      // Scroll smoothly to form error if needed
      const formEl = document.getElementById('booking-form');
      if (formEl) formEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    const msg = generateWhatsAppMessage();
    const url = `https://wa.me/233248860055?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const handleReviewSummary = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleEmailSubmit = () => {
    if (!validate()) return;
    const subject = encodeURIComponent(`Booking Enquiry - EL CHEFE Private Chef (${days} ${days === 1 ? 'Day' : 'Days'})`);
    const body = encodeURIComponent(generateWhatsAppMessage());
    window.location.href = `mailto:${BUSINESS.contacts.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(generateWhatsAppMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const quickDurationPills = [1, 2, 3, 5, 7, 14];

  return (
    <section id="booking" className="py-16 md:py-24 bg-[#FBF6EC] border-b border-[#E5D4B8]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest text-[#A67C00] font-bold">
            Reservation & Enquiry
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#151413] tracking-tight mt-1">
            Book Chef Edem
          </h2>
          <p className="text-sm sm:text-base text-[#6E6248] mt-2">
            Send your booking enquiry directly to Chef Edem on WhatsApp. Select your preferred date and service duration—Chef Edem will personally confirm availability with you.
          </p>
          <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F2E9D5]/80 border border-[#DBC9A8] text-xs text-[#5A544C]">
            <Clock className="w-3.5 h-3.5 text-[#A67C00]" />
            <span>Enquiry system • Daily service hours: 7:00 AM – 3:00 PM (Monday – Sunday)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Booking Form / Prepared Enquiry Card */}
          <div className="lg:col-span-7 bg-[#FFFFFF] rounded-2xl border border-[#E5D4B8] p-6 sm:p-8 shadow-xs">
            
            {submitted ? (
              /* State: Enquiry Summary Prepared / Ready to Send */
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#FBF6EC] border border-[#E5D4B8]">
                  <div className="w-10 h-10 rounded-full bg-[#25D366]/20 text-[#128C7E] flex items-center justify-center shrink-0">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-serif font-bold text-[#151413]">
                      Enquiry Ready to Send
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5A544C] mt-0.5">
                      Your enquiry details have been compiled. Tap WhatsApp below to send this directly to Chef Edem on <strong className="text-[#151413]">024 886 0055</strong>.
                    </p>
                  </div>
                </div>

                {/* Formatted Booking Summary Card */}
                <div className="bg-[#FBF6EC] p-5 sm:p-6 rounded-xl border border-[#E5D4B8] space-y-3 font-mono text-xs sm:text-sm text-[#151413]">
                  <div className="border-b border-[#E5D4B8] pb-2 flex items-center justify-between font-sans">
                    <span className="font-bold text-xs uppercase tracking-wider text-[#8A7A5E]">
                      Booking Enquiry
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-sm bg-[#F2E9D5] text-[#151413]">
                      Chef Edem
                    </span>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <div className="flex justify-between py-0.5">
                      <span className="text-[#6E6248]">Name:</span>
                      <span className="font-semibold text-right">{fullName.trim()}</span>
                    </div>
                    <div className="flex justify-between py-0.5">
                      <span className="text-[#6E6248]">Phone / WhatsApp:</span>
                      <span className="font-semibold text-right">{phone.trim()}</span>
                    </div>
                    <div className="flex justify-between py-0.5">
                      <span className="text-[#6E6248]">Preferred date:</span>
                      <span className="font-semibold text-right">{bookingDate}</span>
                    </div>
                    <div className="flex justify-between py-0.5">
                      <span className="text-[#6E6248]">Duration:</span>
                      <span className="font-semibold text-right">{days} {days === 1 ? 'day' : 'days'}</span>
                    </div>
                    <div className="flex justify-between py-0.5">
                      <span className="text-[#6E6248]">Cuisine:</span>
                      <span className="font-semibold text-right">{cuisineChoice}</span>
                    </div>
                    <div className="flex justify-between py-0.5">
                      <span className="text-[#6E6248]">Dietary notes:</span>
                      <span className="font-semibold text-right">
                        {notes.trim() ? notes.trim() : 'None provided'}
                      </span>
                    </div>
                    <div className="flex justify-between py-0.5">
                      <span className="text-[#6E6248]">Service rate:</span>
                      <span className="font-semibold text-right">GH₵{BUSINESS.ratePerDay}/day</span>
                    </div>
                    <div className="pt-2 border-t border-[#E5D4B8] flex justify-between font-sans items-baseline">
                      <span className="font-bold text-xs uppercase tracking-wider text-[#8A7A5E]">
                        Estimated service fee:
                      </span>
                      <span className="text-lg font-serif font-bold text-[#A67C00] tabular-nums">
                        GH₵{totalAmount.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Important Booking Notice */}
                <div className="p-3.5 rounded-xl bg-[#FBF6EC] border border-[#E5D4B8] text-xs text-[#5A544C] flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
                  <p>
                    <strong>Please note:</strong> This enquiry is not a confirmed booking. Chef Edem will personally confirm his schedule and availability for your requested date.
                  </p>
                </div>

                {/* Primary & Fallback Action Buttons */}
                <div className="space-y-3 pt-2">
                  <a
                    href={`https://wa.me/233248860055?text=${encodeURIComponent(generateWhatsAppMessage())}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[48px] py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-5 h-5 fill-white" />
                    <span>Send Enquiry on WhatsApp</span>
                  </a>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={handleCopySummary}
                      className="min-h-[44px] py-2.5 px-4 rounded-xl bg-[#FBF6EC] hover:bg-[#F2E9D5] border border-[#DBC9A8] text-[#151413] font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-600" />
                          <span>Copied to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-[#7A7063]" />
                          <span>Copy Enquiry Message</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleEmailSubmit}
                      className="min-h-[44px] py-2.5 px-4 rounded-xl bg-[#FBF6EC] hover:bg-[#F2E9D5] border border-[#DBC9A8] text-[#151413] font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Mail className="w-4 h-4 text-[#B8860B]" />
                      <span>Send via Email Fallback</span>
                    </button>
                  </div>

                  <div className="text-center pt-2">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center gap-1.5 text-xs text-[#7A7063] hover:text-[#151413] underline font-medium cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Edit Enquiry Details</span>
                    </button>
                  </div>
                </div>

              </div>
            ) : (
              /* State: Interactive Booking Form */
              <form id="booking-form" onSubmit={handleWhatsAppSubmit} noValidate className="space-y-5">
                
                {/* 1. Client Name */}
                <div className="space-y-1">
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-[#151413]">
                    Your Name <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    autoComplete="name"
                    aria-required="true"
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? "fullName-error" : undefined}
                    placeholder="e.g. Kwame Mensah"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm bg-[#FBF6EC] text-[#151413] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227] ${
                      errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-[#DBC9A8]'
                    }`}
                  />
                  {errors.fullName && (
                    <p id="fullName-error" role="alert" className="text-xs text-red-600 font-medium flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* 2. Phone / WhatsApp & Preferred Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#151413]">
                      Phone / WhatsApp <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      aria-required="true"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      placeholder="e.g. 024 886 0055"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm bg-[#FBF6EC] text-[#151413] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227] ${
                        errors.phone ? 'border-red-500 bg-red-50/20' : 'border-[#DBC9A8]'
                      }`}
                    />
                    {errors.phone && (
                      <p id="phone-error" role="alert" className="text-xs text-red-600 font-medium flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="bookingDate" className="block text-xs font-bold uppercase tracking-wider text-[#151413]">
                      Preferred Date <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="bookingDate"
                      type="date"
                      required
                      min={todayString}
                      aria-required="true"
                      aria-invalid={!!errors.bookingDate}
                      aria-describedby={errors.bookingDate ? "bookingDate-error" : undefined}
                      value={bookingDate}
                      onChange={(e) => {
                        setBookingDate(e.target.value);
                        if (errors.bookingDate) setErrors({ ...errors, bookingDate: '' });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm bg-[#FBF6EC] text-[#151413] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227] ${
                        errors.bookingDate ? 'border-red-500 bg-red-50/20' : 'border-[#DBC9A8]'
                      }`}
                    />
                    {errors.bookingDate ? (
                      <p id="bookingDate-error" role="alert" className="text-xs text-red-600 font-medium flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.bookingDate}</span>
                      </p>
                    ) : (
                      <p className="text-[11px] text-[#7A7063]">
                        Chef Edem will confirm availability for this date.
                      </p>
                    )}
                  </div>
                </div>

                {/* 3. Duration Selector (Two-way synchronized) */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="days" className="block text-xs font-bold uppercase tracking-wider text-[#151413]">
                      Duration in Days
                    </label>
                    <span className="text-xs font-semibold text-[#A67C00]">
                      GH₵500 per day
                    </span>
                  </div>

                  {/* Quick duration pills */}
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {quickDurationPills.map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => onDaysChange(d)}
                        className={`min-h-[44px] py-2 px-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                          days === d
                            ? 'bg-[#151413] text-white border-[#151413] shadow-xs'
                            : 'bg-[#FBF6EC] text-[#4A453F] border-[#DBC9A8] hover:border-[#151413]'
                        }`}
                      >
                        {d} {d === 1 ? 'Day' : 'Days'}
                      </button>
                    ))}
                  </div>

                  {/* Dropdown for custom day duration */}
                  <div className="pt-1">
                    <select
                      id="days"
                      value={days}
                      onChange={(e) => onDaysChange(Number(e.target.value))}
                      className="w-full px-4 py-3 rounded-xl border border-[#DBC9A8] text-base sm:text-sm bg-[#FBF6EC] text-[#151413] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227]"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 21, 30].map((d) => (
                        <option key={d} value={d}>
                          {d} {d === 1 ? 'Day' : 'Days'} — Estimated service fee: GH₵{(d * 500).toLocaleString()}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 4. Cuisine Preference */}
                <div className="space-y-1">
                  <label htmlFor="cuisineChoice" className="block text-xs font-bold uppercase tracking-wider text-[#151413]">
                    Cuisine Preference
                  </label>
                  <select
                    id="cuisineChoice"
                    value={cuisineChoice}
                    onChange={(e) => setCuisineChoice(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#DBC9A8] text-base sm:text-sm bg-[#FBF6EC] text-[#151413] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227]"
                  >
                    <option value="Local Ghanaian dishes">Local Ghanaian dishes</option>
                    <option value="Continental dishes">Continental dishes</option>
                    <option value="Both Ghanaian & Continental">Both Ghanaian & Continental</option>
                  </select>
                </div>

                {/* 5. Dietary Notes (Optional) */}
                <div className="space-y-1">
                  <label htmlFor="notes" className="block text-xs font-bold uppercase tracking-wider text-[#151413]">
                    Dietary Notes / Preferences <span className="text-[#8A7A5E] font-normal lowercase">(optional)</span>
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    placeholder="e.g. Allergies, favorite dishes, low salt, spice preference..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#DBC9A8] text-base sm:text-sm bg-[#FBF6EC] text-[#151413] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227]"
                  />
                </div>

                {/* Availability Notice */}
                <p className="text-xs text-[#6E6248] bg-[#FBF6EC] p-3 rounded-lg border border-[#E5D4B8]">
                  <strong>Notice:</strong> This is an enquiry system, not a confirmed reservation. Chef Edem will personally confirm date availability upon receiving your enquiry.
                </p>

                {/* Primary CTA and Secondary Actions */}
                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    className="w-full min-h-[48px] py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm sm:text-base transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-5 h-5 fill-white" />
                    <span>Send Enquiry on WhatsApp</span>
                  </button>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={handleReviewSummary}
                      className="min-h-[44px] py-2.5 px-4 rounded-xl bg-[#151413] hover:bg-[#2C2925] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
                      <span>Review Booking Summary</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleEmailSubmit}
                      className="min-h-[44px] py-2.5 px-4 rounded-xl bg-[#FBF6EC] hover:bg-[#F2E9D5] border border-[#DBC9A8] text-[#151413] font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#B8860B]" />
                      <span>Send via Email</span>
                    </button>
                  </div>
                </div>

              </form>
            )}

          </div>

          {/* Right Column: Live Booking Summary & Direct Contact Lines */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Fee & Details Breakdown */}
            <div className="bg-[#FFFFFF] p-6 sm:p-7 rounded-2xl border border-[#E5D4B8] shadow-xs space-y-5">
              <div className="flex items-center justify-between border-b border-[#F2E9D5] pb-3">
                <span className="text-xs uppercase font-bold tracking-wider text-[#8A7A5E]">
                  Booking Enquiry Summary
                </span>
                <span className="text-xs font-semibold text-[#151413] px-2 py-0.5 rounded-sm bg-[#FBF6EC] border border-[#E5D4B8]">
                  Chef Edem
                </span>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-[#5A544C]">
                  <span>Name:</span>
                  <span className="font-semibold text-[#151413] text-right truncate max-w-[180px]">
                    {fullName.trim() || '—'}
                  </span>
                </div>

                <div className="flex justify-between text-[#5A544C]">
                  <span>Phone/WhatsApp:</span>
                  <span className="font-semibold text-[#151413] text-right">
                    {phone.trim() || '—'}
                  </span>
                </div>

                <div className="flex justify-between text-[#5A544C]">
                  <span>Preferred date:</span>
                  <span className="font-semibold text-[#151413] text-right">
                    {bookingDate || 'Not selected'}
                  </span>
                </div>

                <div className="flex justify-between text-[#5A544C]">
                  <span>Service rate:</span>
                  <span className="font-semibold text-[#151413] tabular-nums">GH₵{BUSINESS.ratePerDay}/day</span>
                </div>

                <div className="flex justify-between text-[#5A544C]">
                  <span>Duration:</span>
                  <span className="font-semibold text-[#151413]">{days} {days === 1 ? 'day' : 'days'}</span>
                </div>

                <div className="flex justify-between text-[#5A544C]">
                  <span>Service Window:</span>
                  <span className="font-semibold text-[#151413]">{BUSINESS.workingHours}</span>
                </div>

                <div className="flex justify-between text-[#5A544C]">
                  <span>Cuisine:</span>
                  <span className="font-semibold text-[#151413] text-right truncate max-w-[180px]">{cuisineChoice}</span>
                </div>

                <div className="flex justify-between text-[#5A544C]">
                  <span>Dietary notes:</span>
                  <span className="font-semibold text-[#151413] text-right truncate max-w-[180px]">
                    {notes.trim() ? notes.trim() : 'None provided'}
                  </span>
                </div>
                
                {/* Total Service Fee calculation */}
                <div className="pt-3 border-t border-[#F2E9D5] flex items-baseline justify-between">
                  <div>
                    <span className="text-xs text-[#8A7A5E] block uppercase tracking-wider font-semibold">
                      Estimated service fee
                    </span>
                    <span className="text-2xl font-serif font-bold text-[#151413] tabular-nums">
                      {BUSINESS.currency}{totalAmount.toLocaleString()}
                    </span>
                  </div>
                  <span className="text-xs text-[#7A7063] font-medium">
                    {days} × GH₵500
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FBF6EC] border border-[#F2E9D5] text-xs text-[#6E6248] space-y-1.5">
                <div className="font-semibold text-[#151413] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#B8860B]" />
                  <span>Working Hours: 7:00 AM – 3:00 PM</span>
                </div>
                <p>
                  Includes on-site freshly prepared meals and complete kitchen cleaning after cooking.
                </p>
              </div>
            </div>

            {/* Direct Instant Contact Lines */}
            <div className="bg-[#F5EDDD] p-6 rounded-2xl border border-[#E5D4B8] space-y-4">
              <span className="text-xs uppercase font-bold tracking-wider text-[#A67C00] block">
                Direct Contact Lines
              </span>
              <p className="text-xs text-[#5A544C]">
                Chef Edem is available Monday to Sunday between 7:00 AM and 3:00 PM:
              </p>
              
              <div className="space-y-2">
                <a
                  href={BUSINESS.contacts.telPrimaryUrl}
                  className="min-h-[44px] flex items-center justify-between p-3 rounded-lg bg-[#FBF6EC] hover:bg-[#FFFFFF] border border-[#DBC9A8] text-xs font-semibold text-[#151413] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#B8860B]" />
                    {BUSINESS.contacts.phonePrimaryDisplay} (Primary)
                  </span>
                  <span className="text-[#A67C00] font-bold">Tap to Call</span>
                </a>

                <a
                  href={BUSINESS.contacts.telSecondaryUrl}
                  className="min-h-[44px] flex items-center justify-between p-3 rounded-lg bg-[#FBF6EC] hover:bg-[#FFFFFF] border border-[#DBC9A8] text-xs font-semibold text-[#151413] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#B8860B]" />
                    {BUSINESS.contacts.phoneSecondaryDisplay} (Secondary)
                  </span>
                  <span className="text-[#A67C00] font-bold">Tap to Call</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
