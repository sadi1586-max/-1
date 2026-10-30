import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Building, Compass, Sparkles, ExternalLink } from 'lucide-react';

interface MapPoint {
  id: string;
  name: string;
  koreanName: string;
  category: 'casino' | 'airport' | 'golf' | 'town' | 'attraction';
  latPct: number; // percentage from top
  lngPct: number; // percentage from left
  fromAirportTime: string;
  distanceKm: string;
  description: string;
  highlight: string;
}

export const LocationMapView: React.FC = () => {
  const mapPoints: MapPoint[] = [
    {
      id: 'dad-airport',
      name: 'Da Nang International Airport (DAD)',
      koreanName: '다낭 국제공항 (국제선 T2)',
      category: 'airport',
      latPct: 25,
      lngPct: 35,
      fromAirportTime: '0분 (출발점)',
      distanceKm: '0 km',
      description: '마닐라 직항(세부퍼시픽 5J 5756) 및 인천/김해 등 다국적 항공편이 도착하는 현대적인 국제공항입니다.',
      highlight: '마닐라 비행 약 2시간 40분 소요'
    },
    {
      id: 'ktown-anthuong',
      name: 'An Thuong & My Khe Beach',
      koreanName: '안트엉 한인타운 & 미케비치',
      category: 'town',
      latPct: 32,
      lngPct: 52,
      fromAirportTime: '약 12~15분',
      distanceKm: '6 km',
      description: '한국 식당, K-마켓, 카페, 프리미엄 마사지 샵이 집중된 다낭 대표 한인 생활 및 관광 중심권.',
      highlight: '도보로 미케비치 모래사장 직결'
    },
    {
      id: 'crown-casino',
      name: 'Crown International Club',
      koreanName: '크라운 인터내셔널 클럽 (크라운플라자)',
      category: 'casino',
      latPct: 40,
      lngPct: 55,
      fromAirportTime: '약 15분',
      distanceKm: '8 km',
      description: '미케비치 남단 박미안 해변에 위치한 해변 카지노. 시내 한인타운과 차량 5분 거리의 뛰어난 접근성.',
      highlight: '공항 15분 / 안트엉 한인타운 5분'
    },
    {
      id: 'brg-golf',
      name: 'BRG Da Nang Golf Resort',
      koreanName: 'BRG 다낭 골프 리조트 (36홀)',
      category: 'golf',
      latPct: 52,
      lngPct: 62,
      fromAirportTime: '약 25분',
      distanceKm: '15 km',
      description: '그렉 노먼 듄스 18홀과 잭 니클라우스 벌크헤드 18홀이 결합된 36홀 명문 코스.',
      highlight: '크라운 카지노에서 차량 8분'
    },
    {
      id: 'montgomerie',
      name: 'Montgomerie Links',
      koreanName: '몽고메리 링크스 골프 클럽',
      category: 'golf',
      latPct: 56,
      lngPct: 64,
      fromAirportTime: '약 27분',
      distanceKm: '16 km',
      description: '콜린 몽고메리가 설계한 정통 유럽풍 링크스 코스. 뛰어난 페어웨이 잔디 관리도.',
      highlight: 'BRG 바로 옆 인접'
    },
    {
      id: 'hoiana-casino',
      name: 'Hoiana Resort & Golf (Casino & Shores)',
      koreanName: '호이아나 리조트 & 골프 (카지노 & 골프)',
      category: 'casino',
      latPct: 75,
      lngPct: 78,
      fromAirportTime: '약 45~50분',
      distanceKm: '45 km',
      description: '140+ 테이블, 300+ 슬롯의 베트남 중부 최대 외국인 전용 복합리조트(IR) 및 로버트 트렌트 존스 Jr 링크스 코스.',
      highlight: '단지 내 4개 특급호텔 + 골프장 + 4km 해변'
    },
    {
      id: 'hoian-town',
      name: 'Hoi An Ancient Town',
      koreanName: '호이안 고도시 (유네스코 세계문화유산)',
      category: 'attraction',
      latPct: 72,
      lngPct: 65,
      fromAirportTime: '약 45분',
      distanceKm: '30 km',
      description: '16~17세기 동서양 무역항의 원형이 보존된 황금빛 등불의 옛 도시. 야경과 감성 미식의 보고.',
      highlight: '호이아나 리조트에서 차량 15분'
    },
    {
      id: 'bana-hills',
      name: 'Ba Na Hills & Golf Club',
      koreanName: '바나힐 & 루크 도널드 골프 클럽',
      category: 'attraction',
      latPct: 35,
      lngPct: 15,
      fromAirportTime: '약 40분',
      distanceKm: '28 km',
      description: '해발 1,487m의 선선한 테마파크와 골든 브릿지, 전 홀 야간 라이트 조명을 갖춘 마운틴 골프장.',
      highlight: '야간 18홀 라운딩 가능'
    }
  ];

  const [activePoint, setActivePoint] = useState<MapPoint>(mapPoints[5]); // Default to Hoiana

  return (
    <section className="py-16 bg-[#080A0F] border-b border-[#C9A96E]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-[#C9A96E] font-mono uppercase tracking-wider mb-2">
            <span>REGIONAL GEOGRAPHY & TRANSIT</span>
            <span aria-hidden="true">·</span>
            <span>COASTAL CORRIDOR MAP</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif-display font-bold text-[#F5F1E8]">
            다낭-호이안 카지노 & 레저 입체 지리 지도
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-2xl">
            다낭 공항(DAD)을 기점으로 북쪽 도심 해변의 <strong className="text-white">크라운 카지노</strong>와 남쪽 해안 45km 지점의 <strong className="text-white">호이아나 복합리조트</strong>의 입지적 특성을 한눈에 확인하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Visual Interactive Coastal Map Board */}
          <div className="lg:col-span-8 bg-[#0A1220] border border-[#C9A96E]/30 rounded-xl p-6 shadow-2xl relative overflow-hidden min-h-[460px] flex flex-col justify-between">
            {/* Background Map Stylized Water & Land Contour */}
            <div className="absolute inset-0 opacity-15 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 1000 700" preserveAspectRatio="none">
                <path d="M0,0 L400,0 C450,200 550,400 750,700 L0,700 Z" fill="#C9A96E" />
                <path d="M550,0 Q650,300 900,700" stroke="#C9A96E" strokeWidth="2" fill="none" strokeDasharray="6 6" />
              </svg>
            </div>

            <div className="relative z-10 flex items-center justify-between text-xs text-stone-400 font-mono pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5 text-[#C9A96E]">
                <Navigation className="w-3.5 h-3.5" />
                다낭-호이안 해안도로 축선 (약 45km)
              </span>
              <span>동해 (East Sea / South China Sea)</span>
            </div>

            {/* Interactive Pins on Map */}
            <div className="relative z-10 w-full h-96 my-4 select-none">
              {mapPoints.map((pt) => {
                const isSelected = activePoint.id === pt.id;
                const isCasino = pt.category === 'casino';

                return (
                  <button
                    key={pt.id}
                    onClick={() => setActivePoint(pt)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer focus:outline-none transition-transform hover:scale-110"
                    style={{ top: `${pt.latPct}%`, left: `${pt.lngPct}%` }}
                  >
                    <div className="flex flex-col items-center">
                      <div className={`p-1.5 rounded-full border shadow-lg transition-all ${
                        isSelected
                          ? 'bg-[#C9A96E] text-[#080A0F] border-white scale-125 ring-4 ring-[#C9A96E]/30'
                          : isCasino
                            ? 'bg-red-900 text-white border-[#C9A96E]'
                            : 'bg-[#0A1220] text-[#C9A96E] border-stone-700 hover:border-[#C9A96E]'
                      }`}>
                        <MapPin className="w-4 h-4" />
                      </div>
                      <span className={`text-[11px] whitespace-nowrap px-1.5 py-0.5 rounded mt-1 font-mono transition-colors ${
                        isSelected 
                          ? 'bg-[#C9A96E] text-[#080A0F] font-bold' 
                          : 'bg-[#080A0F]/90 text-stone-300 border border-stone-800'
                      }`}>
                        {pt.koreanName.split(' ')[0]}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Map Legend */}
            <div className="relative z-10 flex flex-wrap items-center gap-4 text-xs font-mono pt-3 border-t border-stone-800 text-stone-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-800 border border-[#C9A96E]" />
                <span>카지노 복합시설</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0A1220] border border-[#C9A96E]" />
                <span>골프장 / 관광지</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C9A96E]" />
                <span>선택된 위치</span>
              </div>
            </div>
          </div>

          {/* Right Selected Point Spotlight Card */}
          <div className="lg:col-span-4 bg-[#0A1220] border border-[#C9A96E]/30 rounded-xl p-6 shadow-xl space-y-5">
            <div className="flex items-center justify-between text-xs text-[#C9A96E] font-mono pb-2 border-b border-stone-800">
              <span>LOCATION DOSSIER</span>
              <span className="uppercase">{activePoint.category}</span>
            </div>

            <div>
              <h3 className="text-xl font-serif-display font-bold text-white">
                {activePoint.koreanName}
              </h3>
              <div className="text-xs text-stone-400 font-mono mt-0.5">
                {activePoint.name}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs bg-[#080A0F] p-3 rounded-lg border border-stone-800">
              <div>
                <span className="text-stone-400 block font-mono text-[11px]">다낭 공항 이동시간</span>
                <span className="text-[#C9A96E] font-bold text-sm">{activePoint.fromAirportTime}</span>
              </div>
              <div>
                <span className="text-stone-400 block font-mono text-[11px]">공항 기준 거리</span>
                <span className="text-white font-bold text-sm tabular-nums">{activePoint.distanceKm}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              {activePoint.description}
            </p>

            <div className="p-3 bg-[#080A0F] rounded border border-[#C9A96E]/20 text-xs">
              <span className="text-[#C9A96E] font-mono block mb-1">핵심 하이라이트:</span>
              <span className="text-white font-medium">{activePoint.highlight}</span>
            </div>

            {/* Quick action buttons based on point */}
            {activePoint.category === 'casino' && (
              <div className="pt-2 text-xs text-stone-400">
                ※ 상단 메뉴의 "카지노 비교" 탭에서 상세 테이블 스펙과 룰북을 확인할 수 있습니다.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
