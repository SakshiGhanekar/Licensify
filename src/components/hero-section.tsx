"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Sparkles, TrendingUp, Shield, CreditCard } from "lucide-react"

export default function HeroSection() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isHovered, setIsHovered] = useState(null)

  // Check for system preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    setIsDarkMode(mediaQuery.matches)

    const handleChange = (e) => setIsDarkMode(e.matches)
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
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

  // Stats to display
  const stats = [
    { value: "10,000+", label: "Active Users", icon: <TrendingUp size={18} /> },
    { value: "$4.2M", label: "Licenses Sold", icon: <CreditCard size={18} /> },
    { value: "100%", label: "Secure Transactions", icon: <Shield size={18} /> },
  ]

  return (
    <section className="relative h-screen flex items-center bg-gradient-to-br from-indigo-100 via-violet-50 to-purple-100 dark:from-indigo-950 dark:via-violet-900 dark:to-purple-950 text-gray-900 dark:text-white transition-colors duration-500 overflow-hidden">
      {/* Animated gradient background */}
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
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-indigo-300/20 to-purple-300/20 dark:from-indigo-400/20 dark:to-purple-400/20 blur-sm"
            style={{
              width: Math.random() * 50 + 10,
              height: Math.random() * 50 + 10,
              filter: "blur(2px)",
            }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
              opacity: 0,
            }}
            animate={{
              x: [null, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left side: Text content */}
        <motion.div className="w-full md:w-1/2" variants={containerVariants} initial="hidden" animate="visible">
          {/* Header & Subheader */}
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

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 mb-6">
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
                className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-700 dark:to-teal-700"
                initial={{ x: "-100%" }}
                animate={isHovered === "valuation" ? { x: 0 } : { x: "-100%" }}
                transition={{ type: "tween", duration: 0.3 }}
              />
            </button>

            <button
              className="relative group overflow-hidden bg-white/80 dark:bg-white/10 hover:bg-white dark:hover:bg-white/15 text-gray-800 dark:text-white font-semibold px-6 py-3 rounded-xl border border-gray-200 dark:border-white/10 transition-all duration-300 backdrop-blur"
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
                className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white dark:from-white/5 dark:to-white/10"
                initial={{ x: "-100%" }}
                animate={isHovered === "how" ? { x: 0 } : { x: "-100%" }}
                transition={{ type: "tween", duration: 0.3 }}
              />
            </button>
          </motion.div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-3">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/30 dark:bg-white/5 backdrop-blur-md rounded-xl p-3 border border-indigo-100 dark:border-indigo-800/50 flex flex-col items-center text-center shadow-lg shadow-indigo-500/5"
                whileHover={{
                  y: -3,
                  boxShadow: "0 20px 25px -5px rgba(99, 102, 241, 0.1), 0 10px 10px -5px rgba(99, 102, 241, 0.04)",
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

        {/* Right side: License Cards */}
        <div className="w-full md:w-1/2 relative h-64 md:h-80 flex items-center justify-center">
          {/* License Card 1 */}
          <motion.div
            className="absolute w-64 h-40 bg-gradient-to-br from-white to-white/90 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl p-4 transform -rotate-6 border border-indigo-100 dark:border-indigo-800/50 backdrop-blur-sm z-10"
            initial={{ opacity: 0, y: 50, rotate: -10 }}
            animate={{ opacity: 1, y: 0, rotate: -6 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            whileHover={{ y: -10, rotate: -8, scale: 1.03 }}
          >
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mr-2 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
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
              <div className="flex justify-between">
                <span className="text-xs text-gray-500 dark:text-gray-400">License Type:</span>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Annual</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-gray-500 dark:text-gray-400">Expires:</span>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Dec 2025</span>
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
          </motion.div>

          {/* License Card 2 */}
          <motion.div
            className="absolute translate-y-6 translate-x-20 w-64 h-40 bg-gradient-to-br from-white to-white/90 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl p-4 transform rotate-3 border border-indigo-100 dark:border-indigo-800/50 backdrop-blur-sm z-20"
            initial={{ opacity: 0, y: 50, rotate: 5 }}
            animate={{ opacity: 1, y: 24, rotate: 3 }}
            transition={{ duration: 0.7, delay: 1 }}
            whileHover={{ y: 14, rotate: 5, scale: 1.03 }}
          >
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mr-2 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <circle cx="12" cy="12" r="5" />
                </svg>
              </div>
              <div>
                <div className="text-base font-semibold text-gray-900 dark:text-white">Figma Pro</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Team License</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-xs text-gray-500 dark:text-gray-400">License Type:</span>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Multi-user</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-gray-500 dark:text-gray-400">Seats:</span>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">10 users</span>
              </div>
            </div>
            <div className="absolute bottom-3 right-3 text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400">
              $399
            </div>
            <div className="absolute top-3 right-3">
              <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-400">
                Hot Deal
              </span>
            </div>
          </motion.div>

          {/* License Card 3 */}
          <motion.div
            className="absolute translate-y-12 -translate-x-20 w-64 h-40 bg-gradient-to-br from-white to-white/90 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl p-4 transform -rotate-12 border border-indigo-100 dark:border-indigo-800/50 backdrop-blur-sm z-30"
            initial={{ opacity: 0, y: 50, rotate: -15 }}
            animate={{ opacity: 1, y: 48, rotate: -12 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            whileHover={{ y: 38, rotate: -15, scale: 1.03 }}
          >
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mr-2 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <path d="M12 18v-6" />
                  <path d="M8 18v-1" />
                  <path d="M16 18v-3" />
                </svg>
              </div>
              <div>
                <div className="text-base font-semibold text-gray-900 dark:text-white">Microsoft 365</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Business Premium</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-xs text-gray-500 dark:text-gray-400">License Type:</span>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Annual</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-gray-500 dark:text-gray-400">Expires:</span>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Jan 2026</span>
              </div>
            </div>
            <div className="absolute bottom-3 right-3 text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
              $279
            </div>
            <div className="absolute top-3 right-3">
              <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-400">
                Best Value
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
