import React, { useState } from 'react';
import { ActiveTab, CasinoComparisonRow } from '../types';
import { casinoComparisonMatrix, hoianaCasinoData, crownCasinoData } from '../data/casinoData';
import { CheckCircle2, AlertCircle, ArrowRight, ExternalLink, ShieldAlert, Sparkles, Filter } from 'lucide-react';

interface CasinoCompareViewProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export const CasinoCompareView: React.FC<CasinoCompareViewProps> = ({ setActiveTab }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', '기본 정보', '접근성', '시설 규모', '바카라 환경', '입장 규정', '리조트 인프라', '골프 연계', '식음료 & 편의'];

  const filteredRows = selectedCategory === 'all'
    ? casinoComparisonMatrix
    : casinoComparisonMatrix.filter(r => r.category === selectedCategory);

  return (
    <div className="py-12 bg-[#080A0F] min-h-screen text-[#F5F1E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-[#C9A96E] font-mono uppercase tracking-wider mb-2">
            <span>CASINO DIRECTORY</span>
            <span aria-hidden="true">·</span>
            <span>SIDE-BY-SIDE AUDIT</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif-display font-bold text-[#F5F1E8] mb-3">
            다낭 주요 카지노 2곳 종합 비교표
          </h1>
          <p className="text-sm sm:text-base text-[#F5F1E8]/75 max-w-3xl leading-relaxed">
            베트남 다낭의 양대 카지노인 <strong className="text-[#C9A96E]">호이아나(Hoiana Resort & Golf)</strong>와 <strong className="text-[#C9A96E]">크라운(Crown International Club)</strong>의 시설 규모, 테이블 운영 규정, 카드 스퀴즈 및 이동 편의를 동일 잣대로 투명하게 비교합니다.
          </p>
        </div>

        {/* Casino Quick Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Hoiana Preview Card */}
          <div className="bg-[#0A1220] border border-[#C9A96E]/30 rounded-lg overflow-hidden flex flex-col justify-between shadow-lg">
            <div className="relative h-48 sm:h-56 overflow-hidden">
              <img
                src={hoianaCasinoData.imageUrl}
                alt="호이아나 카지노 복합리조트"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1220] via-transparent to-black/30" />
              <div className="absolute top-3 left-3 bg-[#080A0F]/80 backdrop-blur-md px-2.5 py-1 rounded text-[11px] text-[#C9A96E] font-mono border border-[#C9A96E]/20">
                공식 확인 140+ 테이블
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-[#C9A96E]">대형 종합 복합리조트 (IR)</span>
                <span className="text-xs text-stone-400">최종 확인: {hoianaCasinoData.lastVerifiedDate}</span>
              </div>
              <h2 className="text-xl font-serif-display font-bold text-white mb-2">
                호이아나 리조트 & 골프 카지노
              </h2>
              <p className="text-xs text-stone-300 leading-relaxed mb-4">
                다낭 공항에서 남쪽 45km 해안에 위치한 1,000ha급 메가 리조트. 로버트 트렌트 존스 Jr 링크스 골프장과 4개 호텔 타워를 보유하며 베트남 중부 최대의 합법 외국인 전용 라이브 게이밍 플로어를 운영합니다.
              </p>
              <button
                onClick={() => {
                  setActiveTab('hoiana');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-2.5 px-4 bg-[#C9A96E]/20 hover:bg-[#C9A96E] hover:text-[#080A0F] text-[#C9A96E] border border-[#C9A96E]/50 rounded text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>호이아나 카지노 상세 정보 보기</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Crown Preview Card */}
          <div className="bg-[#0A1220] border border-[#C9A96E]/30 rounded-lg overflow-hidden flex flex-col justify-between shadow-lg">
            <div className="relative h-48 sm:h-56 overflow-hidden">
              <img
                src={crownCasinoData.imageUrl}
                alt="크라운 인터내셔널 클럽 다낭"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1220] via-transparent to-black/30" />
              <div className="absolute top-3 left-3 bg-[#080A0F]/80 backdrop-blur-md px-2.5 py-1 rounded text-[11px] text-[#C9A96E] font-mono border border-[#C9A96E]/20">
                다낭 시내·미케비치 인접
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-[#C9A96E]">해변 리조트 게이밍 클럽</span>
                <span className="text-xs text-stone-400">최종 확인: {crownCasinoData.lastVerifiedDate}</span>
              </div>
              <h2 className="text-xl font-serif-display font-bold text-white mb-2">
                크라운 인터내셔널 클럽 다낭
              </h2>
              <p className="text-xs text-stone-300 leading-relaxed mb-4">
                크라운플라자 다낭 단지 내에 위치하며 미케비치 및 안트엉 한인 상권과 차량 5~10분 거리. 이동 시간이 짧고 시내 한식당 및 마사지 샵 접근성이 뛰어난 전통의 해변 카지노입니다.
              </p>
              <button
                onClick={() => {
                  setActiveTab('crown');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-2.5 px-4 bg-[#C9A96E]/20 hover:bg-[#C9A96E] hover:text-[#080A0F] text-[#C9A96E] border border-[#C9A96E]/50 rounded text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>크라운 카지노 상세 정보 보기</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Verification Policy Disclaimer Banner */}
        <div className="mb-6 p-4 rounded-lg bg-[#0A1220] border border-amber-600/30 flex items-start gap-3 text-xs sm:text-sm text-stone-300">
          <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-white">데이터 검증 및 표기 원칙: </span>
            호이아나는 공식 규정집에 기재된 140+ 테이블 및 스퀴즈 기준을 표시하며, 크라운의 내부 테이블 수와 카드 스퀴즈 적용 조건은 운영사의 공식 공표가 없어 추정치 대신 <strong className="text-amber-400 font-medium">"공식 확인 필요"</strong>로 정확히 표기합니다.
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
          <span className="text-xs text-stone-400 font-mono flex items-center gap-1 shrink-0 mr-2">
            <Filter className="w-3.5 h-3.5 text-[#C9A96E]" />
            카테고리 필터:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#C9A96E] text-[#080A0F] font-bold'
                  : 'bg-[#0A1220] text-stone-300 hover:text-white border border-stone-800'
              }`}
            >
              {cat === 'all' ? '전체 보기' : cat}
            </button>
          ))}
        </div>

        {/* Main Detailed Comparison Table */}
        <div className="overflow-x-auto rounded-lg border border-[#C9A96E]/30 bg-[#0A1220] shadow-xl">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-[#C9A96E]/20 bg-[#060B14]">
                <th className="py-4 px-4 sm:px-6 font-serif-display font-semibold text-[#C9A96E] w-1/5">항목 구분</th>
                <th className="py-4 px-4 sm:px-6 font-serif-display font-semibold text-white w-2/5 bg-[#C9A96E]/10 border-l border-[#C9A96E]/20">
                  호이아나 카지노 (Hoiana)
                </th>
                <th className="py-4 px-4 sm:px-6 font-serif-display font-semibold text-white w-2/5 border-l border-stone-800">
                  크라운 인터내셔널 클럽 (Crown)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800 text-stone-200">
              {filteredRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-4 sm:px-6 font-medium text-white">
                    <span className="text-[11px] text-[#C9A96E] font-mono block mb-0.5">{row.category}</span>
                    <span className="font-semibold text-sm">{row.label}</span>
                  </td>
                  
                  {/* Hoiana Column */}
                  <td className="py-4 px-4 sm:px-6 bg-[#C9A96E]/5 border-l border-[#C9A96E]/20">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-white">{row.hoiana}</div>
                        {row.note && (
                          <div className="text-[11px] text-[#C9A96E]/80 mt-1 font-mono">
                            {row.note}
                          </div>
                        )}
                      </div>
                    </div>
                  </td>

                  {/* Crown Column */}
                  <td className="py-4 px-4 sm:px-6 border-l border-stone-800">
                    <div className="flex items-start gap-2">
                      {row.isConfirmed.crown ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <div className={`font-medium ${row.isConfirmed.crown ? 'text-white' : 'text-amber-300'}`}>
                          {row.crown}
                        </div>
                        {!row.isConfirmed.crown && (
                          <span className="inline-block mt-1 text-[11px] text-amber-400/80 font-mono">
                            ※ 공식 공시 부재 (방문 전 현장 피트보스 확인 권장)
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Action Footnotes */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-[#0A1220] rounded-lg border border-stone-800">
          <div className="text-xs text-stone-400">
            궁금한 카지노의 객실 구성, 레스토랑, 골프 연계 및 세부 베팅 규정을 심층적으로 확인하세요.
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setActiveTab('hoiana');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-3.5 py-2 text-xs font-medium text-[#C9A96E] hover:text-white bg-[#080A0F] border border-[#C9A96E]/30 rounded transition-colors"
            >
              호이아나 상세 보기
            </button>
            <button
              onClick={() => {
                setActiveTab('crown');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-3.5 py-2 text-xs font-medium text-[#C9A96E] hover:text-white bg-[#080A0F] border border-[#C9A96E]/30 rounded transition-colors"
            >
              크라운 상세 보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
