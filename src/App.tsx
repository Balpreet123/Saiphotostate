import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PopularServices } from './components/PopularServices';
import { AllServices } from './components/AllServices';
import { WhyChooseUs } from './components/WhyChooseUs';
import { About } from './components/About';
import { Credentials } from './components/Credentials';
import { Reviews } from './components/Reviews';
import { Location } from './components/Location';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans pb-16 sm:pb-0">
      {/* 1. Sticky Header */}
      <Header />

      <main className="flex-grow">
        {/* 2. Hero Section with First-Page Instant Services Hub & Search */}
        <Hero
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* 3. Popular Government Services (Displayed when not in active search) */}
        {!searchQuery.trim() && <PopularServices />}

        {/* 4. All Services (Categorized & Search-aware) */}
        <AllServices
          searchQuery={searchQuery}
          onClearSearch={() => setSearchQuery('')}
        />

        {/* 5. Why Choose Sai Photo State */}
        <WhyChooseUs />

        {/* 6. About Section */}
        <About />

        {/* 7. Trust & Credentials */}
        <Credentials />

        {/* 8. Customer Reviews */}
        <Reviews />

        {/* 9. Location / Google Maps */}
        <Location />

        {/* 10. Contact / Service Request */}
        <ContactForm />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* Floating WhatsApp, Mobile Quick Actions & Back to Top */}
      <FloatingActions />
    </div>
  );
}
