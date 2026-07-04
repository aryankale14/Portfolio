import React, { useState, useRef, useEffect } from 'react'

function Terminal({ isOpen, onClose }) {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([
    { text: 'AaryanOS [Version 1.0.0]', type: 'system' },
    { text: 'Copyright (c) 2026 Aaryan Kale. All rights reserved.', type: 'system' },
    { text: 'Type "help" for a list of available commands.', type: 'system' },
    { text: '', type: 'empty' }
  ])
  
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [history])

  if (!isOpen) return null

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase()
    let response = []
    
    if (trimmed === '') {
      setHistory(prev => [...prev, { text: `guest@aaryankale.io:~$`, type: 'prompt' }])
      return
    }

    response.push({ text: `guest@aaryankale.io:~$ ${cmd}`, type: 'prompt' })

    switch (trimmed) {
      case 'help':
        response.push({
          text: `Available commands:
  about       - Get professional summary of Aaryan
  skills      - List AI/ML, database, languages & tools
  experience  - List work history
  projects    - Show developed projects
  resume      - Get links to download resume
  contact     - Display contact information
  clear       - Clear screen history
  close/exit  - Close terminal window`,
          type: 'output'
        })
        break
      case 'about':
        response.push({
          text: `AI Engineer with experience building production-ready GenAI applications using LLMs, RAG, multi-agent systems, FastAPI, and PostgreSQL. Focused on transitioning prototypes to reliable, production-grade cloud architectures.`,
          type: 'output'
        })
        break
      case 'skills':
        response.push({
          text: `AI/ML:       Gemini, OpenAI, Amazon Bedrock, RAG, LangChain, Vector Search, Prompting
Databases:   PostgreSQL (pgvector), Pinecone, FAISS, SQLite
Languages:   Python, SQL, Java, React (JavaScript)
Backend:     FastAPI, Flask, REST APIs
Tools:       AWS (S3, EC2, Textract), Supabase, Firebase, n8n, Railway, Vercel`,
          type: 'output'
        })
        break
      case 'experience':
        response.push({
          text: `1. Analyst (GenAI & Intelligent Automation Initiative) - Capgemini [Oct 2025 - Present]
   - Developed Amazon Bedrock AI agent for automated classification and remediation of Apache Airflow workflow failures.
   - Reduced incident triage time by 40% using LLM recommendations.`,
          type: 'output'
        })
        break
      case 'projects':
        response.push({
          text: `1. PaperMind - Multi-Agent Deep Research Assistant
   - 13-step autonomous research loop, citation verification, pgvector hybrid retrieval.
2. CodeRecall - Distributed Map-Reduce Codebase Intelligence & RAG
   - Concurrently maps codebases, static vulnerability scan catalog.
3. HireReady - AI Resume Analyzer
   - ATS scoring, job matching, structured feedback.
4. NewsPulse AI - Autonomous Telegram News Bot
   - Real-time briefings with Google search grounding, sequential caching.`,
          type: 'output'
        })
        break
      case 'resume':
        response.push({
          text: `Resume retrieval:
- Click to download: [Aaryan_Kale_Resume.pdf] (download in progress...)
- Or use the download button on the main page.`,
          type: 'output'
        })
        // Trigger a download
        const link = document.createElement('a')
        link.href = 'Aaryan_Kale_Resume.pdf'
        link.download = 'Aaryan_Kale_Resume.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        break
      case 'contact':
        response.push({
          text: `Email:      aryankale1410@gmail.com
Phone:      +91 9820712368
LinkedIn:   linkedin.com/in/aaryan-kale-b23275218
GitHub:     github.com/aryankale14
Location:   Mumbai, India`,
          type: 'output'
        })
        break
      case 'clear':
        setHistory([])
        return
      case 'close':
      case 'exit':
        onClose()
        return
      default:
        response.push({
          text: `Command not found: "${cmd}". Type "help" to see available commands.`,
          type: 'error'
        })
    }

    setHistory(prev => [...prev, ...response])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleCommand(input)
    setInput('')
  }

  return (
    <div className="terminal-overlay" onClick={onClose}>
      <div className="terminal-window" onClick={(e) => e.stopPropagation()}>
        {/* Terminal Header */}
        <div className="terminal-header">
          <div className="terminal-controls">
            <span className="dot dot-close" onClick={onClose}></span>
            <span className="dot dot-minimize"></span>
            <span className="dot dot-maximize"></span>
          </div>
          <span className="terminal-title">guest@aaryankale.io: ~</span>
          <div style={{ width: '48px' }}></div>
        </div>
        
        {/* Terminal Content */}
        <div className="terminal-body" onClick={() => inputRef.current?.focus()}>
          <div className="terminal-history">
            {history.map((line, idx) => {
              if (line.type === 'prompt') {
                return <div key={idx} className="terminal-line prompt">{line.text}</div>
              }
              if (line.type === 'error') {
                return <div key={idx} className="terminal-line error">{line.text}</div>
              }
              if (line.type === 'empty') {
                return <div key={idx} className="terminal-line-break"></div>
              }
              return <div key={idx} className="terminal-line output">{line.text}</div>
            })}
            <div ref={bottomRef}></div>
          </div>
          
          <form className="terminal-prompt-form" onSubmit={handleSubmit}>
            <span className="terminal-prompt-label">guest@aaryankale.io:~$</span>
            <input
              ref={inputRef}
              type="text"
              className="terminal-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Terminal
