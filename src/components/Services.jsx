import React from 'react'
import { motion } from 'framer-motion'
import { 
  Facebook, 
  Search, 
  Globe, 
  Palette, 
  Instagram, 
  TrendingUp 
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Facebook,
      title: "Facebook & Instagram Ads",
      description: "Targeted ad campaigns that convert visitors into customers",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Search,
      title: "Google Ads & GMB Optimization",
      description: "Dominate search results and local listings",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: Globe,
      title: "WordPress Websites & Landing Pages",
      description: "Professional websites that drive conversions",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: Palette,
      title: "AI-Powered Creative Design",
      description: "Stunning visuals that capture your brand essence",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Instagram,
      title: "Instagram Branding & Premium Setup",
      description: "Build a premium Instagram presence that stands out",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      icon: TrendingUp,
      title: "SEO & Local Marketing",
      description: "Boost your visibility and attract more customers",
      gradient: "from-indigo-500 to-blue-600"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions designed to boost your business growth and maximize your online presence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  className="glass-card rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300"
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <motion.div
                    className="flex items-center text-sm font-medium text-transparent bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    Learn More →
                  </motion.div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 40px rgba(255, 107, 157, 0.3)" 
            }}
            whileTap={{ scale: 0.95 }}
          >
            View All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services