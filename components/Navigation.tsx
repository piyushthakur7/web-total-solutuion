'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa'
import { siteConfig } from '../data/siteConfig'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = siteConfig.navigation;

  const handleWhatsApp = () => {
    const phoneNumber = siteConfig.contact.whatsapp;
    const message = "Hello! I'm interested in your web development services.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-0' : 'bg-transparent py-2'
          }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className="container mx-auto px-4 flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="relative z-50 group flex-shrink-0" aria-label="Web Total Solution Home">
            <Image
              src="/logo_new.png"
              alt="WebTotalSolution"
              width={160}
              height={45}
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.dropdown ? (
                  <div
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    className="relative"
                  >
                    <button
                      className="text-sm font-medium text-white hover:text-blue-400 transition-colors flex items-center gap-1"
                      aria-haspopup="true"
                      aria-expanded={servicesOpen}
                      onFocus={() => setServicesOpen(true)}
                    >
                      {item.label}
                    </button>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-black/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                          onMouseLeave={() => setServicesOpen(false)}
                        >
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200"
                              onClick={() => setServicesOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href || '/'}
                    className="text-sm font-medium text-white hover:text-blue-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <motion.button
              onClick={handleWhatsApp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded-full hover:bg-green-600 transition-colors"
              aria-label="Contact via WhatsApp"
            >
              <FaWhatsapp className="text-base" />
              <span>WhatsApp</span>
            </motion.button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-expanded={isOpen}
              aria-label="Toggle Menu"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>

        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-xl md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-black border-l border-white/10 p-6 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mt-20 flex flex-col gap-2 overflow-y-auto">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.dropdown ? (
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider px-4 mt-4 mb-2">{item.label}</span>
                        {item.dropdown.map(sub => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-3 text-base text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        href={item.href || '/'}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>


              <div className="mt-auto">
                <button
                  onClick={handleWhatsApp}
                  className="w-full py-4 bg-green-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-green-600 transition-colors"
                >
                  <FaWhatsapp size={20} />
                  Contact via WhatsApp
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
