import { useEffect, useState } from 'react'
import AOS from 'aos'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Learning from './components/Learning'
import Contact from './components/Contact'
import HirePopup from './components/HirePopup'
import ContactForm from './components/ContactForm'
import AnimatedBackground from './components/AnimatedBackground'

function App() {
  const [showHirePopup, setShowHirePopup] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      offset: 50,
      easing: 'ease-out-cubic',
      delay: 100
    })

    // Mouse trail effect - disabled on mobile for performance
    const isMobile = window.innerWidth <= 768
    
    const handleMouseMove = (e) => {
      if (!isMobile && Math.random() > 0.9) {
        const particle = document.createElement('div')
        particle.className = 'mouse-particle'
        particle.style.left = e.clientX + 'px'
        particle.style.top = e.clientY + 'px'
        document.body.appendChild(particle)
        
        setTimeout(() => particle.remove(), 1000)
      }
    }

    if (!isMobile) {
      document.addEventListener('mousemove', handleMouseMove)
    }

    console.log('%c🔥 Portfolio Loaded Successfully! 🔥', 'color: #00f3ff; font-size: 20px; font-weight: bold;')
    console.log('%cBuilt with ❤️ using React, HTML, CSS & JavaScript', 'color: #ff00ff; font-size: 14px;')

    return () => {
      if (!isMobile) {
        document.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  return (
    <div className="app">
      <AnimatedBackground />
      <Navbar />
      <Hero onHireClick={() => setShowHirePopup(true)} />
      <About />
      <Education />
      <Skills />
      <Learning />
      <Contact onMessageClick={() => setShowContactForm(true)} />
      <HirePopup show={showHirePopup} onClose={() => setShowHirePopup(false)} />
      <ContactForm show={showContactForm} onClose={() => setShowContactForm(false)} />
    </div>
  )
}

export default App
