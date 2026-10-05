import { HomePage } from '@/views/HomePage'
import { pageMetadata } from '@/i18n/metadata'

export const generateMetadata = async ({ params }: { params: Promise<{ lang: string }> }) =>
  pageMetadata((await params).lang)

export default function Page() {
  return <HomePage />
}
