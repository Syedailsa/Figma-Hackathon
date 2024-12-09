import { CarFilterSidebar } from "@/components/layout/carfilter-sidebar";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import TCards, { OneCard } from "@/components/layout/three-cards";

export default function RentingPage() {
  return (
    <div className="flex">

      {/* left side */}

      <div className="hidden md:block bg-white w-[340px] h-auto px-5 py-5">
        <CarFilterSidebar />
      </div>
      
      {/* right side */}
      <div className="flex-col mx-12 my-8">
        <div className="relative flex flex-col sm:flex-row justify-center items-center gap-6 m-5">
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
            <button className="absolute -translate-x-[100px] sm:translate-x-0 ml-56 md:ml-0 z-10 w-[50px] h-[50px] bg-[#3563E9] drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] rounded-[10px] flex justify-center items-center">
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
        <div>
            <div className="hidden md:block">
            <TCards/>
            <TCards/>
            <TCards/>                
            </div>

            <div className="flex-row md:hidden">
              <OneCard/>
              <OneCard/>
              <OneCard/>
              <OneCard/>
              <OneCard/>
              <OneCard/>
            </div>

            <div className="flex justify-end gap-[356px] mr-12 items-center mb-12 mt-20">
                <button className="w-[156px] h-[44px] text-white rounded-[8px] bg-[#3563E9] hover:bg-[#435fb3]">Show more car</button>
                <p className="text-gray-400 text-sm font-normal">120 Car</p>
            </div> 
        </div>

      </div>
    </div>
  );
}