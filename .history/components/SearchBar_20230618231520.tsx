"use client"
import { useState } from "react"
import SearchManufacturer from "./SearchManufacturer"
import Image from "next/image";

const SearchBar = () => {

  const [manufacturer, setManufacturer] = useState('');

  const handleSearch = () => {

  }

  const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="magnifying glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  }

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__items">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>

      <div className="searchbar__item">
        <Image
        src="/model-icon.png"
        />
      </div>
    </form>
  )
}

export default SearchBar
