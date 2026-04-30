import { useState, useEffect } from 'react'

function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
    setIsMobileMenuOpen(false) // Close menu after clicking
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'light' : 'dark')
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Mobile Menu Toggle - Left side */}
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        {/* Menu - Left side on desktop */}
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {['home', 'about', 'education', 'skills', 'company', 'contact'].map(item => (
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

        {/* Logo - Center */}
        <div className="logo">
          <i className="fas fa-code"></i>
          <span>Jobayer's Portfolio</span>
        </div>
        
        {/* Actions - Right side */}
        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
            <i className="fas fa-moon"></i>
            <i className="fas fa-sun"></i>
          </button>
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
