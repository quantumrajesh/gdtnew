import React from 'react'
import { motion } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import BackgroundBlobs from './components/BackgroundBlobs'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative overflow-x-hidden">
      <BackgroundBlobs />
      <Navigation />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
