export type ProjectSection = {
  title: string;
  body: string[];
  bullets?: string[];
};

export type Project = {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  description: string;
  role: string[];
  team: string[];
  tools: string[];
  timeline: string;
  image: string;
  gallery: string[];
  caseStudyUrl?: string;
  liveUrl?: string;
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    id: 1,
    slug: 'qed-cms',
    title: 'QED CMS',
    subtitle: 'QED',
    summary: '골프 시뮬레이터 운영을 위한 통합 관리 시스템',
    description:
      '스크린 골프 매장 운영을 위한 통합 CMS 플랫폼으로, 회원권 관리부터 장비 제어, 결제, 정산, 예약 운영까지 매장 운영 전반을 디지털화한 서비스입니다.',
    role: ['Backend Developer'],
    team: [],
    tools: ['Java', 'Spring Boot', 'MySQL', 'Redis', 'AWS', 'Docker', 'Jenkins', 'JWT'],
    timeline: '2023–2025',
    image: '/logos/qed logo.png',
    gallery: [
      'https://qedgolf.com/img/common/main_sec2_img1.jpg',
      'https://qedgolf.com/img/common/main_sec2_img3.jpg',
      'https://qedgolf.com/img/common/main_sec2_img4-2_new.jpg',
      'https://qedgolf.com/img/common/main_sec2_img1.jpg',
      'https://qedgolf.com/img/common/main_sec2_img3.jpg',
    ],
    caseStudyUrl: '#',
    liveUrl: 'https://qedgolf.com',
    sections: [
      {
        title: 'Role',
        body: ['백엔드 개발 및 운영 전반 담당'],
      },
      {
        title: 'Responsibilities',
        body: [],
        bullets: [
          '골프 매장 및 장비 관리 시스템 설계 및 개발',
          '펌뱅킹 연동을 통한 자동 결제 및 장비 활성화/비활성화 기능 구현',
          '회원권 및 정기 구독 관리 시스템 개발',
          '일 마감 및 다중 날짜 정산 로직 설계',
          'JWT 인증 및 권한(RBAC) 시스템 구축',
          'Redis 캐시를 활용한 성능 개선',
        ],
      },
      {
        title: 'Achievements',
        body: [],
        bullets: [
          '수동 관리 프로세스를 자동화하여 운영 효율 75% 향상',
          '통계 캐싱 도입으로 조회 속도를 3초 → 밀리초(ms) 단위로 개선',
          '안정적인 권한 관리 체계 구축으로 서비스 신뢰성 향상',
        ],
      },
    ],
  },
  {
    id: 2,
    slug: 'qed-propage',
    title: 'QED Propage',
    subtitle: 'QED',
    summary: '골프 프로 코치를 위한 예약·고객 관리 플랫폼',
    description:
      '골프 프로를 위한 예약 및 출석 관리 플랫폼으로, 레슨 일정 관리와 회원 관리를 효율적으로 지원하는 서비스입니다.',
    role: ['Backend Developer'],
    team: [],
    tools: ['Java', 'Spring Boot', '.NET', 'MySQL', 'AWS', 'REST API'],
    timeline: '2023–2025',
    image: '/logos/qed logo.png',
    gallery: [
      'https://qedgolf.com/img/common/main_sec2_img4-2_new.jpg',
      'https://qedgolf.com/img/common/main_sec2_img1.jpg',
      'https://qedgolf.com/img/common/main_sec2_img3.jpg',
      'https://qedgolf.com/img/common/main_sec2_img4-2_new.jpg',
      'https://qedgolf.com/img/common/main_sec2_img1.jpg',
    ],
    caseStudyUrl: '#',
    liveUrl: 'https://qedgolf.com',
    sections: [
      {
        title: 'Role',
        body: ['백엔드 개발 및 API 설계'],
      },
      {
        title: 'Responsibilities',
        body: [],
        bullets: [
          '골프 프로 전용 예약 및 출석 관리 기능 개발',
          '실시간 예약 상태 관리 기능 구현',
          '캘린더 기반 일정 동기화 기능 개발',
          'CMS와 클라이언트 애플리케이션 간 API 설계',
          '데이터 검증 및 상태 관리 로직 구축',
        ],
      },
      {
        title: 'Achievements',
        body: [],
        bullets: [
          '예약 및 출석 관리 자동화를 통해 운영 편의성 향상',
          '일정 동기화를 통해 스케줄 정확도 개선',
          '데이터 정합성과 사용자 경험 향상',
        ],
      },
    ],
  },
  {
    id: 3,
    slug: 'innisfree-global',
    title: 'Innisfree Global',
    subtitle: 'Innisfree',
    summary: '12개국 다국어 글로벌 멤버십 사이트',
    description:
      '12개국 이상에서 운영되는 글로벌 이니스프리 웹사이트 리뉴얼 프로젝트로, 국가별 운영 환경과 다국어 콘텐츠를 지원하는 글로벌 커머스 플랫폼입니다.',
    role: ['Backend Developer'],
    team: [],
    tools: ['Java', 'Spring Framework', 'MySQL', 'AWS EC2', 'Jenkins', 'Git', 'JavaScript'],
    timeline: '2020–2021',
    image: '/logos/Innisfree-Logo.png',
    gallery: [
      'https://us.innisfree.com/cdn/shop/files/01_IF_GT-HC_Packshot_2024_01_1080x1080_60c0b92c-41a4-417a-8995-6b86728bee2f.jpg',
      'https://us.innisfree.com/cdn/shop/files/01_IF_GT-CF_Packshot_2024_01_1080x1080_daa6d2d0-d10c-4a1e-9a79-288ac1fa1fa1_1.jpg',
      'https://us.innisfree.com/cdn/shop/files/01_FullSize_IF_SUN-DUV50-50ml_Packshot_2025_02.jpg',
      'https://us.innisfree.com/cdn/shop/files/01_IF_R-PDRN-EL-Packshot_15ml_2025_011080x1080_1_cb50e374-d65a-4c6a-8aca-daf9284d589b.jpg',
      'https://us.innisfree.com/cdn/shop/files/1IF_GT-VCMF-120g_Packshot_2025_01_1080x1080_30af883a-51dd-48c2-9662-ebc612cf77aa.jpg',
    ],
    caseStudyUrl: '#',
    liveUrl: 'https://us.innisfree.com',
    sections: [
      {
        title: 'Role',
        body: ['백엔드 개발 및 글로벌 서비스 운영 지원'],
      },
      {
        title: 'Responsibilities',
        body: [],
        bullets: [
          '국가별 서버 및 다국어 운영 환경 구축',
          '상품, 결제, SNS 연동 API 개발',
          '보안 취약점 개선 및 인증 시스템 강화',
          'Jenkins 기반 CI/CD 환경 구축',
          '글로벌 마케팅 시스템 연동',
        ],
      },
      {
        title: 'Achievements',
        body: [],
        bullets: [
          '침투 테스트에서 발견된 100개 이상의 보안 취약점 개선',
          '자동 배포 환경 구축으로 배포 효율 향상',
          '국가별 서비스 운영 안정성 확보',
        ],
      },
    ],
  },
  {
    id: 4,
    slug: 'aestura',
    title: 'Aestura',
    subtitle: 'Aestura',
    summary: '더마 코스메틱 브랜드 이커머스 개발',
    description:
      '아모레퍼시픽 에스트라 브랜드 웹사이트 구축 및 운영 프로젝트로, 초기 서비스 안정화와 커머스 연동 기능을 담당했습니다.',
    role: ['Backend Developer'],
    team: [],
    tools: ['Java', 'Spring Framework', 'MySQL', 'AWS EC2', 'REST API'],
    timeline: '2019–2020',
    image: '/logos/aestura.png',
    gallery: [
      'https://int.aestura.com/cdn/shop/files/1_Atobarrier365-Cream_thumbnail_Product-80ml__1200x1200_123c2594-5b22-4bc6-8944-fa8fae89af91.png',
      'https://int.aestura.com/cdn/shop/files/1_Atobarrier365-Lotion_thumbnail_Product-150ml__1200x1200_9cf1ac05-1ca7-4cc5-98de-66de524610e0.png',
      'https://int.aestura.com/cdn/shop/files/1_Atobarrier365-Hydro-Soothing-Cream_thumbnail_Product-60ml__1200x1200_77f0411d-baf9-46fa-8e42-2a8d9d02bfcf.png',
      'https://int.aestura.com/cdn/shop/files/1_Atobarrier365-Hydro_Cera-Ha_Serum_thumbnail_Product-30ml__1200x1200_7bf13f48-d304-4631-8224-f835bbb52e25.png',
      'https://int.aestura.com/cdn/shop/files/1_Atobarrier365-Cream_thumbnail_Product-80ml__1200x1200_961c8e7e-0afb-48bd-bea7-d47f285ab4d4.png',
    ],
    caseStudyUrl: '#',
    liveUrl: 'https://www.aestura.com/web/main.do',
    sections: [
      {
        title: 'Role',
        body: ['백엔드 개발 및 서비스 안정화'],
      },
      {
        title: 'Responsibilities',
        body: [],
        bullets: [
          '레거시 백엔드 시스템 안정화',
          'API 및 데이터베이스 성능 이슈 분석 및 개선',
          '비즈니스 로직 리팩토링',
          '로그 및 예외 처리 체계 구축',
          'SNS 및 커머스 연동 프로세스 개선',
        ],
      },
      {
        title: 'Achievements',
        body: [],
        bullets: [
          '서비스 가동 안정성 60% 향상',
          'SNS 및 커머스 연동 최적화를 통해 API 성능 40% 향상',
          '장애 대응 시간 단축 및 유지보수성 개선',
        ],
      },
    ],
  },
];
