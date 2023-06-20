"use client"
import { useState } from "react"
import SearchManufacturer from "./SearchManufacturer"

const SearchBar = () => {

  const [manufaturer,setManu]

  const handleSearch = () => {

  }

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__items">
        <SearchManufacturer


        
        />
      </div>
    </form>
  )
}

export default SearchBar
