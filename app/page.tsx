
import { getTeamMembers } from '@/lib/db'
import { notionLinks } from '@/data/team' // Notion links are still static/hardcoded for now
import HomeClient from '@/components/HomeClient'

// Force dynamic rendering to ensure fresh data on every request (since we are using fs)
export const dynamic = 'force-dynamic'

export default async function Home() {
  const teamMembers = await getTeamMembers()

  return (
    <HomeClient initialMembers={teamMembers} notionLinks={notionLinks} />
  )
}
