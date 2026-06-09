import Link from "next/link"
import { Calculator, Mail, MapPin, Phone } from "lucide-react"
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="bg-navy text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2">
              <Calculator className="h-8 w-8 text-gold" />
              <span className="text-2xl font-bold tracking-tight">FinSure Advisors</span>
            </Link>
            <p className="text-sm leading-6 text-gray-300 max-w-sm">
              Your trusted partner for all Chartered Accounting, Tax Advisory, and Business Compliance needs. Helping businesses grow with confidence.
            </p>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-gold transition-colors">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                <span className="sr-only">Facebook</span>
                <FaFacebook className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/services#income-tax" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Income Tax Filing
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#gst" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      GST Registration
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#company-registration" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Company Registration
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#audit" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Audit & Assurance
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/about" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Contact Us</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin className="h-6 w-6 text-gold shrink-0" aria-hidden="true" />
                    <span className="text-sm leading-6 text-gray-300">
                      123 Business Avenue, Financial District,<br />
                      New Delhi, 110001
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-gold shrink-0" aria-hidden="true" />
                    <span className="text-sm leading-6 text-gray-300">
                      +91 98765 43210
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-gold shrink-0" aria-hidden="true" />
                    <span className="text-sm leading-6 text-gray-300">
                      contact@finsureadvisors.com
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-800 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} FinSure Advisors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
