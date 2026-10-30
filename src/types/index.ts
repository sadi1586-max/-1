export type DepartureCity = 'manila' | 'clark';

export type ActiveTab = 
  | 'home' 
  | 'compare' 
  | 'hoiana' 
  | 'crown' 
  | 'squeeze' 
  | 'flights' 
  | 'environment' 
  | 'nightlife' 
  | 'golf' 
  | 'korean' 
  | 'itinerary' 
  | 'faq';

export interface CasinoDetail {
  id: 'hoiana' | 'crown';
  officialName: string;
  koreanName: string;
  location: string;
  district: string;
  complexOverview: string;
  tableCountText: string;
  slotCountText: string;
  liveBaccaratDetails: string;
  gameTypes: string[];
  vipFacilities: string;
  cardSqueezeCondition: string;
  cardSqueezeStatus: 'available_conditional' | 'needs_official_confirmation' | 'unconfirmed';
  foreignerEntryRules: {
    minimumAge: number;
    passportRequired: boolean;
    dressCode: string;
    acceptedCurrencies: string[];
    entryFee: string;
  };
  chipExchangeProcess: string;
  operatingHours: string;
  accommodations: {
    hotelBrands: string[];
    roomCountTotal: string;
    poolBeach: string;
    diningSummary: string;
  };
  accessibility: {
    fromAirportTime: string;
    fromAirportDistance: string;
    fromCityCenterTime: string;
    fromHoiAnOldTownTime: string;
    beachAccess: string;
  };
  keyDifferencesFromPH: string[];
  lastVerifiedDate: string;
  officialSourceUrl: string;
  imageUrl: string;
}

export interface CasinoComparisonRow {
  category: string;
  label: string;
  hoiana: string;
  crown: string;
  philippinesStandard: string;
  isConfirmed: {
    hoiana: boolean;
    crown: boolean;
  };
  note?: string;
}

export interface EnvironmentComparisonItem {
  id: string;
  title: string;
  category: string;
  manila: string;
  clark: string;
  danang: string;
  keyTakeaway: string;
}

export interface FlightOption {
  airline: string;
  flightNumber?: string;
  originCode: string;
  originCity: string;
  destinationCode: string;
  destinationCity: string;
  isDirect: boolean;
  transitHubs?: string[];
  estimatedDuration: string;
  departureTerminal: string;
  arrivalTerminal: string;
  frequency: string;
  approxSchedule: string;
  baggagePolicy: string;
  transitNotes?: string;
  officialBookingUrl: string;
  verificationDate: string;
}

export interface GolfCourseInfo {
  id: string;
  name: string;
  koreanName: string;
  designer: string;
  holes: number;
  par: number;
  distanceFromCity: string;
  distanceFromHoiana: string;
  distanceFromCrown: string;
  courseStyle: string;
  nightGolf: boolean;
  facilities: string[];
  phComparisonNote: string;
  officialUrl: string;
  verifiedDate: string;
}

export interface NightlifeCategory {
  id: 'karaoke' | 'spa' | 'lounge' | 'safety';
  title: string;
  koreanTitle: string;
  summary: string;
  subCategories: {
    title: string;
    description: string;
    priceStructure: string;
    operatingHours: string;
    tipsAndCautions: string[];
  }[];
}

export interface KoreanInfraItem {
  id: string;
  category: 'restaurant' | 'supermarket' | 'hospital' | 'community' | 'transport' | 'residence';
  name: string;
  koreanName: string;
  area: string;
  address: string;
  phone: string;
  operatingHours: string;
  description: string;
  koreanLanguageSupport: '한국인 직접 운영' | '한국어 전담 직원' | '통역 지원' | '한국어 메뉴판';
  verifiedDate: string;
}

export interface TravelItineraryPlan {
  id: string;
  title: string;
  duration: string;
  concept: string;
  recommendedFor: string;
  dayPlans: {
    dayNumber: number;
    title: string;
    schedule: {
      time: string;
      activity: string;
      location: string;
      notes: string;
    }[];
  }[];
}

export interface FaqItem {
  id: string;
  category: 'legal' | 'currency' | 'casino' | 'travel' | 'etiquette';
  question: string;
  answer: string;
  sourceOrLaw?: string;
}

export interface VerificationLog {
  id: string;
  section: string;
  lastChecked: string;
  verifiedBy: string;
  status: '공식 확인 완료' | '공식 확인 필요' | '규정 재검토중';
  note: string;
}
