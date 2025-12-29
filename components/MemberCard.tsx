'use client'

import { TeamMember } from '@/data/types'
import { useState, useEffect } from 'react'
import Image from 'next/image'

interface MemberCardProps {
  member: TeamMember
}

export default function MemberCard({ member }: MemberCardProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedMember, setEditedMember] = useState(member)
  const [currentUser, setCurrentUser] = useState<string | null>(null)
  const [isSaving, setIsSaving] = useState(false)

  // Check login status on mount
  useEffect(() => {
    const stored = localStorage.getItem('rootcamp_user')
    if (stored) {
      setCurrentUser(JSON.parse(stored).name)
    }
    setEditedMember(member)
  }, [member])

  const handleSave = async () => {
    setIsSaving(true)
    try {
      const res = await fetch('/api/member', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ member: editedMember }),
      })

      if (res.ok) {
        setIsEditing(false)
        alert('저장되었습니다.')
        window.location.reload() // Refresh to show changes
      } else {
        alert('Failed to save changes')
      }
    } catch (e) {
      alert('Error saving changes')
    } finally {
      setIsSaving(false)
    }
  }

  const handleChange = (field: keyof TeamMember, value: any) => {
    setEditedMember(prev => ({ ...prev, [field]: value }))
  }

  const handleSkillChange = (value: string) => {
    // Split by comma and trim
    const skills = value.split(',').map(s => s.trim()).filter(s => s)
    handleChange('skills', skills)
  }

  const isMyCard = currentUser === member.name

  if (isEditing) {
    return (
      <div
        style={{
          padding: '1.5rem',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          border: '2px solid var(--primary-color)',
          boxShadow: 'var(--card-shadow)',
        }}
      >
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 'bold', color: '#555' }}>이름 (수정불가)</label>
          <input type="text" value={editedMember.name} disabled style={{ width: '100%', padding: '0.5rem', background: '#f0f0f0', border: '1px solid #ddd', borderRadius: '4px' }} />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 'bold', color: '#555' }}>역할</label>
          <input
            type="text"
            value={editedMember.role}
            onChange={(e) => handleChange('role', e.target.value)}
            style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 'bold', color: '#555' }}>Bio (소개)</label>
          <textarea
            value={editedMember.bio}
            onChange={(e) => handleChange('bio', e.target.value)}
            rows={4}
            style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px', resize: 'vertical' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 'bold', color: '#555' }}>Skills (쉼표로 구분)</label>
          <input
            type="text"
            defaultValue={editedMember.skills.join(', ')}
            onChange={(e) => handleSkillChange(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 'bold', color: '#555' }}>Github URL</label>
          <input
            type="text"
            value={editedMember.github || ''}
            onChange={(e) => handleChange('github', e.target.value)}
            style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 'bold', color: '#555' }}>Blog URL</label>
          <input
            type="text"
            value={editedMember.blog || ''}
            onChange={(e) => handleChange('blog', e.target.value)}
            style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }}
          />
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
          <button
            onClick={handleSave}
            disabled={isSaving}
            style={{ flex: 1, padding: '0.5rem', backgroundColor: 'var(--primary-color)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            {isSaving ? '저장 중...' : '저장'}
          </button>
          <button
            onClick={() => setIsEditing(false)}
            style={{ flex: 1, padding: '0.5rem', backgroundColor: '#ddd', color: '#333', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            취소
          </button>
        </div>
      </div>
    )
  }

  return (
    <div
      style={{
        position: 'relative',
        padding: '1.5rem',
        backgroundColor: 'var(--bg-secondary)',
        borderRadius: '8px',
        border: '1px solid var(--border-color)',
        boxShadow: 'var(--card-shadow)',
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
      {isMyCard && (
        <button
          onClick={() => setIsEditing(true)}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'var(--bg-color)',
            border: '1px solid var(--primary-color)',
            color: 'var(--primary-color)',
            borderRadius: '4px',
            padding: '0.25rem 0.5rem',
            fontSize: '0.75rem',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          수정
        </button>
      )}

      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: 'var(--primary-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            color: '#ffffff',
            margin: '0 auto 0.75rem',
            overflow: 'hidden',
          }}
        >
          {member.avatar ? (
            <Image
              src={member.avatar}
              alt={member.name}
              width={80}
              height={80}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          ) : (
            member.name.charAt(0)
          )}
        </div>
        <h3
          style={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            marginBottom: '0.25rem',
          }}
        >
          {member.name}
        </h3>
        <p
          style={{
            fontSize: '0.875rem',
            color: 'var(--primary-color)',
            fontWeight: '500',
          }}
        >
          {member.role}
        </p>
      </div>

      <p
        style={{
          color: 'var(--text-light)',
          marginBottom: '1rem',
          lineHeight: 1.6,
          fontSize: '0.875rem',
          whiteSpace: 'pre-wrap'
        }}
      >
        {member.bio}
      </p>

      <div style={{ marginBottom: '1rem' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}
        >
          {member.skills.map((skill, index) => (
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
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          gap: '0.75rem',
          justifyContent: 'center',
          paddingTop: '1rem',
          borderTop: '1px solid var(--border-color)',
        }}
      >
        {member.github && (
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--text-light)',
              fontSize: '0.9rem',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-color)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-light)')}
          >
            <span>Github💻</span>
          </a>
        )}
        {member.blog && (
          <a
            href={member.blog}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--text-light)',
              fontSize: '0.9rem',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-color)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-light)')}
          >
            <span>Blog📝</span>
          </a>
        )}
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            style={{
              color: 'var(--text-light)',
              fontSize: '0.9rem',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-color)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-light)')}
          >
            <span>email✉️</span>
          </a>
        )}
      </div>
    </div>
  )
}
