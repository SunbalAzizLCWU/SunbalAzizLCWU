import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col font-body-md">
      <Navbar />
      <main className="flex-grow w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-12 pt-32">

        {/* Hero */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-24">
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 z-10">
            <div>
              <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface mb-4">
                Architecting <span className="text-primary text-glow">Intelligence</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                I am a software engineer specializing in scalable architectures and machine learning systems. My focus is on transforming complex computational problems into elegant, highly performant solutions. With a deep foundation in computer science from LCWU, I bridge the gap between theoretical algorithms and production-ready applications.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              {['Software Engineering', 'Machine Learning', 'System Design'].map(tag => (
                <span key={tag} className="px-4 py-2 bg-surface-container-high border border-primary/20 text-on-surface font-code-display text-code-display rounded-sm shadow-[0_0_10px_rgba(80,200,120,0.1)]">{tag}</span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative mt-12 lg:mt-0 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[400px] aspect-[3/4] overflow-hidden glass-panel p-2 shadow-[0_0_50px_rgba(80,200,120,0.15)] group" style={{borderRadius:'120px 120px 12px 12px'}}>
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-50 z-10"></div>
              <img
  alt="Sunbal Aziz Portrait"
  className="w-full h-full object-cover object-center arch-container mix-blend-luminosity opacity-80"
  src="/about-hero.webp"
  loading="eager"
  fetchpriority="high"
/>
            </div>
          </div>
        </section>

        {/* Terminal & Skills */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-24">
          <div className="lg:col-span-8 glass-panel rounded-lg overflow-hidden flex flex-col h-[500px]">
            <div className="bg-surface-container-high border-b border-outline-variant/30 px-4 py-3 flex items-center justify-between">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-error/70"></div>
                <div className="w-3 h-3 rounded-full bg-tertiary-container/70"></div>
                <div className="w-3 h-3 rounded-full bg-primary/70"></div>
              </div>
              <div className="font-code-display text-code-display text-on-surface-variant text-xs">sunbal@system: ~/profile.json</div>
              <div></div>
            </div>
            <div className="p-6 bg-surface-container-lowest flex-grow overflow-auto font-code-display text-[13px] leading-loose text-on-surface-variant">
              <pre>
                <span className="text-primary">{'{'}</span>{'\n'}
                {'  '}<span className="text-secondary">"name"</span>: <span className="text-primary">"Sunbal Aziz"</span>,{'\n'}
                {'  '}<span className="text-secondary">"role"</span>: <span className="text-primary">"Software Engineer"</span>,{'\n'}
                {'  '}<span className="text-secondary">"location"</span>: <span className="text-primary">"Lahore, Pakistan"</span>,{'\n'}
                {'  '}<span className="text-secondary">"education"</span>: <span className="text-primary">{'{'}</span>{'\n'}
                {'    '}<span className="text-secondary">"institution"</span>: <span className="text-primary">"Lahore College for Women University"</span>,{'\n'}
                {'    '}<span className="text-secondary">"degree"</span>: <span className="text-primary">"BS Computer Science"</span>,{'\n'}
                {'    '}<span className="text-secondary">"status"</span>: <span className="text-primary">"Completed"</span>{'\n'}
                {'  '}<span className="text-primary">{'}'}</span>,{'\n'}
                {'  '}<span className="text-secondary">"core_competencies"</span>: <span className="text-primary">{'['}</span>{'\n'}
                {'    '}<span className="text-primary">"Full-Stack Development"</span>,{'\n'}
                {'    '}<span className="text-primary">"API Design"</span>,{'\n'}
                {'    '}<span className="text-primary">"Data Structures &amp; Algorithms"</span>,{'\n'}
                {'    '}<span className="text-primary">"Cloud Deployment"</span>{'\n'}
                {'  '}<span className="text-primary">{']'}</span>,{'\n'}
                {'  '}<span className="text-secondary">"status"</span>: <span className="text-primary">"Actively building the future."</span>{'\n'}
                <span className="text-primary">{'}'}</span><span className="animate-pulse inline-block w-2 h-4 bg-primary ml-1 align-middle"></span>
              </pre>
            </div>
          </div>

          <div className="lg:col-span-4 glass-panel rounded-lg p-6 flex flex-col">
            <h3 className="font-headline-md text-headline-md text-on-surface mb-6 flex items-center">
              <span className="material-symbols-outlined text-primary mr-2">memory</span> Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3 mt-auto mb-auto">
              {['Python','JavaScript','React','Node.js','PostgreSQL','Docker','AWS','TensorFlow','Git','Linux'].map(tech => (
                <div key={tech} className={`px-3 py-1.5 border rounded text-sm font-code-display cursor-default transition-colors ${['Python','Node.js','AWS'].includes(tech) ? 'border-primary/30 text-primary bg-primary/5 hover:bg-primary/20' : 'border-outline-variant text-on-surface-variant hover:border-primary/50'}`}>
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Timeline */}
        <section className="mb-24">
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface mb-12 flex items-center justify-center text-center">
            <span className="text-primary mr-3">{'{'}</span> Academic Record <span className="text-primary ml-3">{'}'}</span>
          </h2>
          <div className="relative max-w-3xl mx-auto pl-8 md:pl-0">
            <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-outline-variant to-transparent -translate-x-1/2"></div>
            <div className="relative mb-12 md:w-1/2 md:pr-12 md:text-right">
              <div className="absolute left-[-41px] md:left-auto md:right-[-8px] top-1 w-4 h-4 rounded-full bg-surface border-2 border-primary z-10 emerald-glow"></div>
              <div className="glass-panel p-6 rounded-lg ml-4 md:ml-0 hover:shadow-[0_0_20px_rgba(80,200,120,0.1)] transition-shadow">
                <span className="font-code-display text-code-display text-primary block mb-2">2022 - 2026</span>
                <h4 className="font-headline-md text-[20px] font-bold text-on-surface mb-1">BS Computer Science</h4>
                <p className="font-body-md text-on-surface-variant mb-3">Lahore College for Women University (LCWU)</p>
                <ul className="font-body-md text-sm text-on-surface-variant space-y-2 text-left md:text-right">
                  <li className="flex items-start md:justify-end">
                    <span className="text-primary font-code-display mr-2 md:hidden">&gt;</span>
                    <span>Graduated with Honors.</span>
                    <span className="text-primary font-code-display ml-2 hidden md:inline">&lt;</span>
                  </li>
                  <li className="flex items-start md:justify-end">
                    <span className="text-primary font-code-display mr-2 md:hidden">&gt;</span>
                    <span>Final Year Project: Intelligent Traffic Management System using Computer Vision.</span>
                    <span className="text-primary font-code-display ml-2 hidden md:inline">&lt;</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
