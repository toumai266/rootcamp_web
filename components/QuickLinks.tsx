'use client'

import Link from 'next/link'

export default function QuickLinks() {
  const links = [
    {
      title: '진로 탐색',
      description: '정보보호 분야 진로별 필요 기술 정보',
      href: '/careers',
      color: '#2563eb',
    },
    {
      title: '유용한 사이트',
      description: '정부기관, 학습 사이트, 웹진/블로그 모음',
      href: '/websites',
      color: '#059669',
    },
  ]

  return (
    <section style={{ marginBottom: '3rem' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              display: 'block',
              padding: '1.5rem',
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: '8px',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--card-shadow)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = 'var(--card-shadow-hover)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'var(--card-shadow)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                marginBottom: '0.5rem',
                color: link.color,
              }}
            >
              {link.title}
            </h3>
            <p style={{ color: 'var(--text-light)', fontSize: '0.875rem' }}>
              {link.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}

