function Company() {
  const handleCompanyMessage = () => {
    window.open('https://www.facebook.com/share/1DuWfNwJkf/', '_blank', 'noopener,noreferrer')
  }

  const courses = [
    {
      icon: 'fa-code',
      title: 'Web Development',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Node.js']
    },
    {
      icon: 'fa-shield-alt',
      title: 'Cyber Security',
      skills: ['Ethical Hacking', 'Penetration Testing', 'Network Security']
    },
    {
      icon: 'fa-briefcase',
      title: 'Career Guidelines',
      skills: ['Web Developer', 'Cybersecurity Specialist', 'IT Professional']
    }
  ]

  return (
    <section id="company" className="company">
      <div className="container">
        <div className="section-header">
          <i className="fas fa-building"></i>
          <h2>Dev Learners Academy</h2>
        </div>
        
        <div className="company-info-box" data-aos="fade-up">
          <h3 className="company-info-title">
            <i className="fas fa-info-circle"></i>
            Our Company Info
          </h3>
          
          <div className="company-content">
            <div className="company-card">
              <div className="company-intro">
                <div className="company-logo">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <div className="company-text">
                  <h3>Dev Learners Academy</h3>
                  <p>We teach Cybersecurity and Web Development basics, then advance to higher levels</p>
                </div>
              </div>

              <div className="company-actions">
                <button className="company-btn" onClick={handleCompanyMessage}>
                  <i className="fab fa-facebook"></i>
                  Message on Facebook
                </button>
                <a href="https://www.facebook.com/share/1DuWfNwJkf/" target="_blank" rel="noopener noreferrer" className="company-btn company-btn-outline">
                  <i className="fas fa-external-link-alt"></i>
                  Visit Page
                </a>
              </div>
            </div>

            <div className="our-courses">
              <h3 className="courses-title">
                <i className="fas fa-book-open"></i>
                Our Courses
              </h3>
              <div className="courses-grid">
                {courses.map((course, index) => (
                  <div key={index} className="course-item" data-aos="fade-up" data-aos-delay={index * 100}>
                    <div className="course-icon">
                      <i className={`fas ${course.icon}`}></i>
                    </div>
                    <h4>{course.title}</h4>
                    <div className="course-skills">
                      {course.skills.map((skill, i) => (
                        <span key={i} className="course-badge">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Company
