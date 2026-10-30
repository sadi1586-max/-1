export interface SqueezeRulePoint {
  title: string;
  subtitle: string;
  description: string;
}

export interface CardPeekScenario {
  id: string;
  name: string;
  sidesCount: number; // 0 (blank/Ace), 2 (4,5), 3 (6,7,8), 4 (9,10), Picture (J,Q,K)
  possibleValues: string[];
  koreanSlang: string;
  explanation: string;
}

export const cardPeekScenarios: CardPeekScenario[] = [
  {
    id: 'picture',
    name: '픽처 / 몽키 (Picture / Monkey)',
    sidesCount: 0,
    possibleValues: ['J', 'Q', 'K', '10'],
    koreanSlang: '공 (0) / 그림 / 몽키',
    explanation: '카드의 짧은 쪽을 살짝 깠을 때 가로 테두리 무늬(그림 선)가 보이며, 바카라 계산 시 0점(Zero)으로 처리됩니다. 플레이어나 뱅커가 8이나 9를 잡았을 때 상대방 카드에서 나오길 간절히 바라는 카드입니다.'
  },
  {
    id: 'two_sides',
    name: '투 사이드 (Two Sides - 2핀)',
    sidesCount: 2,
    possibleValues: ['4', '5'],
    koreanSlang: '두 핀 (Two Pin)',
    explanation: '카드의 긴 변을 조심스럽게 스퀴즈했을 때 양쪽 끝에 2개의 핀(심볼)이 보이는 형태입니다. 가운데 심볼이 비어있으면 4, 가운데 심볼이 하나 더 있으면 5가 됩니다.'
  },
  {
    id: 'three_sides',
    name: '쓰리 사이드 (Three Sides - 3핀)',
    sidesCount: 3,
    possibleValues: ['6', '7', '8'],
    koreanSlang: '세 핀 (Three Pin)',
    explanation: '긴 변을 스퀴즈할 때 세 개의 핀이 나타나는 형태입니다. 바카라에서 가장 긴장감이 극에 달하는 순간으로, 가운데 심볼의 유무와 위치에 따라 6, 7, 그리고 최고의 내추럴 숫자인 8로 갈라집니다.'
  },
  {
    id: 'four_sides',
    name: '포 사이드 (Four Sides - 4핀)',
    sidesCount: 4,
    possibleValues: ['9', '10'],
    koreanSlang: '네 핀 (Four Pin)',
    explanation: '긴 변을 스퀴즈할 때 4개의 핀이 빽빽하게 보이는 형태입니다. 가운데에 심볼이 없으면 9(최고의 내추럴 9), 가운데에 심볼이 있으면 10(0점 처리)이 됩니다. 승패의 극과 극을 가르는 카드입니다.'
  },
  {
    id: 'one_side',
    name: '노 핀 / 원 핀 (No Pin / Ace / 2 / 3)',
    sidesCount: 1,
    possibleValues: ['A', '2', '3'],
    koreanSlang: '민자 / 한 알',
    explanation: '긴 변을 들어올렸을 때 양쪽 끝에 심볼이 전혀 보이지 않는 밋밋한 형태입니다. 정중앙에 심볼이 하나 나오면 에이스(1), 위아래로 심볼이 이어지면 2나 3이 됩니다.'
  }
];

export const squeezeEtiquetteRules: SqueezeRulePoint[] = [
  {
    title: '테이블 위에서만 카드 유지 (Keep Over Table)',
    subtitle: '카드가 테이블 레일 아래로 내려가서는 안 됨',
    description: '스퀴즈 시 양손과 카드는 반드시 딜러와 천장 CCTV(Surveillance) 카메라의 시야 안에 머물러야 합니다. 손이나 카드를 테이블 레일 밑으로 내리는 행위는 부정행위 방지 규정상 즉각적인 경고 대상입니다.'
  },
  {
    title: '카드 심한 훼손 및 접기 금지 (No Excessive Creasing)',
    subtitle: '스퀴즈는 허용되나 카드를 반으로 접거나 찢는 것은 금지',
    description: '베트남과 필리핀 모두 카드를 휘어보는 스퀴즈는 허용되지만, 바코드를 훼손하거나 완전히 꺾어 접어 카드를 파손하는 행위는 엄격히 금지됩니다. 고의 파손 시 덱 교체 및 제재를 받을 수 있습니다.'
  },
  {
    title: '제한 시간 준수 (Reasonable Time Limit)',
    subtitle: '지나친 지연은 딜러 및 플로어의 강제 오픈 사유',
    description: '긴장감을 즐기는 것은 좋으나, 1분 이상 카드를 까지 않고 지연시키는 행위는 다른 플레이어들과 딜러에게 불편을 줍니다. 플로어 매니저가 판단하여 카드를 즉시 테이블에 공개(Force Open)하도록 지시할 수 있습니다.'
  },
  {
    title: '착석 최고액 베팅자 우선권 (Highest Seated Bettor)',
    subtitle: '스탠딩 베팅자나 소액 베팅자는 스퀴즈 불가',
    description: '플레이어(Player) 또는 뱅커(Banker) 중 해당 진영에 "의자에 착석하여 가장 많은 금액을 베팅한 고객"에게만 카드를 스퀴즈할 권리가 부여됩니다. 동액일 경우 좌석 번호 순으로 우선권이 부여됩니다.'
  }
];

export const mathematicalTruth = {
  title: '카드 스퀴즈의 수학적 진실: 승률에 영향이 있는가?',
  summary: '결론부터 말씀드리면, 카드를 어떻게 까든, 어떤 각도로 보든 승률(House Edge)은 단 0.0001%도 변하지 않습니다.',
  details: [
    '카드는 셔플 후 슈(Shoe)에서 딜링되어 나오는 그 순간 이미 결정되어 있습니다.',
    '스퀴즈(까기)는 카지노 게임의 긴장감과 심리적 카타르시스를 극대화하기 위해 고안된 플레이어의 심리적 의식(Ritual)일 뿐입니다.',
    '바카라의 하우스 엣지는 뱅커 약 1.06%, 플레이어 약 1.24%로 고정되어 있습니다.',
    '따라서 스퀴즈가 승률을 높여준다는 미신을 믿고 무리하게 고액 테이블에 착석하는 것은 매우 위험합니다.'
  ]
};
