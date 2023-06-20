"use client"
import { customButtonProps } from "@/types"
import Image from "next/image"

const CustomButton = ({ title, containerStyles, handleClick, btnType, textStyles, rightIcon }: customButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 `}>
        {title}
      </span>
    </button>
  )
}

export default CustomButton
