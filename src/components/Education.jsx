function Education() {
  const educationData = [
    {
      icon: 'fa-university',
      title: 'Diploma in Computer Science and Technology',
      year: 'Session 2022-23',
      institution: 'Mymensingh Polytechnic Institute',
      status: 'Running',
      delay: 100,
      link: 'https://mpi.polytech.gov.bd/'
    },
    {
      icon: 'fa-shield-alt',
      title: 'Cyber Security and Ethical Hacking',
      year: 'Batch 59-Delta',
      institution: 'Arena Web Security',
      status: 'Completed',
      delay: 200,
      link: 'https://arenawebsecurity.net/'
    },
    {
      icon: 'fa-code',
      title: 'Web Development',
      year: 'Current',
      institution: 'Programming Hero',
      status: 'Running',
      delay: 300,
      link: 'https://www.programming-hero.com/'
    }
  ]

  const handleCardClick = (link) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section id="education" className="education">
      <div className="container" id="about">
        <div className="section-header" data-aos="fade-up">
          <i className="fas fa-graduation-cap"></i>
          <h2>Education & Course Status</h2>
        </div>
        <div className="education-grid">
          {educationData.map((edu, index) => (
            <div 
              key={index}
              className={`education-card ${edu.link ? 'clickable' : ''}`}
              data-aos="fade-up" 
              data-aos-delay={edu.delay}
              onClick={() => handleCardClick(edu.link)}
              style={{ cursor: edu.link ? 'pointer' : 'default' }}
            >
              <span className={`status-badge ${edu.status.toLowerCase()}`}>{edu.status}</span>
              <div className="card-icon">
                <i className={`fas ${edu.icon}`}></i>
              </div>
              <h3>{edu.title}</h3>
              <p className="institution">{edu.institution}</p>
              <p className="year">{edu.year}</p>
              {edu.link && (
                <div className="visit-link">
                  <i className="fas fa-external-link-alt"></i>
                  <span>Visit Website</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
