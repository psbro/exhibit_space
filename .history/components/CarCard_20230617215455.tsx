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

                <span className="self-start text-[14px] font-semibold">
                    $
                </span>
                {54}

                <span className="self-end text-[14px] font-medium">
                    /day
                </span>
            </p>

            <div className="relative w-full h-40 my-3 object-contain">
                <Image src="/hero.png" alt="car_model" fill priority className="object-contain" />
            </div>

            <div className="relative flex w-full mt-2">
                <div className="flex group-hover:invisible w-full justify-between text-gray">
                    <div className="">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarCard;
