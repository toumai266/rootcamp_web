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
    bio: '세상에 완벽한 보안은 없지만, 완벽에 가까워지기 위해 노력하며 문제의 원인을 찾고 해결책을 제시하는 과정에서 보람을 느낍니다. 끊임없이 배우며 신뢰할 수 있는 보안 컨설턴트로 성장하겠습니다!',
    skills: ['Web Security', 'Python', 'Secure coding', 'Communication'],
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
    bio: '많은 사람들이 즐길 수 있는 안전한 서비스를 만드는 데 관심이 많습니다. 팀 문화를 구성하거나 지식의 격차를 해소하는 데에도 관심이 많습니다.',
    skills: ['Pentest', 'Web Security', 'React', 'Python', 'Ai', 'Book Editor'],
    avatar: 'https://i1.sndcdn.com/avatars-000515695992-xrb3sl-t500x500.jpg', // 이미지 URL 추가
    github: 'https://github.com/toumai266',
    blog: 'https://www.notion.so/snaac/29d42dccc51e8074bbc7ccacb1f68f6e?source=copy_link',
  },
  {
    id: 'member5',
    name: '권준현',
    role: '팀원',
    bio: '남녀노소 모두가 안전한 세상을 꿈꾸고 있습니다. 아직은 미숙한 햇병아리에 불과하지만 지식과 실력을 모두 길러 뉴스에서 보안 사고가 나오지 않을 그 날을 위해 노력하겠습니다.',
    skills: ['System Security', 'Malware Analysis', 'Linux'],
    avatar: 'https://i1.sndcdn.com/avatars-000515695992-xrb3sl-t500x500.jpg', // 이미지 URL 추가
    github: 'https://github.com',
    blog: 'https://blog.example.com',
  },
]
