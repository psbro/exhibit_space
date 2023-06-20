"use client"
import { setManufacturerProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image'

import { useState, Fragment } from 'react'

const SearchManufacturer = ({ manufacturer, setManufacturer }: setManufacturerProps) => {

    const [query, setQuery] = useState('')

    return (
        <div>
            <Combobox>
                <div className='relative w-full'>
                    <Combobox.Button className="absolute top-[14px]">
                        <Image
                            src="/car-logo.svg"
                            width={20}
                            height={20}
                            className='ml-4'
                            alt="car_logo"
                        />
                    </Combobox.Button>

                    <Combobox.Input
                        className="search-manufacturer__input"
                        placeholder='volkswagen'
                        displayValue={(manufacturer: string) => manufacturer}
                        onChange={(e) => setQuery(e.target.value)}
                    />

                    <Transition
                        as={Fragment}
                        Leave="transition ease-in duration-100"
                        LeaveFrom="opacity-100"
                        LeaveTo='opacity-0'

                    >

                    </Transition>


                </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacturer
