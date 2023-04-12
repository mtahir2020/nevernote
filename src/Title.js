import React, { useState, useEffect } from 'react'
import Button from './Button'
import classes from './Button.module.css'
import './TitleList.css'
import './Title.css'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Title = ({ onNoteClick, onHandleClick, id, title, body }) => {

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
    <div style={ {height: 90, borderBottom: '1px solid #ECECEC'} } className={`title`} onClick={getNoteDetails}>
      <div style={{display: 'flex', height: '60%', padding: '8px 4px', width: '100%'}}>
        {<p style={{fontWeight: 600, padding: '0 8px', margin: 'unset'}}>{title}</p>}
        {/* {<Button onClick={removeUser} className={classes.remove}>Remove</Button>} */}
      </div>
      <div className="note-actions" style={{display: 'flex', height: '40%', justifyContent: 'flex-start', alignItems: 'center'}}>
        <FontAwesomeIcon className="note-action" onClick={removeUser} icon={icon({name: 'trash'})} />
      </div>
    </div>
  )
}

export default Title
