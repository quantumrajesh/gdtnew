import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Award, Users, TrendingUp } from 'lucide-react'

const StoneCarvingCaseStudy = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="glass-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-100 h-48">
        <img 
          src="/portfolio/srac.png"
          alt="Shree Ram & Company - Stone Carving Website"
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-100 items-center justify-center hidden">
          <div className="text-center p-4">
            <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-amber-600 to-orange-800 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🏛️</span>
            </div>
            <h3 className="text-sm font-bold text-gray-800 mb-1">Shree Ram & Company</h3>
            <p className="text-xs text-gray-600">Luxury Stone Carving</p>
            <div className="mt-2 flex flex-wrap gap-1 justify-center">
              <span className="inline-block px-2 py-1 bg-amber-100 text-amber-700 text-xs rounded-full">
                CNC
              </span>
              <span className="inline-block px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">
                Stone Art
              </span>
            </div>
          </div>
        </div>
        
        {/* Featured Badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-block px-2 py-1 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs rounded-full font-medium">
            ⭐ Featured Client
          </span>
        </div>
        
        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-amber-600/80 to-orange-800/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
          whileHover={{ opacity: 1 }}
        >
          <motion.a
            href="https://shreeramandcompany.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white text-gray-900 rounded-lg font-medium flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={16} />
            <span>Visit Website</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <div className="mb-3">
          <span className="px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 text-xs font-medium rounded-full">
            Stone Carving & CNC
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Shree Ram & Company
        </h3>
        
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          Premium stone carving website with elegant gallery and client showcase for luxury décor projects.
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-200">
          <div className="text-center">
            <div className="text-sm font-bold text-gray-900">25+</div>
            <div className="text-xs text-gray-500">Years Exp.</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-bold text-gray-900">1000+</div>
            <div className="text-xs text-gray-500">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-bold text-gray-900">WordPress</div>
            <div className="text-xs text-gray-500">Platform</div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default StoneCarvingCaseStudy