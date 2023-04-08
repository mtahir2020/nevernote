import React, { useState } from 'react';
import Title from './Title.js'

const TitlesList = ({ reOrder, onRemovePerson, onModification, noteClicked, filteredUsers}) => {

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

  const toReorder = (id) => {
    reOrder(id)
  }

  const filteredUserInfo = filteredUsers.map((user) => {
    const bodyLength = user.body.split(' ')[0].length;
    const titleChar = user.title[0];
    const bodyChar = user.body[0]
    const uniqueKey = `${Math.floor(Math.random() * bodyLength)}${titleChar || bodyChar}${Math.floor(Math.random() * bodyLength)}${bodyChar}${bodyLength}`
    return <Title
                key={uniqueKey}
                id={user.id}
                title={user.title}
                onHandleClick={onHandleClick}
                handleModify={moddedData}
                onNoteClick={onNoteClick}
                // listOfUsers={filteredUserInfo}
          />
  })


  // const filteredUserInfo = filteredUsers.map((user) => {
  //   const bodyLength = user.body.split(' ')[0].length;
  //   const titleChar = user.title[0];
  //   const bodyChar = user.body[0]
  //   const uniqueKey = `${Math.floor(Math.random() * bodyLength)}${titleChar || bodyChar}${Math.floor(Math.random() * bodyLength)}${bodyChar}${bodyLength}`
  //   return <Title
  //               key={uniqueKey}
  //               id={user.id}
  //               title={user.title}
  //               onHandleClick={onHandleClick}
  //               handleModify={moddedData}
  //               onNoteClick={onNoteClick}
  //               toReorder={toReorder}
  //               // listOfUsers={filteredUserInfo}
  //         />
  // })

  return (
    <div style={{display: 'flex', flexDirection: 'column', width: '25%', borderRight: '2px solid black'}}>
      {filteredUserInfo}
    </div>
  )
}

export default TitlesList
