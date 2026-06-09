"use client"

import Link from "next/link"
import { Button } from "@/components/ui/Button"

export function CTA() {
  return (
    <section className="bg-navy relative overflow-hidden py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-white/10 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
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
          <svg x="50%" y={-1} className="overflow-visible fill-white/5">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
          Need Expert Tax & Compliance Guidance?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
          Book a free consultation with our experts to discuss your financial requirements and discover how we can add value to your business.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/contact">
            <Button variant="gold" size="lg">
              Book a Free Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
