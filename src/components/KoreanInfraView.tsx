import React, { useState } from 'react';
import { koreanLivingInfraList } from '../data/koreanLivingData';
import { KoreanInfraItem } from '../types';
import { Search, MapPin, Phone, Clock, ShieldCheck, CheckCircle2, Building, Utensils, ShoppingBag, Stethoscope, Users, Car, Home } from 'lucide-react';

export const KoreanInfraView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: '전체 인프라', icon: Building },
    { id: 'restaurant', label: '한식당 & 심야 식당', icon: Utensils },
    { id: 'supermarket', label: '한국 마켓 & 편의점', icon: ShoppingBag },
    { id: 'hospital', label: '한국어 의료 & 24h 응급', icon: Stethoscope },
    { id: 'community', label: '영사관 & 한인회', icon: Users },
    { id: 'transport', label: 'VIP 공항 이동 & 렌터카', icon: Car },
    { id: 'residence', label: '서비스드 레지던스', icon: Home },
  ];

  const filteredItems = koreanLivingInfraList.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.koreanName.includes(searchTerm) ||
      item.area.includes(searchTerm) ||
      item.description.includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 bg-[#080A0F] min-h-screen text-[#F5F1E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 pb-6 border-b border-[#C9A96E]/20">
          <div className="flex items-center gap-2 text-xs text-[#C9A96E] font-mono uppercase tracking-wider mb-2">
            <span>KOREAN COMMUNITY & INFRASTRUCTURE</span>
            <span aria-hidden="true">·</span>
            <span>EXPATS DIRECTORY</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif-display font-bold text-[#F5F1E8] mb-3">
            다낭 한국인 생활 인프라 디렉터리
          </h1>
          <p className="text-sm sm:text-base text-[#F5F1E8]/75 max-w-3xl leading-relaxed">
            마닐라나 클락에서 장기 체류하며 카지노를 이용했던 한국인들에게 친숙하고 편리한 다낭의 실전 생활 인프라(한식당, 한국 식료품, 한국어 의료기관, 총영사관, 공항 VIP 이동)의 검증된 정보를 제공합니다.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="bg-[#0A1220] border border-[#C9A96E]/30 rounded-xl p-5 mb-8 shadow-xl">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-5">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="text"
                placeholder="식당명, 병원, K-마켓, 안트엉 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[#080A0F] border border-stone-800 rounded-lg text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#C9A96E]"
              />
            </div>

            <div className="text-xs text-stone-400 font-mono flex items-center gap-1.5 self-start md:self-center">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>실제 영업 및 연락처 검증: 2026.10</span>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-[#C9A96E] text-[#080A0F] font-bold shadow'
                      : 'bg-[#080A0F] text-stone-300 hover:text-white border border-stone-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#0A1220] border border-stone-800 hover:border-[#C9A96E]/50 rounded-xl p-6 transition-all shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-[#C9A96E]">{item.area}</span>
                  <span className="text-[11px] text-stone-400 font-mono bg-[#080A0F] px-2 py-0.5 rounded border border-stone-800">
                    {item.koreanLanguageSupport}
                  </span>
                </div>

                <h3 className="text-lg font-serif-display font-bold text-white mb-1">
                  {item.koreanName}
                </h3>
                <div className="text-xs text-stone-400 font-mono mb-3">
                  {item.name}
                </div>

                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Contact Info Footer */}
              <div className="pt-4 border-t border-stone-800 space-y-2 text-xs text-stone-300">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#C9A96E] shrink-0 mt-0.5" />
                  <span className="text-stone-300 text-[11px]">{item.address}</span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#C9A96E]" />
                    <span className="text-white font-mono">{item.phone}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-stone-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{item.operatingHours}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12 bg-[#0A1220] rounded-xl border border-stone-800 text-stone-400">
            검색 결과가 없습니다. 다른 검색어를 입력해 보세요.
          </div>
        )}
      </div>
    </div>
  );
};
