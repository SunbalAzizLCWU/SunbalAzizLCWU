import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const certs = [
  {
    abbr: 'IBM',
    company: 'IBM',
    title: 'Data Analysis with Python',
    date: 'June 2026',
    tags: ['Python', 'Data Analysis', 'ML'],
    verifyUrl: 'https://courses.cognitiveclass.ai/certificates/da8db10f4e6b4484822b90ab588c2532',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <rect width="40" height="40" rx="4" fill="#1F70C1"/>
        <rect x="6" y="10" width="28" height="3" rx="1.5" fill="white"/>
        <rect x="6" y="15" width="20" height="3" rx="1.5" fill="white"/>
        <rect x="6" y="20" width="28" height="3" rx="1.5" fill="white"/>
        <rect x="6" y="25" width="20" height="3" rx="1.5" fill="white"/>
      </svg>
    ),
  },
  {
    abbr: 'UMD',
    company: 'University of Maryland',
    title: 'AI and Career Empowerment',
    date: 'June 2026',
    tags: ['AI', 'Career', 'Professional Dev'],
    verifyUrl: 'https://www.rhsmith.umd.edu/programs/executive-education/learning-opportunities-individuals/free-online-certificate-artificial-intelligence-and-career-empowerment',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <rect width="40" height="40" rx="4" fill="#E21833"/>
        <path d="M10 28 L10 18 L20 12 L30 18 L30 28" stroke="white" strokeWidth="2" fill="none" strokeLinejoin="round"/>
        <rect x="16" y="22" width="8" height="6" rx="1" fill="white"/>
      </svg>
    ),
  },
  {
    abbr: 'ANTH',
    company: 'Anthropic',
    title: 'AI Fluency: Framework & Foundations',
    date: 'June 2026',
    tags: ['AI', 'Foundations', 'LLMs'],
    verifyUrl: 'https://verify.skilljar.com/c/wtvai7uwzpdz',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <rect width="40" height="40" rx="4" fill="#CC785C"/>
        <path d="M12 28 L20 12 L28 28" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <line x1="15" y1="23" x2="25" y2="23" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    abbr: 'ANTH',
    company: 'Anthropic',
    title: 'Claude Code in Action',
    date: 'June 2026',
    tags: ['Claude', 'AI Coding', 'LLMs'],
    verifyUrl: 'https://verify.skilljar.com/c/nhsab4gmqu5g',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <rect width="40" height="40" rx="4" fill="#CC785C"/>
        <path d="M12 28 L20 12 L28 28" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <line x1="15" y1="23" x2="25" y2="23" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    abbr: 'IBM',
    company: 'IBM',
    title: 'SQL and Relational Databases 101',
    date: 'April 2025',
    tags: ['SQL', 'Databases', 'Data'],
    verifyUrl: 'https://courses.cognitiveclass.ai/certificates/62fbafe23f75480f8aa821a9bc288aab',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <rect width="40" height="40" rx="4" fill="#1F70C1"/>
        <rect x="6" y="10" width="28" height="3" rx="1.5" fill="white"/>
        <rect x="6" y="15" width="20" height="3" rx="1.5" fill="white"/>
        <rect x="6" y="20" width="28" height="3" rx="1.5" fill="white"/>
        <rect x="6" y="25" width="20" height="3" rx="1.5" fill="white"/>
      </svg>
    ),
  },
  {
    abbr: 'PST',
    company: 'Postman',
    title: 'API Fundamentals Student Expert',
    date: 'April 2025',
    tags: ['REST', 'API Testing', 'Postman'],
    verifyUrl: 'https://badgr.com/public/assertions/p_K1grd-T5SanKQezeAvUg',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <rect width="40" height="40" rx="4" fill="#FF6C37"/>
        <circle cx="20" cy="20" r="9" fill="white"/>
        <path d="M16 16 L24 20 L16 24 Z" fill="#FF6C37"/>
      </svg>
    ),
  },
  {
    abbr: 'DB',
    company: 'Databricks',
    title: 'Academy Accreditation — Generative AI Fundamentals',
    date: 'March 2025',
    tags: ['Generative AI', 'LLMs', 'ML'],
    verifyUrl: 'https://credentials.databricks.com/6e067cb7-5c1b-44e3-b83a-409899b088dd#acc.oEScmZ0s',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <rect width="40" height="40" rx="4" fill="#FF3621"/>
        <path d="M20 8 L32 15 L32 25 L20 32 L8 25 L8 15 Z" stroke="white" strokeWidth="2" fill="none"/>
        <path d="M20 14 L26 17.5 L26 24.5 L20 28 L14 24.5 L14 17.5 Z" fill="white"/>
      </svg>
    ),
  },
  {
    abbr: 'PMI',
    company: 'Project Management Institute',
    title: 'Fundamentals of Predictive Project Management',
    date: 'March 2025',
    tags: ['Project Management', 'Agile'],
    verifyUrl: 'https://www.credly.com/badges/06a1205d-d3b7-4b6a-a17f-7d4b83251f91/linked_in_profile',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <rect width="40" height="40" rx="4" fill="#003087"/>
        <path d="M8 28 L20 12 L32 28" stroke="white" strokeWidth="3" fill="none" strokeLinejoin="round"/>
        <circle cx="20" cy="12" r="3" fill="#00AEEF"/>
      </svg>
    ),
  },
  {
    abbr: 'LFX',
    company: 'Linux Foundation',
    title: 'LFEL1011: OpenAPI Fundamentals',
    date: 'March 2025',
    tags: ['OpenAPI', 'REST', 'APIs'],
    verifyUrl: 'https://www.credly.com/badges/8de6d1b0-35d6-4154-b354-c43637f880a3/linked_in_profile',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <rect width="40" height="40" rx="4" fill="#003366"/>
        <circle cx="20" cy="20" r="10" stroke="#FFD700" strokeWidth="2.5" fill="none"/>
        <path d="M20 10 C14 14 14 26 20 30 C26 26 26 14 20 10Z" stroke="#FFD700" strokeWidth="1.5" fill="none"/>
        <line x1="10" y1="20" x2="30" y2="20" stroke="#FFD700" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    abbr: 'HRK',
    company: 'HackerRank',
    title: 'Problem Solving (Intermediate)',
    date: 'March 2025',
    tags: ['DSA', 'Algorithms'],
    verifyUrl: 'https://www.hackerrank.com/certificates/iframe/e60477fb1d57',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <rect width="40" height="40" rx="4" fill="#00EA64"/>
        <path d="M12 10h4v8l4-8h4v20h-4v-8l-4 8h-4V10z" fill="#1A1A1A"/>
      </svg>
    ),
  },
  {
    abbr: 'IBM',
    company: 'IBM',
    title: 'Prompt Engineering for Everyone',
    date: 'March 2025',
    tags: ['AI', 'LLMs', 'Prompting'],
    verifyUrl: 'https://courses.cognitiveclass.ai/certificates/661af516032141d982cc83ff5f7239f7',
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <rect width="40" height="40" rx="4" fill="#1F70C1"/>
        <rect x="6" y="10" width="28" height="3" rx="1.5" fill="white"/>
        <rect x="6" y="15" width="20" height="3" rx="1.5" fill="white"/>
        <rect x="6" y="20" width="28" height="3" rx="1.5" fill="white"/>
        <rect x="6" y="25" width="20" height="3" rx="1.5" fill="white"/>
      </svg>
    ),
  },
]

export default function Certifications() {
  return (
    <div className="min-h-screen flex flex-col font-body-md text-body-md bg-surface text-on-surface">
      <Navbar />
      <main className="flex-grow pt-[100px] pb-margin-desktop px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        
        <header className="mb-16">
          <p className="font-code-display text-code-display text-primary mb-3">&gt; credentials.load()</p>
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4">
            Verified <span className="text-primary">{'{'}</span>Credentials<span className="text-primary">{'}'}</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            A comprehensive log of industry-standard certifications, validating expertise across artificial intelligence, cloud architecture, and modern development paradigms.
          </p>
          <div className="mt-6 flex items-center gap-3 font-code-display text-code-display text-on-surface-variant">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span>{certs.length} certifications verified</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {certs.map(({ abbr, company, title, date, tags, verifyUrl, icon }, i) => (
            <div
              key={i}
              className="glass-panel rounded-xl p-6 flex flex-col gap-4 hover:shadow-[0_0_30px_rgba(80,200,120,0.15)] hover:border-primary/40 border border-outline-variant/20 transition-all duration-300 group relative overflow-hidden"
            >
              {/* subtle top glow line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Header row */}
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center border border-outline-variant/20 bg-surface-container-high overflow-hidden flex-shrink-0">
                  {icon}
                </div>
                <span className="font-code-display text-[10px] text-on-surface-variant bg-surface-container-high px-2 py-1 rounded border border-outline-variant/20">
                  {date}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1 flex-grow">
                <p className="font-code-display text-[10px] text-primary uppercase tracking-widest">{company}</p>
                <h3 className="font-headline-md text-[16px] leading-snug text-on-surface group-hover:text-primary/90 transition-colors">{title}</h3>
              </div>

              {/* Tags */}
              <div className="flex gap-2 flex-wrap">
                {tags.map(t => (
                  <span key={t} className="px-2 py-0.5 border border-primary/20 rounded bg-primary/5 font-code-display text-[10px] text-primary">
                    {t}
                  </span>
                ))}
              </div>

              {/* Verify button */}
              <div className="pt-3 border-t border-outline-variant/20">
                <a
                  href={verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-primary/40 text-primary font-code-display text-xs rounded-sm hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_15px_rgba(80,200,120,0.2)] transition-all duration-300 group/btn"
                >
                  <span className="material-symbols-outlined text-[14px] group-hover/btn:rotate-12 transition-transform duration-300">{'\uef76'}</span>
                  VERIFY CREDENTIAL
                  <span className="material-symbols-outlined text-[14px] group-hover/btn:translate-x-0.5 transition-transform duration-300">{'\ue89e'}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
