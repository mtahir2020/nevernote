import React, { useState } from 'react';
import Title from './Title.js'

const TitlesList = ({ selectedNoteId, onRemovePerson, onModification, noteClicked, filteredUsers}) => {



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

  const filteredUserInfo = filteredUsers.map((user) => {
    return <Title
                key={user.id}
                id={user.id}
                title={user.title}
                onHandleClick={onHandleClick}
                handleModify={moddedData}
                onNoteClick={onNoteClick}
                selectedNoteId={selectedNoteId}
          />
  })


  return (
    <div style={{display: 'flex', width: '25%'}}>
      <div style={{backgroundColor: '#F8F8F8', width: '20%'}}></div>
      <div style={{overflow: 'auto', width: '80%'}}>{filteredUserInfo}</div>
    </div>
  )
}

export default TitlesList
