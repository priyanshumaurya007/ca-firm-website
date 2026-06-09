"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { Calculator, FileText, Building2, BookOpen, SearchCheck, Briefcase } from "lucide-react"

const services = [
  {
    title: "Income Tax Filing",
    description: "Expert assistance with individual and corporate tax returns, ensuring compliance and maximum savings.",
    icon: FileText,
  },
  {
    title: "GST Registration & Filing",
    description: "End-to-end GST solutions including registration, monthly returns, and audit compliance.",
    icon: Calculator,
  },
  {
    title: "Company Registration",
    description: "Seamless incorporation services for Private Limited, LLP, and other business structures.",
    icon: Building2,
  },
  {
    title: "Accounting & Bookkeeping",
    description: "Accurate and timely financial record keeping to help you make informed business decisions.",
    icon: BookOpen,
  },
  {
    title: "Audit & Assurance",
    description: "Statutory and internal audits to ensure transparency and regulatory compliance.",
    icon: SearchCheck,
  },
  {
    title: "Business Compliance",
    description: "Comprehensive secretarial and ROC compliance services for your business.",
    icon: Briefcase,
  },
]

export function ServicesOverview() {
  return (
    <section className="py-24 bg-gray-light">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading 
          title="Our Services" 
          subtitle="Comprehensive financial and compliance solutions tailored for your success."
        />
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group border-gray-medium">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy/5 text-navy group-hover:bg-gold/10 group-hover:text-gold transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl text-navy">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
