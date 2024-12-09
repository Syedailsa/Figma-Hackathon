import { Separator } from "@/components/ui/separator"
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react'

export default function SeparatorDemo() {
  return (
    <div className="flex gap-10 items-center mt-6 ">
    <div className=" bg-[#FFFFFF] rounded-lg px-6 w-[600px]  h-[136px]">
      <div className="space-y-1 mb-6">
        <h4 className="text-sm font-medium leading-none">
        <div className="flex gap-2 pl-5 p-4 pb-0 text-lg  -ml-3 col-start-1 col-end-3 justify-self-start ">
            <input type="radio" value={"Pick-up"} name="pick-up" />
            <label htmlFor="pick-up">Pick-Up</label>
          </div>
        </h4>
      </div>
      <div className="flex h-5 items-center space-x-8 text-sm mt-6">
      <div className="">
        <h2 className="text-black font-semibold mb-3">Location</h2>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center  text-gray-400">
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
      <div className="">
        <h2 className="text-black font-semibold mb-3">Date</h2>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center  text-gray-400">
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
        <div className="">
        <h2 className="text-black font-semibold mb-3">Time</h2>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center  text-gray-400">
          Select your time <ChevronDown className="ml-1 h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>today</DropdownMenuItem>
            <DropdownMenuItem>tommorow</DropdownMenuItem>
            <DropdownMenuItem>day after</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      </div>
    </div>
    <button className="w-[50px] h-[50px] rounded-[10px] bg-[#3563E9]   drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] ">
      <HiOutlineArrowsUpDown className="text-[#FFFFFF] w-[18.08px] h-[16.33px] m-4"/> 
    </button>
    <div className="bg-[#FFFFFF] rounded-lg px-6 w-[600px]  h-[136px]">
      <div className="space-y-1 mb-6">
        <h4 className="text-sm font-medium leading-none">
        <div className="flex gap-2 pl-5 p-4 pb-0 text-lg  -ml-3 col-start-1 col-end-3 justify-self-start ">
            <input type="radio" value={"Drop-Off"} name="Drop-Off" />
            <label htmlFor="pick-up">Drop-Off</label>
          </div>
        </h4>
      </div>
      <div className="flex h-5 items-center space-x-8 text-sm mt-6">
      <div className="">
        <h2 className="text-black font-semibold mb-3">Location</h2>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center  text-gray-400">
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
      <div className="">
        <h2 className="text-black font-semibold mb-3">Date</h2>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center  text-gray-400">
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
        <div className="">
        <h2 className="text-black font-semibold mb-3">Time</h2>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center  text-gray-400">
          Select your time <ChevronDown className="ml-1 h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>today</DropdownMenuItem>
            <DropdownMenuItem>tommorow</DropdownMenuItem>
            <DropdownMenuItem>day after</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      </div>
    </div>
    </div>

  )
}

