
import { TeamMember, NotionLink } from './types';

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

// Deprecated: Data is now loaded from /api/member or team.json
export const teamMembers: TeamMember[] = [];
