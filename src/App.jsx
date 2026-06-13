import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

// Eager load Home (it's the entry point)
import Home from './pages/Home'

// Lazy load all other pages — they won't block initial render
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Projects = lazy(() => import('./pages/Projects'))
const Certifications = lazy(() => import('./pages/Certifications'))
const Contact = lazy(() => import('./pages/Contact'))

// Minimal fallback - matches site background to avoid flash
const PageFallback = () => (
  <div style={{ minHeight: '100vh', background: '#111415' }} />
)

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
