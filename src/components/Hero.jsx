import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Download, Send } from 'lucide-react'

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary opacity-10 blur-[100px] rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary opacity-10 blur-[100px] rounded-full animate-pulse-slow"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-primary font-bold tracking-[0.2em] mb-4 uppercase">MERN Stack Developer</h2>
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            Focus<br />
            <span className="text-gradient">Plan. Work.</span><br />
            Repeat.
          </h1>
          <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
            I'm Sahil Kayasth, a passionate Full Stack Developer dedicated to building premium digital experiences that blend artistic creativity with engineering excellence.
          </p>

          <div className="flex flex-wrap gap-4">

            <a
              href="/Sahil Bharatkumar Kayasth Resume.pdf"
              download
              className="flex items-center gap-2 px-8 py-4 border border-white border-opacity-20 rounded-xl font-bold uppercase tracking-wider hover:bg-white hover:text-dark-300 transition-all transform hover:-translate-y-1"
            >
              <Download size={20} /> Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          {/* Main Character Image */}
          <div className="relative w-full max-w-md aspect-square rounded-[3rem] overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-dark-300 via-transparent to-transparent z-10"></div>
            <img
              src="/Sahil.jpeg"
              alt="Sahil Kayasth"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
            />

            {/* Floating Chibi Elements (Abstracted for now) */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute top-4 right-4 w-16 h-16 sm:top-6 sm:right-6 sm:w-20 sm:h-20 lg:top-10 lg:right-10 lg:w-24 lg:h-24 glass rounded-2xl z-20 flex items-center justify-center shadow-2xl"
            >
              <span className="text-2xl sm:text-3xl lg:text-4xl">🚀</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 5, delay: 0.5 }}
              className="absolute bottom-20 left-0 w-20 h-20 glass rounded-2xl z-20 flex items-center justify-center shadow-2xl"
            >
              <span className="text-4xl">💻</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
