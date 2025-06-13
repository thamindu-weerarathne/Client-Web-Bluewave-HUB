import { getFeaturedTours } from "@/lib/firebase"
import TourCard from "@/components/tour-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function FeaturedTours() {
  const tours = await getFeaturedTours()

  return (
    <section className="container mx-auto px-4 py-16 bg-muted/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Featured Tours</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Our most popular tours and activities that you shouldn't miss.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {tours.map((tour) => (
    <TourCard key={tour.id} tour={tour} />
  ))}
</div>


      <div className="text-center mt-12">
        {/* <Button asChild>
          <Link href="/all-tours">View All Tours</Link>
        </Button> */}
      </div>
    </section>
  )
}

