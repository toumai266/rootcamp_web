'use client'

import { useEffect, useState } from 'react'

interface NewsItem {
  id: string
  title: string
  summary: string
  source: string
  date: string
  category: string
  link: string
}

interface NewsSectionProps {
  selectedCategory: string
}

export default function NewsSection({ selectedCategory }: NewsSectionProps) {
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/news')
        if (!response.ok) {
          throw new Error('Failed to fetch news')
        }
        const data = await response.json()
        setNews(data.data || [])
        setError(null)
      } catch (err) {
        console.error('Error fetching news:', err)
        setError('뉴스를 불러올 수 없습니다.')
        setNews([])
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  const filteredNews = news.filter((newsItem) => {
    return selectedCategory === '전체' || newsItem.category === selectedCategory
  })

  return (
    <section>
      {/* 뉴스 목록 */}
      <div
        style={{
          display: 'grid',
          gap: '1.5rem',
        }}
      >
        {loading ? (
          <p style={{ textAlign: 'center', color: 'var(--text-light)', padding: '2rem' }}>
            뉴스를 불러오는 중...
          </p>
        ) : error ? (
          <p style={{ textAlign: 'center', color: 'red', padding: '2rem' }}>
            {error}
          </p>
        ) : filteredNews.length > 0 ? (
          filteredNews.map((news) => (
            <article
              key={news.id}
              style={{
                padding: '1.5rem',
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--card-shadow)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'start',
                  marginBottom: '0.5rem',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem',
                    flex: 1,
                  }}
                >
                  <a
                    href={news.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--primary-color)' }}
                  >
                    {news.title}
                  </a>
                </h3>
                <span
                  style={{
                    padding: '0.25rem 0.75rem',
                    backgroundColor: 'var(--primary-color)',
                    color: '#ffffff',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    flexShrink: 0,
                    marginLeft: '1rem',
                  }}
                >
                  {news.category}
                </span>
              </div>
              <p style={{ 
                color: 'var(--text-light)', 
                marginBottom: '1rem',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 1,
                WebkitBoxOrient: 'vertical',
              }}>
                {news.summary}
              </p>
              <div
                style={{
                  display: 'flex',
                  gap: '1rem',
                  fontSize: '0.875rem',
                  color: 'var(--text-light)',
                }}
              >
                <span>출처: {news.source}</span>
                <span>날짜: {news.date}</span>
              </div>
            </article>
          ))
        ) : (
          <p style={{ textAlign: 'center', color: 'var(--text-light)', padding: '2rem' }}>
            뉴스가 없습니다.
          </p>
        )}
      </div>
    </section>
  )
}

