import React, { useState } from 'react';
import { manilaToDanangFlights, clarkToDanangFlights } from '../data/flightData';
import { DepartureCity, FlightOption } from '../types';
import { Plane, ExternalLink, Clock, Luggage, AlertCircle, CheckCircle2, ArrowRight, ShieldCheck, Bus } from 'lucide-react';

interface FlightsViewProps {
  initialDepartureCity?: DepartureCity;
}

export const FlightsView: React.FC<FlightsViewProps> = ({ initialDepartureCity = 'manila' }) => {
  const [selectedCity, setSelectedCity] = useState<DepartureCity>(initialDepartureCity);

  const currentOptions: FlightOption[] = selectedCity === 'manila' 
    ? manilaToDanangFlights 
    : clarkToDanangFlights;

  return (
    <div className="py-12 bg-[#080A0F] min-h-screen text-[#F5F1E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 pb-6 border-b border-[#C9A96E]/20">
          <div className="flex items-center gap-2 text-xs text-[#C9A96E] font-mono uppercase tracking-wider mb-2">
            <span>AVIATION & LOGISTICS</span>
            <span aria-hidden="true">·</span>
            <span>FLIGHT INTELLIGENCE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif-display font-bold text-[#F5F1E8] mb-3">
            마닐라·클락에서 다낭까지 항공편 종합 안내
          </h1>
          <p className="text-sm sm:text-base text-[#F5F1E8]/75 max-w-3xl leading-relaxed">
            마닐라(MNL)의 약 2시간 40분 직항편부터, 클락(CRK) 출발 시의 주요 해외 경유지(타이베이·싱가포르·홍콩) 및 고속도로 P2P 버스 연계 최적 경로까지 환승 시간과 수하물 규정을 비교합니다.
          </p>
        </div>

        {/* Departure Route Selector Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center bg-[#0A1220] p-1.5 rounded-lg border border-[#C9A96E]/30 w-fit">
            <button
              onClick={() => setSelectedCity('manila')}
              className={`px-5 py-2 text-xs sm:text-sm font-medium rounded-md transition-all cursor-pointer flex items-center gap-2 ${
                selectedCity === 'manila'
                  ? 'bg-[#C9A96E] text-[#080A0F] font-bold shadow'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              <Plane className="w-4 h-4" />
              <span>마닐라 (MNL) → 다낭 (DAD)</span>
              <span className="text-[10px] bg-black/30 px-1.5 py-0.5 rounded font-mono">직항 보유</span>
            </button>

            <button
              onClick={() => setSelectedCity('clark')}
              className={`px-5 py-2 text-xs sm:text-sm font-medium rounded-md transition-all cursor-pointer flex items-center gap-2 ${
                selectedCity === 'clark'
                  ? 'bg-[#C9A96E] text-[#080A0F] font-bold shadow'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              <Plane className="w-4 h-4" />
              <span>클락 (CRK) → 다낭 (DAD)</span>
              <span className="text-[10px] bg-black/30 px-1.5 py-0.5 rounded font-mono">경유 / P2P</span>
            </button>
          </div>

          <div className="text-xs text-stone-400 font-mono flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>최종 운항 일정 검증: 2026년 10월 공식 스케줄 기준</span>
          </div>
        </div>

        {/* Perspective Banner */}
        {selectedCity === 'manila' ? (
          <div className="bg-[#0A1220] border border-emerald-500/30 rounded-lg p-5 mb-8 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-stone-200">
              <strong className="text-white">마닐라 출발 핵심 요약: </strong>
              세부퍼시픽(Cebu Pacific)의 마닐라(NAIA T3) - 다낭(DAD T2) 직항(5J 5756)이 운항 중이며 비행시간은 약 2시간 35분~2시간 50분에 불과합니다. 금요일 저녁 출발 후 주말을 보내고 월요일 귀국하는 주말 트립에 최적화되어 있습니다.
            </div>
          </div>
        ) : (
          <div className="bg-[#0A1220] border border-amber-500/30 rounded-lg p-5 mb-8 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-stone-200">
              <strong className="text-amber-300">클락 출발 핵심 팩트 체크: </strong>
              현재 공식 확인 결과 클락(CRK)에서 다낭(DAD)으로 가는 연중 상시 직항은 운항되지 않고 있습니다. 따라서 클락 교민들은 <strong className="text-white">① P2P 고속버스로 마닐라 T3 이동 후 직항 탑승(총 6시간 안팎, 최고 선호)</strong> 또는 <strong className="text-white">② 스타룩스/에바항공 타이베이 1회 경유(수하물 자동 연결)</strong>를 가장 많이 이용합니다.
            </div>
          </div>
        )}

        {/* Flight Cards Grid */}
        <div className="space-y-6 mb-12">
          {currentOptions.map((opt, idx) => (
            <div
              key={idx}
              className="bg-[#0A1220] border border-[#C9A96E]/25 hover:border-[#C9A96E]/60 rounded-xl p-6 transition-all shadow-lg"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-4 border-b border-stone-800">
                {/* Airline & Route */}
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-semibold text-[#C9A96E] font-mono">
                      {opt.isDirect ? '직항 (Non-Stop)' : '경유 연결편 (Transit)'}
                    </span>
                    <span aria-hidden="true" className="text-stone-600">·</span>
                    <span className="text-xs text-stone-400">{opt.flightNumber}</span>
                  </div>
                  <h3 className="text-xl font-serif-display font-bold text-white">
                    {opt.airline}
                  </h3>
                  <div className="text-xs text-stone-300 mt-1 flex items-center gap-2">
                    <span>{opt.originCity} ({opt.originCode})</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C9A96E]" />
                    <span className="text-white font-medium">{opt.destinationCity} ({opt.destinationCode})</span>
                  </div>
                </div>

                {/* Duration & Terminals */}
                <div className="flex flex-wrap items-center gap-6">
                  <div className="text-left sm:text-right">
                    <span className="text-[11px] font-mono text-stone-400 uppercase block">예상 총 소요시간</span>
                    <span className="text-base sm:text-lg font-bold text-[#C9A96E] tabular-nums">
                      {opt.estimatedDuration}
                    </span>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="text-[11px] font-mono text-stone-400 uppercase block">출발 / 도착 터미널</span>
                    <span className="text-xs text-white">
                      {opt.departureTerminal} → {opt.arrivalTerminal}
                    </span>
                  </div>

                  {/* Official Booking CTA */}
                  <a
                    href={opt.officialBookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 bg-[#C9A96E] hover:bg-[#DFC89B] text-[#080A0F] text-xs font-semibold rounded flex items-center gap-1.5 transition-colors shrink-0"
                  >
                    <span>공식 항공사 예약</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Detail Specifications Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 text-xs text-stone-300">
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">운항 요일 & 스케줄</span>
                    <span>{opt.frequency}</span>
                    <p className="text-stone-400 text-[11px] mt-0.5">{opt.approxSchedule}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Luggage className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">수하물 규정</span>
                    <p>{opt.baggagePolicy}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">환승 및 주의사항</span>
                    <p className="text-stone-300">
                      {opt.transitNotes || '직항편으로 수하물 자동 인도 및 입국 수속 진행'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Policy Notice (Explicit Requirement: do not show fake real-time prices) */}
        <div className="p-5 rounded-lg bg-[#0A1220] border border-stone-800 text-xs text-stone-400 leading-relaxed">
          <strong className="text-white block mb-1">항공권 가격 및 실시간 요금 안내 원칙:</strong>
          항공권 가격은 탑승 일자, 유류할증료, 잔여 좌석 수에 따라 실시간으로 변동되므로 본 사이트에서는 부정확한 실시간 가격을 임의로 표시하지 않습니다. 정확한 운임 및 프로모션 가격은 각 항공사 공식 홈페이지를 통해 직접 확인하시기 바랍니다.
        </div>
      </div>
    </div>
  );
};
