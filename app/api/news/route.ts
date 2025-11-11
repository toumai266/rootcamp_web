import { NextResponse } from 'next/server'
import Parser from 'rss-parser'

interface NewsItem {
  id: string
  title: string
  summary: string
  source: string
  date: string
  category: string
  link: string
}

// RSS 피드 URL들
const RSS_FEEDS = [
  {
    url: 'https://asec.ahnlab.com/ko/feed/',
    source: '안랩 ASEC',
  },
]

const parser = new Parser()

// 카테고리 매핑 함수
function getCategoryFromTags(categories: string[]): string {
  if (!categories || categories.length === 0) return '기타'
  
  const category = categories[0].toLowerCase()
  
  // 주요 카테고리 매핑
  if (category.includes('악성코드') || category.includes('malware')) return '악성코드'
  if (category.includes('랜섬웨어') || category.includes('ransomware')) return '랜섬웨어'
  if (category.includes('취약점') || category.includes('vulnerability')) return '취약점'
  if (category.includes('피싱') || category.includes('phishing')) return '피싱'
  if (category.includes('보안') || category.includes('security')) return '보안 동향'
  if (category.includes('정보유출') || category.includes('침해사고')) return '침해사고'
  
  return categories[0] // 첫 번째 카테고리 사용
}

export async function GET() {
  try {
    const newsItems: NewsItem[] = []
    let id = 1

    for (const feed of RSS_FEEDS) {
      try {
        const parsedFeed = await parser.parseURL(feed.url)

        // 각 피드에서 최대 20개의 아이템을 가져옴
        const items = parsedFeed.items.slice(0, 20)

        for (const item of items) {
          const newsItem: NewsItem = {
            id: `${id}`,
            title: item.title || '제목 없음',
            summary: item.contentSnippet || item.summary || '요약 없음',
            source: feed.source,
            date: item.pubDate
              ? new Date(item.pubDate).toISOString().split('T')[0]
              : new Date().toISOString().split('T')[0],
            category: getCategoryFromTags(item.categories || []),
            link: item.link || '#',
          }
          newsItems.push(newsItem)
          id++
        }
      } catch (error) {
        console.error(`Failed to parse ${feed.source}:`, error)
      }
    }

    return NextResponse.json({
      success: true,
      data: newsItems,
      count: newsItems.length,
    })
  } catch (error) {
    console.error('Error fetching news:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch news',
      },
      { status: 500 }
    )
  }
}
