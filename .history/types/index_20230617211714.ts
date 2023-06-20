import { MouseEventHandler } from "react";

export interface customButtonProps {
    title: string,
    containerStyles?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>,
    btnType?: "button" | "submit";
}

export interface setManufacturerProps {
    manufacturer: string,
    setManufacturer: (manufacturer: string) => void;
}

export interface carProps {
    manufacturer: string,
    setManufacturer: (manufacturer: string) => void;
}