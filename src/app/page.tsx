import { Hero } from "@/components/home/Hero"
import { TrustIndicators } from "@/components/home/TrustIndicators"
import { ServicesOverview } from "@/components/home/ServicesOverview"
import { WhyChooseUs } from "@/components/home/WhyChooseUs"
import { Industries } from "@/components/home/Industries"
import { Testimonials } from "@/components/home/Testimonials"
import { CTA } from "@/components/home/CTA"

export default function Home() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <ServicesOverview />
      <WhyChooseUs />
      <Industries />
      <Testimonials />
      <CTA />
    </>
  );
}
