import { useState, useEffect } from 'react'

function Hero({ onHireClick }) {
  const [displayName, setDisplayName] = useState('')
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const fullName = 'Jobayer Ahammed'

  useEffect(() => {
    let timeout

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayName(fullName.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      }, 30)
    } else {
      timeout = setTimeout(() => {
        setDisplayName(fullName.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, 80)
    }

    if (!isDeleting && charIndex === fullName.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1000)
    } else if (isDeleting && charIndex === 0) {
      timeout = setTimeout(() => setIsDeleting(false), 500)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting])

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-image" data-aos="fade-right">
          <div className="profile-card">
            <div className="card-decorations">
              <div className="deco-circle deco-1"></div>
              <div className="deco-circle deco-2"></div>
              <div className="deco-circle deco-3"></div>
              <div className="deco-dots">
                {[...Array(12)].map((_, i) => (
                  <span key={i} className="dot" style={{'--i': i}}></span>
                ))}
              </div>
            </div>
            <div className="image-wrapper">
              <img src="https://i.ibb.co.com/Bks8bvY/Picsart-25-05-05-12-15-59-662.jpg" alt="Profile" />
              <div className="glow-ring"></div>
              <div className="glow-ring-2"></div>
            </div>
            <a 
              href="https://drive.google.com/file/d/182txg6OIXnkAtNMnKJznpclni4wMaWKu/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="profile-badge"
            >
              <i className="fas fa-certificate"></i>
              <span>View Special Thesis</span>
            </a>
          </div>
        </div>
        <div className="hero-content" data-aos="fade-left">
          <p className="greeting">Hi, I'm</p>
          <h1 className="hero-title">
            <span id="typed-name">{displayName}</span>
          </h1>
          <p className="hero-subtitle">
            <span className="role">Cyber Security Specialist & Ethical Hacker</span>
            <br />
            <span className="role">Web Developer</span>
            <br />
            <span className="role">Network Engineer</span>
          </p>
          <p className="hero-description">
            Passionate about <span className="highlight">Securing & Building</span> Modern Web & Network Solutions
          </p>
          <div className="social-links">
            <a href="https://github.com/jobayer99-byte" className="social-icon" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://wa.me/8801813505184" className="social-icon" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
            <a href="https://www.facebook.com/jobayer.ahammed.494102" className="social-icon" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
          </div>
          <button className="hire-btn" onClick={onHireClick}>
            Hire Me <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
