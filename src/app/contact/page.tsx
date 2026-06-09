"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Card, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { MapPin, Phone, Mail, Clock, MessageCircle, ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How long does company registration take?",
    answer: "Typically, a Private Limited Company registration takes 7-10 working days, provided all documents are in order and government processing times are normal."
  },
  {
    question: "What documents are required for GST registration?",
    answer: "You'll need PAN, Aadhaar, Business Address Proof (Electricity bill/Rent Agreement), Bank Account details, and a passport size photograph of the proprietor/directors."
  },
  {
    question: "Can you help with startup compliance?",
    answer: "Yes, we offer end-to-end startup compliance services including DPIIT registration, Angel Tax exemption, ESOP structuring, and monthly/annual ROC filings."
  },
  {
    question: "Do you provide virtual consultations?",
    answer: "Absolutely! We support clients across India and globally through secure virtual meetings via Google Meet or Zoom."
  }
]

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading 
          title="Get in Touch" 
          subtitle="Ready to streamline your finances? Contact us today for a free consultation."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-navy mb-8">Office Information</h3>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy/5">
                  <MapPin className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-navy">Head Office</h4>
                  <p className="mt-2 text-gray-dark">
                    123 Business Avenue, Financial District,<br />
                    New Delhi, 110001, India
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy/5">
                  <Phone className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-navy">Phone & WhatsApp</h4>
                  <p className="mt-2 text-gray-dark">
                    +91 98765 43210<br />
                    +91 11 2345 6789
                  </p>
                  <Button variant="outline" className="mt-4 gap-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                    <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                  </Button>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy/5">
                  <Mail className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-navy">Email Support</h4>
                  <p className="mt-2 text-gray-dark">
                    contact@finsureadvisors.com<br />
                    support@finsureadvisors.com
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy/5">
                  <Clock className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-navy">Business Hours</h4>
                  <p className="mt-2 text-gray-dark">
                    Monday - Friday: 9:30 AM - 6:30 PM<br />
                    Saturday: 10:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Placeholder */}
            <div className="mt-12 bg-gray-200 h-64 rounded-xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-navy/5" />
              <div className="text-gray-500 font-medium z-10 flex flex-col items-center">
                <MapPin className="h-8 w-8 mb-2 opacity-50" />
                Interactive Google Maps Embed
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-none shadow-xl bg-gray-light">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-navy mb-6">Send us a message</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-navy">
                        First name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 py-2.5 px-3 text-navy shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-navy sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-navy">
                        Last name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="block w-full rounded-md border-0 py-2.5 px-3 text-navy shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-navy sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium leading-6 text-navy">
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="block w-full rounded-md border-0 py-2.5 px-3 text-navy shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-navy sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium leading-6 text-navy">
                        Phone number
                      </label>
                      <div className="mt-2">
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          autoComplete="tel"
                          className="block w-full rounded-md border-0 py-2.5 px-3 text-navy shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-navy sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium leading-6 text-navy">
                      Service Required
                    </label>
                    <div className="mt-2">
                      <select
                        id="service"
                        name="service"
                        className="block w-full rounded-md border-0 py-2.5 px-3 text-navy shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-navy sm:text-sm sm:leading-6 bg-white"
                      >
                        <option>Income Tax Filing</option>
                        <option>GST Registration & Filing</option>
                        <option>Company Registration</option>
                        <option>Accounting & Bookkeeping</option>
                        <option>Audit & Assurance</option>
                        <option>Startup Advisory</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium leading-6 text-navy">
                      Message
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="block w-full rounded-md border-0 py-2.5 px-3 text-navy shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-navy sm:text-sm sm:leading-6"
                        defaultValue={""}
                      />
                    </div>
                  </div>

                  <Button type="submit" variant="default" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="mt-32 max-w-3xl mx-auto">
          <SectionHeading title="Frequently Asked Questions" subtitle="Find answers to common queries about our services and processes." />
          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                <button
                  className="flex w-full items-center justify-between px-6 py-4 text-left focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-navy">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-gold" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-dark">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
