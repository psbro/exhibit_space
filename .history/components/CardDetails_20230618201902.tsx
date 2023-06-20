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
            <Transition appear show={isopen} >

            </Transition>
        </>
    )
}

export default CardDetails
