'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { motion } from "framer-motion"

export default function Hero() {
  const images = [
    "/images/hero_bg.jpg",
    "/images/slider01.jpg",
    "/images/slider02.jpg",
  ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
  }

  // Animation variants
  const textVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90" />
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div key={idx} className="relative w-full h-screen">
              <Image
                src={img}
                alt={`Slide ${idx + 1}`}
                fill
                className="object-cover object-center scale-100 animate-tilt-shift"
                priority={idx === 0}
                quality={100}
              />
               <div className="absolute inset-0 bg-black opacity-60"></div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Content with animations */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <motion.div 
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.2 }}
          className="max-w-2xl lg:max-w-4xl space-y-8"
        >
          <motion.h1 
            variants={textVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ocean Adventures
            </span>{' '}
            <span className="text-white-500">Beyond Imagination</span>
          </motion.h1>
          
          <motion.p 
            variants={textVariants}
            className="text-xl md:text-2xl text-slate-200/90 max-w-2xl leading-relaxed"
          >
            Dive into extraordinary marine experiences with expert guides. Explore vibrant coral reefs, majestic whales, 
            and hidden underwater worlds through our curated adventures.
          </motion.p>

          <motion.div 
            variants={textVariants}
            className="flex flex-wrap gap-4 animate-hover"
          >
           <Button asChild size="lg" className=" text-white bg-cyan-600 hover:bg-cyan-700">
              <Link href="#tours">Explore Tours</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="animate-bounce w-8 h-14 rounded-3xl border-2 border-white/30 flex items-center justify-center">
          <div className="w-2 h-4 bg-white/50 rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  )
}