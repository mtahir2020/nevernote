import React from 'react'
import './Header.css'
import SearchBar from './SearchBar';
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = ({setQuery, query}) => {

  const onQuery = (quer) => {
    setQuery(quer)
  }

  const resetSearch = () => {
    setQuery('')
  }

  return (
    <div className='header'>
      <h1>
        (N)everNote
        {/* <FontAwesomeIcon icon={icon({name: "fa-elephant"})} /> */}
        {/* <FontAwesomeIcon icon={solid("elephant")} /> */}
        {/* <FontAwesomeIcon icon={faElephant} /> */}
        {/* <FontAwesomeIcon icon={icon({solid("elephant")})} /> */}
      </h1>
      <div style={{width: '40%', display: 'flex', alignItems: 'center', padding: '0.75rem'}}>
      {query !== '' && <button type='button' style={{margin: 0, lineHeight: 'normal'}}onClick={resetSearch}>Clear Search</button>}
      <SearchBar query={query} setQuery={onQuery}/>

      </div>
    </div>
  )
}

export default Header
