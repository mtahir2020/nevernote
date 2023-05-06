import React from 'react'
// import Button from './Button'
// import classes from './Button.module.css'
import './TitleList.css'
import './Title.css'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Title = ({ showDeleteModal, onNoteClick, id, timestamp, title, body }) => {


  const getNoteDetails = (e) => {
    onNoteClick({
      id: id,
      title: title,
      body: body,
      timestamp: timestamp
    })
  }


  return (
    <div className='title' onClick={getNoteDetails}>
      <div className='note-text' >
        <p className='note-title-text' >{title}</p>
        <p class='note-timestamp-text' >{timestamp}</p>
      </div>
      <div className="note-actions" style={{display: 'flex', height: '40%', justifyContent: 'flex-start', alignItems: 'center'}}>
        {/* <FontAwesomeIcon className="note-action" title="DELETE POST" onClick={removeUser} size="lg" icon={icon({name: 'trash'})} /> */}
        <FontAwesomeIcon className="note-action" title="DELETE POST" onClick={showDeleteModal} size="lg" icon={icon({name: 'trash'})} />
      </div>
    </div>
  )
}

export default Title
