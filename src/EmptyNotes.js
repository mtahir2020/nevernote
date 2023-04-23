import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlus } from '@fortawesome/free-solid-svg-icons'

const EmptyNotes = ( ) => {


  return (
    <div style={{width: '35%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div style={{backgroundColor: '#F8F8F8', height: '100%', width: '20%', display: 'flex', justifyContent: 'center'}}>
      </div>
      <div style={{width: '80%', textAlign: 'center'}}>
        <h2>No notes to display</h2>
        <p>Start typing...</p>
      </div>
    </div>
  )
}

export default EmptyNotes
