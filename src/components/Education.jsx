import React from 'react'

function Education() {
  const education = [
    {
      degree: "B.E. in Electronics and Telecommunication Engineering",
      institution: "Vidyalankar Institute of Technology, Mumbai",
      period: "Nov 2022 – May 2025"
    },
    {
      degree: "Diploma in Electronics and Telecommunication Engineering",
      institution: "Bharati Vidyapeeth’s Institute of Technology, Navi Mumbai",
      period: "Aug 2019 – Jun 2022"
    }
  ]

  const certifications = [
    {
      title: "AWS Academy Graduate",
      issuer: "Cloud Foundations",
      date: "Apr 2024"
    },
    {
      title: "n8n Crash Course",
      issuer: "Master AI Agents with n8n in a Day",
      date: "Nov 2025"
    }
  ]

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education_&_Certifications</h2>
        
        <div className="education-layout">
          {/* Education column */}
          <div className="education-column">
            <div className="panel-header-desc">// FORMAL EDUCATION</div>
            <div className="education-cards-list">
              {education.map((edu, idx) => (
                <div key={idx} className="ledger-panel edu-card">
                  <div className="edu-card-header">
                    <span className="edu-period font-mono">{edu.period}</span>
                    <span className="edu-tag">DEGREE</span>
                  </div>
                  <h3 className="edu-title">{edu.degree}</h3>
                  <p className="edu-institution">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications column */}
          <div className="education-column">
            <div className="panel-header-desc">// VALIDATED CREDENTIALS</div>
            <div className="education-cards-list">
              {certifications.map((cert, idx) => (
                <div key={idx} className="ledger-panel cert-card">
                  <div className="edu-card-header">
                    <span className="edu-period font-mono">{cert.date}</span>
                    <span className="cert-tag">CERTIFICATE</span>
                  </div>
                  <h3 className="edu-title">{cert.title}</h3>
                  <p className="edu-institution">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
