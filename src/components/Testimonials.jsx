import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Founder, Fashion Boutique",
      company: "Elegant Threads",
      content: "GrowBoost Digital transformed our online presence completely. Our sales increased by 300% in just 4 months! Their team understands fashion brands and created campaigns that really resonate with our audience.",
      rating: 5,
      image: "/api/placeholder/100/100"
    },
    {
      name: "Rajesh Patel",
      role: "Owner, Restaurant Chain",
      company: "Spice Garden",
      content: "The Google Ads and GMB optimization they did for our 5 locations was incredible. We went from struggling to get bookings to being fully booked every weekend. ROI was 5x in the first quarter!",
      rating: 5,
      image: "/api/placeholder/100/100"
    },
    {
      name: "Dr. Anita Verma",
      role: "Clinic Director",
      company: "HealthCare Plus",
      content: "Their premium website design and digital marketing strategy helped us become the go-to clinic in our area. Patient appointments increased by 200% and our online reputation is stellar.",
      rating: 5,
      image: "/api/placeholder/100/100"
    },
    {
      name: "Amit Kumar",
      role: "CEO, Tech Startup",
      company: "InnovateTech",
      content: "From zero to 50K followers and hundreds of qualified leads. GrowBoost Digital's social media strategy and brand building expertise is unmatched. They truly understand modern digital marketing.",
      rating: 5,
      image: "/api/placeholder/100/100"
    },
    {
      name: "Sunita Agarwal",
      role: "Real Estate Agent",
      company: "Prime Properties",
      content: "The Facebook and Instagram ad campaigns generated high-quality leads consistently. My business grew 4x in 6 months. Their targeting and creative work is simply outstanding.",
      rating: 5,
      image: "/api/placeholder/100/100"
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our{' '}
            <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business owners say about working with GrowBoost Digital.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-3xl p-8 lg:p-12 relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-100 to-orange-100 rounded-full opacity-50 -translate-y-16 translate-x-16" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed text-center mb-8 italic">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonials[currentIndex].name.charAt(0)}
                    </span>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900 text-lg">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-gray-600">
                      {testimonials[currentIndex].role}
                    </div>
                    <div className="text-sm text-pink-600 font-medium">
                      {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center space-x-4 mt-8">
              <motion.button
                onClick={prevTestimonial}
                className="w-12 h-12 glass border border-gray-200 rounded-full flex items-center justify-center hover:border-pink-300 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </motion.button>
              
              <motion.button
                onClick={nextTestimonial}
                className="w-12 h-12 glass border border-gray-200 rounded-full flex items-center justify-center hover:border-pink-300 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </motion.button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-pink-500 to-orange-500'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Side Testimonials (Desktop) */}
          <div className="hidden lg:block">
            {/* Previous testimonial */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-32"
            >
              <div className="glass rounded-2xl p-6 w-64 opacity-60 scale-75">
                <div className="text-sm text-gray-600 mb-3 italic">
                  "{testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].content.substring(0, 100)}..."
                </div>
                <div className="font-semibold text-gray-800 text-sm">
                  {testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].name}
                </div>
              </div>
            </motion.div>

            {/* Next testimonial */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-32"
            >
              <div className="glass rounded-2xl p-6 w-64 opacity-60 scale-75">
                <div className="text-sm text-gray-600 mb-3 italic">
                  "{testimonials[(currentIndex + 1) % testimonials.length].content.substring(0, 100)}..."
                </div>
                <div className="font-semibold text-gray-800 text-sm">
                  {testimonials[(currentIndex + 1) % testimonials.length].name}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-gray-900">500+</div>
              <div className="text-gray-600 text-sm">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">₹50Cr+</div>
              <div className="text-gray-600 text-sm">Revenue Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">4.9★</div>
              <div className="text-gray-600 text-sm">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">98%</div>
              <div className="text-gray-600 text-sm">Client Retention</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials