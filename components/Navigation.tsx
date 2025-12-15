
import Link from 'next/link'
import { useState, useEffect } from 'react'
import LoginModal from './LoginModal'

export default function Navigation() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [user, setUser] = useState<string | null>(null)

  useEffect(() => {
    // Check local storage for user info on mount
    const storedUser = localStorage.getItem('rootcamp_user')
    if (storedUser) {
      setUser(JSON.parse(storedUser).name)
    }
  }, [])

  const handleLoginSuccess = (name: string) => {
    setUser(name)
    localStorage.setItem('rootcamp_user', JSON.stringify({ name }))
    alert(`${name}님 환영합니다!`)
    window.location.reload()
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('rootcamp_user')
    document.cookie = 'user_session=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    alert('로그아웃 되었습니다.')
    window.location.reload()
  }

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/news', label: 'Asec News' },
    { href: '/careers', label: 'Career Exploration/Skills' },
    { href: '/websites', label: 'Website' },
  ]

  return (
    <>
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

            <div>
              {user ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>
                    👋 {user}님
                  </span>
                  <button
                    onClick={handleLogout}
                    style={{
                      padding: '0.4rem 0.8rem',
                      fontSize: '0.8rem',
                      border: '1px solid var(--border-color)',
                      borderRadius: '4px',
                      background: 'transparent',
                      color: 'var(--text-color)',
                      cursor: 'pointer',
                    }}
                  >
                    로그아웃
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsLoginModalOpen(true)}
                  style={{
                    padding: '0.4rem 0.8rem',
                    fontSize: '0.8rem',
                    border: '1px solid var(--primary-color)',
                    borderRadius: '4px',
                    background: 'var(--primary-color)',
                    color: 'white',
                    cursor: 'pointer',
                  }}
                >
                  멤버 로그인
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </>
  )
}


