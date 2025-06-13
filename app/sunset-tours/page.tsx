import { getSunsetTours } from "@/lib/firebase"
import TourList from "@/components/tour-list"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sunset Tours | Blue Wave HUB",
  description: "Experience breathtaking sunsets on our exclusive boat tours",
}

export default async function SunsetToursPage() {
  const tours = await getSunsetTours()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-white-600">Sunset Tours</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-white-600">
          Experience breathtaking sunsets on our exclusive boat tours. Enjoy the magical colors of the sky while
          cruising along the coast.
        </p>
      </div>

      <TourList tours={tours} category="sunset" />
    </div>
  )
}

