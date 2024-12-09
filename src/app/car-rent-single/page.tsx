import { CarFilterSidebar } from "@/components/layout/carfilter-sidebar";
import RentCard from "@/components/layout/rent-card";
import CarCard from "@/components/layout/rent-specs";
import Reviews from "@/components/layout/reviews";
import TCards from "@/components/layout/three-cards";
import React from "react";

export default function SingleRentCar() {
  return (
    <div className="w-full flex flex-col md:flex-row ">

      {/* left side */}
      <div className="hidden md:block bg-white w-[340px] h-auto">
        <CarFilterSidebar />
      </div>

      {/* right side */}
      <div className="m-4">
      <div className="flex flex-col gap-6 place-items-center items-center w-full mb-5">
        <div className="flex flex-col md:flex-row md:justify-center md:items-center">
          <RentCard />
          <CarCard />
        </div>

        <div className="w-full max-w-[986px] mx-auto">
          <Reviews />
        </div>


        <div className="flex justify-between items-center w-[79%]">
            <p className="text-gray-400">Recent Car</p>
            <p className="text-blue-600">View All</p>
        </div>
        <div className="w-full">
            <TCards />
        </div>


        <div className="flex justify-between items-center w-[79%]">
            <p className="text-gray-400">Recommendation Car</p>
            <p className="text-blue-600">View All</p>
        </div>
          <div className="w-full">
            <TCards />
          </div>
      </div>
      </div>

    </div>
  );
}
