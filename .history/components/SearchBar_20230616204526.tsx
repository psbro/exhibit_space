"use client"
import { useState } from "react"
import SearchManufacturer from "./SearchManufacturer"

const SearchBar = () => {

  const [manufaturer,setManufacturer] = useState('');

  const handleSearch = () => {

  }

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__items">
        <SearchManufacturer
        manufacturer = {manufaturer}
        se
        />
      </div>
    </form>
  )
}

export default SearchBar
