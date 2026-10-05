import { EcommercePage } from '@/views/EcommercePage'
import { pageMetadata } from '@/i18n/metadata'

export const generateMetadata = async ({ params }: { params: Promise<{ lang: string }> }) =>
  pageMetadata((await params).lang, 'ecommerce')

export default function Page() {
  return <EcommercePage />
}
