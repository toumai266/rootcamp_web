'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import WebsiteCard from '@/components/WebsiteCard'
import CategoryFilter from '@/components/CategoryFilter'
import Footer from '@/components/Footer'
import { websites, categories } from '@/data/websites'
import '../hero.css'

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState('전체')

  const filteredWebsites = websites.filter((website) => {
    return selectedCategory === '전체' || website.category === selectedCategory
  })

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1 }}>
        <Navigation />
        <div className="VPHero has-image VPHomeHero">
        <div className="container">
          <div className="main">
            <div className="update-badge">🧐 Nov 2025</div>
            <h1 className="heading">
              <span className="name clip">Website</span>
            </h1>
            <p className="tagline">
              유용한 웹사이트를 모았습니다. 활용해보세요.
            </p>
            {/* 카테고리 필터 */}
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              description="🔗 카드를 클릭하면 해당 사이트로 새 창에서 이동합니다."
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
        <section>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {filteredWebsites.map((website) => (
              <WebsiteCard key={website.id} website={website} />
            ))}
          </div>
          
          {filteredWebsites.length === 0 && (
            <p style={{ textAlign: 'center', color: 'var(--text-light)', padding: '2rem' }}>
              해당 카테고리에 등록된 사이트가 없습니다.
            </p>
          )}
        </section>
      </div>
      </div>
      <Footer />
    </main>
  )
}

