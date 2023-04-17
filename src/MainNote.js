import React, { useState, useEffect } from 'react'
import './MainNote.css'
import styles from './Button.module.css'
import { format } from 'date-fns'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const MainNote = ({ getTimeStamp, selectedNote, resetMemo, onModification, finalUserInfo }) => {

  const [note, setNote] = useState({id: '', title: '', body: ''})
  const [modifiable, setModifiable] = useState(false)

  // when selectedNote changes (held in App.js), if selectedNote exists, make that the 'note' held in state
  useEffect(() => {
    if (selectedNote !== undefined) {
      setNote(selectedNote)
    } else {
      setNote({id: '', title: '', body: ''})
    }
  }, [selectedNote])

  const mainNoteChange = (e) => {
    setModifiable(true)
    let newInput = e.target.value;
    setNote((oldNote) => {
      return {...oldNote, body: newInput }
    })
 }

//  on saving, if selectedNote exists, modify 'note', otherwise create it
  const onSave = () => {
    selectedNote ? onModification(note, note.body) : finalUserInfo(note)
    const readableStamp = format(new Date(Date.now()), 'dd/MM/yy')
    getTimeStamp(readableStamp)
    wipeNote()
  }

  const wipeNote = () => {
    setNote({id: '', title: '', body: ''})
    resetMemo()
    setModifiable(false)
  }

  const UpdateButton = () => {
    return (
      <button type='button' style={{marginRight: '0.5rem'}} onClick={onSave}>Update</button>
    )
  }

  return (
    <div className='main-note-area'>
      <div style={{display: 'flex', width: '100%', padding: '0 0.5rem', alignItems: 'center', minHeight: '3rem', justifyContent: 'space-between'}}>
        {(modifiable && selectedNote) && <UpdateButton />}
        {(!selectedNote && note.body !== '') && <button type='button' onClick={onSave}>Save note</button>}
        <p style={{color: '#757575'}}>{format(new Date(Date.now()), 'EEE do MMMM yyyy')}</p>
        {(selectedNote && note.body !== '') && <button className={styles['create-new-button']} type='button' onClick={wipeNote}>New note</button>}
      </div>
      <textarea className='textarea-note' onChange={mainNoteChange}
      placeholder="Title goes here...&#10;Type your note here.." value={note.body}></textarea>
    </div>
  )
}

export default MainNote
