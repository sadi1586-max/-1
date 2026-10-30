import React from 'react';
import { crownCasinoData } from '../data/casinoData';
import { ActiveTab } from '../types';
import { 
  Building2, 
  MapPin, 
  Clock, 
  Compass, 
  AlertCircle, 
  ExternalLink, 
  ShieldCheck, 
  AlertTriangle, 
  ArrowLeft,
  DollarSign,
  Utensils
} from 'lucide-react';

interface CrownDetailViewProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export const CrownDetailView: React.FC<CrownDetailViewProps> = ({ setActiveTab }) => {
  const data = crownCasinoData;

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
            <span>현장 데이터 기준일: {data.lastVerifiedDate}</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative rounded-xl overflow-hidden border border-[#C9A96E]/30 mb-10 bg-[#0A1220]">
          <div className="relative h-72 sm:h-96 w-full overflow-hidden">
            <img
              src={data.imageUrl}
              alt="크라운 인터내셔널 클럽 다낭 해변 전경"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1220] via-[#0A1220]/60 to-black/30" />
            
            <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="text-xs font-mono text-[#C9A96E] tracking-widest uppercase mb-1">
                  BEACHFRONT CASINO CLUB REPORT
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
                  <span>크라운플라자 공식 정보</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Summary Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-[#0A1220] border border-[#C9A96E]/20 rounded-lg p-4">
            <div className="text-[11px] font-mono text-stone-400 uppercase">공항 이동시간</div>
            <div className="text-xl sm:text-2xl font-serif-display font-bold text-[#C9A96E] mt-1 tabular-nums">
              약 15분
            </div>
            <div className="text-[11px] text-stone-400 mt-1">다낭 국제공항에서 8km</div>
          </div>

          <div className="bg-[#0A1220] border border-[#C9A96E]/20 rounded-lg p-4">
            <div className="text-[11px] font-mono text-stone-400 uppercase">한인타운(안트엉)</div>
            <div className="text-xl sm:text-2xl font-serif-display font-bold text-[#C9A96E] mt-1 tabular-nums">
              차량 5분
            </div>
            <div className="text-[11px] text-stone-400 mt-1">식당·마사지 상권 초인접</div>
          </div>

          <div className="bg-[#0A1220] border border-[#C9A96E]/20 rounded-lg p-4">
            <div className="text-[11px] font-mono text-stone-400 uppercase">테이블 규모</div>
            <div className="text-xl sm:text-2xl font-serif-display font-bold text-amber-300 mt-1">
              공식 확인 필요
            </div>
            <div className="text-[11px] text-stone-400 mt-1">수십 개 테이블 추산</div>
          </div>

          <div className="bg-[#0A1220] border border-[#C9A96E]/20 rounded-lg p-4">
            <div className="text-[11px] font-mono text-stone-400 uppercase">카드 스퀴즈 여부</div>
            <div className="text-xl sm:text-2xl font-serif-display font-bold text-amber-300 mt-1">
              공식 확인 필요
            </div>
            <div className="text-[11px] text-stone-400 mt-1">VIP/테이블별 상이</div>
          </div>
        </div>

        {/* Detailed Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main 2-Column Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Section 1: 단지 관계 및 게이밍 환경 */}
            <div className="bg-[#0A1220] border border-stone-800 rounded-lg p-6">
              <h2 className="text-xl font-serif-display font-bold text-white mb-4 pb-2 border-b border-stone-800 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#C9A96E]" />
                <span>크라운플라자 다낭 단지 및 게이밍 클럽 관계</span>
              </h2>
              <p className="text-sm text-stone-300 leading-relaxed mb-4">
                {data.complexOverview}
              </p>
              <div className="text-sm text-stone-300 leading-relaxed mb-4">
                <strong className="text-white block mb-1">라이브 테이블 및 게임장 소재:</strong>
                {data.liveBaccaratDetails}
              </div>

              <div className="mt-4 pt-4 border-t border-stone-800/80">
                <span className="text-xs text-[#C9A96E] font-mono block mb-2">운영 게임 종류:</span>
                <div className="flex flex-wrap gap-2">
                  {data.gameTypes.map((game, idx) => (
                    <span key={idx} className="text-xs text-stone-300 bg-[#080A0F] border border-stone-800 rounded px-2.5 py-1">
                      {game}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 2: 카드 스퀴즈 및 테이블 미니멈 투명 고지 */}
            <div className="bg-[#0A1220] border border-amber-600/30 rounded-lg p-6">
              <h2 className="text-xl font-serif-display font-bold text-white mb-4 pb-2 border-b border-amber-600/20 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-400" />
                <span>카드 스퀴즈(까기) 및 베팅 규정 투명 고지</span>
              </h2>
              
              <div className="mb-5 bg-[#080A0F] p-4 rounded border border-amber-500/20">
                <span className="text-xs text-amber-400 font-mono block mb-1">카드 스퀴즈 가능 여부: 공식 확인 필요</span>
                <p className="text-sm text-stone-200 leading-relaxed">
                  {data.cardSqueezeCondition}
                </p>
              </div>

              <p className="text-xs text-stone-300 leading-relaxed">
                크라운의 최소·최대 베팅 규정 및 카드 스퀴즈 허용 여부는 공식적인 대외 규정집으로 공표되지 않습니다. 따라서 바카라에서 본인이 직접 카드를 확인(스퀴즈)하길 원하는 플레이어는 테이블 착석 전 반드시 카지노 플로어 매니저에게 직접 문의하여 규정을 확인하시기 바랍니다.
              </p>
            </div>

            {/* Section 3: 칩 교환 및 이용 자격 */}
            <div className="bg-[#0A1220] border border-stone-800 rounded-lg p-6">
              <h2 className="text-xl font-serif-display font-bold text-white mb-4 pb-2 border-b border-stone-800 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-[#C9A96E]" />
                <span>공식 칩 교환 및 외국인 입장 조건</span>
              </h2>
              <p className="text-sm text-stone-300 leading-relaxed mb-4">
                {data.chipExchangeProcess}
              </p>
              <div className="p-3 bg-stone-900/60 rounded text-xs text-stone-300 border border-stone-700/50">
                <strong>입장 조건:</strong> 만 21세 이상 외국인에 한해 여권 원본 제시 시 무료 입장 가능합니다. 복장은 스마트 캐주얼이 요구됩니다.
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Location & Accessibility Box */}
            <div className="bg-[#0A1220] border border-stone-800 rounded-lg p-5">
              <h3 className="text-base font-serif-display font-semibold text-white mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C9A96E]" />
                <span>도심 접근성 및 이동 시간</span>
              </h3>
              <div className="space-y-3 text-xs text-stone-300 divide-y divide-stone-800/80">
                <div className="pt-2">
                  <span className="text-stone-400 block">다낭 국제공항(DAD):</span>
                  <span className="text-[#C9A96E] font-medium">{data.accessibility.fromAirportTime} ({data.accessibility.fromAirportDistance})</span>
                </div>
                <div className="pt-2">
                  <span className="text-stone-400 block">안트엉 한인타운(K-Town):</span>
                  <span className="text-[#C9A96E] font-medium">차량 5분 (미케비치 바로 인접)</span>
                </div>
                <div className="pt-2">
                  <span className="text-stone-400 block">다낭 한강 시내:</span>
                  <span className="text-white font-medium">{data.accessibility.fromCityCenterTime}</span>
                </div>
                <div className="pt-2">
                  <span className="text-stone-400 block">호이안 구시가지:</span>
                  <span className="text-white font-medium">{data.accessibility.fromHoiAnOldTownTime}</span>
                </div>
              </div>
            </div>

            {/* Hotel & Amenities Box */}
            <div className="bg-[#0A1220] border border-stone-800 rounded-lg p-5">
              <h3 className="text-base font-serif-display font-semibold text-white mb-3 flex items-center gap-2">
                <Utensils className="w-4 h-4 text-[#C9A96E]" />
                <span>호텔 및 부대시설</span>
              </h3>
              <div className="space-y-3 text-xs text-stone-300">
                <div>
                  <span className="text-stone-400 block">연계 호텔 단지:</span>
                  <span className="text-white font-medium">Crowne Plaza Danang (IHG 운영 단지)</span>
                </div>
                <div>
                  <span className="text-stone-400 block">객실 규모:</span>
                  <span className="text-white font-medium">{data.accommodations.roomCountTotal}</span>
                </div>
                <div>
                  <span className="text-stone-400 block">해변 및 수영장:</span>
                  <p className="text-stone-300 mt-0.5">{data.accommodations.poolBeach}</p>
                </div>
              </div>
            </div>

            {/* Key Differences */}
            <div className="bg-[#0A1220] border border-[#C9A96E]/20 rounded-lg p-5">
              <h3 className="text-base font-serif-display font-semibold text-[#C9A96E] mb-3 flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#C9A96E]" />
                <span>필리핀 카지노 대비 핵심 특징</span>
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
