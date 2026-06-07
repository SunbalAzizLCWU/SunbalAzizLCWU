import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const certs = [
  { abbr: 'IBM', title: 'Full Stack Software Developer', id: 'IBM-FSD-2023', tags: ['React', 'Node.js', 'Cloud'] },
  { abbr: 'ANTH', title: 'Advanced Prompt Engineering', id: 'ANTH-PE-094', tags: ['Claude', 'LLMs'] },
  { abbr: 'PST', title: 'API Fundamentals Student Expert', id: 'PST-API-21', tags: ['REST', 'Testing'] },
  { abbr: 'AWS', title: 'Solutions Architect Associate', id: 'AWS-SAA-C03', tags: ['Cloud', 'Architecture'] },
  { abbr: 'META', title: 'Front-End Developer Professional', id: 'META-FED-88', tags: ['React', 'UI/UX'] },
]

export default function Certifications() {
  return (
    <div className="min-h-screen flex flex-col font-body-md text-body-md bg-surface text-on-surface">
      <Navbar />
      <main className="flex-grow pt-[100px] pb-margin-desktop px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        <header className="mb-16">
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4">
            Verified <span className="text-primary">{'{'}</span>Credentials<span className="text-primary">{'}'}</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            A comprehensive log of industry-standard certifications, validating expertise across artificial intelligence, cloud architecture, and modern development paradigms.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {certs.map(({ abbr, title, id, tags }) => (
            <div key={id} className="glass-panel rounded-xl p-6 flex flex-col gap-4 hover:shadow-[0_0_30px_rgba(80,200,120,0.3)] hover:border-primary/50 transition-all duration-300 cursor-pointer group">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 bg-surface-container-high rounded flex items-center justify-center border border-outline-variant/30">
                  <span className="font-code-display text-code-display text-primary">{abbr}</span>
                </div>
                <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">open_in_new</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md mb-1">{title}</h3>
                <p className="font-code-display text-code-display text-on-surface-variant text-sm">ID: {id}</p>
              </div>
              <div className="mt-auto pt-4 border-t border-outline-variant/20 flex gap-2 flex-wrap">
                {tags.map(t => (
                  <span key={t} className="px-2 py-1 border border-primary/20 rounded bg-primary/5 font-label-caps text-label-caps text-primary">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
