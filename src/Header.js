import React from 'react'
import './Header.css'
import SearchBar from './SearchBar';

const Header = ({setQuery, query}) => {

  const onQuery = (quer) => {
    setQuery(quer)
  }

  return (
    <div className='header'>
      <h1>
        (N)everNote
      </h1>
      <SearchBar query={query} setQuery={onQuery}/>
    </div>
  )
}

export default Header
