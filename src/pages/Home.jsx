import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight, Check, AlertTriangle, XCircle, Clock,
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

/* ── PHARMA DEMO ────────────────────────────────────── */
const TABS = ['① Formula Card Review', '② Formula Calculation', '③ Process Parameters', '④ In-Process Checks']

function Flag({ type, children }) {
  const styles = {
    ok:   'bg-teal-50 text-teal-700 border border-teal-200',
    warn: 'bg-amber-50 text-amber-700 border border-amber-200',
    err:  'bg-red-50 text-red-600 border border-red-200',
  }
  return <span className={`inline-flex items-center gap-1 text-[0.68rem] font-mono px-2 py-0.5 rounded-md ${styles[type]}`}>{children}</span>
}

function YieldBar({ pct, color = 'teal', active }) {
  const colors = { teal: 'from-teal-500 to-teal-400', gold: 'from-amber-500 to-teal-400', rose: 'from-amber-500 to-red-500' }
  return (
    <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
      <div className={`h-full rounded-full bg-gradient-to-r ${colors[color]} transition-all duration-[1200ms] ease-out`}
           style={{ width: active ? `${pct}%` : '0%' }} />
    </div>
  )
}

function PharmaDemo() {
  const [tab, setTab] = useState(0)
  const [typingDone, setTypingDone] = useState(false)
  const [typedText, setTypedText] = useState('')
  const typingRef = useRef(false)

  useEffect(() => {
    if (tab !== 1 || typingRef.current) return
    typingRef.current = true
    const msg = 'Potency correction applied: Label claim 500 mg ÷ 0.968 potency ÷ (1 − 0.012 LOD) = 574.5 mg/capsule. Scale factor 50× confirmed. Total API: 574.5 mg × 50,000 = 28,725 g base + 2% overage = 29,299.5 g. Excipient ratios maintained. Batch within validated range (40,000–60,000 units). ✓ Ready for BPR entry.'
    let i = 0
    const iv = setInterval(() => {
      setTypedText(msg.slice(0, ++i))
      if (i >= msg.length) { clearInterval(iv); setTypingDone(true) }
    }, 22)
    return () => clearInterval(iv)
  }, [tab])

  const mono = 'font-mono text-[0.72rem]'

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
      <div className="flex border-b border-slate-200 overflow-x-auto">
        {TABS.map((t, i) => (
          <button key={t} onClick={() => setTab(i)}
            className={`px-5 py-3.5 text-[0.82rem] font-medium whitespace-nowrap border-b-2 transition-all duration-200 ${
              tab === i ? 'border-teal-500 text-teal-700 bg-teal-50/50' : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'
            }`}>{t}</button>
        ))}
      </div>

      <div className="p-6 md:p-8">
        {tab === 0 && (
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6">
            <div>
              <div className={`${mono} text-teal-600 uppercase tracking-widest mb-1`}>Formula Card · BN-2024-0512</div>
              <h3 className="font-display font-bold text-navy text-base mb-4">Amoxicillin 500mg Capsules</h3>
              <div className="border border-slate-200 rounded-xl overflow-hidden">
                <div className={`grid grid-cols-[2fr_1fr_1fr_1.4fr] gap-2 px-4 py-2.5 bg-slate-50 ${mono} text-slate-500 uppercase tracking-wider`}>
                  <span>Ingredient</span><span>Qty</span><span>Unit</span><span>Status</span>
                </div>
                {[
                  { name: 'Amoxicillin trihydrate',    qty: '574.5', unit: 'mg',   flag: 'ok',   label: '✓ Verified' },
                  { name: 'Magnesium stearate',         qty: '5.0',   unit: 'mg',   flag: 'ok',   label: '✓ Verified' },
                  { name: 'Microcrystalline cellulose', qty: '120.5', unit: 'mg',   flag: 'warn', label: '⚠ Limit check' },
                  { name: 'Colloidal silicon dioxide',  qty: '2.5',   unit: 'mg',   flag: 'ok',   label: '✓ Verified' },
                  { name: 'Hard gelatin capsule',       qty: '1',     unit: 'unit', flag: 'err',  label: '✗ CoA missing' },
                ].map(row => (
                  <div key={row.name} className={`grid grid-cols-[2fr_1fr_1fr_1.4fr] gap-2 px-4 py-2.5 border-t border-slate-100 items-center ${mono}`}>
                    <span className="text-slate-800">{row.name}</span>
                    <span className="text-amber-700 font-semibold">{row.qty}</span>
                    <span className="text-slate-500">{row.unit}</span>
                    <Flag type={row.flag}>{row.label}</Flag>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3.5 bg-teal-50 border-l-4 border-teal-500 rounded-r-xl text-[0.81rem] text-slate-700 leading-relaxed">
                <strong className="text-teal-700">AI Review: </strong>MCC at 97.6% of upper limit — re-verify with QA. Capsule CoA absent; production should be halted until documentation is resolved.
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="border border-slate-200 rounded-xl p-5">
                <div className={`${mono} text-amber-700 uppercase tracking-widest mb-3`}>Review Summary</div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { val: '4/5', lbl: 'Ingredients OK', col: 'text-teal-700' },
                    { val: '1',   lbl: 'Critical Issue',  col: 'text-red-600' },
                    { val: '1',   lbl: 'Warning',          col: 'text-amber-600' },
                    { val: '98.2%', lbl: 'Yield Potential', col: 'text-navy' },
                  ].map(s => (
                    <div key={s.lbl} className="bg-slate-50 rounded-lg p-3 text-center border border-slate-100">
                      <div className={`text-lg font-bold ${s.col}`}>{s.val}</div>
                      <div className={`${mono} text-slate-500 mt-0.5`}>{s.lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border border-red-100 rounded-xl p-5 flex-1">
                <div className={`${mono} text-red-600 uppercase tracking-widest mb-3`}>AI Compliance Check</div>
                <div className="space-y-2 text-[0.81rem] text-slate-700 leading-relaxed">
                  {[['ICH Q8','Formulation rationale complete'],['21 CFR 211','CoA gap flagged'],['Pharmacopoeial','BP 2024 limits cross-checked'],['Excipient safety','GRAS status confirmed']].map(([std,note]) => (
                    <div key={std} className="flex items-start gap-2">
                      <span className="text-teal-500 mt-0.5">📋</span>
                      <span><strong className="text-navy">{std}</strong> — {note}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === 1 && (
          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <div className={`${mono} text-amber-700 uppercase tracking-widest mb-1`}>Batch Scaling Calculator</div>
              <h3 className="font-display font-bold text-navy text-base mb-4">Scale: 1,000 → 50,000 Units</h3>
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[{val:'50×',lbl:'Scale Factor'},{val:'35.1 kg',lbl:'API Required'},{val:'6.02 kg',lbl:'Excipients'}].map(s => (
                  <div key={s.lbl} className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
                    <div className="text-lg font-bold text-amber-700">{s.val}</div>
                    <div className={`${mono} text-slate-500 mt-0.5`}>{s.lbl}</div>
                  </div>
                ))}
              </div>
              <div className={`${mono} text-slate-500 uppercase tracking-wider mb-2`}>Theoretical Yield</div>
              <YieldBar pct={96.4} active={tab === 1} />
              <div className={`${mono} text-slate-500 text-right mt-1 mb-5`}>96.4% · 48,200 capsules</div>
              <div className={`${mono} text-slate-500 uppercase tracking-wider mb-2`}>Overage Calculation (+2%)</div>
              <div className="border border-slate-200 rounded-xl overflow-hidden">
                <div className={`grid grid-cols-3 gap-2 px-4 py-2 bg-slate-50 ${mono} text-slate-500 uppercase tracking-wider`}><span>Ingredient</span><span>Base</span><span>+2% OVG</span></div>
                {[{name:'Amoxicillin',base:'35,100 g',ovg:'35,802 g'},{name:'MCC',base:'6,025 g',ovg:'6,145 g'}].map(r => (
                  <div key={r.name} className={`grid grid-cols-3 gap-2 px-4 py-2.5 border-t border-slate-100 ${mono}`}>
                    <span className="text-slate-800">{r.name}</span>
                    <span className="text-amber-700">{r.base}</span>
                    <span className="text-teal-700 font-semibold">{r.ovg}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="border border-slate-200 rounded-xl p-5">
                <div className={`${mono} text-teal-600 uppercase tracking-widest mb-3`}>Potency Correction</div>
                <h4 className="font-semibold text-navy text-sm mb-3">Moisture-Adjusted API</h4>
                {[{lbl:'Label claim',val:'500 mg',bold:false},{lbl:'CoA potency',val:'96.8%',bold:false},{lbl:'Loss on drying',val:'1.2%',bold:false},{lbl:'Corrected qty',val:'574.5 mg',bold:true}].map(r => (
                  <div key={r.lbl} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0 text-sm">
                    <span className="text-slate-500">{r.lbl}</span>
                    <strong className={r.bold ? 'text-amber-700 text-base font-bold' : 'text-navy'}>{r.val}</strong>
                  </div>
                ))}
              </div>
              <div className="border border-slate-200 rounded-xl p-5 flex-1">
                <div className={`${mono} text-teal-600 uppercase tracking-widest mb-3`}>AI Calculation Narrative</div>
                <div className="bg-slate-50 rounded-lg p-3.5 font-mono text-[0.76rem] text-slate-700 leading-relaxed min-h-[100px]">
                  {typedText}
                  {!typingDone && <span className="inline-block w-0.5 h-[1em] bg-teal-500 align-text-bottom animate-pulse ml-0.5" />}
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === 2 && (
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <div>
              <div className={`${mono} text-teal-600 uppercase tracking-widest mb-1`}>Granulation & Compression Parameters</div>
              <h3 className="font-display font-bold text-navy text-base mb-4">Real-Time Compilation</h3>
              <div className="border border-slate-200 rounded-xl overflow-hidden">
                <div className={`grid grid-cols-5 gap-2 px-4 py-2.5 bg-slate-50 ${mono} text-slate-500 uppercase tracking-wider`}>
                  <span className="col-span-2">Parameter</span><span>Set Point</span><span>Actual</span><span>Status</span>
                </div>
                {[
                  {name:'Inlet Air Temp.',set:'65°C',act:'64.8°C',flag:'ok'},
                  {name:'Spray Rate',set:'18 g/min',act:'19.4 g/min',flag:'warn'},
                  {name:'Impeller Speed',set:'450 rpm',act:'452 rpm',flag:'ok'},
                  {name:'Outlet Temp.',set:'42°C',act:'42.1°C',flag:'ok'},
                  {name:'Compression Force',set:'12 kN',act:'14.8 kN',flag:'err'},
                  {name:'Product Temp.',set:'38°C',act:'37.9°C',flag:'ok'},
                ].map(row => (
                  <div key={row.name} className={`grid grid-cols-5 gap-2 px-4 py-2.5 border-t border-slate-100 items-center ${mono}`}>
                    <span className="col-span-2 text-slate-800">{row.name}</span>
                    <span className="text-teal-700 font-semibold">{row.set}</span>
                    <span className="text-slate-700">{row.act}</span>
                    <Flag type={row.flag}>{row.flag==='ok'?'In Spec':row.flag==='warn'?'Deviation':'OOS'}</Flag>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="border border-red-200 bg-red-50/50 rounded-xl p-5">
                <div className={`${mono} text-red-600 uppercase tracking-widest mb-2`}>OOS Alert · Immediate Action</div>
                <p className="text-[0.82rem] text-slate-700 leading-relaxed"><strong className="text-red-600">Compression force OOS detected.</strong> Actual 14.8 kN exceeds USP limit ±10%. <strong className="text-navy">Pause compression. Notify QA.</strong></p>
              </div>
              <div className="border border-amber-200 bg-amber-50/40 rounded-xl p-5">
                <div className={`${mono} text-amber-700 uppercase tracking-widest mb-2`}>Spray Rate Deviation Note</div>
                <p className="text-[0.82rem] text-slate-700 leading-relaxed">Spray rate at 19.4 g/min (+7.8%). Within ±10% window. Monitor <strong className="text-navy">granule size distribution</strong> at next IPC checkpoint.</p>
              </div>
              <div className="border border-slate-200 rounded-xl p-5 flex-1">
                <div className={`${mono} text-teal-600 uppercase tracking-widest mb-2`}>Export Options</div>
                {['→ Batch manufacturing record','→ CPP deviation log','→ QA exception report','→ Trend analysis CSV'].map(s => (
                  <div key={s} className="text-teal-700 font-mono text-[0.76rem] leading-relaxed">{s}</div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === 3 && (
          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <div className={`${mono} text-teal-600 uppercase tracking-widest mb-1`}>IPC Schedule · BN-2024-0512</div>
              <h3 className="font-display font-bold text-navy text-base mb-4">Compression Stage Checks</h3>
              <div className="space-y-2">
                {[
                  {status:'pass',label:'Average Weight',sub:'Every 30 min · 20 tablets · ±5%',result:'702.4 mg',spec:'Spec: 700 ±35'},
                  {status:'pass',label:'Thickness',sub:'Every 30 min · 10 tablets',result:'6.82 mm',spec:'Spec: 6.8 ±0.2'},
                  {status:'fail',label:'Hardness',sub:'Every 30 min · 10 tablets',result:'112 N',spec:'Spec: 80–100 N'},
                  {status:'pass',label:'Friability',sub:'Start & end of compression',result:'0.21%',spec:'Spec: ≤0.5%'},
                  {status:'pend',label:'Disintegration',sub:'Every 2 hrs · 6 tablets',result:'Pending',spec:'Spec: ≤15 min'},
                  {status:'pass',label:'Visual Inspection',sub:'Continuous · defect classification',result:'0 critical',spec:'2 minor (capping)'},
                ].map(item => {
                  const s = {
                    pass:{bar:'bg-teal-500',icon:<Check className="w-3.5 h-3.5"/>,bg:'bg-teal-50 text-teal-600',rc:'text-teal-700'},
                    fail:{bar:'bg-red-500',icon:<XCircle className="w-3.5 h-3.5"/>,bg:'bg-red-50 text-red-500',rc:'text-red-600'},
                    pend:{bar:'bg-amber-400',icon:<Clock className="w-3.5 h-3.5"/>,bg:'bg-amber-50 text-amber-600',rc:'text-amber-700'},
                  }[item.status]
                  return (
                    <div key={item.label} className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl relative overflow-hidden">
                      <div className={`absolute left-0 top-0 bottom-0 w-0.5 ${s.bar}`}/>
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${s.bg}`}>{s.icon}</div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[0.83rem] font-semibold text-navy">{item.label}</div>
                        <div className={`${mono} text-slate-500`}>{item.sub}</div>
                      </div>
                      <div className={`text-right ${mono} ${s.rc}`}>
                        <div className="font-semibold">{item.result}</div>
                        <div className="text-slate-400">{item.spec}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="border border-red-200 bg-red-50/50 rounded-xl p-5">
                <div className={`${mono} text-red-600 uppercase tracking-widest mb-2`}>IPC Failure · Action Required</div>
                <p className="text-[0.82rem] text-slate-700 leading-relaxed"><strong className="text-red-600">Hardness OOL: 112 N (Spec 80–100 N).</strong> Reduce compression force ~15%, recheck immediately. Complete deviation form DEV-2024-0117.</p>
              </div>
              <div className="border border-slate-200 rounded-xl p-5">
                <div className={`${mono} text-teal-600 uppercase tracking-widest mb-4`}>IPC Progress</div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-[0.76rem] font-mono text-slate-500 mb-1.5"><span>Checks completed</span><span className="text-navy font-semibold">5 / 6</span></div>
                    <YieldBar pct={83} active={tab === 3} />
                  </div>
                  <div>
                    <div className="flex justify-between text-[0.76rem] font-mono text-slate-500 mb-1.5"><span>Pass rate</span><span className="text-amber-600 font-semibold">4 / 5 (80%)</span></div>
                    <YieldBar pct={80} color="rose" active={tab === 3} />
                  </div>
                </div>
                <div className={`${mono} text-slate-500 mt-4`}>Next: <strong className="text-teal-700">14:30 — Disintegration</strong></div>
              </div>
              <div className="border border-amber-200 bg-amber-50/40 rounded-xl p-5 flex-1">
                <div className={`${mono} text-amber-700 uppercase tracking-widest mb-2`}>Auto-Documentation</div>
                <p className="text-[0.82rem] text-slate-700 leading-relaxed">All IPC results auto-logged. Deviation DEV-2024-0117 pre-filled. <strong className="text-amber-700">One-click QA approval ready.</strong></p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
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
    bg: 'bg-gradient-to-br from-teal-50/70 to-white', border: 'border-teal-200',
    hoverBorder: 'hover:border-teal-400',
    accent: 'from-teal-500 via-teal-400 to-teal-300', orb: 'bg-teal-300/25',
    iconBg: 'bg-gradient-to-br from-teal-100 to-teal-50', iconBorder: 'border-teal-300/80',
    icon: 'text-teal-600', link: 'text-teal-600',
  },
  { /* Regulatory — Indigo */
    bg: 'bg-gradient-to-br from-indigo-50/70 to-white', border: 'border-indigo-200',
    hoverBorder: 'hover:border-indigo-400',
    accent: 'from-indigo-500 via-indigo-400 to-indigo-300', orb: 'bg-indigo-300/25',
    iconBg: 'bg-gradient-to-br from-indigo-100 to-indigo-50', iconBorder: 'border-indigo-300/80',
    icon: 'text-indigo-600', link: 'text-indigo-600',
  },
  { /* Lifecycle — Emerald */
    bg: 'bg-gradient-to-br from-emerald-50/70 to-white', border: 'border-emerald-200',
    hoverBorder: 'hover:border-emerald-400',
    accent: 'from-emerald-500 via-emerald-400 to-emerald-300', orb: 'bg-emerald-300/25',
    iconBg: 'bg-gradient-to-br from-emerald-100 to-emerald-50', iconBorder: 'border-emerald-300/80',
    icon: 'text-emerald-600', link: 'text-emerald-600',
  },
  { /* Search — Amber */
    bg: 'bg-gradient-to-br from-amber-50/70 to-white', border: 'border-amber-200',
    hoverBorder: 'hover:border-amber-400',
    accent: 'from-amber-500 via-amber-400 to-amber-300', orb: 'bg-amber-300/25',
    iconBg: 'bg-gradient-to-br from-amber-100 to-amber-50', iconBorder: 'border-amber-300/80',
    icon: 'text-amber-600', link: 'text-amber-600',
  },
  { /* Compliance — Violet */
    bg: 'bg-gradient-to-br from-violet-50/70 to-white', border: 'border-violet-200',
    hoverBorder: 'hover:border-violet-400',
    accent: 'from-violet-500 via-violet-400 to-violet-300', orb: 'bg-violet-300/25',
    iconBg: 'bg-gradient-to-br from-violet-100 to-violet-50', iconBorder: 'border-violet-300/80',
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
                            border border-slate-200
                            shadow-[0_8px_40px_rgba(0,0,0,0.1),0_2px_8px_rgba(0,0,0,0.06)]">
              {/* Thin teal top accent */}
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
                                ${c.bg} border ${c.border} ${c.hoverBorder}
                                shadow-[0_2px_8px_rgba(0,0,0,0.05),0_1px_2px_rgba(0,0,0,0.04)]
                                hover:shadow-[0_20px_52px_rgba(0,0,0,0.12),0_4px_16px_rgba(0,0,0,0.07)]
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
                              bg-gradient-to-br from-navy/5 to-white border border-navy/20
                              hover:border-navy/40
                              shadow-[0_2px_8px_rgba(0,0,0,0.05),0_1px_2px_rgba(0,0,0,0.04)]
                              hover:shadow-[0_20px_52px_rgba(17,34,68,0.12),0_4px_16px_rgba(0,0,0,0.07)]
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

      {/* ── PHARMA DEMO ───────────────────────────────── */}
      <section className="py-20 bg-teal-50 border-y border-teal-100/70">
        <div className="container mx-auto px-6 max-w-6xl">
          <AnimatedSection className="text-center mb-10">
            <div className="section-label mb-3">Live Demo</div>
            <h2 className="section-title mb-3">AI in Action — Pharmaceutical Intelligence</h2>
            <p className="section-sub max-w-2xl mx-auto">
              See how AdvaTech's AI Document Intelligence handles real pharmaceutical manufacturing workflows — from formula review to in-process checks.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={100}><PharmaDemo /></AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-center text-xs text-slate-500 mt-5 italic">
              Illustrative demo using synthetic data. For illustrative purposes only — not a validated GMP system.
            </p>
          </AnimatedSection>
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
