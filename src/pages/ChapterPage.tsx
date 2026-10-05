import type { ReactNode } from 'react'
import { chapters, type ChapterKey } from '../data/chapters'
import { PageIntro } from '../components/PageIntro'
import { NextChapterLink } from '../components/NextChapterLink'

/** Wspólny szkielet podstrony: wstęp, treść, link do kolejnego rozdziału. */
export const ChapterPage = ({ chapterKey, tone, children }: { chapterKey: ChapterKey; tone?: string; children: ReactNode }) => {
  const chapter = chapters.find((c) => c.key === chapterKey)!
  return (
    <main className="overflow-hidden">
      <PageIntro chapter={chapter} tone={tone} />
      {children}
      <NextChapterLink current={chapterKey} />
    </main>
  )
}
