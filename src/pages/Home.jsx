import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

const techStack = ['React','Next.js','Python','Flask','Supabase','Vercel','HTML5','CSS3','JavaScript','TypeScript','Tailwind','Redux','MongoDB','Express','Node.js','TensorFlow','PyTorch','Scikit-learn','LangChain','OpenAI','Claude API','Hugging Face','Git','Docker','AWS']

const techIcons = {
  'React':'data_object','Next.js':'terminal','Python':'code','Flask':'api','Supabase':'database','Vercel':'cloud','HTML5':'html','CSS3':'css','JavaScript':'javascript','TypeScript':'code_blocks','Tailwind':'palette','Redux':'account_tree','MongoDB':'storage','Express':'router','Node.js':'javascript','TensorFlow':'psychology','PyTorch':'neurology','Scikit-learn':'analytics','LangChain':'link','OpenAI':'smart_toy','Claude API':'robot_2','Hugging Face':'face','Git':'commit','Docker':'dock','AWS':'cloud_queue'
}

export default function Home() {
  return (
    <div className="antialiased font-body-md bg-background min-h-screen flex flex-col relative">
      <Navbar />
      <main className="flex-grow pt-24 md:pt-32">

        {/* Hero */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
          <div className="flex flex-col gap-6 relative z-10">
            <span className="font-code-display text-code-display text-primary">Hey! 👋</span>
            <h1 className="font-headline-lg-mobile md:font-headline-xl text-headline-lg-mobile md:text-headline-xl text-on-surface">
              I am Sunbal <br className="hidden md:block" /> <span className="code-bracket">{'{'}</span>Aziz<span className="code-bracket">{'}'}</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              Software Engineering graduate specializing in full-stack web development, AI integration, and data analysis.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <span className="px-3 py-1 text-xs font-code-display border border-primary/30 rounded bg-primary/5 text-primary">[Next.js]</span>
              <span className="px-3 py-1 text-xs font-code-display border border-primary/30 rounded bg-primary/5 text-primary">&lt;AI/ML&gt;</span>
              <span className="px-3 py-1 text-xs font-code-display border border-primary/30 rounded bg-primary/5 text-primary">n8n</span>
            </div>
            <div className="mt-8 flex items-center gap-6">
              <Link to="/contact" className="px-8 py-4 bg-primary text-background font-headline-md text-[16px] flex items-center gap-2 hover:shadow-[0_0_40px_rgba(80,200,120,0.3)] transition-all duration-300 rounded-sm cursor-pointer group">
                Get Started
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>

          <div className="relative w-full max-w-md mx-auto md:ml-auto md:mr-0 z-10 flex justify-center">
            <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full -z-10"></div>
            <div className="arch-container glass-panel p-2 relative w-full aspect-[3/4]">
              <img
  alt="Sunbal Aziz Portrait"
  className="w-full h-full object-cover object-[center_80%] scale-110 arch-container mix-blend-luminosity opacity-90"
  src="/hero-988.webp"
  srcSet="/hero-600.webp 600w, /hero-988.webp 988w, /hero.webp 1363w"
  sizes="(max-width: 768px) 600px, 988px"
  width="988"
  height="837"
  loading="eager"
  fetchpriority="high"
  decoding="sync"
/>

            </div>
            <div className="absolute -left-6 top-1/4 px-4 py-2 glass-panel rounded font-code-display text-xs text-primary animate-pulse">
              {'{"status": "coding"}'}
            </div>
            <div className="absolute -right-4 bottom-1/3 p-3 glass-panel rounded-full text-primary emerald-glow">
              <span className="material-symbols-outlined text-2xl">memory</span>
            </div>
          </div>
        </section>

        {/* Tech Banner */}
        <section className="border-y border-outline-variant/10 bg-surface-container-lowest py-8 overflow-hidden relative">
          <div className="w-full mask-edges">
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused] opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {[...techStack, ...techStack].map((tech, i) => (
                <div key={i} className="flex items-center gap-2 font-code-display text-on-surface whitespace-nowrap px-6">
                  <span className="material-symbols-outlined text-primary">{techIcons[tech] || 'code'}</span>
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center" id="about">
          <div className="glass-panel rounded-lg overflow-hidden border border-outline-variant/30 shadow-2xl relative group">
            <div className="bg-surface-container-highest px-4 py-2 border-b border-outline-variant/30 flex gap-2 items-center">
              <div className="w-3 h-3 rounded-full bg-error/50"></div>
              <div className="w-3 h-3 rounded-full bg-primary/50"></div>
              <div className="w-3 h-3 rounded-full bg-tertiary/50"></div>
              <span className="ml-4 font-code-display text-[10px] text-on-surface-variant">profile.json</span>
            </div>
            <div className="p-6 font-code-display text-sm text-on-surface overflow-x-auto">
              <pre><code className="text-on-surface-variant">{`{
  `}<span className="text-primary">"name"</span>{`: "Sunbal Aziz",
  `}<span className="text-primary">"role"</span>{`: "Software Engineer",
  `}<span className="text-primary">"focus"</span>{`: ["Full-Stack", "AI/ML"],
  `}<span className="text-primary">"location"</span>{`: "Remote",
  `}<span className="text-primary">"education"</span>{`: {
    "degree": "BS Software Engineering",
    "status": "Graduated"
  }
}`}</code></pre>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
              Things you should know <span className="code-bracket">{'{before starting}'}</span>!
            </h2>
            <div className="flex border-b border-outline-variant/20 gap-8">
              <button className="font-code-display text-primary border-b-2 border-primary pb-2 text-sm cursor-pointer">Experience</button>
              <button className="font-code-display text-on-surface-variant pb-2 text-sm hover:text-on-surface transition-colors cursor-pointer">Education</button>
              <button className="font-code-display text-on-surface-variant pb-2 text-sm hover:text-on-surface transition-colors cursor-pointer">Stack</button>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                <div>
                  <h3 className="font-headline-md text-[18px] text-on-surface">Web Developer Intern</h3>
                  <p className="font-code-display text-xs text-primary mt-1">CodeAlpha | Sep 2023 - Oct 2023</p>
                  <p className="font-body-md text-on-surface-variant mt-2 text-sm">Developed responsive frontend components and collaborated on RESTful API integration.</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-outline-variant/10">
              <div>
                <div className="font-code-display text-primary text-xl">&gt;_ 5+</div>
                <div className="font-body-md text-xs text-on-surface-variant mt-1">Projects Built</div>
              </div>
              <div>
                <div className="font-code-display text-primary text-xl">&gt;_ AI</div>
                <div className="font-body-md text-xs text-on-surface-variant mt-1">Focus Area</div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Architecture */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24">
          <div className="mb-12">
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Core <span className="code-bracket">{'{Architecture}'}</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: 'layers', title: 'Full Stack Development', desc: 'Scalable web applications built with Next.js, React, and robust backend architectures.' },
              { icon: 'psychology', title: 'AI Systems Architecture', desc: 'Integrating LLMs and machine learning models into production-ready software solutions.' },
              { icon: 'settings_input_component', title: 'API Design & Automation', desc: 'Designing RESTful APIs and workflow automations using n8n and custom Python scripts.' },
              { icon: 'monitoring', title: 'Data Analysis', desc: 'Transforming complex datasets into actionable insights with interactive visualizations.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-[#18181B] border-t-2 border-primary p-8 rounded-lg glass-panel hover:emerald-glow transition-all duration-300">
                <span className="material-symbols-outlined text-primary text-3xl mb-4 block">{icon}</span>
                <h3 className="font-headline-md text-xl text-on-surface mb-3">{title}</h3>
                <p className="font-code-display text-sm text-on-surface-variant">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Preview */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24" id="projects">
          <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
              A look at my <span className="code-bracket">{'{completed projects}'}</span>
            </h2>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-1 text-xs font-code-display border border-primary text-primary bg-primary/10 rounded cursor-pointer">All</button>
              <button className="px-4 py-1 text-xs font-code-display border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-colors cursor-pointer">AI/ML</button>
              <button className="px-4 py-1 text-xs font-code-display border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-colors cursor-pointer">React</button>
              <button className="px-4 py-1 text-xs font-code-display border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-colors cursor-pointer">Automations</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'AI-Powered Resume Analyzer',
                desc: 'An intelligent system that parses CVs and scores them against job descriptions using NLP and machine learning algorithms.',
                tags: ['Python', 'NLP', 'React'],
                preview: (
                  <div className="w-full max-w-sm aspect-video bg-[#0A0A0A] rounded-t-lg border-x-4 border-t-4 border-surface-variant shadow-2xl relative z-10 flex flex-col overflow-hidden">
                    <div className="h-4 bg-surface-variant flex items-center px-2 gap-1">
                      <div className="w-2 h-2 rounded-full bg-error"></div>
                      <div className="w-2 h-2 rounded-full bg-tertiary"></div>
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <div className="flex-grow bg-background p-2 font-code-display text-[8px] text-primary opacity-70">
                      &gt; Analyzing resume...<br/>&gt; Extracting entities...<br/>&gt; Match score: 87%
                    </div>
                  </div>
                )
              },
              {
                title: 'Pakistani Salary Trends Dashboard',
                desc: 'Interactive data visualization dashboard analyzing tech industry compensation across different roles and experience levels.',
                tags: ['Data Analysis', 'Next.js', 'Chart.js'],
                preview: (
                  <div className="w-full max-w-sm aspect-video bg-[#0A0A0A] rounded-t-lg border-x-4 border-t-4 border-surface-variant shadow-2xl relative z-10 flex flex-col overflow-hidden">
                    <div className="h-4 bg-surface-variant flex items-center px-2 gap-1">
                      <div className="w-2 h-2 rounded-full bg-surface-container-low"></div>
                    </div>
                    <div className="flex-grow bg-background p-4 flex gap-2 items-end">
                      <div className="w-4 bg-primary/40 h-1/3"></div>
                      <div className="w-4 bg-primary/60 h-2/3"></div>
                      <div className="w-4 bg-primary h-full"></div>
                      <div className="w-4 bg-primary/80 h-3/4"></div>
                    </div>
                  </div>
                )
              }
            ].map(({ title, desc, tags, preview }) => (
              <div key={title} className="glass-panel rounded-xl overflow-hidden group cursor-pointer">
                <div className="h-64 bg-surface-container-highest relative overflow-hidden flex items-center justify-center p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                  {preview}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-headline-md text-[20px] text-on-surface group-hover:text-primary transition-colors">{title}</h3>
                    <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">open_in_new</span>
                  </div>
                  <p className="font-body-md text-sm text-on-surface-variant mb-4">{desc}</p>
                  <div className="flex gap-2 flex-wrap">
                    {tags.map(t => <span key={t} className="text-[10px] font-code-display text-primary bg-primary/5 px-2 py-1 rounded">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="border-t border-outline-variant/10 py-24 relative overflow-hidden" id="contact">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(80,200,120,0.05),_transparent_50%)] pointer-events-none"></div>
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative h-full min-h-[400px] flex items-center justify-center glass-panel rounded-xl border border-primary/20 bg-surface-container-lowest/50 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(80,200,120,0.1),_transparent_70%)] pointer-events-none"></div>
              <div className="absolute inset-0 opacity-20" style={{backgroundImage:'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',backgroundSize:'20px 20px'}}></div>
              <div className="absolute w-[300px] h-[300px] border border-primary/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute w-[200px] h-[200px] border border-primary/30 rounded-full border-dashed animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="absolute w-[100px] h-[100px] border-2 border-primary/50 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="relative z-10 w-20 h-20 bg-[#0A0A0A] border border-primary rounded-lg flex items-center justify-center emerald-glow-strong">
                <span className="material-symbols-outlined text-primary text-4xl">terminal</span>
              </div>
              <div className="absolute top-10 left-10 px-3 py-1 bg-background/80 border border-primary/30 rounded text-primary font-code-display text-[10px]">SYS.READY</div>
              <div className="absolute bottom-10 right-10 px-3 py-1 bg-background/80 border border-primary/30 rounded text-primary font-code-display text-[10px] flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>SECURE_CHANNEL
              </div>
            </div>

            <div className="flex flex-col gap-8 relative z-10">
              <div>
                <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-2">
                  Initialize <span className="code-bracket">{'{Connection}'}</span>
                </h2>
                <p className="font-body-md text-on-surface-variant">Ready to compile some ideas? Send a request payload.</p>
              </div>
              
                <ContactForm variant="default" />


            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
