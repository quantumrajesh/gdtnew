import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, MapPin, Search, BarChart3, Users, Globe } from 'lucide-react'
import SEO from '../components/SEO'

const SEOLocalMarketingPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO & Local Marketing",
    "provider": {
      "@type": "Organization",
      "name": "GrowBoost Digital",
      "url": "https://growboostdigital.com"
    },
    "description": "Professional SEO and local marketing services to boost your visibility, attract more customers, and dominate local search results.",
    "serviceType": "Search Engine Optimization",
    "areaServed": "Worldwide"
  }

  return (
    <>
      <SEO 
        title="SEO & Local Marketing Services | GrowBoost Digital"
        description="Boost your visibility and attract more customers with our expert SEO and local marketing services. Dominate search results and grow your business."
        keywords="seo services, local marketing, search engine optimization, local seo, digital marketing, online visibility"
        canonical="https://growboostdigital.com/services/seo-local-marketing"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                SEO & <span className="bg-gradient-to-r from-indigo-500 to-blue-600 bg-clip-text text-transparent">Local Marketing</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Boost your online visibility and attract more customers with our comprehensive SEO and local marketing strategies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12"
            >
              Complete SEO & Local Marketing Solution
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Search,
                  title: "Technical SEO Optimization",
                  description: "Website speed, mobile optimization, and technical fixes to improve search rankings."
                },
                {
                  icon: MapPin,
                  title: "Local SEO & Citations",
                  description: "Local business optimization and Google My Business management for local visibility."
                },
                {
                  icon: BarChart3,
                  title: "Keyword Research & Strategy",
                  description: "Comprehensive keyword analysis and content strategy for high-value search terms."
                },
                {
                  icon: Globe,
                  title: "Content Marketing",
                  description: "SEO-optimized content creation that attracts and converts your target audience."
                },
                {
                  icon: Users,
                  title: "Link Building & Authority",
                  description: "High-quality backlink acquisition to build domain authority and rankings."
                },
                {
                  icon: TrendingUp,
                  title: "Performance Tracking",
                  description: "Detailed analytics and reporting to track rankings and traffic improvements."
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <service.icon className="w-8 h-8 text-indigo-500 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-indigo-50 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12"
            >
              Expected Results
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Organic Traffic Growth",
                  percentage: "150-300%",
                  timeframe: "6-12 months"
                },
                {
                  title: "Keyword Rankings",
                  percentage: "80%+",
                  timeframe: "3-6 months"
                },
                {
                  title: "Local Visibility",
                  percentage: "200%+",
                  timeframe: "2-4 months"
                }
              ].map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg text-center"
                >
                  <div className="text-4xl font-bold text-indigo-600 mb-2">{result.percentage}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{result.title}</h3>
                  <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                    {result.timeframe}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl p-12 text-white"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Boost Your Online Visibility?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get a free SEO audit and local marketing consultation.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Free SEO Audit
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default SEOLocalMarketingPage