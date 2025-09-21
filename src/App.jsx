import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
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
import WhatsAppButton from './components/WhatsAppButton'

// Service Pages
import FacebookInstagramAdsPage from './pages/FacebookInstagramAdsPage'
import GoogleAdsPage from './pages/GoogleAdsPage'
import WordPressWebsitesPage from './pages/WordPressWebsitesPage'
import AICreativeDesignPage from './pages/AICreativeDesignPage'
import InstagramBrandingPage from './pages/InstagramBrandingPage'
import SEOLocalMarketingPage from './pages/SEOLocalMarketingPage'

// Legal Pages
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsOfServicePage from './pages/TermsOfServicePage'
import CookiePolicyPage from './pages/CookiePolicyPage'

// Home Page Component
const HomePage = () => (
  <>
    <Hero />
    <Services />
    <About />
    <Portfolio />
    <Pricing />
    <Testimonials />
    <CTA />
  </>
)

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative overflow-x-hidden">
          <BackgroundBlobs />
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services/facebook-instagram-ads" element={<FacebookInstagramAdsPage />} />
              <Route path="/services/google-ads-gmb" element={<GoogleAdsPage />} />
              <Route path="/services/website-development" element={<WordPressWebsitesPage />} />
              <Route path="/services/ai-creative-design" element={<AICreativeDesignPage />} />
              <Route path="/services/instagram-branding" element={<InstagramBrandingPage />} />
              <Route path="/services/seo-local-marketing" element={<SEOLocalMarketingPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-service" element={<TermsOfServicePage />} />
              <Route path="/cookie-policy" element={<CookiePolicyPage />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
