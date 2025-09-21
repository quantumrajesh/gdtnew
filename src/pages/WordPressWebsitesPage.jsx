import React from 'react'
import { motion } from 'framer-motion'
import { Globe, Smartphone, Zap, Shield, Search, Code, ShoppingCart, Layers } from 'lucide-react'
import SEO from '../components/SEO'

const WordPressWebsitesPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Website Development & E-commerce Solutions",
    "provider": {
      "@type": "Organization",
      "name": "GrowBoost Digital",
      "url": "https://growboostdigital.com"
    },
    "description": "Professional website development including WordPress, Shopify, and custom-coded solutions with high-converting designs to drive conversions and grow your business.",
    "serviceType": "Web Development",
    "areaServed": "Worldwide",
    "offers": {
      "@type": "Offer",
      "description": "Custom WordPress websites and landing pages optimized for performance, SEO, and conversions."
    }
  }

  return (
    <>
      <SEO 
        title="Website Development & E-commerce Solutions | GrowBoost Digital"
        description="Professional website development including WordPress, Shopify, and custom-coded solutions. Fast, secure, and SEO-optimized websites that drive results."
        keywords="wordpress websites, shopify stores, web development, e-commerce development, website design, conversion optimization, responsive design, custom coding"
        canonical="https://growboostdigital.com/services/website-development"
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
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center">
                  <Globe className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Website Development & <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">E-commerce Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional websites and e-commerce stores built with WordPress, Shopify, or custom code that convert visitors into customers with optimized user experience and performance.
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
              Comprehensive Web Development Services
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Smartphone,
                  title: "Mobile-First Design",
                  description: "Responsive designs that look perfect and function flawlessly on all devices and screen sizes."
                },
                {
                  icon: Zap,
                  title: "Lightning Fast Speed",
                  description: "Optimized for speed with advanced caching, image optimization, and clean code structure."
                },
                {
                  icon: Search,
                  title: "SEO Optimized",
                  description: "Built with SEO best practices to help your website rank higher in search results."
                },
                {
                  icon: Shield,
                  title: "Security & Backup",
                  description: "Enterprise-level security measures and automated backups to protect your website."
                },
                {
                  icon: ShoppingCart,
                  title: "E-commerce Solutions",
                  description: "Complete online stores with Shopify, WooCommerce, or custom e-commerce platforms."
                },
                {
                  icon: Code,
                  title: "Custom Development",
                  description: "Hand-coded websites and applications built from scratch for unique business requirements."
                },
                {
                  icon: Layers,
                  title: "Platform Expertise",
                  description: "WordPress, Shopify, React, Node.js - we work with the best technologies for your needs."
                },
                {
                  icon: Globe,
                  title: "Conversion Focused",
                  description: "Designed with conversion optimization in mind to turn visitors into customers."
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
                  <feature.icon className="w-8 h-8 text-orange-500 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Website Types Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-orange-50 to-red-50">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12"
            >
              Website & E-commerce Solutions We Offer
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "WordPress Websites",
                  description: "Professional business websites built on the world's most popular CMS platform.",
                  features: ["Custom Themes", "SEO Optimization", "Content Management", "Plugin Integration", "Mobile Responsive"]
                },
                {
                  title: "Shopify E-commerce Stores", 
                  description: "Complete online stores built on Shopify with payment processing and inventory management.",
                  features: ["Custom Store Design", "Payment Gateway Setup", "Product Management", "Inventory Tracking", "Order Fulfillment"]
                },
                {
                  title: "Custom Coded Websites",
                  description: "Hand-coded websites and web applications built from scratch using modern technologies.",
                  features: ["React/Next.js", "Node.js Backend", "Database Integration", "API Development", "Custom Functionality"]
                },
                {
                  title: "Landing Pages",
                  description: "High-converting single-page websites designed for specific campaigns or offers.",
                  features: ["Conversion Focused", "A/B Testing Ready", "Lead Capture", "Analytics Setup", "Fast Loading"]
                },
                {
                  title: "Portfolio Websites",
                  description: "Showcase your work and skills with stunning portfolio and gallery layouts.",
                  features: ["Gallery Layouts", "Project Showcases", "Client Testimonials", "Contact Portfolio", "Social Integration"]
                },
                {
                  title: "Blog Websites",
                  description: "Content-focused websites optimized for blogging and content marketing.",
                  features: ["Blog Layout", "SEO Optimization", "Social Sharing", "Comment System", "Newsletter Signup"]
                },
                {
                  title: "Membership Sites",
                  description: "Exclusive member areas with login functionality and protected content.",
                  features: ["User Registration", "Member Dashboard", "Protected Content", "Payment Integration", "User Management"]
                },
                {
                  title: "SaaS Applications",
                  description: "Software-as-a-Service platforms built with modern technologies like React and Node.js.",
                  features: ["User Authentication", "Subscription Management", "API Integration", "Real-time Features", "Cloud Deployment"]
                },
                {
                  title: "Multi-vendor Marketplaces",
                  description: "Complex e-commerce platforms supporting multiple vendors with advanced features.",
                  features: ["Vendor Management", "Commission System", "Multi-payment Gateway", "Advanced Analytics", "Mobile App Integration"]
                }
              ].map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
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
              Our Website Development Process
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  desc: "Understanding your goals, audience, and requirements"
                },
                {
                  step: "02", 
                  title: "Planning",
                  desc: "Creating wireframes, sitemap, and project timeline"
                },
                {
                  step: "03",
                  title: "Design & Platform Selection",
                  desc: "Choosing the right platform (WordPress, Shopify, Custom) and creating stunning designs"
                },
                {
                  step: "04",
                  title: "Development & Integration",
                  desc: "Building your website with clean code and integrating all necessary features"
                },
                {
                  step: "05",
                  title: "Launch & Support",
                  desc: "Going live and providing ongoing maintenance"
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
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12"
            >
              Technologies We Master
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Frontend Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "SCSS"].map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Backend & Database</h3>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Express.js", "PHP", "MySQL", "MongoDB", "PostgreSQL"].map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Platforms & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {["WordPress", "Shopify", "WooCommerce", "Stripe", "PayPal", "AWS"].map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-orange-50 to-red-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Why Our Multi-Platform Approach?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  We choose the best platform for your specific needs - WordPress for content-rich sites, Shopify for e-commerce, or custom code for unique requirements.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "Platform Expertise",
                      desc: "Deep knowledge of WordPress, Shopify, and custom development technologies."
                    },
                    {
                      title: "E-commerce Specialization",
                      desc: "Shopify experts who can build complete online stores with advanced features."
                    },
                    {
                      title: "Custom Solutions",
                      desc: "Hand-coded websites and applications when off-the-shelf solutions aren't enough."
                    },
                    {
                      title: "Full-Stack Development",
                      desc: "Frontend and backend development with modern technologies like React and Node.js."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-3 h-3 bg-orange-500 rounded-full mr-4 mt-2"></div>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h3>
                <div className="space-y-4">
                  {[
                    "Custom design for your chosen platform",
                    "Mobile responsive layout",
                    "E-commerce functionality (if needed)",
                    "Payment gateway integration",
                    "SEO setup and optimization",
                    "Security installation & configuration",
                    "Contact forms and lead capture",
                    "Google Analytics integration",
                    "Social media integration",
                    "Training and documentation",
                    "30 days of free support"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{item}</span>
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
              className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-12 text-white"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Launch Your Professional Website or Online Store?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get a free consultation and project quote for your website or e-commerce store.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Free Quote
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default WordPressWebsitesPage