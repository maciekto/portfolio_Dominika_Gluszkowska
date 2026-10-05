import { AiPage } from '@/views/AiPage'
import { pageMetadata } from '@/i18n/metadata'

export const generateMetadata = async ({ params }: { params: Promise<{ lang: string }> }) =>
  pageMetadata((await params).lang, 'ai')

export default function Page() {
  return <AiPage />
}
