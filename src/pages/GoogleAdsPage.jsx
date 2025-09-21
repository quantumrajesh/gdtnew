import React from 'react'
import { motion } from 'framer-motion'
import { Search, MapPin, TrendingUp, Target, BarChart3, Settings } from 'lucide-react'
import SEO from '../components/SEO'

const GoogleAdsPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Google Ads & GMB Optimization",
    "provider": {
      "@type": "Organization",
      "name": "GrowBoost Digital",
      "url": "https://growboostdigital.com"
    },
    "description": "Professional Google Ads management and Google My Business optimization to dominate search results and attract local customers.",
    "serviceType": "Search Engine Marketing",
    "areaServed": "Worldwide",
    "offers": {
      "@type": "Offer",
      "description": "Complete Google Ads campaign management and local SEO optimization for maximum visibility and conversions."
    }
  }

  return (
    <>
      <SEO 
        title="Google Ads & GMB Optimization | GrowBoost Digital"
        description="Dominate search results with expert Google Ads management and Google My Business optimization. Drive qualified traffic and local customers to your business."
        keywords="google ads, google my business, search engine marketing, ppc advertising, local seo, google ads management"
        canonical="https://growboostdigital.com/services/google-ads-gmb"
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
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center">
                  <Search className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Google Ads & <span className="bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent">GMB Optimization</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dominate search results and attract high-intent customers with our expert Google Ads management and local optimization strategies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12"
            >
              Complete Search Marketing Solution
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Search,
                  title: "Search Campaigns",
                  description: "Target high-intent keywords to capture customers actively searching for your products or services."
                },
                {
                  icon: MapPin,
                  title: "Google My Business Optimization",
                  description: "Optimize your GMB profile to appear in local searches and Google Maps for maximum visibility."
                },
                {
                  icon: Target,
                  title: "Display Advertising",
                  description: "Reach potential customers across Google's display network with compelling visual ads."
                },
                {
                  icon: TrendingUp,
                  title: "Shopping Campaigns",
                  description: "Showcase your products directly in Google search results with optimized shopping ads."
                },
                {
                  icon: BarChart3,
                  title: "Performance Tracking",
                  description: "Advanced conversion tracking and analytics to measure ROI and optimize performance."
                },
                {
                  icon: Settings,
                  title: "Keyword Research",
                  description: "Comprehensive keyword research to identify the most profitable search terms for your business."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <feature.icon className="w-8 h-8 text-green-500 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-green-50 to-teal-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Why Google Ads & GMB Matter
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Capture customers at the exact moment they're searching for your products or services.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "Immediate Visibility",
                      desc: "Appear at the top of search results instantly, bypassing organic ranking time."
                    },
                    {
                      title: "High-Intent Traffic",
                      desc: "Target customers who are actively searching for what you offer."
                    },
                    {
                      title: "Local Dominance",
                      desc: "Capture local customers through optimized Google My Business presence."
                    },
                    {
                      title: "Measurable ROI",
                      desc: "Track every click, conversion, and dollar spent with detailed analytics."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-4 mt-2"></div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Google My Business Benefits</h3>
                <div className="space-y-4">
                  {[
                    "Appear in Google Maps searches",
                    "Display business hours and contact info",
                    "Showcase customer reviews and ratings",
                    "Post updates and special offers",
                    "Get insights on customer interactions",
                    "Increase local search visibility"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Did You Know?</h4>
                  <p className="text-green-700 text-sm">
                    76% of people who search for something nearby visit a business within a day, and 28% of those result in a purchase.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12"
            >
              Our Proven Process
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Account Audit",
                  desc: "Comprehensive analysis of your current setup and opportunities"
                },
                {
                  step: "02", 
                  title: "Strategy Development",
                  desc: "Custom strategy based on your goals, budget, and market analysis"
                },
                {
                  step: "03",
                  title: "Campaign Setup",
                  desc: "Professional campaign creation with optimized targeting and bidding"
                },
                {
                  step: "04",
                  title: "Optimization & Reporting",
                  desc: "Continuous optimization and detailed performance reporting"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
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
              className="bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl p-12 text-white"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Dominate Google Search Results?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get a free Google Ads audit and local SEO assessment.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-green-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Free Audit
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default GoogleAdsPage