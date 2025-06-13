import Link from "next/link"
import Image from "next/image"
import { Anchor, Fish, Sunset, Turtle, FishIcon as Whale } from "lucide-react"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Diving Tours",
    description: "Explore underwater worlds with our professional diving tours",
    icon: Anchor,
    image: "/images/categories/DivingTours.jpg",
    href: "/diving",
  },
  {
    title: "Fishing Tours",
    description: "Experience the thrill of fishing with expert guides",
    icon: Fish,
    image: "/images/categories/FishingTours.jpg",
        href: "/fishing",
  },
  {
    title: "Sunset Tours",
    description: "Enjoy breathtaking sunsets on our exclusive tours",
    icon: Sunset,
    image: "/images/categories/SunsetTours.jpg",
        href: "/sunset-tours",
  },
  {
    title: "Turtle Watching",
    description: "Observe sea turtles in their natural habitat",
    icon: Turtle,
    image: "/images/categories/TurtleWatching.jpg",   
     href: "/turtle-watching",
  },
  {
    title: "Whale Watching",
    description: "Witness majestic whales with our expert guides",
    icon: Whale,
    image: "/images/categories/WhaleWatching.jpg",   
     href: "/whale-watching",
  },
  
]

export default function ServiceCategories() {
  return (
    <section id="tours" className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-white-500">Our Services</h2>
        <p className="text-lg text-muted-foreground max-w-2xl text-white-500 mx-auto">
          Discover our wide range of water activities and tours designed for all ages and experience levels.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon

          return (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-cyan-600" />
                  {service.title}
                </CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href={service.href}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
