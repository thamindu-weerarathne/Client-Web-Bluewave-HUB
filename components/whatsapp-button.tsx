"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)

  const handleWhatsAppClick = () => {
    const message = "Hello! I'm interested in learning more about your tours and services."
    window.open(`https://wa.me/+94717377952?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {isHovered && (
          <div className="absolute bottom-full right-0 mb-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 whitespace-nowrap">
            <p className="text-sm font-medium">Chat with us on WhatsApp</p>
          </div>
        )}
        <Button
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          size="sm"
          className="rounded-full h-14 w-14 bg-green-500 hover:bg-green-600 flex items-center justify-center"
        >
          <svg
    className="w-12 h-12 fill-white"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
            <path d="M16 2.933c-7.337 0-13.067 5.731-13.067 13.067 0 2.299.615 4.553 1.78 6.532l-1.858 6.689 6.855-1.801c1.894 1.021 4.021 1.563 6.29 1.563 7.337 0 13.067-5.731 13.067-13.067s-5.731-13.067-13.067-13.067zM16 26.667c-1.938 0-3.823-.521-5.478-1.51l-.391-.229-4.063 1.068 1.094-3.942-.25-.406c-1.136-1.849-1.734-3.969-1.734-6.065 0-6.019 4.901-10.919 10.919-10.919s10.919 4.901 10.919 10.919c0 6.019-4.901 10.919-10.919 10.919zM22.271 19.49c-.312-.156-1.844-.906-2.13-1.011s-.49-.156-.698.156c-.208.313-.802 1.011-.984 1.219-.177.208-.365.229-.677.073-.313-.156-1.323-.487-2.517-1.55-.93-.829-1.556-1.854-1.737-2.167-.177-.313-.021-.479.135-.635.135-.135.313-.365.469-.542.156-.188.208-.313.313-.521s.052-.386-.026-.542c-.073-.156-.677-1.635-.927-2.24-.229-.531-.469-.458-.677-.469l-.573-.01c-.198 0-.521.073-.792.343s-1.04 1.015-1.04 2.479 1.065 2.875 1.219 3.073c.156.208 2.095 3.197 5.073 4.479.708.312 1.26.5 1.688.635.708.229 1.354.198 1.865.115.573-.083 1.844-.75 2.104-1.469.26-.719.26-1.333.177-1.469-.083-.135-.302-.219-.615-.375z" />
          </svg>
          <span className="sr-only">Contact via WhatsApp</span>
        </Button>
      </div>
    </div>
  )
}
