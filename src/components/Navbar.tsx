import React, { useState } from 'react';
import { ActiveTab, DepartureCity } from '../types';
import { ShieldCheck, Menu, X, Plane, Layers, Sparkles, HelpCircle } from 'lucide-react';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  departureCity: DepartureCity;
  setDepartureCity: (city: DepartureCity) => void;
  onOpenAuditModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  departureCity,
  setDepartureCity,
  onOpenAuditModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: ActiveTab; label: string }[] = [
    { id: 'home', label: '홈' },
    { id: 'compare', label: '카지노 비교' },
    { id: 'squeeze', label: '카드 스퀴즈' },
    { id: 'flights', label: '항공편' },
    { id: 'environment', label: '환경 비교' },
    { id: 'nightlife', label: '다낭 밤문화' },
    { id: 'golf', label: '골프장' },
    { id: 'korean', label: '한인 인프라' },
    { id: 'itinerary', label: '여행 일정' },
    { id: 'faq', label: 'FAQ' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#080A0F]/95 backdrop-blur-md border-b border-[#C9A96E]/20 transition-all">
      {/* Editorial Top utility announcement */}
      <div className="bg-[#0A1220] border-b border-[#C9A96E]/10 px-4 py-1.5 text-xs text-[#F5F1E8]/70 flex items-center justify-between">
        <div className="flex items-center gap-2 max-w-7xl mx-auto w-full justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#C9A96E] font-medium tracking-wide">EDITORIAL RESEARCH</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span className="hidden sm:inline">필리핀 카지노 경험자를 위한 베트남 다낭 객관적 비교 가이드</span>
            <span className="sm:hidden">다낭 카지노 객관적 비교</span>
          </div>

          <div className="flex items-center gap-4">
            {/* Origin switch */}
            <div className="flex items-center bg-[#080A0F] border border-[#C9A96E]/30 rounded px-1 py-0.5">
              <span className="text-[11px] text-[#C9A96E] px-1 mr-1 hidden md:inline">출발지:</span>
              <button
                onClick={() => setDepartureCity('manila')}
                className={`px-2 py-0.5 text-xs transition-colors rounded ${
                  departureCity === 'manila' 
                    ? 'bg-[#C9A96E] text-[#080A0F] font-semibold' 
                    : 'text-[#F5F1E8]/70 hover:text-white'
                }`}
              >
                마닐라(MNL)
              </button>
              <button
                onClick={() => setDepartureCity('clark')}
                className={`px-2 py-0.5 text-xs transition-colors rounded ${
                  departureCity === 'clark' 
                    ? 'bg-[#C9A96E] text-[#080A0F] font-semibold' 
                    : 'text-[#F5F1E8]/70 hover:text-white'
                }`}
              >
                클락(CRK)
              </button>
            </div>

            {/* Audit / verified date button */}
            <button
              onClick={onOpenAuditModal}
              className="text-[11px] text-[#C9A96E] hover:text-[#DFC89B] flex items-center gap-1 transition-colors"
              title="데이터 검증 이력 및 최종 확인일"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">검증 이력 (2026.10)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main 3-Zone Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => {
            setActiveTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-left shrink-0 group focus:outline-none"
        >
          <span className="font-serif-display text-lg sm:text-xl font-bold tracking-wider text-[#F5F1E8] group-hover:text-[#C9A96E] transition-colors whitespace-nowrap">
            MANILA & CLARK <span className="text-[#C9A96E]">TO DANANG</span>
          </span>
          <span className="block text-[10px] tracking-widest text-[#C9A96E]/70 uppercase font-sans">
            Casino & Lifestyle Comparison
          </span>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 text-sm font-medium text-[#F5F1E8]/80">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setActiveTab(link.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`py-1.5 transition-colors whitespace-nowrap text-xs xl:text-sm border-b-2 ${
                activeTab === link.id
                  ? 'text-[#C9A96E] border-[#C9A96E] font-semibold'
                  : 'border-transparent hover:text-white hover:border-[#C9A96E]/40'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={() => {
              setActiveTab('compare');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-4 py-2 text-xs font-semibold text-[#080A0F] bg-gradient-to-r from-[#C9A96E] to-[#DFC89B] rounded hover:opacity-95 transition-opacity whitespace-nowrap shadow-sm flex items-center gap-1.5 cursor-pointer"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>카지노 2곳 비교</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#F5F1E8] hover:text-[#C9A96E] focus:outline-none"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A1220] border-b border-[#C9A96E]/30 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setActiveTab(link.id);
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`w-full text-left px-3 py-2 text-sm rounded transition-colors ${
                activeTab === link.id
                  ? 'bg-[#C9A96E]/20 text-[#C9A96E] font-semibold'
                  : 'text-[#F5F1E8]/80 hover:bg-stone-800/40 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-stone-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setActiveTab('compare');
                setMobileMenuOpen(false);
              }}
              className="w-full text-center py-2.5 text-xs font-semibold text-[#080A0F] bg-[#C9A96E] rounded"
            >
              호이아나 vs 크라운 비교표 보기
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
