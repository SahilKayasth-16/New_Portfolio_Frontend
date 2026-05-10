import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass' : 'py-6 bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/Logo.jpeg" alt="Logo" className="w-10 h-10 rounded-full object-cover border-2 border-primary" />
          <div className="text-2xl font-bold tracking-tighter">
            SAHIL<span className="text-primary">.</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="/Sahil Bharatkumar Kayasth Resume.pdf"
            download
            className="hidden sm:block px-6 py-2 bg-primary text-dark-300 rounded-full font-bold text-sm hover:bg-primary-dark transition-all transform hover:scale-105"
          >
            RESUME
          </a>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white border-opacity-10 overflow-hidden"
          >
            <div className="flex flex-col items-center py-8 space-y-6">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-bold uppercase tracking-widest hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
              <a
                href="/Sahil Bharatkumar Kayasth Resume.pdf"
                download
                className="px-8 py-3 bg-primary text-dark-300 rounded-full font-bold text-sm"
              >
                DOWNLOAD RESUME
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
