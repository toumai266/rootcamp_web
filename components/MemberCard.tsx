'use client'

import { TeamMember } from '@/data/team'

interface MemberCardProps {
  member: TeamMember
}

export default function MemberCard({ member }: MemberCardProps) {
  return (
    <div
      style={{
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
            <img
              src={member.avatar}
              alt={member.name}
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
