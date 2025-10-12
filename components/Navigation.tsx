'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleWhatsApp = () => {
    const phoneNumber = '+919748894719'
    const message = "Hello! I'm interested in your web development services."
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank')
  }

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    {
      href: '/services',
      label: 'Services',
      dropdown: [
        "Web Development (Next.js, React, MERN, WordPress)",
        "UI/UX Design",
        "Digital Marketing",
        "E-Commerce Solutions",
        "Website Maintenance",
      ],
    },
    { href: '/work', label: 'Our Work' },
    { href: '/contact', label: 'Contact Us' },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
    >
      {/* Glow / background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 blur-3xl pointer-events-none"
        animate={{ opacity: scrolled ? 0.15 : 0 }}
        transition={{ duration: 0.5 }}
      />
      <div className={`relative container mx-auto px-4 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'}`}>
        <div className="flex items-center justify-between h-16 relative z-10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo_new.png"
              alt="Web Total Solution"
              width={240}
              height={64}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 relative">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="text-white font-medium text-sm transition-colors duration-300 cursor-pointer"
                  onMouseEnter={() => item.dropdown && setServicesOpen(true)}
                  onMouseLeave={() => item.dropdown && setServicesOpen(false)}
                >
                  {item.label}
                </Link>

                {/* Dropdown */}
                {item.dropdown && (
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        className="absolute top-full left-0 mt-2 w-60 bg-black/95 backdrop-blur-md rounded-lg shadow-lg border border-gray-800 overflow-hidden z-50"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                      >
                        {item.dropdown.map((service, idx) => (
                          <Link
                            key={idx}
                            href="/services"
                            className="block px-4 py-2 text-gray-300 hover:text-blue-500 hover:bg-gray-900 transition-colors duration-200 text-sm"
                          >
                            {service}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}

            <motion.button
              onClick={handleWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300"
              whileHover={{ scale: 1.1, boxShadow: '0 8px 20px rgba(0,255,0,0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp className="w-4 h-4" />
              WhatsApp
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-blue-500 transition-colors"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800 overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="py-4 flex flex-col"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                  hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                }}
              >
                {navItems.map((item) => (
                  <motion.div
                    key={item.href}
                    variants={{ visible: { opacity: 1, x: 0 }, hidden: { opacity: 0, x: -20 } }}
                  >
                    <Link
                      href={item.href}
                      className="block text-white hover:text-blue-500 transition-colors duration-300 text-sm font-medium px-4 py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  variants={{ visible: { opacity: 1, x: 0 }, hidden: { opacity: 0, x: -20 } }}
                  className="px-4 mt-2"
                >
                  <motion.button
                    onClick={handleWhatsApp}
                    className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-300"
                    whileHover={{ scale: 1.1, boxShadow: '0 8px 20px rgba(0,255,0,0.4)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    Contact via WhatsApp
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navigation
