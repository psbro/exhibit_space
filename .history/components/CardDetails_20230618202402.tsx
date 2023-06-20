"use client"
import { CarCardProps } from '@/types'
import Image from 'next/image'
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

interface cardDetailsProps {
    isopen: boolean,
    closeModal: () => void,
    car: CarCardProps
}

const CardDetails = ({ isopen, closeModal, car }: cardDetailsProps) => {
    return (
        <>
            <Transition appear show={isopen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child>
                        <div>
                    </Transition.Child>
                </Dialog>
            </Transition>
        </>
    )
}

export default CardDetails
