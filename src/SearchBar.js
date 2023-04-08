import React from 'react'
import './SearchBar.css'

const SearchBar = ({ query, setQuery }) => {

  const filterBySearch = (e) => {
    // Access input value
    const input = e.target.value
    setQuery(input)
  }

  return (
    <div className='search-container'>
      <input id='search' className="input" placeholder="Search note here" value={query} type="text" onChange={filterBySearch}/>
    </div>
  )
}

export default SearchBar
