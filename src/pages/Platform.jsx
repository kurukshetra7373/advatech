import { Link } from 'react-router-dom'
import { ArrowRight, FolderInput, ScanText, Database, Sparkles, Bot, Check, ChevronRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'

const CAPABILITIES = [
  {
    Icon: FolderInput,
    chip: 'Ingestion',
    title: 'Intelligent Document Ingestion',
    body: 'AdvaTech enables secure ingestion of complex documents across regulatory, quality, scientific, and operational workflows. Structured pipelines accept PDFs, scanned files, Word documents, spreadsheets, and legacy formats — routing each document type through the appropriate extraction pathway.',
    features: [
      'Multi-format document ingestion (PDF, Word, Excel, images)',
      'Secure, role-based ingestion pipelines',
      'Batch and single-document processing',
      'Automated document type detection and routing',
      'Audit-logged ingestion with metadata capture',
    ],
  },
  {
    Icon: ScanText,
    chip: 'OCR',
    title: 'Layout-Aware OCR',
    body: 'Our Layout-Aware OCR recognizes not only text, but also tables, headings, sections, forms, fields, signatures, and document structure — preserving context during extraction. The Human-in-the-Loop feature enables expert validation, approval, and controlled decision-making on extracted content.',
    features: [
      'Table, form, and grid structure recognition',
      'Header, footer, and section identification',
      'Checkbox, signature, and handwriting detection',
      'Multi-column and complex layout processing',
      'Human-in-the-Loop validation and approval workflow',
    ],
  },
  {
    Icon: Database,
    chip: 'Extraction',
    title: 'Structured Data Extraction',
    body: 'The platform converts unstructured and semi-structured documents into organized, searchable, and reusable data fields — reducing manual copy-paste and review effort. Extracted data is structured into configurable schemas that integrate with downstream systems and reporting tools.',
    features: [
      'Field-level extraction with configurable templates',
      'Unstructured-to-structured data conversion',
      'Cross-document data normalization',
      'Structured output in JSON, CSV, and Excel formats',
      'Integration-ready data pipelines',
    ],
  },
  {
    Icon: Sparkles,
    chip: 'AI Analysis',
    title: 'AI-Powered Analysis',
    body: 'AdvaTech applies AI to summarize, classify, compare, and analyze document content — supporting document review, audit protocol, report and batch card preparation, and scientific data processing for decision-critical insights. Analysis results are source-linked and reviewable by qualified personnel.',
    features: [
      'AI-powered document summarization',
      'Automated document classification and tagging',
      'Version comparison and change detection',
      'Cross-document analysis and gap identification',
      'Scientific data interpretation with source citations',
    ],
  },
  {
    Icon: Bot,
    chip: 'AdvaIntel Assistant',
    title: 'AdvaIntel Assistant',
    body: 'AdvaIntel Assistant is an AI-powered knowledge assistant designed for enterprise search across ERP systems (SAP, Oracle), LIMS (Labware), and document management platforms (Veeva). It enables users to search internal documents and trusted public-domain sources — including scientific articles, patents, technical reports, regulatory guidance, and FDA resources. With source-linked answers, summarization, comparison, and report generation support, the assistant helps teams move from scattered information to structured, decision-ready intelligence.',
    features: [
      'Natural language search across enterprise systems',
      'ERP, LIMS, and Veeva integration support',
      'Internal and public-domain source search (FDA, patents, literature)',
      'Source-linked answers with document citations',
      'Summarization, comparison, and report generation',
    ],
  },
]

export default function Platform() {
  return (
    <div>
      <PageHero
        chip="The Platform"
        title="AI-Powered Document Intelligence Platform"
        subtitle="An AI-powered document intelligence platform designed to extract, analyze, validate, and organize complex data and information across regulated and document-intensive operations."
        breadcrumbs={[{ label: 'Platform' }]}
      />

      {/* Platform intro */}
      <section className="py-20 bg-white" style={{ borderTop: '3px solid #20BEBE' }}>
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <div className="section-label mb-3">Overview</div>
              <h2 className="section-title mb-6">Built for Complexity. Designed for Clarity.</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>AdvaTech's platform is designed from the ground up for organizations that work with high-volume, high-complexity documentation — where extracting, organizing, and acting on information accurately and traceably is a core operational requirement.</p>
                <p>Every capability is built with Human-in-the-Loop validation, controlled access, and audit traceability — ensuring that AI-assisted outputs remain under qualified human review and approval at every critical step.</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary bg-navy">Schedule a Demo <ArrowRight className="w-4 h-4" /></Link>
                <Link to="/solutions/cmc-intelligence" className="btn-outline">View Solutions <ChevronRight className="w-4 h-4" /></Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150} direction="left">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'AI Enabled',         sub: 'Core technology approach' },
                  { label: 'Human-In-The-Loop',  sub: 'Validation at every step' },
                  { label: 'Audit Ready',         sub: 'Full traceability built in' },
                  { label: 'Secure',              sub: 'Role-based access control' },
                  { label: 'Multi-Format',        sub: 'PDF, Word, Excel, images' },
                  { label: 'Enterprise-Scale',    sub: 'ERP, LIMS, Veeva-compatible' },
                ].map(s => (
                  <div key={s.label} className="card p-5">
                    <div className="font-display text-sm font-bold text-navy mb-1">{s.label}</div>
                    <div className="text-xs text-slate-500">{s.sub}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-teal-50 border-y border-teal-100/70">
        <div className="container mx-auto px-6 max-w-6xl">
          <AnimatedSection className="text-center mb-14">
            <div className="section-label mb-3">Platform Capabilities</div>
            <h2 className="section-title mb-4">Five Core Platform Layers</h2>
            <p className="section-sub max-w-2xl mx-auto">Each capability is modular, configurable, and designed to integrate with your existing document and data ecosystem.</p>
          </AnimatedSection>

          <div className="space-y-5">
            {CAPABILITIES.map((cap, i) => (
              <AnimatedSection key={cap.title} delay={i * 60}>
                <div className="card-hover p-8 group">
                  <div className="grid lg:grid-cols-[auto_1fr_1fr] gap-8 items-start">

                    {/* Icon + chip */}
                    <div className="flex flex-col items-center gap-3 lg:w-24">
                      <div className="icon-box-lg group-hover:bg-teal-100 transition-colors">
                        <cap.Icon className="w-6 h-6 text-teal-600" />
                      </div>
                      <span className="text-[0.65rem] font-bold tracking-widest uppercase text-teal-600 text-center">{cap.chip}</span>
                    </div>

                    {/* Title + body */}
                    <div>
                      <h3 className="font-display text-lg font-bold text-navy mb-3 group-hover:text-teal-700 transition-colors">{cap.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{cap.body}</p>
                    </div>

                    {/* Feature list */}
                    <div>
                      <p className="text-[0.68rem] font-bold tracking-widest uppercase text-slate-400 mb-3">Key Features</p>
                      <ul className="space-y-2">
                        {cap.features.map(f => (
                          <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700">
                            <Check className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* AdvaIntel Chatbot Image */}
      <section className="py-20 bg-white" style={{ borderTop: '3px solid #20BEBE' }}>
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <AnimatedSection>
              <div className="section-label mb-4">AdvaIntel Assistant</div>
              <h2 className="section-title mb-5">Your AI-Powered Knowledge Assistant</h2>
              <p className="text-slate-500 text-[1.05rem] leading-[1.8] mb-6">
                AdvaIntel Assistant brings natural language search across your enterprise systems — ERP, LIMS, Veeva, and trusted public sources — delivering source-linked, decision-ready answers in seconds.
              </p>
              <ul className="space-y-3 mb-8">
                {['Ask questions in plain language, get cited answers','Search across SAP, Oracle, Labware, Veeva and more','Access FDA guidance, patents, and scientific literature','Generate summaries, comparisons, and reports instantly'].map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary bg-navy inline-flex">
                Request a Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={150} direction="left">
              <div className="relative rounded-2xl overflow-hidden
                              border border-teal-200
                              shadow-[0_8px_40px_rgba(32,190,190,0.12),0_2px_8px_rgba(0,0,0,0.06)]">
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-teal-500 via-teal-400 to-teal-300" />
                <img
                  src="/chatbot.jpg"
                  alt="AdvaIntel Assistant — AI chatbot interface"
                  className="w-full block object-cover"
                />
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* Human in the loop callout */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-5">
            <AnimatedSection>
              <div className="card p-8 h-full border-teal-200 bg-teal-50/30">
                <div className="w-12 h-12 rounded-xl bg-teal-100 border border-teal-200 flex items-center justify-center mb-5">
                  <span className="text-xl">👥</span>
                </div>
                <h3 className="font-display text-lg font-bold text-navy mb-3">Human-In-The-Loop Validation</h3>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  Every AI-generated output in the AdvaTech platform is designed to support — not replace — qualified human review. Expert validation, approval workflows, and controlled decision-making are built into each capability layer.
                </p>
                <ul className="space-y-2">
                  {['Expert review and approval at critical decision points','Configurable validation gates before data is accepted','Full audit trail of AI outputs and human decisions','Override and correction capabilities at every stage'].map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />{f}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="card p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-navy/10 border border-navy/20 flex items-center justify-center mb-5">
                  <span className="text-xl">🔒</span>
                </div>
                <h3 className="font-display text-lg font-bold text-navy mb-3">Compliance & Security Architecture</h3>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  The platform is built with regulated-industry requirements in mind — data integrity, access control, traceability, and audit readiness are foundational, not optional.
                </p>
                <ul className="space-y-2">
                  {['Role-based access control across all platform layers','Complete audit log of document processing and decisions','Data integrity controls aligned with regulatory expectations','Configurable retention and archival policies'].map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-navy/60 flex-shrink-0 mt-0.5" />{f}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="pb-10 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <AnimatedSection>
            <div className="flex items-start gap-3 p-5 rounded-xl bg-amber-50 border border-amber-200">
              <span className="text-base flex-shrink-0 mt-0.5">ℹ️</span>
              <p className="text-xs text-amber-800 leading-relaxed">
                <strong>Important: </strong>AdvaTech platform capabilities are designed to support efficiency and information accessibility. AI-generated outputs should be reviewed and approved by qualified personnel. Actual performance varies based on document quality, workflow complexity, and integration scope.
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">Ready to See the Platform?</h2>
            <p className="text-white/55 mb-8 leading-relaxed">Schedule a walkthrough to explore how the AdvaTech platform can support your document workflows.</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-teal-400 text-navy font-semibold hover:bg-teal-300 transition-all hover:-translate-y-px">
                Schedule a Demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/solutions/cmc-intelligence" className="btn-outline-white px-7 py-3.5">
                View Solutions <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
