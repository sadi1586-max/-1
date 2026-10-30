import React, { useState } from 'react';
import { faqList } from '../data/faqData';
import { FaqItem } from '../types';
import { HelpCircle, ChevronDown, ChevronUp, Scale, ShieldAlert, PhoneCall, ExternalLink } from 'lucide-react';

export const FaqView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>(faqList[0].id);

  const categories = [
    { id: 'all', label: '전체 질문' },
    { id: 'legal', label: '국내법 & 외환 규정' },
    { id: 'casino', label: '카지노 입장 & 테이블' },
    { id: 'currency', label: '칩 교환 & 환전' },
    { id: 'travel', label: '교통 & 여행 매너' },
  ];

  const filteredFaqs = selectedCategory === 'all'
    ? faqList
    : faqList.filter(f => f.category === selectedCategory);

  const toggleFaq = (id: string) => {
    setExpandedFaqId(expandedFaqId === id ? null : id);
  };

  return (
    <div className="py-12 bg-[#080A0F] min-h-screen text-[#F5F1E8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 pb-6 border-b border-[#C9A96E]/20">
          <div className="flex items-center gap-2 text-xs text-[#C9A96E] font-mono uppercase tracking-wider mb-2">
            <span>FREQUENTLY ASKED QUESTIONS</span>
            <span aria-hidden="true">·</span>
            <span>LEGAL & PROCEDURAL CLARITY</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif-display font-bold text-[#F5F1E8] mb-3">
            자주 묻는 질문 (FAQ) & 법률 자문
          </h1>
          <p className="text-sm sm:text-base text-[#F5F1E8]/75 leading-relaxed">
            해외 카지노 이용 시 대한민국 형법상 주의사항(속인주의), 세관 외환 신고 규정, USD 칩 정산 체계 및 베트남 카지노 외국인 전용 규정을 투명하게 설명합니다.
          </p>
        </div>

        {/* Responsible Gaming Hotline Banner */}
        <div className="bg-[#0A1220] border border-red-900/50 rounded-xl p-5 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white text-sm">책임 있는 레저 및 도박중독 예방 상담 안내</strong>
              <p className="text-xs text-stone-300 mt-0.5">
                과도한 베팅은 개인과 가족에게 심각한 경제적·정신적 피해를 초래합니다. 도움이 필요할 경우 즉시 전문가 상담을 받으세요.
              </p>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-2 bg-[#080A0F] border border-red-950 px-4 py-2 rounded-lg">
            <PhoneCall className="w-4 h-4 text-[#C9A96E]" />
            <div className="text-left">
              <span className="text-[10px] text-stone-400 font-mono block">한국도박문제예방치유원 헬프라인</span>
              <span className="text-sm font-bold text-white font-mono">국번없이 1336 (24시간)</span>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 scrollbar-none">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-4 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === c.id
                  ? 'bg-[#C9A96E] text-[#080A0F] font-bold shadow'
                  : 'bg-[#0A1220] text-stone-300 hover:text-white border border-stone-800'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 mb-12">
          {filteredFaqs.map((faq) => {
            const isExpanded = expandedFaqId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-[#0A1220] border border-[#C9A96E]/20 hover:border-[#C9A96E]/40 rounded-xl overflow-hidden transition-all shadow-md"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-[#C9A96E] font-serif-display font-bold text-lg leading-none mt-0.5">
                      Q.
                    </span>
                    <h3 className="text-base sm:text-lg font-serif-display font-semibold text-white leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div className="shrink-0 text-stone-400 mt-1">
                    {isExpanded ? <ChevronUp className="w-5 h-5 text-[#C9A96E]" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-stone-800/80 bg-[#060B14]">
                    <div className="flex items-start gap-3 text-xs sm:text-sm text-stone-200 leading-relaxed mb-4">
                      <span className="text-emerald-400 font-serif-display font-bold text-lg leading-none mt-0.5">
                        A.
                      </span>
                      <p>{faq.answer}</p>
                    </div>

                    {faq.sourceOrLaw && (
                      <div className="pt-3 border-t border-stone-800 flex items-center gap-2 text-xs text-[#C9A96E] font-mono">
                        <Scale className="w-3.5 h-3.5" />
                        <span>관련 법령 및 출처: {faq.sourceOrLaw}</span>
                      </div>
                    )}
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
