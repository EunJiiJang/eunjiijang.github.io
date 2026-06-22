export type Experience = {
  id: number;
  period: string;
  company: string;
  role: string;
  description: string;
  url: string;
  color: string;
  logo: string;
};

export const experiences: Experience[] = [
  {
    id: 1,
    period: '2023 — 2025',
    company: 'QED',
    role: 'Software Engineer',
    description: '골프 서비스 프론트엔드 개발',
    url: 'https://qedgolf.com',
    color: '#1C1C1C',
    logo: '/logos/qed logo.png',
  },
  {
    id: 2,
    period: '2023 — 2025',
    company: 'Creatz',
    role: 'Software Engineer',
    description: '스포츠 시뮬레이터 서비스 개발',
    url: 'https://www.mycreatz.com/main/main',
    color: '#1A3A6E',
    logo: '/logos/creatz.png',
  },
  {
    id: 3,
    period: '2019 — 2020',
    company: 'Aestura',
    role: 'Software Engineer',
    description: '뷰티 이커머스 프론트엔드 개발',
    url: 'https://www.aestura.com/web/main.do',
    color: '#005BAC',
    logo: '/logos/aestura.png',
  },
  {
    id: 4,
    period: '2020 — 2021',
    company: 'Innisfree Global',
    role: 'Software Engineer',
    description: '글로벌 뷰티 브랜드 웹 개발',
    url: 'https://us.innisfree.com',
    color: '#00B466',
    logo: '/logos/Innisfree-Logo.png',
  },
];
