import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Certifications', path: '/certifications' },
  { label: 'Connect', path: '/contact' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="fixed w-full top-0 left-0 bg-background/80 backdrop-blur-xl border-b border-outline-variant/20 shadow-[0_0_30px_rgba(110,229,145,0.1)] flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 z-50">
        <Link to="/" className="font-headline-md text-headline-md text-on-surface tracking-tighter flex items-center">
          Sunbal <span className="code-bracket ml-2">{'{Aziz}'}</span>
        </Link>

        <nav className="hidden md:flex gap-8 items-center font-code-display text-code-display">
          {navLinks.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={`transition-all duration-300 cursor-pointer active:scale-95 hover:text-primary hover:drop-shadow-[0_0_8px_rgba(110,229,145,0.5)] ${
                pathname === path
                  ? 'text-primary font-bold border-b-2 border-primary pb-1'
                  : 'text-on-surface-variant'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="/Sunbal_Aziz_CV.pdf" download="Sunbal_Aziz_Resume.pdf"
            className="px-6 py-2 border border-primary text-primary font-code-display text-code-display hover:bg-primary/10 transition-colors duration-300 cursor-pointer"
          >
            Resume
          </a>
        </div>

        <button
          className="md:hidden text-on-surface mr-2 p-1"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed top-[64px] left-0 w-full bg-background/95 backdrop-blur-xl border-b border-outline-variant/20 shadow-lg z-40 flex flex-col items-start px-margin-mobile py-4 gap-4 md:hidden">
          {navLinks.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              onClick={closeMenu}
              className={`font-code-display text-code-display transition-all duration-300 w-full py-2 border-b border-outline-variant/10 ${
                pathname === path
                  ? 'text-primary font-bold'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href="/Sunbal_Aziz_CV.pdf"
            download="Sunbal_Aziz_Resume.pdf"
            onClick={closeMenu}
            className="mt-2 px-6 py-2 border border-primary text-primary font-code-display text-code-display hover:bg-primary/10 transition-colors duration-300"
          >
            Resume
          </a>
        </div>
      )}
    </>
  )
}
