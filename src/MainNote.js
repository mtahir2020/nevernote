import React, { useState, useEffect } from 'react'
import './MainNote.css'


const MainNote = ({ selectedNote, resetMemo, onModification, finalUserInfo }) => {

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
    wipeNote()
  }

  const wipeNote = () => {
    setNote({id: '', title: '', body: ''})
    resetMemo()
    setModifiable(false)
  }

  const UpdateButton = () => {
    return (
      <button type='button' onClick={onSave}>Update</button>
    )
  }

  return (
    <div className='main-note-area'>
      <div style={{display: 'flex', width: '100%'}}>
        {!modifiable && <button type='button' onClick={wipeNote}>Create new note</button>}
        {(modifiable && selectedNote) && <UpdateButton />}
        {!selectedNote && <button type='button' onClick={onSave}>Save note</button>}
      </div>
      <textarea className='textarea-note' onChange={mainNoteChange}
      placeholder="Title goes here...&#10;Type your note here.." value={note.body}></textarea>
    </div>
  )
}

export default MainNote
