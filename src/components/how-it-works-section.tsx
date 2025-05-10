"use client"

import { FiUpload, FiDollarSign, FiCheckCircle, FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { motion, AnimatePresence } from "framer-motion"
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
  const [isHovered, setIsHovered] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % steps.length)
  }

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + steps.length) % steps.length)
  }

  // Animation variants for card transitions
  const cardVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  }

  // Track the direction of navigation for animations
  const [direction, setDirection] = useState(0)

  const handleNext = () => {
    setDirection(1)
    nextCard()
  }

  const handlePrev = () => {
    setDirection(-1)
    prevCard()
  }

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

        {/* Card Carousel */}
        <div className="relative max-w-md mx-auto h-80 flex items-center justify-center">
          {/* Step Indicators */}
          <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-3 z-20">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-indigo-600 dark:bg-indigo-400 w-8" : "bg-indigo-200 dark:bg-indigo-800"
                }`}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 -translate-x-12 z-20 w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:bg-indigo-50 dark:hover:bg-indigo-900/50 transition-all duration-300"
            aria-label="Previous step"
          >
            <FiChevronLeft className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 translate-x-12 z-20 w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:bg-indigo-50 dark:hover:bg-indigo-900/50 transition-all duration-300"
            aria-label="Next step"
          >
            <FiChevronRight className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          </button>

          {/* Card Container */}
          <div className="relative w-full h-full overflow-hidden">
            <AnimatePresence custom={direction} initial={false} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.2 },
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-white/30 dark:bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-indigo-100 dark:border-indigo-800/50 shadow-lg shadow-indigo-500/5 w-full h-full flex flex-col items-center justify-center text-center transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white mb-6">
                    {steps[currentIndex].icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{steps[currentIndex].title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{steps[currentIndex].description}</p>
                  <div className="mt-6 text-indigo-600 dark:text-indigo-400 font-medium">
                    Step {currentIndex + 1} of {steps.length}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="flex justify-center mt-24">
          <button
            className="relative group overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-600 dark:to-teal-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-emerald-500/25 dark:hover:shadow-emerald-600/25 transition-all duration-300"
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
              className="absolute inset-0 bg-gradient-to-r from-emerald-400/30 to-teal-400/30 dark:from-emerald-500/30 dark:to-teal-500/30"
              initial={{ x: "-100%", opacity: 0 }}
              animate={isHovered === "valuation" ? { x: "0%", opacity: 1 } : { x: "-100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </button>
        </div>
      </div>
    </section>
  )
}
