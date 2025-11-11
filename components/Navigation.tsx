import Link from 'next/link'

export default function Navigation() {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/news', label: 'Asec News' },
    { href: '/careers', label: 'Career Exploration/Skills' },
    { href: '/websites', label: 'Website' },
  ]

  return (
    <nav
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border-color)',
        padding: '1rem 0',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <ul
            style={{
              display: 'flex',
              listStyle: 'none',
              gap: '2rem',
              margin: 0,
              padding: 0,
            }}
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  style={{
                    color: 'var(--text-color)',
                    fontWeight: 500,
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

