import React, { useState } from 'react';
import { ActiveTab } from '../types';
import { ShieldCheck, PhoneCall, Scale, AlertTriangle, Layers, BookOpen } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenAuditModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenAuditModal }) => {
  const [legalModalOpen, setLegalModalOpen] = useState<'terms' | 'privacy' | null>(null);

  return (
    <footer className="bg-[#05080E] border-t border-[#C9A96E]/20 text-[#F5F1E8] pt-14 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 3-Column Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-stone-800">
          {/* Brand & Editorial Mission */}
          <div className="md:col-span-2 space-y-3">
            <span className="font-serif-display text-lg sm:text-xl font-bold tracking-wider text-[#F5F1E8]">
              MANILA & CLARK <span className="text-[#C9A96E]">TO DANANG</span>
            </span>
            <p className="text-xs text-stone-400 leading-relaxed max-w-md">
              필리핀 마닐라(솔레어·오카다) 및 클락(한·디하이츠) 카지노 경험자를 위해 베트남 다낭의 게이밍 시설, 바카라 카드 스퀴즈 규정, 항공 접근성 및 한국인 생활 인프라를 객관적 팩트에 기반해 비교하는 독립 전문 미디어입니다.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-[#C9A96E] font-mono">
              <button onClick={onOpenAuditModal} className="hover:underline flex items-center gap-1 cursor-pointer">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>데이터 검증 이력 (2026.10)</span>
              </button>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-[#C9A96E] uppercase tracking-wider mb-2">
              주요 콘텐츠 바로가기
            </div>
            <ul className="space-y-1.5 text-xs text-stone-300">
              <li>
                <button onClick={() => { setActiveTab('compare'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-[#C9A96E] transition-colors">
                  호이아나 vs 크라운 카지노 비교
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('squeeze'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-[#C9A96E] transition-colors">
                  바카라 카드 스퀴즈(까기) 가이드
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('flights'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-[#C9A96E] transition-colors">
                  마닐라·클락 출발 항공편 비교
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('environment'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-[#C9A96E] transition-colors">
                  10대 카지노 환경 심층 비교
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('golf'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-[#C9A96E] transition-colors">
                  다낭 챔피언십 골프장 4곳
                </button>
              </li>
            </ul>
          </div>

          {/* Life & Legal Links */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-[#C9A96E] uppercase tracking-wider mb-2">
              라이프 & 정책 안내
            </div>
            <ul className="space-y-1.5 text-xs text-stone-300">
              <li>
                <button onClick={() => { setActiveTab('nightlife'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-[#C9A96E] transition-colors">
                  다낭 건전 야간 관광 & 안전
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('korean'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-[#C9A96E] transition-colors">
                  한인 인프라 & 의료 디렉터리
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('itinerary'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-[#C9A96E] transition-colors">
                  추천 2N3D / 3N4D 일정
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('faq'); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-[#C9A96E] transition-colors">
                  자주 묻는 질문 (FAQ)
                </button>
              </li>
              <li>
                <button onClick={() => setLegalModalOpen('terms')} className="hover:text-[#C9A96E] transition-colors">
                  이용약관 및 면책조항
                </button>
              </li>
              <li>
                <button onClick={() => setLegalModalOpen('privacy')} className="hover:text-[#C9A96E] transition-colors">
                  개인정보처리방침
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Responsible Gaming & Non-Commercial Compliance Strip */}
        <div className="py-6 border-b border-stone-800 text-[11px] sm:text-xs text-stone-400 leading-relaxed space-y-2">
          <div className="flex items-start gap-2">
            <Scale className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
            <div>
              <strong className="text-stone-200">비상업적 독립 리서치 미디어 선언: </strong>
              본 웹사이트는 베트남 및 필리핀의 관광·레저 인프라를 비교하는 순수 정보 플랫폼으로, 카지노 이용을 권유하거나 수익을 보장하지 않으며 고객 유치, 정킷 롤링 수수료 지급, 에이전트 알선 등의 영리 행위를 일체 하지 않습니다.
            </div>
          </div>
          <div className="flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-stone-200">대한민국 법률 유의사항: </strong>
              대한민국 형법은 속인주의를 원칙으로 하여 해외 체류 중 발생한 불법 도박 행위에 대해서도 국내법이 적용될 수 있습니다. 과도한 도박은 법적 처벌과 심각한 가정 파탄의 원인이 됩니다. (도박문제 전문 상담 전화: 국번없이 1336)
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <div>
            © 2026 MANILA & CLARK TO DANANG. All Rights Reserved. Independent Casino Travel Editorial.
          </div>
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span>최신 업데이트: 2026.10</span>
            <span>다낭·마닐라·클락 리서치팀</span>
          </div>
        </div>
      </div>

      {/* Legal & Privacy Dialog Modal */}
      {legalModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl bg-[#0A1220] border border-[#C9A96E]/40 rounded-xl p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
            <h3 className="text-xl font-serif-display font-bold text-white mb-4">
              {legalModalOpen === 'terms' ? '이용약관 및 법적 면책고지' : '개인정보처리방침'}
            </h3>
            <div className="text-xs text-stone-300 space-y-3 leading-relaxed">
              {legalModalOpen === 'terms' ? (
                <>
                  <p>1. 본 사이트는 성인 여행자를 위한 순수 정보 제공을 목적으로 운영되며, 게이밍 테이블 이용 권유나 영리 목적의 정킷 모객을 하지 않습니다.</p>
                  <p>2. 게재된 카지노 규정 및 시설 정보는 공개된 공식 출처와 현장 리서치를 바탕으로 작성되었으나, 운영사의 사정에 따라 수시로 변동될 수 있습니다. 이용 전 반드시 현장 관계자에게 최신 규정을 확인하시기 바랍니다.</p>
                  <p>3. 이용자의 게임 참여로 인해 발생하는 어떠한 금전적·법적 손실에 대해서도 본 사이트는 법적 책임을 지지 않습니다.</p>
                </>
              ) : (
                <>
                  <p>1. 본 사이트는 별도의 회원가입을 요구하지 않으며, 이용자의 민감한 개인 식별 정보나 금융 정보를 일체 수집하거나 저장하지 않습니다.</p>
                  <p>2. 브라우저 로컬 저장소를 통해 출발지 선택 설정 및 검증 로그 수정 내역만을 임시 보관하며, 제3자에게 어떠한 정보도 제공하지 않습니다.</p>
                </>
              )}
            </div>
            <div className="mt-6 pt-4 border-t border-stone-800 text-right">
              <button
                onClick={() => setLegalModalOpen(null)}
                className="px-4 py-2 bg-[#C9A96E] text-[#080A0F] font-semibold text-xs rounded"
              >
                확인 및 닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
