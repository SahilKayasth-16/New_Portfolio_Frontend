import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin, Phone } from 'lucide-react'
import { toast } from 'react-toastify'
import axios from 'axios'

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const response = await axios.post('/api/contact', formData)
      if (response.status === 200) {
        toast.success("Message sent! I'll get back to you soon.")
        setFormData({ name: '', email: '', phone: '', message: '' })
      }
    } catch (err) {
      toast.error("Failed to send message. Please try again later.")
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-dark-200">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-primary font-bold tracking-[0.2em] mb-4 uppercase">Let's Connect</h2>
            <h3 className="text-4xl md:text-6xl font-black mb-8">Ready to start a project?</h3>
            <p className="text-gray-400 text-lg mb-12">
              Whether you have a question or just want to say hi, my inbox is always open. I'll do my best to get back to you!
            </p>

            <div className="space-y-8">
              {[
                { icon: Mail, label: 'Email', value: 'sahilk16.sk@gmail.com', link: 'mailto:sahilk16.sk@gmail.com' },
                { icon: MapPin, label: 'Location', value: 'Surat, Gujarat, IND', link: 'https://maps.app.goo.gl/Ep8WwghPHj41sKkn8' },
                { icon: Phone, label: 'Phone', value: '+91 8320727731', link: 'tel:+918320727731' }
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.link} 
                  target={item.label === 'Location' ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-dark-300 transition-all">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-xl font-bold group-hover:text-primary transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[3rem]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe" 
                    className="w-full bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl px-6 py-4 focus:border-primary outline-none transition-all" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com" 
                    className="w-full bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl px-6 py-4 focus:border-primary outline-none transition-all" 
                    required 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Contact Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 00000 00000" 
                  className="w-full bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl px-6 py-4 focus:border-primary outline-none transition-all" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Message</label>
                <textarea 
                  rows="5" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..." 
                  className="w-full bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl px-6 py-4 focus:border-primary outline-none transition-all resize-none" 
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-5 bg-primary text-dark-300 rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-primary-dark transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <Send size={20} /> {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
