import { CarCardProps } from '@/types'
import Image from 'next/image'
import { Fragment } from 'react'
import {}

interface cardDetailsProps {
    isopen: boolean,
    closeModal: () => void,
    car: CarCardProps
}

const CardDetails = ({ isopen, closeModal, car }: cardDetailsProps) => {
    return (
        <div>
            cardDetails
        </div>
    )
}

export default CardDetails
