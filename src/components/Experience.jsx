import React from 'react'
import { motion } from 'framer-motion'

const experience = [
  {
    role: 'MERN Stack Developer Intern',
    company: 'BISAG-N',
    period: 'Jan 2026 – Apr 2026',
    desc: 'Developed a GIS-based web platform for urban planning using React and FastAPI.'
  },
  {
    role: 'Web Developer Intern',
    company: 'Future Way Institute of Multimedia',
    period: 'July 2025 – July 2025',
    desc: 'Engineered a role-based access control system using Laravel for four distinct user types.'
  }
]

export const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-primary font-bold tracking-[0.2em] mb-4 uppercase">Career Path</h2>
          <h3 className="text-4xl md:text-6xl font-black">Experience Timeline</h3>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white bg-opacity-10 transform md:-translate-x-1/2"></div>

          <div className="space-y-20">
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-10 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="flex-1 w-full text-right md:text-left">
                  <div className={`glass p-8 rounded-[2rem] relative group hover:border-primary transition-all ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="text-primary font-bold text-sm mb-2 block">{exp.period}</span>
                    <h4 className="text-2xl font-bold mb-2">{exp.role}</h4>
                    <p className="text-gray-300 font-medium mb-4">{exp.company}</p>
                    <p className="text-gray-400 leading-relaxed">{exp.desc}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="w-6 h-6 bg-primary rounded-full relative z-10 shadow-[0_0_20px_rgba(245,158,11,0.5)]">
                  <div className="absolute inset-0 bg-primary animate-ping rounded-full opacity-30"></div>
                </div>

                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
