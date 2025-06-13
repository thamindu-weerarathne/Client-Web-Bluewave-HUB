import { getRentalEquipment } from "@/lib/firebase"
import RentalList from "@/components/rental-list"
import RentalForm from "@/components/rental-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Equipment Rental | Blue Wave HUB",
  description: "Rent high-quality water sports and diving equipment for your adventure",
}

export default async function EquipmentRentalPage() {
  const equipment = await getRentalEquipment()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-white-600">Equipment Rental</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-white-600">
          Rent high-quality water sports and diving equipment for your adventure. We offer a wide range of professional
          gear to enhance your experience.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <RentalList equipment={equipment} />
        <div className="sticky top-24">
          <RentalForm equipment={equipment} />
        </div>
      </div>
    </div>
  )
}

