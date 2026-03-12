import { useState, useEffect } from 'react'

function Navbar() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      let current = ''
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id')
        }
      })
      
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <i className="fas fa-code"></i>
          <span>Jobayer's Portfolio</span>
        </div>
        <ul className="nav-menu">
          {['home', 'about', 'education', 'skills', 'learning', 'contact'].map(item => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={`nav-link ${activeSection === item ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item)
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <button className="download-cv" onClick={() => {
            const link = document.createElement('a');
            link.href = '/CV_Jobayer_Ahammed.pdf';
            link.download = 'CV_Jobayer_Ahammed.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}>
            <i className="fas fa-download"></i> Download CV
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
