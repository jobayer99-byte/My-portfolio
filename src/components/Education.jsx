function Education() {
  const educationData = [
    {
      icon: 'fa-school',
      title: 'SSC',
      year: '2018 - 2020',
      institution: 'Hazi Shaheb Ali Model School',
      delay: 100
    },
    {
      icon: 'fa-book',
      title: 'HSC',
      year: '2020 - 2022',
      institution: 'Shohid Nazim Uddin High School & Collage',
      delay: 200
    },
    {
      icon: 'fa-university',
      title: 'Diploma in CST',
      year: '2023 - Running',
      institution: 'Mymensing Polytechnic Institute',
      delay: 300
    }
  ]

  return (
    <section id="education" className="education">
      <div className="container" id="about">
        <div className="section-header" data-aos="fade-up">
          <i className="fas fa-graduation-cap"></i>
          <h2>Educational Status</h2>
        </div>
        <div className="education-grid">
          {educationData.map((edu, index) => (
            <div 
              key={index}
              className="education-card" 
              data-aos="fade-up" 
              data-aos-delay={edu.delay}
            >
              <div className="card-icon">
                <i className={`fas ${edu.icon}`}></i>
              </div>
              <h3>{edu.title}</h3>
              <p className="year">{edu.year}</p>
              <p className="institution">{edu.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
