import { useEffect, useRef } from 'react'

function Skills() {
  const skillsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.progress')
            progressBars.forEach(bar => {
              const progress = bar.getAttribute('data-progress')
              bar.style.width = progress + '%'
            })
          }
        })
      },
      { threshold: 0.5 }
    )

    skillsRef.current.forEach(ref => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      icon: 'fa-shield-alt',
      title: 'Cyber Security',
      tags: ['Ethical Hacking', 'Kali Linux', 'Penetration Testing', 'SIEM'],
      skills: [
        { name: 'Ethical Hacking', percent: 85 },
        { name: 'Penetration Testing', percent: 80 }
      ],
      delay: 100
    },
    {
      icon: 'fa-laptop-code',
      title: 'Web Development',
      tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
      skills: [
        { name: 'React', percent: 90 },
        { name: 'JavaScript', percent: 88 }
      ],
      delay: 200
    }

    ,
    {
      icon: 'fa-network-wired',
      title: 'Networking',
      tags: ['TCP/IP', 'Cisco', 'Wireshark', 'Routing & Switching'],
      skills: [
        { name: 'Cisco', percent: 75 },
        { name: 'Network Security', percent: 82 }
      ],
      delay: 300
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <i className="fas fa-code"></i>
          <h2>My Skills</h2>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              ref={el => skillsRef.current[index] = el}
              className="skill-category"
              data-aos="fade-right"
              data-aos-delay={category.delay}
            >
              <div className="category-header">
                <i className={`fas ${category.icon}`}></i>
                <h3>{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.tags.map((tag, i) => (
                  <span key={i} className="skill-tag">{tag}</span>
                ))}
              </div>
              <div className="skill-bars">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-bar">
                    <div className="skill-info">
                      <span>{skill.name}</span>
                      <span className="skill-percent">{skill.percent}%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress" data-progress={skill.percent}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
