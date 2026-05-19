import { useState } from 'react'
import { Mail, Globe, Clock, ArrowRight, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'

const INDUSTRIES = [
  'Pharmaceutical & Biotechnology', 'Healthcare & Medical Products',
  'Nutraceutical & Wellness', 'Manufacturing & Quality',
  'Regulatory & Compliance', 'Research & Development', 'Technology', 'Other',
]

const INTERESTS = [
  'AI Document Intelligence', 'Layout-Aware OCR', 'Workflow Automation',
  'Data & Analytics', 'Secure Digital Platforms', 'Multiple Areas / Not Sure Yet',
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 1800)
  }

  return (
    <div>
      <PageHero
        chip="Get in Touch"
        title="Let's Discuss Your Workflows"
        subtitle="Schedule a demo, ask a question, or share your workflow challenges. Our team is ready to explore how AdvaTech can help."
      />

      {/* Main form section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-12 items-start">

            {/* Left: Info */}
            <AnimatedSection className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-navy mb-3">Contact AdvaTech</h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Reach out to schedule a demo, discuss your workflow challenges, or learn more about our solutions.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  { icon: <Mail className="w-4 h-4" />, label: 'Email', value: 'info@advatech.com' },
                  { icon: <Globe className="w-4 h-4" />, label: 'Website', value: 'www.advatech.com' },
                  { icon: <Clock className="w-4 h-4" />, label: 'Response Time', value: '1–2 business days' },
                ].map(d => (
                  <div key={d.label} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-200
                                    flex items-center justify-center text-teal-600 flex-shrink-0">
                      {d.icon}
                    </div>
                    <div>
                      <div className="text-[10px] font-bold tracking-widest uppercase text-slate-500 mb-0.5">{d.label}</div>
                      <div className="text-sm font-medium text-slate-700">{d.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <h4 className="text-sm font-semibold text-navy mb-4">What to Expect</h4>
                <div className="space-y-4">
                  {[
                    'We\'ll review your message and reach out to schedule a conversation',
                    'We\'ll discuss your specific workflows, challenges, and goals',
                    'We\'ll propose a tailored approach aligned to your team\'s needs',
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-teal-50 border border-teal-200
                                       flex items-center justify-center text-xs font-bold text-teal-600 flex-shrink-0">
                        {i + 1}
                      </span>
                      <p className="text-sm text-slate-700 leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Form */}
            <AnimatedSection delay={150} direction="left" className="lg:col-span-3">
              <div className="card p-8 md:p-10">
                {sent ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-teal-50 border border-teal-200
                                    flex items-center justify-center text-3xl mx-auto mb-5 text-teal-600">✓</div>
                    <h3 className="text-xl font-bold text-navy mb-3">Message Sent!</h3>
                    <p className="text-slate-700 mb-6 text-sm">We'll be in touch within 1–2 business days.</p>
                    <button onClick={() => setSent(false)}
                      className="text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors">
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="text-lg font-bold text-navy mb-6">Send Us a Message</h3>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <Field label="First Name" id="fname" placeholder="Jane" required />
                      <Field label="Last Name"  id="lname" placeholder="Smith" required />
                    </div>

                    <Field label="Work Email" id="email" type="email" placeholder="jane@company.com" required />

                    <div className="grid sm:grid-cols-2 gap-4">
                      <Field label="Company" id="company" placeholder="Acme Pharma Inc." />
                      <Field label="Your Role" id="role" placeholder="Director of Operations" />
                    </div>

                    <SelectField label="Industry" id="industry" options={INDUSTRIES} />
                    <SelectField label="Area of Interest" id="interest" options={INTERESTS} />

                    <Field
                      label="Tell Us About Your Workflow Challenge"
                      id="message"
                      as="textarea"
                      placeholder="Describe the documents, processes, or data challenges you're looking to solve..."
                      required
                    />

                    <button type="submit" disabled={loading}
                      className="btn-primary w-full justify-center py-3.5 text-base bg-navy disabled:opacity-60 disabled:cursor-not-allowed">
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="40" strokeLinecap="round" />
                          </svg>
                          Sending…
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Send Message <ArrowRight className="w-4 h-4" />
                        </span>
                      )}
                    </button>

                    <p className="text-[11px] text-slate-500 text-center">
                      By submitting you agree to be contacted by AdvaTech regarding your inquiry.
                    </p>
                  </form>
                )}
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <AnimatedSection className="text-center mb-10">
            <div className="section-label mb-3">Explore AdvaTech</div>
            <h2 className="section-title">Not Sure Where to Start?</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: '🤖', title: 'AI Document Intelligence', path: '/solutions/ai-document-intelligence', desc: 'Extract, classify, and summarize documents at scale.' },
              { icon: '📄', title: 'Layout-Aware OCR',         path: '/solutions/layout-aware-ocr',         desc: 'Structure complex scanned records, forms, and reports.' },
              { icon: '⚙️', title: 'Workflow Automation',      path: '/solutions/workflow-automation',       desc: 'Automate repetitive review and data processing tasks.' },
            ].map(s => (
              <AnimatedSection key={s.path}>
                <Link to={s.path} className="card-hover p-6 group block h-full">
                  <div className="text-2xl mb-3">{s.icon}</div>
                  <h4 className="text-sm font-semibold text-navy mb-2 group-hover:text-teal-600 transition-colors">{s.title}</h4>
                  <p className="text-xs text-slate-700 leading-relaxed mb-3">{s.desc}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-teal-600">
                    Learn more <ChevronRight className="w-3 h-3" />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function Field({ label, id, type = 'text', placeholder, required, as }) {
  const cls = `w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800
               placeholder-slate-400 text-sm focus:outline-none focus:border-teal-400
               focus:bg-white transition-all duration-200`
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold text-slate-600 mb-2">
        {label} {required && <span className="text-teal-600">*</span>}
      </label>
      {as === 'textarea'
        ? <textarea id={id} name={id} placeholder={placeholder} required={required} rows={4} className={`${cls} resize-none`} />
        : <input type={type} id={id} name={id} placeholder={placeholder} required={required} className={cls} />
      }
    </div>
  )
}

function SelectField({ label, id, options }) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold text-slate-600 mb-2">{label}</label>
      <select id={id} name={id}
        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200
                   text-slate-700 text-sm focus:outline-none focus:border-teal-400
                   focus:bg-white transition-all duration-200 appearance-none">
        <option value="">Select…</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  )
}
