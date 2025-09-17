import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, ArrowRight, Gift } from 'lucide-react'

const CTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-8 lg:p-16 relative overflow-hidden"
        >
          {/* Background decorations */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-pink-200 to-orange-200 rounded-full opacity-20 -translate-x-36 -translate-y-36" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 translate-x-48 translate-y-48" />
          
          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center lg:text-left"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-100 to-orange-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
                >
                  <Gift size={16} />
                  <span>Special Diwali Offer - 30% OFF</span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6"
                >
                  Ready to Boost Your{' '}
                  <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                    Sales This Diwali?
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-xl text-gray-600 mb-8 leading-relaxed"
                >
                  Don't let this festive season pass without maximizing your business potential. 
                  Get a free consultation and discover how we can 3X your revenue in 90 days.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.button
                    className="px-8 py-4 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold rounded-xl flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0 20px 40px rgba(255, 107, 157, 0.3)" 
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MessageCircle size={20} />
                    <span>Book Free Consultation</span>
                  </motion.button>

                  <motion.button
                    className="px-8 py-4 glass border border-gray-200 text-gray-700 font-semibold rounded-xl flex items-center justify-center space-x-2 hover:border-pink-300 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Call Now: +91 99999 99999</span>
                    <ArrowRight size={20} />
                  </motion.button>
                </motion.div>

                {/* Trust indicators */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="flex items-center justify-center lg:justify-start space-x-6 mt-8 pt-8 border-t border-gray-200"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Free Consultation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">No Long-term Contracts</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Results Guaranteed</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Content - 3D Illustration Placeholder */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex justify-center lg:justify-end"
              >
                <div className="max-w-lg w-full">
                  <div className="aspect-square bg-gradient-to-br from-pink-100 to-orange-100 rounded-3xl flex items-center justify-center relative overflow-hidden">
                    {/* Placeholder for 3D illustration */}
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-4xl">📈</span>
                      </div>
                      <p className="text-gray-600 text-sm">
                        3D CTA Illustration
                        <br />
                        <span className="text-xs">/public/illustrations/cta.png</span>
                      </p>
                    </div>
                    
                    {/* Floating elements */}
                    <motion.div
                      className="absolute top-8 right-8 w-16 h-16 bg-yellow-400 rounded-full opacity-30 flex items-center justify-center"
                      animate={{ 
                        y: [0, -15, 0],
                        rotate: [0, 10, -10, 0] 
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <span className="text-2xl">🎉</span>
                    </motion.div>
                    
                    <motion.div
                      className="absolute bottom-8 left-8 w-12 h-12 bg-green-400 rounded-full opacity-40 flex items-center justify-center"
                      animate={{ 
                        y: [0, 10, 0],
                        scale: [1, 1.1, 1] 
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    >
                      <span className="text-lg">💰</span>
                    </motion.div>
                    
                    <motion.div
                      className="absolute top-1/2 left-4 w-8 h-8 bg-blue-400 rounded-full opacity-50"
                      animate={{ 
                        x: [0, 20, 0],
                        y: [0, -10, 0] 
                      }}
                      transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom section with urgency */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center mt-12 pt-8 border-t border-gray-200"
            >
              <div className="glass border border-orange-200 rounded-2xl p-6 max-w-2xl mx-auto">
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                  <span className="text-orange-700 font-semibold text-sm">Limited Time Offer</span>
                </div>
                <p className="text-gray-700">
                  <strong>Only 10 slots left</strong> for our Diwali Special package. 
                  Book your free consultation today and get 30% off your first campaign!
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA