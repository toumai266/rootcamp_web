'use client'

import { ReactNode, useState } from 'react'
import { FeaturedInfo } from '@/data/careers'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
  featured?: FeaturedInfo[]
}

function FeaturedAccordion({ featured }: { featured: FeaturedInfo[] }) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  const names = featured.map(f => f.name).join(', ')

  return (
    <div style={{ marginBottom: '2rem' }}>
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%)',
          border: '1px solid rgba(102, 126, 234, 0.3)',
          borderRadius: '12px',
          overflow: 'hidden',
          backgroundColor: 'var(--bg-secondary)',
        }}
      >
        <div
          onClick={() => toggleAccordion(0)}
          style={{
            padding: '1.25rem 1.5rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(102, 126, 234, 0.05)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0rem' }}>
            <span style={{ fontSize: '1.2rem' }}>💡</span>
            <h3
              style={{
                fontSize: '1.2rem',
                fontWeight: 'bold',
                margin: 0,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {names}님이 이 직무에 관심 있어요!
            </h3>
          </div>
          <span
            style={{
              fontSize: '1.25rem',
              transition: 'transform 0.2s',
              transform: expandedIndex === 0 ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          >
            ▼
          </span>
        </div>

        {expandedIndex === 0 && (
          <div
            style={{
              borderTop: '1px solid rgba(102, 126, 234, 0.2)',
              animation: 'slideDown 0.3s ease-out',
            }}
          >
            {featured.map((featuredInfo, idx) => (
              <div
                key={idx}
                style={{
                  padding: '1.5rem',
                  borderTop: idx > 0 ? '1px solid rgba(102, 126, 234, 0.15)' : 'none',
                }}
              >
                <h4
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    margin: 0,
                    marginBottom: '1rem',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {featuredInfo.name}님이 생각하는 이 직무의 매력은?
                </h4>

                <p
                  style={{
                    lineHeight: 1.7,
                    color: 'var(--text-color)',
                    margin: 0,
                    marginBottom: featuredInfo.learning.length > 0 ? '1.25rem' : '0',
                    fontSize: '0.95rem',
                  }}
                >
                  {featuredInfo.reason}
                </p>

                {featuredInfo.learning.length > 0 && (
                  <div>
                    <h5
                      style={{
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        color: 'var(--text-color)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        margin: '0 0 0.75rem 0',
                      }}
                    >
                      <span style={{ fontSize: '1.1rem' }}>📚</span>
                      <span>{featuredInfo.name}님은 이런 노력을 하고 있어요!</span>
                    </h5>
                    <ul
                      style={{
                        margin: 0,
                        paddingLeft: '1.25rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem',
                      }}
                    >
                      {featuredInfo.learning.map((item, index) => (
                        <li
                          key={index}
                          style={{
                            color: 'var(--text-color)',
                            fontSize: '0.9rem',
                            lineHeight: 1.6,
                          }}
                        >
                          {item.link ? (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                color: '#5a67d8',
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.25rem',
                                transition: 'all 0.2s',
                                fontWeight: '500',
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.color = '#667eea'
                                e.currentTarget.style.textDecoration = 'underline'
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.color = '#5a67d8'
                                e.currentTarget.style.textDecoration = 'none'
                              }}
                            >
                              {item.text}
                              <span style={{ fontSize: '0.75rem' }}>🔗</span>
                            </a>
                          ) : (
                            <span>{item.text}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Modal({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  featured
}: ModalProps) {
  if (!isOpen) return null
  const hasFeatured = featured && featured.length > 0

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '2rem',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'var(--bg-color)',
          borderRadius: '12px',
          maxWidth: '900px',
          width: '100%',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          border: '1px solid var(--border-color)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {hasFeatured && (
          <div
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              padding: '0.5rem 2.5rem 0.5rem 1.5rem',
              fontSize: '0.875rem',
              fontWeight: 'bold',
              boxShadow: '0 2px 8px rgba(130, 142, 197, 0.4)',
              clipPath: 'polygon(0 0, 100% 0, calc(100% - 1rem) 100%, 0% 100%)',
              zIndex: 2,
            }}
          >
            ⭐ {featured!.length === 1 
              ? `팀원 중 ${featured![0].name}님이 관심 있어요`
              : `팀원 중 ${featured!.length}명이 관심 있어요`}
          </div>
        )}
        <div
          style={{
            position: 'sticky',
            top: 0,
            backgroundColor: 'var(--bg-color)',
            borderBottom: '1px solid var(--border-color)',
            padding: '2rem',
            paddingTop: hasFeatured ? '3rem' : '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 1,
            borderTopLeftRadius: '12px',
            borderTopRightRadius: '12px',
          }}
        >
          <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', margin: 0 }}>
            {title}
          </h2>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '2rem',
              cursor: 'pointer',
              color: 'var(--text-color)',
              padding: '0.25rem',
              lineHeight: 1,
              opacity: 0.6,
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.6')}
            aria-label="닫기"
          >
            ✕
          </button>
        </div>
        <div 
          style={{ 
            padding: '2rem',
            overflowY: 'auto',
            flex: 1,
          }}
        >
          {hasFeatured && <FeaturedAccordion featured={featured!} />}
          {children}
        </div>
      </div>
    </div>
  )
}
