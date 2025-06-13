import { getWhaleTours } from "@/lib/firebase"
import TourList from "@/components/tour-list"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Whale Watching | Blue Wave Tourism",
  description: "Witness majestic whales in their natural habitat with our expert guides",
}

export default async function WhaleWatchingPage() {
  const tours = await getWhaleTours()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Whale Watching Tours</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Witness majestic whales in their natural habitat with our expert guides. An unforgettable experience observing
          these gentle giants of the ocean.
        </p>
      </div>

      <TourList tours={tours} category="whales" />
    </div>
  )
}

