import React from 'react'

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About_Me</h2>
        
        <div className="about-layout">
          <div className="ledger-panel about-panel">
            <div className="panel-header-desc">// CORE PROFILE</div>
            <p className="about-bio">
              AI Engineer with proven experience building production-ready GenAI applications 
              using LLMs, RAG, multi-agent systems, FastAPI, and PostgreSQL. Experienced in 
              developing end-to-end AI products including research assistants, code intelligence platforms, 
              and resume analysis tools.
            </p>
            <p className="about-bio">
              I specialize in transitioning complex AI architectures from local prototypes to 
              production-grade enterprise deployments, with a strong focus on scalable databases (pgvector), 
              automated evaluation frameworks, and low-latency hybrid retrieval systems.
            </p>
          </div>

          <div className="ledger-panel details-panel">
            <div className="panel-header-desc">// SYSTEM INFORMATION</div>
            <table className="info-table">
              <tbody>
                <tr>
                  <td className="label">OFFICE</td>
                  <td className="value">Mumbai, India</td>
                </tr>
                <tr>
                  <td className="label">CONTACT</td>
                  <td className="value">
                    <a href="mailto:aryankale1410@gmail.com" className="about-contact-link">aryankale1410@gmail.com</a>
                  </td>
                </tr>
                <tr>
                  <td className="label">PHONE</td>
                  <td className="value">+91 9820712368</td>
                </tr>
                <tr>
                  <td className="label">GITHUB</td>
                  <td className="value">
                    <a href="https://github.com/aryankale14" target="_blank" rel="noopener noreferrer" className="about-contact-link">github.com/aryankale14</a>
                  </td>
                </tr>
                <tr>
                  <td className="label">LINKEDIN</td>
                  <td className="value">
                    <a href="https://www.linkedin.com/in/aaryan-kale-b23275218" target="_blank" rel="noopener noreferrer" className="about-contact-link">linkedin/in/aaryan-kale</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
