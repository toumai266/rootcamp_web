'use client'

import { useState } from 'react'
import Modal from './Modal'
import { Career } from '@/data/careers'

interface CareerCardProps {
  career: Career
}

interface TooltipItemProps {
  item: { title: string; description?: string }
  style?: React.CSSProperties
}

function TooltipItem({ item, style }: TooltipItemProps) {
  const [showTooltip, setShowTooltip] = useState(false)
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0, align: 'center' as 'left' | 'center' | 'right', verticalAlign: 'top' as 'top' | 'bottom' })
  const itemTitle = typeof item === 'string' ? item : item.title

  const handleMouseEnter = (e: React.MouseEvent<HTMLSpanElement>) => {
    setShowTooltip(true)
    
    const element = e.currentTarget
    const rect = element.getBoundingClientRect()
    const spaceAbove = rect.top
    const spaceBelow = window.innerHeight - rect.bottom
    const windowWidth = window.innerWidth
    
    // 위/아래 위치 결정
    const verticalAlign = (spaceAbove < 150 && spaceBelow > spaceAbove) ? 'bottom' : 'top'
    
    // 좌/우 정렬 결정
    let align: 'left' | 'center' | 'right' = 'center'
    let left = rect.left + rect.width / 2
    
    // 왼쪽 공간 체크
    if (rect.left < 150) {
      align = 'left'
      left = rect.left
    }
    // 오른쪽 공간 체크
    else if (windowWidth - rect.right < 150) {
      align = 'right'
      left = rect.right
    }
    
    // 상단 위치 계산
    const top = verticalAlign === 'top' 
      ? rect.top - 8  // 툴팁이 위에 표시될 때
      : rect.bottom + 8  // 툴팁이 아래에 표시될 때
    
    setTooltipPosition({ top, left, align, verticalAlign })
  }

  const getTooltipStyle = () => {
    const { top, left, align, verticalAlign } = tooltipPosition
    
    let transform = ''
    if (align === 'center') {
      transform = verticalAlign === 'top' 
        ? 'translate(-50%, -100%)' 
        : 'translate(-50%, 0)'
    } else if (align === 'right') {
      transform = verticalAlign === 'top'
        ? 'translate(-100%, -100%)'
        : 'translate(-100%, 0)'
    } else {
      transform = verticalAlign === 'top'
        ? 'translate(0, -100%)'
        : 'translate(0, 0)'
    }
    
    return { top: `${top}px`, left: `${left}px`, transform }
  }

  const getArrowStyle = () => {
    const { align, verticalAlign } = tooltipPosition
    
    let positioning = {}
    if (align === 'left') {
      positioning = { left: '1rem' }
    } else if (align === 'right') {
      positioning = { right: '1rem' }
    } else {
      positioning = { left: '50%', transform: 'translateX(-50%)' }
    }
    
    if (verticalAlign === 'top') {
      return { ...positioning, bottom: '-6px', borderTop: '6px solid #1a1a1a' }
    } else {
      return { ...positioning, top: '-6px', borderBottom: '6px solid #1a1a1a' }
    }
  }

  return (
    <span
      style={{ position: 'relative', display: 'inline-block', ...style }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {itemTitle}
      {typeof item !== 'string' && item.description && showTooltip && (
        <div
          style={{
            position: 'fixed',
            ...getTooltipStyle(),
            padding: '0.75rem',
            backgroundColor: '#1a1a1a',
            color: '#ffffff',
            borderRadius: '6px',
            fontSize: '0.875rem',
            whiteSpace: 'normal',
            maxWidth: 'min(300px, 80vw)',
            width: 'max-content',
            zIndex: 10001,
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            pointerEvents: 'none',
            lineHeight: 1.4,
          }}
        >
          {item.description}
          <div
            style={{
              position: 'absolute',
              width: 0,
              height: 0,
              borderLeft: '6px solid transparent',
              borderRight: '6px solid transparent',
              ...getArrowStyle(),
            }}
          />
        </div>
      )}
    </span>
  )
}

export default function CareerCard({ career }: CareerCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        style={{
          padding: '1.5rem',
          backgroundColor: 'var(--bg-secondary)',
          borderRadius: '8px',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--card-shadow)',
          cursor: 'pointer',
          transition: 'all 0.2s',
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
        <h3
          style={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            marginBottom: '0.5rem',
            color: 'var(--primary-color)',
          }}
        >
          {career.title}
        </h3>
        <p
          style={{
            color: 'var(--text-light)',
            marginBottom: '1rem',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {career.description}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {career.skills.slice(0, 3).map((skill, index) => {
            const skillTitle = typeof skill === 'string' ? skill : skill.title
            return (
              <span
                key={index}
                style={{
                  padding: '0.25rem 0.75rem',
                  backgroundColor: 'var(--primary-color)',
                  color: '#ffffff',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                }}
              >
                {skillTitle}
              </span>
            )
          })}
          {career.skills.length > 3 && (
            <span
              style={{
                padding: '0.25rem 0.75rem',
                backgroundColor: 'var(--text-light)',
                color: '#ffffff',
                borderRadius: '4px',
                fontSize: '0.75rem',
              }}
            >
              +{career.skills.length - 3}
            </span>
          )}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={career.title}
      >
        <div>
          <p style={{ marginBottom: '1.5rem', lineHeight: 1.6 }}>
            {career.description}
          </p>

          <h3
            style={{
              fontSize: '1.125rem',
              fontWeight: 'bold',
              marginBottom: '0.75rem',
            }}
          >
            주요 업무
          </h3>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.25rem' }}>
            {career.responsibilities.map((resp, index) => (
              <li
                key={index}
                style={{ marginBottom: '0.5rem', color: 'var(--text-light)' }}
              >
                <TooltipItem item={resp} />
              </li>
            ))}
          </ul>

          <h3
            style={{
              fontSize: '1.125rem',
              fontWeight: 'bold',
              marginBottom: '0.75rem',
            }}
          >
            필요 스킬
          </h3>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              marginBottom: '1.5rem',
            }}
          >
            {career.skills.map((skill, index) => (
              <TooltipItem
                key={index}
                item={skill}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: 'var(--primary-color)',
                  color: '#ffffff',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  cursor: 'help',
                }}
              />
            ))}
          </div>

          {career.certifications && career.certifications.length > 0 && (
            <>
              <h3
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 'bold',
                  marginBottom: '0.75rem',
                }}
              >
                추천 자격증
              </h3>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1.5rem',
                }}
              >
                {career.certifications.map((cert, index) => (
                  <TooltipItem
                    key={index}
                    item={cert}
                    style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: 'var(--bg-color)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '6px',
                      fontSize: '0.875rem',
                      cursor: 'help',
                    }}
                  />
                ))}
              </div>
            </>
          )}

          {career.careerPaths && career.careerPaths.length > 0 && (
            <>
              <h3
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 'bold',
                  marginBottom: '0.75rem',
                }}
              >
                커리어 방향
              </h3>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                }}
              >
                {career.careerPaths.map((path, index) => (
                  <TooltipItem
                    key={index}
                    item={path}
                    style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: 'var(--bg-color)',
                      border: '1px solid var(--primary-color)',
                      borderRadius: '6px',
                      fontSize: '0.875rem',
                      color: 'var(--primary-color)',
                      cursor: 'help',
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </Modal>
    </>
  )
}
