import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import type { Equipment } from "@/lib/types"

interface RentalListProps {
  equipment: Equipment[]
}

export default function RentalList({ equipment }: RentalListProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Available Equipment</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {equipment.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <div className="relative h-40">
              <Image
                src={item.image || "/placeholder.svg?height=300&width=400"}
                alt={item.name}
                fill
                className="object-cover"
              />
              {item.stock < 5 && (
                <Badge variant="destructive" className="absolute top-2 right-2">
                  Limited Stock
                </Badge>
              )}
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{item.name}</CardTitle>
              <CardDescription>{item.category}</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
              <div className="flex justify-between">
                <span className="font-medium">${item.rate}/day</span>
                <span className={`text-sm ${item.stock < 5 ? "text-red-500" : "text-muted-foreground"}`}>
                  {item.stock} available
                </span>
              </div>
            </CardContent>
          </Card>
        ))}

        {equipment.length === 0 && (
          <div className="col-span-full text-center py-12">
            <p className="text-muted-foreground">No equipment available at the moment. Please check back later.</p>
          </div>
        )}
      </div>
    </div>
  )
}

