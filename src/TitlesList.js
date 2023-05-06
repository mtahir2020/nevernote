import React from 'react';
import Title from './Title.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './TitleList.css'
import Button from './Button.js'
import { useMediaQuery } from 'react-responsive';

const TitlesList = ({ showDeleteModal, setQuery, resetMemo, selectedNoteId, onRemovePerson, onModification, noteClicked, filteredUsers}) => {

  const isSmallScreen = useMediaQuery( {maxWidth: 600} )

  const onHandleClick = (user) => {
    // console.log(user);
    onRemovePerson(user)
  }

  const moddedData = (mod) => {
    // console.log(mod);
    onModification(mod)
  }

  const onNoteClick = (user) => {
    // console.log(user);
    noteClicked(user)
  }

  const wipeNote = () => {
    resetMemo()
  }

  const clearSearch = () => {
    setQuery('')
  }

  const filteredUserInfo = filteredUsers.map((user) => {
    return <Title
                key={user.id}
                id={user.id}
                title={user.title}
                onHandleClick={onHandleClick}
                handleModify={moddedData}
                onNoteClick={onNoteClick}
                selectedNoteId={selectedNoteId}
                timestamp={user.timestamp}
                showDeleteModal={showDeleteModal}
          />
  })


  return (

    <div className="left-panel">
        <div className='grey-side-bar' >

        <div className='title-panel'>
          {!isSmallScreen && <div className="icon-parent" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 42, width: 42}}>
            <FontAwesomeIcon className='add-note-icon' onClick={wipeNote} title="CREATE NEW POST" icon={faPlus} size="xl" />
          </div> }
        </div>
      </div>

      <div className="notes-panel">
        {filteredUsers.length > 0 ? filteredUserInfo : <div className='no-search-results'>
          <h2 style={{textAlign: 'center'}}>Search yielded no results..</h2>
          <div onClick={clearSearch} className='clear-search-list'>
            <Button> Clear Search</Button>
          </div>
        </div>}
      </div>
    </div>

  )
}

export default TitlesList
