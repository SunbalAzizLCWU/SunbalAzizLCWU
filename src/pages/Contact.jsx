import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full flex flex-col md:flex-row gap-gutter">

        {/* Left: Info + Terminal */}
        <div className="flex-1 flex flex-col gap-8">
          <div>
            <h1 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-on-surface mb-4">
              Initialize <span className="text-primary" style={{textShadow:'0 0 10px rgba(80,200,120,0.5)'}}>{'{'}</span>
              <span className="text-primary" style={{textShadow:'0 0 10px rgba(80,200,120,0.5)'}}>Connection</span>
              <span className="text-primary" style={{textShadow:'0 0 10px rgba(80,200,120,0.5)'}}>{'}'}</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
              Open a secure channel for collaboration. Transmit project parameters or engage in technical dialogue.
            </p>
          </div>

          <div className="glass-panel rounded-xl p-6 flex-grow flex flex-col relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="flex items-center gap-2 mb-6 border-b border-outline-variant/30 pb-4">
              <span className="w-3 h-3 rounded-full bg-error/80"></span>
              <span className="w-3 h-3 rounded-full bg-[#f5d44f]/80"></span>
              <span className="w-3 h-3 rounded-full bg-primary/80"></span>
              <span className="ml-4 font-code-display text-code-display text-primary/70">sunbal_aziz@node_01 ~ $</span>
            </div>
            <div className="font-code-display text-code-display text-on-surface-variant flex flex-col gap-3">
              <p><span className="text-primary">&gt;</span> STATUS: Listening on port 443...</p>
              <p><span className="text-primary">&gt;</span> AWAITING_PAYLOAD...</p>
              <p className="text-surface-variant">----------------------------------------</p>
              <div className="mt-4 space-y-4">
                <a className="flex items-center gap-3 text-on-surface hover:text-primary transition-colors group/link w-fit" href="mailto:connect@sunbalaziz.com">
                  <span className="material-symbols-outlined text-primary">mail</span>
                  <span>connect@sunbalaziz.com</span>
                </a>
                <div className="flex gap-4 pt-4">
                  {/* LinkedIn */}
                  <a aria-label="LinkedIn" className="w-10 h-10 flex items-center justify-center rounded-lg border border-primary/20 hover:border-primary/60 hover:bg-primary/10 text-primary transition-all duration-300" href="#">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  {/* GitHub */}
                  <a aria-label="GitHub" className="w-10 h-10 flex items-center justify-center rounded-lg border border-primary/20 hover:border-primary/60 hover:bg-primary/10 text-primary transition-all duration-300" href="#">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                  {/* Twitter */}
                  <a aria-label="Twitter" className="w-10 h-10 flex items-center justify-center rounded-lg border border-primary/20 hover:border-primary/60 hover:bg-primary/10 text-primary transition-all duration-300" href="#">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="flex-1 glass-panel p-8 md:p-12 relative overflow-hidden" style={{borderRadius:'100px 100px 0.5rem 0.5rem'}}>
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage:'radial-gradient(#50c878 1px, transparent 1px)',backgroundSize:'20px 20px'}}></div>
          <form className="relative z-10 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-label-caps text-primary uppercase tracking-wider" htmlFor="identity">Identity_String</label>
              <input className="w-full bg-[#0A0A0A] border-0 border-b border-outline-variant text-on-surface font-body-md text-body-md py-3 px-4 rounded-t-DEFAULT input-glow transition-all duration-300 placeholder:text-surface-variant" id="identity" placeholder="Enter your name" type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-label-caps text-primary uppercase tracking-wider" htmlFor="comm_vector">Comm_Vector</label>
              <input className="w-full bg-[#0A0A0A] border-0 border-b border-outline-variant text-on-surface font-body-md text-body-md py-3 px-4 rounded-t-DEFAULT input-glow transition-all duration-300 placeholder:text-surface-variant" id="comm_vector" placeholder="Enter your email" type="email" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-label-caps text-primary uppercase tracking-wider" htmlFor="payload">Data_Payload</label>
              <textarea className="w-full bg-[#0A0A0A] border-0 border-b border-outline-variant text-on-surface font-body-md text-body-md py-3 px-4 rounded-t-DEFAULT input-glow transition-all duration-300 resize-none placeholder:text-surface-variant" id="payload" placeholder="Describe the parameters..." rows="5"></textarea>
            </div>
            <div className="pt-4 flex justify-end">
              <button className="group relative px-8 py-3 bg-primary text-on-primary font-label-caps text-label-caps uppercase rounded-DEFAULT transition-all duration-300 flex items-center gap-2 overflow-hidden hover:shadow-[0_0_40px_rgba(80,200,120,0.5)]" type="button">
                <span className="relative z-10">Transmit_Data</span>
                <span className="material-symbols-outlined relative z-10 text-[18px] group-hover:translate-x-1 transition-transform duration-300">send</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}
