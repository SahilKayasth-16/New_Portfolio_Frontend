import React, { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import Lenis from '@studio-freight/lenis'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <div className="min-h-screen selection:bg-primary selection:text-dark-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <ToastContainer position="bottom-right" theme="dark" />
    </div>
  )
}

export default App
