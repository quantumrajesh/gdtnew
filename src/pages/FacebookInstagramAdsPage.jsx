import React from 'react'
import { motion } from 'framer-motion'
import { Facebook, Instagram, Target, Users, BarChart3, Settings } from 'lucide-react'
import SEO from '../components/SEO'

const FacebookInstagramAdsPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Facebook & Instagram Ads Management",
    "provider": {
      "@type": "Organization",
      "name": "GrowBoost Digital",
      "url": "https://growboostdigital.com"
    },
    "description": "Professional Facebook and Instagram advertising services to drive targeted traffic and conversions for your business.",
    "serviceType": "Digital Marketing",
    "areaServed": "Worldwide",
    "offers": {
      "@type": "Offer",
      "description": "Complete Facebook and Instagram advertising management including campaign setup, optimization, and reporting."
    }
  }

  return (
    <>
      <SEO 
        title="Facebook & Instagram Ads Management | GrowBoost Digital"
        description="Drive targeted traffic and conversions with our expert Facebook and Instagram advertising services. Professional campaign management with proven results."
        keywords="facebook ads, instagram ads, social media advertising, facebook marketing, instagram marketing, paid social media"
        canonical="https://growboostdigital.com/services/facebook-instagram-ads"
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
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Facebook className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Facebook & <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Instagram Ads</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transform your social media presence into a powerful revenue generator with our expert Facebook and Instagram advertising strategies.
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
              What's Included
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Targeted Campaign Setup",
                  description: "Precise audience targeting based on demographics, interests, and behaviors to reach your ideal customers."
                },
                {
                  icon: Users,
                  title: "Audience Research & Creation",
                  description: "Deep dive into your customer data to create high-converting custom and lookalike audiences."
                },
                {
                  icon: BarChart3,
                  title: "Performance Optimization",
                  description: "Continuous monitoring and optimization of ad performance to maximize ROI and reduce costs."
                },
                {
                  icon: Instagram,
                  title: "Creative Development",
                  description: "Eye-catching ad creatives and copy that resonate with your audience and drive action."
                },
                {
                  icon: Settings,
                  title: "A/B Testing",
                  description: "Systematic testing of ad elements to identify the highest-performing combinations."
                },
                {
                  icon: BarChart3,
                  title: "Detailed Reporting",
                  description: "Comprehensive monthly reports with actionable insights and performance metrics."
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
                  <feature.icon className="w-8 h-8 text-blue-500 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Facebook & Instagram Ads Service?
              </h2>
              <p className="text-xl text-gray-600">
                Get measurable results with our data-driven approach to social media advertising.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Results You Can Expect</h3>
                <ul className="space-y-4">
                  {[
                    "Increased website traffic and lead generation",
                    "Higher conversion rates and sales",
                    "Improved brand awareness and engagement", 
                    "Better audience insights and data",
                    "Cost-effective customer acquisition",
                    "Scalable advertising campaigns"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Process</h3>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Strategy Development", desc: "We analyze your business and create a custom ad strategy" },
                    { step: "2", title: "Campaign Launch", desc: "Professional setup and launch of your advertising campaigns" },
                    { step: "3", title: "Optimization", desc: "Continuous monitoring and optimization for best results" },
                    { step: "4", title: "Reporting", desc: "Regular reports with insights and recommendations" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
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
              className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-12 text-white"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Scale Your Business with Facebook & Instagram Ads?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get a free consultation and custom strategy for your business.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started Today
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default FacebookInstagramAdsPage