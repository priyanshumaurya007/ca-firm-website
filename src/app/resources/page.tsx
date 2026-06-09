"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Card, CardContent } from "@/components/ui/Card"
import { Search, ChevronRight } from "lucide-react"
import Image from "next/image"

const categories = ["All", "Taxation", "GST", "Compliance", "Startups", "Accounting"]

const articles = [
  {
    id: 1,
    title: "Tax Saving Tips for Salaried Employees",
    excerpt: "Discover legitimate ways to reduce your tax burden under the old and new tax regimes for the current financial year.",
    category: "Taxation",
    date: "Mar 15, 2024",
    readTime: "5 min read",
    image: "/resources/tax.png",
  },
  {
    id: 2,
    title: "GST Compliance Checklist for SMEs",
    excerpt: "A comprehensive guide to ensuring your small or medium enterprise remains 100% compliant with GST regulations.",
    category: "GST",
    date: "Mar 10, 2024",
    readTime: "8 min read",
    image: "/resources/gst.png",
  },
  {
    id: 3,
    title: "Step-by-Step Company Registration Process",
    excerpt: "Everything you need to know about incorporating a Private Limited Company in India, from DIN to PAN/TAN.",
    category: "Compliance",
    date: "Mar 05, 2024",
    readTime: "10 min read",
    image: "/resources/company.png",
  },
  {
    id: 4,
    title: "Startup Tax Planning Guide: First 3 Years",
    excerpt: "Crucial tax planning strategies every founder should implement during the early stages of their startup.",
    category: "Startups",
    date: "Feb 28, 2024",
    readTime: "7 min read",
    image: "/resources/startup.png",
  },
  {
    id: 5,
    title: "Common Accounting Mistakes Businesses Make",
    excerpt: "Avoid these frequent bookkeeping errors that could lead to financial discrepancies and regulatory penalties.",
    category: "Accounting",
    date: "Feb 20, 2024",
    readTime: "6 min read",
    image: "/resources/accounting.png",
  },
]

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === "All" || article.category === activeCategory
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="bg-gray-light py-24 sm:py-32 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading 
          title="Insights & Resources" 
          subtitle="Stay updated with the latest in taxation, compliance, and business finance."
        />

        {/* Search and Categories */}
        <div className="mt-16 mb-12 flex flex-col md:flex-row gap-6 justify-between items-center">
          <div className="relative w-full md:max-w-md">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="text"
              className="block w-full rounded-md border-0 py-3 pl-10 pr-3 text-navy ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-navy sm:text-sm sm:leading-6"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center md:justify-end w-full">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-navy text-white"
                    : "bg-white text-navy border border-gray-300 hover:border-navy"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Article Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col hover:shadow-lg transition-shadow border-none cursor-pointer group">
                  <div className="h-48 bg-gray-200 rounded-t-xl relative overflow-hidden">
                    <Image 
                      src={article.image} 
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors z-10" />
                  </div>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <span className="text-gold font-medium">{article.category}</span>
                      <span>{article.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-dark mb-6 flex-grow">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-sm text-gray-500">{article.readTime}</span>
                      <span className="text-navy font-medium flex items-center group-hover:text-gold transition-colors">
                        Read More <ChevronRight className="h-4 w-4 ml-1" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <h3 className="text-xl font-semibold text-navy">No articles found</h3>
            <p className="text-gray-dark mt-2">Try adjusting your search or category filter.</p>
          </div>
        )}
      </div>
    </div>
  )
}
