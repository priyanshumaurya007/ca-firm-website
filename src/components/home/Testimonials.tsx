"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Card, CardContent } from "@/components/ui/Card"
import { Star } from "lucide-react"

const testimonials = [
  {
    content: "FinSure Advisors have been instrumental in setting up our startup's financial compliance. Their guidance on GST and corporate tax has saved us both time and money. Highly professional team!",
    author: "Rahul Sharma",
    role: "Founder, TechFlow Solutions",
  },
  {
    content: "We transitioned our bookkeeping and auditing to FinSure two years ago. The level of transparency and fast turnaround is unmatched. They feel like an in-house finance team.",
    author: "Priya Desai",
    role: "Director, RetailMart India",
  },
  {
    content: "As a freelancer, taxes used to give me anxiety. The team at FinSure made my income tax filing seamless and helped me structure my investments for maximum tax benefits. Excellent service.",
    author: "Vikram Singh",
    role: "Independent Consultant",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading 
          title="What Our Clients Say" 
          subtitle="Don't just take our word for it. Here is what some of our valued clients have to say about working with us."
        />
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-gray-light border-none">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-6 text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg leading-8 text-navy mb-8">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="mt-auto">
                    <div className="font-semibold text-navy">{testimonial.author}</div>
                    <div className="text-sm text-gray-dark">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
