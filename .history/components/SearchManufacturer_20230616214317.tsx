"use client"
import { setManufacturerProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import { manufacturers } from '@/constants'
import Image from 'next/image'

import { useState, Fragment } from 'react'


const SearchManufacturer = ({ manufacturer, setManufacturer }: setManufacturerProps) => {

    const [query, setQuery] = useState('')

    const filteredManufacturers =
        query === ""
            ? manufacturers
            : manufacturers.filter((item) =>
                item
                    .toLowerCase()
                    .replace(/\s+/g, "")
                    .includes(query.toLowerCase().replace(/\s+/g, ""))
            );

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
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo='opacity-0'
                        afterLeave={() => setQuery('')}
                    >

                        <Combobox.Options>
                            {filteredManufacturers.length === 0 && query !== "" ? (
                                <Combobox.Option
                                 value={query}
                                 className="search-manufacturer"
                                >

                                </Combobox.Option>
                            )}
                        </Combobox.Options>

                    </Transition>


                </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacturer
