import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Globe, Layers, Settings } from 'lucide-react'

const skills = [
  { name: 'Frontend', items: ['HTML5', 'CSS', 'JavaScript', 'React.js'], icon: Globe },
  { name: 'Backend', items: ['Node.js', 'Express.js', 'FastAPI', 'PHP', 'Python'], icon: Code },
  { name: 'Database', items: ['MongoDB', 'PostgreSQL', 'MySQL'], icon: Database },
  { name: 'Tools', items: ['Git', 'JWT', 'RESTful APIs', 'PostGIS'], icon: Settings }
]

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-dark-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-[0.2em] mb-4 uppercase">Technical Arsenal</h2>
          <h3 className="text-4xl md:text-6xl font-black">Expertise & Skills</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl group transition-all"
            >
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-dark-300 transition-all">
                <category.icon size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-4">{category.name}</h4>
              <ul className="space-y-3">
                {category.items.map((skill, i) => (
                  <li key={i} className="text-gray-400 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
