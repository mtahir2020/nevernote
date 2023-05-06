import React, { Fragment } from 'react'
import './Header.css'
import SearchBar from './SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHippo } from '@fortawesome/free-solid-svg-icons'
import { useMediaQuery } from 'react-responsive';

const Header = ({setQuery, query}) => {

  const onQuery = (quer) => {
    setQuery(quer)
  }

  const isSmallScreen = useMediaQuery( {maxWidth: 600} )

  return (
  <Fragment>


    <div className='header'>
      <h1>
        (N)everNote
        <FontAwesomeIcon style={{ marginLeft: '1rem', color: '#cbcace'}} icon={faHippo}/>
      </h1>
      { !isSmallScreen && <SearchBar query={query} setQuery={onQuery}/> }
    </div>
    { isSmallScreen &&
    <div className='mobile-search-container'>
      <SearchBar query={query} setQuery={onQuery}/>
    </div> }

  </Fragment>
  )
}

export default Header
