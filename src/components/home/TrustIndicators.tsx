"use client"

import { motion } from "framer-motion"

const stats = [
  { id: 1, name: 'Clients Served', value: '1000+' },
  { id: 2, name: 'Years Experience', value: '15+' },
  { id: 3, name: 'Businesses Supported', value: '500+' },
  { id: 4, name: 'Client Retention', value: '98%' },
]

export function TrustIndicators() {
  return (
    <div className="bg-navy-light py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4 sm:grid-cols-2">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
              <dd className="order-first text-4xl font-semibold tracking-tight text-gold sm:text-5xl">
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </div>
  )
}
