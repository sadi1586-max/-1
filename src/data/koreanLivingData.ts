import { KoreanInfraItem } from '../types';

export const koreanLivingInfraList: KoreanInfraItem[] = [
  // Restaurants
  {
    id: 'rest-1',
    category: 'restaurant',
    name: 'Obaltan Hoiana',
    koreanName: '오발탄 호이아나점',
    area: '호이아나 리조트 단지 내',
    address: 'Hoiana Resort & Golf, Ground Floor, Duy Xuyen, Quang Nam',
    phone: '+84 235 858 8888',
    operatingHours: '11:30 ~ 22:30 (브레이크타임 15:00~17:00)',
    description: '한국의 정통 양대창 숯불구이 전문 브랜드 오발탄의 호이아나 리조트 직영점. 리조트 내에서 고급 숯불 한우구이와 대창, 된장찌개, 냉면 등 최고급 한식을 즐길 수 있습니다.',
    koreanLanguageSupport: '한국인 직접 운영',
    verifiedDate: '2026.10'
  },
  {
    id: 'rest-2',
    category: 'restaurant',
    name: 'Brotherhood BBQ (형제식당 / 바베큐)',
    koreanName: '형제 바베큐 안트엉점',
    area: '안트엉 (미케비치 한인상권)',
    address: '68 An Thuong 2, Bac My An, Ngu Hanh Son, Da Nang',
    phone: '+84 90 512 3456',
    operatingHours: '11:00 ~ 익일 02:00 (심야 영업)',
    description: '크라운 카지노에서 차량 5분 거리. 생삼겹살, 목살, 갈비와 함께 김치찌개, 뚝배기 해장국을 제공하며 늦은 밤까지 성인 고객들의 식사와 반주가 가능합니다.',
    koreanLanguageSupport: '한국어 전담 직원',
    verifiedDate: '2026.10'
  },
  {
    id: 'rest-3',
    category: 'restaurant',
    name: 'Seoul House (서울가든 다낭)',
    koreanName: '서울가든 한식당',
    area: '다낭 한강변 시내',
    address: '124 Duong 2 Thang 9, Hai Chau, Da Nang',
    phone: '+84 236 389 7788',
    operatingHours: '10:30 ~ 22:00',
    description: '정갈한 한정식, 갈비탕, 소고기 버섯전골, 삼계탕 등 몸보신 보양식과 VIP 개별 룸을 다수 보유하고 있어 비즈니스 식사에 적합합니다.',
    koreanLanguageSupport: '한국인 직접 운영',
    verifiedDate: '2026.10'
  },

  // Supermarkets
  {
    id: 'market-1',
    category: 'supermarket',
    name: 'K-Market An Thuong',
    koreanName: 'K-마켓 안트엉점 (한국 식료품점)',
    area: '안트엉 한인타운',
    address: '42 An Thuong 4, Ngu Hanh Son, Da Nang',
    phone: '+84 236 395 8899',
    operatingHours: '07:00 ~ 24:00 (연중무휴)',
    description: '한국 직수입 라면, 즉석밥, 반찬, 한국 담배류, 생수, 주류(소주/막걸리), 비상약품(소화제, 두통약)을 폭넓게 판매합니다.',
    koreanLanguageSupport: '한국어 전담 직원',
    verifiedDate: '2026.10'
  },
  {
    id: 'market-2',
    category: 'supermarket',
    name: 'K-Market Hoiana Suites',
    koreanName: 'K-마켓 호이아나 리조트점',
    area: '호이아나 리조트 단지',
    address: 'Hoiana Residences Ground Floor, Quang Nam',
    phone: '+84 235 858 8990',
    operatingHours: '08:00 ~ 22:00',
    description: '호이아나 리조트에 체류하면서 시내로 나가지 않고도 한국 스낵, 컵라면, 음료, 생필품을 즉시 구매할 수 있는 편의점 형태 매장.',
    koreanLanguageSupport: '한국어 메뉴판',
    verifiedDate: '2026.10'
  },

  // Medical Clinics
  {
    id: 'med-1',
    category: 'hospital',
    name: 'Family Medical Practice Da Nang',
    koreanName: '패밀리 메디컬 프랙티스 다낭 클리닉',
    area: '다낭 시내 한강변',
    address: '96-98 Nguyen Van Linh, Hai Chau, Da Nang',
    phone: '+84 236 3582 699 (24시간 응급 라인)',
    operatingHours: '24시간 응급 진료 / 일반 외래 08:00 ~ 17:00',
    description: '베트남 전역에 네트워크를 둔 최고 권위의 인터내셔널 클리닉. 상주 한국인 코디네이터 또는 실시간 한국어 의료 통역 지원. 해외 여행자 보험 청구 서류 원스톱 발행.',
    koreanLanguageSupport: '통역 지원',
    verifiedDate: '2026.10'
  },
  {
    id: 'med-2',
    category: 'hospital',
    name: 'Vinmec Danang International Hospital',
    koreanName: '빈멕 다낭 국제종합병원',
    area: '다낭 도심 남부',
    address: '4 Thang 4, Khue Trung, Cam Le, Da Nang',
    phone: '+84 236 361 1611',
    operatingHours: '24시간 응급센터 운영',
    description: '베트남 최대 민간 의료그룹 빈멕의 다낭 5성급 종합병원. 첨단 MRI/CT 장비, 중환자실, 한국어 전담 통역 데스크를 갖추고 있어 심혈관 및 응급 수술 대응 가능.',
    koreanLanguageSupport: '한국어 전담 직원',
    verifiedDate: '2026.10'
  },

  // Community & Consulate
  {
    id: 'gov-1',
    category: 'community',
    name: 'Consulate General of the Republic of Korea in Danang',
    koreanName: '주다낭 대한민국 총영사관',
    area: '다낭 시내 한강변 인근',
    address: 'Nam Ky Khoi Nghia, Ngu Hanh Son, Da Nang',
    phone: '+84 236 356 6100 (야간 당직 긴급: +84 93 112 0404)',
    operatingHours: '평일 08:30 ~ 17:30 (주말 및 공휴일 휴무, 당직실 24시간 가동)',
    description: '여권 분실 시 긴급 단수 여권 발급, 현지 형사 사건 및 사고 발생 시 영사 조력, 비상 연락망 가동.',
    koreanLanguageSupport: '한국인 직접 운영',
    verifiedDate: '2026.10'
  },
  {
    id: 'gov-2',
    category: 'community',
    name: 'Danang Korean Association',
    koreanName: '다낭 한인회',
    area: '안트엉 한인타운',
    address: '28 An Thuong 2, Ngu Hanh Son, Da Nang',
    phone: '+84 236 395 1234',
    operatingHours: '평일 09:00 ~ 18:00',
    description: '다낭 거주 교민 및 장기 체류자를 위한 생활 정보 지원, 법률 상담 자문 변호사 연결, 교민 비상 연락망.',
    koreanLanguageSupport: '한국인 직접 운영',
    verifiedDate: '2026.10'
  },

  // Transport & Delivery
  {
    id: 'trans-1',
    category: 'transport',
    name: 'Private VIP Airport Limousine & Chauffeur',
    koreanName: '다낭 VIP 공항 픽업 및 전용 기사 렌터카',
    area: '다낭 공항 / 전 지역',
    address: '다낭 국제선 T2 게이트 픽업 연계',
    phone: '+84 93 555 7788 (카카오톡 채널 연계)',
    operatingHours: '24시간 사전 예약제',
    description: '기아 카니발(세도나) 및 현대 스타리아 고급 밴 차량으로 공항에서 호이아나 리조트 또는 크라운 카지노까지 논스톱 프라이빗 이동 제공.',
    koreanLanguageSupport: '한국어 전담 직원',
    verifiedDate: '2026.10'
  },
  {
    id: 'res-1',
    category: 'residence',
    name: 'Ocean Luxury Villas & Serviced Apartments',
    koreanName: '오션빌라스 & 하얏트 레지던스 (장기 체류형)',
    area: '미케비치 - 꽝남 해안로',
    address: 'Truong Sa Street, Ngu Hanh Son, Da Nang',
    phone: '+84 236 396 7000',
    operatingHours: '24시간 리셉션',
    description: '크라운 카지노와 호이아나 중간 지점에 위치한 최고급 프라이빗 풀빌라 단지. 취사 시설, 전용 세탁 서비스, 골프장 인접으로 장기 체류자 선호도 높음.',
    koreanLanguageSupport: '한국어 전담 직원',
    verifiedDate: '2026.10'
  }
];
