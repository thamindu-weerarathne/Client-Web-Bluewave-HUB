"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Pause, Volume2, VolumeX, Maximize, X, Filter } from "lucide-react"

const videoData = [
  {
    id: 1,
    title: "Witness majestic whales with our expert guides",
    url: "https://firebasestorage.googleapis.com/v0/b/social-733e6.appspot.com/o/Videos%2FIFQT7933%20-%20Trim.MP4?alt=media&token=5c4fb841-e916-42bc-a1d0-648c662f327f",
    thumbnail: "https://via.placeholder.com/400x225/0ea5e9/ffffff?text=Diving+Adventure",
    category: "Whale Watching",
    duration: "0:18",
    description: "Experience the thrill of spotting majestic whales in their natural habitat. Our guided whale watching tours offer unforgettable moments on the open sea with expert crews and breathtaking views."
  },
  {
    id: 2,
    title: "Witness majestic whales with our expert guides",
    url: "https://firebasestorage.googleapis.com/v0/b/social-733e6.appspot.com/o/Videos%2FWRQE5719%20-%20Trim.MP4?alt=media&token=49d037e5-713d-4af0-b764-21797901137chttps://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnail: "https://via.placeholder.com/400x225/10b981/ffffff?text=Fishing+Tour",
    category: "Dolphin Watching",
    duration: "0:29",
    description: "Join us for an exciting dolphin watching tour and witness playful dolphins swimming and leaping in the wild. A fun and memorable ocean adventure for all ages!"
  },
  {
    id: 3,
    title: "Witness majestic whales with our expert guides",
    url: "https://firebasestorage.googleapis.com/v0/b/social-733e6.appspot.com/o/Videos%2FVGRW5068%20-%20Trim.MP4?alt=media&token=b9476151-572c-400e-9856-45dc8c9c5c38https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnail: "https://via.placeholder.com/400x225/f59e0b/ffffff?text=Sunset+Cruise",
    category: "Turtle Snorkeling",
    duration: "0:13",
    description: "Dive into crystal-clear waters and snorkel alongside graceful sea turtles. A peaceful and unforgettable encounter with marine life in their natural environment"
  },
]

const categories = ["All", "Whale Watching", "Dolphin Watching", "Turtle Snorkeling"]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  const filteredVideos = selectedCategory === "All" 
    ? videoData 
    : videoData.filter(video => video.category === selectedCategory)

  const openVideoModal = (video) => {
    setSelectedVideo(video)
    setIsPlaying(false)
  }

  const closeVideoModal = () => {
    setSelectedVideo(null)
    setIsPlaying(false)
  }

  const togglePlay = (videoElement) => {
    if (isPlaying) {
      videoElement.pause()
    } else {
      videoElement.play()
    }
    setIsPlaying(!isPlaying)
  }

  const toggleMute = (videoElement) => {
    videoElement.muted = !isMuted
    setIsMuted(!isMuted)
  }

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-800 dark:to-cyan-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Video Gallery</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Discover the beauty of our marine adventures through these amazing videos
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <div className="flex items-center gap-2 text-foreground dark:text-gray-200">
            <Filter className="h-5 w-5" />
            <span className="font-medium">Filter by category:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <Card key={video.id} className="overflow-hidden hover:shadow-lg dark:hover:shadow-xl transition-shadow cursor-pointer group bg-card dark:bg-gray-800 border dark:border-gray-700">
              <div className="relative" onClick={() => openVideoModal(video)}>
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <Play className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <Badge className="absolute top-2 right-2 bg-black bg-opacity-70 text-white">
                  {video.duration}
                </Badge>
                <Badge className="absolute top-2 left-2" variant="secondary">
                  {video.category}
                </Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-foreground dark:text-gray-100">{video.title}</h3>
                <p className="text-muted-foreground dark:text-gray-400 text-sm line-clamp-2">{video.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground dark:text-gray-400 text-lg">No videos found for the selected category.</p>
          </div>
        )}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white hover:bg-opacity-20"
              onClick={closeVideoModal}
            >
              <X className="h-6 w-6" />
            </Button>
            
            <div className="bg-background dark:bg-gray-800 rounded-lg overflow-hidden border dark:border-gray-700">
              <div className="relative">
                <video
                  ref={(el) => {
                    if (el) {
                      el.addEventListener('play', () => setIsPlaying(true))
                      el.addEventListener('pause', () => setIsPlaying(false))
                    }
                  }}
                  src={selectedVideo.url}
                  className="w-full h-auto max-h-[70vh]"
                  controls
                  poster={selectedVideo.thumbnail}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold mb-2 text-foreground dark:text-gray-100">{selectedVideo.title}</h2>
                    <Badge variant="secondary" className="mb-2">
                      {selectedVideo.category}
                    </Badge>
                  </div>
                  <Badge variant="outline">
                    {selectedVideo.duration}
                  </Badge>
                </div>
                <p className="text-muted-foreground dark:text-gray-400 leading-relaxed">
                  {selectedVideo.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}