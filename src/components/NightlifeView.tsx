import React, { useState } from 'react';
import { nightlifeCategories } from '../data/nightlifeData';
import { NightlifeCategory } from '../types';
import { Music, Sparkles, GlassWater, ShieldAlert, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';

export const NightlifeView: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<NightlifeCategory['id']>('karaoke');

  const selectedData = nightlifeCategories.find(c => c.id === activeCategory) || nightlifeCategories[0];

  return (
    <div className="py-12 bg-[#080A0F] min-h-screen text-[#F5F1E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 pb-6 border-b border-[#C9A96E]/20">
          <div className="flex items-center gap-2 text-xs text-[#C9A96E] font-mono uppercase tracking-wider mb-2">
            <span>EVENING LEISURE & NIGHTLIFE</span>
            <span aria-hidden="true">·</span>
            <span>LEGITIMATE TOURISM GUIDE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif-display font-bold text-[#F5F1E8] mb-3">
            다낭 야간 관광 & 나이트라이프 가이드
          </h1>
          <p className="text-sm sm:text-base text-[#F5F1E8]/75 max-w-3xl leading-relaxed">
            카지노 밖에서 성인 여행객이 즐길 수 있는 정상적인 노래방·가라오케, 5성급 호텔 스파, 한강변 초고층 루프톱 라운지 및 바가지 분쟁 없는 안전한 이용 수칙을 안내합니다.
          </p>
        </div>

        {/* Legal & Compliance Notice */}
        <div className="bg-[#0A1220] border border-amber-600/30 rounded-lg p-4 mb-8 flex items-start gap-3 text-xs sm:text-sm text-stone-300">
          <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white">합법적 관광 가이드 준수 고지: </strong>
            본 사이트는 베트남 법률 및 대한민국 형법을 엄격히 준수하며, 성매매 및 불법적인 유료 성적 서비스를 일체 광고하거나 예약·알선하지 않습니다. 건전하고 안전한 프리미엄 야간 레저 정보만을 제공합니다.
          </div>
        </div>

        {/* Category Tab Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          <button
            onClick={() => setActiveCategory('karaoke')}
            className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer flex items-center gap-3 ${
              activeCategory === 'karaoke'
                ? 'bg-[#C9A96E] text-[#080A0F] font-bold border-[#C9A96E] shadow-lg'
                : 'bg-[#0A1220] text-stone-300 hover:text-white border-stone-800'
            }`}
          >
            <Music className="w-5 h-5 shrink-0" />
            <div>
              <div className="text-xs font-serif-display">가라오케 & 프라이빗 룸</div>
              <div className="text-[10px] opacity-75 font-mono">KTV & 룸차지</div>
            </div>
          </button>

          <button
            onClick={() => setActiveCategory('spa')}
            className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer flex items-center gap-3 ${
              activeCategory === 'spa'
                ? 'bg-[#C9A96E] text-[#080A0F] font-bold border-[#C9A96E] shadow-lg'
                : 'bg-[#0A1220] text-stone-300 hover:text-white border-stone-800'
            }`}
          >
            <Sparkles className="w-5 h-5 shrink-0" />
            <div>
              <div className="text-xs font-serif-display">마사지 & 호텔 스파</div>
              <div className="text-[10px] opacity-75 font-mono">스포츠·아로마·웰니스</div>
            </div>
          </button>

          <button
            onClick={() => setActiveCategory('lounge')}
            className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer flex items-center gap-3 ${
              activeCategory === 'lounge'
                ? 'bg-[#C9A96E] text-[#080A0F] font-bold border-[#C9A96E] shadow-lg'
                : 'bg-[#0A1220] text-stone-300 hover:text-white border-stone-800'
            }`}
          >
            <GlassWater className="w-5 h-5 shrink-0" />
            <div>
              <div className="text-xs font-serif-display">라운지 & 루프톱 바</div>
              <div className="text-[10px] opacity-75 font-mono">스카이36·비치클럽</div>
            </div>
          </button>

          <button
            onClick={() => setActiveCategory('safety')}
            className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer flex items-center gap-3 ${
              activeCategory === 'safety'
                ? 'bg-[#C9A96E] text-[#080A0F] font-bold border-[#C9A96E] shadow-lg'
                : 'bg-[#0A1220] text-stone-300 hover:text-white border-stone-800'
            }`}
          >
            <ShieldAlert className="w-5 h-5 shrink-0" />
            <div>
              <div className="text-xs font-serif-display">야간 안전 & 바가지 예방</div>
              <div className="text-[10px] opacity-75 font-mono">교통·계산서 검증</div>
            </div>
          </button>
        </div>

        {/* Active Category Content Section */}
        <div className="bg-[#0A1220] border border-[#C9A96E]/25 rounded-xl p-6 sm:p-8 mb-12 shadow-xl">
          <div className="mb-6 pb-4 border-b border-stone-800">
            <span className="text-xs font-mono text-[#C9A96E] uppercase">{selectedData.title}</span>
            <h2 className="text-2xl font-serif-display font-bold text-white mt-1">
              {selectedData.koreanTitle}
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed">
              {selectedData.summary}
            </p>
          </div>

          <div className="space-y-6">
            {selectedData.subCategories.map((sub, idx) => (
              <div key={idx} className="bg-[#080A0F] border border-stone-800 rounded-lg p-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-2 border-b border-stone-800/80">
                  <h3 className="text-base sm:text-lg font-serif-display font-semibold text-white">
                    {sub.title}
                  </h3>
                  <div className="text-xs text-[#C9A96E] font-mono">
                    영업시간: {sub.operatingHours}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-4">
                  {sub.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-[#0A1220] p-3.5 rounded border border-stone-800/80">
                    <span className="text-xs font-mono text-[#C9A96E] block mb-1">
                      이용 요금 및 결제 구조:
                    </span>
                    <span className="text-xs text-stone-200">{sub.priceStructure}</span>
                  </div>

                  <div className="bg-[#0A1220] p-3.5 rounded border border-stone-800/80">
                    <span className="text-xs font-mono text-[#C9A96E] block mb-1">
                      영업 규정 및 준수 사항:
                    </span>
                    <span className="text-xs text-stone-200">
                      정식 사업자 등록 업소 방문 및 영수증 세부 내역 대조 필수
                    </span>
                  </div>
                </div>

                {/* Tips & Cautions */}
                <div className="pt-3 border-t border-stone-800/60">
                  <span className="text-xs font-mono text-stone-400 block mb-2">
                    실전 팁 & 추가요금 분쟁 방지:
                  </span>
                  <ul className="space-y-1.5 text-xs text-stone-300">
                    {sub.tipsAndCautions.map((tip, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A96E] shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
