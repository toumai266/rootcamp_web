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
    title: '스터디 팀 목표 페이지',
    description: '스터디 팀의 목표를 정리한 페이지입니다.',
    url: 'https://www.notion.so/goormkdx/2-rootcamp-29cc0ff4ce3180acb3d6fe865114b721?source=copy_link',
    icon: '📚',
  },
  {
    id: 'study-notion',
    title: '스터디 팀 페이지',
    description: '매주 수요일 갱신하는 스터디 팀 페이지입니다.',
    url: 'https://www.notion.so/goormkdx/2-rootcamp-29cc0ff4ce3180ffaa1fce7df0f8cb38?source=copy_link',
    icon: '✍️',
  },
]

export const teamMembers: TeamMember[] = [
  {
    id: 'member1',
    name: '이수민',
    role: '팀장',
    bio: '공부하고 있습니다.공부하고 있습니다.공부하고 있습니다.공부하고 있습니다.',
    skills: ['Web Security', 'Python', 'Network'],
    avatar: 'https://i1.sndcdn.com/avatars-000515695992-xrb3sl-t500x500.jpg', // 이미지 URL 추가
    github: 'https://github.com',
    blog: 'https://blog.example.com',
  },
  {
    id: 'member2',
    name: '임정길',
    role: '팀원',
    bio: '공부하고 있습니다.공부하고 있습니다.공부하고 있습니다.공부하고 있습니다.',
    skills: ['Penetration Testing', 'Reversing', 'Forensics'],
    avatar: 'https://i1.sndcdn.com/avatars-000515695992-xrb3sl-t500x500.jpg', // 이미지 URL 추가
    github: 'https://github.com',
    blog: 'https://blog.example.com',
  },
  {
    id: 'member3',
    name: '김주하',
    role: '팀원',
    bio: '공부하고 있습니다.공부하고 있습니다.공부하고 있습니다.공부하고 있습니다.',
    skills: ['Backend', 'DevSecOps', 'Cloud Security'],
    avatar: 'https://i1.sndcdn.com/avatars-000515695992-xrb3sl-t500x500.jpg', // 이미지 URL 추가
    github: 'https://github.com',
    blog: 'https://blog.example.com',
  },
  {
    id: 'member4',
    name: '유희현',
    role: '팀원',
    bio: '공부하고 있습니다.공부하고 있습니다.공부하고 있습니다.공부하고 있습니다.',
    skills: ['Frontend', 'Web Security', 'React'],
    avatar: 'https://i1.sndcdn.com/avatars-000515695992-xrb3sl-t500x500.jpg', // 이미지 URL 추가
    github: 'https://github.com/toumai266',
    blog: 'https://blog.example.com',
  },
  {
    id: 'member5',
    name: '권준현',
    role: '팀원',
    bio: '공부하고 있습니다.공부하고 있습니다.공부하고 있습니다.공부하고 있습니다.',
    skills: ['System Security', 'Malware Analysis', 'Linux'],
    avatar: 'https://i1.sndcdn.com/avatars-000515695992-xrb3sl-t500x500.jpg', // 이미지 URL 추가
    github: 'https://github.com',
    blog: 'https://blog.example.com',
  },
]
