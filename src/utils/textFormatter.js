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

// ms 기준인 시간을 -> 시간, 분 단위로 표시하기
const convertTime = ms => {
  const hourInMs = 1000 * 60 * 60;
  const minuteInMs = 1000 * 60;

  const hours = Math.floor(ms / hourInMs);
  const minutes = Math.round(ms % hourInMs / minuteInMs);

  return hours > 0 ? `${hours}시간 ${minutes}분` : `${minutes}분`;
}

const convertToDisplayText = user => {
  // value값이 있는 경우엔 displayText로 변환하고 && value값이 없는 경우엔 "-"로 채워주기
  ["gender", "job"].forEach(field => user[field] = user[field] ? displayText[field][user[field]] : "-");

  // value값이 있는 경우엔 플레이시간을 시간,분 단위로 표시하고 && value값이 없는 경우엔 "-"로 채워주기
  user.totalPlayTime = user.totalPlayTime ? convertTime(user.totalPlayTime[0].totalUsedTime) : "-";

  // value값이 없는 경우에 "-"로 채워주기
  ["birthday", "monthlyPayment"].forEach(field => user[field] = user[field] || "-");

  for (let [key, value] of Object.entries(user.device)) {
    user.device[key] = value || "-";
  }

  const playStyleFields = [
    "favoritePlatforms",
    "favoriteGenres",
    "leastFavoriteGenres"
  ];
  playStyleFields.forEach(playStyle => {
    if (user[playStyle] && user[playStyle].length) {
      user[playStyle] = user[playStyle].map(
        value => displayText.playStyle[value]
      );
      user[playStyle] = user[playStyle].join(", ");
    } else {
      user[playStyle] = "-";
    }
  });

  user.lifeApps = user.lifeApps && user.lifeApps.length ? user.lifeApps.join(", ") : "-";

  return user;
}

const displayActivatedDate = user => {
  if (user.activatedDate) {
    const date = new Date(user.activatedDate);
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
  } else {
    return "-";
  }
}

export const showDisplayText = user => {
  let formattedUser = Object.assign({}, user);

  formattedUser = convertToDisplayText(formattedUser);
  formattedUser.activatedDate = displayActivatedDate(formattedUser);

  return formattedUser;
};
