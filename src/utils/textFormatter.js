export const displayText = {
  gender: {
    all: "무관",
    male: "남자",
    female: "여자"
  },
  ageGroup: {
    all: "무관",
    under10: "10세 미만",
    "10s": "10대",
    "20s": "20대",
    "30s": "30대",
    "40s": "40대",
    "50s": "50대",
    over60: "60대 이상"
  },
  playStyle: {
    all: "무관",
    pc: "PC",
    mobile: "모바일",
    console: "콘솔",
    action: "액션",
    adventure: "어드벤처",
    arcade: "아케이드",
    board: "보드",
    card: "카드",
    casino: "카지노",
    casual: "캐주얼",
    educational: "교육",
    music: "음악",
    puzzle: "퍼즐",
    racing: "레이싱",
    rolePlaying: "롤플레잉",
    simulation: "시뮬레이션",
    sports: "스포츠",
    strategy: "전략",
    trivia: "퀴즈",
    word: "단어"
  },
  payStyle: {
    all: "무관",
    pay: "과금",
    free: "무과금"
  },
  job: {
    "1000": "관리자",
    "2000": "전문가",
    "2001": "IT 종사자",
    "3000": "사무 종사자",
    "4000": "서비스 종사자",
    "5000": "학생",
    "5001": "중고등학생",
    "5002": "대학생",
    "5003": "초등학생",
    "6000": "판매 종사자",
    "7000": "농림/어업 숙련 종사자",
    "8000": "기능원 및 관련 기능 종사자",
    "9000": "장치/기계 조작 및 조립 종사자",
    "10000": "단순노무 종사자",
    "11000": "군인",
    "12000": "기타",
    "12001": "주부",
    "12002": "무직",
    "0": "-"
  }
};

export const showDisplayText = user => {
  const formattedUser = Object.assign({}, user);

  formattedUser.gender = displayText.gender[user.gender];
  formattedUser.job = displayText.job[user.job];

  const playStyleFields = [
    "favoritePlatforms",
    "favoriteGenres",
    "leastFavoriteGenres"
  ];
  playStyleFields.forEach(field => {
    formattedUser[field] = user[field].map(
      value => displayText.playStyle[value]
    );
  });

  return formattedUser;
};
