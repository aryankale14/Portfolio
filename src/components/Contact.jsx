import React from 'react'

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get_In_Touch</h2>
        
        <div className="ledger-panel contact-card">
          <div className="panel-header-desc">// SECURE_CHANNEL</div>
          <p className="contact-desc">
            I am currently open to new roles and collaborative AI engineering projects. 
            Whether you have a specific technical challenge to solve, a pipeline to optimize, 
            or just want to connect — feel free to drop a message.
          </p>
          
          <div className="contact-action-wrapper">
            <a href="mailto:aryankale1410@gmail.com" className="btn btn-primary contact-btn">
              Say Hello // aryankale1410@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
