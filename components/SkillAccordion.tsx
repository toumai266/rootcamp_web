'use client'

import { useState } from 'react'
import { SkillCategory } from '@/data/basicSkills'

interface SkillAccordionProps {
  skillCategories: SkillCategory[]
}

interface TooltipPosition {
  top: number
  left: number
  align: 'left' | 'center' | 'right'
  verticalAlign: 'top' | 'bottom'
}

export default function SkillAccordion({ skillCategories }: SkillAccordionProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null)
  const [tooltipPosition, setTooltipPosition] = useState<TooltipPosition>({
    top: 0,
    left: 0,
    align: 'center',
    verticalAlign: 'bottom',
  })

  const toggleItem = (itemId: string) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId)
    } else {
      newExpanded.add(itemId)
    }
    setExpandedItems(newExpanded)
  }

  const handleTooltipMouseEnter = (
    e: React.MouseEvent<HTMLLIElement>,
    tooltipId: string
  ) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight

    // Determine horizontal alignment
    let align: 'left' | 'center' | 'right' = 'center'
    if (rect.left < 150) {
      align = 'left'
    } else if (viewportWidth - rect.right < 150) {
      align = 'right'
    }

    // Determine vertical alignment (top or bottom)
    const spaceBelow = viewportHeight - rect.bottom
    const verticalAlign: 'top' | 'bottom' = spaceBelow < 200 ? 'top' : 'bottom'

    setTooltipPosition({
      top: verticalAlign === 'bottom' ? rect.bottom + 8 : rect.top - 8,
      left: rect.left + rect.width / 2,
      align,
      verticalAlign,
    })
    setActiveTooltip(tooltipId)
  }

  const handleTooltipMouseLeave = () => {
    setActiveTooltip(null)
  }

  const getTooltipStyle = () => {
    let transform = ''
    if (tooltipPosition.align === 'left') {
      transform = 'translateX(0)'
    } else if (tooltipPosition.align === 'right') {
      transform = 'translateX(-100%)'
    } else {
      transform = 'translateX(-50%)'
    }

    if (tooltipPosition.verticalAlign === 'top') {
      transform += ' translateY(-100%)'
    }

    return {
      position: 'fixed' as const,
      top: `${tooltipPosition.top}px`,
      left: `${tooltipPosition.left}px`,
      transform,
      zIndex: 10000,
    }
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1.5rem',
      }}
    >
      {skillCategories.map((category) => (
        <div
          key={category.id}
          style={{
            padding: '2rem',
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: '12px',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--card-shadow)',
          }}
        >
          <h3
            style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span style={{ fontSize: '2rem' }}>{category.icon}</span>
            {category.title}
          </h3>

          <p
            style={{
              fontSize: '0.9rem',
              color: 'var(--text-light)',
              lineHeight: 1.7,
              marginBottom: '1.5rem',
              paddingLeft: '0.5rem',
            }}
          >
            {category.description}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {category.items.map((item, index) => {
              const itemId = `${category.id}-${index}`
              const isExpanded = expandedItems.has(itemId)

              return (
                <div
                  key={itemId}
                  style={{
                    backgroundColor: 'var(--bg-color)',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)',
                    overflow: 'hidden',
                  }}
                >
                  <button
                    onClick={() => toggleItem(itemId)}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      backgroundColor: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: '0.95rem',
                      fontWeight: '500',
                      color: 'var(--text-color)',
                      transition: 'background-color 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent'
                    }}
                  >
                    <span>{item.title}</span>
                    <span
                      style={{
                        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s',
                        fontSize: '0.875rem',
                      }}
                    >
                      ▼
                    </span>
                  </button>

                  {isExpanded && (
                    <div
                      style={{
                        padding: '0.75rem 1rem',
                        borderTop: '1px solid var(--border-color)',
                        backgroundColor: 'var(--bg-secondary)',
                      }}
                    >
                      <ul
                        style={{
                          listStyle: 'none',
                          padding: 0,
                          margin: 0,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.5rem',
                        }}
                      >
                        {item.subItems.map((subItem, subIndex) => {
                          const tooltipId = `${itemId}-${subIndex}`
                          return (
                            <li
                              key={subIndex}
                              onMouseEnter={(e) => handleTooltipMouseEnter(e, tooltipId)}
                              onMouseLeave={handleTooltipMouseLeave}
                              style={{
                                fontSize: '0.875rem',
                                color: 'var(--text-light)',
                                paddingLeft: '1.25rem',
                                position: 'relative',
                                cursor: 'help',
                              }}
                            >
                              <span
                                style={{
                                  position: 'absolute',
                                  left: '0',
                                  color: 'var(--primary-color)',
                                }}
                              >
                                •
                              </span>
                              {subItem.name}

                              {activeTooltip === tooltipId && (
                                <div
                                  style={{
                                    ...getTooltipStyle(),
                                    backgroundColor: 'var(--bg-secondary)',
                                    border: '1px solid var(--border-color)',
                                    borderRadius: '8px',
                                    padding: '0.75rem 1rem',
                                    maxWidth: '300px',
                                    fontSize: '0.8125rem',
                                    lineHeight: 1.6,
                                    color: 'var(--text-color)',
                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                                  }}
                                >
                                  {subItem.description}
                                </div>
                              )}
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
