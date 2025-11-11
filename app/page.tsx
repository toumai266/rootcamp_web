'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import MemberCard from '@/components/MemberCard'
import CategoryFilter from '@/components/CategoryFilter'
import Footer from '@/components/Footer'
import { notionLinks, teamMembers } from '@/data/team'
import './hero.css'

const sections = ['팀원 소개', '노션 페이지']

export default function Home() {
  const [selectedSection, setSelectedSection] = useState('팀원 소개')

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1 }}>
        <Navigation />
        <div className="VPHero has-image VPHomeHero">
        <div className="container">
          <div className="main">
            <div className="update-badge">🧐 Nov 2025</div>
            <h1 className="heading">
              <span className="name clip">rootcamp</span>
            </h1>
            <p className="tagline">
              구름톤 딥다이브 정보보호 16회차 이론 2조, rootcamp입니다.
            </p>
            {/* 섹션 필터 */}
            <CategoryFilter
              categories={sections}
              selectedCategory={selectedSection}
              onCategoryChange={setSelectedSection}
              description={
                selectedSection === '팀원 소개'
                  ? '👥 rootcamp 팀원들을 소개합니다.'
                  : '📚 팀 노션 페이지 링크입니다. 카드를 클릭하면 이동합니다.'
              }
            />
          </div>
          <div className="image">
            <div className="image-container">
              <div className="image-bg"></div>
              <img className="VPImage image-src" src="/logo1.png" alt="rootcamp Icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
        {selectedSection === '팀원 소개' && (
          <section>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '1.5rem',
              }}
            >
              {teamMembers.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </section>
        )}

        {selectedSection === '노션 페이지' && (
          <section>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.5rem',
                maxWidth: '800px',
                margin: '0 auto',
              }}
            >
              {notionLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    padding: '2rem',
                    backgroundColor: 'var(--bg-secondary)',
                    borderRadius: '12px',
                    border: '2px solid var(--border-color)',
                    boxShadow: 'var(--card-shadow)',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                    textAlign: 'center',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)'
                    e.currentTarget.style.borderColor = 'var(--primary-color)'
                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.borderColor = 'var(--border-color)'
                    e.currentTarget.style.boxShadow = 'var(--card-shadow)'
                  }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{link.icon}</div>
                  <h3
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      marginBottom: '0.75rem',
                      color: 'var(--primary-color)',
                    }}
                  >
                    {link.title}
                  </h3>
                  <p style={{ color: 'var(--text-light)', lineHeight: 1.6 }}>
                    {link.description}
                  </p>
                </a>
              ))}
            </div>
          </section>
        )}
      </div>
      </div>
      <Footer />
    </main>
  )
}

