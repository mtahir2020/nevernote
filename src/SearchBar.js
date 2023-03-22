import React, { useEffect, useState } from 'react'
import './SearchBar.css'

const SearchBar = ({ query, setQuery }) => {

  const filterBySearch = (e) => {
    // Access input value
    const input = e.target.value
    setQuery(input)
  }

  return (
    <div className='search-container'>
      <label htmlFor='search'><b>Search Users</b></label>
      <input id='search' className="input" value={query} type="text" onChange={filterBySearch}/>
    </div>
  )
}

export default SearchBar
