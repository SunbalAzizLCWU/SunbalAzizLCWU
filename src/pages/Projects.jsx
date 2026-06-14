import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const projects = [
  {
    title: 'Resume Fit Analysis',
    desc: 'A hardened full-stack microservice architecture that securely maps candidate qualifications against enterprise job requirements using an LLM Gateway for deep alignment insights, missing keyword detection, and actionable improvement suggestions.',
    tags: ['Next.js', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
    categories: ['aiml', 'react'],
    live: true,
    liveUrl: 'https://aranalyzer.vercel.app/',
    githubUrl: 'https://github.com/SunbalAzizLCWU/ai-resume-analyzer',
    img: '/proj-resume.webp',
  },
  {
    title: 'Salary Insights Dashboard',
    desc: 'A backend/data engineering pipeline and interactive multi-dimensional analytics dashboard built on a serverless PostgreSQL layer. Visualizes real-time salary trend telemetry across education, experience, gender, and role vectors.',
    tags: ['Python', 'Pandas', 'SQLAlchemy', 'PostgreSQL', 'Streamlit', 'Plotly'],
    categories: ['aiml', 'automation'],
    live: true,
    liveUrl: 'https://salary-trends-dashboard.streamlit.app/',
    githubUrl: 'https://github.com/SunbalAzizLCWU/salary-trends-dashboard',
    img: '/proj-salary.webp',
  },
  {
    title: 'Enterprise AI Spam Detection',
    desc: 'A decoupled ML architecture consisting of a containerized, high-performance REST API for inference and a modern client-side web application. Leverages NLP to classify threat vectors in real-time with over 97% accuracy.',
    tags: ['Python', 'FastAPI', 'scikit-learn', 'Streamlit', 'Docker'],
    categories: ['aiml', 'automation'],
    live: true,
    liveUrl: 'https://ml-spam-classifier.streamlit.app/',
    githubUrl: 'https://github.com/SunbalAzizLCWU/ml-spam-classifier',
    img: '/proj-spam.webp',
  },
  {
    title: 'TaskFlow AI',
    desc: 'An open-source, full-stack project management platform with AI-driven task prioritization, real-time collaboration, advanced analytics, and secure role-based permissions. Completely free and self-hostable.',
    tags: ['Next.js', 'React', 'TypeScript', 'PostgreSQL'],
    categories: ['react', 'automation'],
    live: true,
    liveUrl: 'https://sunbalazizlcwu.github.io/taskflow-automation-suite/',
    githubUrl: 'https://github.com/SunbalAzizLCWU/taskflow-automation-suite',
    img: '/proj-taskflow.webp',
  },
]

const filters = [
  { label: 'All Projects', value: 'all' },
  { label: 'AI/ML', value: 'aiml' },
  { label: 'React', value: 'react' },
  { label: 'Automations', value: 'automation' },
]

export default function Projects() {
  const [active, setActive] = useState('all')

  const visible = projects.filter(p => active === 'all' || p.categories.includes(active))

  const handleMouseMove = (e, el) => {
    const rect = el.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    el.style.setProperty('--x', `${x}%`)
    el.style.setProperty('--y', `${y}%`)
  }

  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col font-body-md overflow-x-hidden">
      <Navbar />
      <main className="flex-grow pt-[120px] pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        <header className="mb-16 text-center md:text-left">
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
            Selected <span className="text-primary text-glow">{'{Works}'}</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            A showcase of technical architecture, machine learning integrations, and full-stack solutions built with precision.
          </p>
        </header>

        <div className="flex flex-wrap gap-4 mb-12 justify-center md:justify-start">
          {filters.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActive(value)}
              className={`px-6 py-2 rounded-full border font-label-caps text-label-caps transition-all duration-300 ${active === value ? 'filter-btn active' : 'border-outline-variant/30 text-on-surface-variant hover:border-primary/50'}`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          {visible.map(({ title, desc, tags, live, liveUrl, githubUrl, img }) => (
            <article
              key={title}
              className="glass-panel rounded-xl overflow-hidden group flex flex-col relative spotlight-card"
              style={{boxShadow:'0 0 30px rgba(80,200,120,0.15)',transition:'box-shadow 0.3s ease'}}
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 40px rgba(80,200,120,0.3)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 30px rgba(80,200,120,0.15)'}
            >
              <div className="relative h-[220px] w-full overflow-hidden bg-surface-container">
                <img
                  alt={`${title} screenshot`}
                  className="w-full h-full object-cover object-top opacity-80 group-hover:scale-105 transition-transform duration-700"
                  src={img}
                  loading="lazy"
                  decoding="async"
                  width="900"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
                {live && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-surface/80 backdrop-blur border border-primary/30 text-primary px-3 py-1 rounded text-xs font-code-display flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">{'\ueb9b'}</span> Live
                    </span>
                  </div>
                )}
              </div>
              <div className="p-8 flex-grow flex flex-col relative z-10">
                <h2 className="font-headline-md text-headline-md text-on-surface mb-3 group-hover:text-primary transition-colors duration-300">{title}</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">{desc}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {tags.map(t => <span key={t} className="px-3 py-1 rounded border border-primary/20 bg-primary/5 font-code-display text-[12px] text-tertiary">{t}</span>)}
                </div>
                <div className="flex items-center gap-4 mt-auto border-t border-outline-variant/20 pt-4">
                  {live && (
                    <a className="flex items-center gap-2 font-label-caps text-label-caps text-primary hover:text-primary-fixed transition-colors" href={liveUrl} target="_blank" rel="noopener noreferrer">
                      <span className="material-symbols-outlined text-[18px]">{'\ue89e'}</span> Live Demo
                    </a>
                  )}
                  <a className="flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors" href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <span className="material-symbols-outlined text-[18px]">{'\ue86f'}</span> GitHub Repo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
