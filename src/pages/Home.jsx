import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight,
         FlaskConical, BookOpen, GitBranch, Search, ShieldCheck,
         LayoutGrid, Users, Zap } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import { useInView } from '../hooks/useInView'
import { useEffect, useState, useRef } from 'react'

/* ── COUNTER ────────────────────────────────────────── */
function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView()
  const ran = useRef(false)
  useEffect(() => {
    if (!inView || ran.current) return
    ran.current = true
    const steps = 50; let i = 0
    const id = setInterval(() => {
      i++
      setCount(Math.round((target * i) / steps))
      if (i >= steps) { setCount(target); clearInterval(id) }
    }, 1600 / steps)
    return () => clearInterval(id)
  }, [inView, target])
  return <span ref={ref}>{count}{suffix}</span>
}

/* ── STATIC DATA ────────────────────────────────────── */
const SOLUTIONS = [
  { Icon: FlaskConical, title: 'CMC Intelligence',          desc: 'Organize and analyze formulation, process, analytical, and control strategy documents for regulatory submissions.', path: '/solutions/cmc-intelligence' },
  { Icon: BookOpen,     title: 'Regulatory Intelligence',   desc: 'Search, summarize, compare, and interpret regulatory information from FDA guidance, regulations, and internal documents.', path: '/solutions/regulatory-intelligence' },
  { Icon: GitBranch,    title: 'Project Lifecycle Support', desc: 'Support project teams from early R&D through regulatory planning, stability, documentation, and submission readiness.', path: '/solutions/project-lifecycle' },
  { Icon: Search,       title: 'Enterprise Search',         desc: 'Secure AI-powered search across SOPs, reports, specifications, batch cards, regulatory files, and archived knowledge.', path: '/solutions/enterprise-search' },
  { Icon: ShieldCheck,  title: 'Compliance Management',     desc: 'Manage document review, evidence tracking, policy alignment, gap assessment, and audit preparation.', path: '/solutions/compliance-management' },
]

/* Per-card accent palette — all class names are complete strings for Tailwind scanning */
const CARD_COLORS = [
  { /* CMC — Teal */
    bg: 'bg-gradient-to-br from-teal-50/80 to-white', border: 'border-teal-300',
    glow: 'shadow-[0_0_0_1px_rgba(32,190,190,0.3),0_4px_20px_rgba(32,190,190,0.12)]',
    hoverBorder: 'hover:border-teal-500',
    hoverGlow: 'hover:shadow-[0_0_0_2px_rgba(32,190,190,0.5),0_20px_48px_rgba(32,190,190,0.18)]',
    accent: 'from-teal-500 via-teal-400 to-teal-300', orb: 'bg-teal-300/30',
    iconBg: 'bg-gradient-to-br from-teal-100 to-teal-50', iconBorder: 'border-teal-400/60',
    icon: 'text-teal-600', link: 'text-teal-600',
  },
  { /* Regulatory — Indigo */
    bg: 'bg-gradient-to-br from-indigo-50/80 to-white', border: 'border-indigo-300',
    glow: 'shadow-[0_0_0_1px_rgba(99,102,241,0.3),0_4px_20px_rgba(99,102,241,0.12)]',
    hoverBorder: 'hover:border-indigo-500',
    hoverGlow: 'hover:shadow-[0_0_0_2px_rgba(99,102,241,0.5),0_20px_48px_rgba(99,102,241,0.18)]',
    accent: 'from-indigo-500 via-indigo-400 to-indigo-300', orb: 'bg-indigo-300/30',
    iconBg: 'bg-gradient-to-br from-indigo-100 to-indigo-50', iconBorder: 'border-indigo-400/60',
    icon: 'text-indigo-600', link: 'text-indigo-600',
  },
  { /* Lifecycle — Emerald */
    bg: 'bg-gradient-to-br from-emerald-50/80 to-white', border: 'border-emerald-300',
    glow: 'shadow-[0_0_0_1px_rgba(16,185,129,0.3),0_4px_20px_rgba(16,185,129,0.12)]',
    hoverBorder: 'hover:border-emerald-500',
    hoverGlow: 'hover:shadow-[0_0_0_2px_rgba(16,185,129,0.5),0_20px_48px_rgba(16,185,129,0.18)]',
    accent: 'from-emerald-500 via-emerald-400 to-emerald-300', orb: 'bg-emerald-300/30',
    iconBg: 'bg-gradient-to-br from-emerald-100 to-emerald-50', iconBorder: 'border-emerald-400/60',
    icon: 'text-emerald-600', link: 'text-emerald-600',
  },
  { /* Search — Amber */
    bg: 'bg-gradient-to-br from-amber-50/80 to-white', border: 'border-amber-300',
    glow: 'shadow-[0_0_0_1px_rgba(245,158,11,0.3),0_4px_20px_rgba(245,158,11,0.12)]',
    hoverBorder: 'hover:border-amber-500',
    hoverGlow: 'hover:shadow-[0_0_0_2px_rgba(245,158,11,0.5),0_20px_48px_rgba(245,158,11,0.18)]',
    accent: 'from-amber-500 via-amber-400 to-amber-300', orb: 'bg-amber-300/30',
    iconBg: 'bg-gradient-to-br from-amber-100 to-amber-50', iconBorder: 'border-amber-400/60',
    icon: 'text-amber-600', link: 'text-amber-600',
  },
  { /* Compliance — Violet */
    bg: 'bg-gradient-to-br from-violet-50/80 to-white', border: 'border-violet-300',
    glow: 'shadow-[0_0_0_1px_rgba(139,92,246,0.3),0_4px_20px_rgba(139,92,246,0.12)]',
    hoverBorder: 'hover:border-violet-500',
    hoverGlow: 'hover:shadow-[0_0_0_2px_rgba(139,92,246,0.5),0_20px_48px_rgba(139,92,246,0.18)]',
    accent: 'from-violet-500 via-violet-400 to-violet-300', orb: 'bg-violet-300/30',
    iconBg: 'bg-gradient-to-br from-violet-100 to-violet-50', iconBorder: 'border-violet-400/60',
    icon: 'text-violet-600', link: 'text-violet-600',
  },
]

const STATS = [
  { special: true, before: '700 hrs', after: '15 min', desc: 'Clinical report preparation — reported pharma AI use case' },
  { num: 31, suffix: '%', desc: 'Expected cost reduction over 3 years from intelligent automation' },
  { num: 78, suffix: '%', desc: 'Biopharma leaders who expect AI to drive major change' },
  { num: 45, suffix: '%', desc: 'Drug development time consumed by administrative delays' },
]

const FEATURES = [
  { Icon: LayoutGrid,  title: 'Layout-Aware Intelligence',   body: 'We preserve document structure — tables, fields, forms, and relationships — not just raw text.' },
  { Icon: Users,       title: 'Human-In-The-Loop',           body: 'AI assists expert teams; human review and approval remain central to every critical workflow.' },
  { Icon: ShieldCheck, title: 'Compliance-Conscious Design',  body: 'Built with traceability, controlled access, and audit readiness in mind for regulated environments.' },
  { Icon: Zap,         title: 'Faster Information Access',    body: 'Find, extract, compare, and act on information in minutes — not hours of manual search.' },
]

const FEATURE_COLORS = [
  { /* Layout — Teal */
    bg: 'bg-gradient-to-br from-teal-50/60 to-white', border: 'border-teal-200', hoverBorder: 'hover:border-teal-400',
    accent: 'from-teal-500 via-teal-400 to-teal-300', orb: 'bg-teal-300/25',
    iconBg: 'bg-gradient-to-br from-teal-100 to-teal-50', iconBorder: 'border-teal-300/80', icon: 'text-teal-600',
  },
  { /* Human — Sky */
    bg: 'bg-gradient-to-br from-sky-50/60 to-white', border: 'border-sky-200', hoverBorder: 'hover:border-sky-400',
    accent: 'from-sky-500 via-sky-400 to-sky-300', orb: 'bg-sky-300/25',
    iconBg: 'bg-gradient-to-br from-sky-100 to-sky-50', iconBorder: 'border-sky-300/80', icon: 'text-sky-600',
  },
  { /* Compliance — Violet */
    bg: 'bg-gradient-to-br from-violet-50/60 to-white', border: 'border-violet-200', hoverBorder: 'hover:border-violet-400',
    accent: 'from-violet-500 via-violet-400 to-violet-300', orb: 'bg-violet-300/25',
    iconBg: 'bg-gradient-to-br from-violet-100 to-violet-50', iconBorder: 'border-violet-300/80', icon: 'text-violet-600',
  },
  { /* Speed — Amber */
    bg: 'bg-gradient-to-br from-amber-50/60 to-white', border: 'border-amber-200', hoverBorder: 'hover:border-amber-400',
    accent: 'from-amber-500 via-amber-400 to-amber-300', orb: 'bg-amber-300/25',
    iconBg: 'bg-gradient-to-br from-amber-100 to-amber-50', iconBorder: 'border-amber-300/80', icon: 'text-amber-600',
  },
]

/* ── PAGE ───────────────────────────────────────────── */
export default function Home() {
  return (
    <div>

      {/* ── HERO ──────────────────────────────────────── */}
      <section className="relative bg-navy min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 navy-grid" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-navy to-transparent" />
        <div className="hero-orb w-[520px] h-[520px] bg-teal-400/8 top-1/3 right-0" />

        <div className="relative container mx-auto px-6 max-w-5xl pt-[196px] pb-32 text-center">

          {/* Primary tagline */}
          {/* <div className="chip-dark mb-5 inline-flex text-teal-300 tracking-widest">
            Digitizing complexity. Delivering clarity.
          </div> */}

          {/* Approach badge */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 text-white/70 text-xs font-medium tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse flex-shrink-0" />
              AI Enabled &nbsp;·&nbsp; Human-In-The-Loop
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-[clamp(2.6rem,6vw,4.6rem)] font-bold leading-[1.15] tracking-tight text-white mb-7 max-w-4xl mx-auto">
            AI-Powered Solutions for{' '}
            <span className="bg-gradient-to-r from-teal-300 to-teal-400 bg-clip-text text-transparent">
              Dynamic Workflows
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-white/60 text-lg md:text-[1.15rem] leading-[1.75] mb-10 max-w-3xl mx-auto">
            AdvaTech helps teams transform complex documents, fragmented data sources, and manual review processes into structured, searchable, and decision-ready intelligence — supported by AI-powered extraction, contextual search, and human-in-the-loop validation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Link to="/platform" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-teal-400 text-navy font-semibold hover:bg-teal-300 transition-all hover:-translate-y-px text-base">
              Explore Platform <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="btn-outline-white px-7 py-3.5 text-base">
              Schedule a Demo
            </Link>
          </div>

          <div className="flex items-center justify-center gap-10 pt-8 border-t border-white/10">
            {[['5+', 'Solution areas'], ['AI-First', 'Approach'], ['Human-in-the-Loop', 'Validation']].map(([v, l]) => (
              <div key={l} className="text-center">
                <div className="font-display text-xl font-bold text-teal-400">{v}</div>
                <div className="text-xs text-white/40 mt-0.5">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ────────────────────────────────── */}
      <section className="py-28 bg-white" style={{ borderTop: '3px solid #20BEBE' }}>
        <div className="container mx-auto px-6 max-w-6xl">
          <AnimatedSection className="mb-10">
            <div className="section-label mb-4">What We Do</div>
            <h2 className="section-title mb-5 max-w-2xl">Intelligent Technology for Complex Operations</h2>
            <p className="text-slate-500 text-[1.05rem] leading-[1.8] max-w-3xl">
              AdvaTech helps organizations modernize document-heavy and data-intensive operations through intelligent technology — reducing manual effort, accelerating review cycles, and supporting compliance-conscious decision-making.
            </p>
          </AnimatedSection>

          {/* ── PRODUCT VIDEO ── */}
          <AnimatedSection delay={80} className="mb-16">
            <div className="relative rounded-2xl overflow-hidden
                            border-2 border-teal-300
                            shadow-[0_0_0_1px_rgba(32,190,190,0.35),0_8px_40px_rgba(32,190,190,0.18),0_2px_8px_rgba(0,0,0,0.08)]">
              {/* Teal gradient top accent */}
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-teal-500 via-teal-400 to-teal-300 z-10" />
              <video
                src="/adva-final.mp4"
                controls
                playsInline
                preload="metadata"
                className="w-full block"
                style={{ maxHeight: '520px', objectFit: 'cover', background: '#0a1628' }}
              />
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOLUTIONS.map((s, i) => {
              const c = CARD_COLORS[i]
              return (
                <AnimatedSection key={s.path} delay={i * 70}>
                  <Link to={s.path}
                    className={`group block h-full relative overflow-hidden rounded-2xl
                                ${c.bg} border-2 ${c.border} ${c.hoverBorder}
                                ${c.glow} ${c.hoverGlow}
                                transition-all duration-300 hover:-translate-y-2`}>

                    {/* Colored top accent bar — softly visible, brightens on hover */}
                    <div className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${c.accent}
                                    opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />
                    {/* Abstract corner orb */}
                    <div className={`absolute -top-8 -right-8 w-28 h-28 ${c.orb} rounded-full blur-2xl pointer-events-none`} />

                    <div className="relative p-8">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0
                                      ${c.iconBg} border ${c.iconBorder}
                                      shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md`}>
                        <s.Icon className={`w-5 h-5 ${c.icon}`} />
                      </div>
                      <h3 className="font-display text-base font-bold text-navy mb-3">{s.title}</h3>
                      <p className="text-[0.875rem] text-slate-500 leading-[1.75] mb-6">{s.desc}</p>
                      <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${c.link}
                                       group-hover:gap-2.5 transition-all duration-200`}>
                        Learn more <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                </AnimatedSection>
              )
            })}

            {/* Practical Innovation — matches other card style */}
            <AnimatedSection delay={SOLUTIONS.length * 70}>
              <div className="group relative overflow-hidden rounded-2xl h-full flex flex-col justify-between p-8
                              bg-gradient-to-br from-navy/5 to-white border-2 border-navy/30
                              hover:border-navy/60
                              shadow-[0_0_0_1px_rgba(17,34,68,0.15),0_4px_20px_rgba(17,34,68,0.1)]
                              hover:shadow-[0_0_0_2px_rgba(17,34,68,0.3),0_20px_48px_rgba(17,34,68,0.15)]
                              hover:-translate-y-2 transition-all duration-300">

                {/* Top accent — navy to teal */}
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-navy via-[#1d469b] to-teal-400
                                opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Abstract corner orb */}
                <div className="absolute -top-8 -right-8 w-28 h-28 bg-navy/10 rounded-full blur-2xl pointer-events-none" />

                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0
                                  bg-gradient-to-br from-navy/10 to-navy/5 border border-navy/20
                                  shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                    <span className="text-xl leading-none">💡</span>
                  </div>
                  <h3 className="font-display text-base font-bold text-navy mb-3">Practical Innovation</h3>
                  <p className="text-[0.875rem] text-slate-500 leading-[1.75]">
                    Technology that solves real operational challenges while keeping expert judgment central to every critical decision.
                  </p>
                </div>
                <Link to="/about" className="relative mt-8 inline-flex items-center gap-1.5 text-xs font-semibold text-navy/70
                                             hover:gap-3 hover:text-navy transition-all duration-200">
                  About AdvaTech <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────── */}
      <section className="py-20 bg-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"
             style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
        <div className="absolute top-0 right-0 w-[360px] h-[360px] bg-teal-400/25 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative container mx-auto px-6 max-w-6xl">
          <AnimatedSection className="text-center mb-12">
            <div className="section-label text-teal-200 mb-3">Industry Impact</div>
            <h2 className="section-title text-white mb-3">The Case for Automation</h2>
            <p className="text-white/65 text-[1.05rem] leading-[1.75] max-w-lg mx-auto">Selected benchmarks on AI, document intelligence, and automation impact.</p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STATS.map((s, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="bg-white/[0.1] rounded-2xl border border-white/[0.15] p-7 text-center
                                hover:bg-white/[0.16] hover:border-white/[0.25] transition-all duration-300">
                  {s.special ? (
                    <div className="mb-3">
                      <span className="text-white/40 text-sm font-medium line-through">{s.before}</span>
                      <div className="flex items-center justify-center gap-2 mt-1">
                        <span className="text-teal-300 font-medium">→</span>
                        <span className="font-display text-2xl font-bold text-white">{s.after}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="font-display text-4xl font-bold text-white mb-3">
                      <Counter target={s.num} suffix={s.suffix} />
                    </div>
                  )}
                  <p className="text-xs text-white/65 leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={400}>
            <p className="text-center text-xs text-white/40 mt-6 italic">
              For illustrative use only. Based on selected external reports. Actual savings depend on workflow complexity and implementation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── WHY ADVATECH ──────────────────────────────── */}
      <section className="py-28 bg-white" style={{ borderTop: '3px solid #20BEBE' }}>
        <div className="container mx-auto px-6 max-w-6xl">
          <AnimatedSection className="text-center mb-16">
            <div className="section-label mb-4">Our Approach</div>
            <h2 className="section-title mb-4">AI Enabled. Human-In-The-Loop.</h2>
            <p className="section-sub max-w-xl mx-auto">Expert judgment stays at the center of every critical decision. Our AI assists — it does not replace.</p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f, i) => {
              const c = FEATURE_COLORS[i]
              return (
                <AnimatedSection key={f.title} delay={i * 80}>
                  <div className={`group h-full relative overflow-hidden rounded-2xl p-8
                                  ${c.bg} border ${c.border} ${c.hoverBorder}
                                  shadow-[0_2px_8px_rgba(0,0,0,0.05),0_1px_2px_rgba(0,0,0,0.04)]
                                  hover:shadow-[0_20px_48px_rgba(0,0,0,0.1),0_4px_16px_rgba(0,0,0,0.06)]
                                  transition-all duration-300 hover:-translate-y-1.5`}>
                    <div className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${c.accent}
                                    opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />
                    <div className={`absolute -top-8 -right-8 w-24 h-24 ${c.orb} rounded-full blur-2xl pointer-events-none`} />
                    <div className={`relative w-12 h-12 rounded-2xl mb-6 flex items-center justify-center
                                    ${c.iconBg} border ${c.iconBorder}
                                    shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md`}>
                      <f.Icon className={`w-5 h-5 ${c.icon}`} />
                    </div>
                    <h3 className="font-display text-[0.9375rem] font-bold text-navy mb-3">{f.title}</h3>
                    <p className="text-sm text-slate-500 leading-[1.75]">{f.body}</p>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ────────────────────────────────── */}
      <section className="py-20 bg-teal-50 border-t border-teal-100/70">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <AnimatedSection>
            <div className="section-label mb-3">Industries</div>
            <h2 className="section-title mb-4">Built for Regulated Environments</h2>
            <p className="section-sub mb-10">Complex, compliance-conscious, and document-heavy organizations.</p>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {['💊 Pharmaceutical & Biotech','🏥 Healthcare & Medical','🌿 Nutraceutical & Wellness','🏭 Manufacturing & Quality','📋 Regulatory & Compliance','🔬 Research & Development','💻 Technology Enterprises'].map(ind => (
                <span key={ind} className="px-4 py-2 rounded-full text-sm font-medium bg-white border border-teal-200/70 text-slate-600
                           hover:border-teal-400 hover:text-teal-700 hover:bg-white transition-all duration-200 cursor-default">{ind}</span>
              ))}
              <Link to="/industries" className="px-4 py-2 rounded-full text-sm font-semibold bg-teal-50 border border-teal-200 text-teal-700
                         hover:bg-teal-100 transition-all duration-200 flex items-center gap-1">
                View all <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 navy-grid" />
        <div className="relative container mx-auto px-6 max-w-2xl text-center">
          <AnimatedSection>
            <h2 className="font-display text-4xl font-bold text-white mb-5 leading-tight tracking-tight">
              Ready to Transform Your Workflows?
            </h2>
            <p className="text-white/55 text-lg mb-10 leading-relaxed">
              Schedule a conversation to explore how AdvaTech can help your team work faster and smarter.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-teal-400 text-navy font-semibold hover:bg-teal-300 transition-all hover:-translate-y-px text-base">
                Schedule a Demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/platform" className="btn-outline-white px-8 py-4 text-base">
                Explore Platform
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  )
}
