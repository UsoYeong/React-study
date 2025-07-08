// src/data/quizData.js
const quizData = [
  {
    id: 1,
    image: '/images/quiz1.png',
    question: '그림이 설명하는 신조어는?',
    options: ['점메추', '혼밥', '밥터디', '밥약'],
    answer: '점메추',
    meaning: '“점심 메뉴 추천”의 줄임말\n점심메뉴를 추천해 달라고\n할 때 쓰이는 표현',
    example: '“오늘 점심으로 뭘 먹을까?\n점메추 좀 해줘”',
    explanations: [
      '점심 메뉴 추천의 줄임말',
      '혼자 밥을 먹는 사람들을 지칭하는 신조어',
      '함께 밥을 먹을 사람들을 모아서 밥을 먹는 모임',
      '밥을 함께 먹자는 약속을 뜻하는 신조어',
    ],
  },
  // 다른 문제도 같은 방식으로...
  {
    id: 2,
    image: '/images/quiz2.png', // public/images 폴더에 넣기
    question: '그림이 설명하는 신조어는?',
    options: ['넥슨넥카엔', '네카라쿠베당토', '빅테삼', '삼엘하'],
    answer: '네카라쿠베당토',
    meaning: '네이버, 카카오, 라인, 쿠팡, 배달의민족, 당근마켓, 토스 를 의미. 국내 IT 대기업들을 줄여서 부르는 신조어',
    example: '요즘 컴공과 졸업하면 다들 네카라쿠베당토 목표로 준비하더라. 진짜 경쟁 치열함...',
    
  },

  {
    id: 3,
    image: '/images/quiz3.png',
    question: '그림이 설명하는 신조어는?',
    options: ['꾸안꾸', '스불재', '혼코노', '갑분싸'],
    answer: '스불재',
    meaning: '스스로 불러온 재앙이라는 뜻',
    example: '내가 괜히 말 꺼냈다가 스불재였어...',
}

];

export default quizData;
