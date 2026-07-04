import React from 'react'

function Experience() {
  const experiences = [
    {
      role: "Analyst (GenAI & Intelligent Automation Initiative)",
      company: "Capgemini",
      location: "Mumbai, India",
      period: "Feb 2026 – Present",
      bullets: [
        "Developed an Amazon Bedrock-powered AI agent for automated classification and remediation of Apache Airflow workflow failures, reducing manual incident triage time by 40% through LLM-driven recommendations.",
        "Worked with cross-functional teams to validate AI-generated remediation decisions and establish guardrails for production-safe automation.",
        "Optimized prompts and evaluation workflows for LLM-based incident classification, improving response quality and operational reliability."
      ]
    },
    {
      role: "Analyst (Data & Operations) — Client: Aptiv (Americas)",
      company: "Capgemini",
      location: "Mumbai, India",
      period: "Oct 2025 – Jan 2026",
      bullets: [
        "Managed data integrity and resource mapping for 200+ personnel, utilizing advanced data transformations to ensure 100% accuracy in enterprise reporting systems.",
        "Optimized core operational workflows and cross-functional transitions, significantly reducing manual processing time and system latency.",
        "Directed access provisioning and cross-team collaboration frameworks, achieving zero downtime across project deployments."
      ]
    }
  ]

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Work_Experience</h2>
        
        <div className="timeline-container">
          <div className="timeline-line-element"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item-block">
              {/* Timeline Indicator */}
              <div className="timeline-marker">
                <span className="marker-square"></span>
              </div>
              
              {/* Content Panel */}
              <div className="ledger-panel timeline-content-panel">
                <div className="timeline-item-header">
                  <div className="timeline-item-meta">
                    <span className="timeline-company">{exp.company}</span>
                    <span className="timeline-location">{exp.location}</span>
                  </div>
                  <span className="timeline-date font-mono">{exp.period}</span>
                </div>
                
                <h3 className="timeline-role">{exp.role}</h3>
                
                <ul className="timeline-bullets">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="timeline-bullet-item">{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
