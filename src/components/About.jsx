import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Target, Users, Zap } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Results-driven Ads",
      description: "Every campaign is optimized for maximum ROI and conversions"
    },
    {
      icon: Users,
      title: "Premium Branding (IG + GMB)",
      description: "Build a professional brand presence that attracts customers"
    },
    {
      icon: Zap,
      title: "Websites that Convert",
      description: "Fast, beautiful websites designed to turn visitors into customers"
    }
  ]

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card rounded-3xl p-8 lg:p-12">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              >
                Why Choose{' '}
                <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                  GrowBoost Digital?
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg text-gray-600 mb-8 leading-relaxed"
              >
                We combine cutting-edge digital marketing strategies with premium design 
                to deliver results that matter. Our data-driven approach ensures every 
                rupee spent on marketing delivers measurable returns.
              </motion.p>

              <div className="space-y-6">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Additional Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="grid grid-cols-2 gap-6 mt-12 pt-8 border-t border-gray-200"
              >
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">3X</div>
                  <div className="text-gray-600">Average ROI Increase</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">₹10L+</div>
                  <div className="text-gray-600">Revenue Generated</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="glass-card rounded-3xl p-8 relative overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-orange-50 opacity-50" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center">
                    <span className="text-3xl">📈</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Growth Dashboard Preview
                  </h3>
                  <p className="text-gray-600 text-sm mb-8">
                    Real-time analytics and insights for your campaigns
                  </p>
                </div>

                {/* Mock Dashboard Elements */}
                <div className="space-y-4">
                  <div className="glass border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Campaign Performance</span>
                      <span className="text-sm font-semibold text-green-600">+24%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="h-2 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "75%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 1 }}
                      />
                    </div>
                  </div>

                  <div className="glass border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Revenue Growth</span>
                      <span className="text-sm font-semibold text-green-600">+186%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "90%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 1.3 }}
                      />
                    </div>
                  </div>

                  <div className="glass border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Customer Satisfaction</span>
                      <span className="text-sm font-semibold text-green-600">98%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="h-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "98%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 1.6 }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating decorative elements */}
              <motion.div
                className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full opacity-30"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-40"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About