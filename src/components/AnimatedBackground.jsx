import { useEffect, useRef } from 'react'

function AnimatedBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const updateColors = () => {
      return [
        { inner: 'rgba(112, 0, 255, 0.6)', outer: 'rgba(0, 243, 255, 0.2)' },
        { inner: 'rgba(0, 243, 255, 0.6)', outer: 'rgba(112, 0, 255, 0.2)' },
        { inner: 'rgba(255, 0, 255, 0.6)', outer: 'rgba(0, 100, 255, 0.2)' },
        { inner: 'rgba(0, 100, 255, 0.6)', outer: 'rgba(255, 0, 255, 0.2)' },
        { inner: 'rgba(255, 0, 150, 0.6)', outer: 'rgba(0, 200, 255, 0.2)' },
        { inner: 'rgba(150, 0, 255, 0.6)', outer: 'rgba(255, 100, 0, 0.2)' }
      ]
    }

    class GradientCircle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.radius = Math.random() * 400 + 250
        this.vx = (Math.random() - 0.5) * 0.3
        this.vy = (Math.random() - 0.5) * 0.3
        this.updateGradient()
      }

      updateGradient() {
        const gradients = updateColors()
        this.gradient = gradients[Math.floor(Math.random() * gradients.length)]
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.vx *= -1
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.vy *= -1
        }
      }

      draw() {
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius
        )
        gradient.addColorStop(0, this.gradient.inner)
        gradient.addColorStop(0.5, this.gradient.outer)
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      }
    }

    const circles = Array(8).fill().map(() => new GradientCircle())

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      circles.forEach(circle => {
        circle.update()
        circle.draw()
      })
      
      requestAnimationFrame(animate)
    }

    animate()

    // Listen for theme changes
    const observer = new MutationObserver(() => {
      circles.forEach(circle => circle.updateGradient())
    })
    
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] })

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      observer.disconnect()
    }
  }, [])

  return <canvas ref={canvasRef} className="animated-background" />
}

export default AnimatedBackground
