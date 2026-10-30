import React, { useState } from 'react';
import { environmentComparisonList } from '../data/comparisonData';
import { ActiveTab, DepartureCity } from '../types';
import { Compass, Scale, CheckCircle2, ChevronDown, ChevronUp, Layers, Sparkles } from 'lucide-react';

interface EnvironmentCompareViewProps {
  departureCity: DepartureCity;
  setActiveTab: (tab: ActiveTab) => void;
}

export const EnvironmentCompareView: React.FC<EnvironmentCompareViewProps> = ({
  departureCity,
  setActiveTab,
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(environmentComparisonList[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="py-12 bg-[#080A0F] min-h-screen text-[#F5F1E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 pb-6 border-b border-[#C9A96E]/20">
          <div className="flex items-center gap-2 text-xs text-[#C9A96E] font-mono uppercase tracking-wider mb-2">
            <span>REGIONAL CASINO ECOSYSTEM AUDIT</span>
            <span aria-hidden="true">·</span>
            <span>MANILA · CLARK · DANANG</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif-display font-bold text-[#F5F1E8] mb-3">
            필리핀 카지노 환경과 다낭의 10대 심층 비교
          </h1>
          <p className="text-sm sm:text-base text-[#F5F1E8]/75 max-w-3xl leading-relaxed">
            마닐라의 거대 메가 IR, 클락의 골프 중심 컴팩트 카지노 단지, 그리고 다낭의 청정 해변 외국인 전용 복합리조트까지. 10가지 핵심 기준을 통해 각 도시의 객관적 특성을 대조합니다.
          </p>
        </div>

        {/* Analytical Neutrality Notice */}
        <div className="bg-[#0A1220] border border-[#C9A96E]/30 rounded-lg p-5 mb-10 flex items-start gap-3">
          <Scale className="w-5 h-5 text-[#C9A96E] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-stone-300 leading-relaxed">
            <strong className="text-white">객관적 비교 원칙: </strong>
            본 분석은 특정 도시가 무조건 더 낫다고 단정하지 않습니다. 마닐라의 압도적인 테이블 유동성, 클락의 한인 맞춤형 골프 동선, 다낭의 여유로운 해변 힐링과 안전한 치안 등 여행자의 플레이 스타일과 동반자 구성에 맞추어 최적의 선택을 돕습니다.
          </div>
        </div>

        {/* 10 Dimension Accordion/Cards */}
        <div className="space-y-4 mb-12">
          {environmentComparisonList.map((item, index) => {
            const isExpanded = expandedId === item.id;

            return (
              <div
                key={item.id}
                className="bg-[#0A1220] border border-[#C9A96E]/20 hover:border-[#C9A96E]/50 rounded-xl overflow-hidden transition-all shadow-md"
              >
                {/* Header Row */}
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono font-bold text-[#C9A96E] bg-[#080A0F] border border-[#C9A96E]/30 px-2.5 py-1 rounded">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <span className="text-[11px] font-mono text-stone-400 block">{item.category}</span>
                      <h3 className="text-base sm:text-lg font-serif-display font-bold text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-stone-400">
                    <span className="text-xs hidden sm:inline text-stone-400">
                      {isExpanded ? '접기' : '상세 비교 펼치기'}
                    </span>
                    {isExpanded ? <ChevronUp className="w-5 h-5 text-[#C9A96E]" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Expanded Comparison Content */}
                {isExpanded && (
                  <div className="px-5 pb-6 pt-2 border-t border-stone-800/80 bg-[#060B14]">
                    {/* 3 City Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6 pt-2">
                      {/* Manila Column */}
                      <div className="bg-[#0A1220] border border-stone-800 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2 pb-2 border-b border-stone-800">
                          <span className="text-xs font-serif-display font-bold text-stone-300">
                            마닐라 (Manila)
                          </span>
                          <span className="text-[10px] text-stone-500 font-mono">솔레어·오카다</span>
                        </div>
                        <p className="text-xs text-stone-300 leading-relaxed">
                          {item.manila}
                        </p>
                      </div>

                      {/* Clark Column */}
                      <div className="bg-[#0A1220] border border-stone-800 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2 pb-2 border-b border-stone-800">
                          <span className="text-xs font-serif-display font-bold text-stone-300">
                            클락 (Clark)
                          </span>
                          <span className="text-[10px] text-stone-500 font-mono">한·디하이츠</span>
                        </div>
                        <p className="text-xs text-stone-300 leading-relaxed">
                          {item.clark}
                        </p>
                      </div>

                      {/* Danang Column */}
                      <div className="bg-[#0A1220] border border-[#C9A96E]/40 rounded-lg p-4 bg-[#C9A96E]/5">
                        <div className="flex items-center justify-between mb-2 pb-2 border-b border-[#C9A96E]/20">
                          <span className="text-xs font-serif-display font-bold text-[#C9A96E]">
                            베트남 다낭 (Danang)
                          </span>
                          <span className="text-[10px] text-[#C9A96E] font-mono">호이아나·크라운</span>
                        </div>
                        <p className="text-xs text-stone-200 leading-relaxed font-medium">
                          {item.danang}
                        </p>
                      </div>
                    </div>

                    {/* Key Takeaway Strip */}
                    <div className="p-3.5 rounded-lg bg-[#0A1220] border border-[#C9A96E]/20 flex items-start gap-2.5 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white">전문 분석가 핵심 요약: </strong>
                        <span className="text-stone-300">{item.keyTakeaway}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
