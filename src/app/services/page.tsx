"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"
import Link from "next/link"
import { CheckCircle2, Calculator, FileText, Building2, BookOpen, SearchCheck, Briefcase } from "lucide-react"

const serviceCategories = [
  {
    id: "income-tax",
    title: "Income Tax Services",
    icon: FileText,
    description: "Expert tax planning and filing services for individuals and corporations to ensure compliance and optimize tax liabilities.",
    includes: [
      "Individual Tax Filing (ITR 1-4)",
      "Corporate Tax Filing (ITR 5-7)",
      "Tax Planning & Advisory",
      "Handling Income Tax Notices",
      "TDS/TCS Return Filing",
    ]
  },
  {
    id: "gst",
    title: "GST Services",
    icon: Calculator,
    description: "End-to-end GST solutions from registration to monthly returns and audit compliance.",
    includes: [
      "GST Registration",
      "GST Return Filing (GSTR 1, 3B, 9, 9C)",
      "GST Letter of Undertaking (LUT)",
      "Handling GST Notices & Assessments",
      "GST Audit",
    ]
  },
  {
    id: "company-registration",
    title: "Business Registration",
    icon: Building2,
    description: "Seamless incorporation services to help you start your business with the right legal structure.",
    includes: [
      "Private Limited Company",
      "LLP Registration",
      "Partnership Firm",
      "One Person Company (OPC)",
      "Proprietorship Firm",
    ]
  },
  {
    id: "accounting",
    title: "Accounting Services",
    icon: BookOpen,
    description: "Accurate and timely financial record keeping to help you make informed business decisions.",
    includes: [
      "Bookkeeping on Tally/QuickBooks",
      "Payroll Management",
      "Financial Reporting (P&L, Balance Sheet)",
      "Bank Reconciliation",
      "Virtual CFO Services",
    ]
  },
  {
    id: "audit",
    title: "Audit Services",
    icon: SearchCheck,
    description: "Comprehensive audit services to ensure transparency, regulatory compliance, and business efficiency.",
    includes: [
      "Internal Audit",
      "Statutory Audit",
      "Tax Audit",
      "Compliance Audit",
      "Stock Audit",
    ]
  },
  {
    id: "startup",
    title: "Startup Advisory",
    icon: Briefcase,
    description: "Specialized advisory for startups to navigate complex compliance, funding, and growth stages.",
    includes: [
      "Startup India Registration (DPIIT)",
      "Pitch Deck Financial Projections",
      "Valuation Services",
      "Compliance Setup",
      "ESOP Structuring",
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="bg-gray-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-24">
          <SectionHeading 
            title="Our Professional Services" 
            subtitle="We provide a comprehensive suite of financial and compliance services designed to simplify your business operations."
          />
        </div>

        <div className="space-y-24">
          {serviceCategories.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 0
            
            return (
              <motion.div 
                key={service.id}
                id={service.id}
                className={`flex flex-col gap-12 lg:flex-row lg:items-center ${isEven ? "" : "lg:flex-row-reverse"}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="lg:w-1/2">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/10 mb-6">
                    <Icon className="h-8 w-8 text-gold" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg leading-8 text-gray-dark mb-8">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    {service.includes.map((item) => (
                      <li key={item} className="flex gap-x-3 text-base leading-7 text-navy">
                        <CheckCircle2 className="h-6 w-5 flex-none text-gold" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <Link href={`/contact?service=${service.id}`}>
                    <Button variant="default" className="mt-4">
                      Get Started with {service.title.split(' ')[0]}
                    </Button>
                  </Link>
                </div>
                
                <div className="lg:w-1/2">
                  <Card className="overflow-hidden border-none shadow-xl bg-white">
                    <CardContent className="p-0">
                      <div className="bg-navy p-10 text-white">
                        <h3 className="text-2xl font-bold mb-4">Why FinSure for {service.title}?</h3>
                        <p className="text-gray-300 mb-6">
                          Our dedicated team handles the complexities so you can focus on what you do best: growing your business. We ensure accuracy, compliance, and peace of mind.
                        </p>
                        <div className="flex gap-4">
                          <div className="bg-white/10 rounded-lg p-4 flex-1 text-center">
                            <div className="text-gold font-bold text-2xl">100%</div>
                            <div className="text-sm text-gray-300 mt-1">Compliance</div>
                          </div>
                          <div className="bg-white/10 rounded-lg p-4 flex-1 text-center">
                            <div className="text-gold font-bold text-2xl">24/7</div>
                            <div className="text-sm text-gray-300 mt-1">Support</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
