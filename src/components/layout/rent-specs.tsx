'use client'

import { Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import router from "next/router";


export default function CarCard() {
  return (
    <Card className="bg-white shadow-none border-none p-5 w-[492px] h-[490px]">
      <CardContent className="">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="font-semibold text-[40px]">Nissan GT-R</h3>
            <div className="flex items-center">
              {[1, 2, 3, 4].map((i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
              <svg
                className="w-4 h-4 text-yellow-400 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
              </svg>
              <span className="text-xs text-gray-500 ml-1">440+ Reviewer</span>
            </div>
          </div>
          <button className="text-red-500" aria-label="Add to favorites">
            <Heart className="h-5 w-5 fill-current" />
          </button>
        </div>

        <p className="text-sm text-gray-600 mb-8">
          NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".
        </p>

        <div className="grid grid-cols-2 gap-y-2 mb-10 text-sm">
          <div className="flex gap-5">
            <span className="text-gray-500">Type Car</span>
            <span className="text-gray-700">Sport</span>
          </div>
          <div className="flex gap-5">
            <span className="text-gray-500">Capacity</span>
            <span className="text-gray-700">2 Person</span>
          </div>
          <div className="flex gap-5">
            <span className="text-gray-500">Steering</span>
            <span className="text-gray-700">Manual</span>
          </div>
          <div className="flex gap-5">
            <span className="text-gray-500">Gasoline</span>
            <span className="text-gray-700">70L</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <div>
          <div className="flex items-center gap-1">
            <span className="text-xl font-bold">$80.00/</span>
            <span className="text-gray-500 text-lg">days</span>
          </div>
          <span className="text-gray-400 text-sm line-through">$100.00</span>
        </div>
        <Button onClick={() => router.push("/dashboard")}  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold p-6">
          Rent Now
        </Button>
      </CardFooter>
    </Card>
  )
}


