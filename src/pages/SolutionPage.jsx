import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowRight, Check, ChevronRight } from 'lucide-react'
import { solutionsData } from '../data/solutions'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'

export default function SolutionPage() {
  const { slug } = useParams()
  const data = solutionsData[slug]
  if (!data) return <Navigate to="/" replace />

  return (
    <div>
      <PageHero
        chip={data.chip}
        title={data.title}
        subtitle={data.subtitle}
        breadcrumbs={[{ label: 'Solutions' }, { label: data.chip }]}
      />

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <AnimatedSection>
              <div className="section-label mb-3">Overview</div>
              <h2 className="section-title mb-6">Why It Matters</h2>
              <div className="space-y-4">
                {data.intro.map((p, i) => (
                  <p key={i} className="text-slate-600 leading-relaxed">{p}</p>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150} direction="left">
              <div className="card p-8 bg-slate-50">
                <div className="text-4xl mb-5 opacity-70">{data.icon}</div>
                <div className="grid grid-cols-2 gap-3">
                  {(data.actions || ['Extract', 'Classify', 'Summarize', 'Structure']).map(action => (
                    <div key={action} className="bg-white border border-slate-200 rounded-xl p-4 text-center">
                      <div className="text-xs font-bold tracking-widest uppercase text-teal-600">{action}</div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-teal-50 border-y border-teal-100/70">
        <div className="container mx-auto px-6 max-w-6xl">
          <AnimatedSection className="mb-10">
            <div className="section-label mb-2">Capabilities</div>
            <h2 className="section-title">What {data.chip} Can Do</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {data.capabilities.map((cap, i) => (
              <AnimatedSection key={cap} delay={i * 40}>
                <div className="flex items-start gap-3 p-5 bg-white rounded-xl border border-slate-200
                                hover:border-teal-300 transition-all duration-200">
                  <Check className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 leading-relaxed">{cap}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <AnimatedSection className="mb-10">
            <div className="section-label mb-2">Use Cases</div>
            <h2 className="section-title">Where It Applies</h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex flex-wrap gap-2.5">
              {data.useCases.map((uc, i) => (
                <span key={uc}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium
                             bg-slate-50 border border-slate-200 text-slate-600
                             hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700 transition-all cursor-default">
                  <ChevronRight className="w-3.5 h-3.5 text-teal-400" /> {uc}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="pb-10 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <AnimatedSection>
            <div className="flex items-start gap-3 p-5 rounded-xl bg-amber-50 border border-amber-200">
              <span className="text-base flex-shrink-0 mt-0.5">ℹ️</span>
              <p className="text-xs text-amber-800 leading-relaxed">
                <strong>Important: </strong>
                AdvaTech solutions support efficiency and information accessibility.
                AI-generated outputs should be reviewed by qualified personnel.
                Actual performance varies based on workflow complexity, document quality, and integration.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 navy-grid" />
        <div className="relative container mx-auto px-6 max-w-2xl text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">Ready to Get Started?</h2>
            <p className="text-white/55 mb-8 leading-relaxed">
              Schedule a conversation to discuss how {data.chip} can improve your workflows.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-teal-400 text-navy font-semibold hover:bg-teal-300 transition-all hover:-translate-y-px">
                Schedule a Demo <ArrowRight className="w-4 h-4" />
              </Link>
              {data.next && (
                <Link to={data.next.path} className="btn-outline-white px-7 py-3.5">
                  {data.next.name} <ChevronRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
