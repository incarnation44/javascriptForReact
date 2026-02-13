export const mockData = [
  {
    id: 1,
    title: "요즘 제일 맛있게 먹은 배달 음식 뭐였나요?",
    content: `저는 최근에 시켜 먹은 마라탕이 진짜 맛있었어요.
맵기 조절도 되고 재료 선택하는 재미도 있어서 좋더라고요.

다들 최근에 가장 만족했던 배달 음식 추천해주세요!`,
    date: Date.now(), // 3시간 전
    writer: "배고픈개발자",
    category: "수다",
    comment: [{
      id: 99,
      writer: "댓글러1",
      content: "엥?",
      date: new Date().getTime(),
    },
    {
      id: 100,
      writer: "댓글러2",
      content: "두쫀쿠!",
      date: new Date().getTime(),
    },
    ]
  },


  {
    id: 2,
    title: "김치찌개 맛있게 끓이는 법 질문드립니다",
    content: `집에서 김치찌개 끓이면 뭔가 식당 맛이 안 나요.
돼지고기 먼저 볶고 김치도 볶으라던데
다들 어떻게 끓이시나요?

꿀팁 있으면 공유 부탁드립니다!`,
    date: Date.now(),
    writer: "요리초보",
    category: "질문",
    comment: [{
      id: 101,
      writer: "댓글러1",
      content: "저도 같은 생각이에요!",
      date: new Date().getTime(),
    },]
  },



  {
    id: 3,
    title: "파스타 면 종류 간단 정리",
    content: `- 스파게티: 가장 기본적인 긴 면
- 펜네: 속이 빈 원통형 면
- 링귀니: 납작한 긴 면
- 푸실리: 나선형 면

소스에 따라 어울리는 면이 다르니 참고하세요!
크림소스는 펜네나 푸실리가 잘 어울립니다.`,
    date: Date.now(),
    writer: "푸드연구소",
    category: "정보",
    comment: [{
      id: 102,
      writer: "댓글러",
      content: "저도 같은 생각이에요!",
      date: new Date().getTime(),
    },]
  },

  {
    id: 4,
    title: "삼겹살에 소주 vs 맥주 뭐가 더 잘 어울릴까요?",
    content: `친구랑 토론 중입니다.
삼겹살엔 역시 소주 아닌가요?

근데 요즘은 하이볼이나 맥주도 많이 먹던데
여러분의 선택은?`,
    date: Date.now(),
    writer: "고기러버",
    category: "수다",
    comment:[]
  },




  {
    id: 5,
    title: "에어프라이어로 치킨 데울 때 바삭하게 하는 방법",
    content: `배달 치킨 남은 거 다음 날 데우면 눅눅해지잖아요.
에어프라이어 180도에서 5~7분 정도 돌리면
겉이 다시 살아납니다.

종이호일은 깔지 않는 게 더 바삭해요!`,
    date: Date.now(),
    writer: "자취요리왕",
    category: "정보",
    comment:[]
  },




  {
    id: 6,
    title: "라면에 이것 넣어본 사람 있나요?",
    content: `라면 끓일 때 치즈 말고도
우유 조금 넣으면 국물이 더 부드러워지더라고요.

혹시 다른 숨은 꿀조합 있으면 알려주세요!`,
    date: Date.now(),
    writer: "라면장인",
    category: "수다",
    comment:[]
  }
];
