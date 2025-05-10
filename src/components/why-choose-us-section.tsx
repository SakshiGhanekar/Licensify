"use client"

import { motion } from "framer-motion"
import { FiDollarSign, FiClock, FiShield, FiUsers } from "react-icons/fi"

const benefits = [
  {
    icon: <FiDollarSign className="w-6 h-6" />,
    title: "Highest Payouts",
    description: "We offer 20% more than competitors",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: <FiClock className="w-6 h-6" />,
    title: "Instant Payments",
    description: "Get paid within 24 hours",
    color: "from-amber-500 to-orange-500"
  },
  {
    icon: <FiShield className="w-6 h-6" />,
    title: "Secure Process",
    description: "Bank-grade encryption",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: <FiUsers className="w-6 h-6" />,
    title: "500+ Happy Sellers",
    description: "Trusted by businesses worldwide",
    color: "from-pink-500 to-rose-500"
  },
]

export default function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="relative py-24 bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-950/50 dark:to-gray-900 overflow-hidden transition-colors duration-500">
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
              <span>Our Advantages</span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-300 dark:to-purple-300"
          >
            Why Choose Us
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-indigo-200 max-w-3xl mx-auto font-light"
          >
            We're committed to providing the best experience for software license sellers.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="bg-white/30 dark:bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-indigo-100 dark:border-indigo-800/50 shadow-lg shadow-indigo-500/5 h-full flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-2 group">
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                
                {/* Gradient underline */}
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r ${benefit.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional decorative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16 gap-4"
        >
          {[...Array(4)].map((_, i) => (
            <div 
              key={i}
              className="w-3 h-3 rounded-full bg-indigo-300 dark:bg-indigo-600 opacity-70"
              style={{
                animation: `pulse 2s infinite ${i * 0.2}s`
              }}
            />
          ))}
        </motion.div>

        {/* Add this to your global CSS */}
        <style jsx>{`
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.7; }
            50% { transform: scale(1.3); opacity: 1; }
          }
        `}</style>
      </div>
    </section>
  )
}