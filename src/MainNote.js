import React, { useState, useEffect } from 'react'
import './MainNote.css'


const MainNote = ({ selectedNote, userData, resetMemo, onModification, finalUserInfo }) => {

  const [note, setNote] = useState({id: '', title: '', body: ''})

  // when selectedNote changes (held in App.js), if selectedNote exists, make that the 'note' held in state
  useEffect(() => {
    if (selectedNote) setNote(selectedNote)
  }, [selectedNote])

  const mainNoteChange = (e) => {
    let newInput = e.target.value;
    // setTimeout(() => {
    //   console.log('500 ms down');
    // }, 500)

    // when users types in a note, set state of 'note' with new input
    // is the error here?

    setNote((oldNote) => {
      return {...oldNote, body: newInput }
    })
 }

//  on saving, if selectedNote exists, modify 'note', otherwise create it
  const onSave = () => {
    selectedNote ? onModification(note, note.body) : finalUserInfo(note)
    wipeNote()
    // setNote({id: '', title: '', body: ''})
    // resetMemo({id: '', title: '', body: ''})
  }

  const wipeNote = () => {
    // console.log('state wiped');
    setNote({id: '', title: '', body: ''})
    resetMemo({id: '', title: '', body: ''})
  }

  return (
    <div className='main-note-area'>
      {/* {console.log(userData)} */}
      <button type='button' onClick={wipeNote}>Create new</button>
      <button type='button' onClick={onSave}>{selectedNote ? 'Update' : 'Create'}</button>
      <textarea className='textarea-note' onChange={mainNoteChange} placeholder="Type your note here.." value={note.body}></textarea>
    </div>
  )
}

export default MainNote

// if you open, modify, or save a note, it goes to the top of the list
// save already works
// open a note, get the object, and set it's id to the last one, but then another has to change?
