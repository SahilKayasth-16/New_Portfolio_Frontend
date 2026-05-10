import React from 'react'
import { Github, Linkedin, Twitter, Heart } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white border-opacity-5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="text-2xl font-black mb-4">SAHIL<span className="text-primary">.</span></div>
            <p className="text-gray-500 max-w-xs">
              Designing and developing premium digital experiences for the next generation of the web.
            </p>
          </div>

          <div className="flex gap-6">
            {[
              { icon: Github, url: 'https://github.com/SahilKayasth-16' },
              { icon: Linkedin, url: 'https://www.linkedin.com/in/sahil-kayasth-388bb2228/' },
            ].map((social, i) => (
              <a
                key={i}
                href={social.url}
                className="w-10 h-10 glass rounded-full flex items-center justify-center hover:text-primary transition-all"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>

          <div className="text-sm text-gray-500 flex items-center gap-2">
            © 2026 Sahil Kayasth.
          </div>
        </div>
      </div>
    </footer>
  )
}
