import React from 'react'
import './SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

const SearchBar = ({ query, setQuery }) => {

  const filterBySearch = (e) => {
    // Access input value
    const input = e.target.value
    setQuery(input)
  }

  // do the onClick on fontAwesome element
  const resetSearch = () => {
    setQuery('')
  }

  return (
    <div className='search-container'>
      {query !== '' && <div onClick={resetSearch} className='clear-icon'>
        <FontAwesomeIcon icon={faCircleXmark} size="xl"/>
      </div>}
      <input id='search' className="input" placeholder="Search title here" value={query} type="text" onChange={filterBySearch}/>
    </div>
  )
}

export default SearchBar
