'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import NewsSection from '@/components/NewsSection'
import CategoryFilter from '@/components/CategoryFilter'
import Footer from '@/components/Footer'
import '../hero.css'

const categories = ['전체', '악성코드', '모바일', '다크웹', 'EndPoint', 'APT', '트렌드']

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('전체')

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1 }}>
        <Navigation />
        <div className="VPHero has-image VPHomeHero">
        <div className="container">
          <div className="main">
            <div className="update-badge">🧐 Nov 2025.11~</div>
            <h1 className="heading">
              <span className="name clip">Asec News</span>
            </h1>
            <p className="tagline">
              안랩 ASEC의 보안 뉴스를 확인하세요.
            </p>
            {/* 카테고리 필터 */}
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              description="📰 안랩 ASEC의 RSS를 사용합니다. 뉴스 제목 클릭 시 해당 웹으로 연결됩니다."
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

      <div className="container">
        <NewsSection selectedCategory={selectedCategory} />
      </div>
      </div>
      <Footer />
    </main>
  )
}
