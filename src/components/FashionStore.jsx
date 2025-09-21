import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ShoppingBag, 
  Heart, 
  Star, 
  Search, 
  Filter, 
  Grid3X3, 
  List,
  ChevronLeft,
  ChevronRight,
  Eye,
  Share2
} from 'lucide-react'

const FashionStore = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState('grid')

  // Sample product data with placeholders
  const products = [
    {
      id: 1,
      name: "Ethnic Kurti Set",
      price: "₹2,499",
      originalPrice: "₹3,999",
      category: "ethnic",
      rating: 4.5,
      reviews: 128,
      isNew: true,
      isBestseller: false,
      colors: ["#FF6B9D", "#9B59B6", "#3498DB"],
      image: "/fashion-store/kurti-set.jpg" // Placeholder path
    },
    {
      id: 2,
      name: "Contemporary Dress",
      price: "₹3,299",
      originalPrice: "₹4,799",
      category: "contemporary",
      rating: 4.8,
      reviews: 89,
      isNew: false,
      isBestseller: true,
      colors: ["#E74C3C", "#2ECC71", "#F39C12"],
      image: "/fashion-store/contemporary-dress.jpg" // Placeholder path
    },
    {
      id: 3,
      name: "Traditional Saree",
      price: "₹5,999",
      originalPrice: "₹8,999",
      category: "ethnic",
      rating: 4.7,
      reviews: 156,
      isNew: false,
      isBestseller: true,
      colors: ["#8E44AD", "#C0392B", "#D35400"],
      image: "/fashion-store/traditional-saree.jpg" // Placeholder path
    },
    {
      id: 4,
      name: "Designer Lehenga",
      price: "₹12,999",
      originalPrice: "₹18,999",
      category: "bridal",
      rating: 4.9,
      reviews: 67,
      isNew: true,
      isBestseller: false,
      colors: ["#E91E63", "#FF5722", "#9C27B0"],
      image: "/fashion-store/designer-lehenga.jpg" // Placeholder path
    },
    {
      id: 5,
      name: "Casual Top",
      price: "₹1,299",
      originalPrice: "₹1,999",
      category: "contemporary",
      rating: 4.3,
      reviews: 203,
      isNew: false,
      isBestseller: false,
      colors: ["#34495E", "#95A5A6", "#BDC3C7"],
      image: "/fashion-store/casual-top.jpg" // Placeholder path
    },
    {
      id: 6,
      name: "Palazzo Set",
      price: "₹2,799",
      originalPrice: "₹4,299",
      category: "ethnic",
      rating: 4.6,
      reviews: 91,
      isNew: false,
      isBestseller: true,
      colors: ["#16A085", "#E67E22", "#8E44AD"],
      image: "/fashion-store/palazzo-set.jpg" // Placeholder path
    }
  ]

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'ethnic', name: 'Ethnic Wear', count: products.filter(p => p.category === 'ethnic').length },
    { id: 'contemporary', name: 'Contemporary', count: products.filter(p => p.category === 'contemporary').length },
    { id: 'bridal', name: 'Bridal Collection', count: products.filter(p => p.category === 'bridal').length }
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  const ProductCard = ({ product }) => (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="glass-card rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300"
    >
      {/* Product Image */}
      <div className="relative aspect-[3/4] bg-gradient-to-br from-pink-100 to-purple-100 overflow-hidden">
        {/* Image Placeholder */}
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
              <span className="text-2xl">👗</span>
            </div>
            <p className="text-sm text-gray-500">Fashion Image</p>
            <p className="text-xs text-gray-400 mt-1">{product.image}</p>
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              New
            </span>
          )}
          {product.isBestseller && (
            <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              Bestseller
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <motion.button
            className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-pink-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Heart size={16} className="text-gray-600" />
          </motion.button>
          <motion.button
            className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-pink-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Eye size={16} className="text-gray-600" />
          </motion.button>
          <motion.button
            className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-pink-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Share2 size={16} className="text-gray-600" />
          </motion.button>
        </div>

        {/* Color Variants */}
        <div className="absolute bottom-3 left-3 flex gap-1">
          {product.colors.map((color, index) => (
            <div
              key={index}
              className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[1,2,3,4,5].map((star) => (
              <Star
                key={star}
                size={12}
                className={star <= product.rating ? "text-yellow-400 fill-current" : "text-gray-300"}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-gray-900">{product.price}</span>
          <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
            {Math.round((1 - parseInt(product.price.replace(/[₹,]/g, '')) / parseInt(product.originalPrice.replace(/[₹,]/g, ''))) * 100)}% OFF
          </span>
        </div>

        {/* Add to Cart Button */}
        <motion.button
          className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 rounded-lg font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-all"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <ShoppingBag size={16} />
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Gulmohar Jaipur
            <span className="block text-2xl lg:text-3xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Fashion & Lifestyle
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our exclusive collection of ethnic and contemporary fashion. 
            From traditional sarees to modern dresses, find your perfect style.
          </p>
        </motion.div>

        {/* Search & Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-2xl p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-pink-300 transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                      : 'bg-white text-gray-600 hover:bg-pink-50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name} ({category.count})
                </motion.button>
              ))}
            </div>

            {/* View Mode */}
            <div className="flex gap-2">
              <motion.button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-pink-100 text-pink-600' : 'text-gray-600'}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Grid3X3 size={20} />
              </motion.button>
              <motion.button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-pink-100 text-pink-600' : 'text-gray-600'}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <List size={20} />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          layout
          className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1 lg:grid-cols-2'
          }`}
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Load More Products
          </motion.button>
        </motion.div>

        {/* How to Add Images Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="glass-card rounded-2xl p-8 mt-16 bg-gradient-to-r from-blue-50 to-indigo-50"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            📸 How to Add Product Images
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Image Requirements:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Size:</strong> 800x1200px (3:4 aspect ratio)</li>
                <li>• <strong>Format:</strong> JPG, PNG, WebP</li>
                <li>• <strong>Quality:</strong> High resolution, well-lit</li>
                <li>• <strong>Background:</strong> Clean, neutral background</li>
                <li>• <strong>Multiple angles:</strong> Front, back, side views</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Implementation Steps:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Create <code className="bg-gray-200 px-2 py-1 rounded">/public/fashion-store/</code> folder</li>
                <li>• Add product images with descriptive names</li>
                <li>• Update image paths in product data</li>
                <li>• Add hover effects for image galleries</li>
                <li>• Implement lazy loading for performance</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>💡 Pro Tip:</strong> Use tools like Canva or Photoshop to create consistent, 
              professional product images. Consider adding lifestyle shots showing the products in use!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default FashionStore