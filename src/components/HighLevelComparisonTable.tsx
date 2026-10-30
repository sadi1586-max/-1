import React from 'react';
import { ActiveTab, DepartureCity } from '../types';
import { ArrowRight, CheckCircle2, AlertCircle, Info } from 'lucide-react';

interface HighLevelComparisonTableProps {
  departureCity: DepartureCity;
  setActiveTab: (tab: ActiveTab) => void;
}

export const HighLevelComparisonTable: React.FC<HighLevelComparisonTableProps> = ({
  departureCity,
  setActiveTab,
}) => {
  return (
    <section className="py-16 bg-[#080A0F] border-b border-[#C9A96E]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-stone-800 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#C9A96E] font-mono uppercase tracking-wider mb-2">
              <span>COMPARATIVE MATRIX</span>
              <span aria-hidden="true">·</span>
              <span>EXECUTIVE SUMMARY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif-display font-bold text-[#F5F1E8]">
              필리핀(마닐라·클락) vs 베트남 다낭 핵심 비교표
            </h2>
            <p className="text-sm text-[#F5F1E8]/70 mt-1 max-w-2xl">
              어느 한 도시의 우열을 가리기보다, 게이머의 여행 목적과 플레이 스타일에 따른 구조적 차이를 객관적으로 대조합니다.
            </p>
          </div>

          <button
            onClick={() => {
              setActiveTab('environment');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-semibold text-[#C9A96E] hover:text-[#DFC89B] flex items-center gap-1.5 transition-colors cursor-pointer self-start md:self-end"
          >
            <span>10대 환경 심층 비교 전문 보기</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Comparison Table Container */}
        <div className="overflow-x-auto rounded-lg border border-[#C9A96E]/25 bg-[#0A1220] shadow-xl">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-[#C9A96E]/20 bg-[#060B14]">
                <th className="py-4 px-4 sm:px-6 font-serif-display font-semibold text-[#C9A96E] w-1/4">비교 항목</th>
                <th className={`py-4 px-4 sm:px-6 font-serif-display font-semibold text-[#F5F1E8] w-1/4 ${departureCity === 'manila' ? 'bg-[#C9A96E]/10 border-l border-r border-[#C9A96E]/30' : ''}`}>
                  마닐라 (엔터테인먼트 시티)
                </th>
                <th className={`py-4 px-4 sm:px-6 font-serif-display font-semibold text-[#F5F1E8] w-1/4 ${departureCity === 'clark' ? 'bg-[#C9A96E]/10 border-l border-r border-[#C9A96E]/30' : ''}`}>
                  클락 (자유항 경제특구)
                </th>
                <th className="py-4 px-4 sm:px-6 font-serif-display font-semibold text-[#C9A96E] w-1/4 bg-[#C9A96E]/15 border-l border-[#C9A96E]/40">
                  베트남 다낭 (호이아나·크라운)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800 text-[#F5F1E8]/85">
              {/* Row 1 */}
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="py-3.5 px-4 sm:px-6 font-medium text-white">
                  카지노 시설 규모 & 형태
                </td>
                <td className="py-3.5 px-4 sm:px-6 text-stone-300">
                  초대형 메가 IR (솔레어/오카다 등 수백 개 테이블, 수천 대 슬롯)
                </td>
                <td className="py-3.5 px-4 sm:px-6 text-stone-300">
                  중대형 골프 연계 IR (한 리조트, 디하이츠, 로이스)
                </td>
                <td className="py-3.5 px-4 sm:px-6 bg-[#C9A96E]/5 font-medium text-white border-l border-[#C9A96E]/20">
                  호이아나(140+ 테이블 대형 오션 IR) + 크라운(도심 해변 클럽) 2개 축
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="py-3.5 px-4 sm:px-6 font-medium text-white">
                  내국인 입장 & 테이블 밀도
                </td>
                <td className="py-3.5 px-4 sm:px-6 text-stone-300">
                  필리핀 내국인 입장 자유 (주말 플로어 매우 혼잡)
                </td>
                <td className="py-3.5 px-4 sm:px-6 text-stone-300">
                  내국인 및 한국인 체류자 혼합 (골퍼 중심)
                </td>
                <td className="py-3.5 px-4 sm:px-6 bg-[#C9A96E]/5 font-medium text-white border-l border-[#C9A96E]/20">
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>전면 외국인 전용 (베트남인 출입 불가, 정숙하고 쾌적)</span>
                  </div>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="py-3.5 px-4 sm:px-6 font-medium text-white">
                  바카라 카드 스퀴즈(까기)
                </td>
                <td className="py-3.5 px-4 sm:px-6 text-stone-300">
                  미들/하이리밋 테이블에서 대단히 보편적
                </td>
                <td className="py-3.5 px-4 sm:px-6 text-stone-300">
                  한국인 선호 테이블에서 보편적 허용
                </td>
                <td className="py-3.5 px-4 sm:px-6 bg-[#C9A96E]/5 font-medium text-white border-l border-[#C9A96E]/20">
                  호이아나는 착석 최고액자 요청 규정 명시 (크라운은 공식 확인 필요)
                </td>
              </tr>

              {/* Row 4 */}
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="py-3.5 px-4 sm:px-6 font-medium text-white">
                  주요 사용 통화 & 칩
                </td>
                <td className="py-3.5 px-4 sm:px-6 text-stone-300">
                  필리핀 페소(PHP) 기준 (정킷은 HKD 혼용)
                </td>
                <td className="py-3.5 px-4 sm:px-6 text-stone-300">
                  필리핀 페소(PHP) 기준
                </td>
                <td className="py-3.5 px-4 sm:px-6 bg-[#C9A96E]/5 font-medium text-white border-l border-[#C9A96E]/20">
                  미화 달러(USD) 칩 기준 발권 & 정산 (외환 세관 신고 주의)
                </td>
              </tr>

              {/* Row 5 */}
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="py-3.5 px-4 sm:px-6 font-medium text-white">
                  공항 및 시내 이동
                </td>
                <td className="py-3.5 px-4 sm:px-6 text-stone-300">
                  공항 10~20분, 그러나 시내(마카티) 이동 시 극심한 정체
                </td>
                <td className="py-3.5 px-4 sm:px-6 text-stone-300">
                  공항 및 코리아타운 10~15분으로 매우 컴팩트
                </td>
                <td className="py-3.5 px-4 sm:px-6 bg-[#C9A96E]/5 font-medium text-white border-l border-[#C9A96E]/20">
                  크라운은 공항 15분, 호이아나는 45~50분 (교통 정체 거의 없음)
                </td>
              </tr>

              {/* Row 6 */}
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="py-3.5 px-4 sm:px-6 font-medium text-white">
                  골프장 코스 품질 & 바다 연계
                </td>
                <td className="py-3.5 px-4 sm:px-6 text-stone-300">
                  시내에서 골프장 이동에 1~2시간 소요, 바다 연계성 낮음
                </td>
                <td className="py-3.5 px-4 sm:px-6 text-stone-300">
                  미모사/썬밸리 등 골프 집적도 최고, 단 해변 휴양 부재
                </td>
                <td className="py-3.5 px-4 sm:px-6 bg-[#C9A96E]/5 font-medium text-white border-l border-[#C9A96E]/20">
                  호이아나 쇼어스(바다 듄스 링크스), BRG 36홀, 바나힐 야간 골프 최상
                </td>
              </tr>

              {/* Row 7 */}
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="py-3.5 px-4 sm:px-6 font-medium text-white">
                  치안 환경 및 식도락
                </td>
                <td className="py-3.5 px-4 sm:px-6 text-stone-300">
                  카지노 외곽 이동 시 경계 필요, 고급 파인다이닝 풍부
                </td>
                <td className="py-3.5 px-4 sm:px-6 text-stone-300">
                  특구 내 안전, 한식당 밀집 최고, 로컬 미식은 제한적
                </td>
                <td className="py-3.5 px-4 sm:px-6 bg-[#C9A96E]/5 font-medium text-white border-l border-[#C9A96E]/20">
                  동남아 최고 수준의 안전한 야간 치안, 신선한 로컬 해산물 & 한식
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Curatorial Footnote */}
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-stone-500 gap-2">
          <div className="flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-[#C9A96E]" />
            <span>최근 공식 데이터 확인일: 2026년 10월 29일 · 카지노 내부 테이블 미니멈은 시기별 변동 가능</span>
          </div>
          <div className="text-stone-400">
            출처: 각 사 공식 IR 안내서 및 베트남 재무부·중앙은행 규정집
          </div>
        </div>
      </div>
    </section>
  );
};
