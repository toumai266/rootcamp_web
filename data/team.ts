export interface TeamMember {
  id: string
  name: string
  role: string
  avatar?: string
  bio: string
  skills: string[]
  github?: string
  blog?: string
  email?: string
}

export interface NotionLink {
  id: string
  title: string
  description: string
  url: string
  icon: string
}

export const notionLinks: NotionLink[] = [
  {
    id: 'team-notion',
    title: '팀 노션 워크스페이스',
    description: '프로젝트 문서, 회의록, 학습 자료를 공유하는 팀 노션 페이지입니다.',
    url: '#',
    icon: '📚',
  },
  {
    id: 'study-notion',
    title: '스터디 노션',
    description: '정보보호 이론 및 실습 내용을 정리한 스터디 노션 페이지입니다.',
    url: '#',
    icon: '✍️',
  },
]

export const teamMembers: TeamMember[] = [
  {
    id: 'member1',
    name: '팀원 1',
    role: 'Team Leader',
    bio: '정보보호에 관심이 많은 개발자입니다. 웹 보안과 시스템 보안을 공부하고 있습니다.',
    skills: ['Web Security', 'Python', 'Network'],
    github: 'https://github.com',
    email: 'member1@example.com',
  },
  {
    id: 'member2',
    name: '팀원 2',
    role: 'Security Researcher',
    bio: '모의해킹과 취약점 분석에 관심이 많습니다. CTF 문제 풀이를 즐깁니다.',
    skills: ['Penetration Testing', 'Reversing', 'Forensics'],
    github: 'https://github.com',
    blog: 'https://blog.example.com',
  },
  {
    id: 'member3',
    name: '팀원 3',
    role: 'Backend Developer',
    bio: '안전한 백엔드 시스템 구축에 관심이 있습니다. DevSecOps를 공부하고 있습니다.',
    skills: ['Backend', 'DevSecOps', 'Cloud Security'],
    github: 'https://github.com',
    email: 'member3@example.com',
  },
  {
    id: 'member4',
    name: '팀원 4',
    role: 'Frontend Developer',
    bio: '프론트엔드 보안과 웹 접근성에 관심이 많습니다. 사용자 친화적인 UI/UX를 추구합니다.',
    skills: ['Frontend', 'Web Security', 'React'],
    github: 'https://github.com',
    blog: 'https://blog.example.com',
  },
  {
    id: 'member5',
    name: '팀원 5',
    role: 'System Security',
    bio: '시스템 보안과 악성코드 분석에 관심이 있습니다. Linux 환경에서의 보안을 연구합니다.',
    skills: ['System Security', 'Malware Analysis', 'Linux'],
    github: 'https://github.com',
    email: 'member5@example.com',
  },
]
