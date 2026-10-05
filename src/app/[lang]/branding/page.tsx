import { BrandingPage } from '@/views/BrandingPage'
import { pageMetadata } from '@/i18n/metadata'

export const generateMetadata = async ({ params }: { params: Promise<{ lang: string }> }) =>
  pageMetadata((await params).lang, 'branding')

export default function Page() {
  return <BrandingPage />
}
