"use client"

import React from "react"
import FeatureCard from "./FeaturesCard"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Features: React.FC = () => {
  return (
    <section className="min-h-[80vh] w-full  flex flex-col justify-center items-center py-16 px-6">
      <h1 className="text-4xl font-bold text-black mb-4">Powerful Features</h1>
      <p className="text-gray-700 text-center max-w-xl mb-12">
        Discover the smart tools designed to help you manage your workflow boost your productivity and stay focused
      </p>

      <div className="w-full max-w-6xl">
        <Carousel className="w-full">
          <CarouselContent>
            {Array.from({ length: 6 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-1/2 lg:basis-1/3 px-2"
              >
                <FeatureCard />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}

export default Features
