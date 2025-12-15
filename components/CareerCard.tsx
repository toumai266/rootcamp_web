
'use client'

import { useState, useEffect } from 'react'
import Modal from './Modal'
import { Career, FeaturedInfo } from '@/data/types'

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

function EditInterestModal({
  isOpen,
  onClose,
  careerId,
  initialData
}: {
  isOpen: boolean,
  onClose: () => void,
  careerId: string,
  initialData: FeaturedInfo
}) {
  const [reason, setReason] = useState(initialData.reason)
  const [learnings, setLearnings] = useState(initialData.learning)
  const [isSaving, setIsSaving] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  if (!isOpen) return null

  const handleAddLearning = () => {
    setLearnings([...learnings, { text: '' }])
  }

  const handleLearningChange = (index: number, field: 'text' | 'link', value: string) => {
    const newLearnings = [...learnings]
    newLearnings[index] = { ...newLearnings[index], [field]: value }
    setLearnings(newLearnings)
  }

  const handleRemoveLearning = (index: number) => {
    setLearnings(learnings.filter((_, i) => i !== index))
  }

  const handleSave = async () => {
    setIsSaving(true)
    try {
      const updatedInfo: FeaturedInfo = {
        name: initialData.name,
        reason: reason,
        learning: learnings.filter(l => l.text.trim() !== '')
      }

      const res = await fetch('/api/career/featured', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jobId: careerId, featuredInfo: updatedInfo })
      })

      if (res.ok) {
        onClose()
        window.location.reload()
      } else {
        alert('저장 실패')
      }
    } catch (e) {
      alert('오류 발생')
    } finally {
      setIsSaving(false)
    }
  }

  const handleDelete = async () => {
    if (!confirm('정말로 이 관심사를 삭제하시겠습니까?')) return

    setIsDeleting(true)
    try {
      const res = await fetch('/api/career/featured', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jobId: careerId, name: initialData.name })
      })

      if (res.ok) {
        onClose()
        window.location.reload()
      } else {
        alert('삭제 실패')
      }
    } catch (e) {
      alert('오류 발생')
    } finally {
      setIsDeleting(false)
    }
  }

  // Check if it's an existing record (has content) to show delete button
  const isExisting = initialData.reason || initialData.learning.length > 0;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3000
    }}>
      <div style={{
        backgroundColor: 'white', padding: '2rem', borderRadius: '8px', width: '90%', maxWidth: '500px',
        maxHeight: '90vh', overflowY: 'auto'
      }}>
        <h3 style={{ marginBottom: '1rem', fontWeight: 'bold' }}>내 관심사 {isExisting ? '수정' : '등록'}</h3>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>이 직무에 관심있는 이유</label>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            rows={3}
            style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>현재 하고 있는 노력</label>
          {learnings.map((l, idx) => (
            <div key={idx} style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <input
                  placeholder="내용 (예: 보안 기사 공부)"
                  value={l.text}
                  onChange={(e) => handleLearningChange(idx, 'text', e.target.value)}
                  style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px', marginBottom: '0.2rem' }}
                />
                <input
                  placeholder="링크 (선택사항)"
                  value={l.link || ''}
                  onChange={(e) => handleLearningChange(idx, 'link', e.target.value)}
                  style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px', fontSize: '0.8rem' }}
                />
              </div>
              <button onClick={() => handleRemoveLearning(idx)} style={{ background: '#ff4444', color: 'white', border: 'none', padding: '0.2rem 0.5rem', borderRadius: '4px', cursor: 'pointer' }}>삭제</button>
            </div>
          ))}
          <button onClick={handleAddLearning} style={{ background: '#eee', padding: '0.5rem', border: 'none', borderRadius: '4px', cursor: 'pointer', width: '100%' }}>+ 항목 추가</button>
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
          <button onClick={handleSave} disabled={isSaving || isDeleting} style={{ flex: 1, background: 'var(--primary-color)', color: 'white', padding: '0.75rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            {isSaving ? '저장 중...' : '저장'}
          </button>
          {isExisting && (
            <button onClick={handleDelete} disabled={isSaving || isDeleting} style={{ flex: 0.5, background: '#d9534f', color: 'white', padding: '0.75rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              {isDeleting ? '...' : '삭제'}
            </button>
          )}
          <button onClick={onClose} style={{ flex: 0.5, background: '#ccc', color: 'black', padding: '0.75rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>취소</button>
        </div>
      </div>
    </div>
  )
}

export default function CareerCard({ career }: CareerCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState<string | null>(null)
  const [isEditInterestOpen, setIsEditInterestOpen] = useState(false)

  const hasFeatured = career.featured && career.featured.length > 0

  // 타이틀에서 한글과 영문 분리
  const titleMatch = career.title.match(/^(.+?)\s*\((.+)\)$/)
  const koreanTitle = titleMatch ? titleMatch[1] : career.title
  const englishTitle = titleMatch ? titleMatch[2] : null

  useEffect(() => {
    const stored = localStorage.getItem('rootcamp_user')
    if (stored) {
      setCurrentUser(JSON.parse(stored).name)
    }
  }, [])

  const myInterest = career.featured?.find(f => f.name === currentUser)

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        style={{
          position: 'relative',
          padding: '1.5rem',
          backgroundColor: 'var(--bg-secondary)',
          borderRadius: '8px',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--card-shadow)',
          cursor: 'pointer',
          transition: 'all 0.2s',
          overflow: 'hidden',
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
        {/* 상단 배경 라인 */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2rem',
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%)',
            borderBottom: '1px solid rgba(102, 126, 234, 0.15)',
          }}
        />
        {hasFeatured && (
          <div
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              padding: '0.5rem 2rem 0.5rem 0.75rem',
              fontSize: '0.7rem',
              fontWeight: 'bold',
              boxShadow: '0 2px 8px rgba(102, 126, 234, 0.4)',
              clipPath: 'polygon(0 0, 100% 0, calc(100% - 0.75rem) 100%, 0% 100%)',
              zIndex: 2,
            }}
          >
            ⭐ {career.featured!.length === 1
              ? `팀원 중 ${career.featured![0].name}님이 관심 있어요`
              : `팀원 중 ${career.featured!.length}명이 관심 있어요`}
          </div>
        )}
        {englishTitle && (
          <div
            style={{
              position: 'absolute',
              top: '0.5rem',
              right: '0.5rem',
              fontSize: '0.8rem',
              color: 'var(--text-light)',
              opacity: 0.7,
              textAlign: 'right',
              lineHeight: 1.3,
              maxWidth: '45%',
              fontWeight: '500',
              zIndex: 1,
            }}
          >
            {englishTitle}
          </div>
        )}
        <h3
          style={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            marginBottom: '0.5rem',
            color: 'var(--primary-color)',
            marginTop: '1.75rem',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {koreanTitle}
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
        featured={career.featured}
      >
        <div>
          {currentUser && (
            <div style={{ marginBottom: '2rem', padding: '1rem', background: '#f5f5f5', borderRadius: '8px', border: '1px dashed #aaa' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontWeight: 'bold' }}>{currentUser}</span>님의 관심사
                  {myInterest ? ' (등록됨)' : ' (미등록)'}
                </div>
                <button
                  onClick={() => setIsEditInterestOpen(true)}
                  style={{
                    background: 'white', border: '1px solid var(--primary-color)', color: 'var(--primary-color)',
                    padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer', fontSize: '0.9rem'
                  }}
                >
                  {myInterest ? '수정하기' : '나도 관심있어요!'}
                </button>
              </div>
              {myInterest && (
                <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#666' }}>{myInterest.reason}</p>
              )}
            </div>
          )}

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

      {/* Edit Interest Modal */}
      {currentUser && (
        <EditInterestModal
          isOpen={isEditInterestOpen}
          onClose={() => setIsEditInterestOpen(false)}
          careerId={career.id}
          initialData={myInterest || { name: currentUser, reason: '', learning: [] }}
        />
      )}
    </>
  )
}
