import { CarCardProps } from '@/types'
import React from 'react'

interface cardDetailsProps {
    isopen: boolean,
    closeModal: () => void,
    car: CarCardProps
}

const CardDetails = ({isopen}) => {
  return (
    <div>
      cardDetails
    </div>
  )
}

export default CardDetails
