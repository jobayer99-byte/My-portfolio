function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <i className="fas fa-user"></i>
          <h2>About Me</h2>
        </div>
        <div className="about-content" data-aos="fade-up">
          <div className="about-stats">
            <div className="stat-card" data-aos="zoom-in" data-aos-delay="100">
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-card" data-aos="zoom-in" data-aos-delay="200">
              <h3>30+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-card" data-aos="zoom-in" data-aos-delay="300">
              <h3>3+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
