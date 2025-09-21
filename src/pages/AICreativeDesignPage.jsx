import React from 'react'
import { motion } from 'framer-motion'
import { Palette, Sparkles, Image, Video, FileText, Brush } from 'lucide-react'
import SEO from '../components/SEO'

const AICreativeDesignPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI-Powered Creative Design",
    "provider": {
      "@type": "Organization",
      "name": "GrowBoost Digital",
      "url": "https://growboostdigital.com"
    },
    "description": "Stunning AI-powered creative design services including graphics, social media content, and branding materials that capture your brand essence.",
    "serviceType": "Creative Design",
    "areaServed": "Worldwide",
    "offers": {
      "@type": "Offer",
      "description": "Professional AI-powered design services for social media, marketing materials, and brand identity."
    }
  }

  return (
    <>
      <SEO 
        title="AI-Powered Creative Design Services | GrowBoost Digital"
        description="Stunning AI-powered creative design services for social media, marketing materials, and brand identity. Professional graphics that capture your brand essence."
        keywords="ai design, creative design, graphic design, social media graphics, brand design, ai-powered design"
        canonical="https://growboostdigital.com/services/ai-creative-design"
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
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                  <Palette className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                AI-Powered <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">Creative Design</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Harness the power of AI to create stunning visuals that capture your brand essence and drive engagement across all platforms.
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
              Our AI Design Services
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Image,
                  title: "Social Media Graphics",
                  description: "Eye-catching posts, stories, and covers optimized for each social platform's specifications."
                },
                {
                  icon: Sparkles,
                  title: "Brand Identity Design",
                  description: "Logos, color palettes, and brand guidelines that perfectly represent your business."
                },
                {
                  icon: FileText,
                  title: "Marketing Materials",
                  description: "Brochures, flyers, banners, and promotional materials that convert prospects into customers."
                },
                {
                  icon: Video,
                  title: "Video Thumbnails",
                  description: "Compelling YouTube thumbnails and video covers that increase click-through rates."
                },
                {
                  icon: Brush,
                  title: "Website Graphics",
                  description: "Custom illustrations, icons, and graphics that enhance your website's visual appeal."
                },
                {
                  icon: Palette,
                  title: "Ad Creatives",
                  description: "High-converting ad designs for Facebook, Instagram, Google, and other advertising platforms."
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
                  <service.icon className="w-8 h-8 text-purple-500 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Advantage Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12"
            >
              The AI Design Advantage
            </motion.h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Why AI-Powered Design is the Future
                </h3>
                <p className="text-xl text-gray-600 mb-8">
                  Our AI-powered design process combines creativity with efficiency to deliver stunning results faster than traditional methods.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "Faster Turnaround",
                      desc: "Get high-quality designs in hours, not days or weeks."
                    },
                    {
                      title: "Unlimited Revisions",
                      desc: "AI allows for quick iterations and endless creative possibilities."
                    },
                    {
                      title: "Consistent Quality", 
                      desc: "Maintain brand consistency across all your marketing materials."
                    },
                    {
                      title: "Cost Effective",
                      desc: "Premium design quality at a fraction of traditional agency costs."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-3 h-3 bg-purple-500 rounded-full mr-4 mt-2"></div>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Design Packages Available</h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Starter Pack</h4>
                    <p className="text-gray-600 text-sm mb-2">Perfect for small businesses getting started</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 10 social media posts</li>
                      <li>• Basic logo design</li>
                      <li>• 2 marketing flyers</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Professional Pack</h4>
                    <p className="text-gray-600 text-sm mb-2">Comprehensive design solution for growing businesses</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 25 social media graphics</li>
                      <li>• Complete brand identity</li>
                      <li>• 5 marketing materials</li>
                      <li>• 10 ad creatives</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Enterprise Pack</h4>
                    <p className="text-gray-600 text-sm mb-2">Full-scale design support for established businesses</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Unlimited monthly designs</li>
                      <li>• Priority support</li>
                      <li>• Brand guidelines</li>
                      <li>• Video thumbnails included</li>
                    </ul>
                  </div>
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
              Our AI Design Process
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Brief & Vision",
                  desc: "Share your requirements, brand guidelines, and creative vision"
                },
                {
                  step: "02", 
                  title: "AI Generation",
                  desc: "Our AI creates multiple design concepts based on your brief"
                },
                {
                  step: "03",
                  title: "Refinement",
                  desc: "We refine and optimize the designs to match your brand perfectly"
                },
                {
                  step: "04",
                  title: "Delivery",
                  desc: "Receive final designs in all required formats and sizes"
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
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Preview Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12"
            >
              Design Categories We Excel In
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { category: "Social Media", count: "1000+ designs" },
                { category: "Brand Identity", count: "500+ logos" },
                { category: "Marketing Materials", count: "800+ pieces" },
                { category: "Web Graphics", count: "600+ elements" },
                { category: "Ad Creatives", count: "1200+ ads" },
                { category: "Video Thumbnails", count: "400+ thumbnails" },
                { category: "Print Design", count: "300+ materials" },
                { category: "Illustrations", count: "700+ graphics" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">{item.category}</h3>
                  <p className="text-purple-600 font-medium">{item.count}</p>
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
              className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-12 text-white"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Transform Your Brand with AI Design?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get your first design package and see the AI advantage for yourself.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Designing Today
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AICreativeDesignPage