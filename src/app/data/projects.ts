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
    slug: 'availability',
    title: 'Availability',
    subtitle: 'CommandDot',
    summary: '정교한 일정 공유를 위한 텍스트 기반 인터페이스',
    description:
      'A Command Line Interface for sharing plain-text availability and scheduling meetings.',
    role: ['Founding Product Designer', 'Branding'],
    team: ['Zane Shannon, Founder', 'Nelson Ho, Engineer'],
    tools: ['Figma', 'Linear', 'Notion'],
    timeline: '2020–2021',
    image:
      'https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBzY3JlZW58ZW58MXx8fHwxNzY5ODQ1Nzc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    gallery: [
      'https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBzY3JlZW58ZW58MXx8fHwxNzY5ODQ1Nzc3fDA&ixlib=rb-4.1.0&q=80&w=1600',
      'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0aXZpdHklMjBhcHAfGVufDF8fHx8MTc2OTg0MjMzMHww&ixlib=rb-4.1.0&q=80&w=1600',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjB1aXxlbnwwfHx8fDE3Njk4NDIzMzB8MA&ixlib=rb-4.1.0&q=80&w=1600',
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjB3b3JrfGVufDF8fHx8MTc2OTg0MjMzMHww&ixlib=rb-4.1.0&q=80&w=1600',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBzY3JlZW58ZW58MHx8fHwxNzY5ODQyMzMwfDA&ixlib=rb-4.1.0&q=80&w=1600',
    ],
    caseStudyUrl: '#',
    liveUrl: '#',
    sections: [
      {
        title: 'Challenge',
        body: [
          'How might we create a way for people to share availability in plain-text format?',
          'We wanted the experience to be quick, friendly, and accessible from anywhere.',
        ],
        bullets: [
          'Generate plain-text availability from a set of rules',
          'Accessible anywhere on the computer at any time',
          'Scale to unrelated commands and actions',
        ],
      },
      {
        title: 'Constraints',
        body: [
          'Working as the only designer at an early-stage startup meant owning research, UX, and brand end-to-end.',
          'The team needed quick iterations while keeping the product cohesive and lightweight.',
        ],
      },
    ],
  },
  {
    id: 2,
    slug: 'take-out',
    title: 'Take-Out',
    subtitle: 'Trivia Delivery',
    summary: '게임형 경험을 곁들인 배달 앱 컨셉',
    description:
      'A gamified food delivery app concept that blends real-time trivia with ordering.',
    role: ['Product Design', 'Interaction Design'],
    team: ['Amari, PM', 'Jene, Engineer'],
    tools: ['Figma', 'After Effects'],
    timeline: '2022',
    image:
      'https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzY5ODA3MjUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    gallery: [
      'https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzY5ODA3MjUxfDA&ixlib=rb-4.1.0&q=80&w=1600',
      'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAfGVufDF8fHx8MTc2OTg0MjMzMHww&ixlib=rb-4.1.0&q=80&w=1600',
      'https://images.unsplash.com/photo-1506765515384-028b60a970df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjB1aXxlbnwwfHx8fDE3Njk4NDIzMzB8MA&ixlib=rb-4.1.0&q=80&w=1600',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHAlMjBzY3JlZW58ZW58MHx8fHwxNzY5ODQyMzMwfDA&ixlib=rb-4.1.0&q=80&w=1600',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB3b3JrfGVufDF8fHx8MTc2OTg0MjMzMHww&ixlib=rb-4.1.0&q=80&w=1600',
    ],
    caseStudyUrl: '#',
    liveUrl: '#',
    sections: [
      {
        title: 'Challenge',
        body: [
          'Make ordering feel more playful without slowing down the delivery flow.',
        ],
        bullets: [
          'Keep the trivia optional and rewarding',
          'Highlight restaurant rankings and progress',
          'Maintain a clear checkout path',
        ],
      },
      {
        title: 'Constraints',
        body: [
          'We needed to fit the experience into existing delivery behaviors and short attention spans.',
        ],
      },
    ],
  },
  {
    id: 3,
    slug: 'ecommerce-platform',
    title: 'E-커머스 플랫폼',
    subtitle: 'Commerce Suite',
    summary: '결제와 재고를 포함한 올인원 스토어',
    description:
      '풀스택 전자상거래 웹사이트로 결제 시스템, 재고 관리, 사용자 인증 기능을 포함합니다.',
    role: ['Full Stack Development', 'Design System'],
    team: ['Solo Project'],
    tools: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    timeline: '2023',
    image:
      'https://images.unsplash.com/photo-1577333715735-8fcb0359d906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwbW9ja3VwfGVufDF8fHx8MTc2OTg0MjMzMHww&ixlib=rb-4.1.0&q=80&w=1080',
    gallery: [
      'https://images.unsplash.com/photo-1577333715735-8fcb0359d906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwbW9ja3VwfGVufDF8fHx8MTc2OTg0MjMzMHww&ixlib=rb-4.1.0&q=80&w=1600',
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjZSUyMHN0b3JlfGVufDF8fHx8MTc2OTg0MjMzMHww&ixlib=rb-4.1.0&q=80&w=1600',
      'https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0JTIwdWl8ZW58MHx8fHwxNzY5ODQyMzMwfDA&ixlib=rb-4.1.0&q=80&w=1600',
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVja291dCUyMHNjcmVlbmF8ZW58MHx8fHwxNzY5ODQyMzMwfDA&ixlib=rb-4.1.0&q=80&w=1600',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB1aXxlbnwwfHx8fDE3Njk4NDIzMzB8MA&ixlib=rb-4.1.0&q=80&w=1600',
    ],
    caseStudyUrl: '#',
    liveUrl: '#',
    sections: [
      {
        title: 'Challenge',
        body: [
          '구매 전환율을 높이기 위해 신뢰와 속도를 동시에 설계했습니다.',
        ],
        bullets: ['간편 결제', '실시간 재고', '개인화 추천'],
      },
      {
        title: 'Constraints',
        body: [
          '소규모 팀으로 빠른 릴리즈가 필요해 모듈형 컴포넌트에 집중했습니다.',
        ],
      },
    ],
  },
];
