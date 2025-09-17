import React from 'react'
import { motion } from 'framer-motion'

const BackgroundBlobs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Blob 1 - Pink to Orange */}
      <motion.div
        className="absolute top-20 -left-20 w-72 h-72 rounded-full gradient-blob-1 opacity-20 blur-xl"
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -50, 50, 0],
          scale: [1, 1.1, 0.9, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Blob 2 - Blue to Purple */}
      <motion.div
        className="absolute top-1/3 -right-32 w-96 h-96 rounded-full gradient-blob-2 opacity-25 blur-xl"
        animate={{
          x: [0, -40, 40, 0],
          y: [0, 60, -60, 0],
          scale: [1, 0.8, 1.2, 1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Blob 3 - Pink to Red */}
      <motion.div
        className="absolute bottom-20 left-1/4 w-80 h-80 rounded-full gradient-blob-3 opacity-20 blur-xl"
        animate={{
          x: [0, 50, -25, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.3, 0.7, 1]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
      />
      
      {/* Blob 4 - Teal to Blue */}
      <motion.div
        className="absolute bottom-1/4 -right-20 w-64 h-64 rounded-full gradient-blob-4 opacity-30 blur-xl"
        animate={{
          x: [0, -20, 35, 0],
          y: [0, 45, -45, 0],
          scale: [1, 0.9, 1.1, 1]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 8
        }}
      />
      
      {/* Additional smaller blobs */}
      <motion.div
        className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full gradient-blob-1 opacity-15 blur-2xl"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  )
}

export default BackgroundBlobs