"use client"

import { Fragment, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Listbox, Transition } from "@headlessui/react"
import { CustomFilterProps } from "@/types"

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  return (
    <div className="w-fit">
      <Listbox>
        <div>
          
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter
