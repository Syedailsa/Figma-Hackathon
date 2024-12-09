"use client"

import { LayoutDashboard, Car, LineChart, Receipt, Inbox, Calendar, Settings, HelpCircle, Moon, LogOut } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

export default function SidebarNav() {
  return (
    <div className="flex  h-full w-[280px] flex-col border-r bg-white p-5">
      {/* Main Menu Section */}
      <div className="space-y-4">
        <h2 className="px-4 text-xs font-semibold uppercase tracking-wider  text-[#94A7CB66]">
          Mainmenu
        </h2>
        <nav className="space-y-1">
          <Button
            variant="ghost"
            className="w-full justify-start bg-blue-600 text-white hover:bg-blue-600 hover:text-white"
          >
            <LayoutDashboard className="mr-3 h-5 w-5" />
            Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start text-[#90A3BF] font-medium">
            <Car className="mr-3 h-5 w-5 text-[#90A3BF] " />
            Car Rent
          </Button>
          <Button variant="ghost" className="w-full justify-start text-[#90A3BF] font-medium">
            <LineChart className="mr-3 h-5 w-5 text-[#90A3BF] " />
            Insight
          </Button>
          <Button variant="ghost" className="w-full justify-start text-[#90A3BF] font-medium">
            <Receipt className="mr-3 h-5 w-5 text-[#90A3BF]" />
            Reimburse
          </Button>
          <Button variant="ghost" className="w-full justify-start text-[#90A3BF] font-medium">
            <Inbox className="mr-3 h-5 w-5 text-[#90A3BF]" />
            Inbox
          </Button>
          <Button variant="ghost" className="w-full justify-start text-[#90A3BF] font-medium">
            <Calendar className="mr-3 h-5 w-5 text-[#90A3BF]" />
            Calender
          </Button>
        </nav>
      </div>

      {/* Preferences Section */}
      <div className="mt-8 space-y-4">
        <h2 className="px-4 text-xs font-semibold uppercase tracking-wider  text-[#94A7CB66]">
          Preferences
        </h2>
        <nav className="space-y-1">
          <Button variant="ghost" className="w-full justify-start text-[#90A3BF] font-medium">
            <Settings className="mr-3 h-5 w-5  text-[#90A3BF]" />
            Settings
          </Button>
          <Button variant="ghost" className="w-full justify-start text-[#90A3BF] font-medium">
            <HelpCircle className="mr-3 h-5 w-5 text-[#90A3BF]" />
            Help & Center
          </Button>
          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex items-center">
              <Moon className="mr-3 h-5 w-5 text-[#90A3BF]" />
              <span className="text-sm text-[#90A3BF] font-medium">Dark Mode</span>
            </div>
            <Switch />
          </div>
        </nav>
      </div>

      {/* Log Out Button */}
      <div className="mt-auto">
        <Button variant="ghost" className="w-full justify-start text-[#90A3BF] hover:text-red-600 font-medium">
          <LogOut className="mr-3 h-5 w-5 text-[#90A3BF]" />
          Log Out
        </Button>
      </div>
    </div>
  )
}