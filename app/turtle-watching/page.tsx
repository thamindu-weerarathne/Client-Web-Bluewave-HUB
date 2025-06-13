import { getTurtleTours } from "@/lib/firebase"
import TourList from "@/components/tour-list"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Turtle Watching | Blue Wave HUB",
  description: "Observe sea turtles in their natural habitat with our guided tours",
}

export default async function TurtleWatchingPage() {
  const tours = await getTurtleTours()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-white-600">Turtle Watching Tours</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto ">
          Observe sea turtles in their natural habitat with our guided tours. Learn about these magnificent creatures
          and their conservation.
        </p>
      </div>

      <TourList tours={tours} category="turtles" />
    </div>
  )
}

