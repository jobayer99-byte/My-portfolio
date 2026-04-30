import { useState, useEffect } from 'react'
import pic1 from '../assets/portfolio1.jpg.jpeg'
import pic2 from '../assets/portfolio2.jpg.jpeg'
import pic3 from '../assets/portfolio3.png'
import pic4 from '../assets/portfolio4.jpg.jpeg'

function Hero({ onHireClick }) {
  const [displayName, setDisplayName] = useState('')
  const [charIndex, setCharIndex] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [prevImageIndex, setPrevImageIndex] = useState(0)
  
  const fullName = 'Jobayer Ahammed'
  const images = [pic1, pic2, pic3, pic4]

  useEffect(() => {
    let timeout

    if (charIndex < fullName.length) {
      timeout = setTimeout(() => {
        setDisplayName(fullName.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, 100) // Faster typing - 100ms per character
    } else {
      timeout = setTimeout(() => {
        setDisplayName('')
        setCharIndex(0)
      }, 2000) // Longer pause before restart - 2 seconds
    }

    return () => clearTimeout(timeout)
  }, [charIndex])

  // Image carousel with faster slide animation
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setPrevImageIndex(currentImageIndex)
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 2500) // Changed from 4000ms to 2500ms for faster slides
    return () => clearInterval(imageInterval)
  }, [currentImageIndex])

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
            <div className="image-carousel">
              {images.map((img, index) => (
                <div 
                  key={index} 
                  className={`carousel-image ${index === currentImageIndex ? 'active' : index === prevImageIndex ? 'prev' : ''}`}
                  style={{ backgroundImage: `url(${img})` }}
                ></div>
              ))}
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
            <span className="role">CEO & Founder Dev Learners Academy</span>
            <br />
            <span className="role">Cyber Security Specialist & Ethical Hacker</span>
            <br />
            <span className="role">Web Developer | Wordpress Security Specialist | IT professional</span>
            <br />
            <span className="role">From AWS & Progroming hero 💖🌍</span>
          </p>
          <div className="social-links">
            <a href="https://github.com/jobayer99-byte" className="social-icon" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/jobayer-ahmmed01" className="social-icon" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
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
