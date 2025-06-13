import Hero from "@/components/hero"
import FeaturedTours from "@/components/featured-tours"
import ServiceCategories from "@/components/service-categories"
import Testimonials from "@/components/testimonials"
import CallToAction from "@/components/call-to-action"

export default function Home() {
  return (
    <div className="space-y-16 pb-16">
      <Hero />
      <ServiceCategories />
      <FeaturedTours />
      <Testimonials />
      <CallToAction />
    </div>
  )
}

