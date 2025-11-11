export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-color)',
        padding: '2rem 0',
        marginTop: 'auto',
      }}
    >
      <div className="container">
        <div
          style={{
            textAlign: 'center',
            color: 'var(--text-light)',
            fontSize: '0.875rem',
            lineHeight: 1.8,
          }}
        >
          <p style={{ marginBottom: '0.2rem' }}>
            Made by <strong>Heehyeon Yoo</strong>😈
          </p>
          <p style={{ marginBottom: '0.2rem' }}>
            Discord: <span style={{ color: 'var(--primary-color)' }}>@xyfermat</span>
          </p>
          <p style={{ marginBottom: '0.2rem' }}>minimal site</p>
          <p style={{ fontSize: '0.75rem', opacity: 0.7 }}>
            This site does not host any files.
          </p>
        </div>
      </div>
    </footer>
  )
}
