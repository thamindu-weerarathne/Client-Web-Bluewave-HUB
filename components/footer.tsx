import Link from "next/link"
import { Anchor, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <Anchor className="h-6 w-6" />
              <span>Blue Wave</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Experience the best water activities and tours with our professional guides.
            </p>
            <div className="flex gap-4">
              <Link href="https://facebook.com" className="hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://twitter.com" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Tours</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/diving" className="text-muted-foreground hover:text-foreground">
                  Diving Tours
                </Link>
              </li>
              <li>
                <Link href="/fishing" className="text-muted-foreground hover:text-foreground">
                  Fishing Tours
                </Link>
              </li>
              <li>
                <Link href="/sunset-tours" className="text-muted-foreground hover:text-foreground">
                  Sunset Tours
                </Link>
              </li>
              <li>
                <Link href="/turtle-watching" className="text-muted-foreground hover:text-foreground">
                  Turtle Watching
                </Link>
              </li>
              <li>
                <Link href="/whale-watching" className="text-muted-foreground hover:text-foreground">
                  Whale Watching
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/equipment-rental" className="text-muted-foreground hover:text-foreground">
                  Equipment Rental
                </Link>
              </li>
              {/* <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms & Conditions
                </Link>
              </li> */}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Mirissa, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0" />
                <Link href="tel:+94717377952" className="text-muted-foreground hover:text-foreground">
                  +94 (71) 737-7952
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0" />
                <Link href="mailto:info@bluewave.com" className="text-muted-foreground hover:text-foreground">
                  info@bluewave.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Blue Wave Tourism. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

