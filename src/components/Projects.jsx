import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Resto Pro',
    image: '/Resto Pro Logo.png',
    desc: 'MERN Stack restaurant management with real-time tracking.',
    tech: ['MongoDB', 'Express', 'React', 'Socket.io'],
    github: 'https://github.com/SahilKayasth-16',
    live: 'https://restopro-frontend.vercel.app/'
  },
  {
    title: 'TP Nutrition',
    image: '/TP Nutrition Logo.png',
    desc: 'E-commerce platform for nutrition and fitness.',
    tech: ['React', 'Node.js', 'Tailwind'],
    github: 'https://github.com/SahilKayasth-16',
    live: 'https://www.tpnutrition.in/'
  },
  {
    title: 'Safe Track',
    image: '/Safe Track Logo.png',
    desc: 'Women safety application with emergency alerts.',
    tech: ['PHP', 'MySQL', 'JavaScript'],
    github: 'https://github.com/SahilKayasth-16/SafeTrack_website',
    live: 'https://github.com/SahilKayasth-16/SafeTrack_website'
  }
]

export const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-primary font-bold tracking-[0.2em] mb-4 uppercase">Selected Work</h2>
            <h3 className="text-4xl md:text-6xl font-black">Featured Projects</h3>
          </div>
          <button className="px-8 py-4 glass rounded-xl font-bold hover:bg-white hover:text-dark-300 transition-all">
            VIEW ALL GITHUB
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative aspect-video rounded-[2rem] overflow-hidden mb-6 bg-dark-100 border border-white border-opacity-10 transition-all group-hover:border-primary flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-20 transition-all"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-contain p-12 transition-all duration-500 group-hover:scale-110"
                />
              </div>

              <div className="flex justify-between items-start mb-4">
                <h4 className="text-2xl font-bold">{project.title}</h4>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" className="hover:text-primary transition-colors"><Github size={20} /></a>
                  <a href={project.live} target="_blank" className="hover:text-primary transition-colors"><ExternalLink size={20} /></a>
                </div>
              </div>
              <p className="text-gray-400 mb-6 line-clamp-2">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-white bg-opacity-5 rounded-full text-xs font-medium text-gray-300">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
