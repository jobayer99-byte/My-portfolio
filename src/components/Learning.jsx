function Learning() {
  const platforms = [
    { icon: 'fa-shield-alt', name: 'Arena Web Security', link: 'https://arenawebsecurity.net/', delay: 50, iconClass: 'fas' },
    { icon: 'fa-code', name: 'Programming Hero', link: 'https://bootcamp.programming-hero.com/', delay: 100, iconClass: 'fas' },
    { icon: 'fa-udemy', name: 'Udemy', link: 'https://www.udemy.com/', delay: 150, iconClass: 'fab' }
  ]

  return (
    <section id="learning" className="learning">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <i className="fas fa-certificate"></i>
          <h2>Learning Platforms & Certificates</h2>
        </div>
        <div className="platforms-grid platforms-grid-center">
          {platforms.map((platform, index) => (
            <a
              key={index}
              href={platform.link}
              className="platform-card"
              data-aos="zoom-in"
              data-aos-delay={platform.delay}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`${platform.iconClass} ${platform.icon}`}></i>
              <span>{platform.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Learning
