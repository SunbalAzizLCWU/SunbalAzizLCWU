import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const projects = [
  {
    title: 'AI-Powered Resume Analyzer',
    desc: 'An intelligent system leveraging NLP models to parse, evaluate, and score technical resumes against job descriptions, providing actionable feedback to candidates.',
    tags: ['Python', 'React', 'OpenAI API', 'FastAPI'],
    categories: ['aiml', 'react'],
    live: true,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLMNg8dfNzRhYfhfV2ep63Ztn7OMjgLsJiYhTInf202gj3SF48Yqj--v0ZcNYhUMC1UVrmelAEk_mH2eXMQW6CdU7UZWNt17mw56LwsqT9m7c7fqDigpTIbgPhbBW4L98vUH7uUfqQecHkyjIUabxoK7Fi7xE66nWUs-hK4sn6FO-kI-3Ou3GZjjfo9QRnVCSknPb2GXH7lBT__MsJaZU1q7VuLmebE3pi2rvy-ShpLpBbugVh6-gHeM0Z2X2ZUN93Sl9wLJb1RMWg'
  },
  {
    title: 'Pakistani Salary Trends Dashboard',
    desc: 'A comprehensive, interactive data visualization tool mapping compensation metrics across tech roles in Pakistan, utilizing extensive scraped datasets.',
    tags: ['React', 'D3.js', 'Tailwind CSS'],
    categories: ['react'],
    live: true,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTbrbAFQgQbzSBJXF0qkCQe_N3g3W2iRz1rwgCV_1Ky2WI0jiVVG24xDBttL6aphB7bZ7DqFX7Q0hgV2eOIY9QiHAid6XQTWVr5YQV6hVmD8hV4CrcLGJm3B3oQRim7O0mkRy01sYeXzRHI65FZ7UGnDZsNh4ZHkbnSSsL3VHti8Z29QdxhTyJzahMpk1kH-c3QH56HlbTpsfVVhxwOA2FKJws36nZvRnupdeVFHUMPdotXWW7dwpfifTuOtX-ozYa69grsSY99YG0'
  },
  {
    title: 'TaskFlow Automation Suite',
    desc: 'A full-stack productivity tool integrating automated webhook triggers, allowing users to sync tasks across multiple platforms effortlessly.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL'],
    categories: ['react', 'automation'],
    live: true,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClFhnD_ITHT97BmppQ1_X4gyKbJ4x9RgzYaECnyiKza1siBMB23VLkz0sh2-MZQYRjrQR_zuF4u_W_2mgJCR9TZbIvjUid-nKxPAw4Q4bJZsYrPpWc3hDBmNV99VYDUH1C0vCMRGye5MMT8IZadwWvH4SA_G6O1di05MPdWGa_fpVZoo-TJ5mDM9rQkfUcbhpMRIYAWgeHv-nQ2zrPlCU2gtmqOaTb9GSgiKAQfECfxfg-MYP2s-WfB6a2ZZpfl53T0lteEPgsgeGI'
  },
  {
    title: 'Neural Spam Filter',
    desc: 'A robust machine learning model deployed as a microservice, capable of classifying incoming communications with 99.2% accuracy using custom trained neural networks.',
    tags: ['TensorFlow', 'Python', 'Docker'],
    categories: ['aiml', 'automation'],
    live: false,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2YuPHduaUMj22hb6x3W6RCtDbzkyOT_EtsL9nTODIPfNktOXFh6Ovd4iSnGQB89cZIWYGP-jUFDEHGjQ1BKWZIk42vXKHIIOBfE3zRosP_fycFcpXe9QnRTIZVLZfzWQKZ9W9lMJJmnLcEiIxsornIyi3s7UWK9S771oYcyWup6OF3b2_siggGPgmdFA5_8M4qj4OjbFEPbeC_bSzXVbZL2Ytt3eywtvgERIqaP_QwqwbpchBvYRwV4lkickWyohBzcAQWRd13UaK'
  }
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
          {visible.map(({ title, desc, tags, live, img }) => (
            <article
              key={title}
              className="glass-panel rounded-xl overflow-hidden group flex flex-col relative spotlight-card"
              style={{boxShadow:'0 0 30px rgba(80,200,120,0.15)',transition:'box-shadow 0.3s ease'}}
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 40px rgba(80,200,120,0.3)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 30px rgba(80,200,120,0.15)'}
            >
              <div className="relative h-[250px] w-full overflow-hidden bg-surface-container">
                <img alt={title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src={img} />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
                {live && (
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span className="bg-surface/80 backdrop-blur border border-primary/30 text-primary px-3 py-1 rounded text-xs font-code-display flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">rocket_launch</span> Live
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
                    <a className="flex items-center gap-2 font-label-caps text-label-caps text-primary hover:text-primary-fixed transition-colors" href="#">
                      <span className="material-symbols-outlined text-[18px]">open_in_new</span> Live Demo
                    </a>
                  )}
                  <a className="flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors" href="#">
                    <span className="material-symbols-outlined text-[18px]">code</span> GitHub Repo
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
