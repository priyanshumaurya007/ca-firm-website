"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Card, CardContent } from "@/components/ui/Card"
import { Target, Lightbulb, ShieldCheck, Users } from "lucide-react"

const values = [
  {
    name: "Integrity",
    description: "We uphold the highest standards of professional ethics and transparency.",
    icon: ShieldCheck,
  },
  {
    name: "Excellence",
    description: "We strive for accuracy, precision, and the highest quality in all our deliverables.",
    icon: Target,
  },
  {
    name: "Innovation",
    description: "We leverage modern technology to provide efficient and forward-thinking solutions.",
    icon: Lightbulb,
  },
  {
    name: "Client-Centricity",
    description: "Your success is our priority. We tailor our services to meet your unique needs.",
    icon: Users,
  },
]

const timeline = [
  { year: "2009", title: "Foundation", description: "FinSure Advisors was established with a vision to simplify taxation." },
  { year: "2012", title: "Expansion", description: "Opened our second branch and expanded our corporate audit division." },
  { year: "2016", title: "GST Transition", description: "Successfully helped over 300 businesses transition to the new GST regime." },
  { year: "2020", title: "Digital First", description: "Launched our complete virtual advisory services to support clients remotely." },
  { year: "2024", title: "Milestone", description: "Celebrated 15 years of excellence and crossed the 1,000+ client mark." },
]

export default function AboutPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Company Story */}
        <div className="mx-auto max-w-3xl text-center mb-24">
          <SectionHeading title="About FinSure Advisors" subtitle="A legacy of trust, expertise, and unwavering commitment to your financial success." />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg leading-8 text-gray-dark mt-8 space-y-6 text-left"
          >
            <p>
              Founded in 2009, FinSure Advisors began with a simple mission: to make world-class financial and tax advisory accessible to individuals and growing businesses. Over the past 15 years, we have evolved from a small accounting practice into a full-service Chartered Accountancy firm.
            </p>
            <p>
              We understand that navigating the complex landscape of Indian taxation and corporate compliance can be daunting. That is why our team of dedicated professionals acts not just as accountants, but as strategic partners in your growth journey.
            </p>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full bg-navy text-white border-none">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-gold mb-6" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-300">
                  To empower individuals and businesses with accurate, timely, and strategic financial insights, ensuring absolute compliance while maximizing growth opportunities.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full bg-gold text-white border-none">
              <CardContent className="p-8">
                <Lightbulb className="h-12 w-12 text-white mb-6" />
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-white/90">
                  To be the most trusted and forward-thinking financial advisory firm in India, known for our integrity, technological edge, and exceptional client service.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <SectionHeading title="Our Core Values" subtitle="The principles that guide everything we do." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 mb-6">
                    <Icon className="h-8 w-8 text-navy" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-2">{value.name}</h3>
                  <p className="text-gray-dark">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Founder Section */}
        <div className="bg-gray-light rounded-3xl p-8 lg:p-16 mb-24">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 lg:mb-0"
            >
              <div className="aspect-[4/5] rounded-2xl bg-gray-300 relative overflow-hidden">
                {/* Placeholder for Founder Image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 bg-gray-200">
                  <span className="text-lg">Founder Image Placeholder</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-navy mb-2">CA Anand Agarwal</h2>
              <p className="text-gold font-medium text-lg mb-6">Founder & Managing Partner</p>
              <div className="space-y-4 text-gray-dark text-lg leading-relaxed">
                <p>
                  With over 15 years of experience in corporate taxation, audit, and strategic financial planning, CA Anand Agarwal established FinSure Advisors to bridge the gap between complex tax laws and business owners.
                </p>
                <p>
                  A Fellow Member of the Institute of Chartered Accountants of India (ICAI), Anand has advised numerous Fortune 500 companies and successful startups. His vision is to make compliance a seamless part of business growth rather than a hurdle.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <SectionHeading title="Our Journey" subtitle="Key milestones that define our growth." />
          <div className="mt-16 max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 sm:pl-32 py-6 group"
              >
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 sm:before:ml-[5.5rem] before:h-full before:px-px before:bg-gray-200 sm:before:ml-[5.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 sm:after:ml-[5.5rem] after:w-4 after:h-4 after:bg-gold after:border-4 after:box-content after:border-white after:rounded-full after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-16 h-6 mb-3 sm:mb-0 text-navy bg-gold/10 rounded-full">{item.year}</time>
                  <div className="text-xl font-bold text-navy">{item.title}</div>
                </div>
                <div className="text-gray-dark text-lg">{item.description}</div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
