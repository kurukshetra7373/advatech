import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function PageHero({ chip, title, subtitle, breadcrumbs = [] }) {
  return (
    <section className="bg-navy pt-[180px] pb-20 relative overflow-hidden">
      <div className="absolute inset-0 navy-grid" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-400/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-navy to-transparent" />

      <div className="relative container mx-auto px-6 max-w-5xl">
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1.5 mb-6 text-xs text-white/35">
            <Link to="/" className="hover:text-teal-300 transition-colors">Home</Link>
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3" />
                {b.path
                  ? <Link to={b.path} className="hover:text-teal-300 transition-colors">{b.label}</Link>
                  : <span className="text-white/50">{b.label}</span>
                }
              </span>
            ))}
          </nav>
        )}

        <div className="chip-dark mb-5">{chip}</div>

        <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-[-0.025em] mb-5 max-w-3xl">
          {title}
        </h1>

        {subtitle && (
          <p className="text-white/60 text-[1.05rem] leading-[1.75] max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
