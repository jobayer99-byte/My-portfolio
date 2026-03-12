function HirePopup({ show, onClose }) {
  if (!show) return null

  const handleFiverr = () => {
    window.open('https://www.fiverr.com/jobxor', '_blank', 'noopener,noreferrer')
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/8801813505184', '_blank', 'noopener,noreferrer')
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
          <button className="hire-option-btn whatsapp-btn" onClick={handleWhatsApp}>
            <i className="fab fa-whatsapp"></i>
            <span>Chat on WhatsApp</span>
            <small>Direct instant messaging</small>
          </button>
        </div>
      </div>
    </div>
  )
}

export default HirePopup
