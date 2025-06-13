import { getTourById } from "@/lib/firebase"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Clock, MapPin, DollarSign } from "lucide-react"
import BookingForm from "@/components/booking-form"
import type { Metadata } from "next"

interface TourPageProps {
  params: {
    category: string
    id: string
  }
}

export async function generateMetadata({ params }: TourPageProps): Promise<Metadata> {
  const tour = await getTourById(params.category, params.id)

  if (!tour) {
    return {
      title: "Tour Not Found",
    }
  }

  return {
    title: `${tour.name} | Blue Wave Tourism`,
    description: tour.description,
  }
}

export default async function TourPage({ params }: TourPageProps) {
  const { category, id } = params
  const tour = await getTourById(category, id)

  if (!tour) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
            <Image
              src={tour.image || "/placeholder.svg?height=600&width=800"}
              alt={tour.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          <h1 className="text-3xl font-bold mb-4">{tour.name}</h1>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4" />
              <span>{tour.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4" />
              <span>{tour.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <DollarSign className="h-4 w-4" />
              <span>{tour.price}</span>
            </div>
          </div>

          <div className="prose max-w-none mb-8">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p>{tour.description}</p>

            {category === "diving" && (
              <>
                <h3 className="text-lg font-medium mt-4 mb-2">Diving Details</h3>
                <ul>
                  <li>
                    <strong>Max Depth:</strong> {tour.max_depth} meters
                  </li>
                  <li>
                    <strong>Certification Required:</strong> {tour.certification_required}
                  </li>
                  <li>
                    <strong>Equipment Included:</strong> {tour.equipment_included ? "Yes" : "No"}
                  </li>
                </ul>
              </>
            )}

            {category === "fishing" && (
              <>
                <h3 className="text-lg font-medium mt-4 mb-2">Fishing Details</h3>
                <ul>
                  <li>
                    <strong>Boat Type:</strong> {tour.boat_type}
                  </li>
                  <li>
                    <strong>Max Capacity:</strong> {tour.max_capacity} people
                  </li>
                  <li>
                    <strong>Fishing Equipment:</strong> {tour.fishing_equipment}
                  </li>
                </ul>
              </>
            )}

            {category === "sunset" && (
              <>
                <h3 className="text-lg font-medium mt-4 mb-2">Sunset Tour Details</h3>
                <ul>
                  <li>
                    <strong>Sunset Time:</strong> {tour.sunset_time}
                  </li>
                  <li>
                    <strong>Inclusions:</strong> {tour.inclusions}
                  </li>
                  <li>
                    <strong>Exclusions:</strong> {tour.exclusions}
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>

        <div className="sticky top-24 h-fit">
          <BookingForm tour={tour} category={category} />
        </div>
      </div>
    </div>
  )
}

