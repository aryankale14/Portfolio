import React, { useEffect, useRef, useState } from 'react'

// Lightweight child component to isolate typing re-renders
function TypingEffect() {
  const [roleText, setRoleText] = useState('')
  const roles = ["AI/ML Engineer", "Backend Developer", "GenAI Specialist", "Systems Developer"]
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typeSpeed, setTypeSpeed] = useState(100)

  useEffect(() => {
    let timer;
    const currentRole = roles[roleIndex];

    const tick = () => {
      if (isDeleting) {
        setRoleText(currentRole.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
        setTypeSpeed(50);
      } else {
        setRoleText(currentRole.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
        setTypeSpeed(100);
      }

      if (!isDeleting && charIndex === currentRole.length) {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex(prev => (prev + 1) % roles.length);
        setTypeSpeed(300);
      } else {
        timer = setTimeout(tick, typeSpeed);
      }
    };

    timer = setTimeout(tick, typeSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, typeSpeed]);

  return <span className="hero-typed text-accent animate-typing-cursor">{roleText}</span>;
}

function Hero({ onOpenTerminal }) {
  const canvasRef = useRef(null)

  // Canvas Grid Animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId;

    let width = canvas.width = canvas.parentElement.clientWidth
    let height = canvas.height = canvas.parentElement.clientHeight

    const mouse = { x: null, y: null, radius: 120 }

    // Cache the bounding rect to avoid layout thrashing on mousemove
    let rect = canvas.getBoundingClientRect()

    const handleMouseMove = (e) => {
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouse.x = null
      mouse.y = null
    }

    const handleResize = () => {
      if (!canvas.parentElement) return
      width = canvas.width = canvas.parentElement.clientWidth
      height = canvas.height = canvas.parentElement.clientHeight
      rect = canvas.getBoundingClientRect() // Update cached boundaries
    }

    const handleScroll = () => {
      rect = canvas.getBoundingClientRect() // Update boundaries on scroll
    }

    canvas.parentElement.addEventListener('mousemove', handleMouseMove)
    canvas.parentElement.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Resolve theme variables to keep drawings theme-compliant
    const style = getComputedStyle(document.documentElement)
    const accentColor = style.getPropertyValue('--accent').trim() || 'oklch(76% 0.15 152)'

    // Double grid spacing on mobile to save performance
    const isMobile = window.innerWidth < 768
    const spacing = isMobile ? 64 : 32

    const drawGrid = () => {
      ctx.clearRect(0, 0, width, height)

      const cols = Math.floor(width / spacing) + 1
      const rows = Math.floor(height / spacing) + 1

      // Draw grid dots
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const x = c * spacing
          const y = r * spacing

          let size = 1
          let alpha = 0.06
          let isHighlighted = false

          if (!isMobile && mouse.x !== null && mouse.y !== null) {
            const dx = mouse.x - x
            const dy = mouse.y - y
            const dist = Math.sqrt(dx * dx + dy * dy)

            if (dist < mouse.radius) {
              const factor = (mouse.radius - dist) / mouse.radius
              size = 1 + factor * 2
              alpha = 0.06 + factor * 0.4
              isHighlighted = true
            }
          }

          ctx.beginPath()
          ctx.arc(x, y, size, 0, Math.PI * 2)

          if (isHighlighted) {
            ctx.fillStyle = accentColor
            ctx.globalAlpha = alpha
          } else {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.08)'
            ctx.globalAlpha = alpha
          }

          ctx.fill()
          ctx.globalAlpha = 1.0 // Reset alpha
        }
      }

      // Draw ledger lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)'
      ctx.lineWidth = 1

      ctx.beginPath()
      ctx.moveTo(width * 0.15, 0)
      ctx.lineTo(width * 0.15, height)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(0, height * 0.8)
      ctx.lineTo(width, height * 0.8)
      ctx.stroke()

      // Do not run rendering loops on mobile since touch has no hover state
      if (!isMobile) {
        animationId = requestAnimationFrame(drawGrid)
      }
    }

    drawGrid()

    return () => {
      if (canvas.parentElement) {
        canvas.parentElement.removeEventListener('mousemove', handleMouseMove)
        canvas.parentElement.removeEventListener('mouseleave', handleMouseLeave)
      }
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <header className="hero">
      <canvas ref={canvasRef} id="hero-canvas"></canvas>
      <div className="hero-grid-overlay"></div>

      <div className="container hero-container">
        <div className="hero-meta-panel">
          <div className="status-indicator">
            <span className="status-dot"></span>
            ACTIVE // AVAILABLE FOR ROLES
          </div>
          <span className="hero-serial">SYS_LOC: MUMBAI_IN</span>
        </div>

        <div className="hero-main">
          <span className="hero-pre">AI ENGINEER // SYSTEM_STATE: ACTIVE</span>
          <h1 className="hero-name">Aaryan Kale</h1>
          <h2 className="hero-title">
            Engineering autonomous multi-agent systems & production-grade RAG pipelines.
          </h2>
          <div className="hero-subtitle">
            <p style={{ marginBottom: '12px' }}>
              Specializing in self-reflecting loops, cloud vector indexing, and low-latency hybrid retrieval.
            </p>
            <div className="hero-typing-block">
              &gt; <TypingEffect />
            </div>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Showcase
            </a>
            <button
              type="button"
              className="btn"
              onClick={onOpenTerminal}
            >
              Initialize Console
            </button>
            <a
              href="/Aaryan_new_resume.pdf"
              download="Aaryan_Kale_Resume.pdf"
              className="btn btn-secondary btn-ghost"
            >
              ↓ Resume.pdf
            </a>
          </div>
        </div>

        <div className="hero-footer">
          <span className="hero-scroll-prompt">
            SCROLL_DOWN_TO_EXPLORE // v1.0
          </span>
        </div>
      </div>
    </header>
  )
}

export default Hero
