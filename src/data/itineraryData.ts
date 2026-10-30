import { TravelItineraryPlan } from '../types';

export const travelItineraryPlans: TravelItineraryPlan[] = [
  {
    id: 'itinerary-2n3d',
    title: '2박 3일 럭셔리 복합리조트 오션프론트 힐링',
    duration: '2박 3일 (주말 또는 단기 휴식형)',
    concept: '이동 동선을 최소화하고 최고급 5성급 리조트 단지 내에서 모든 것을 누리는 올인원 휴식형',
    recommendedFor: '마닐라 직항을 이용해 주말을 활용해 다녀오는 비즈니스맨, 번잡한 도시를 벗어나 바다를 바라보며 조용한 휴식을 원하는 성인 여행객',
    dayPlans: [
      {
        dayNumber: 1,
        title: '다낭 도착 및 호이아나 리조트 체크인',
        schedule: [
          { time: '21:55', activity: '다낭 국제공항(DAD) 도착', location: '국제선 T2', notes: '입국 심사 및 전용 픽업 차량 탑승' },
          { time: '22:50', activity: '호이아나 리조트 도착 및 체크인', location: '호이아나 호텔 & 스위트', notes: '웰컴 드링크 및 오션뷰 스위트 입실' },
          { time: '23:30', activity: '리조트 24시간 라운지 야식 및 가벼운 산책', location: '리조트 단지 라운지', notes: '해변 산책로에서 바닷바람을 쐬며 여정의 피로 해소' }
        ]
      },
      {
        dayNumber: 2,
        title: '호이아나 쇼어스 라운딩 또는 프라이빗 비치 & 호이안 구시가지',
        schedule: [
          { time: '08:30', activity: '오션뷰 조식 뷔페', location: '더 가든 레스토랑', notes: '신선한 열대 과일과 쌀국수 조식' },
          { time: '10:00', activity: '호이아나 쇼어스 18홀 라운딩 또는 인피니티 풀 수영', location: '골프 클럽 / 수영장', notes: '로버트 트렌트 존스 Jr 설계의 바다 링크스 코스 경험' },
          { time: '14:30', activity: '예화 스파 아로마 웰니스 트리트먼트', location: 'YHI Spa', notes: '90분 핫스톤 마사지로 근육 피로 완화' },
          { time: '17:30', activity: '호이안 고도시(Old Town) 투어', location: '호이안 유네스코 구시가지 (차량 15분)', notes: '투본강 소원배, 유서 깊은 고택 감상 및 현지 퓨전 디너' },
          { time: '21:30', activity: '리조트 복귀 및 나이트 라운지', location: '호이아나 리조트', notes: '자율적인 야간 여가 시간' }
        ]
      },
      {
        dayNumber: 3,
        title: '레이트 체크아웃 및 귀국',
        schedule: [
          { time: '10:00', activity: '여유로운 브런치 & 리조트 비치 산책', location: '호이아나 프라이빗 비치', notes: '4km 전용 백사장에서의 기념 촬영' },
          { time: '12:00', activity: '체크아웃 및 다낭 시내 이동', location: '다낭 한강변 이동', notes: '기념품(커피, 캐슈넛) 쇼핑 및 한강 뷰 카페 티타임' },
          { time: '18:00', activity: '다낭 공항 이동 및 출국 수속', location: '다낭 국제공항', notes: '마닐라 복귀 또는 연결편 탑승' }
        ]
      }
    ]
  },
  {
    id: 'itinerary-3n4d',
    title: '3박 4일 프리미엄 2색 골프 & 미식 투어',
    duration: '3박 4일 (골프 + 식도락 특화)',
    concept: '다낭 최고의 챔피언십 골프장 2곳 라운딩과 로컬 해산물, 최고급 한우 구이를 결합한 일정',
    recommendedFor: '필리핀 클락 골프에 익숙하여 베트남 최고 수준의 골프장 관리도와 해변 경관을 비교 체험하고 싶은 골프 애호가',
    dayPlans: [
      {
        dayNumber: 1,
        title: '다낭 입국 및 미케비치 체크인',
        schedule: [
          { time: '21:55', activity: '다낭 공항 도착 및 크라운플라자/인근 리조트 입실', location: '미케비치 해안가', notes: '공항에서 15분 만에 호텔 체크인' },
          { time: '23:00', activity: '안트엉 한인타운 심야 바베큐 야식', location: '안트엉 거리', notes: '시원한 맥주와 숯불 삼겹살로 첫날 일정 마무리' }
        ]
      },
      {
        dayNumber: 2,
        title: 'BRG 다낭 골프 18홀 & 미케비치 해산물 디너',
        schedule: [
          { time: '07:30', activity: 'BRG Da Nang Golf Resort 모닝 티오프', location: 'BRG 골프 리조트 (호텔에서 8분)', notes: '그렉 노먼 듄스 코스 18홀 라운딩' },
          { time: '13:00', activity: '클럽하우스 중식 후 호텔 복귀 휴식', location: '호텔 수영장', notes: '해변 선베드에서 낮잠 및 자유 휴식' },
          { time: '16:00', activity: '발 마사지 60분', location: '미케비치 프리미엄 스파', notes: '골프 후 하체 피로 회복' },
          { time: '18:30', activity: '다낭 명품 로컬 해산물 디너', location: '미케비치 씨푸드 거리', notes: '칠리 크랩, 다금바리 회, 타이거 새우 등 신선한 해산물 만찬' }
        ]
      },
      {
        dayNumber: 3,
        title: '호이아나 쇼어스 링크스 라운딩 & 스카이라운지',
        schedule: [
          { time: '08:00', activity: '호이아나 쇼어스 골프장 이동 및 티오프', location: '호이아나 쇼어스', notes: '세계 100대 코스에 꼽히는 바다 듄스 링크스 18홀 정복' },
          { time: '14:00', activity: '오발탄 한식당 늦은 점심', location: '호이아나 리조트 내', notes: '양대창 및 냉면으로 원기 충전' },
          { time: '19:00', activity: '노보텔 스카이 36 루프톱 라운지', location: '다낭 시내 한강변', notes: '다낭 용다리 야경과 라이브 디제잉 감상' }
        ]
      },
      {
        dayNumber: 4,
        title: '롯데마트 쇼핑, 한시장 투어 및 공항 샌딩',
        schedule: [
          { time: '10:00', activity: '한시장(Han Market) 및 롯데마트 특산품 쇼핑', location: '다낭 도심', notes: '베트남 고급 원두, 건망고, 후추 등 구매' },
          { time: '13:00', activity: '정통 베트남 분짜 & 반쎄오 런치', location: '시내 유명 레스토랑', notes: '현지 미식 탐방' },
          { time: '17:00', activity: '출국을 위한 공항 이동', location: '다낭 국제공항', notes: '수하물 위탁 및 출국' }
        ]
      }
    ]
  },
  {
    id: 'itinerary-4n5d',
    title: '4박 5일 다낭·호이안 종합 럭셔리 베케이션',
    duration: '4박 5일 (풀코스 복합 휴양)',
    concept: '다낭 도심의 활기와 호이안의 역사 문화, 바나힐의 이국적 풍경을 모두 아우르는 프리미엄 여정',
    recommendedFor: '가족이나 비즈니스 파트너와 함께 동행하여 게이밍 시설뿐 아니라 베트남 중부의 세계적 문화와 관광을 풍성하게 즐기려는 여행객',
    dayPlans: [
      {
        dayNumber: 1,
        title: '입국 및 다낭 도심 5성급 호텔 입실',
        schedule: [
          { time: '22:00', activity: '다낭 공항 도착 및 한강변 호텔 체크인', location: '다낭 노보텔 또는 힐튼', notes: '야경을 감상하며 웰컴 휴식' }
        ]
      },
      {
        dayNumber: 2,
        title: '바나힐 골든 브릿지 관광 & 한강 럭셔리 크루즈',
        schedule: [
          { time: '09:00', activity: '썬월드 바나힐 국립공원 케이블카 & 골든브릿지 투어', location: '바나힐', notes: '해발 1,487m의 선선한 기후와 유럽풍 테마파크 관람' },
          { time: '15:00', activity: '시내 복귀 및 프리미엄 전신 스파 120분', location: '도심 스파 센터', notes: '전신 스트레칭 및 핫스톤 테라피' },
          { time: '19:30', activity: '한강 디너 유람선 크루즈', location: '한강 유람선 선착장', notes: '선상 디너와 용다리 불쇼 관람' }
        ]
      },
      {
        dayNumber: 3,
        title: '호이아나 리조트 이동 체크인 & 오션 힐링',
        schedule: [
          { time: '11:00', activity: '호이아나 리조트로 숙소 이동', location: '꽝남성 호이아나 단지', notes: '남쪽 해안도로 드라이브 및 복합리조트 체크인' },
          { time: '14:00', activity: '프라이빗 카바나에서 칵테일 & 인피니티 풀', location: '비치 클럽', notes: '여유로운 리조트 라이프' },
          { time: '18:00', activity: '호이안 야시장 및 안방비치 카페', location: '호이안 안방비치', notes: '등불로 물든 호이안 고도시의 낭만적인 밤 산책' }
        ]
      },
      {
        dayNumber: 4,
        title: '자유 레저 데이 (골프 라운딩 또는 리조트 시설 탐방)',
        schedule: [
          { time: '09:00', activity: '개별 맞춤 자유 일정', location: '호이아나 단지 내', notes: '골프 애호가는 18홀 라운딩, 휴식파는 스파 및 카지노 시설 탐방' },
          { time: '18:30', activity: '리조트 파인다이닝 갈라 디너', location: '호이아나 광둥식 중식당', notes: '베이징 덕 및 딤섬 코스 디너' }
        ]
      },
      {
        dayNumber: 5,
        title: '마지막 힐링 마사지 및 귀국편 탑승',
        schedule: [
          { time: '11:00', activity: '체크아웃 후 다낭 시내 이동', location: '다낭 시내', notes: '호텔 리무진 서비스' },
          { time: '13:00', activity: '기념품 갤러리 및 명품 티 하우스', location: '한시장 인근', notes: '마지막 여유를 즐긴 후 공항으로 이동' }
        ]
      }
    ]
  }
];
