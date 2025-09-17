import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="glass-card rounded-3xl p-8 lg:p-12">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
              >
                We Boost Your{' '}
                <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                  Business Growth
                </span>{' '}
                with Digital Marketing
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-600 mb-8 leading-relaxed"
              >
                Transform your business with our premium digital marketing services. 
                From stunning websites to powerful ad campaigns that drive real results.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
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
                  <span>Get Started</span>
                  <ArrowRight size={20} />
                </motion.button>

                <motion.button
                  className="px-8 py-4 glass border border-gray-200 text-gray-700 font-semibold rounded-xl flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play size={20} />
                  <span>See Our Work</span>
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - 3D Illustration Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="glass-card rounded-3xl p-8 max-w-lg w-full">
              <div className="aspect-square bg-gradient-to-br from-pink-100 to-orange-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Placeholder for 3D illustration */}
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-4xl">🚀</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    3D Illustration Placeholder
                    <br />
                    <span className="text-xs">/public/illustrations/hero.png</span>
                  </p>
                </div>
                
                {/* Floating elements */}
                <motion.div
                  className="absolute top-4 right-4 w-12 h-12 bg-blue-500 rounded-full opacity-20"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-8 h-8 bg-purple-500 rounded-full opacity-30"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero