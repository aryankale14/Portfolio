import React from 'react'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-meta">
          <span>AARYAN KALE // AI ENGINEER</span>
          <span className="footer-copyright">&copy; {new Date().getFullYear()} ALL RIGHTS RESERVED</span>
        </div>
        <div className="footer-tech font-mono">
          BUILT_WITH: [REACT + VITE] // DESIGN: [THE_TECHNICAL_LEDGER]
        </div>
      </div>
    </footer>
  )
}

export default Footer
