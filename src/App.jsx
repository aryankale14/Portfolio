import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Terminal from './components/Terminal'

function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false)
  const [activeProjectModal, setActiveProjectModal] = useState(null)

  // Lock body scroll when a modal or terminal is open
  useEffect(() => {
    if (isTerminalOpen || activeProjectModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isTerminalOpen, activeProjectModal])

  // Support ESC key to close open overlays
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsTerminalOpen(false)
        setActiveProjectModal(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      {/* Top Navigation */}
      <Navbar 
        onToggleTerminal={() => setIsTerminalOpen(prev => !prev)} 
        isTerminalOpen={isTerminalOpen} 
      />

      {/* Main Viewport Header Section */}
      <Hero onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Main Section Content */}
      <main>
        <About />
        <Skills />
        <Experience />
        <Projects onOpenProjectModal={(proj) => setActiveProjectModal(proj)} />
        <Education />
        <Contact />
      </main>

      {/* Footer Meta */}
      <Footer />

      {/* Interactive Developer Terminal console */}
      <Terminal 
        isOpen={isTerminalOpen} 
        onClose={() => setIsTerminalOpen(false)} 
      />

      {/* Project Spec Details Modal */}
      {activeProjectModal && (
        <div className="modal-backdrop" onClick={() => setActiveProjectModal(null)}>
          <div className="modal-window" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-block">
                <span className="modal-subtitle">SPEC_SHEET // {activeProjectModal.period}</span>
                <h2 className="modal-title">{activeProjectModal.title}</h2>
              </div>
              <button 
                type="button" 
                className="modal-close"
                onClick={() => setActiveProjectModal(null)}
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>
            
            <div className="modal-body">
              <div>
                <div className="modal-desc-header">// TECHNICAL DESCRIPTION & DEPLOYMENT</div>
                <p className="about-bio" style={{ marginBottom: '16px' }}>{activeProjectModal.shortDesc}</p>
                <ul className="modal-bullets">
                  {activeProjectModal.bullets.map((bullet, idx) => (
                    <li key={idx} className="modal-bullet-item">{bullet}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <div className="modal-tech-header">// TECH_STACK_SPECIFICATION</div>
                <div className="tech-tags modal-tags">
                  {activeProjectModal.tech.map((t, idx) => (
                    <span key={idx} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="modal-footer">
              <button 
                type="button" 
                className="btn"
                onClick={() => setActiveProjectModal(null)}
              >
                Close Specs
              </button>
              <a 
                href={activeProjectModal.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
              >
                Launch App
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App
