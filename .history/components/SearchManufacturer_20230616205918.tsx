"use client"
import { setManufacturerProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'

const SearchManufacturer = ({ manufacturer, setManufacturer }: setManufacturerProps) => {
    return (
        <div>
            <Combobox>
                <div className='relative w-full'>
                    <Combobox.Button className="absolute to">

                    </Combobox.Button>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacturer
