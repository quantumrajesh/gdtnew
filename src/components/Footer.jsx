import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  ArrowUp
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' }
  ]

  const services = [
    { name: 'Facebook & Instagram Ads', href: '/services/facebook-instagram-ads' },
    { name: 'Google Ads Management', href: '/services/google-ads-gmb' },
    { name: 'Website Development', href: '/services/website-development' },
    { name: 'SEO & Local Marketing', href: '/services/seo-local-marketing' },
    { name: 'AI Creative Design', href: '/services/ai-creative-design' },
    { name: 'Instagram Branding', href: '/services/instagram-branding' }
  ]

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/growboostdigital', color: 'hover:text-blue-600' },
    { icon: Instagram, href: 'https://www.instagram.com/growboostdigital/', color: 'hover:text-pink-600' },
    { icon: Twitter, href: 'https://x.com/rach101201', color: 'hover:text-blue-400' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/rajesh101/', color: 'hover:text-blue-700' }
  ]

  return (
    <footer id="contact" className="relative">
      {/* Main Footer */}
      <div className="glass-card mx-6 mb-6 rounded-3xl overflow-hidden">
        <div className="bg-gradient-to-br from-gray-50 to-white p-8 lg:p-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Company Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-1"
              >
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">🦋</span>
                  </div>
                  <span className="text-2xl font-bold text-gray-800">GrowBoost Digital</span>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Your trusted partner for digital marketing success. We help businesses 
                  grow with premium marketing strategies and beautiful designs.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <motion.div
                    className="flex items-center space-x-3 text-gray-600"
                    whileHover={{ x: 5 }}
                  >
                    <Phone size={18} />
                    <a href="tel:8005504986" className="hover:text-pink-600 transition-colors">8005504986</a>
                  </motion.div>
                  
                  <motion.div
                    className="flex items-center space-x-3 text-gray-600"
                    whileHover={{ x: 5 }}
                  >
                    <Mail size={18} />
                    <a href="mailto:growboostdigital@gmail.com" className="hover:text-pink-600 transition-colors">growboostdigital@gmail.com</a>
                  </motion.div>
                  
                  <motion.div
                    className="flex items-center space-x-3 text-gray-600"
                    whileHover={{ x: 5 }}
                  >
                    <FaWhatsapp size={18} />
                    <a 
                      href="https://wa.me/918005504986?text=Hi!%20I%20am%20interested%20in%20your%20digital%20marketing%20services" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-green-600 transition-colors"
                    >
                      WhatsApp Chat
                    </a>
                  </motion.div>
                  
                  <motion.div
                    className="flex items-center space-x-3 text-gray-600"
                    whileHover={{ x: 5 }}
                  >
                    <MapPin size={18} />
                    <span>Johari Bazar, Jaipur</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Links</h3>
                <div className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      className="block text-gray-600 hover:text-pink-600 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">Our Services</h3>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <motion.div key={index}>
                      <Link
                        to={service.href}
                        className="block text-gray-600 hover:text-pink-600 transition-colors"
                      >
                        <motion.div
                          whileHover={{ x: 5 }}
                        >
                          {service.name}
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Newsletter & Social */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">Stay Updated</h3>
                
                <p className="text-gray-600 mb-6">
                  Subscribe to our newsletter for the latest marketing tips and exclusive offers.
                </p>

                {/* Newsletter Form */}
                <div className="space-y-4 mb-8">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 glass border border-gray-200 rounded-lg focus:outline-none focus:border-pink-300 transition-colors"
                  />
                  <motion.button
                    className="w-full px-4 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Subscribe Now
                  </motion.button>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon
                      return (
                        <motion.a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-10 h-10 glass border border-gray-200 rounded-lg flex items-center justify-center text-gray-600 ${social.color} transition-all duration-300`}
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <IconComponent size={18} />
                        </motion.a>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 bg-white/50 px-8 py-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-600 text-sm text-center md:text-left mb-4 md:mb-0"
            >
              © 2024 GrowBoost Digital. All rights reserved. Made with ❤️ for growing businesses.
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6 text-sm text-gray-600"
            >
              <Link to="/privacy-policy" className="hover:text-pink-600 transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-pink-600 transition-colors">Terms of Service</Link>
              <Link to="/cookie-policy" className="hover:text-pink-600 transition-colors">Cookie Policy</Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  )
}

export default Footer