import React from 'react'
import { motion } from 'framer-motion'
import { Award, BookOpen, Heart, Download } from 'lucide-react'

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square glass rounded-[4rem] flex items-center justify-center relative z-10">
              <div className="text-center p-12">
                <div className="text-8xl mb-8">🚀</div>
                <h3 className="text-3xl font-black mb-4">MERN Stack Enthusiast</h3>
                <p className="text-gray-400 leading-relaxed">
                  Deeply focused on building scalable architecture and pixel-perfect user interfaces.
                </p>
              </div>
            </div>
            {/* Background Blob */}
            <div className="absolute -top-10 -right-10 w-full h-full bg-primary opacity-5 blur-[80px] rounded-full"></div>
          </motion.div>

          <div>
            <h2 className="text-primary font-bold tracking-[0.2em] mb-4 uppercase">My Story</h2>
            <h3 className="text-4xl md:text-6xl font-black mb-8">Engineering with Passion</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Computer Science Engineering graduate with hands-on experience in Full-Stack Development using the 
              MERN Stack, FastAPI, and modern backend technologies. Skilled in designing scalable web 
              applications, secure REST APIs, role-based authentication systems, and real-time applications. 
              Passionate about solving real-world problems through clean, efficient, and 
              maintainable software while continuously learning modern technologies and system design. 
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { icon: Award, label: '8.23 CGPA', sub: 'B.E. Computer Science' },
                { icon: BookOpen, label: '4 Projects', sub: 'Deployed & Working' },
                { icon: Heart, label: 'Disciplined', sub: 'Growth Mindset' },
                { icon: Award, label: 'Certificates', sub: 'MERN Stack Expert' }
              ].map((item, i) => (
                <div key={i} className="glass p-6 rounded-2xl flex items-center gap-4 group hover:bg-white hover:bg-opacity-10 transition-all">
                  <div className="text-primary group-hover:scale-110 transition-transform">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="font-bold">{item.label}</p>
                    <p className="text-xs text-gray-500 uppercase">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
