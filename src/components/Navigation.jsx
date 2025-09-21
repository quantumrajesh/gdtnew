import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const navItems = [
    { name: 'Home', href: '/', isRoute: true },
    { name: 'Services', href: isHomePage ? '#services' : '/#services', isRoute: !isHomePage },
    { name: 'Success Stories', href: isHomePage ? '#portfolio' : '/#portfolio', isRoute: !isHomePage },
    { name: 'Pricing', href: isHomePage ? '#pricing' : '/#pricing', isRoute: !isHomePage },
    { name: 'Contact', href: isHomePage ? '#contact' : '/#contact', isRoute: !isHomePage }
  ]

  const handleNavClick = (item) => {
    if (isHomePage && !item.isRoute) {
      // Smooth scroll for home page navigation
      const element = document.querySelector(item.href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass-card rounded-2xl px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/">
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
              >
                {/* Replace with your actual logo */}
                <img 
                  src="/logo.svg" 
                  alt="GrowBoost Digital Logo" 
                  className="h-12 w-12"
                  onError={(e) => {
                    // Fallback to PNG if SVG fails
                    e.target.src = '/logo.png'
                  }}
                />
                <span className="text-xl font-bold text-gray-800">GrowBoost Digital</span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                item.isRoute ? (
                  <Link key={item.name} to={item.href}>
                    <motion.span
                      className="text-gray-700 hover:text-gray-900 font-medium transition-colors cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.name}
                    </motion.span>
                  </Link>
                ) : (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      if (isHomePage) {
                        e.preventDefault()
                        handleNavClick(item)
                      }
                    }}
                  >
                    {item.name}
                  </motion.a>
                )
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.button
                className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign In
              </motion.button>
              <motion.button
                className="px-6 py-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 107, 157, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Sign Up
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pt-4 border-t border-gray-200"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  item.isRoute ? (
                    <Link key={item.name} to={item.href} onClick={() => setIsOpen(false)}>
                      <span className="text-gray-700 hover:text-gray-900 font-medium">
                        {item.name}
                      </span>
                    </Link>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-700 hover:text-gray-900 font-medium"
                      onClick={(e) => {
                        if (isHomePage) {
                          e.preventDefault()
                          handleNavClick(item)
                        } else {
                          setIsOpen(false)
                        }
                      }}
                    >
                      {item.name}
                    </a>
                  )
                ))}
                <div className="flex flex-col space-y-2 pt-4">
                  <button className="text-left text-gray-700 font-medium">Sign In</button>
                  <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-medium rounded-lg">
                    Sign Up
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation