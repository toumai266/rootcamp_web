import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'rootcamp - 구름톤 딥다이브 이론 2조 학습 페이지',
  description: '구름톤 딥다이브 이론 2조 rootcamp의 학습 페이지입니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}

