'use client'

interface CategoryFilterProps {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
  description?: string
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
  description,
}: CategoryFilterProps) {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: '0.75rem',
        }}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            style={{
              padding: '0.5rem 1rem',
              border: '1px solid var(--border-color)',
              borderRadius: '6px',
              backgroundColor:
                selectedCategory === category
                  ? 'var(--primary-color)'
                  : 'var(--bg-color)',
              color:
                selectedCategory === category ? '#ffffff' : 'var(--text-color)',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            {category}
          </button>
        ))}
      </div>
      {description && (
        <p
          style={{
            fontSize: '0.875rem',
            color: 'var(--text-light)',
            marginBottom: '2rem',
          }}
        >
          {description}
        </p>
      )}
    </div>
  )
}
