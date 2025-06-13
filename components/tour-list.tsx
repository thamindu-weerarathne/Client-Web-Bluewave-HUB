import TourCard from "@/components/tour-card"
import type { Tour } from "@/lib/types"

interface TourListProps {
  tours: Tour[]
  category: string
}

export default function TourList({ tours, category }: TourListProps) {
  // Add category to each tour
  const toursWithCategory = tours.map((tour) => ({
    ...tour,
    category,
  }))

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {toursWithCategory.map((tour) => (
        <TourCard key={tour.id} tour={tour} />
      ))}

      {tours.length === 0 && (
        <div className="col-span-full text-center py-12">
          <p className="text-muted-foreground">No tours available at the moment. Please check back later.</p>
        </div>
      )}
    </div>
  )
}

