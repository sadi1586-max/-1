import React, { useState } from 'react';
import { travelItineraryPlans } from '../data/itineraryData';
import { TravelItineraryPlan, ActiveTab } from '../types';
import { Calendar, Clock, MapPin, CheckCircle2, ArrowRight, ShieldCheck, Compass } from 'lucide-react';

interface ItinerariesViewProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export const ItinerariesView: React.FC<ItinerariesViewProps> = ({ setActiveTab }) => {
  const [selectedPlan, setSelectedPlan] = useState<TravelItineraryPlan>(travelItineraryPlans[0]);

  return (
    <div className="py-12 bg-[#080A0F] min-h-screen text-[#F5F1E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 pb-6 border-b border-[#C9A96E]/20">
          <div className="flex items-center gap-2 text-xs text-[#C9A96E] font-mono uppercase tracking-wider mb-2">
            <span>CURATED TRAVEL ITINERARIES</span>
            <span aria-hidden="true">·</span>
            <span>BALANCED LIFESTYLE SCHEDULES</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif-display font-bold text-[#F5F1E8] mb-3">
            마닐라·클락 출발 성인 여행객을 위한 다낭 추천 일정
          </h1>
          <p className="text-sm sm:text-base text-[#F5F1E8]/75 max-w-3xl leading-relaxed">
            카지노 참여를 권유하지 않으며, 필리핀 출발 비행 스케줄(마닐라 직항 야간 도착 등)에 맞추어 항공 이동, 5성급 리조트 동선, 챔피언십 골프와 호이안 유네스코 미식을 조화롭게 구성한 일반 여행 일정 모델입니다.
          </p>
        </div>

        {/* Schedule Principle Disclaimer */}
        <div className="bg-[#0A1220] border border-[#C9A96E]/30 rounded-lg p-4 mb-8 flex items-start gap-3 text-xs sm:text-sm text-stone-300">
          <Compass className="w-5 h-5 text-[#C9A96E] shrink-0 mt-0.5" />
          <div>
            <strong className="text-white">일정 구성 원칙: </strong>
            카지노 시설은 여행의 필수가 아니며 본인의 자유의사에 따라 방문하는 선택적 옵션입니다. 각 일정은 체류 목적(단기 휴식, 2색 골프, 역사문화 힐링)에 따라 가장 효율적인 동선으로 기획되었습니다.
          </div>
        </div>

        {/* Itinerary Duration Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {travelItineraryPlans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setSelectedPlan(plan)}
              className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
                selectedPlan.id === plan.id
                  ? 'bg-[#0A1220] border-[#C9A96E] ring-1 ring-[#C9A96E] shadow-xl'
                  : 'bg-[#0A1220]/60 border-stone-800 text-stone-400 hover:text-white hover:border-stone-700'
              }`}
            >
              <div className="text-xs font-mono text-[#C9A96E] mb-1">{plan.duration}</div>
              <h3 className="text-base sm:text-lg font-serif-display font-bold text-white mb-2">
                {plan.title}
              </h3>
              <p className="text-xs text-stone-300 line-clamp-2">
                {plan.concept}
              </p>
            </button>
          ))}
        </div>

        {/* Selected Itinerary Plan Detail */}
        <div className="bg-[#0A1220] border border-[#C9A96E]/30 rounded-xl p-6 sm:p-8 mb-12 shadow-2xl">
          <div className="pb-6 mb-8 border-b border-stone-800">
            <span className="text-xs font-mono text-[#C9A96E] uppercase tracking-wider block mb-1">
              {selectedPlan.duration} DETAILED ROADMAP
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif-display font-bold text-white mb-2">
              {selectedPlan.title}
            </h2>
            <div className="p-3 bg-[#080A0F] rounded-lg border border-stone-800 text-xs text-stone-300 mt-3">
              <strong className="text-[#C9A96E]">추천 대상: </strong> {selectedPlan.recommendedFor}
            </div>
          </div>

          {/* Day by Day Cards */}
          <div className="space-y-8">
            {selectedPlan.dayPlans.map((day) => (
              <div key={day.dayNumber} className="bg-[#080A0F] border border-stone-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-stone-800/80">
                  <span className="px-3 py-1 bg-[#C9A96E] text-[#080A0F] font-mono font-bold text-xs rounded">
                    DAY {day.dayNumber}
                  </span>
                  <h3 className="text-lg font-serif-display font-bold text-white">
                    {day.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {day.schedule.map((item, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-start gap-4 text-xs sm:text-sm">
                      <div className="sm:w-24 shrink-0 font-mono text-[#C9A96E] font-semibold flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-stone-500" />
                        <span>{item.time}</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-white">{item.activity}</div>
                        <div className="flex items-center gap-1.5 text-xs text-stone-400 mt-0.5">
                          <MapPin className="w-3 h-3 text-[#C9A96E]" />
                          <span>{item.location}</span>
                        </div>
                        <p className="text-xs text-stone-300 mt-1 leading-relaxed bg-[#0A1220] p-2.5 rounded border border-stone-800/60">
                          {item.notes}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
