
import { getTeamMembers } from '@/lib/db'
import { notionLinks } from '@/data/team' // Notion links are still static/hardcoded for now
import HomeClient from '@/components/HomeClient'

// ISR: 7일 캐싱 (편집 시 On-demand Revalidation으로 즉시 반영)
export const revalidate = 604800

export default async function Home() {
  const teamMembers = await getTeamMembers()

  return (
    <HomeClient initialMembers={teamMembers} notionLinks={notionLinks} />
  )
}
