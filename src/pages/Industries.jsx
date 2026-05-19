import { Link } from 'react-router-dom'
import { ArrowRight, FlaskConical, BookOpen, GitBranch, Search, ShieldCheck, Laptop2 } from 'lucide-react'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'

const INDUSTRIES = [
  {
    Icon: FlaskConical,
    name: 'Pharmaceutical & Biotechnology',
    body: 'Pharma and biotech organizations manage some of the most complex document environments — regulatory submissions, batch records, validation documents, specifications, and clinical reports.',
    solutions: ['cmc-intelligence', 'regulatory-intelligence', 'compliance-management'],
  },
  {
    Icon: BookOpen,
    name: 'Healthcare & Medical Products',
    body: 'Healthcare and medical product organizations face significant documentation requirements across product development, clinical evaluation, quality management, and regulatory submissions.',
    solutions: ['regulatory-intelligence', 'enterprise-search', 'compliance-management'],
  },
  {
    Icon: Search,
    name: 'Manufacturing & Quality Operations',
    body: 'Manufacturing generates large volumes of operational records — batch records, quality documents, equipment logs, test results, and specifications critical for product release and compliance.',
    solutions: ['cmc-intelligence', 'enterprise-search', 'compliance-management'],
  },
  {
    Icon: ShieldCheck,
    name: 'Regulatory & Compliance Teams',
    body: 'Regulatory professionals work with the largest and most complex documents — submission dossiers, guidance documents, audit reports, and regulatory correspondence requiring fast, accurate access.',
    solutions: ['regulatory-intelligence', 'compliance-management', 'enterprise-search'],
  },
  {
    Icon: GitBranch,
    name: 'Research & Development',
    body: 'R&D teams generate and consume large volumes of scientific literature, experimental data, study reports, protocols, and specifications — making information accessibility a critical productivity factor.',
    solutions: ['cmc-intelligence', 'project-lifecycle', 'enterprise-search'],
  },
  {
    Icon: Laptop2,
    name: 'Nutraceutical & Wellness',
    body: 'Label compliance, ingredient specifications, certification records, and quality documentation present similar challenges to pharmaceutical organizations at a different scale.',
    solutions: ['cmc-intelligence', 'compliance-management', 'enterprise-search'],
  },
]

const SOLUTION_LABELS = {
  'cmc-intelligence':        { Icon: FlaskConical, name: 'CMC Intelligence' },
  'regulatory-intelligence': { Icon: BookOpen,     name: 'Regulatory Intelligence' },
  'project-lifecycle':       { Icon: GitBranch,    name: 'Project Lifecycle' },
  'enterprise-search':       { Icon: Search,       name: 'Enterprise Search' },
  'compliance-management':   { Icon: ShieldCheck,  name: 'Compliance Management' },
}

export default function Industries() {
  return (
    <div>
      <PageHero
        chip="Industries We Support"
        title="Built for Regulated Environments"
        subtitle="AdvaTech supports organizations in complex, compliance-conscious, and document-heavy industries — where the cost of manual processes and fragmented information is high."
      />

      {/* Industry cards */}
      <section className="py-20 bg-teal-50">
        <div className="container mx-auto px-6 max-w-6xl space-y-4">
          {INDUSTRIES.map((ind, i) => (
            <AnimatedSection key={ind.name} delay={i * 60}>
              <div className="card-hover p-8 group">
                <div className="grid md:grid-cols-3 gap-8 items-start">

                  {/* Icon + name */}
                  <div className="md:col-span-1">
                    <div className="icon-box mb-4 group-hover:bg-teal-100 transition-colors">
                      <ind.Icon className="w-5 h-5 text-teal-600" />
                    </div>
                    <h3 className="font-display text-base font-bold text-navy group-hover:text-teal-600 transition-colors leading-snug">
                      {ind.name}
                    </h3>
                  </div>

                  {/* Body */}
                  <div className="md:col-span-1">
                    <p className="text-sm text-slate-700 leading-relaxed">{ind.body}</p>
                  </div>

                  {/* Solutions */}
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-slate-500 mb-3">Relevant Solutions</p>
                    <div className="flex flex-wrap gap-2">
                      {ind.solutions.map(slug => {
                        const s = SOLUTION_LABELS[slug]
                        return (
                          <Link key={slug} to={`/solutions/${slug}`}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium
                                       bg-teal-50 border border-teal-200 text-teal-700
                                       hover:bg-teal-100 hover:border-teal-300 transition-all">
                            <s.Icon className="w-3 h-3" />
                            <span>{s.name}</span>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}

          {/* Misc row */}
          <div className="grid sm:grid-cols-2 gap-4 mt-2">
            {[
              { Icon: Laptop2,  name: 'Technology-Enabled Enterprises', body: 'Organizations in any industry that manage complex document workflows, fragmented data systems, or manual operational processes.', cta: false },
              { Icon: Search,   name: 'Your Industry',                   body: 'AdvaTech\'s solutions are built around document types and workflow patterns — not just industry labels. Let\'s talk.',                cta: true },
            ].map((item, i) => (
              <AnimatedSection key={item.name} delay={INDUSTRIES.length * 60 + i * 80}>
                <div className="card-hover p-7 h-full flex flex-col group">
                  <div className="icon-box mb-4 group-hover:bg-teal-100 transition-colors">
                    <item.Icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="font-display text-sm font-bold text-navy mb-3">{item.name}</h3>
                  <p className="text-sm text-slate-700 leading-relaxed mb-5 flex-1">{item.body}</p>
                  {item.cta && (
                    <Link to="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors self-start">
                      Discuss Your Needs <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 navy-grid" />
        <div className="relative container mx-auto px-6 max-w-2xl text-center">
          <AnimatedSection>
            <h2 className="font-display text-4xl font-bold text-white mb-5 leading-tight">Don't See Your Industry?</h2>
            <p className="text-white/55 mb-8 leading-relaxed">
              AdvaTech's solutions are built around document types, workflow patterns, and data challenges. If your organization manages complex documents or manual processes, let's talk.
            </p>
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
