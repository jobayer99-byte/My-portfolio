function Contact({ onMessageClick }) {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <i className="fas fa-paper-plane"></i>
          <h2>Let's Connect</h2>
        </div>
        <div className="contact-wrapper">
          <div className="contact-info" data-aos="fade-up">
            <div className="contact-item-wrapper">
              <div className="contact-item-content">
                <i className="fas fa-envelope"></i>
                <span>ahammedjobayer6@gmail.com</span>
              </div>
              <a href="mailto:ahammedjobayer6@gmail.com" className="go-btn" target="_blank" rel="noopener noreferrer">
                <span>Go</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
            
            <div className="contact-item-wrapper">
              <div className="contact-item-content">
                <i className="fas fa-phone"></i>
                <span>01813505184</span>
              </div>
              <a href="tel:+8801813505184" className="go-btn">
                <span>Go</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
            
            <div className="contact-item-wrapper">
              <div className="contact-item-content">
                <i className="fab fa-facebook"></i>
                <span>Facebook</span>
              </div>
              <a href="https://www.facebook.com/jobayer.ahammed.494102" className="go-btn" target="_blank" rel="noopener noreferrer">
                <span>Go</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="message-section" data-aos="fade-left">
            <button className="message-btn-large" onClick={onMessageClick}>
              <i className="fas fa-comment-dots"></i>
              <span>Message Me</span>
              <small>Send me a direct message</small>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
