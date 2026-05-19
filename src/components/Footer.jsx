import { Link } from 'react-router-dom'

const solutions = [
  { name: 'CMC Intelligence',          path: '/solutions/cmc-intelligence' },
  { name: 'Regulatory Intelligence',   path: '/solutions/regulatory-intelligence' },
  { name: 'Project Lifecycle Support', path: '/solutions/project-lifecycle' },
  { name: 'Enterprise Search',         path: '/solutions/enterprise-search' },
  { name: 'Compliance Management',     path: '/solutions/compliance-management' },
]

const platform = [
  { name: 'Document Ingestion',    path: '/platform' },
  { name: 'Layout-Aware OCR',      path: '/platform' },
  { name: 'Structured Extraction', path: '/platform' },
  { name: 'AI-Powered Analysis',   path: '/platform' },
  { name: 'AdvaIntel Assistant',   path: '/platform' },
]

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-navy-700">
      <div className="container mx-auto px-6 max-w-7xl pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-10 border-b border-white/10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img src="/logo.png" alt="AdvaTech" className="h-14 w-auto" />
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              AI-powered document intelligence platform for pharmaceutical, regulatory, and compliance-intensive organizations.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {['GMP Conscious', 'ICH Q8/Q9/Q10', 'Human-In-The-Loop'].map(b => (
                <span key={b} className="text-[0.65rem] font-mono tracking-wide px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40">{b}</span>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h5 className="text-[10px] font-bold tracking-[0.18em] uppercase text-white/35 mb-4">Solutions</h5>
            <ul className="space-y-2.5">
              {solutions.map(s => (
                <li key={s.path + s.name}>
                  <Link to={s.path} className="text-sm text-white/55 hover:text-teal-400 transition-colors">{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h5 className="text-[10px] font-bold tracking-[0.18em] uppercase text-white/35 mb-4">Platform</h5>
            <ul className="space-y-2.5">
              {platform.map(s => (
                <li key={s.name}>
                  <Link to={s.path} className="text-sm text-white/55 hover:text-teal-400 transition-colors">{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + CTA */}
          <div>
            <h5 className="text-[10px] font-bold tracking-[0.18em] uppercase text-white/35 mb-4">Company</h5>
            <ul className="space-y-2.5 mb-6">
              {[['About', '/about'], ['Industries', '/industries'], ['Contact', '/contact']].map(([n, p]) => (
                <li key={p}>
                  <Link to={p} className="text-sm text-white/55 hover:text-teal-400 transition-colors">{n}</Link>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-400 text-navy font-semibold text-sm hover:bg-teal-300 transition-all">
              Schedule a Demo
            </Link>
          </div>

        </div>

        <div className="pt-7 flex flex-col md:flex-row items-start justify-between gap-3">
          <p className="text-xs text-white/25">© 2025 AdvaTech. All rights reserved.</p>
          <p className="text-xs text-white/25 max-w-md text-left md:text-right leading-relaxed">
            AI-generated outputs should be reviewed by qualified personnel. Performance varies based on workflow complexity, document quality, and integration.
          </p>
        </div>
      </div>
    </footer>
  )
}
