"use client"
import { useState } from "react"
import SearchManufacturer from "./SearchManufacturer"

const SearchBar = () => {

  const [manufacturer,setManufacturer] = useState('');

  const handleSearch = () => {

  }

  const Search

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__items">
        <SearchManufacturer
        manufacturer = {manufacturer}
        setManufacturer = {setManufacturer}
        />
        <SearchButton/>
      </div>
    </form>
  )
}

export default SearchBar
