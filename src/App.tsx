/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ActiveTab, DepartureCity } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HighLevelComparisonTable } from './components/HighLevelComparisonTable';
import { CasinoCompareView } from './components/CasinoCompareView';
import { HoianaDetailView } from './components/HoianaDetailView';
import { CrownDetailView } from './components/CrownDetailView';
import { SqueezeGuideView } from './components/SqueezeGuideView';
import { FlightsView } from './components/FlightsView';
import { EnvironmentCompareView } from './components/EnvironmentCompareView';
import { NightlifeView } from './components/NightlifeView';
import { GolfView } from './components/GolfView';
import { KoreanInfraView } from './components/KoreanInfraView';
import { ItinerariesView } from './components/ItinerariesView';
import { LocationMapView } from './components/LocationMapView';
import { FaqView } from './components/FaqView';
import { VerificationAdminModal } from './components/VerificationAdminModal';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [departureCity, setDepartureCity] = useState<DepartureCity>('manila');
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080A0F] text-[#F5F1E8] flex flex-col font-sans selection:bg-[#C9A96E]/30 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        departureCity={departureCity}
        setDepartureCity={setDepartureCity}
        onOpenAuditModal={() => setIsAuditModalOpen(true)}
      />

      {/* Main Dynamic View Routing */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <Hero
              departureCity={departureCity}
              setDepartureCity={setDepartureCity}
              setActiveTab={setActiveTab}
            />
            <HighLevelComparisonTable
              departureCity={departureCity}
              setActiveTab={setActiveTab}
            />
            <LocationMapView />
          </>
        )}

        {activeTab === 'compare' && (
          <CasinoCompareView setActiveTab={setActiveTab} />
        )}

        {activeTab === 'hoiana' && (
          <HoianaDetailView setActiveTab={setActiveTab} />
        )}

        {activeTab === 'crown' && (
          <CrownDetailView setActiveTab={setActiveTab} />
        )}

        {activeTab === 'squeeze' && (
          <SqueezeGuideView setActiveTab={setActiveTab} />
        )}

        {activeTab === 'flights' && (
          <FlightsView initialDepartureCity={departureCity} />
        )}

        {activeTab === 'environment' && (
          <EnvironmentCompareView
            departureCity={departureCity}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'nightlife' && (
          <NightlifeView />
        )}

        {activeTab === 'golf' && (
          <GolfView />
        )}

        {activeTab === 'korean' && (
          <KoreanInfraView />
        )}

        {activeTab === 'itinerary' && (
          <ItinerariesView setActiveTab={setActiveTab} />
        )}

        {activeTab === 'faq' && (
          <FaqView />
        )}
      </main>

      {/* Verification / Admin Modal */}
      <VerificationAdminModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenAuditModal={() => setIsAuditModalOpen(true)}
      />
    </div>
  );
}
