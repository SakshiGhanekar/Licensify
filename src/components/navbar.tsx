"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { FiMenu, FiX, FiMoon, FiSun, FiArrowRight } from "react-icons/fi"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { GrLicense } from "react-icons/gr";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Only run this on client side
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setScrolled(window.scrollY > 10)
      }
      
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact Us", href: "#contact-us" },
  ]

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-sm' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400"
            >
              <div className="flex gap-2">
                <span className="text-white text-2xl"><GrLicense/></span>
              <span>Licensify</span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <motion.div
                      className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium px-3 py-2 rounded-lg transition-colors pointer-cursor"
                      whileHover={{ y: -2 }}
                    >
                      {link.name}
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 ml-6">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="text-gray-700 dark:text-gray-300 hover:bg-white/20"
              >
                {mounted ? (
                  theme === 'dark' ? (
                    <FiSun className="w-5 h-5" />
                  ) : (
                    <FiMoon className="w-5 h-5" />
                  )
                ) : (
                  <FiMoon className="w-5 h-5" />
                )}
              </Button>

              <Link href="#contact">
                <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white">
                  Get Valuation <FiArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="text-gray-700 dark:text-gray-300"
            >
              {mounted ? (
                theme === 'dark' ? (
                  <FiSun className="w-5 h-5" />
                ) : (
                  <FiMoon className="w-5 h-5" />
                )
              ) : (
                <FiMoon className="w-5 h-5" />
              )}
            </Button>

            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-gray-700 dark:text-gray-300"
            >
              {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-[#eef2ff] dark:bg-indigo-950"
          >
            <div className="container mx-auto px-6 pb-6">
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <motion.li
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link href={link.href} onClick={() => setIsOpen(false)}>
                      <div className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium px-4 py-3 rounded-lg transition-colors">
                        {link.name}
                      </div>
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="mt-4"
                >
                  <Link href="#contact" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white">
                      Get Valuation <FiArrowRight className="ml-2" />
                    </Button>
                  </Link>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}