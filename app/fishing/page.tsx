import { getFishingTours } from "@/lib/firebase"
import TourList from "@/components/tour-list"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fishing Tours | Blue Wave HUB",
  description: "Experience the thrill of fishing with our expert guides",
}

export default async function FishingPage() {
  const tours = await getFishingTours()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-white-600">Fishing Tours</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-white-600">
          Experience the thrill of fishing with our expert guides. Whether you're a beginner or experienced angler, we
          have the perfect fishing adventure for you.
        </p>
      </div>

      <TourList tours={tours} category="fishing" />
    </div>
  )
}

