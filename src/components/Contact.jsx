import React from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react'

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-dark-200 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[0.2em] mb-4 uppercase"
          >
            Contact
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-8"
          >
            Let’s Connect
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto"
          >
            Open to developer roles, freelance work, and meaningful collaborations. Feel free to reach out through email or social platforms.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { 
              icon: Mail, 
              label: 'Email', 
              value: 'sahilk16.sk@gmail.com', 
              link: 'mailto:sahilk16.sk@gmail.com',
              color: 'hover:text-blue-400'
            },
            { 
              icon: MapPin, 
              label: 'Location', 
              value: 'Surat, Gujarat, IND', 
              link: 'https://maps.app.goo.gl/Ep8WwghPHj41sKkn8',
              color: 'hover:text-red-400'
            },
            { 
              icon: Phone, 
              label: 'Phone', 
              value: '+91 8320727731', 
              link: 'tel:+918320727731',
              color: 'hover:text-green-400'
            }
          ].map((item, i) => (
            <motion.a 
              key={i} 
              href={item.link} 
              target={item.label === 'Location' ? '_blank' : '_self'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (i * 0.1) }}
              className="glass p-10 rounded-[2.5rem] flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-16 h-16 glass rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-dark-300 transition-all mb-6`}>
                <item.icon size={32} />
              </div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">{item.label}</p>
              <p className={`text-xl font-bold transition-colors ${item.color}`}>{item.value}</p>
            </motion.a>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-16 flex justify-center gap-6"
        >
          {[
            { icon: Github, url: 'https://github.com/SahilKayasth-16', label: 'GitHub' },
            { icon: Linkedin, url: 'https://www.linkedin.com/in/sahil-kayasth-388bb2228/', label: 'LinkedIn' }
          ].map((social, i) => (
            <a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 glass rounded-2xl flex items-center justify-center hover:text-primary hover:-translate-y-1 transition-all group"
              title={social.label}
            >
              <social.icon size={28} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

