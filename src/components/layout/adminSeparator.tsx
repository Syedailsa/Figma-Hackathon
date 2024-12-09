import { Separator } from "@/components/ui/separator"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react'

export default function SeparatorAdmin() {
  return (
    <div className="flex  items-center mt-2 flex-col  ">
    <div className="    text-center w-[380px] h-[70px]  ">
      <div className="space-y-1 mb-6">
        <h4 className="text-sm font-medium leading-none pb-2 ">
        <div className="flex gap-2 pl-5 p-4 pb-0 text-base  -ml-3 col-start-1 col-end-3 justify-self-start ">
            <input type="radio" value={"Pick-up"} name="pick-up" />
            <label htmlFor="pick-up">Pick-Up</label>
          </div>
        </h4>
      </div>
      <div className="flex h-5 items-center space-x-8 text-sm -mt-3 ">
      <div className=" w-[126px] h-[48px]">
        <h2 className="text-black font-semibold mb-3">Location</h2>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center  text-gray-400 text-xs">
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
      <div className=" w-[134px] h-[48px]">
        <h2 className="text-black font-semibold mb-3">Date</h2>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center  text-gray-400 text-xs">
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
        <div className="w-[130px] h-[48px]">
        <h2 className="text-black font-semibold mb-3">Time</h2>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center  text-gray-400 text-xs">
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
{/* drop-off */}
    <div className=" text-center w-[380px]  h-[70px] mt-8 ">
      <div className="space-y-1 mb-6">
        <h4 className=" font-medium leading-none  pb-2">
        <div className="flex gap-2 pl-5 p-4 pb-2 text-lg  -ml-3 items-center col-start-1 col-end-3 justify-self-start ">
            <input type="radio" value={"Drop-Off"} name="Drop-Off" />
            <label htmlFor="pick-up " className="text-sm ">Drop-Off</label>
          </div>
        </h4>
      </div>
      <div className="flex h-5 items-center space-x-8 text-sm -mt-2">
      <div className="">
        <h2 className="text-black font-semibold mb-3">Location</h2>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center  text-gray-400 text-xs">
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
          <DropdownMenuTrigger className="flex items-center  text-gray-400 text-xs">
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
          <DropdownMenuTrigger className="flex items-center  text-gray-400 text-xs">
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