import { NextPage } from '@/views/NextPage'
import { pageMetadata } from '@/i18n/metadata'

export const generateMetadata = async ({ params }: { params: Promise<{ lang: string }> }) =>
  pageMetadata((await params).lang, 'next')

export default function Page() {
  return <NextPage />
}
