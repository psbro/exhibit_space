"use client"

import { useState } from "react";
import Image from "next/image";
import { CarCardProps } from "@/types";
import CustomButton from "./CustomButton";

interface carProps {
    car: CarCardProps
}

const CarCard = ({ car } : carProps) => {

    const {cityMPG , year , make , model , transmission }

    return (
        <div>
            carCard
        </div>
    )
}

export default CarCard;
