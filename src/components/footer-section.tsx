"use client"

import { motion } from "framer-motion"
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi"

export default function FooterSection() {
  return (
    <footer className="relative bg-gradient-to-br from-indigo-100 via-violet-50 to-purple-100 dark:from-indigo-950 dark:via-violet-950 dark:to-purple-950 text-purple-900 dark:text-white py-12 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20 dark:opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 dark:from-indigo-500/10 dark:to-purple-500/10"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          {/* Social links */}
          <motion.div 
            className="flex gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://github.com/SakshiGhanekar"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="w-12 h-12 rounded-full bg-white/30 dark:bg-white/10 backdrop-blur-md border border-indigo-200 dark:border-indigo-800/50 flex items-center justify-center text-purple-700 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <FiGithub className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/SakshiGhanekar"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="w-12 h-12 rounded-full bg-white/30 dark:bg-white/10 backdrop-blur-md border border-indigo-200 dark:border-indigo-800/50 flex items-center justify-center text-purple-700 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <FiLinkedin className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              href="mailto:sakshighanekar22@gmail.com"
              whileHover={{ y: -3 }}
              className="w-12 h-12 rounded-full bg-white/30 dark:bg-white/10 backdrop-blur-md border border-indigo-200 dark:border-indigo-800/50 flex items-center justify-center text-purple-700 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <FiMail className="w-6 h-6" />
            </motion.a>
          </motion.div>

          {/* Copyright text */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg font-light mb-2">
              &copy; {new Date().getFullYear()} License Resale Platform. All rights reserved.
            </p>
            <p className="text-sm text-purple-700/80 dark:text-purple-300/80">
              Developed by <span className="font-medium text-purple-800 dark:text-purple-200">Sakshi Ghanekar</span> - Full Stack Developer
            </p>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            className="flex justify-center mt-8 gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-purple-400 dark:bg-purple-600"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}