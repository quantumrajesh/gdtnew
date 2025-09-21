import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, Eye, FileText, Mail, Phone } from 'lucide-react'
import SEO from '../components/SEO'

const PrivacyPolicyPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy",
    "description": "GrowBoost Digital Privacy Policy - How we collect, use, and protect your personal information.",
    "url": "https://growboostdigital.com/privacy-policy",
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
        title="Privacy Policy | GrowBoost Digital"
        description="Learn how GrowBoost Digital collects, uses, and protects your personal information. Our comprehensive privacy policy explains your rights and our data practices."
        keywords="privacy policy, data protection, personal information, GDPR compliance, data security"
        canonical="https://growboostdigital.com/privacy-policy"
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
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-600 rounded-2xl flex items-center justify-center">
                  <Shield className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Privacy <span className="bg-gradient-to-r from-blue-500 to-green-600 bg-clip-text text-transparent">Policy</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
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
              
              {/* Information We Collect */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl mb-8"
              >
                <div className="flex items-center mb-6">
                  <Eye className="w-8 h-8 text-blue-500 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">Information We Collect</h2>
                </div>
                
                <div className="space-y-6 text-gray-600">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Name and contact information (email, phone number)</li>
                      <li>Business information (company name, industry, website)</li>
                      <li>Project requirements and preferences</li>
                      <li>Payment and billing information</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>IP address and browser information</li>
                      <li>Device and operating system details</li>
                      <li>Website usage patterns and analytics</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* How We Use Information */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl mb-8"
              >
                <div className="flex items-center mb-6">
                  <FileText className="w-8 h-8 text-green-500 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">How We Use Your Information</h2>
                </div>
                
                <div className="space-y-4 text-gray-600">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Provide and improve our digital marketing services</li>
                    <li>Communicate with you about projects and services</li>
                    <li>Process payments and manage billing</li>
                    <li>Send important updates and service notifications</li>
                    <li>Analyze website performance and user experience</li>
                    <li>Comply with legal obligations and prevent fraud</li>
                  </ul>
                </div>
              </motion.div>

              {/* Information Sharing */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl mb-8"
              >
                <div className="flex items-center mb-6">
                  <Lock className="w-8 h-8 text-purple-500 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">Information Sharing</h2>
                </div>
                
                <div className="space-y-4 text-gray-600">
                  <p><strong>We do not sell, trade, or rent your personal information to third parties.</strong></p>
                  
                  <p>We may share your information only in these limited circumstances:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>With trusted service providers who assist in our operations</li>
                    <li>When required by law or to protect our legal rights</li>
                    <li>In connection with a business transfer or acquisition</li>
                    <li>With your explicit consent</li>
                  </ul>
                </div>
              </motion.div>

              {/* Data Security */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl mb-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Security</h2>
                <div className="space-y-4 text-gray-600">
                  <p>We implement appropriate security measures to protect your personal information:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>SSL encryption for data transmission</li>
                    <li>Secure servers and databases</li>
                    <li>Regular security audits and updates</li>
                    <li>Limited access to personal information</li>
                    <li>Employee training on data protection</li>
                  </ul>
                </div>
              </motion.div>

              {/* Your Rights */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl mb-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Rights</h2>
                <div className="space-y-4 text-gray-600">
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Access and review your personal information</li>
                    <li>Request corrections to inaccurate data</li>
                    <li>Request deletion of your personal information</li>
                    <li>Object to processing of your data</li>
                    <li>Withdraw consent at any time</li>
                    <li>Data portability where applicable</li>
                  </ul>
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
              className="bg-gradient-to-r from-blue-500 to-green-600 rounded-2xl p-12 text-white"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Questions About Our Privacy Policy?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Contact us if you have any questions about how we handle your personal information.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:growboostdigital@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </motion.a>
                <motion.a
                  href="tel:8005504986"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-green-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
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

export default PrivacyPolicyPage