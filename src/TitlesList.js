import React from 'react';
import Title from './Title.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './TitleList.css'

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

  // console.log(timeStamp);

  const filteredUserInfo = filteredUsers.map((user) => {
    return <Title
                key={user.id}
                id={user.id}
                title={user.title}
                onHandleClick={onHandleClick}
                handleModify={moddedData}
                onNoteClick={onNoteClick}
                selectedNoteId={selectedNoteId}
                timestamp={user.timestamp}
          />
  })


  return (
    <div style={{display: 'flex', width: '25%'}}>
      <div style={{backgroundColor: '#F8F8F8', width: '20%', display: 'flex', justifyContent: 'center'}}>
        <div style={{height: 100, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div className="icon-parent" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 42, width: 42}}>
            <FontAwesomeIcon className='add-note-icon' title="CREATE NEW POST" icon={faPlus} size="xl" />
          </div>
        </div>
      </div>
      <div style={{overflow: 'auto', width: '80%'}}>{filteredUserInfo}</div>
    </div>
  )
}

export default TitlesList
