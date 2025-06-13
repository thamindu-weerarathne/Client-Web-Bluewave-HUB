"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Menu, X, Anchor, Fish, Sunset, Turtle, FishIcon as Whale, Package, Camera } from "lucide-react"
import { ModeToggle } from "./mode-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
        <Anchor className="h-6 w-6" />
        <span className="text-white-500">Blue Wave</span>
        </Link>

        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Tours List</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/diving" title="Diving Tours" icon={<Anchor className="h-4 w-4" />}>
                      Explore underwater worlds with our professional diving tours
                    </ListItem>
                    <ListItem href="/fishing" title="Fishing Tours" icon={<Fish className="h-4 w-4" />}>
                      Experience the thrill of fishing with expert guides
                    </ListItem>
                    <ListItem href="/sunset-tours" title="Sunset Tours" icon={<Sunset className="h-4 w-4" />}>
                      Enjoy breathtaking sunsets on our exclusive tours
                    </ListItem>
                    <ListItem href="/turtle-watching" title="Turtle Watching" icon={<Turtle className="h-4 w-4" />}>
                      Observe sea turtles in their natural habitat
                    </ListItem>
                    <ListItem href="/whale-watching" title="Whale Watching" icon={<Whale className="h-4 w-4" />}>
                      Witness majestic whales with our expert guides
                    </ListItem>
              
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/equipment-rental" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <span className="flex items-center gap-1">
                      <Package className="h-4 w-4" />
                      Equipment Rental
                    </span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              

              {/* <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>About Us</NavigationMenuLink>
                </Link>
              </NavigationMenuItem> */}

              {/* <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
                </Link>
              </NavigationMenuItem> */}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <Link href="/gallery">
            <Button className="hidden md:flex" size="sm">
              <Camera className="h-4 w-4 mr-1" />
              Gallery
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 space-y-4">
            <div className="font-medium">Tours</div>
            <div className="pl-4 space-y-2">
              <Link href="/diving" className="flex items-center gap-2 py-2" onClick={() => setIsMenuOpen(false)}>
                <Anchor className="h-4 w-4" />
                <span>Diving Tours</span>
              </Link>
              <Link href="/fishing" className="flex items-center gap-2 py-2" onClick={() => setIsMenuOpen(false)}>
                <Fish className="h-4 w-4" />
                <span>Fishing Tours</span>
              </Link>
              <Link href="/sunset-tours" className="flex items-center gap-2 py-2" onClick={() => setIsMenuOpen(false)}>
                <Sunset className="h-4 w-4" />
                <span>Sunset Tours</span>
              </Link>
              <Link
                href="/turtle-watching"
                className="flex items-center gap-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Turtle className="h-4 w-4" />
                <span>Turtle Watching</span>
              </Link>
              <Link
                href="/whale-watching"
                className="flex items-center gap-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Whale className="h-4 w-4" />
                <span>Whale Watching</span>
              </Link>
          
            </div>

            <Link
              href="/equipment-rental"
              className="flex items-center gap-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Package className="h-4 w-4" />
              <span>Equipment Rental</span>
            </Link>

            <Link href="/gallery" className="flex items-center gap-2 py-2" onClick={() => setIsMenuOpen(false)}>
              <Camera className="h-4 w-4" />
              <span>Gallery</span>
            </Link>

            <Link href="/about" className="flex items-center gap-2 py-2" onClick={() => setIsMenuOpen(false)}>
              <span>About Us</span>
            </Link>

            <Link href="/contact" className="flex items-center gap-2 py-2" onClick={() => setIsMenuOpen(false)}>
              <span>Contact</span>
            </Link>

            <Button className="w-full" size="sm">
              Book Now
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

interface ListItemProps {
  className?: string
  title: string
  href: string
  children: React.ReactNode
  icon?: React.ReactNode
}

const ListItem = ({ className, title, children, href, icon }: ListItemProps) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
        >
          <div className="flex items-center gap-2 text-sm font-medium leading-none">
            {icon}
            <span>{title}</span>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}