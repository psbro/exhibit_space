"use client"

import { useState } from "react";
import Image from "next/image";
import { CarCardProps } from "@/types";
import CustomButton from "./CustomButton";

interface carProps {
    car: CarCardProps
}

const CarCard = ({ car }: carProps) => {

    const { cityMPG, year, make, model, transmission, drive } = car;

    return (
        <div className="car-card group">
            <div className="car-card__content">
                <h2 className="card-card__content-titlr">
                    {make} {model}
                </h2>
            </div>
        </div>
    )
}

export default CarCard;
