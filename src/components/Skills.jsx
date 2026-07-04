import React from 'react'

function Skills() {
  const skillCategories = [
    {
      title: "AI/ML & Core GenAI",
      skills: ["Gemini AI", "OpenAI APIs", "Amazon Bedrock", "RAG Pipelines", "Multi-Agent Systems", "LangChain & LangGraph", "Vector Search", "Prompt Engineering", "QLoRA / Fine-tuning"]
    },
    {
      title: "Backend & Web Frameworks",
      skills: ["FastAPI", "Flask", "Django", "REST APIs", "React.js", "Streamlit", "Node.js", "n8n Automation"]
    },
    {
      title: "Databases & Warehousing",
      skills: ["PostgreSQL (pgvector)", "Pinecone", "FAISS Indices", "SQLite", "MongoDB", "MySQL", "Snowflake", "SQL"]
    },
    {
      title: "Cloud & Developer Tools",
      skills: ["AWS (S3, EC2, Textract)", "Firebase", "Supabase", "Git & GitHub", "Vercel & Netlify", "Railway & Render", "Informatica", "Linux/Bash"]
    }
  ]

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Technical_Skills</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="ledger-panel skill-card">
              <div className="panel-header-desc">// CATEGORY_{String(index + 1).padStart(2, '0')}</div>
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="tech-tags skill-tags">
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
