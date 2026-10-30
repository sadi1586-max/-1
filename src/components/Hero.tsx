import React from 'react';
import { DepartureCity, ActiveTab } from '../types';
import { ArrowRight, Compass, ShieldAlert, Award, Plane, Layers, Sparkles } from 'lucide-react';

interface HeroProps {
  departureCity: DepartureCity;
  setDepartureCity: (city: DepartureCity) => void;
  setActiveTab: (tab: ActiveTab) => void;
}

export const Hero: React.FC<HeroProps> = ({
  departureCity,
  setDepartureCity,
  setActiveTab,
}) => {
  return (
    <section className="relative bg-[#080A0F] pt-8 pb-16 border-b border-[#C9A96E]/20 overflow-hidden">
      {/* Background Graphic & Scrim */}
      <div className="absolute inset-0 z-0 opacity-25 mix-blend-luminosity pointer-events-none">
        <img
          src="/src/assets/images/hero_danang_resort_1793347389368.jpg"
          alt="다낭 해변 리조트 전경"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080A0F] via-[#080A0F]/80 to-[#0A1220]/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Curatorial Header Stamp (No Pill Badge) */}
        <div className="flex flex-wrap items-center gap-3 text-xs tracking-wider text-[#C9A96E] uppercase mb-4 font-mono">
          <span>CASINO & LIFESTYLE EDITORIAL</span>
          <span aria-hidden="true">·</span>
          <span>RESEARCH VOL. 2026-10</span>
          <span aria-hidden="true">·</span>
          <span>INDEPENDENT COMPARISON REPORT</span>
        </div>

        {/* Hero Headlines */}
        <div className="max-w-4xl mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-display font-bold text-[#F5F1E8] tracking-tight leading-tight sm:leading-tight mb-4">
            마닐라·클락 카지노 경험자를 위한 다낭 가이드
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-[#F5F1E8]/80 font-normal leading-relaxed max-w-3xl">
            라이브 바카라부터 리조트, 항공편, 골프와 나이트라이프까지. 필리핀과 다낭의 차이를 한눈에 비교해 보세요.
          </p>
        </div>

        {/* Core Question & Perspective Switcher Strip */}
        <div className="bg-[#0A1220]/90 border border-[#C9A96E]/30 rounded-lg p-5 mb-12 shadow-xl backdrop-blur-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#C9A96E]/15">
            <div>
              <span className="text-xs text-[#C9A96E] font-mono uppercase tracking-wider block mb-1">
                KEY RESEARCH QUESTION
              </span>
              <p className="text-base sm:text-lg font-serif-display text-[#F5F1E8] font-semibold">
                "마닐라와 클락에서 카지노를 이용해 본 사람에게 다낭은 어떤 차이가 있을까?"
              </p>
            </div>

            {/* Interactive Departure Switch */}
            <div className="shrink-0 flex items-center bg-[#080A0F] p-1 rounded-md border border-[#C9A96E]/20">
              <span className="text-xs text-[#F5F1E8]/60 px-2 font-medium">분석 기준점:</span>
              <button
                onClick={() => setDepartureCity('manila')}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-all cursor-pointer ${
                  departureCity === 'manila'
                    ? 'bg-[#C9A96E] text-[#080A0F] font-bold shadow'
                    : 'text-[#F5F1E8]/70 hover:text-white'
                }`}
              >
                마닐라(솔레어·오카다) 기준
              </button>
              <button
                onClick={() => setDepartureCity('clark')}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-all cursor-pointer ${
                  departureCity === 'clark'
                    ? 'bg-[#C9A96E] text-[#080A0F] font-bold shadow'
                    : 'text-[#F5F1E8]/70 hover:text-white'
                }`}
              >
                클락(한·디하이츠) 기준
              </button>
            </div>
          </div>

          {/* Dynamic Insight Callout based on selected departure city */}
          <div className="pt-3 text-xs sm:text-sm text-[#F5F1E8]/85 flex items-start gap-2.5">
            <Compass className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
            <div>
              {departureCity === 'manila' ? (
                <span>
                  <strong className="text-[#C9A96E] font-semibold">[마닐라 경험자 요약]</strong> 마닐라 NAIA T3에서 다낭(DAD)까지 약 2시간 40분의 매력적인 직항이 운항 중입니다. 솔레어·오카다의 거대한 메가 IR 플로어와 달리, 다낭은 <strong className="text-white">전면 외국인 전용(베트남 내국인 불가)</strong>으로 운영되어 플로어 소음과 혼잡도가 매우 낮고, 미화(USD) 칩 시스템을 사용하는 점이 핵심 차이입니다.
                </span>
              ) : (
                <span>
                  <strong className="text-[#C9A96E] font-semibold">[클락 경험자 요약]</strong> 클락의 컴팩트한 골프-카지노 동선에 익숙하다면, 다낭은 바다 듄스 링크스(호이아나 쇼어스)와 청정 미케비치를 함께 누리는 업그레이드된 휴양 환경을 선사합니다. 단, 현재 클락발 직항이 없어 마닐라 P2P 버스 연계 직항 또는 타이베이 경유편을 선택해야 하는 항공 동선 차이가 있습니다.
                </span>
              )}
            </div>
          </div>
        </div>

        {/* 4 PRIMARY FOCUS CONTENT CARDS (Explicit Requirement) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1 */}
          <div 
            onClick={() => setActiveTab('compare')}
            className="group relative bg-[#0A1220] border border-[#C9A96E]/25 hover:border-[#C9A96E] rounded-lg p-5 cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3 text-xs text-[#C9A96E] font-mono">
                <span>01. CASINO REVIEW</span>
                <span>호이아나 vs 크라운</span>
              </div>
              <h2 className="text-lg font-serif-display font-semibold text-[#F5F1E8] group-hover:text-[#C9A96E] transition-colors mb-2">
                다낭 주요 카지노 2곳
              </h2>
              <p className="text-xs text-[#F5F1E8]/70 leading-relaxed mb-4">
                140+ 테이블 규모의 초대형 오션 IR <strong className="text-white font-medium">호이아나</strong>와 도심 해변 인접 클럽 <strong className="text-white font-medium">크라운</strong>의 테이블 수, VIP 시설, 접근성 심층 비교.
              </p>
            </div>
            <div className="flex items-center justify-between text-xs text-[#C9A96E] pt-3 border-t border-stone-800">
              <span className="font-medium">상세 비교 분석</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2 */}
          <div 
            onClick={() => setActiveTab('squeeze')}
            className="group relative bg-[#0A1220] border border-[#C9A96E]/25 hover:border-[#C9A96E] rounded-lg p-5 cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3 text-xs text-[#C9A96E] font-mono">
                <span>02. BACCARAT SQUEEZE</span>
                <span>카드 까기 룰</span>
              </div>
              <h2 className="text-lg font-serif-display font-semibold text-[#F5F1E8] group-hover:text-[#C9A96E] transition-colors mb-2">
                필리핀과 다낭 바카라 환경
              </h2>
              <p className="text-xs text-[#F5F1E8]/70 leading-relaxed mb-4">
                한국인 플레이어가 중시하는 <strong className="text-white font-medium">'카드를 깐다(Squeeze)'</strong>는 조건. 최고 베팅자 권한, 플로어 재량권, 딜러 오픈 테이블 차이 및 3핀·4핀 인터랙티브 시뮬레이터.
              </p>
            </div>
            <div className="flex items-center justify-between text-xs text-[#C9A96E] pt-3 border-t border-stone-800">
              <span className="font-medium">스퀴즈 가이드 & 시뮬레이터</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3 */}
          <div 
            onClick={() => setActiveTab('flights')}
            className="group relative bg-[#0A1220] border border-[#C9A96E]/25 hover:border-[#C9A96E] rounded-lg p-5 cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3 text-xs text-[#C9A96E] font-mono">
                <span>03. FLIGHT LOGISTICS</span>
                <span>마닐라 / 클락 출발</span>
              </div>
              <h2 className="text-lg font-serif-display font-semibold text-[#F5F1E8] group-hover:text-[#C9A96E] transition-colors mb-2">
                마닐라·클락 출발 항공편
              </h2>
              <p className="text-xs text-[#F5F1E8]/70 leading-relaxed mb-4">
                마닐라 NAIA T3 직항(세부퍼시픽 2h 40m) 운항 스케줄과 클락발 경유편(타이베이/싱가포르/홍콩) 및 P2P 버스 연계 최적 이동 경로 안내.
              </p>
            </div>
            <div className="flex items-center justify-between text-xs text-[#C9A96E] pt-3 border-t border-stone-800">
              <span className="font-medium">항공편 스케줄 & 터미널</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4 */}
          <div 
            onClick={() => setActiveTab('nightlife')}
            className="group relative bg-[#0A1220] border border-[#C9A96E]/25 hover:border-[#C9A96E] rounded-lg p-5 cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3 text-xs text-[#C9A96E] font-mono">
                <span>04. BEYOND CASINO</span>
                <span>골프·밤문화·인프라</span>
              </div>
              <h2 className="text-lg font-serif-display font-semibold text-[#F5F1E8] group-hover:text-[#C9A96E] transition-colors mb-2">
                카지노 밖 다낭 라이프
              </h2>
              <p className="text-xs text-[#F5F1E8]/70 leading-relaxed mb-4">
                호이아나 쇼어스 바다 듄스 골프, 한강변 정상 가라오케/호텔 스파, 안트엉 한인타운 식당 및 한국어 통역 의료기관까지 원스톱 라이프 가이드.
              </p>
            </div>
            <div className="flex items-center justify-between text-xs text-[#C9A96E] pt-3 border-t border-stone-800">
              <span className="font-medium">라이프스타일 가이드</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
