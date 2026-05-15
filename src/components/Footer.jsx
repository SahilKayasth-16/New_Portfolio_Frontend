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

          <div className="text-sm text-gray-500 flex items-center gap-2">
            © 2026 Sahil Kayasth.
          </div>
        </div>
      </div>
    </footer>
  )
}
