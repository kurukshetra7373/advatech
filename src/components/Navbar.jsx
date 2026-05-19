import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X, FlaskConical, BookOpen, GitBranch, Search, ShieldCheck } from 'lucide-react'

const solutions = [
  { name: 'CMC Intelligence',         path: '/solutions/cmc-intelligence',        Icon: FlaskConical, desc: 'Formulation to submission document intelligence' },
  { name: 'Regulatory Intelligence',  path: '/solutions/regulatory-intelligence', Icon: BookOpen,     desc: 'Search, summarize, and interpret regulatory content' },
  { name: 'Project Lifecycle Support',path: '/solutions/project-lifecycle',       Icon: GitBranch,    desc: 'End-to-end lifecycle documentation support' },
  { name: 'Enterprise Search',        path: '/solutions/enterprise-search',       Icon: Search,       desc: 'Unified search across all enterprise documents' },
  { name: 'Compliance Management',    path: '/solutions/compliance-management',   Icon: ShieldCheck,  desc: 'Audit readiness and compliance tracking' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [dropOpen, setDropOpen]   = useState(false)
  const dropRef  = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setMenuOpen(false); setDropOpen(false) }, [location])

  useEffect(() => {
    const handler = e => { if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const isSolutionActive = location.pathname.startsWith('/solutions')
  const dark = !scrolled
  const linkBase = 'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200'
  const linkCls  = dark
    ? `${linkBase} text-white/80 hover:text-white hover:bg-white/10`
    : `${linkBase} text-slate-600 hover:text-navy hover:bg-slate-100`
  const activeCls = dark ? `${linkBase} text-white bg-white/10` : `${linkBase} text-navy bg-slate-100`

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center justify-between h-[140px]">

            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="AdvaTech" className="h-[136px] w-auto" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              <NavLink to="/" end className={({ isActive }) => isActive ? activeCls : linkCls}>Home</NavLink>

              {/* Solutions dropdown */}
              <div className="relative" ref={dropRef}>
                <button
                  onClick={() => setDropOpen(p => !p)}
                  className={`flex items-center gap-1 ${isSolutionActive || dropOpen ? activeCls : linkCls}`}>
                  Solutions
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropOpen ? 'rotate-180' : ''}`} />
                </button>
                {dropOpen && (
                  <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-[340px]
                                  bg-white border border-slate-200 rounded-2xl shadow-xl p-2 z-50">
                    {solutions.map(s => (
                      <Link key={s.path} to={s.path}
                        className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 group/dd transition-colors">
                        <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-teal-50 border border-teal-100 flex-shrink-0 mt-0.5">
                          <s.Icon className="w-4 h-4 text-teal-600" />
                        </span>
                        <span>
                          <span className="block text-[0.8rem] font-semibold text-slate-800 group-hover/dd:text-navy transition-colors">{s.name}</span>
                          <span className="block text-xs text-slate-400 mt-0.5">{s.desc}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <NavLink to="/platform"    className={({ isActive }) => isActive ? activeCls : linkCls}>Platform</NavLink>
              <NavLink to="/about"       className={({ isActive }) => isActive ? activeCls : linkCls}>About</NavLink>
            </nav>

            <div className="flex items-center gap-3">
              <Link to="/contact" className={`hidden lg:inline-flex btn-primary text-sm px-5 py-2.5 ${
                dark ? 'bg-teal-400 text-navy hover:bg-teal-300' : ''
              }`}>
                Contact Us
              </Link>
              <button
                onClick={() => setMenuOpen(p => !p)}
                className={`lg:hidden p-2 rounded-lg transition-all ${
                  dark ? 'text-white hover:bg-white/10' : 'text-slate-600 hover:bg-slate-100'
                }`}
                aria-label="Menu">
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[140px] bg-white border-b border-slate-200 shadow-lg z-40 overflow-y-auto max-h-[calc(100vh-140px)]">
          <div className="container mx-auto px-6 py-5 max-w-lg">
            <nav className="flex flex-col gap-1">
              <Link to="/" className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:text-navy hover:bg-slate-50 transition-all">Home</Link>
              <div className="px-4 pt-3 pb-1 text-[10px] font-bold tracking-widest uppercase text-slate-400">Solutions</div>
              {solutions.map(s => (
                <Link key={s.path} to={s.path} className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-slate-50 transition-all">
                  <s.Icon className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-slate-700">{s.name}</span>
                </Link>
              ))}
              <div className="h-px bg-slate-100 my-2" />
              <Link to="/platform"    className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:text-navy hover:bg-slate-50 transition-all">Platform</Link>
              <Link to="/about"       className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:text-navy hover:bg-slate-50 transition-all">About</Link>
              <Link to="/industries"  className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:text-navy hover:bg-slate-50 transition-all">Industries</Link>
              <div className="pt-3">
                <Link to="/contact" className="btn-primary w-full justify-center bg-navy">Contact Us</Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
