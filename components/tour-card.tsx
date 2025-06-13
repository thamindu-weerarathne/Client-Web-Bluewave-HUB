import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, DollarSign } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Tour } from "@/lib/types"

interface TourCardProps {
  tour: Tour
}

export default function TourCard({ tour }: TourCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative h-48">
        <Image
          src={tour.image || "/placeholder.svg?height=400&width=600"}
          alt={tour.name}
          fill
          className="object-cover"
        />
        {tour.status === "Popular" && <Badge className="absolute top-2 right-2 bg-cyan-600">Popular</Badge>}
      </div>
      <CardHeader>
        <CardTitle>{tour.name}</CardTitle>
        <CardDescription className="flex items-center gap-1">
          <MapPin className="h-3 w-3" />
          {tour.location}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{tour.description}</p>
        <div className="flex justify-between text-sm">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{tour.duration}</span>
          </div>
          <div className="flex items-center gap-1 font-medium">
            <DollarSign className="h-4 w-4 text-muted-foreground" />
            <span>{tour.price}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/tour/${tour.category}/${tour.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

