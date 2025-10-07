import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Clock, Tag, Search, TrendingUp } from 'lucide-react';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const blogs = [
    {
      id: 1,
      title: "The Future of E-Commerce in 2025",
      author: "Priya Sharma",
      date: "October 1, 2025",
      image: "https://images.unsplash.com/photo-1522202195463-8da9a3a70b1e?auto=format&fit=crop&w=800&q=60",
      excerpt: "Discover the trends shaping online shopping — from AI-powered recommendations to immersive virtual stores.",
      category: "Technology",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Top 10 Ways to Grow Your Online Store",
      author: "Rohit Mehta",
      date: "September 18, 2025",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60",
      excerpt: "Learn proven marketing strategies to boost traffic, conversion rates, and customer loyalty for your e-commerce business.",
      category: "Marketing",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Why Sustainability Matters in Modern Retail",
      author: "Aditi Verma",
      date: "August 29, 2025",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
      excerpt: "Eco-friendly practices are transforming shopping. Here's how businesses can adapt to consumer demand for sustainability.",
      category: "Sustainability",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Mastering Social Media Marketing for E-Commerce",
      author: "Arjun Singh",
      date: "September 5, 2025",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=60",
      excerpt: "Social media is a powerful tool for driving sales. Learn how to leverage platforms like Instagram and Facebook effectively.",
      category: "Social Media",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "Customer Experience: The Key to Retention",
      author: "Sneha Patel",
      date: "August 15, 2025",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=60",
      excerpt: "Creating memorable customer experiences leads to loyalty and repeat business. Here's how to get it right.",
      category: "Customer Service",
      readTime: "6 min read"
    },
    {
      id: 6,
      title: "Mobile Commerce: Optimizing for Smartphone Shoppers",
      author: "Vikram Reddy",
      date: "July 28, 2025",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=60",
      excerpt: "With most shopping happening on mobile devices, learn how to create seamless mobile experiences for your customers.",
      category: "Mobile",
      readTime: "5 min read"
    }
  ];

  const categories = ["All", "Technology", "Marketing", "Sustainability", "Social Media", "Customer Service", "Mobile"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBlogs = blogs.filter(blog => 
    (selectedCategory === "All" || blog.category === selectedCategory) &&
    (blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-500 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Latest Insights & Stories
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Stay updated with the latest trends, tips, and insights in e-commerce, technology, and business growth.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-white/20 bg-white/95 focus:bg-white focus:outline-none focus:border-white shadow-lg text-sm"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Tag className="w-6 h-6 text-orange-600" />
            <h2 className="text-xl font-bold text-gray-900">Filter by Category</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-xl font-semibold text-sm transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 shadow-lg'
                    : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-yellow-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {filteredBlogs.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-orange-600" />
              <h2 className="text-xl font-bold text-gray-900">Featured Post</h2>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden border-2 border-amber-100 shadow-xl hover:shadow-2xl transition-all group">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative overflow-hidden h-64 md:h-full">
                  <img
                    src={filteredBlogs[0].image}
                    alt={filteredBlogs[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 px-4 py-2 rounded-lg text-xs font-bold shadow-lg">
                      {filteredBlogs[0].category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-black text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                    {filteredBlogs[0].title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {filteredBlogs[0].excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span className="font-semibold">{filteredBlogs[0].author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{filteredBlogs[0].date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{filteredBlogs[0].readTime}</span>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-gray-900 font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 w-fit">
                    Read Full Article
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="mb-6">
          <h2 className="text-2xl font-black text-gray-900 mb-6">All Articles</h2>
        </div>
        
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.slice(1).map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-2xl overflow-hidden border-2 border-amber-100 shadow-lg hover:shadow-xl hover:border-yellow-300 transition-all group cursor-pointer"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/95 text-orange-600 px-3 py-1 rounded-lg text-xs font-bold shadow-md">
                      {blog.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span className="font-semibold">{blog.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-500">{blog.date}</span>
                    <button className="text-orange-600 font-bold text-sm hover:text-orange-700 flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="bg-white rounded-2xl p-12 border-2 border-amber-100 shadow-lg inline-block">
              <p className="text-xl text-gray-600 mb-2">No articles found</p>
              <p className="text-sm text-gray-500">Try adjusting your search or filter</p>
            </div>
          </div>
        )}

        {/* Newsletter Section */}
        <div className="mt-16 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-500 rounded-2xl p-12 text-center shadow-xl">
          <h2 className="text-3xl font-black text-white mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Get the latest articles, insights, and exclusive content delivered straight to your inbox every week.
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl border-2 border-white/20 bg-white/95 focus:bg-white focus:outline-none text-sm"
            />
            <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;