import { MouseEventHandler } from "react";

export interface customButtonProps {
    title: string,
    containerStyles?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>,
    btnType?: "button" | "submit";
    textStyles?: string,
    rightIcon?: string
}

export interface setManufacturerProps {
    manufacturer: string,
    setManufacturer: (manufacturer: string) => void;
}

export interface CarCardProps {
    model: string;
    make: string;
    mpg: number;
    transmission: string;
    year: number;
    drive: string;
    cityMPG: number;
}