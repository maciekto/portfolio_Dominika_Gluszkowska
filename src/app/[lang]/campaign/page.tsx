import { CampaignPage } from '@/views/CampaignPage'
import { pageMetadata } from '@/i18n/metadata'

export const generateMetadata = async ({ params }: { params: Promise<{ lang: string }> }) =>
  pageMetadata((await params).lang, 'campaign')

export default function Page() {
  return <CampaignPage />
}
