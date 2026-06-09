"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/SectionHeading"

const industries = [
  "Startups",
  "E-commerce",
  "Manufacturing",
  "IT Companies",
  "Freelancers",
  "Professionals",
]

export function Industries() {
  return (
    <section className="py-24 bg-gray-light">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading 
          title="Industries We Serve" 
          subtitle="Our deep industry expertise allows us to provide specialized financial advisory tailored to your sector."
        />
        
        <div className="mx-auto mt-16 flex flex-wrap justify-center gap-4 sm:gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-full bg-white px-8 py-4 text-lg font-medium text-navy shadow-sm border border-gray-200 hover:border-gold hover:text-gold transition-colors cursor-default"
            >
              {industry}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
