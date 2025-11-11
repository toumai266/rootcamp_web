import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'rootcamp - 구름톤 딥다이브 이론 2조',
  description: '구름톤 딥다이브 이론 2조 rootcamp입니다.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
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

