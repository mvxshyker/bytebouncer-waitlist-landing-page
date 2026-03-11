import { useEffect } from 'react'
import Hero from './components/Hero'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import SocialProof from './components/SocialProof'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-bb-black">
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <SocialProof />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
