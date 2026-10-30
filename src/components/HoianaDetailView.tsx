import React from 'react';
import { hoianaCasinoData } from '../data/casinoData';
import { ActiveTab } from '../types';
import { 
  Building2, 
  MapPin, 
  Clock, 
  Compass, 
  CheckCircle2, 
  ExternalLink, 
  ShieldCheck, 
  AlertTriangle, 
  ArrowLeft,
  DollarSign,
  Utensils,
  Award
} from 'lucide-react';

interface HoianaDetailViewProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export const HoianaDetailView: React.FC<HoianaDetailViewProps> = ({ setActiveTab }) => {
  const data = hoianaCasinoData;

  return (
    <div className="py-12 bg-[#080A0F] min-h-screen text-[#F5F1E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-800">
          <button
            onClick={() => setActiveTab('compare')}
            className="flex items-center gap-2 text-xs font-mono text-[#C9A96E] hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>카지노 비교표로 돌아가기</span>
          </button>
          
          <div className="flex items-center gap-2 text-xs text-stone-400 font-mono">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>마지막 공식 확인일: {data.lastVerifiedDate}</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative rounded-xl overflow-hidden border border-[#C9A96E]/30 mb-10 bg-[#0A1220]">
          <div className="relative h-72 sm:h-96 w-full overflow-hidden">
            <img
              src={data.imageUrl}
              alt="호이아나 카지노 복합리조트 전경"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1220] via-[#0A1220]/60 to-black/30" />
            
            <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="text-xs font-mono text-[#C9A96E] tracking-widest uppercase mb-1">
                  INTEGRATED RESORT & CASINO REPORT
                </div>
                <h1 className="text-2xl sm:text-4xl font-serif-display font-bold text-white mb-2">
                  {data.koreanName}
                </h1>
                <p className="text-xs sm:text-sm text-stone-300 font-mono">
                  {data.officialName} · {data.district}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={data.officialSourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#C9A96E] hover:bg-[#DFC89B] text-[#080A0F] text-xs font-semibold rounded flex items-center gap-1.5 transition-colors"
                >
                  <span>공식 웹사이트</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Summary Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-[#0A1220] border border-[#C9A96E]/20 rounded-lg p-4">
            <div className="text-[11px] font-mono text-stone-400 uppercase">라이브 테이블</div>
            <div className="text-xl sm:text-2xl font-serif-display font-bold text-[#C9A96E] mt-1 tabular-nums">
              140+ 테이블
            </div>
            <div className="text-[11px] text-stone-400 mt-1">공식 IR 안내서 기준</div>
          </div>

          <div className="bg-[#0A1220] border border-[#C9A96E]/20 rounded-lg p-4">
            <div className="text-[11px] font-mono text-stone-400 uppercase">전자 슬롯머신</div>
            <div className="text-xl sm:text-2xl font-serif-display font-bold text-[#C9A96E] mt-1 tabular-nums">
              300+ 머신
            </div>
            <div className="text-[11px] text-stone-400 mt-1">ETG 및 잭팟 슬롯</div>
          </div>

          <div className="bg-[#0A1220] border border-[#C9A96E]/20 rounded-lg p-4">
            <div className="text-[11px] font-mono text-stone-400 uppercase">입장 자격</div>
            <div className="text-xl sm:text-2xl font-serif-display font-bold text-white mt-1">
              외국인 전용
            </div>
            <div className="text-[11px] text-stone-400 mt-1">만 21세 이상 / 원본 여권</div>
          </div>

          <div className="bg-[#0A1220] border border-[#C9A96E]/20 rounded-lg p-4">
            <div className="text-[11px] font-mono text-stone-400 uppercase">골프 & 비치</div>
            <div className="text-xl sm:text-2xl font-serif-display font-bold text-white mt-1">
              18홀 + 4km 해변
            </div>
            <div className="text-[11px] text-stone-400 mt-1">단지 내 호이아나 쇼어스</div>
          </div>
        </div>

        {/* Detailed Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main 2-Column Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Section 1: 단지 개요 및 게이밍 환경 */}
            <div className="bg-[#0A1220] border border-stone-800 rounded-lg p-6">
              <h2 className="text-xl font-serif-display font-bold text-white mb-4 pb-2 border-b border-stone-800 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#C9A96E]" />
                <span>복합리조트 단지 구성 및 게이밍 플로어</span>
              </h2>
              <p className="text-sm text-stone-300 leading-relaxed mb-4">
                {data.complexOverview}
              </p>
              <div className="text-sm text-stone-300 leading-relaxed mb-4">
                <strong className="text-white block mb-1">라이브 바카라 및 플로어 환경:</strong>
                {data.liveBaccaratDetails}
              </div>

              <div className="mt-4 pt-4 border-t border-stone-800/80">
                <span className="text-xs text-[#C9A96E] font-mono block mb-2">운영 게임 종목:</span>
                <div className="flex flex-wrap gap-2">
                  {data.gameTypes.map((game, idx) => (
                    <span key={idx} className="text-xs text-stone-300 bg-[#080A0F] border border-stone-800 rounded px-2.5 py-1">
                      {game}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 2: 카드 스퀴즈(까기) 및 VIP 규정 */}
            <div className="bg-[#0A1220] border border-[#C9A96E]/30 rounded-lg p-6">
              <h2 className="text-xl font-serif-display font-bold text-white mb-4 pb-2 border-b border-[#C9A96E]/20 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#C9A96E]" />
                <span>카드 스퀴즈(카드 까기) 조건 및 VIP 시설</span>
              </h2>
              
              <div className="mb-5 bg-[#080A0F] p-4 rounded border border-[#C9A96E]/20">
                <span className="text-xs text-[#C9A96E] font-mono block mb-1">공식 확인된 카드 스퀴즈 조건:</span>
                <p className="text-sm text-stone-200 leading-relaxed">
                  {data.cardSqueezeCondition}
                </p>
              </div>

              <div>
                <span className="text-xs text-[#C9A96E] font-mono block mb-1">VIP 게이밍 살롱:</span>
                <p className="text-sm text-stone-300 leading-relaxed">
                  {data.vipFacilities}
                </p>
              </div>
            </div>

            {/* Section 3: 칩 환전 및 공식 정산 절차 */}
            <div className="bg-[#0A1220] border border-stone-800 rounded-lg p-6">
              <h2 className="text-xl font-serif-display font-bold text-white mb-4 pb-2 border-b border-stone-800 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-[#C9A96E]" />
                <span>칩 교환 및 공식 지급·환전 절차</span>
              </h2>
              <p className="text-sm text-stone-300 leading-relaxed mb-4">
                {data.chipExchangeProcess}
              </p>
              <div className="p-3 bg-stone-900/60 rounded text-xs text-amber-300/90 border border-amber-500/20">
                <strong>주의사항:</strong> 베트남 출국 시 미화 5,000달러(또는 상당 외화) 이상의 현금을 소지하고 나갈 경우 공식 카지노 환전 확인 영수증(Casino Foreign Exchange Certificate)을 반드시 지참하여 세관에 소명해야 안전합니다.
              </div>
            </div>
          </div>

          {/* Right Sidebar: Location, Hotel & Comparison */}
          <div className="space-y-6">
            {/* Location & Accessibility Box */}
            <div className="bg-[#0A1220] border border-stone-800 rounded-lg p-5">
              <h3 className="text-base font-serif-display font-semibold text-white mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C9A96E]" />
                <span>위치 및 이동 소요 시간</span>
              </h3>
              <div className="space-y-3 text-xs text-stone-300 divide-y divide-stone-800/80">
                <div className="pt-2">
                  <span className="text-stone-400 block">다낭 국제공항(DAD):</span>
                  <span className="text-white font-medium">{data.accessibility.fromAirportTime} ({data.accessibility.fromAirportDistance})</span>
                </div>
                <div className="pt-2">
                  <span className="text-stone-400 block">다낭 시내(한강 중심):</span>
                  <span className="text-white font-medium">{data.accessibility.fromCityCenterTime}</span>
                </div>
                <div className="pt-2">
                  <span className="text-stone-400 block">호이안 구시가지(유네스코 유적):</span>
                  <span className="text-[#C9A96E] font-medium">{data.accessibility.fromHoiAnOldTownTime} (초인접)</span>
                </div>
                <div className="pt-2">
                  <span className="text-stone-400 block">해변 접근성:</span>
                  <span className="text-white font-medium">{data.accessibility.beachAccess}</span>
                </div>
              </div>
            </div>

            {/* Accommodations & F&B Box */}
            <div className="bg-[#0A1220] border border-stone-800 rounded-lg p-5">
              <h3 className="text-base font-serif-display font-semibold text-white mb-3 flex items-center gap-2">
                <Utensils className="w-4 h-4 text-[#C9A96E]" />
                <span>호텔 객실 및 부대시설</span>
              </h3>
              <div className="space-y-3 text-xs text-stone-300">
                <div>
                  <span className="text-stone-400 block">4개 특급 호텔 브랜드:</span>
                  <ul className="list-disc list-inside text-stone-200 mt-1 space-y-0.5">
                    {data.accommodations.hotelBrands.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="text-stone-400 block">총 객실 규모:</span>
                  <span className="text-white font-medium">{data.accommodations.roomCountTotal}</span>
                </div>
                <div>
                  <span className="text-stone-400 block">주요 다이닝:</span>
                  <p className="text-stone-300 mt-0.5">{data.accommodations.diningSummary}</p>
                </div>
              </div>
            </div>

            {/* Key Differences from Manila/Clark */}
            <div className="bg-[#0A1220] border border-[#C9A96E]/20 rounded-lg p-5">
              <h3 className="text-base font-serif-display font-semibold text-[#C9A96E] mb-3 flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#C9A96E]" />
                <span>필리핀 카지노 대비 핵심 차이점</span>
              </h3>
              <ul className="space-y-2 text-xs text-stone-300">
                {data.keyDifferencesFromPH.map((diff, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#C9A96E] font-bold">·</span>
                    <span>{diff}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
