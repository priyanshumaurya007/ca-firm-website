"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Users, BadgeIndianRupee, Zap, Headset } from "lucide-react"

const features = [
  {
    name: 'Expert CA Team',
    description: 'Our team comprises highly qualified Chartered Accountants with decades of collective experience.',
    icon: Users,
  },
  {
    name: 'Transparent Pricing',
    description: 'No hidden fees. We provide clear, upfront pricing for all our professional services.',
    icon: BadgeIndianRupee,
  },
  {
    name: 'Fast Turnaround',
    description: 'We value your time. Expect quick resolutions and timely filings for all compliance needs.',
    icon: Zap,
  },
  {
    name: 'Dedicated Support',
    description: 'Get a dedicated relationship manager for personalized guidance and prompt responses.',
    icon: Headset,
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <SectionHeading 
            title="Why Choose FinSure" 
            subtitle="We don't just crunch numbers; we provide strategic advisory to accelerate your business growth."
          />
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div 
                  key={feature.name} 
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                    <Icon className="h-8 w-8 text-gold" aria-hidden="true" />
                  </div>
                  <dt className="text-xl font-semibold leading-7 text-navy">
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-dark">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </motion.div>
              )
            })}
          </dl>
        </div>
      </div>
    </section>
  )
}
