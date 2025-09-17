import React from 'react'
import { motion } from 'framer-motion'
import { Check, Star, Zap } from 'lucide-react'

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "₹4,000",
      period: "/month",
      description: "Perfect for small businesses getting started",
      features: [
        "Social Media Management (2 platforms)",
        "Basic Website Setup",
        "Google My Business Optimization",
        "Monthly Analytics Report",
        "Email Support"
      ],
      popular: false,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      name: "Growth",
      price: "₹10,000",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "Everything in Starter",
        "Facebook & Instagram Ads",
        "Google Ads Management",
        "Advanced Website Features",
        "Weekly Strategy Calls",
        "Priority Support",
        "Custom Creative Design"
      ],
      popular: true,
      gradient: "from-pink-500 to-orange-500"
    },
    {
      name: "Business Booster",
      price: "₹15,000",
      period: "+/month",
      description: "Enterprise solution for serious growth",
      features: [
        "Everything in Growth",
        "Multi-platform Campaign Management",
        "Advanced Analytics & Reporting",
        "Dedicated Account Manager",
        "24/7 Priority Support",
        "Custom Website Development",
        "Brand Strategy Consultation",
        "Unlimited Revisions"
      ],
      popular: false,
      gradient: "from-purple-500 to-indigo-600"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent{' '}
            <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your business growth. No hidden fees, no long-term contracts.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                >
                  <div className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star size={16} />
                    <span>Most Popular</span>
                  </div>
                </motion.div>
              )}

              <motion.div
                className={`glass-card rounded-2xl p-8 h-full relative overflow-hidden ${
                  plan.popular 
                    ? 'ring-2 ring-pink-200 shadow-xl' 
                    : 'hover:shadow-xl'
                } transition-all duration-300`}
                whileHover={{ 
                  y: plan.popular ? 0 : -5,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Background gradient for popular plan */}
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-orange-50 opacity-50" />
                )}

                <div className="relative z-10">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${plan.gradient} rounded-xl flex items-center justify-center`}>
                      {plan.popular ? (
                        <Zap className="w-8 h-8 text-white" />
                      ) : (
                        <div className="w-6 h-6 bg-white rounded-full" />
                      )}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4">
                      {plan.description}
                    </p>
                    
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-gray-600 ml-1">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 * idx }}
                        className="flex items-center space-x-3"
                      >
                        <div className={`flex-shrink-0 w-5 h-5 bg-gradient-to-r ${plan.gradient} rounded-full flex items-center justify-center`}>
                          <Check size={12} className="text-white" />
                        </div>
                        <span className="text-gray-700 text-sm">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-lg hover:shadow-xl'
                        : 'glass border border-gray-200 text-gray-700 hover:border-pink-300'
                    }`}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: plan.popular 
                        ? "0 20px 40px rgba(255, 107, 157, 0.3)" 
                        : "0 10px 20px rgba(0, 0, 0, 0.1)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {plan.popular ? 'Get Started Today' : 'Choose Plan'}
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-6">
              Every business is unique. Let's create a custom package that fits your specific needs and budget.
            </p>
            <motion.button
              className="px-8 py-3 glass border border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-pink-300 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us for Custom Quote
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing