"use client"

import { FiUpload, FiDollarSign, FiCheckCircle } from "react-icons/fi"
import { motion } from "framer-motion"
import { useState } from "react"

const steps = [
  {
    icon: <FiUpload className="w-8 h-8" />,
    title: "Upload License Details",
    description: "Simply provide your software license information through our secure portal.",
  },
  {
    icon: <FiDollarSign className="w-8 h-8" />,
    title: "Get Instant Valuation",
    description: "Our AI-powered system will analyze your license and provide a competitive offer.",
  },
  {
    icon: <FiCheckCircle className="w-8 h-8" />,
    title: "Receive Payment",
    description: "Accept the offer and get paid directly to your preferred payment method.",
  },
]

export default function HowItWorksSection() {
    const [isHovered, setIsHovered] = useState();
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-indigo-950/50 overflow-hidden transition-colors duration-500">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 dark:opacity-15">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 dark:from-indigo-500/10 dark:to-purple-500/10"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent font-semibold rounded-full px-4 py-1.5 border border-indigo-200 dark:border-indigo-800 bg-white/30 dark:bg-white/5 backdrop-blur-sm">
              <span>Simple Process</span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-300 dark:to-purple-300"
          >
            How It Works
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-indigo-200 max-w-3xl mx-auto font-light"
          >
            Selling your unused software licenses has never been easier. Our streamlined process gets you paid fast.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="bg-white/30 dark:bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-indigo-100 dark:border-indigo-800/50 shadow-lg shadow-indigo-500/5 h-full flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white mb-6">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-emerald-500 dark:bg-emerald-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
              </div>

              {/* Arrow between steps (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9 6L15 12L9 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-indigo-300 dark:text-indigo-600"
                    />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Additional CTA */}
       <button
              className="mx-auto flex justify-center mt-4 relative group overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-600 dark:to-teal-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-emerald-500/25 dark:hover:shadow-emerald-600/25 transition-all duration-300"
              onMouseEnter={() => setIsHovered("valuation")}
              onMouseLeave={() => setIsHovered(null)}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>Start Selling Now</span>
                <motion.span
                  animate={isHovered === "valuation" ? { x: 5 } : { x: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  →
                </motion.span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-700 dark:to-teal-700"
                initial={{ x: "-100%" }}
                animate={isHovered === "valuation" ? { x: 0 } : { x: "-100%" }}
                transition={{ type: "tween", duration: 0.3 }}
              />
            </button>
      </div>
    </section>
  )
}