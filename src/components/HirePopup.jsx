function HirePopup({ show, onClose }) {
  if (!show) return null

  const handleFiverr = () => {
    window.open('https://www.fiverr.com/jobxor', '_blank', 'noopener,noreferrer')
  }

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/jobayer-ahmmed01', '_blank', 'noopener,noreferrer')
  }

  const handleFacebook = () => {
    window.open('https://www.facebook.com/share/1DuWfNwJkf/', '_blank', 'noopener,noreferrer')
  }

  return (
    <div className={`popup-overlay ${show ? 'show active' : ''}`} onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>&times;</button>
        <h2>Choose How to Connect</h2>
        <p className="popup-subtitle">Select your preferred platform to hire me</p>
        <div className="hire-buttons">
          <button className="hire-option-btn fiverr-btn" onClick={handleFiverr}>
            <i className="fas fa-briefcase"></i>
            <span>Hire on Fiverr</span>
            <small>Professional freelance services</small>
          </button>
          <button className="hire-option-btn linkedin-btn" onClick={handleLinkedIn}>
            <i className="fab fa-linkedin"></i>
            <span>Connect on LinkedIn</span>
            <small>Professional networking</small>
          </button>
          <button className="hire-option-btn facebook-btn" onClick={handleFacebook}>
            <i className="fab fa-facebook"></i>
            <span>Message on Facebook</span>
            <small>Direct messaging</small>
          </button>
        </div>
      </div>
    </div>
  )
}

export default HirePopup
