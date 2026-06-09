"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-navy text-white py-24 sm:py-32 lg:pb-40">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-700 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-balance">
              Your Trusted Chartered Accounting & Tax Advisory Partner
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-300 text-balance"
          >
            Helping individuals, startups, and businesses stay compliant, reduce tax burdens, and grow with confidence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Link href="/contact">
              <Button variant="gold" size="lg" className="gap-2">
                Schedule Consultation <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy">
                Explore Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
