"use client";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
import React from "react";

const reviews = [
  {
    name: "Alex Stanton",
    role: "CEO at Bukalapak",
    review:
      "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    date: "21 July 2022",
    rating: 4,
    avatar: "/Profil.png", // Replace with actual image URL
  },
  {
    name: "Skylar Dias",
    role: "CEO at Amazon",
    review:
      "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    date: "20 July 2022",
    rating: 4,
    avatar: "/Profill2.png", // Replace with actual image URL
  },
];

const Reviews = () => {
  return (
    <div className="bg-white rounded-lg p-4 w-auto h-auto">
      <div className="flex gap-3 items-center p-4 pb-3 mb-4">
        <h2 className="text-xl font-semibold">Reviews</h2>
        <span className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm">13</span>
      </div>

      {reviews.map((review, index) => (
        <div
          key={index}
          className="flex items-start px-5 py-2 gap-4 mb-6 last:mb-0"
        >
          <img
            src={review.avatar}
            alt={`${review.name} avatar`}
            className="w-12 h-12 rounded-full"
          />
          <div className="flex-1">
            <div className="flex justify-between items-center mb-2">
              <div>
                <h3 className="text-lg font-medium">{review.name}</h3>
                <p className="text-gray-500 text-sm">{review.role}</p>
              </div>
              <div className="text-gray-500 text-sm">
                {review.date}
                <div className="text-yellow-400 text-sm flex">
                    {Array.from({ length: 5 }, (_, i) => (
                        <span key={i}>{i < review.rating ? "\u2605" : "\u2606"}</span>
                    ))}
                </div>
              </div>
            </div>
            <p className="text-gray-700 mb-2">{review.review}</p>
          </div>
        </div>
      ))}

      <div className="flex justify-center text-center mt-4">
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-sm font-medium text-gray-400">
            Show All <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>no more revies</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Reviews;
