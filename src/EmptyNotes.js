import React from 'react'

const EmptyNotes = () => {
  return (
    <div style={{width: '25%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div style={{textAlign: 'center'}}>
        <h2>No notes to display</h2>
        <p>Start typing...</p>
      </div>
    </div>
  )
}

export default EmptyNotes
