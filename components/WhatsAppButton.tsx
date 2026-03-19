'use client';

import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

import { siteConfig } from '../data/siteConfig'

interface WhatsAppButtonProps {
  phoneNumber?: string
  message?: string
  className?: string
  variant?: 'button' | 'floating' | 'inline'
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = siteConfig.contact.phone, // Use siteConfig default
  message = "Hello! I'm interested in your web development services.",
  className = "",
  variant = "button"
}) => {
  const handleClick = () => {
    const formatPhoneNumber = (phone: string) => {
      return phone.replace(/[^\d]/g, '')
    }

    const formattedPhone = formatPhoneNumber(phoneNumber)
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  if (variant === 'floating') {
    return (
      <motion.div 
        className={`fixed bottom-6 right-6 z-50 ${className}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <button
          onClick={handleClick}
          className="bg-green-500 hover:bg-green-600 w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-xl"
          aria-label="Contact us on WhatsApp"
        >
          <FaWhatsapp className="w-8 h-8 text-white" />
        </button>
      </motion.div>
    )
  }

  if (variant === 'inline') {
    return (
      <button
        onClick={handleClick}
        className={`inline-flex items-center gap-2 text-green-500 hover:text-green-600 transition-colors duration-300 ${className}`}
      >
        <FaWhatsapp className="w-5 h-5" />
        <span>WhatsApp</span>
      </button>
    )
  }

  return (
    <motion.button
      onClick={handleClick}
      className={`bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaWhatsapp className="w-5 h-5" />
      Contact via WhatsApp
    </motion.button>
  )
}

export default WhatsAppButton