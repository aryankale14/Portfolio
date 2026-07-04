import React from 'react'

const PROJECTS_DATA = [
  {
    title: "PaperMind",
    subtitle: "Multi-Agent Deep Research Assistant",
    period: "Feb 2026 – Mar 2026",
    liveUrl: "https://paper-mind-nine.vercel.app/",
    tech: ["Python", "React", "FastAPI", "PostgreSQL (pgvector)", "Gemini AI", "Firebase"],
    shortDesc: "A multi-tenant deep research assistant powered by a 13-step autonomous agent loop with citation self-reflection.",
    bullets: [
      "Architected a multi-tenant RAG pipeline using a 13-step autonomous agent system to handle complex query planning, multi-hop reasoning, and document synthesis.",
      "Engineered scalable cloud vector storage using PostgreSQL and pgvector, successfully migrating from local FAISS indices to ensure persistent, isolated user data.",
      "Implemented a self-reflection loop with an evaluation agent to verify citation grounded-ness, effectively halting hallucinations before answer generation.",
      "Optimized hybrid retrieval (ANN dense vector + BM25 lexical search) to run efficiently in memory-constrained cloud environments without relying on heavy cross-encoders."
    ]
  },
  {
    title: "CodeRecall",
    subtitle: "Multi-Agent Map-Reduce Codebase Intelligence",
    period: "Apr 2026 – May 2026",
    liveUrl: "https://code-recall-rouge.vercel.app/",
    tech: ["Python", "React", "FastAPI", "PostgreSQL (pgvector)", "Gemini AI", "Firebase"],
    shortDesc: "Distributed codebase RAG and security auditing engine that processes complex repositories using Map-Reduce.",
    bullets: [
      "Architected a distributed multi-agent Map-Reduce pipeline using FastAPI to analyze and summarize complex GitHub repositories concurrently, mitigating LLM context window degradation.",
      "Engineered a production-grade RAG infrastructure leveraging PostgreSQL (pgvector) and Gemini embeddings, utilizing advanced metadata filtering for low-latency semantic search.",
      "Built an automated multi-agent security auditing engine that statically maps high, medium, and low-priority vulnerabilities, compiling results into an interactive catalog."
    ]
  },
  {
    title: "HireReady",
    subtitle: "AI Resume Analyzer & ATS Scoring Toolkit",
    period: "Oct 2025 – Nov 2025",
    liveUrl: "https://hire-ready-psi.vercel.app/",
    tech: ["React", "Flask", "MongoDB", "MySQL", "Gemini API"],
    shortDesc: "Career intelligence toolkit generating structured feedback, keyword matching, and ATS scores from resumes.",
    bullets: [
      "Built an AI-powered resume analysis platform with ATS scoring and job-description matching.",
      "Generated structured feedback including keyword gaps, strengths/weaknesses, and improvements using Gemini APIs.",
      "Generated ATS scores and keyword recommendations by comparing resumes against job descriptions."
    ]
  },
  {
    title: "NewsPulse AI",
    subtitle: "Autonomous News Aggregator & Telegram Bot",
    period: "Feb 2026",
    liveUrl: "https://t.me/Aryan_ka_news_bot",
    tech: ["Python", "Gemini", "SQLite", "Telegram Bot API", "Asyncio", "APScheduler"],
    shortDesc: "Search-grounded bot broadcasting real-time curated news, running on persistent Railway volumes.",
    bullets: [
      "Built an autonomous Telegram bot using Gemini 2.5 Flash and Google Search grounding to curate and broadcast real-time news briefings across 10 topics.",
      "Engineered sequential caching and dynamic chunking algorithms to bypass Gemini API rate limits and Telegram's 4096-character message constraints.",
      "Deployed on Railway using a persistent SQLite volume and implemented a smart deduplication system to ensure fresh content."
    ]
  }
]

function Projects({ onOpenProjectModal }) {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured_Projects</h2>
        
        <div className="projects-grid">
          {PROJECTS_DATA.map((proj, index) => (
            <div key={index} className="ledger-panel project-card">
              <div className="project-card-header">
                <span className="project-card-date font-mono">{proj.period}</span>
                <span className="project-index">PROJ_{String(index + 1).padStart(2, '0')}</span>
              </div>
              
              <h3 className="project-card-title">{proj.title}</h3>
              <h4 className="project-card-subtitle">{proj.subtitle}</h4>
              <p className="project-card-desc">{proj.shortDesc}</p>
              
              <div className="tech-tags project-card-tags">
                {proj.tech.map((t, tIdx) => (
                  <span key={tIdx} className="tag">{t}</span>
                ))}
              </div>
              
              <div className="project-card-actions">
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={() => onOpenProjectModal(proj)}
                >
                  Analyze Specs
                </button>
                <a 
                  href={proj.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-project-link"
                >
                  Launch App &gt;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
