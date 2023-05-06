import React, { Fragment, useState, useEffect } from 'react'
import './MainNote.css'
import styles from './Button.module.css'
import { format } from 'date-fns'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const MainNote = ({ setQuery, showDeleteModal, selectedNote, resetMemo, onModification, finalUserInfo }) => {

  const [note, setNote] = useState({id: '', title: '', body: '', timestamp: ''})
  const [modifiable, setModifiable] = useState(false)

  // const [timerId, setTimerId] = useState(null)

  // when selectedNote changes (held in App.js), if selectedNote exists, make that the 'note' held in state
  // when selectedNote changes, the state of modifiable is lost and resets to false
  useEffect(() => {
    if (selectedNote !== undefined ) {
      setModifiable(false)
      setNote(selectedNote)
    }
    else {
      setNote({id: '', title: '', body: '', timestamp: ''})
      // mess with the search list here
    }
  }, [selectedNote])


  const mainNoteChange = (e) => {

    setModifiable(true)
    setQuery('')
    let newInput = e.target.value;
    if (newInput.split('\n')[0].length <= 25) {
      setNote((oldNote) => {
        return {...oldNote, body: newInput }
      })
    }

    else {
      // handleTitle(true)
      alert('Title should be max 25 characters. Press enter to start a new line.')
    }
 }

//  on saving, if selectedNote exists, modify 'note', otherwise create it
  const onSave = () => {
    selectedNote ? onModification(note, note.body) : finalUserInfo(note)
    wipeNote()
  }

  const wipeNote = () => {
    setNote({id: '', title: '', body: '', timestamp: ''})
    resetMemo()
    setModifiable(false)
  }

  const UpdateButton = () => {
    return (
      <button type='button' style={{marginRight: '0.5rem'}} onClick={onSave}>Update</button>
    )
  }

  const removePost = () => {
    // console.log('clicked')
    showDeleteModal()
    // alert('Press enter')
  }

  return (
    <Fragment>
    <div className='main-note-area'>
      <div className='note-buttons-date' style={{display: 'flex', width: '100%', padding: '0 0.5rem', alignItems: 'center', minHeight: '3rem', justifyContent: 'space-between'}}>
        <div>
          {/* only show updatebutton if there was a change */}
          {(modifiable && selectedNote && note.body !== '') && <UpdateButton />}
          {(selectedNote && note.body !== '') && <FontAwesomeIcon className="note-action-main" size="2xl" title="DELETE POST" onClick={removePost} icon={icon({name: 'trash'})} />}
          {(!selectedNote && /*(note &&*/ note.body !== '') && <button type='button' onClick={onSave}>Save note</button>}
        </div>
        <p style={{color: '#757575'}}>{format(new Date(Date.now()), 'EEE do MMMM yyyy')}</p>
        {(selectedNote && note.body !== '') && <button className={styles['create-new-button']} type='button' onClick={wipeNote}>New note</button>}
      </div>
      <textarea className='textarea-note' onChange={mainNoteChange}
      placeholder='Title your note&#10;Then press enter and start typing...' value={/*note &&*/ note.body}></textarea>
    </div>
    {/* } */}
    </Fragment>
  )
}

export default MainNote
