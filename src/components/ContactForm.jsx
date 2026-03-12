import { useState } from 'react'

function ContactForm({ show, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create mailto link with form data
    const mailtoLink = `mailto:ahammedjobayer6@gmail.com?subject=${encodeURIComponent(formData.subject || 'Message from Portfolio')}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`
    
    // Open email client
    window.location.href = mailtoLink
    
    // Reset form and close
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => onClose(), 500)
  }

  return (
    <div className={`popup-overlay ${show ? 'show active' : ''}`} onClick={onClose}>
      <div className="popup-content contact-form-popup" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>&times;</button>
        <h2>Send Me a Message</h2>
        <p className="popup-subtitle">Fill the form and your email client will open</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message *"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          
          <button type="submit" className="submit-btn">
            <i className="fas fa-paper-plane"></i> Send Message
          </button>
        </form>
        
        <div className="form-note">
          <i className="fas fa-info-circle"></i>
          <span>Your default email app will open with the message</span>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
