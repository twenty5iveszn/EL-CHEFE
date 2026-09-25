/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Cuisine } from './components/Cuisine';
import { Pricing } from './components/Pricing';
import { WhyChoose } from './components/WhyChoose';
import { FAQ } from './components/FAQ';
import { BookingEnquiry } from './components/BookingEnquiry';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';

export default function App() {
  const [bookingDays, setBookingDays] = useState(1);

  const handleBookClick = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF6EC] text-[#1E1B18] relative">
      {/* Top Navigation */}
      <Navbar onBookClick={handleBookClick} />

      {/* Main Content Sections */}
      <main className="flex-1 pb-16 md:pb-0">
        {/* 1. Hero */}
        <Hero onBookClick={handleBookClick} />

        {/* 2. About Chef Edem */}
        <About />

        {/* 3. Services */}
        <Services onBookClick={handleBookClick} />

        {/* 4. Cuisine */}
        <Cuisine />

        {/* 5. Pricing */}
        <Pricing 
          days={bookingDays} 
          onDaysChange={setBookingDays} 
          onBookClick={handleBookClick} 
        />

        {/* 6. Why choose EL CHEFE */}
        <WhyChoose />

        {/* 7. Frequently Asked Questions */}
        <FAQ />

        {/* 8. Booking enquiry */}
        <BookingEnquiry 
          days={bookingDays} 
          onDaysChange={setBookingDays} 
        />

        {/* 9. Contact */}
        <Contact />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Mobile-First Sticky Action Bar */}
      <MobileQuickBar onBookClick={handleBookClick} />
    </div>
  );
}
