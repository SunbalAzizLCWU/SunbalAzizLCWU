export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full py-12 px-margin-mobile md:px-margin-desktop border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-gutter">
      <div className="font-code-display text-primary">
        Sunbal <span className="text-on-surface">{'{Aziz}'}</span>
      </div>
      <div className="font-label-caps text-label-caps text-outline">
        © 2024 Sunbal Aziz. Built with Lucid precision.
      </div>
      <div className="flex gap-6 font-label-caps text-label-caps text-outline">
        <a href="#" className="hover:text-primary transition-colors">GitHub</a>
        <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-primary transition-colors">Twitter</a>
      </div>
    </footer>
  )
}
