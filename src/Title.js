import React, { useState, useEffect } from 'react'
import Button from './Button'
import classes from './Button.module.css'
import './TitleList.css'
import './Title.css'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Title = ({ onNoteClick, onHandleClick, id, timestamp, title, body }) => {

  const removeUser = (e) => {
    // console.log(e.currentTarget);
    onHandleClick({
      id: id,
      title: title,
      body: body
    })
    // resetMemo()
  }

  const getNoteDetails = (e) => {
    onNoteClick({
      id: id,
      title: title,
      body: body
    })
  }


  return (
    <div style={ {height: 100, borderBottom: '1px solid #ECECEC'} } className={`title`} onClick={getNoteDetails}>
      <div style={{display: 'flex', height: '60%', padding: '8px 4px', width: '100%', flexDirection: 'column'}}>
        <p style={{fontWeight: 500, padding: '0 8px', margin: 'unset'}}>{title}</p>
        <p style={{fontSize: '0.75rem', color: '#c2c2c4', padding: '0 8px'}}>{timestamp}</p>
      </div>
      <div className="note-actions" style={{display: 'flex', height: '40%', justifyContent: 'flex-start', alignItems: 'center'}}>
        <FontAwesomeIcon className="note-action" title="DELETE POST" onClick={removeUser} icon={icon({name: 'trash'})} />
      </div>
    </div>
  )
}

export default Title
