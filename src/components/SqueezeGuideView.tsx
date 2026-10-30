import React, { useState } from 'react';
import { cardPeekScenarios, squeezeEtiquetteRules, mathematicalTruth, CardPeekScenario } from '../data/squeezeData';
import { ActiveTab } from '../types';
import { Eye, ShieldAlert, BookOpen, Sparkles, AlertCircle, CheckCircle2, RotateCcw, ChevronRight } from 'lucide-react';

interface SqueezeGuideViewProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export const SqueezeGuideView: React.FC<SqueezeGuideViewProps> = ({ setActiveTab }) => {
  const [activeScenario, setActiveScenario] = useState<CardPeekScenario>(cardPeekScenarios[1]); // Default to 3-pin
  const [squeezeLevel, setSqueezeLevel] = useState<number>(35); // 0% (closed) to 100% (fully open)

  return (
    <div className="py-12 bg-[#080A0F] min-h-screen text-[#F5F1E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="mb-10 pb-6 border-b border-[#C9A96E]/20">
          <div className="flex items-center gap-2 text-xs text-[#C9A96E] font-mono uppercase tracking-wider mb-2">
            <span>BACCARAT TECHNICAL ESSAY</span>
            <span aria-hidden="true">·</span>
            <span>CARD SQUEEZE MECHANICS</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-serif-display font-bold text-[#F5F1E8] mb-3 leading-tight">
            바카라 카드 스퀴즈란? 필리핀과 베트남 카지노의 테이블 운영 방식 비교
          </h1>
          <p className="text-sm sm:text-base text-[#F5F1E8]/75 max-w-3xl leading-relaxed">
            한국인 바카라 이용객들이 흔히 <strong className="text-[#C9A96E] font-semibold">'카드를 깐다'</strong>고 표현하는 카드 스퀴즈(Card Squeeze). 딜러 오픈 테이블과의 차이, 착석 최고액 베팅자의 권한, 그리고 베트남 호이아나의 실제 규정까지 전문적으로 파헤칩니다.
          </p>
        </div>

        {/* Feature Hero Card with Baccarat Table Atmosphere */}
        <div className="relative rounded-xl overflow-hidden border border-[#C9A96E]/30 mb-12 bg-[#0A1220]">
          <div className="relative h-64 sm:h-80 w-full overflow-hidden">
            <img
              src="/src/assets/images/baccarat_table_squeeze_1793347391477.jpg"
              alt="바카라 라이브 테이블 카드 스퀴즈 현장"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1220] via-[#0A1220]/70 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs font-mono text-[#C9A96E] uppercase tracking-wider block mb-1">
                EXPERT DEEP DIVE
              </span>
              <h2 className="text-xl sm:text-2xl font-serif-display font-bold text-white mb-2">
                스퀴즈(Squeeze) 바카라와 딜러 오픈(Open)의 본질적 차이
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 max-w-2xl leading-relaxed">
                마카오와 필리핀에서 바카라의 꽃으로 여겨지는 스퀴즈. 손끝으로 카드 모서리를 서서히 쥐어짜며 핀(심볼) 개수를 확인하는 고도의 심리적 게임 메커니즘을 시각적으로 체험해 보세요.
              </p>
            </div>
          </div>
        </div>

        {/* 1. INTERACTIVE CARD SQUEEZE SIMULATOR (Visual Aid requested in prompt) */}
        <div className="bg-[#0A1220] border border-[#C9A96E]/40 rounded-xl p-6 sm:p-8 mb-12 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-6 border-b border-[#C9A96E]/20">
            <div>
              <span className="text-xs font-mono text-[#C9A96E] uppercase tracking-wider">
                INTERACTIVE VISUAL SIMULATOR
              </span>
              <h3 className="text-xl sm:text-2xl font-serif-display font-bold text-white mt-0.5">
                바카라 카드 까기(스퀴즈) 가상 체험기
              </h3>
            </div>
            <div className="text-xs text-stone-400">
              * 바카라 플레이어가 경험하는 핀(Pin)별 모서리 엿보기 구현
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Controls: Select Squeeze Pattern */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono text-[#C9A96E] block">스퀴즈 패턴 선택:</span>
              <div className="space-y-2">
                {cardPeekScenarios.map((sc) => (
                  <button
                    key={sc.id}
                    onClick={() => {
                      setActiveScenario(sc);
                      setSqueezeLevel(35);
                    }}
                    className={`w-full text-left p-3 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                      activeScenario.id === sc.id
                        ? 'bg-[#C9A96E]/20 border-[#C9A96E] text-white'
                        : 'bg-[#080A0F] border-stone-800 text-stone-300 hover:border-stone-700'
                    }`}
                  >
                    <div>
                      <div className="text-sm font-semibold text-white">{sc.name}</div>
                      <div className="text-xs text-[#C9A96E] font-mono mt-0.5">
                        은어: {sc.koreanSlang} · 가능 숫자: [{sc.possibleValues.join(', ')}]
                      </div>
                    </div>
                    {activeScenario.id === sc.id && (
                      <CheckCircle2 className="w-4 h-4 text-[#C9A96E] shrink-0" />
                    )}
                  </button>
                ))}
              </div>

              {/* Squeeze Slider Control */}
              <div className="pt-4 border-t border-stone-800">
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="text-stone-300 font-medium">손가락으로 들어올린 각도 (스퀴즈 정도):</span>
                  <span className="text-[#C9A96E] font-mono font-bold tabular-nums">{squeezeLevel}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={squeezeLevel}
                  onChange={(e) => setSqueezeLevel(Number(e.target.value))}
                  className="w-full accent-[#C9A96E] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-stone-500 font-mono mt-1">
                  <span>0% (밀착)</span>
                  <span>35% (모서리 확인)</span>
                  <span>70% (핀 개수 판별)</span>
                  <span>100% (완전 오픈)</span>
                </div>

                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => setSqueezeLevel(35)}
                    className="flex-1 py-1.5 px-3 bg-[#080A0F] border border-stone-700 hover:border-[#C9A96E] text-xs text-stone-300 rounded transition-colors"
                  >
                    모서리 살짝 까기 (35%)
                  </button>
                  <button
                    onClick={() => setSqueezeLevel(100)}
                    className="flex-1 py-1.5 px-3 bg-[#C9A96E] hover:bg-[#DFC89B] text-[#080A0F] text-xs font-semibold rounded transition-colors"
                  >
                    패 완전 오픈 (100%)
                  </button>
                </div>
              </div>
            </div>

            {/* Right Display: Visual Tactile Card Representation */}
            <div className="lg:col-span-7 flex flex-col items-center justify-center p-6 bg-[#080A0F] rounded-xl border border-stone-800">
              {/* Virtual Gaming Card Simulation */}
              <div className="relative w-64 h-88 sm:w-72 sm:h-96 bg-white rounded-lg shadow-2xl p-4 overflow-hidden border-2 border-stone-300 flex flex-col justify-between select-none">
                {/* Playing Card Back Cover (Squeezing effect via transform & mask) */}
                <div 
                  className="absolute inset-0 bg-red-900 bg-opacity-95 z-20 transition-all duration-150 rounded-lg flex items-center justify-center pointer-events-none"
                  style={{
                    transform: `translateY(-${squeezeLevel * 0.75}%) rotateX(${squeezeLevel * 0.4}deg)`,
                    transformOrigin: 'top center',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
                  }}
                >
                  <div className="w-56 h-80 border-2 border-[#C9A96E]/60 rounded-md flex flex-col items-center justify-center p-4 bg-gradient-to-br from-red-950 to-red-900 text-center">
                    <div className="text-[#C9A96E] font-serif-display font-bold text-lg tracking-widest">
                      CASINO HOIANA
                    </div>
                    <div className="text-[10px] text-[#C9A96E]/60 font-mono mt-1">
                      OFFICIAL GAMING SHOE
                    </div>
                  </div>
                </div>

                {/* Card Face Content (Revealed based on active scenario) */}
                <div className="relative z-10 w-full h-full flex flex-col justify-between text-black">
                  {/* Top Left pip */}
                  <div className="text-left font-serif font-bold text-2xl text-red-600 leading-none">
                    {activeScenario.possibleValues[0]}
                    <div className="text-lg">♥</div>
                  </div>

                  {/* Center Pattern Display */}
                  <div className="my-auto text-center px-4">
                    {activeScenario.id === 'picture' && (
                      <div className="border border-stone-400 p-3 bg-stone-50 rounded">
                        <div className="text-stone-800 font-serif font-bold text-xl tracking-wider mb-1">
                          👑 {activeScenario.possibleValues[0]} (그림/몽키)
                        </div>
                        <div className="text-xs text-stone-500 font-mono">가로 테두리 무늬 = 0점 처리</div>
                      </div>
                    )}

                    {activeScenario.id === 'two_sides' && (
                      <div className="space-y-4 py-2">
                        <div className="flex justify-between px-6 text-2xl text-red-600">
                          <span>♥</span>
                          <span>♥</span>
                        </div>
                        <div className="text-xs text-stone-500 font-mono">
                          {squeezeLevel > 60 ? '양쪽 2개 핀 확인 → 4 또는 5' : '모서리 2핀 탐색중'}
                        </div>
                        <div className="flex justify-between px-6 text-2xl text-red-600">
                          <span>♥</span>
                          <span>♥</span>
                        </div>
                      </div>
                    )}

                    {activeScenario.id === 'three_sides' && (
                      <div className="space-y-3 py-2">
                        <div className="flex justify-between px-5 text-2xl text-red-600">
                          <span>♥</span>
                          <span>♥</span>
                        </div>
                        <div className="flex justify-between px-5 text-2xl text-red-600">
                          <span>♥</span>
                          <span className="text-xs font-mono text-stone-500 self-center">3핀 (6·7·8)</span>
                          <span>♥</span>
                        </div>
                        <div className="flex justify-between px-5 text-2xl text-red-600">
                          <span>♥</span>
                          <span>♥</span>
                        </div>
                      </div>
                    )}

                    {activeScenario.id === 'four_sides' && (
                      <div className="space-y-2 py-1">
                        <div className="flex justify-between px-4 text-xl text-red-600">
                          <span>♥</span>
                          <span>♥</span>
                        </div>
                        <div className="flex justify-between px-4 text-xl text-red-600">
                          <span>♥</span>
                          <span className="text-xs font-mono text-stone-600 self-center">4핀 (9·10)</span>
                          <span>♥</span>
                        </div>
                        <div className="flex justify-between px-4 text-xl text-red-600">
                          <span>♥</span>
                          <span>♥</span>
                        </div>
                      </div>
                    )}

                    {activeScenario.id === 'one_side' && (
                      <div className="text-center py-4">
                        <div className="text-4xl text-red-600">♥</div>
                        <div className="text-xs text-stone-500 font-mono mt-2">
                          민자/원알 (에이스 또는 2·3)
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom Right pip (rotated) */}
                  <div className="text-right font-serif font-bold text-2xl text-red-600 leading-none rotate-180">
                    {activeScenario.possibleValues[0]}
                    <div className="text-lg">♥</div>
                  </div>
                </div>
              </div>

              {/* Scenario Explanation Deck */}
              <div className="mt-4 text-center max-w-md">
                <span className="text-xs text-[#C9A96E] font-mono block mb-1">
                  {activeScenario.koreanSlang} 해설
                </span>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {activeScenario.explanation}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. HOIANA DRAGON TIGER & BACCARAT OFFICIAL RULES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#0A1220] border border-[#C9A96E]/30 rounded-lg p-6">
            <div className="flex items-center gap-2 text-xs text-[#C9A96E] font-mono uppercase mb-2">
              <span>OFFICIAL HOUSE RULES</span>
              <span aria-hidden="true">·</span>
              <span>호이아나 공개 규정</span>
            </div>
            <h3 className="text-lg font-serif-display font-bold text-white mb-3">
              호이아나 카지노의 바카라 카드 스퀴즈 규정
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-stone-300 leading-relaxed">
              <p>
                호이아나의 공식 <strong className="text-white">Dragon Tiger & Baccarat Game Rules</strong>에 따르면, 해당 핸드에서 플레이어(Player) 또는 뱅커(Banker) 진영의 <strong className="text-[#C9A96E]">착석 최고액 베팅자(Highest Seated Bettor)</strong>가 카드를 전달받아 스퀴즈(확인)할 수 있는 권리를 부여받습니다.
              </p>
              <div className="p-3 bg-[#080A0F] border border-amber-500/20 rounded text-xs text-amber-300">
                <strong>플로어 매니저의 재량권:</strong> 규정집에는 테이블 진행 속도, 플레이어의 지연 행위 또는 카지노 운영 정책에 따라 플로어 수퍼바이저(Floor Supervisor)의 재량으로 카드 스퀴즈를 제한하고 즉시 딜러 오픈(Open)으로 전환할 수 있음이 명시되어 있습니다.
              </div>
              <p className="text-stone-400 text-xs">
                ※ 중요한 원칙: 호이아나의 일부 테이블에서 스퀴즈가 허용된다고 하여 <strong>베트남의 모든 카지노나 모든 테이블에서 스퀴즈가 가능하다고 일반화해서는 안 됩니다.</strong> 매스 플로어의 스피드 바카라 테이블은 전면 딜러 오픈으로 진행됩니다.
              </p>
            </div>
          </div>

          <div className="bg-[#0A1220] border border-stone-800 rounded-lg p-6">
            <div className="flex items-center gap-2 text-xs text-stone-400 font-mono uppercase mb-2">
              <span>PHILIPPINES VS VIETNAM</span>
              <span aria-hidden="true">·</span>
              <span>테이블 운영 비교</span>
            </div>
            <h3 className="text-lg font-serif-display font-bold text-white mb-3">
              필리핀과 베트남의 테이블 운영 문화 차이
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-stone-300 leading-relaxed">
              <p>
                <strong className="text-white">필리핀(마닐라·클락):</strong> 솔레어나 한 카지노의 미들 리밋 이상 테이블에서는 플레이어가 카드를 꺾고 구기는 형태의 격렬한 스퀴즈도 비교적 너그럽게 용인되며, 1회용 덱(Single-Use Decks)을 사용하는 테이블이 많습니다.
              </p>
              <p>
                <strong className="text-white">베트남(다낭):</strong> 정숙하고 절제된 외국인 전용 클럽 룰을 적용합니다. 카드를 스퀴즈하더라도 덱의 바코드를 심하게 손상시키거나 접어버리는 행위는 엄격히 제재될 수 있으며, 딜러와 매니저의 지시를 존중해야 합니다.
              </p>
              <p className="text-stone-400 text-xs">
                따라서 필리핀에서처럼 무리하게 카드를 구부리거나 테이블 밑으로 내리는 행위는 즉각적인 경고 사유가 됩니다.
              </p>
            </div>
          </div>
        </div>

        {/* 3. PHYSICAL HANDLING ETIQUETTE (카지노에서 지켜야 할 테이블 규칙) */}
        <div className="bg-[#0A1220] border border-stone-800 rounded-lg p-6 sm:p-8 mb-12">
          <h3 className="text-xl font-serif-display font-bold text-white mb-6 pb-2 border-b border-stone-800 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#C9A96E]" />
            <span>카드 스퀴즈 시 반드시 지켜야 하는 테이블 매너와 물리적 규칙</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {squeezeEtiquetteRules.map((rule, idx) => (
              <div key={idx} className="bg-[#080A0F] border border-stone-800/80 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-[#C9A96E]">0{idx + 1}.</span>
                  <h4 className="text-sm font-semibold text-white">{rule.title}</h4>
                </div>
                <div className="text-xs text-[#C9A96E]/80 mb-2 font-mono">{rule.subtitle}</div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {rule.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. MATHEMATICAL TRUTH (승률에 영향이 없음을 명확히 고지) */}
        <div className="bg-[#0A1220] border border-red-900/40 rounded-lg p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <ShieldAlert className="w-6 h-6 text-red-400 shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-serif-display font-bold text-white mb-2">
                {mathematicalTruth.title}
              </h3>
              <p className="text-sm text-stone-200 mb-4 font-medium">
                {mathematicalTruth.summary}
              </p>
              <ul className="space-y-2 text-xs text-stone-400">
                {mathematicalTruth.details.map((d, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">·</span>
                    <span>{d}</span>
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
