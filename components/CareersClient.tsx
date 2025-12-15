'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import CareerCard from '@/components/CareerCard'
import SkillAccordion from '@/components/SkillAccordion'
import CategoryFilter from '@/components/CategoryFilter'
import Footer from '@/components/Footer'
import { Career } from '@/data/types'
import { basicSkills } from '@/data/basicSkills'
import '@/app/hero.css'

interface CareersClientProps {
    initialCareers: Career[]
}

const sections = ['정보보호 분야 진로', '공통 스킬']

export default function CareersClient({ initialCareers }: CareersClientProps) {
    const [selectedSection, setSelectedSection] = useState('정보보호 분야 진로')

    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1 }}>
                <Navigation />
                <div className="VPHero has-image VPHomeHero">
                    <div className="container">
                        <div className="main">
                            <div className="update-badge">🧐 Nov 2025</div>
                            <h1 className="heading">
                                <span className="name clip">Career Exploration/Skills</span>
                            </h1>
                            <p className="tagline">
                                정보보호 분야의 다양한 직무와 학습해야 하는 스킬이 무엇인지 확인하세요.
                            </p>
                            {/* 섹션 필터 */}
                            <CategoryFilter
                                categories={sections}
                                selectedCategory={selectedSection}
                                onCategoryChange={setSelectedSection}
                                description={
                                    selectedSection === '정보보호 분야 진로'
                                        ? '💼 카드를 클릭해 직무별 필요 스킬과 추천 자격증, 커리어 경로를 확인할 수 있습니다.'
                                        : '🤓 공통적으로 알아야 하는 핵심 스킬을 정보보호 분야의 측면에서 확인할 수 있습니다.'
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
                    {selectedSection === '정보보호 분야 진로' && (
                        <section>
                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                                    gap: '1.5rem',
                                }}
                            >
                                {initialCareers.map((career) => (
                                    <CareerCard key={career.id} career={career} />
                                ))}
                            </div>
                        </section>
                    )}

                    {selectedSection === '공통 스킬' && (
                        <section>
                            <SkillAccordion skillCategories={basicSkills} />
                        </section>
                    )}
                </div>
            </div>
            <Footer />
        </main>
    )
}
