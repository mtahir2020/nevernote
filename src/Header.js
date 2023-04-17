import React from 'react'
import './Header.css'
import SearchBar from './SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHippo } from '@fortawesome/free-solid-svg-icons'

const Header = ({setQuery, query}) => {

  const onQuery = (quer) => {
    setQuery(quer)
  }

  // const resetSearch = () => {
  //   setQuery('')
  // }

  return (
    < div className='header'>
      <h1>
        (N)everNote
        <FontAwesomeIcon style={{ marginLeft: '1rem', color: '#cbcace'}}icon={faHippo} />
      </h1>
      <SearchBar query={query} setQuery={onQuery}/>
    </div>
  )
}

export default Header
