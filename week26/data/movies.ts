export interface Movie {
  id: number;
  title: string;
  year: number;
  genre: string;
  director: string;
  description: string;
  image: string;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: '이터널 선샤인',
    year: 2004,
    genre: '로맨스, SF',
    director: '미셸 공드리',
    description:
      '헤어진 연인의 기억을 지우기로 한 남녀의 이야기입니다.\n기억을 지우는 과정에서 서로를 사랑했던 순간들을 다시 마주하게 됩니다.',
    image: '/posters/eternal sunshine.jpg',
  },
  {
    id: 2,
    title: '주토피아1',
    year: 2016,
    genre: '코미디, 애니메이션, 모험',
    director: '바이런 하워드, 리치 무어',
    description:
      '다양한 동물들이 함께 살아가는 도시 주토피아에서 펼쳐지는 이야기입니다.\n토끼 경찰 주디와 여우 닉이 의문의 사건을 해결하며 편견을 극복하고 우정을 쌓아가는 과정을 담고 있습니다.',
    image: '/posters/zootopia.webp',
  },
  {
    id: 3,
    title: '어바웃 타임',
    year: 2013,
    genre: '멜로/로맨스',
    director: '리차드 커티스',
    description:
      '시간을 되돌릴 수 있는 능력을 가진 남자가 사랑과 가족을 통해 평범한 일상의 소중함을 깨닫게 되는 로맨스 영화.',
    image: '/posters/abouttime.webp',
  },
  {
    id: 4,
    title: '플립',
    year: 2010,
    genre: '로맨스, 드라마',
    director: '롭 라이너',
    description:
      '서로를 바라보는 시선이 달랐던 두 소년과 소녀의 첫사랑 이야기입니다.\n풋풋한 설렘과 성장의 순간을 따뜻하게 담아냅니다.',
    image: '/posters/flip.jpg',
  },
  {
    id: 5,
    title: '라라랜드',
    year: 2016,
    genre: '로맨스, 뮤지컬, 드라마',
    director: '데이미언 셔젤',
    description:
      '꿈을 향해 나아가는 재즈 피아니스트와 배우 지망생의 사랑 이야기입니다.\n사랑과 꿈 사이에서 마주하는 선택과 성장의 순간을 아름답게 담아냅니다.',
    image: '/posters/lalaland.jpg',
  },
  {
    id: 6,
    title: '노트북',
    year: 2004,
    genre: '로맨스, 드라마',
    director: '닉 카사베츠',
    description:
      '서로 다른 환경에서 자란 두 남녀의 애틋하고 운명적인 사랑 이야기입니다.\n시간이 흘러도 변하지 않는 사랑과 소중한 추억을 감동적으로 담아냅니다.',
    image: '/posters/notebook.jpg',
  },
];