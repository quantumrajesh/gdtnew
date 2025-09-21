import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, Camera, Users, Heart, TrendingUp, Star } from 'lucide-react'
import SEO from '../components/SEO'

const InstagramBrandingPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Instagram Branding & Premium Setup",
    "provider": {
      "@type": "Organization",
      "name": "GrowBoost Digital",
      "url": "https://growboostdigital.com"
    },
    "description": "Professional Instagram branding and premium setup services to build a standout presence that attracts followers and drives engagement.",
    "serviceType": "Social Media Marketing",
    "areaServed": "Worldwide",
    "offers": {
      "@type": "Offer",
      "description": "Complete Instagram branding including profile optimization, content strategy, and premium visual identity setup."
    }
  }

  return (
    <>
      <SEO 
        title="Instagram Branding & Premium Setup | GrowBoost Digital"
        description="Build a premium Instagram presence that stands out. Professional Instagram branding, profile optimization, and content strategy to attract more followers."
        keywords="instagram branding, instagram marketing, social media branding, instagram setup, instagram optimization"
        canonical="https://growboostdigital.com/services/instagram-branding"
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
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center">
                  <Instagram className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Instagram Branding & <span className="bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">Premium Setup</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transform your Instagram into a powerful brand asset that attracts your ideal audience and converts followers into customers.
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
              Complete Instagram Transformation
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Camera,
                  title: "Profile Optimization",
                  description: "Professional bio, profile picture, highlights covers, and link optimization for maximum impact."
                },
                {
                  icon: Star,
                  title: "Visual Brand Identity",
                  description: "Cohesive color schemes, typography, and design elements that make your brand instantly recognizable."
                },
                {
                  icon: Users,
                  title: "Content Strategy",
                  description: "Strategic content planning and posting schedule to engage your target audience effectively."
                },
                {
                  icon: Heart,
                  title: "Engagement Optimization",
                  description: "Hashtag research, caption writing, and engagement strategies to boost interaction rates."
                },
                {
                  icon: TrendingUp,
                  title: "Growth Strategies",
                  description: "Proven techniques to organically grow your follower base with quality, engaged followers."
                },
                {
                  icon: Instagram,
                  title: "Premium Features Setup",
                  description: "Business account setup, shopping features, and Instagram tools configuration."
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
                  <service.icon className="w-8 h-8 text-pink-500 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Profile Optimization Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-pink-50 to-rose-50">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12"
            >
              What Makes a Premium Instagram Profile
            </motion.h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Professional Profile Elements
                </h3>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "Compelling Bio",
                      desc: "Clear value proposition that instantly communicates what you offer and who you serve."
                    },
                    {
                      title: "Professional Profile Picture",
                      desc: "High-quality, branded profile image that's recognizable even at small sizes."
                    },
                    {
                      title: "Branded Highlights",
                      desc: "Custom highlight covers and organized story highlights that showcase your best content."
                    },
                    {
                      title: "Strategic Link Management",
                      desc: "Optimized link strategy using tools like Linktree or custom landing pages."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-3 h-3 bg-pink-500 rounded-full mr-4 mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Content Strategy Framework</h3>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-pink-500 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Brand Storytelling</h4>
                    <p className="text-gray-600 text-sm">Consistent narrative that builds emotional connection with your audience</p>
                  </div>

                  <div className="border-l-4 border-pink-500 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Visual Consistency</h4>
                    <p className="text-gray-600 text-sm">Cohesive color palette, filters, and design elements across all posts</p>
                  </div>

                  <div className="border-l-4 border-pink-500 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Engagement Focus</h4>
                    <p className="text-gray-600 text-sm">Content designed to spark conversations and build community</p>
                  </div>

                  <div className="border-l-4 border-pink-500 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Value-Driven Posts</h4>
                    <p className="text-gray-600 text-sm">Educational, entertaining, or inspiring content that serves your audience</p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-pink-50 rounded-lg">
                  <h4 className="font-semibold text-pink-800 mb-2">Instagram Stats</h4>
                  <p className="text-pink-700 text-sm">
                    Instagram has over 2 billion monthly active users, with 90% following at least one business account.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Growth Strategies Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12"
            >
              Proven Growth Strategies
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Hashtag Strategy",
                  description: "Research and implement strategic hashtag combinations for maximum reach and discovery.",
                  metric: "Increase reach by 300%+"
                },
                {
                  title: "Optimal Posting Times",
                  description: "Data-driven posting schedule based on when your audience is most active.",
                  metric: "Boost engagement by 150%+"
                },
                {
                  title: "Community Building",
                  description: "Engagement strategies that build loyal community of brand advocates.",
                  metric: "Higher retention rates"
                },
                {
                  title: "Content Variety",
                  description: "Mix of content types including posts, stories, reels, and IGTV for maximum impact.",
                  metric: "Improved algorithm visibility"
                }
              ].map((strategy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-r from-pink-500 to-rose-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{strategy.title}</h3>
                  <p className="text-gray-600 mb-3">{strategy.description}</p>
                  <div className="inline-block px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
                    {strategy.metric}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Before/After Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-pink-50 to-rose-50">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12"
            >
              Transformation Results
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  metric: "Follower Growth",
                  before: "500 followers",
                  after: "5,000+ followers",
                  timeframe: "6 months"
                },
                {
                  metric: "Engagement Rate",
                  before: "1.2% average",
                  after: "8.5% average",
                  timeframe: "3 months"
                },
                {
                  metric: "Brand Recognition",
                  before: "Generic profile",
                  after: "Premium brand presence",
                  timeframe: "1 month"
                }
              ].map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg text-center"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{result.metric}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="text-gray-500">
                      <span className="font-medium">Before:</span> {result.before}
                    </div>
                    <div className="text-pink-600 font-semibold">
                      <span className="font-medium">After:</span> {result.after}
                    </div>
                  </div>
                  <div className="inline-block px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">
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
              className="bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl p-12 text-white"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Build Your Premium Instagram Presence?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get a free Instagram audit and premium setup consultation.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-pink-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Transformation
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default InstagramBrandingPage