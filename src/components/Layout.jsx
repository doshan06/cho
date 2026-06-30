import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { path: '/', label: '首页' },
  { path: '/news', label: '资讯' },
  { path: '/games', label: '游戏库' },
  { path: '/community', label: '社区' },
  { path: '/about', label: '关于' },
]

function Layout({ children }) {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-divider sticky top-0 z-50">
        <div className="container-main h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-brand tracking-tight">
            GameHub
          </Link>

          {/* Nav */}
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'nav-link-active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-divider mt-auto">
        <div className="container-main py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted">
              &copy; 2024 GameHub. 游戏资讯攻略平台
            </div>
            <div className="flex items-center gap-6 text-sm text-muted">
              <span>关于我们</span>
              <span>联系方式</span>
              <span>隐私政策</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
