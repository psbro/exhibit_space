"use client"

import { useState } from "react";
import Image from "next/image";
import { CarCardProps } from "@/types";
import CustomButton from "./CustomButton";
import { calculateCarRent } from "@/utils";

interface carProps {
    car: CarCardProps
}

const CarCard = ({ car }: carProps) => {

    const { cityMPG, year, make, model, transmission, drive } = car;

    const carRent = calculateCarRent(cityMPG, year)

    return (
        <div className="car-card group">

            <div className="car-card__content">
                <h2 className="card-card__content-title">
                    {make} {model}
                </h2>
            </div>

            <p className="flex mt-6 text-[32px] font-extrabold">
                <span className="self-start text-[14px] ">
                    {carRent}
                </span>
            </p>


        </div>
    )
}

export default CarCard;
