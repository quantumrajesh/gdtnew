import React from 'react'
import { motion } from 'framer-motion'
import { Scale, FileText, Users, AlertTriangle, Mail, Phone } from 'lucide-react'
import SEO from '../components/SEO'

const TermsOfServicePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service",
    "description": "GrowBoost Digital Terms of Service - Legal terms and conditions for using our digital marketing services.",
    "url": "https://growboostdigital.com/terms-of-service",
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
        title="Terms of Service | GrowBoost Digital"
        description="Read GrowBoost Digital's Terms of Service. Legal terms and conditions governing the use of our digital marketing services and website."
        keywords="terms of service, terms and conditions, legal agreement, service terms, user agreement"
        canonical="https://growboostdigital.com/terms-of-service"
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
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Scale className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Terms of <span className="bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent">Service</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Legal terms and conditions governing the use of our digital marketing services and website.
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
              
              {/* Agreement */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl mb-8"
              >
                <div className="flex items-center mb-6">
                  <FileText className="w-8 h-8 text-purple-500 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">Agreement to Terms</h2>
                </div>
                
                <div className="space-y-4 text-gray-600">
                  <p>
                    By accessing and using GrowBoost Digital's services, you accept and agree to be bound by the terms and provision of this agreement.
                  </p>
                  <p>
                    These Terms of Service ("Terms") govern your use of our website and services. If you disagree with any part of these terms, you may not access our services.
                  </p>
                </div>
              </motion.div>

              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl mb-8"
              >
                <div className="flex items-center mb-6">
                  <Users className="w-8 h-8 text-blue-500 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
                </div>
                
                <div className="space-y-4 text-gray-600">
                  <p>GrowBoost Digital provides digital marketing services including:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Facebook & Instagram advertising campaigns</li>
                    <li>Google Ads management and optimization</li>
                    <li>Website development (WordPress, Shopify, custom)</li>
                    <li>SEO and local marketing services</li>
                    <li>AI-powered creative design</li>
                    <li>Instagram branding and setup</li>
                  </ul>
                  
                  <p className="font-semibold">Service Delivery:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Services are provided according to agreed timelines</li>
                    <li>We maintain professional standards in all deliverables</li>
                    <li>Regular communication and progress updates are provided</li>
                    <li>Revisions are included as specified in service agreements</li>
                  </ul>
                </div>
              </motion.div>

              {/* User Responsibilities */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl mb-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">User Responsibilities</h2>
                <div className="space-y-4 text-gray-600">
                  <p><strong>You agree to:</strong></p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Provide accurate and complete information</li>
                    <li>Respond to requests for information in a timely manner</li>
                    <li>Make payments according to agreed terms</li>
                    <li>Respect intellectual property rights</li>
                    <li>Not use our services for illegal purposes</li>
                    <li>Maintain confidentiality of login credentials</li>
                  </ul>
                  
                  <p><strong>Content Approval:</strong></p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>You are responsible for reviewing and approving all content</li>
                    <li>Final approval is required before campaigns go live</li>
                    <li>You retain ownership of your original content and materials</li>
                  </ul>
                </div>
              </motion.div>

              {/* Payment Terms */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl mb-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Payment Terms</h2>
                <div className="space-y-4 text-gray-600">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Payment terms are specified in individual service agreements</li>
                    <li>Invoices are due within 30 days unless otherwise agreed</li>
                    <li>Late payments may incur additional fees</li>
                    <li>Services may be suspended for non-payment</li>
                    <li>Refunds are handled according to our refund policy</li>
                    <li>All prices are exclusive of applicable taxes</li>
                  </ul>
                </div>
              </motion.div>

              {/* Intellectual Property */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl mb-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
                <div className="space-y-4 text-gray-600">
                  <p><strong>Our Work:</strong></p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>We retain rights to our methodologies and processes</li>
                    <li>Custom work created for you becomes your property upon full payment</li>
                    <li>We may showcase completed work in our portfolio (with permission)</li>
                  </ul>
                  
                  <p><strong>Your Content:</strong></p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>You retain ownership of your original content</li>
                    <li>You grant us license to use your content for service delivery</li>
                    <li>You warrant that your content doesn't infringe third-party rights</li>
                  </ul>
                </div>
              </motion.div>

              {/* Limitations */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl mb-8 border-l-4 border-yellow-500"
              >
                <div className="flex items-center mb-6">
                  <AlertTriangle className="w-8 h-8 text-yellow-500 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">Limitations of Liability</h2>
                </div>
                
                <div className="space-y-4 text-gray-600">
                  <p className="font-semibold">Important Legal Notice:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Services are provided "as is" without warranties</li>
                    <li>We cannot guarantee specific results from marketing campaigns</li>
                    <li>Our liability is limited to the amount paid for services</li>
                    <li>We are not liable for indirect or consequential damages</li>
                    <li>Platform policies (Facebook, Google) may affect campaign performance</li>
                    <li>External factors beyond our control may impact results</li>
                  </ul>
                </div>
              </motion.div>

              {/* Termination */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl mb-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Termination</h2>
                <div className="space-y-4 text-gray-600">
                  <p>Either party may terminate services:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>With 30 days written notice for ongoing services</li>
                    <li>Immediately for breach of terms</li>
                    <li>Upon completion of project-based services</li>
                  </ul>
                  
                  <p>Upon termination:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Final invoice will be issued for completed work</li>
                    <li>Access to platforms and accounts will be transferred</li>
                    <li>Confidential information must be returned or destroyed</li>
                  </ul>
                </div>
              </motion.div>

              {/* Governing Law */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl mb-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Governing Law</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of India. 
                    Any disputes arising under these Terms shall be subject to the exclusive jurisdiction 
                    of the courts in Jaipur, Rajasthan.
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
              className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl p-12 text-white"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Questions About Our Terms?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Contact us if you need clarification on any of our terms and conditions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:growboostdigital@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </motion.a>
                <motion.a
                  href="tel:8005504986"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
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

export default TermsOfServicePage