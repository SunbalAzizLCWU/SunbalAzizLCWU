import { useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const services = [
  {
    icon: '\uef54',
    title: 'Full Stack Dev',
    desc: 'End-to-end development of robust web applications. Architecting scalable backends and crafting highly responsive, accessible frontend interfaces that deliver seamless user experiences.',
    stack: ['React', 'Node.js', 'Next.js', 'TypeScript'],
    link: 'View E-Commerce Case Study'
  },
  {
    icon: '\ue322',
    title: 'AI Systems',
    desc: 'Integrating machine learning models into production environments. Designing data pipelines, optimizing inference endpoints, and building intelligent features that scale securely.',
    stack: ['Python', 'TensorFlow', 'PyTorch', 'AWS SageMaker'],
    link: 'View Predictive Engine Case Study'
  },
  {
    icon: '\uf1b7',
    title: 'API Design',
    desc: 'Creating robust, well-documented, and secure RESTful and GraphQL APIs. Focusing on versioning, rate limiting, and performance optimization for mission-critical microservices.',
    stack: ['GraphQL', 'REST', 'Express', 'PostgreSQL'],
    link: 'View Fintech Gateway Case Study'
  },
  {
    icon: '\uf190',
    title: 'Data Analysis',
    desc: 'Extracting actionable insights from complex datasets. Designing dashboards, implementing ETL processes, and applying statistical models to drive informed business decisions.',
    stack: ['Pandas', 'SQL', 'Tableau', 'Jupyter'],
    link: 'View Marketing Analytics Case Study'
  }
]

export default function Services() {
  const handleMouseMove = (e, el) => {
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--x', `${e.clientX - rect.left}px`)
    el.style.setProperty('--y', `${e.clientY - rect.top}px`)
  }

  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col font-body-md overflow-x-hidden">
      <Navbar />
      <main className="flex-grow pt-[120px] pb-24 relative">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <header className="mb-20 glass-panel p-12 md:p-20 text-center relative overflow-hidden" style={{borderRadius:'100px 100px 0 0'}}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
            <h1 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-on-surface mb-6 relative z-10">
              <span className="text-primary">{'{'}</span> Engineering Solutions <span className="text-primary">{'}'}</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto relative z-10">
              Architecting robust, scalable, and intelligent systems. From foundational database design to predictive AI models, delivering end-to-end technical excellence.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {services.map(({ icon, title, desc, stack, link }) => (
              <div
                key={title}
                className="glass-panel rounded-xl p-8 spotlight-card emerald-glow-hover transition-all duration-300 flex flex-col h-full group relative overflow-hidden"
                onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center border border-primary/30 group-hover:border-primary transition-colors">
                    <span className="material-symbols-outlined text-primary text-[28px]">{icon}</span>
                  </div>
                  <h2 className="font-headline-md text-headline-md text-on-surface">{title}</h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">{desc}</p>
                <div className="mb-8">
                  <p className="font-label-caps text-label-caps text-primary mb-3">TECH STACK</p>
                  <div className="flex flex-wrap gap-2">
                    {stack.map(t => (
                      <span key={t} className="px-3 py-1 rounded-full border border-primary/20 bg-primary/5 font-code-display text-[12px] text-on-surface">{t}</span>
                    ))}
                  </div>
                </div>
                <a className="inline-flex items-center gap-2 font-code-display text-code-display text-primary hover:text-primary-fixed transition-colors mt-auto w-fit" href="#">
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  {link}
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
