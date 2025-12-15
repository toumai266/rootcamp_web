
import { Career, FeaturedInfo } from './types';

// Deprecated: Data is now loaded from /api/career or careers.json
export const careers: Career[] = [];

export interface CommonSkill {
  name: string
  value: number
  category: string
}

export const commonSkills: CommonSkill[] = [
  { name: '네트워킹', value: 90, category: '기술' },
  { name: 'OS 이해', value: 85, category: '기술' },
  { name: '암호화', value: 75, category: '기술' },
  { name: 'Python', value: 80, category: '프로그래밍' },
  { name: 'Bash/PowerShell', value: 70, category: '프로그래밍' },
  { name: '문제 해결', value: 95, category: '소프트스킬' },
  { name: '커뮤니케이션', value: 85, category: '소프트스킬' },
  { name: '지속적 학습', value: 90, category: '소프트스킬' },
  { name: '보안 프레임워크', value: 70, category: '지식' },
  { name: '위협 인텔리전스', value: 75, category: '지식' },
  { name: '컴플라이언스', value: 65, category: '지식' },
  { name: '클라우드 보안', value: 80, category: '기술' },
]

export type { Career, FeaturedInfo };
