import * as React from "react"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeading({ title, subtitle, centered = true, className = "" }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : "text-left"} ${className}`}>
      <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-dark max-w-2xl mx-auto text-balance">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 bg-gold mt-6 ${centered ? "mx-auto" : ""}`} />
    </div>
  )
}
