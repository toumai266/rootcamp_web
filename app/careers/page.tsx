
import { getCareers } from '@/lib/db'
import CareersClient from '@/components/CareersClient'

// Force dynamic rendering to ensure fresh data
export const dynamic = 'force-dynamic'

export default async function CareersPage() {
  const careers = await getCareers()

  return (
    <CareersClient initialCareers={careers} />
  )
}
