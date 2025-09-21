import React from 'react'
import { motion } from 'framer-motion'
import { Cookie, Settings, Eye, Shield, Mail, Phone } from 'lucide-react'
import SEO from '../components/SEO'

const CookiePolicyPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Cookie Policy",
    "description": "GrowBoost Digital Cookie Policy - How we use cookies and similar technologies on our website.",
    "url": "https://growboostdigital.com/cookie-policy",
    "isPartOf": {
      "@type": "WebSite",
      "name": "GrowBoost Digital",
      "url": "https://growboostdigital.com"
    },
    "dateModified": "2024-01-01",
    "publisher": {
      "@type": "Organization",
      "name": "GrowBoost Digital"
    }
  }

  return (
    <>
      <SEO 
        title="Cookie Policy | GrowBoost Digital"
        description="Learn about how GrowBoost Digital uses cookies and similar technologies to improve your browsing experience and analyze website performance."
        keywords="cookie policy, cookies, tracking, website analytics, user experience, data collection"
        canonical="https://growboostdigital.com/cookie-policy"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-2xl flex items-center justify-center">
                  <Cookie className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Cookie <span className="bg-gradient-to-r from-orange-500 to-yellow-600 bg-clip-text text-transparent">Policy</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Learn about how we use cookies and similar technologies to improve your browsing experience.
              </p>
              <div className="mt-6 text-sm text-gray-500">
                Last updated: January 1, 2024
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              
              {/* What Are Cookies */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl mb-8"
              >
                <div className="flex items-center mb-6">
                  <Cookie className="w-8 h-8 text-orange-500 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">What Are Cookies?</h2>
                </div>
                
                <div className="space-y-4 text-gray-600">
                  <p>
                    Cookies are small text files that are stored on your device when you visit our website. 
                    They help us provide you with a better browsing experience and understand how you use our site.
                  </p>
                  <p>
                    We use cookies to remember your preferences, analyze website performance, and provide 
                    personalized content and advertisements.
                  </p>
                </div>
              </motion.div>

              {/* Types of Cookies */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl mb-8"
              >
                <div className="flex items-center mb-6">
                  <Settings className="w-8 h-8 text-blue-500 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">Types of Cookies We Use</h2>
                </div>
                
                <div className="space-y-6 text-gray-600">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Essential Cookies</h3>
                    <p>These cookies are necessary for the website to function properly:</p>
                    <ul className="list-disc list-inside space-y-2 mt-2">
                      <li>Authentication and security cookies</li>
                      <li>Load balancing cookies</li>
                      <li>Cookie consent preferences</li>
                      <li>Session management cookies</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics Cookies</h3>
                    <p>These help us understand how visitors interact with our website:</p>
                    <ul className="list-disc list-inside space-y-2 mt-2">
                      <li>Google Analytics cookies</li>
                      <li>Page view tracking</li>
                      <li>User behavior analysis</li>
                      <li>Performance monitoring</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Marketing Cookies</h3>
                    <p>These cookies are used to track visitors across websites:</p>
                    <ul className="list-disc list-inside space-y-2 mt-2">
                      <li>Facebook Pixel tracking</li>
                      <li>Google Ads conversion tracking</li>
                      <li>Retargeting and remarketing</li>
                      <li>Social media integration</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Functional Cookies</h3>
                    <p>These enhance functionality and personalization:</p>
                    <ul className="list-disc list-inside space-y-2 mt-2">
                      <li>Language preferences</li>
                      <li>Remember login status</li>
                      <li>Form data retention</li>
                      <li>User interface preferences</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Third-Party Cookies */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl mb-8"
              >
                <div className="flex items-center mb-6">
                  <Eye className="w-8 h-8 text-green-500 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">Third-Party Services</h2>
                </div>
                
                <div className="space-y-4 text-gray-600">
                  <p>We use several third-party services that may set cookies:</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Google Analytics</h4>
                      <p className="text-sm">Helps us understand website usage and performance</p>
                    </div>
                    
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Facebook Pixel</h4>
                      <p className="text-sm">Tracks conversions and enables retargeting campaigns</p>
                    </div>
                    
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Google Ads</h4>
                      <p className="text-sm">Measures ad effectiveness and conversion tracking</p>
                    </div>
                    
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Social Media Platforms</h4>
                      <p className="text-sm">Enable social sharing and integration features</p>
                    </div>
                  </div>
                  
                  <p className="mt-4">
                    These third-party services have their own privacy policies and cookie practices. 
                    We recommend reviewing their policies for more information.
                  </p>
                </div>
              </motion.div>

              {/* Managing Cookies */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl mb-8"
              >
                <div className="flex items-center mb-6">
                  <Shield className="w-8 h-8 text-purple-500 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">Managing Your Cookie Preferences</h2>
                </div>
                
                <div className="space-y-4 text-gray-600">
                  <p><strong>Browser Settings:</strong></p>
                  <p>You can control and manage cookies in your browser settings:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Block all cookies</li>
                    <li>Block third-party cookies only</li>
                    <li>Delete cookies when you close your browser</li>
                    <li>Clear all existing cookies</li>
                  </ul>
                  
                  <p className="mt-4"><strong>Browser-Specific Instructions:</strong></p>
                  <div className="grid md:grid-cols-2 gap-4 mt-2">
                    <div>
                      <h4 className="font-semibold text-gray-900">Chrome:</h4>
                      <p className="text-sm">Settings → Privacy and Security → Cookies</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Firefox:</h4>
                      <p className="text-sm">Settings → Privacy & Security → Cookies</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Safari:</h4>
                      <p className="text-sm">Preferences → Privacy → Manage Website Data</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Edge:</h4>
                      <p className="text-sm">Settings → Site permissions → Cookies</p>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                    <p className="text-yellow-800">
                      <strong>Note:</strong> Disabling cookies may affect the functionality of our website 
                      and prevent you from accessing certain features.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Cookie Retention */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl mb-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookie Retention</h2>
                <div className="space-y-4 text-gray-600">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Session Cookies</h4>
                      <p>Deleted when you close your browser</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Persistent Cookies</h4>
                      <p>Remain until expiration date or manual deletion</p>
                    </div>
                  </div>
                  
                  <p>Cookie retention periods vary based on their purpose:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Essential cookies: Duration of session or up to 1 year</li>
                    <li>Analytics cookies: Up to 2 years</li>
                    <li>Marketing cookies: Up to 1 year</li>
                    <li>Functional cookies: Up to 1 year</li>
                  </ul>
                </div>
              </motion.div>

              {/* Updates */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl mb-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Updates to This Policy</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    We may update this Cookie Policy from time to time to reflect changes in our practices 
                    or for other operational, legal, or regulatory reasons.
                  </p>
                  <p>
                    We will notify you of any material changes by posting the new policy on this page 
                    and updating the "Last updated" date.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-orange-500 to-yellow-600 rounded-2xl p-12 text-white"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Questions About Our Cookie Policy?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Contact us if you have any questions about how we use cookies on our website.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:growboostdigital@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </motion.a>
                <motion.a
                  href="tel:8005504986"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-yellow-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default CookiePolicyPage