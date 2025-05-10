"use client"

import { motion } from "framer-motion"
import { FiStar } from "react-icons/fi"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "IT Director",
    company: "TechCorp Inc.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "We had over 50 unused Adobe licenses after downsizing. This platform helped us recover nearly $15,000 in just a few days. The process was incredibly smooth and secure.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "CFO",
    company: "Innovate Solutions",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "As a financial officer, I was skeptical about the valuation we'd receive for our unused Microsoft licenses. I was pleasantly surprised by the competitive offer and quick payment process.",
    rating: 5
  },
  {
    name: "David Wilson",
    role: "CTO",
    company: "Digital Ventures",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    text: "The team provided exceptional support throughout the entire process. We'll definitely use this service again for future license management needs.",
    rating: 4
  }
]

export default function TestimonialsSection() {
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
              <span>Customer Voices</span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-300 dark:to-purple-300"
          >
            What Our Customers Say
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-indigo-200 max-w-3xl mx-auto font-light"
          >
            Don't just take our word for it. Here's what businesses like yours have experienced.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="bg-white/30 dark:bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-indigo-100 dark:border-indigo-800/50 shadow-lg shadow-indigo-500/5 h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-indigo-200 dark:border-indigo-800/50">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{testimonial.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
                    />
                  ))}
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow">"{testimonial.text}"</p>
                
                {/* Gradient decoration */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-indigo-100 dark:border-indigo-800/50">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium">Average Rating: 4.8/5</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}