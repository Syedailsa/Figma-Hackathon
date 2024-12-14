'use client'

import Cards from "@/components/layout/four-cards";
import SeparatorDemo from "@/components/layout/separater";
import React from "react";
import { Separator } from "@/components/ui/separator"
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react'
import TCards, { OneCard } from "@/components/layout/three-cards";

export default function Hero() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 mt-10 mx-auto place-items-center">
          <div className="flex gap-10 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10">
              <div className="rounded-lg w-[450px] h-[250px] lg:w-[640px] lg:h-[360px]">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="/Ads1.png"
                />
              </div>
            </div>
            <div className="hidden lg:block sm:w-1/2 mb-10">
              <div className="rounded-lg w-[640px] h-[360px]">
                <img
                  alt="content"
                  className="object-cover object-center w-full h-full"
                  src="/Ads2.png"
                />
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
              <SeparatorDemo/>
            </div>
          <div className="relative lg:hidden  flex flex-col justify-center items-center gap-6 m-5">
            {/* Pick-Up Card */}
            <div className="bg-white rounded-lg px-6 w-[486px] h-[136px]">
            <div className="space-y-1 mb-6">
                <h4 className="text-lg font-medium">
                <div className="flex gap-2 pl-5 p-4 pb-0 text-lg  -ml-3 col-start-1 col-end-3 justify-self-start ">
                    <input
                    type="radio"
                    id="pick-up"
                    name="selection"
                    value="Pick-up"
                    />
                    <label htmlFor="pick-up">Pick-Up</label>
                </div>
                </h4>
            </div>

            <div className="flex items-center gap-8 text-sm">
                <div>
                <h2 className="text-black font-semibold mb-2">Location</h2>
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center text-gray-400">
                    Select your city <ChevronDown className="ml-1 h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                    <DropdownMenuItem>Karachi</DropdownMenuItem>
                    <DropdownMenuItem>Lahore</DropdownMenuItem>
                    <DropdownMenuItem>Islamabad</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                </div>
                <Separator orientation="vertical" />
                <div>
                <h2 className="text-black font-semibold mb-2">Date</h2>
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center text-gray-400">
                    Select your date <ChevronDown className="ml-1 h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                    <DropdownMenuItem>8-Dec</DropdownMenuItem>
                    <DropdownMenuItem>9-Dec</DropdownMenuItem>
                    <DropdownMenuItem>10-Dec</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                </div>
                <Separator orientation="vertical" />
                <div>
                <h2 className="text-black font-semibold mb-2">Time</h2>
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center text-gray-400">
                    Select your time <ChevronDown className="ml-1 h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                    <DropdownMenuItem>Today</DropdownMenuItem>
                    <DropdownMenuItem>Tomorrow</DropdownMenuItem>
                    <DropdownMenuItem>Day After</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                </div>
            </div>
            </div>

            {/* Center Button */}
            <button className="absolute -translate-x-[100px]  ml-56  z-10 w-[50px] h-[50px] bg-[#3563E9] drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] rounded-[10px] flex justify-center items-center">
            <HiOutlineArrowsUpDown className="text-white w-[18px] h-[16px]" />
            </button>

            {/* Drop-Off Card */}
            <div className="bg-white rounded-lg px-6 w-[486px] h-[136px]">
            <div className="space-y-1 mb-6">
                <h4 className="text-lg font-medium">
                <div className="flex gap-2 pl-5 p-4 pb-0 text-lg  -ml-3 col-start-1 col-end-3 justify-self-start ">
                    <input
                    type="radio"
                    id="drop-off"
                    name="selection"
                    value="Drop-off"
                    />
                    <label htmlFor="drop-off">Drop-Off</label>
                </div>
                </h4>
            </div>
            <div className="flex items-center gap-8 text-sm">
                <div>
                <h2 className="text-black font-semibold mb-2">Location</h2>
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center text-gray-400">
                    Select your city <ChevronDown className="ml-1 h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                    <DropdownMenuItem>Karachi</DropdownMenuItem>
                    <DropdownMenuItem>Lahore</DropdownMenuItem>
                    <DropdownMenuItem>Islamabad</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                </div>
                <Separator orientation="vertical" />
                <div>
                <h2 className="text-black font-semibold mb-2">Date</h2>
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center text-gray-400">
                    Select your date <ChevronDown className="ml-1 h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                    <DropdownMenuItem>8-Dec</DropdownMenuItem>
                    <DropdownMenuItem>9-Dec</DropdownMenuItem>
                    <DropdownMenuItem>10-Dec</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                </div>
                <Separator orientation="vertical" />
                <div>
                <h2 className="text-black font-semibold mb-2">Time</h2>
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center text-gray-400">
                    Select your time <ChevronDown className="ml-1 h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                    <DropdownMenuItem>Today</DropdownMenuItem>
                    <DropdownMenuItem>Tomorrow</DropdownMenuItem>
                    <DropdownMenuItem>Day After</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div className="hidden md:display">
          <div className="container place-items-center">
            <div className="flex justify-between w-[1312px] h-[44px] items-center my-10">
              <p className="text-gray-400">
                Popular Car
              </p>
              <p className=" text-blue-600">
                View All
              </p>
            </div>
          </div>
          <Cards/>          
        </div>
        <div className="translate-x-[65px] md:hidden">
          <div className="flex my-2 justify-between items-center w-[79%]">
              <p className="text-gray-400">Popular Car</p>
              <p className="text-blue-600">View All</p>
          </div>
          <div className="w-full overflow-hidden">
              <TCards />
          </div>          
        </div>



        <div className="container place-items-center">
          <div className="flex justify-start w-[1312px] h-[44px] items-center my-10">
            <p className="text-gray-400 pl-5">
            Recomendation Car
            </p>
          </div>
          <div className="hidden md:block ">
          <Cards/>
          <Cards/>            
          </div>
          <div className="flex-row md:hidden">
              <OneCard/>
              <OneCard/>
              <OneCard/>
              <OneCard/>
              <OneCard/>
              <OneCard/>
          </div>
        </div>
        <div className="flex justify-center  md:justify-end md:gap-96 md:mr-28 items-center mb-12 mt-20">
          <button className="w-[156px] h-[44px] text-white rounded-[8px] mr-36 bg-[#3563E9] hover:bg-[#435fb3] font-sm md:font-normal">Show more car</button>
          <p className="text-gray-400 text-sm font-sm md:font-normal">120 Car</p>
        </div>
      </section>
    </div>
  );
}

export const revalidate = 60;
