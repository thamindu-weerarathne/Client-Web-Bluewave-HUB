import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Sarah Johnson",
    avatar: "SJ",
    title: "Diving Enthusiast",
    content:
      "The diving tour was absolutely incredible! The guides were knowledgeable and made sure everyone was safe while having fun. I saw so many beautiful fish and coral formations. Highly recommend!",
  },
  {
    name: "Michael Chen",
    avatar: "MC",
    title: "Family Traveler",
    content:
      "We took the whale watching tour with our kids and it was the highlight of our vacation. The captain knew exactly where to go, and we saw several whales up close. An unforgettable experience!",
  },
  {
    name: "Emma Rodriguez",
    avatar: "ER",
    title: "Adventure Seeker",
    content:
      "The sunset cruise was magical! The views were breathtaking and the crew was so friendly and attentive. They even took photos for us. Perfect for a romantic evening or with friends.",
  },
]

export default function Testimonials() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Don't just take our word for it. Here's what our customers have to say about their experiences with us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.title}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">"{testimonial.content}"</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

