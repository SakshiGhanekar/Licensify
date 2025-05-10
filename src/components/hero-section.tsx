"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Sparkles, TrendingUp, Shield, CreditCard } from "lucide-react"

export default function HeroSection() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isHovered, setIsHovered] = useState<string | null>(null)
  const [isMounted, setIsMounted] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    setIsMounted(true)
    
    // Only run this on client side
    if (typeof window !== 'undefined') {
      // Set initial window size
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
      
      // Optional: Add listener for window resize if needed
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        })
      }
      
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const stats = [
    { value: "10,000+", label: "Active Users", icon: <TrendingUp size={18} /> },
    { value: "$4.2M", label: "Licenses Sold", icon: <CreditCard size={18} /> },
    { value: "100%", label: "Secure Transactions", icon: <Shield size={18} /> },
  ]

  // Card animation variants
  const cardVariants = {
    initial: (custom: { zIndex: number; rotate: number; y: number }) => ({
      opacity: 0,
      y: 50,
      rotate: custom.rotate,
      zIndex: custom.zIndex,
    }),
    animate: (custom: { zIndex: number; rotate: number; y: number }) => ({
      opacity: 1,
      y: custom.y,
      rotate: custom.rotate,
      zIndex: custom.zIndex,
      transition: { duration: 0.7 },
    }),
    hover: (custom: { zIndex: number }) => ({
      y: -20,
      scale: 1.05,
      zIndex: 50,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    }),
  }

  const cards = [
    {
      id: "card1",
      initialRotate: -10,
      animateRotate: -6,
      y: 0,
      zIndex: 10,
      content: (
        <>
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mr-2 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M7 7h10v2H7z" />
                <path d="M7 13h2v-2h2v2h2v-2h2v2h2v-2" />
                <path d="M7 17h10" />
              </svg>
            </div>
            <div>
              <div className="text-base font-semibold text-gray-900 dark:text-white">Adobe CC</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Enterprise License</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>License Type:</span><span className="font-medium text-gray-700 dark:text-gray-300">Annual</span>
            </div>
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>Expires:</span><span className="font-medium text-gray-700 dark:text-gray-300">Dec 2025</span>
            </div>
          </div>
          <div className="absolute bottom-3 right-3 text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            $449
          </div>
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-400">
              -30% Off
            </span>
          </div>
        </>
      )
    },
    {
      id: "card2",
      initialRotate: 5,
      animateRotate: 3,
      y: 24,
      zIndex: 20,
      content: (
        <>
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mr-2 text-white">
              💼
            </div>
            <div>
              <div className="text-base font-semibold text-gray-900 dark:text-white">Microsoft 365</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Business Premium</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>License Type:</span><span className="font-medium text-gray-700 dark:text-gray-300">Monthly</span>
            </div>
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>Expires:</span><span className="font-medium text-gray-700 dark:text-gray-300">Aug 2025</span>
            </div>
          </div>
          <div className="absolute bottom-3 right-3 text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400">
            $29
          </div>
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-400">
              -10% Off
            </span>
          </div>
        </>
      )
    },
    {
      id: "card3",
      initialRotate: -15,
      animateRotate: -12,
      y: 0,
      zIndex: 30,
      content: (
        <>
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mr-3 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <path d="M12 18v-6" />
                <path d="M8 18v-1" />
                <path d="M16 18v-3" />
              </svg>
            </div>
            <div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white">Figma Pro</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Team License</div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-500 dark:text-gray-400">License Type:</span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Annual</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500 dark:text-gray-400">Seats:</span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">10 users</span>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
            $279
          </div>
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-400">
              Best Value
            </span>
          </div>
        </>
      )
    }
  ]

  return (
    <section className="relative h-screen flex items-center bg-gradient-to-br from-indigo-100 via-violet-50 to-purple-100 dark:from-indigo-950 dark:via-violet-900 dark:to-purple-950 text-gray-900 dark:text-white transition-colors duration-500 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 dark:from-indigo-500/10 dark:to-purple-500/10">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {isMounted && [...Array(20)].map((_, i) => {
          // Only render particles when component is mounted (client-side)
          const width = Math.random() * 50 + 10;
          const height = Math.random() * 50 + 10;
          const randomX = Math.random() * (windowSize.width || 1000); // Fallback value
          const randomY = Math.random() * (windowSize.height || 800); // Fallback value
          
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-indigo-300/20 to-purple-300/20 dark:from-indigo-400/20 dark:to-purple-400/20 blur-sm"
              style={{
                width: width,
                height: height,
                filter: "blur(2px)",
              }}
              initial={{
                x: randomX,
                y: randomY,
                scale: Math.random() * 0.5 + 0.5,
                opacity: 0,
              }}
              animate={{
                x: [null, Math.random() * (windowSize.width || 1000)],
                y: [null, Math.random() * (windowSize.height || 800)],
                opacity: [0, 0.4, 0],
              }}
              transition={{
                duration: Math.random() * 20 + 15,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 5,
              }}
            />
          );
        })}
      </div>

      {/* Main container */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.div className="w-full md:w-1/2" variants={containerVariants} initial="hidden" animate="visible">
          <div className="mb-6">
            <motion.div variants={itemVariants} className="mb-3 inline-flex">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent font-semibold rounded-full px-3 py-1 border border-indigo-200 dark:border-indigo-800 bg-white/30 dark:bg-white/5 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
                <span>Enterprise License Marketplace</span>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-300 dark:to-purple-300"
            >
              Turn Unused Software <br className="hidden md:block" /> Into{" "}
              <span className="text-emerald-500 dark:text-emerald-400 relative">
                Revenue
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-1 bg-emerald-500 dark:bg-emerald-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-indigo-200 font-light">
              Our secure platform helps businesses sell unused licenses and subscriptions at optimal market prices.
            </motion.p>
          </div>

          {/* CTA buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 mb-6">
            {/* Primary Button */}
            <button
              className="relative group overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-600 dark:to-teal-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-emerald-500/25 dark:hover:shadow-emerald-600/25 transition-all duration-300"
              onMouseEnter={() => setIsHovered("valuation")}
              onMouseLeave={() => setIsHovered(null)}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>Get Instant Valuation</span>
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

            {/* Secondary Button */}
            <button
              className="relative group overflow-hidden bg-white/80 dark:bg-white/10 text-gray-800 dark:text-white font-semibold px-6 py-3 rounded-xl border border-gray-200 dark:border-white/10 transition-all duration-300 backdrop-blur"
              onMouseEnter={() => setIsHovered("how")}
              onMouseLeave={() => setIsHovered(null)}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>How It Works</span>
                <motion.span
                  animate={isHovered === "how" ? { x: 5 } : { x: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  →
                </motion.span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/40 to-white/20 dark:from-white/20 dark:to-white/10"
                initial={{ x: "-100%", opacity: 0 }}
                animate={isHovered === "how" ? { x: "0%", opacity: 1 } : { x: "-100%", opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-3">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/30 dark:bg-white/5 backdrop-blur-md rounded-xl p-3 border border-indigo-100 dark:border-indigo-800/50 flex flex-col items-center text-center shadow-lg shadow-indigo-500/5"
                whileHover={{
                  y: -3,
                  boxShadow:
                    "0 20px 25px -5px rgba(99, 102, 241, 0.1), 0 10px 10px -5px rgba(99, 102, 241, 0.04)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="mb-1 bg-indigo-100 dark:bg-indigo-900/50 p-1.5 rounded-lg text-indigo-600 dark:text-indigo-400">
                  {stat.icon}
                </div>
                <h3 className="text-xl font-bold mb-0.5 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                  {stat.value}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* License Cards */}
        <div className="w-full md:w-1/2 relative h-64 md:h-80 flex items-center justify-center">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className="absolute w-64 h-40 md:w-72 md:h-48 bg-gradient-to-br from-white to-white/90 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl p-4 md:p-6 border border-indigo-100 dark:border-indigo-800/50 backdrop-blur-sm"
              custom={{
                zIndex: card.zIndex,
                rotate: card.animateRotate,
                y: card.y
              }}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                left: index === 0 ? '50%' : index === 1 ? 'calc(50% + 80px)' : 'calc(50% - 120px)',
                top: index === 0 ? '0' : index === 1 ? '40px' : '80px'
              }}
            >
              {card.content}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}