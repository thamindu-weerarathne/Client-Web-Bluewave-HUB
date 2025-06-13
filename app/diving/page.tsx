import { getDivingTours } from "@/lib/firebase"
import TourList from "@/components/tour-list"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Diving Tours | Blue Wave HUB",
  description: "Explore the underwater world with our professional diving tours",
}

export default async function DivingPage() {
  const tours = await getDivingTours()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-white-600">Diving Tours</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-white-600">
          Explore the underwater world  with our professional diving tours. Discover vibrant coral reefs and marine life
          with experienced guides.
        </p>
      </div>

      <TourList tours={tours} category="diving" />
    </div>
  )
}

