'use client'

import { Website } from '@/data/websites'

interface WebsiteCardProps {
  website: Website
}

export default function WebsiteCard({ website }: WebsiteCardProps) {
  return (
    <a
      href={website.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'block',
        padding: '1.5rem',
        backgroundColor: 'var(--bg-secondary)',
        borderRadius: '8px',
        border: '1px solid var(--border-color)',
        boxShadow: 'var(--card-shadow)',
        cursor: 'pointer',
        transition: 'all 0.2s',
        textDecoration: 'none',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'var(--card-shadow)'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'start',
          marginBottom: '0.75rem',
        }}
      >
        <h3
          style={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            color: 'var(--primary-color)',
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span>{website.title}</span>
          <span style={{ fontSize: '1rem' }}>{website.country}</span>
        </h3>
        <span
          style={{
            fontSize: '1.25rem',
            opacity: 0.6,
            marginLeft: '0.5rem',
          }}
        >
          🔗
        </span>
      </div>
      
      <p
        style={{
          color: 'var(--text-light)',
          marginBottom: '1rem',
          lineHeight: 1.6,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
        }}
      >
        {website.description}
      </p>

      {website.tags && website.tags.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {website.tags.map((tag, index) => (
            <span
              key={index}
              style={{
                padding: '0.25rem 0.75rem',
                backgroundColor: 'var(--bg-color)',
                border: '1px solid var(--border-color)',
                borderRadius: '4px',
                fontSize: '0.75rem',
                color: 'var(--text-light)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </a>
  )
}
