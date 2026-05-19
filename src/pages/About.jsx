import { Link } from 'react-router-dom'
import { ArrowRight, Lightbulb, Users, ShieldCheck, Eye, Zap, Layers } from 'lucide-react'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'

const VALUES = [
  { Icon: Lightbulb, title: 'Practical Innovation', body: 'Every solution solves real operational challenges. We measure success by time saved and decisions improved.' },
  { Icon: Users, title: 'Human-Centered Design', body: 'AI augments expert judgment — it doesn\'t replace it. Human review stays central to every critical workflow.' },
  { Icon: ShieldCheck, title: 'Compliance-Conscious', body: 'Designed with traceability, data integrity, and audit readiness in mind for regulated environments.' },
  { Icon: Eye, title: 'Clarity from Complexity', body: 'Converting fragmented information into structured, searchable intelligence is at the core of what we do.' },
  { Icon: Zap, title: 'Speed & Efficiency', body: 'Reducing manual effort so expert teams can focus on high-value decisions, not document processing.' },
  { Icon: Layers, title: 'Scalable by Design', body: 'Solutions that grow with your organization — from targeted automation tools to full enterprise platforms.' },
]

export default function About() {
  return (
    <div>
      <PageHero
        chip="About AdvaTech"
        title="Technology Built for Complexity"
        subtitle="AdvaTech Life sciences helps organizations simplify complex workflows through intelligent technology — turning documents, data, and manual processes into structured, actionable intelligence."
      />

      {/* Story */}
      <section className="py-20 bg-white" style={{ borderTop: '3px solid #20BEBE' }}>
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            <AnimatedSection>
              <div className="section-label mb-3">Our Story</div>
              <h2 className="section-title mb-7">Why AdvaTech Exists</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>Many organizations still depend on manual document review, disconnected systems, and spreadsheet-heavy processes. These challenges slow decision-making and make critical information difficult to access.</p>
                <p>AdvaTech was built to solve this. By combining AI, layout-aware OCR, workflow automation, analytics, and secure software development, we convert complex documents and fragmented data into structured, actionable intelligence.</p>
                <p>We focus on practical innovation — technology that improves speed, visibility, and control while keeping expert review at the center of critical decisions.</p>
              </div>
              <div className="mt-8">
                <Link to="/contact" className="btn-outline">Talk to Our Team</Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150} direction="left">
              {/* Quote */}
              <div className="card p-8 mb-5 bg-navy border-0">
                <p className="text-white/80 text-base italic leading-relaxed mb-6">
                  "AdvaTech transforms complexity into clarity through AI, OCR, automation, and secure digital systems."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-teal-400/20 flex items-center justify-center text-base">💡</div>
                  <div>
                    <div className="text-white text-sm font-semibold">AdvaTech Mission</div>
                    <div className="text-white/40 text-xs">Core company principle</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[['AI-First', 'Technology approach'], ['5+', 'Core solutions'], ['7', 'Industries'], ['100%', 'Human oversight']].map(([v, l]) => (
                  <div key={v} className="card p-5 text-center">
                    <div className="font-display text-xl font-bold text-navy mb-1">{v}</div>
                    <div className="text-xs text-slate-500">{l}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-teal-50 border-y border-teal-100/70">
        <div className="container mx-auto px-6 max-w-6xl">
          <AnimatedSection className="text-center mb-12">
            <div className="section-label mb-3">Our Principles</div>
            <h2 className="section-title mb-3">How We Approach Technology</h2>
            <p className="section-sub max-w-xl mx-auto">Every AdvaTech solution balances innovation with responsibility, speed with accuracy.</p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {VALUES.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 60}>
                <div className="card-hover p-7 h-full group">
                  <div className="icon-box mb-5 group-hover:bg-teal-100 transition-colors">
                    <v.Icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="font-display text-sm font-bold text-slate-800 mb-2">{v.title}</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">{v.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge vs Solution */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <AnimatedSection className="text-center mb-12">
            <div className="section-label mb-3">The Problem We Solve</div>
            <h2 className="section-title">Before & After AdvaTech</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-5">
            <AnimatedSection>
              <div className="card p-8 h-full">
                <h3 className="text-sm font-semibold text-slate-500 mb-5 uppercase tracking-wider">Without AdvaTech</h3>
                <div className="space-y-3.5">
                  {[
                    'Manual document review consuming hours per record',
                    'Disconnected systems and siloed data slowing decisions',
                    'Scanned records that can\'t be searched or structured',
                    'Repetitive formatting, reporting, and comparison tasks',
                    'Critical information buried in long documents',
                  ].map(item => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="text-red-400 font-bold text-sm mt-0.5">✕</span>
                      <p className="text-sm text-slate-700 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="card p-8 h-full border-teal-200 bg-teal-50/30">
                <h3 className="text-sm font-semibold text-teal-700 mb-5 uppercase tracking-wider">With AdvaTech</h3>
                <div className="space-y-3.5">
                  {[
                    'AI-powered extraction and summarization in minutes',
                    'Unified analytics dashboards connecting all data sources',
                    'Layout-aware OCR that structures scanned documents',
                    'Automated workflows replacing repetitive manual tasks',
                    'Searchable knowledge repositories for instant access',
                  ].map(item => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="text-teal-500 font-bold text-sm mt-0.5">✓</span>
                      <p className="text-sm text-slate-700 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 navy-grid" />
        <div className="relative container mx-auto px-6 max-w-2xl text-center">
          <AnimatedSection>
            <h2 className="font-display text-4xl font-bold text-white mb-5 leading-tight">Let's Work Together</h2>
            <p className="text-white/55 mb-8 leading-relaxed">Discuss your workflow challenges and learn how AdvaTech can help.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-teal-400 text-navy font-semibold hover:bg-teal-300 transition-all text-base">
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/" className="btn-outline-white px-8 py-4 text-base">Explore Solutions</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
