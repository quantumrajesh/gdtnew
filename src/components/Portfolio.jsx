import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Eye } from 'lucide-react'

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Fashion Store",
      category: "Website + Marketing",
      description: "Complete digital transformation with 300% revenue increase",
      image: "/api/placeholder/400/300",
      metrics: { revenue: "+300%", traffic: "+250%", conversion: "+85%" }
    },
    {
      title: "Local Restaurant Chain",
      category: "Google Ads + GMB",
      description: "Local SEO dominance across 5 locations",
      image: "/api/placeholder/400/300",
      metrics: { calls: "+400%", bookings: "+180%", reviews: "4.9★" }
    },
    {
      title: "Tech Startup",
      category: "Brand Identity + Social",
      description: "From zero to 50K followers in 6 months",
      image: "/api/placeholder/400/300",
      metrics: { followers: "50K+", engagement: "+220%", leads: "+150%" }
    },
    {
      title: "Healthcare Clinic",
      category: "Website + Ads",
      description: "Premium website with appointment booking system",
      image: "/api/placeholder/400/300",
      metrics: { appointments: "+200%", inquiries: "+180%", roi: "5X" }
    },
    {
      title: "Real Estate Agency",
      category: "Facebook + Instagram Ads",
      description: "High-value lead generation campaigns",
      image: "/api/placeholder/400/300",
      metrics: { leads: "+350%", cost: "-45%", quality: "+90%" }
    },
    {
      title: "Fitness Studio",
      category: "Instagram Branding",
      description: "Premium brand transformation and community building",
      image: "/api/placeholder/400/300",
      metrics: { members: "+400%", engagement: "+180%", retention: "+70%" }
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
    <section id="portfolio" className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real businesses. See how we've helped companies like yours achieve extraordinary growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                className="glass-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden bg-gradient-to-br from-pink-100 to-orange-100 h-48">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-pink-500 to-orange-500 rounded-xl flex items-center justify-center">
                        <Eye className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-gray-600 text-sm">Project Preview</p>
                    </div>
                  </div>
                  
                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-500/80 to-orange-500/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.button
                      className="px-4 py-2 bg-white text-gray-900 rounded-lg font-medium flex items-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      <span>View Case Study</span>
                    </motion.button>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="px-3 py-1 bg-gradient-to-r from-pink-100 to-orange-100 text-pink-700 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-200">
                    {Object.entries(project.metrics).map(([key, value], idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-sm font-bold text-gray-900">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
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
            View All Case Studies
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio