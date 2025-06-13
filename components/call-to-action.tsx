import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CallToAction() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="bg-cyan-600 rounded-xl p-8 md:p-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready for Your Next Adventure?</h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
          Book your tour today and experience the wonders of the ocean with our expert guides. Special discounts
          available for group bookings!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {/* <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-white text-cyan-600 hover:bg-white/90 hover:text-cyan-600 border-white"
          >
            <Link href="/contact">Contact Us</Link>
          </Button> */}
          <Button asChild size="lg" className="bg-white text-cyan-600 hover:bg-white/90 hover:text-cyan-600">
            <Link href="#tours">Explore Tours</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

