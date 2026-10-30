import React, { useState } from 'react';
import { danangGolfCourses } from '../data/golfData';
import { GolfCourseInfo } from '../types';
import { Flag, Compass, ExternalLink, Moon, Sun, CheckCircle2, MapPin, Sparkles } from 'lucide-react';

export const GolfView: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<GolfCourseInfo>(danangGolfCourses[0]);

  return (
    <div className="py-12 bg-[#080A0F] min-h-screen text-[#F5F1E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 pb-6 border-b border-[#C9A96E]/20">
          <div className="flex items-center gap-2 text-xs text-[#C9A96E] font-mono uppercase tracking-wider mb-2">
            <span>CHAMPIONSHIP GOLF COMPARISON</span>
            <span aria-hidden="true">·</span>
            <span>CENTRAL VIETNAM LINKS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif-display font-bold text-[#F5F1E8] mb-3">
            다낭 주요 챔피언십 골프장 4곳 비교
          </h1>
          <p className="text-sm sm:text-base text-[#F5F1E8]/75 max-w-3xl leading-relaxed">
            필리핀 클락의 미모사·썬밸리·FA코리아에 익숙한 골퍼들에게 다낭의 정통 바다 듄스 링크스(호이아나 쇼어스)와 그렉 노먼·잭 니클라우스 36홀(BRG), 루크 도널드의 야간 산악 코스(바나힐)를 객관적으로 비교해 드립니다.
          </p>
        </div>

        {/* Feature Hero Image */}
        <div className="relative rounded-xl overflow-hidden border border-[#C9A96E]/30 mb-10 bg-[#0A1220]">
          <div className="relative h-64 sm:h-80 w-full overflow-hidden">
            <img
              src="/src/assets/images/danang_golf_links_1793347393431.jpg"
              alt="다낭 해안 챔피언십 링크스 골프 코스"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1220] via-[#0A1220]/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs font-mono text-[#C9A96E] uppercase tracking-wider block mb-1">
                GOLF & CASINO DUAL EXPERIENCE
              </span>
              <h2 className="text-xl sm:text-2xl font-serif-display font-bold text-white mb-2">
                필리핀 클락 대비 최고 수준의 페어웨이 잔디 관리도
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 max-w-2xl leading-relaxed">
                바다를 끼고 도는 천연 모래언덕(Dunes)의 경이로운 레이아웃과 한국인 골퍼 친화적인 캐디 시스템, 5성급 클럽하우스 시설이 결합된 아시아 최고의 골프 데스티네이션입니다.
              </p>
            </div>
          </div>
        </div>

        {/* Course Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {danangGolfCourses.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCourse(c)}
              className={`p-4 rounded-lg border text-left transition-all cursor-pointer ${
                selectedCourse.id === c.id
                  ? 'bg-[#0A1220] border-[#C9A96E] shadow-xl ring-1 ring-[#C9A96E]'
                  : 'bg-[#0A1220]/60 border-stone-800 text-stone-400 hover:text-white hover:border-stone-700'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono text-[#C9A96E] mb-1">
                <span>{c.holes}홀 / 파{c.par}</span>
                {c.nightGolf ? (
                  <span className="flex items-center gap-1 text-emerald-400">
                    <Moon className="w-3 h-3" />
                    야간 라이트
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-stone-500">
                    <Sun className="w-3 h-3" />
                    주간 코스
                  </span>
                )}
              </div>
              <div className="text-base font-serif-display font-bold text-white truncate">
                {c.koreanName.split(' ')[0]}
              </div>
              <div className="text-xs text-stone-400 truncate mt-0.5">
                설계: {c.designer.split('(')[0]}
              </div>
            </button>
          ))}
        </div>

        {/* Selected Course Deep Dive Detail */}
        <div className="bg-[#0A1220] border border-[#C9A96E]/30 rounded-xl p-6 sm:p-8 mb-12 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-6 border-b border-stone-800">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#C9A96E] font-mono mb-1">
                <span>CHAMPIONSHIP PROFILE</span>
                <span aria-hidden="true">·</span>
                <span>설계자: {selectedCourse.designer}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif-display font-bold text-white">
                {selectedCourse.koreanName}
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 font-mono mt-1">
                {selectedCourse.name} · {selectedCourse.holes}홀 챔피언십 (파 {selectedCourse.par})
              </p>
            </div>

            <a
              href={selectedCourse.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 bg-[#C9A96E] hover:bg-[#DFC89B] text-[#080A0F] text-xs font-semibold rounded flex items-center gap-1.5 transition-colors self-start lg:self-center shrink-0"
            >
              <span>골프장 공식 예약 정보</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 2 Cols: Course Style & Clark Comparison */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-[#080A0F] p-5 rounded-lg border border-stone-800">
                <span className="text-xs font-mono text-[#C9A96E] block mb-2">코스 스타일 & 특징:</span>
                <p className="text-sm text-stone-200 leading-relaxed">
                  {selectedCourse.courseStyle}
                </p>
              </div>

              {/* Clark Golf Comparison Box */}
              <div className="bg-[#080A0F] p-5 rounded-lg border border-[#C9A96E]/20">
                <span className="text-xs font-mono text-[#C9A96E] block mb-2 flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-[#C9A96E]" />
                  필리핀 클락 골프장(미모사·FA코리아·썬밸리)과의 비교 분석:
                </span>
                <p className="text-sm text-stone-300 leading-relaxed">
                  {selectedCourse.phComparisonNote}
                </p>
              </div>

              <div>
                <span className="text-xs font-mono text-[#C9A96E] block mb-2">클럽하우스 & 부대시설:</span>
                <div className="flex flex-wrap gap-2">
                  {selectedCourse.facilities.map((fac, idx) => (
                    <span key={idx} className="text-xs bg-[#080A0F] border border-stone-800 text-stone-300 px-3 py-1.5 rounded">
                      {fac}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 1 Col: Accessibility & Distance */}
            <div className="bg-[#080A0F] p-5 rounded-lg border border-stone-800 space-y-4">
              <h3 className="text-sm font-serif-display font-semibold text-white flex items-center gap-2 pb-2 border-b border-stone-800">
                <MapPin className="w-4 h-4 text-[#C9A96E]" />
                <span>카지노 및 시내 접근성</span>
              </h3>

              <div className="space-y-3 text-xs text-stone-300">
                <div>
                  <span className="text-stone-400 block">호이아나 카지노 기준:</span>
                  <span className="text-[#C9A96E] font-medium">{selectedCourse.distanceFromHoiana}</span>
                </div>
                <div>
                  <span className="text-stone-400 block">크라운 카지노 기준:</span>
                  <span className="text-[#C9A96E] font-medium">{selectedCourse.distanceFromCrown}</span>
                </div>
                <div>
                  <span className="text-stone-400 block">다낭 한강 시내 기준:</span>
                  <span className="text-white font-medium">{selectedCourse.distanceFromCity}</span>
                </div>
                <div>
                  <span className="text-stone-400 block">야간 라운딩:</span>
                  <span className={selectedCourse.nightGolf ? 'text-emerald-400 font-semibold' : 'text-stone-400'}>
                    {selectedCourse.nightGolf ? '전 홀 야간 조명 가동' : '주간 라운딩만 가능'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
