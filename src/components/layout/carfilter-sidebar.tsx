"use client"

import * as React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

interface FilterOption {
  label: string
  count: number
  checked?: boolean
}

const typeOptions: FilterOption[] = [
  { label: "Sport", count: 10, checked: true },
  { label: "SUV", count: 12, checked: true },
  { label: "MPV", count: 16 },
  { label: "Sedan", count: 20 },
  { label: "Coupe", count: 14 },
  { label: "Hatchback", count: 14 },
]

const capacityOptions: FilterOption[] = [
  { label: "2 Person", count: 10, checked: true },
  { label: "4 Person", count: 14 },
  { label: "6 Person", count: 12 },
  { label: "8 or More", count: 16, checked: true },
]

export function CarFilterSidebar() {
  const [price, setPrice] = React.useState([100])

  return (
    <div className="hidden md:block p-2 w-[280px] space-y-8">
      <div className="space-y-4">
        <h3 className="text-xs text-gray-400 font-medium uppercase text-muted-foreground">
          TYPE
        </h3>
        <div className="space-y-3">
          {typeOptions.map((option) => (
            <div key={option.label} className="flex items-center">
              <Checkbox 
                id={`type-${option.label}`} 
                defaultChecked={option.checked}
                className="border-muted-foreground/30"
              />
              <Label
                htmlFor={`type-${option.label}`}
                className="flex flex-1 items-center gap-2 px-2 text-sm font-normal"
              >
                {option.label}
                <span className="text-muted-foreground">({option.count})</span>
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xs text-gray-400 font-medium uppercase text-muted-foreground">
          CAPACITY
        </h3>
        <div className="space-y-3">
          {capacityOptions.map((option) => (
            <div key={option.label} className="flex items-center">
              <Checkbox 
                id={`capacity-${option.label}`}
                defaultChecked={option.checked}
                className="border-muted-foreground/30"
              />
              <Label
                htmlFor={`capacity-${option.label}`}
                className="flex flex-1 items-center gap-2 px-2 text-sm font-normal"
              >
                {option.label}
                <span className="text-muted-foreground">({option.count})</span>
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xs text-gray-400 font-medium uppercase text-muted-foreground">
          PRICE
        </h3>
        <div className="space-y-3">
          <Slider
            defaultValue={[100]}
            max={100}
            step={1}
            value={price}
            onValueChange={setPrice}
            className="py-4"
          />
          <div className="text-sm">
            Max. ${price[0].toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  )
}

