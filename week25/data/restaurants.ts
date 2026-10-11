// data/restaurants.ts
export type Restaurant = {
  id: number;
  name: string;
  category: string;
  emoji: string;
  menu: string;
  price: number;
  comment: string;
};

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "하늘초밥",
    category: "일식",
    emoji: "🍣",
    menu: "욕심쟁이 세트",
    price: 59000,
    comment: "최고의 스시 맛집!",
  },
  {
    id: 2,
    name: "와우신내떡 용산점",
    category: "분식",
    emoji: "🍝",
    menu: "와우시그니처 세트",
    price: 12200,
    comment: "최애 떡볶이집!! 감튀 필수",
  },
  {
    id: 3,
    name: "백제정육점",
    category: "한식",
    emoji: "🥩",
    menu: "육회",
    price: 53000,
    comment: "단백질 채우고 싶으면 여기!!",
  },
  {
    id: 4,
    name: "강가 타임스퀘어점",
    category: "인도음식",
    emoji: "🍛",
    menu: "치킨마크니",
    price: 26000,
    comment: "분위기도 좋은 커리 맛집",
  },
  {
    id:5,
    name:"데이릿 용산점",
    category: "한식",
    emoji:"🍱",
    menu: "묵은지 육회마끼",
    price:13800,
    comment: "여기 완전 👍🏻👍🏻👍🏻",
  },
  {
    id:6,
    name:"오르노",
    category:"양식",
    emoji:"🍕",
    menu:"무화과 에멘탈 피자",
    price:35500,
    comment:"느좋 피자집",
  }
];